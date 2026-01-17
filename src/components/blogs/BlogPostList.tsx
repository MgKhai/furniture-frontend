import type {Post} from "../../types";
import {Link} from "react-router";

interface PostProps {
    posts: Post[];
}

function BlogPostList({posts}: PostProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-10 px-3 lg:px-0">
            {posts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="mb-5">
                    <img src={post.image} alt={post.title} className="w-full rounded-2xl" />
                    <h2 className="line-clamp-1 text-xl font-extrabold " >{post.title}</h2>
                    <h3 className="line-clamp-3  font-base font-medium mt-2">{post.content}</h3>
                    <div className="mt-2 text-sm mb-5 lg:mb-0">
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

export default BlogPostList;