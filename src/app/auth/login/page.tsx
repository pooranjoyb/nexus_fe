"use client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useAuth } from "@/hooks/useAuth";
import { useLoginMutation } from "@/app/api/mutations/auth";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters." }),
});

export default function Login() {
  const router = useRouter();
  const loginMutation = useLoginMutation();
  const { setUser } = useAuth();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (payload: z.infer<typeof formSchema>) => {
    loginMutation.mutate(payload, {
      onSuccess: (data) => {
        setUser(data);
        router.push("/dashboard");
      },
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <div className="radial1"></div>
        <div className="radial2"></div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full h-screen flex flex-col justify-center"
        >
          <div className="border-[.5px] shadow-sm rounded-lg border-slate-10 p-6 space-y-6">
            <div className="scroll-m-20 text-xl font-bold tracking-tight">
              Login
              <div className="text-sm font-semibold text-muted-foreground">
                Enter your credentials to dive into Nexus.
              </div>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="nexususer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="secret"
                      type="password"
                      autoComplete="on"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={loginMutation?.isPending}
              type="submit"
              className="w-full"
            >
              Login
            </Button>
            <div className="text-sm text-center">
              Don&apos; have an account?{" "}
              <Link href="/auth/signup" className="text-blue-700 underline">
                Signup
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
