import { useInfiniteQuery } from "@tanstack/react-query";
import { postInfiniteQuery } from "@/api/query.ts";
import BlogPostList from "@/components/blogs/BlogPostList.tsx";
import { Button } from "@/components/ui/button";

function Blog() {
  const {
    status,
    data,
    error,

    isFetching,
    isFetchingNextPage,
    //   isFetchingPreviousPage,

    isFetchNextPageError,
    //   isFetchPreviousPageError,

    fetchNextPage,
    //   fetchPreviousPage,

    hasNextPage,
    //   hasPreviousPage,
  } = useInfiniteQuery(postInfiniteQuery());

  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];
  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <div className="container mx-auto">
      <h1 className="mt-6 mb-7 text-center text-2xl font-bold md:text-left">
        Latest Blog Posts
      </h1>
      <BlogPostList posts={allPosts} />
      <div className="mb-3 text-center">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchNextPageError || isFetchingNextPage}
          variant={!hasNextPage ? "ghost" : "secondary"}
        >
          {isFetching
            ? "Loading..."
            : hasNextPage
              ? "Load More"
              : "No more posts"}
        </Button>
      </div>
      <div>
        {isFetching && !isFetchingNextPage ? "Background Updating" : null}
      </div>
    </div>
  );
}

export default Blog;
