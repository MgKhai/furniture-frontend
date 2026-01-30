import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {Icons} from "@/components/ui/icons.tsx";
import {Link} from "react-router";

export function RegisterForm({
                              className,
                              ...props
                          }: React.ComponentProps<"div">) {
    return (
        <div>
            <Link to="/" className="fixed top-6 left-8 flex items-center text-lg font-bold traking-tigh text-foreground/80 hover:text-foreground transition-colors">
                <Icons.logo className="size-6 mr-2 " aria-hidden="true" />
                <span>Furniture</span>
            </Link>
            <div className={cn("flex flex-col gap-6", className)} {...props}>
                <Card>
                    <CardHeader className="text-start">
                        <CardTitle className="text-xl">Register Form</CardTitle>
                        <CardDescription>
                            Enter your phone number below to create a new account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <FieldGroup>

                                <Field>
                                    <FieldLabel htmlFor="email">Phone</FieldLabel>
                                    <Input
                                        id="phone"
                                        type="text"
                                        placeholder="09xxxxxxxxx"
                                        required
                                    />
                                </Field>
                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                    </div>
                                    <Input id="password" type="password" required />
                                </Field>
                                <Field>
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password">Confirm Password </FieldLabel>
                                    </div>
                                    <Input id="password" type="password" required />
                                </Field>
                                <Field>
                                    <Button type="submit">Sign up</Button>
                                    <FieldDescription className="text-center">
                                        Don&apos;t have an account? <Link to="/login">Login</Link>
                                    </FieldDescription>
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
                <FieldDescription className="px-6 text-center">
                    By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                    and <a href="#">Privacy Policy</a>.
                </FieldDescription>
            </div>
        </div>
    )
}
