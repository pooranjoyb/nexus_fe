"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/app/api/mutations/auth";
import { z } from "zod";
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

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email." }),
  username: z
    .string()
    .min(3, { message: "Password must be at least 3 characters." }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters." }),
});

export default function Signup() {
  const router = useRouter();
  const registerMutation = useRegisterMutation();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (payload: z.infer<typeof formSchema>) => {
    registerMutation.mutate(payload, {
      onSuccess: () => {
        router.push("/auth/login");
      },
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="radial1"></div>
      <div className="radial2"></div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full h-screen flex flex-col justify-center"
        >
          <div className="border-[.5px] shadow-sm rounded-lg border-slate-10 p-6 space-y-6">
            <div className="scroll-m-20 text-xl font-bold tracking-tight">
              Signup
              <div className="text-sm font-semibold text-muted-foreground">
                Dive into Nexus to reach beyond limits.
              </div>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="bisleripandey" {...field} />
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
                    <Input type="password" autoComplete="on" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Signup
            </Button>
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue-700 underline">
                Login
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
