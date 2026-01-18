import {useParams, Link} from "react-router";
import {posts} from '@/data/posts.ts';
import {Icons} from "@/components/ui/icons.tsx";
import {Button} from "@/components/ui/button";
import RichTextRenderer from "@/components/blogs/RichTextRenderer.tsx";

function BlogDetail() {
    const {postId} = useParams();
    const post = posts.find(post => post.id === postId);

    return (
        <div className="container mx-auto px-4 lg:px-0 my-6">
            <Button variant="outline" asChild >
                <Link to="/blog"> <Icons.arrowLeft aria-hidden="true" /> All Posts </Link>
            </Button>
            <section className=" flex flex-col lg:flex-row lg:justify-between items-start">
                <section className="lg:basis-3/4 w-full">
                    {post ? (
                        <>
                            <div className="flex flex-col gap-4 my-6">
                                <h2 className="text-3xl font-extrabold ">{post.title}</h2>
                                <div>
                                    <span>By </span>
                                    <span className="font-semibold">{post.author}</span>
                                    <span> on </span>
                                    <span className="font-semibold">{post.updated_at}</span>
                                </div>
                                <h3 className="text-medium">{post.content}</h3>
                            </div>
                            <img src={post.image} alt={post.title} className="w-full rounded-xl" />
                            <RichTextRenderer content={post.body} className="my-6" />
                            <div className="flex gap-3">
                                {post.tags.map((tag) => (
                                    <Button variant="secondary">{tag}</Button>
                                ))}
                            </div>
                        </>
                        ) : (
                        <p className=" mb-16 mt-8 text-center text-3xl font-bold text-muted-foreground lg:mt-24">No post found !</p>
                    )}
                </section>
                <section className="lg:basis-1/4 lg:ml-15">
                    <div className="flex items-center gap-2 my-6 text-base font-semibold">
                        <Icons.layers /> <h3>Other Blog Posts</h3>
                    </div>
                    <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-5">
                        {posts.map((post) => (
                            <Link to={`/blog/${post.id}`} key={post.id} className="flex items-center gap-2">
                                <div className="w-1/4">
                                    <img src={post.image} alt={post.title} className="rounded-lg" />
                                </div>
                                <div className="w-3/4 text-sm font-semibold text-muted-foreground">
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