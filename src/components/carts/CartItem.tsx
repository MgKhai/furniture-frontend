import type {Cart} from "@/types";
import {Separator} from "@/components/ui/separator.tsx";
import {formatPrice} from "@/lib/utils.ts";
import EditTable from "@/components/carts/EditTable.tsx";

interface CartProps {
    cart: Cart;
}

function CartItem({cart}: CartProps) {
    return (
        <div className="flex flex-col gap-2 pt-4">
            <div className="flex gap-3">
                <img src={cart.image.url} alt={cart.id} className="size-17 rounded-xl object-cover" />
                <div className="text-xs flex flex-col gap-1.5">
                    <span className="font-medium line-clamp-1">{cart.name}</span>
                    <span className="text-muted-foreground">{formatPrice(cart.price)} x {formatPrice(cart.quantity)} = {formatPrice(cart.price*cart.quantity)}</span>
                    <span className="text-muted-foreground line-clamp-1 capitalize">{`${cart.category} / ${cart.subcategory}`}</span>
                </div>
            </div>
            <div>
                <EditTable />
            </div>
            <Separator className="mt-2" />
        </div>
    );
}

export default CartItem;