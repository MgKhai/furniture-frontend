import * as React from "react";
import { Link, useParams } from "react-router";
import { products } from "@/data/products.ts";
import { Button } from "@/components/ui/button.tsx";
import { Icons } from "@/components/ui/icons.tsx";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductCard from "@/components/products/ProductCard.tsx";
import { formatPrice } from "@/lib/utils.ts";
import Rating from "@/components/products/Rating.tsx";
import AddToFavourite from "@/components/products/AddToFavourite.tsx";
import AddToCartForm from "@/components/products/AddToCartForm.tsx";

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <div className="container mx-auto my-6 px-4 lg:px-0">
      <Button variant="outline" asChild>
        <Link to="/product">
          {" "}
          <Icons.arrowLeft aria-hidden="true" /> All Products{" "}
        </Link>
      </Button>
      <section className="gap5 mt-6 mb-15 flex flex-col md:flex-row md:gap-12">
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
                  <img
                    src={image}
                    alt={product.name}
                    className="size-full rounded-md object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <Separator className="my-5 md:hidden" />
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="line-clamp-1 text-2xl font-bold">{product?.name}</h2>
            {product?.price && (
              <p className="text-muted-foreground text-base">
                {formatPrice(Number(product.price))}
              </p>
            )}
          </div>
          <Separator />
          <p className="text-muted-foreground text-base">
            {product?.inventory} in stock
          </p>
          <div>
            <div className="flex flex-row items-center justify-between">
              <Rating rating={Number(product?.rating)} />
              {/*<AddToFavourite productId={string(product?.id)} rating={number(product?.rating)} />*/}
              <AddToFavourite />
            </div>
            <div className="my-5">
              <AddToCartForm canBuy={product?.status === "active"} />
            </div>
            <Separator className="my-5 md:hidden" />
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  {product?.description ??
                    "No description is available for this product."}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section>
        <h2 className="my-6 line-clamp-1 text-2xl font-bold">
          More Products From Furniture Shop
        </h2>

        {/*Other Product Types Scroll Area*/}
        <ScrollArea className="w-full rounded-md pb-4 whitespace-nowrap">
          <div className="flex w-max gap-4">
            <ProductCard products={products.slice(0, 4)} className="min-w-77" />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}

export default ProductDetail;
