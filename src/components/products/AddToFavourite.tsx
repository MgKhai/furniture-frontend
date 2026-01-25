import {Icons} from "@/components/ui/icons.tsx";
import {Button } from "@/components/ui/button.tsx";
// import * as React from "react";
// import {cn} from "@/lib/utils.ts";
//
//
// interface FavouriteProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     productId: string;
//     rating: number;
// }
//
// function AddToFavourite({productId, rating, className, ...props}: FavouriteProp) {
//     return (
//         <div>
//             <Button variant="secondary" size="icon" className={cn("size-8 shrink-0", className)} {...props} ><Icons.heart className="4"/></Button>
//         </div>
//     );
// }

// export default AddToFavourite;

function AddToFavourite() {
    return (
        <div>
            <Button variant="secondary" size="icon" ><Icons.heart className="4"/></Button>
        </div>
    );
}

export default AddToFavourite;