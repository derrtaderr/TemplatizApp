"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image 
        src="/Templatiz logo.png"
        alt="Templatiz Logo"
        width={24}
        height={20}
        className="dark:invert"
      />
      <span className="font-medium text-black dark:text-white">Templatiz</span>
    </Link>
  );
};
