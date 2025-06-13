"use client";

import { useRouter } from "next/navigation";
import { BlogWithSlug } from "@/lib/blog";
import { IconArrowLeft } from "@tabler/icons-react";
import { Container } from "./container";
import Image from "next/image";
import { Logo } from "./Logo";
import Link from "next/link";
import { format } from "date-fns";

export function BlogLayout({
  blog,
  children,
}: {
  blog: BlogWithSlug;
  children: React.ReactNode;
}) {
  // Use the same gradient logic as blog cards for consistency
  const gradients = [
    "bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900",
    "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900", 
    "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900",
    "bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900",
    "bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900",
  ];

  const gradientIndex = blog.title.length % gradients.length;
  const selectedGradient = gradients[gradientIndex];

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="flex justify-between items-center px-2 py-8">
        <Link href="/blog" className="flex space-x-2 items-center">
          <IconArrowLeft className="w-4 h-4 text-muted dark:text-muted-dark" />
          <span className="text-sm text-muted dark:text-muted-dark">Back</span>
        </Link>
        <div className="flex space-x-2 items-center">
          <div className="flex space-x-2 items-center ">
            <Image
              src={blog.author.src}
              alt={blog.author.name}
              width={20}
              height={20}
              className="rounded-full h-5 w-5"
            />
            <p className="text-sm font-normal text-muted dark:text-muted-dark">
              {blog.author.name}
            </p>
          </div>
          <div className="h-5 rounded-lg w-0.5 bg-neutral-200 dark:bg-neutral-700" />
          <time dateTime={blog.date} className="flex items-center text-base ">
            <span className="text-muted dark:text-muted-dark text-sm">
              {format(new Date(blog.date), "MMMM dd, yyyy")}
            </span>
          </time>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className={`h-40 md:h-96 w-full rounded-3xl ${selectedGradient} flex items-center justify-center p-8`}>
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article className="pb-8">
            <div
              className="mt-8 prose prose-sm dark:prose-invert"
              data-mdx-content
            >
              {children}
            </div>
          </article>
        </div>
      </div>
    </Container>
  );
}
