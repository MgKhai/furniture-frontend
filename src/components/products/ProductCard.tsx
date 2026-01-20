import type {Product} from "@/types";
import { Link } from "react-router";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {formatPrice} from "@/lib/utils.ts";

interface ProductProps {
    products: Product[];
}

function ProductCard({products}: ProductProps) {
    return (
        <>
            {products.map((product) => (
                <div className="">
                    <Card className="w-full overflow-hidden p-0">
                        <Link to={`/product/${product.id}`}>
                            <CardHeader className="p-0">
                                <AspectRatio ratio={1} className="bg-muted rounded-t-lg">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="size-full object-cover "
                                        loading="lazy"
                                    />
                                </AspectRatio>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                                <CardDescription className="line-clamp-1">
                                    {formatPrice(product.price)}
                                    {product.discount > 0 && (
                                        <span className="ml-2 font-extralight line-through">
                                            {formatPrice(product.discount)}
                                        </span>
                                    )}
                                </CardDescription>
                            </CardContent>
                        </Link>
                        <CardFooter className="mb-5">
                            <Link to="#" className="w-full">
                                {product.status === "sold" ? (
                                    <Button size="sm" disabled={true} aria-label="Sold Out" className="w-full">
                                        Sold out
                                    </Button>
                                ):(
                                    <Button size="sm"  className="w-full bg-[#3b5d50] text-white">
                                        <Icons.plus /> Add To Cart
                                    </Button>
                                )}
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </>
    );
}

export default ProductCard;