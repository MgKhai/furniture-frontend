import type { Post } from "@/types";
import { Link } from "react-router";

interface BlogCardProps {
  posts: Post[];
}

const imageUrl = import.meta.env.VITE_IMAGE_URL;

function BlogCard({ posts }: BlogCardProps) {
  return (
    <div className="grid grid-cols-1 px-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-10 lg:px-0">
      {posts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id} className="mb-5">
          <img
            src={imageUrl + post.image}
            alt={post.title}
            className="w-full rounded-2xl"
          />
          <h3 className="mt-2 ml-4 line-clamp-1 font-semibold">{post.title}</h3>
          <div className="mt-2 ml-4 text-sm">
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

export default BlogCard;
