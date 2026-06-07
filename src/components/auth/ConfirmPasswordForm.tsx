import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FieldDescription, FieldGroup } from "@/components/ui/field";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Link, useActionData, useNavigation, useSubmit } from "react-router";
import { Icons } from "../ui/icons";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(8, "Password must be at most 8 characters long")
    .regex(/^\d+$/, "Password must contain only digits"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(8, "Password must be at most 8 characters long")
    .regex(/^\d+$/, "Password must contain only digits"),
});

export function ConfirmPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const submit = useSubmit();
  const navigate = useNavigation();
  const actionData = useActionData();
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submit(values, { method: "post", action: "/register/confirm-password" });
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <Link to="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex size-8 items-center justify-center rounded-md">
              <Icons.logo className="size-8" aria-hidden="true" />
            </div>
            <span className="sr-only">Furniture Shop</span>
          </Link>
          <h1 className="text-xl font-bold">Please confirm password</h1>
          <FieldDescription>
            Passwords must be 8 characters and contain only digits.
          </FieldDescription>
        </div>
        {actionData?.error && (
          <Alert variant="destructive" className="mb-2 max-w-md">
            <AlertCircleIcon />
            <AlertTitle>Sign up failed</AlertTitle>
            <AlertDescription>{actionData.message}</AlertDescription>
          </Alert>
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full"
            autoComplete="off"
          >
            <div className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-end">
                      <FormLabel className="text-sm">Password</FormLabel>
                    </div>

                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="********"
                          type={showPassword ? "text" : "password"}
                          inputMode="numeric"
                          className="pr-10"
                          {...field}
                        />
                      </FormControl>

                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute top-0 right-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-end">
                      <FormLabel className="text-sm">
                        Confirm Password
                      </FormLabel>
                    </div>

                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="********"
                          type={showPassword ? "text" : "password"}
                          inputMode="numeric"
                          className="pr-10"
                          {...field}
                        />
                      </FormControl>

                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute top-0 right-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-2">
                {navigate.state === "submitting" ? "Signing up..." : "Confirm"}
              </Button>
            </div>
          </form>
        </Form>
      </FieldGroup>
    </div>
  );
}
