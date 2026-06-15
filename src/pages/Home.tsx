import { Link, useLoaderData } from "react-router";
import Couch from "@/data/images/couch.png";
import { Button } from "@/components/ui/button.tsx";
import { CarouselCard } from "@/components/products/CarouselCard.tsx";
import BlogCard from "@/components/blogs/BlogCard.tsx";
import ProductCard from "@/components/products/ProductCard.tsx";

const Title = ({
  title,
  href,
  sideText,
}: {
  title: string;
  href: string;
  sideText: string;
}) => (
  <div className="flex flex-col justify-start gap-3 md:flex-row md:justify-between">
    <h1 className="text-2xl font-bold">{title}</h1>
    <Link to={href} className="text-muted-foreground font-semibold underline">
      {sideText}
    </Link>
  </div>
);

function Home() {
  const { productsData, postsData } = useLoaderData();
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-start lg:flex-row lg:justify-between">
          {/*Text Section*/}
          <div className="mt-8 flex flex-col gap-4 text-center lg:mt-20 lg:w-2/5 lg:gap-6 lg:text-left">
            <h1 className="text-4xl font-extrabold text-[#3b5d50] lg:text-6xl">
              Modern Interior Design Studio
            </h1>
            <p className="text-[#3b5d50]">
              Furniture is an essential component of any living space, providing
              functionality, comfort, and aesthetic appeal.
            </p>
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Button
                asChild
                className="rounded-full bg-orange-300 px-6 py-6 text-base font-bold"
              >
                <Link to="#">Shop Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-6 text-base font-bold text-[#3b5d50]"
              >
                <Link to="#">Explore</Link>
              </Button>
            </div>
          </div>

          {/*Image Section*/}
          <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
        </div>

        {/*Carousel Card*/}
        <div className="my-4">
          <CarouselCard products={productsData.products} />
        </div>

        {/*Product Section*/}
        <div className="mx-3 mt-15 mb-10 md:mx-0">
          <Title
            title="Featured Products"
            href="/product"
            sideText="View All Posts"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 px-3 md:grid-cols-2 lg:grid-cols-4 lg:px-0">
          <ProductCard products={productsData.products.slice(0, 4)} />
        </div>

        {/*Blog Section*/}
        <div className="mx-3 mt-15 mb-10 md:mx-0">
          <Title title="Recent Blogs" href="/blog" sideText="View All Posts" />
        </div>
        <BlogCard posts={postsData.posts} />
      </div>
    </>
  );
}

export default Home;
