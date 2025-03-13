"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
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
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});


export default function Signup() {

  const router = useRouter();
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      console.log("signup Logic")
    };
  return (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-screen flex flex-col justify-center">
          <div className="border-[.5px] shadow-sm rounded-lg border-slate-10 p-6 space-y-6">
            <div className="scroll-m-20 text-xl font-bold tracking-tight">
              Signup
              <div className="text-sm font-semibold text-muted-foreground">Dive into Nexus to reach beyond limits.</div>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
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
            <Button type="submit" className="w-full">Signup</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
