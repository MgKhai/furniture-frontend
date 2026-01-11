import {useState} from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Spinner } from "@/components/ui/spinner.tsx";
import { z } from "zod"

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

const emailSchema = z.object({
    email: z.email({
         message: "Please enter a valid email address",
    }),
})


export default function NewsLetterForm() {
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        },
    })


    function onSubmit(values: z.infer<typeof emailSchema>) {
        console.log(values)
        setLoading(true);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full" autoComplete="off">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="relative w-full">
                            <FormLabel className="sr-only">Username</FormLabel>
                            <FormControl className="">
                                <Input placeholder="Tyler@gmail.com" {...field}  className="pr-9"/>
                            </FormControl>
                            <FormMessage />
                            <Button type="submit" size="icon" className="absolute right-1 size-7 top-1">
                                {loading ? (
                                    <Spinner />
                                    ): (
                                    <Icons.paperPlane className="size-3" aria-hidden="true"/>
                                    )}
                                <span className="sr-only">Join newsletter</span>
                            </Button>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}