import { useLoaderData, Link } from "react-router";
import { Icons } from "@/components/ui/icons.tsx";
import { Button } from "@/components/ui/button";
import RichTextRenderer from "@/components/blogs/RichTextRenderer.tsx";
import { onePostQuery, postQuery } from "@/api/query";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { Post, Tag } from "@/types";

const imageUrl = import.meta.env.VITE_IMAGE_URL;

function BlogDetail() {
  // const {postId} = useParams();
  //   const post = posts.find((post) => post.id === postId);
  //   const { data: postsData } = useSuspenseQuery(onePostQuery());
  const { postId } = useLoaderData();
  const { data: postsData } = useSuspenseQuery(postQuery("?limit=6"));
  const { data: postDetail } = useSuspenseQuery(onePostQuery(+postId));

  return (
    <div className="container mx-auto my-6 px-4 lg:px-0">
      <Button variant="outline" asChild>
        <Link to="/blog">
          {" "}
          <Icons.arrowLeft aria-hidden="true" /> All Posts{" "}
        </Link>
      </Button>
      <section className="flex flex-col items-start lg:flex-row lg:justify-between">
        <section className="w-full lg:basis-3/4">
          {postDetail ? (
            <>
              <div className="my-6 flex flex-col gap-4">
                <h2 className="text-3xl font-extrabold">{postDetail.title}</h2>
                <div>
                  <span>By </span>
                  <span className="font-semibold">{postDetail.author}</span>
                  <span> on </span>
                  <span className="font-semibold">{postDetail.updated_at}</span>
                </div>
                <h3 className="text-medium">{postDetail.content}</h3>
              </div>
              <img
                src={imageUrl + postDetail.image}
                alt={postDetail.title}
                className="w-full rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <RichTextRenderer content={postDetail.body} className="my-6" />
              <div className="flex gap-3">
                {postDetail.tags.map((tag: Tag) => (
                  <Button variant="secondary" key={tag.name}>
                    {tag.name}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-muted-foreground mt-8 mb-16 text-center text-3xl font-bold lg:mt-24">
              No post found !
            </p>
          )}
        </section>
        <section className="lg:ml-15 lg:basis-1/4">
          <div className="my-6 flex items-center gap-2 text-base font-semibold">
            <Icons.layers /> <h3>Other Blog Posts</h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
            {postsData &&
              postsData.posts.map((post: Post) => (
                <Link
                  to={`/blog/${post.id}`}
                  key={post.id}
                  className="flex items-center gap-2"
                >
                  <div className="w-1/4">
                    <img
                      src={imageUrl + post.image}
                      alt={post.title}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="text-muted-foreground w-3/4 text-sm font-semibold">
                    <p className="line-clamp-2">{post.content}</p>
                    <i>...see more</i>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogDetail;
