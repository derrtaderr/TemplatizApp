"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { Logo } from "./Logo";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name",
    })
    .min(1, "Please enter your name"),
  email: z
    .string({
      required_error: "Please enter email",
    })
    .email("Please enter valid email")
    .min(1, "Please enter email"),
});

export type WaitlistUser = z.infer<typeof formSchema>;

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<WaitlistUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: WaitlistUser) {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!supabase) {
        throw new Error('Unable to connect to database. Please try again later.');
      }

      const { data, error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          {
            name: values.name,
            email: values.email,
            created_at: new Date().toISOString(),
          }
        ])
        .select();

      if (supabaseError) throw supabaseError;
      
      console.log('Inserted data:', data);
      setIsSuccess(true);
      form.reset();
    } catch (e: any) {
      console.error('Detailed error:', e);
      setError(e?.message || 'Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex items-center w-full justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md text-center relative z-20">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
            Thank you for joining!
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            We&apos;re excited to have you on board. We&apos;ll notify you when the beta launches.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <div className="flex items-center w-full justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md relative z-20">
          <div>
            <div className="flex">
              <Logo />
            </div>
          </div>

          <div className="mt-10">
            <div>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                        >
                          Full name
                        </label>
                        <FormControl>
                          <div className="mt-2">
                            <input
                              id="name"
                              type="name"
                              placeholder="Full Name"
                              className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                        >
                          Email address
                        </label>
                        <FormControl>
                          <div className="mt-2">
                            <input
                              id="email"
                              type="email"
                              placeholder="Email Address"
                              className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    {error}
                  </p>
                )}

                <div>
                  <Button 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing up...' : 'Sign Up'}
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-10">
              <p className="text-neutral-600 dark:text-neutral-400 text-sm text-center mt-8">
                By clicking on sign up, you agree to our{" "}
                <Link
                  href="#"
                  className="text-neutral-500 dark:text-neutral-300"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-neutral-500 dark:text-neutral-300"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}