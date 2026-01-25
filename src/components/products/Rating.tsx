import {Icons} from "@/components/ui/icons";
import {cn} from "@/lib/utils.ts"
interface RatingProps {
    rating: number;
}

function Rating({rating}: RatingProps) {
    return (
        <div className="flex flex-row gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Icons.starFilled key={i} className={cn("size-4", rating >= i+1 ? "text-yellow-500":"text-muted-foreground" )} />
            ))}
        </div>);
}

export default Rating;