"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
      required_error: "Please enter your name",
    })
    .min(1, "Please enter your name"),
  email: z
    .string({
      required_error: "Please enter email",
    })
    .email("Please enter valid email")
    .min(1, "Please enter email"),
  company: z
    .string({
      required_error: "Please enter your company's name",
    })
    .min(1, "Please enter your company's name"),
  message: z
    .string({
      required_error: "Please enter your message",
    })
    .min(1, "Please enter your message"),
});

export type ContactFormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormData) {
    try {
      console.log("submitted form", values);
      // TODO: Implement form submission
    } catch (e) {
      console.error("Error submitting form:", e);
    }
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
              Contact Us
            </h1>
            <p className="mt-4 text-muted dark:text-muted-dark text-sm max-w-sm">
              Have questions about Templatiz? Want to learn more about our content operating system? We are here to help.
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
                            type="name"
                            placeholder="Your name"
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
                        Email address
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
                        Company
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <input
                            id="company"
                            type="company"
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                      >
                        Message
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <textarea
                            rows={5}
                            id="message"
                            placeholder="Tell us how we can help you streamline your content creation"
                            className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Button className="w-full">Send Message</Button>
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
