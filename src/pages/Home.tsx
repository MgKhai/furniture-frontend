import { Link } from "react-router";
import Couch from "@/data/images/couch.png"
import {Button} from "@/components/ui/button.tsx";
import {CarouselCard} from "@/components/products/CarouselCard.tsx";
import BlogCard from "@/components/blogs/BlogCard.tsx";
import {posts} from "@/data/posts.ts";
import {products} from "@/data/products.ts";
import ProductCard from "@/components/products/ProductCard.tsx";


const Title = ({title, href, sideText}:{ title: string, href: string, sideText: string }) => (
    <div className="flex flex-col md:flex-row justify-start md:justify-between gap-3">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link to={href} className="text-muted-foreground font-semibold underline">{sideText}</Link>
    </div>
);

const simplePosts = posts.slice(0,3);
const simpleProducts = products.slice(0,4);

function Home() {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between items-start">

                    {/*Text Section*/}
                    <div className="flex flex-col text-center lg:text-left mt-8 lg:mt-20 gap-4 lg:gap-6 lg:w-2/5">
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-[#3b5d50]">Modern Interior Design Studio</h1>
                        <p className="text-[#3b5d50]">Furniture is an essential component of any living space, providing
                            functionality, comfort, and aesthetic appeal.
                        </p>
                        <div className="flex gap-2 items-center justify-center lg:justify-start">
                            <Button asChild className="px-6 py-6 rounded-full bg-orange-300 text-base font-bold">
                                <Link to="#">Shop Now</Link>
                            </Button>
                            <Button asChild variant="outline" className="text-[#3b5d50] px-6 py-6 rounded-full text-base font-bold">
                                <Link to="#">Explore</Link>
                            </Button>
                        </div>
                    </div>

                    {/*Image Section*/}
                    <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
                </div>

                {/*Carousel Card*/}
                <div className="my-4">
                    <CarouselCard products={products} />
                </div>

                {/*Product Section*/}
                <div className="mt-15 mb-10 mx-3 md:mx-0">
                    <Title title="Featured Products" href="/product" sideText="View All Posts" />
                </div>
                <ProductCard products={simpleProducts} />

                {/*Blog Section*/}
                <div className="mt-15 mb-10 mx-3 md:mx-0">
                    <Title title="Recent Blogs" href="/blog" sideText="View All Posts" />
                </div>
                <BlogCard posts={simplePosts} />

            </div>
        </>
    );
}

export default Home;
