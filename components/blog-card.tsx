import { Link } from "next-view-transitions";
import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { BlogWithSlug } from "@/lib/blog";

export const BlogCard = ({ blog }: { blog: BlogWithSlug }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <Link
      className="shadow-derek rounded-3xl border dark:border-neutral-800 w-full bg-white dark:bg-neutral-900  overflow-hidden  hover:scale-[1.02] transition duration-200"
      href={`/blog/${blog.slug}`}
    >
      <div className="h-52 flex items-center justify-center p-6 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        <h3 className="text-white text-xl md:text-2xl font-bold text-center leading-tight">
          <Balancer>{blog.title}</Balancer>
        </h3>
      </div>
      <div className="p-4 md:p-8 bg-white dark:bg-neutral-900">
        <div className="flex space-x-2 items-center  mb-2">
          <Image
            src={blog.author.src}
            alt={blog.author.name}
            width={20}
            height={20}
            className="rounded-full h-5 w-5"
          />
          <p className="text-sm font-normal text-muted dark:text-muted-dark">{blog.author.name}</p>
        </div>
        <p className="text-left text-sm mt-2 text-muted dark:text-muted-dark">
          {truncate(blog.description, 100)}
        </p>
      </div>
    </Link>
  );
};
