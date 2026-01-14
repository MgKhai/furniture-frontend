import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {Link} from "react-router"

import { CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import type {Product} from "@/types";

interface ProductProps {
    products: Product[];
}

export function CarouselCard({products}: ProductProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {products.map((product) => (
                    <CarouselItem key={product.id} className="lg:basis-1/3">
                            <CardContent>
                                <div className="flex items-center justify-start gap-3">
                                    <img src={product.images[0]} alt={product.name} className="size-28 xl:size-25" />
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-sm font-bold line-clamp-1">{product.name}</h3>
                                        <p className="text-sm line-clamp-2 text-gray-600 mr-1">{product.description}</p>
                                        <Link to={`/products/${product.id}`} className="text-sm font-semibold text-[#3b5d50] hover:underline">Read More</Link>
                                    </div>
                                </div>
                            </CardContent>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="hidden lg:block">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    )
}
