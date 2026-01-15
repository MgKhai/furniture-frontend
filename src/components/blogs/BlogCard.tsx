import type {Post} from "@/types";
import {Link} from "react-router";

interface BlogCardProps {
    posts: Post[];
}

function BlogCard({posts} : BlogCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-10 px-3 lg:px-0">
            {posts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="mb-5">
                    <img src={post.image} alt={post.title} className="w-full rounded-2xl" />
                    <h3 className="line-clamp-1 ml-4 font-semibold mt-2">{post.title}</h3>
                    <div className="ml-4 mt-2 text-sm">
                        <span>By </span>
                        <span className="font-semibold">{post.author}</span>
                        <span> on </span>
                        <span className="font-semibold">{post.updated_at}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BlogCard;