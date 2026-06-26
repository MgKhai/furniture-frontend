import { QueryClient, keepPreviousData } from "@tanstack/react-query";
import { api } from ".";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 min
      // retry: 2
    },
  },
});

// const products = await api.get("user/products?limits=8");
// const posts = await api.get("user/posts/infinite?limits=3");
const fetchProducts = (q?: string) =>
  api.get(`user/products${q ?? ""}`).then((res) => res.data);

const fetchPosts = (q?: string) =>
  api.get(`user/posts/infinite${q ?? ""}`).then((res) => res.data);

export const productQuery = (q?: string) => ({
  queryKey: ["products", q],
  queryFn: () => fetchProducts(q),
});

export const postQuery = (q?: string) => ({
  queryKey: ["posts", q],
  queryFn: () => fetchPosts(q),
});

const fetchInfinitePosts = async ({ pageParam = null }) => {
  const query = pageParam ? `?limits=6&cursor=${pageParam}` : "?limits=6";
  const response = await api.get(`user/posts/infinite${query}`);
  return response.data;
};

export const postInfiniteQuery = () => ({
  queryKey: ["posts", "infinite"],
  queryFn: fetchInfinitePosts,
  initialPageParam: null, // start with no cursor
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor ?? undefined,
  // getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor ?? undefined,
  // maxPages: 5, // Limit to 5 pages
});

const fetchOnePost = async (id: number) => {
  const post = await api.get(`user/posts/${id}`).then((res) => res.data);
  if (!post) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return post.post;
};

export const onePostQuery = (id: number) => ({
  queryKey: ["posts", "detail", id],
  queryFn: () => fetchOnePost(id),
});

const fetchCategoryType = async () =>
  api.get("user/filter-type").then((res) => res.data);

export const categoryTypeQuery = () => ({
  queryKey: ["category", "type"],
  queryFn: fetchCategoryType,
});

const fetchInfiniteProducts = async ({
  pageParam = null,
  categories = null,
  types = null,
}: {
  pageParam?: number | null;
  categories: string | null;
  types: string | null;
}) => {
  let query = pageParam ? `?limits=9&cursor=${pageParam}` : "?limits=9";

  if (categories) {
    query += `&category=${categories}`;
  }

  if (types) {
    query += `&type=${types}`;
  }

  const response = await api.get(`user/products${query}`);
  return response.data;
};

export const productInfiniteQuery = (
  categories: string | null = null,
  types: string | null = null,
) => ({
  queryKey: [
    "products",
    "infinite",
    categories ?? undefined,
    types ?? undefined,
  ],
  queryFn: ({ pageParam }: { pageParam?: number | null | undefined }) =>
    fetchInfiniteProducts({ pageParam, categories, types }),
  placeHolderData: keepPreviousData,
  initialPageParam: null, // start with no cursor
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor ?? undefined,
  // getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor ?? undefined,
  // maxPages: 5, // Limit to 5 pages
});
