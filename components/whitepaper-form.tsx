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
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Button } from "./button";
import { Logo } from "./Logo";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your full name",
    })
    .min(1, "Please enter your full name"),
  email: z
    .string({
      required_error: "Please enter email",
    })
    .email("Please enter valid email")
    .min(1, "Please enter email"),
  company: z
    .string()
    .optional(),
  newsletter: z.boolean().default(false),
});

export type WhitepaperFormData = z.infer<typeof formSchema>;

export function WhitepaperForm() {
  const form = useForm<WhitepaperFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      newsletter: false,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(values: WhitepaperFormData) {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, you would:
      // 1. Send the form data to your backend
      // 2. Add the user to your newsletter if they opted in
      // 3. Generate/send the whitepaper download link
      
      setSubmitSuccess(true);
      form.reset();
    } catch (e) {
      console.error('Error submitting form:', e);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="flex items-center w-full justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md text-center">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
            Download Ready!
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            Thank you for your interest in EvalOS. Your whitepaper download will begin shortly.
          </p>
          <Button 
            className="mt-8"
            onClick={() => {
              // In a real implementation, this would trigger the download
              window.open('/path-to-whitepaper.pdf', '_blank');
            }}
          >
            Download Whitepaper
          </Button>
          <Button 
            variant="outline"
            className="mt-4 ml-4"
            onClick={() => {
              setSubmitSuccess(false);
              form.reset();
            }}
          >
            Download Another Copy
          </Button>
        </div>
      </div>
    );
  }

  const socials = [
    {
      title: "twitter",
      href: "https://twitter.com/templatiz",
      icon: (
        <IconBrandX className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
    {
      title: "github",
      href: "https://github.com/derrtaderr/TemplatizApp",
      icon: (
        <IconBrandGithub className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
    {
      title: "linkedin",
      href: "https://linkedin.com/company/templatiz",
      icon: (
        <IconBrandLinkedin className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
  ];

  return (
    <Form {...form}>
      <div className="flex relative z-20 items-center w-full justify-center px-4 py-4 lg:py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
              Download the EvalOS Whitepaper
            </h1>
            <p className="mt-4 text-muted dark:text-muted-dark text-sm max-w-sm">
              Learn how Templatiz predicts platform changes before they happen.
            </p>
          </div>

          <div className="py-10">
            <div>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                      >
                        Full Name
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <input
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                      >
                        Email
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                      >
                        Company (optional)
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <input
                            id="company"
                            type="text"
                            placeholder="Your company"
                            className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <label className="text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark">
                          Subscribe to the Templatiz newsletter
                        </label>
                      </div>
                    </FormItem>
                  )}
                />

                {error && (
                  <p className="text-sm text-red-500 dark:text-red-400">
                    {error}
                  </p>
                )}

                <div>
                  <Button 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Download Whitepaper'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 py-4">
            {socials.map((social) => (
              <Link href={social.href} key={social.title} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Form>
  );
} 