import type { Post } from "../../types";
import { Link } from "react-router";

interface PostProps {
  posts: Post[];
}

const imageUrl = import.meta.env.VITE_IMAGE_URL;

function BlogPostList({ posts }: PostProps) {
  return (
    <div className="grid grid-cols-1 px-3 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-10 lg:px-0">
      {posts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id} className="mb-5">
          <img
            src={imageUrl + post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl"
          />
          <h2 className="line-clamp-1 text-xl font-extrabold">{post.title}</h2>
          <h3 className="font-base mt-2 line-clamp-3 font-medium">
            {post.content}
          </h3>
          <div className="mt-2 mb-5 text-sm lg:mb-0">
            <span>By </span>
            <span className="font-semibold">{post.author.fullName}</span>
            <span> on </span>
            <span className="font-semibold">{post.updated_at}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogPostList;
