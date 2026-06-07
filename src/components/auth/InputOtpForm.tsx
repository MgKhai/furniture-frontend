import { RefreshCwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
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
import z from "zod";
import { Link, useActionData, useNavigation, useSubmit } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  otp: z.string().min(6, "Your one time password must be 6 characters."),
});

export function InputOTPForm() {
  const submit = useSubmit();
  const navigate = useNavigation();
  const actionData = useActionData();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submit(values, { method: "post", action: "/register/otp" });
  }
  return (
    <Card className="mx-auto max-w-md border-0 shadow-none">
      <CardHeader>
        <CardTitle>Verify your login</CardTitle>
        <CardDescription>
          Enter the verification code we sent to your phone number:{" "}
          <span className="font-medium">09xxxxxxxx</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          {actionData?.error && (
            <Alert variant="destructive" className="mb-2 max-w-md">
              <AlertCircleIcon />
              <AlertTitle>Verify OTP failed</AlertTitle>
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
                  name="otp"
                  render={({ field }) => (
                    <FormItem className="relative w-full">
                      <div className="flex items-center justify-between">
                        <FormLabel htmlFor="otp-verification">
                          Verification code
                        </FormLabel>
                        <Button variant="outline" size="xs">
                          <RefreshCwIcon />
                          Resend Code
                        </Button>
                      </div>
                      <FormControl className="">
                        <InputOTP
                          maxLength={6}
                          id="otp-verification"
                          required
                          pattern={REGEXP_ONLY_DIGITS}
                          {...field}
                        >
                          <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator className="mx-6" />
                          <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FieldDescription>
                  <Link to="#">
                    I no longer have access to this phone number.
                  </Link>
                </FieldDescription>
                <Button type="submit">
                  {navigate.state === "submitting" ? "Verifying" : "Verify"}
                </Button>
                <div className="text-muted-foreground text-sm">
                  Having trouble signing in?{" "}
                  <Link
                    to="#"
                    className="hover:text-primary underline underline-offset-4 transition-colors"
                  >
                    Contact support
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </Field>
      </CardContent>
    </Card>
  );
}
