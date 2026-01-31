import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";
import {Link} from "react-router";
import {Separator} from "@/components/ui/separator.tsx";
import {cartItems} from "@/data/carts.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import CartItem from "@/components/carts/CartItem.tsx";
import {formatPrice} from "@/lib/utils.ts";



function CartSheet() {
    const itemCount = 4;
    const amountTotal = 190;
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative" aria-label="Open cart">
                    <Badge variant="destructive" className="absolute size-5 -top-2 -right-1 justify-center">{itemCount}</Badge>
                    <ShoppingCart />
                </Button>
            </SheetTrigger>
                {cartItems.length > 0 ? (
                    <div>
                        <SheetContent className="w-full md:max-w-lg">
                            <SheetHeader>
                                <SheetTitle>Cart - {itemCount}</SheetTitle>
                            </SheetHeader>
                            <ScrollArea className="h-full w-full">
                                <div className="px-4">
                                    <Separator />
                                    {cartItems.map((cart) => (
                                        <CartItem cart={cart} />
                                    ))}
                                </div>
                            </ScrollArea>
                            <SheetFooter>
                                <Separator />
                                <div className="flex flex-col gap-1 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Taxes</span>
                                        <span>Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Total</span>
                                        <span>{formatPrice(amountTotal.toFixed(2))}</span>
                                    </div>
                                </div>
                                <Button type="submit" asChild>
                                    <Link to="/checkout" aria-label="Checkout">Continue to checkout</Link>
                                </Button>
                                <SheetClose asChild>
                                    <Button variant="outline">Close</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </div>
                ):(
                    <div className="grid place-items-center my-auto gap-4">
                        <div><ShoppingCart size="70" /></div>
                        <div className="text-muted-foreground text-2xl">Your cart is empty.</div>
                    </div>
                )}
        </Sheet>
    );
}

export default CartSheet;