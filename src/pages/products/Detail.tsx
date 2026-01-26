import * as React from "react"
import {Link, useParams} from "react-router";
import {products} from "@/data/products.ts";
import {Button} from "@/components/ui/button.tsx";
import {Icons} from "@/components/ui/icons.tsx";
import { Separator } from "@/components/ui/separator"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import ProductCard from "@/components/products/ProductCard.tsx";
import {formatPrice} from "@/lib/utils.ts";
import Rating from "@/components/products/Rating.tsx";
import AddToFavourite from "@/components/products/AddToFavourite.tsx";
import AddToCartForm from "@/components/products/AddToCartForm.tsx";

function ProductDetail(){
    const {productId} = useParams();
    const product = products.find(product => product.id === productId);

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className="container mx-auto px-4 lg:px-0 my-6">
            <Button variant="outline" asChild >
                <Link to="/product"> <Icons.arrowLeft aria-hidden="true" /> All Products </Link>
            </Button>
            <section className="flex flex-col md:flex-row mt-6 mb-15 md:gap-12 gap5">

                {/*Carousel Product Image*/}
                <div className="md:w-1/2">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {product?.images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <img src={image} alt={product.name} className="size-full rounded-md object-cover" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                </div>

                <Separator className="md:hidden my-6" />
                <div className="md:w-1/2 w-full flex flex-col gap-4 ">
                    <div className="flex flex-col gap-2">
                        <h2 className="line-clamp-1 text-2xl font-bold">{product?.name}</h2>
                        {product?.price && (
                            <p className="text-base text-muted-foreground">{formatPrice(Number(product.price))}</p>
                        )}
                    </div>
                    <Separator />
                    <p className="text-base text-muted-foreground">{product?.inventory} in stock</p>
                    <div>
                        <div className="flex flex-row justify-between items-center">
                            <Rating rating={Number(product?.rating)}  />
                            {/*<AddToFavourite productId={string(product?.id)} rating={number(product?.rating)} />*/}
                            <AddToFavourite />
                        </div>
                        <div className="my-5">
                            <AddToCartForm canBuy={product?.status === "active"} />
                        </div>
                    </div>
                </div>



            </section>

            <section>
                <h2 className="line-clamp-1 text-2xl font-bold my-6">More Products From Furniture Shop</h2>

                {/*Other Product Types Scroll Area*/}
                <ScrollArea className="w-full rounded-md pb-4 whitespace-nowrap">
                    <div className="flex gap-4 w-max">
                        <ProductCard products={products.slice(0,4)} className="min-w-77"  />
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </section>
        </div>
    );
}

export default ProductDetail;