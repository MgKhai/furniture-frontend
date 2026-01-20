import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type {FilterItem} from "@/types";

interface FilterProps {
    filterLists: FilterItem[]
    title: string;
}

function ProductFilter({filterLists, title}: FilterProps) {
    return (
        <div className="ml-3 mb-5 lg:ml-0">
            <h3 className="mt-1 mb-3 lg:ml-0">{title}</h3>
            <div className="flex flex-col gap-5">
                {filterLists.map((filterList) => (
                    <div className="flex items-center gap-3">
                        <Checkbox id={`${filterList.id} + ${filterList.label} `} />
                        <Label htmlFor={`${filterList.id} + ${filterList.label} `} >{filterList.label}</Label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductFilter;
