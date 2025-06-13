import { Link } from "next-view-transitions";
import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { BlogWithSlug } from "@/lib/blog";

export const BlogCard = ({ blog }: { blog: BlogWithSlug }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  // Create different gradient combinations for variety
  const gradients = [
    "bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800",
    "bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800", 
    "bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-800",
    "bg-gradient-to-br from-violet-600 via-purple-600 to-violet-800",
    "bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-800",
  ];

  // Use blog title length to determine gradient (consistent per blog)
  const gradientIndex = blog.title.length % gradients.length;
  const selectedGradient = gradients[gradientIndex];

  return (
    <Link
      className="shadow-derek rounded-3xl border dark:border-neutral-800 w-full bg-white dark:bg-neutral-900  overflow-hidden  hover:scale-[1.02] transition duration-200"
      href={`/blog/${blog.slug}`}
    >
      <div className={`h-52 flex items-center justify-center p-6 ${selectedGradient}`}>
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
          <p className="text-sm font-normal text-muted">{blog.author.name}</p>
        </div>
        <p className="text-left text-sm mt-2 text-muted">
          {truncate(blog.description, 100)}
        </p>
      </div>
    </Link>
  );
};
