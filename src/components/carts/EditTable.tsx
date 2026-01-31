import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {cn} from "@/lib/utils.ts"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/ui/icons"
import { toast } from "sonner"

const quantitySchema = z.object({
    quantity: z.coerce.number().min(0).default(1),
});


type QuantityForm = z.infer<typeof quantitySchema>;

export default function EditTable() {
    const form = useForm<QuantityForm>({
        resolver: zodResolver(quantitySchema),
        defaultValues: {
            quantity:  1,
        },
    });


    function onSubmit(values: QuantityForm) {
        console.log(values.quantity);
        toast.success("Product is added to the cart successfully.");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row justify-between max-w-full">
                <div className="flex items-center">
                    <Button type="button" variant="outline" size="icon" className="size-8 shrink-0 rounded-r-none">
                        <Icons.minus className="size-3" aria-hidden={true} />
                        <span className="sr-only">Remove one item</span>
                    </Button>
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem className="space-y-0">
                                <FormLabel className="sr-only">Quantity</FormLabel>
                                <FormControl className="">
                                    <Input type="number" inputMode="numeric" min={0} {...field} className="h-8 w-15 rounded-none border-x-0"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="button" variant="outline" size="icon" className="size-8 shrink-0 rounded-l-none">
                        <Icons.plus className="size-3" aria-hidden={true} />
                        <span className="sr-only">Add one item</span>
                    </Button>
                </div>

                <div className="flex items-center gap-3">
                    <Button size="sm" variant="outline" aria-label="Delete cart item">
                        <Icons.trash aria-hidden="true" />
                        <span className="sr-only">Delete item</span>
                    </Button>
                </div>
            </form>
        </Form>
    )
}