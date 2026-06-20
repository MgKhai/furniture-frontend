import { QueryClient } from "@tanstack/react-query";
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
