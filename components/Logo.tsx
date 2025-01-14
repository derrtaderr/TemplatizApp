"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.ComponentPropsWithoutRef<"div"> {
  showText?: boolean;
  imageWidth?: number;
  imageHeight?: number;
}

export const Logo = ({ 
  className, 
  showText = true, 
  imageWidth = 24,
  imageHeight = 20,
  ...props 
}: LogoProps) => {
  return (
    <div className={cn("relative z-20 flex items-center justify-center", className)} {...props}>
      <Link
        href="/"
        className="flex items-center justify-center"
      >
        <Image 
          src="/Templatiz Logo 1.png"
          alt="Templatiz Logo"
          width={imageWidth}
          height={imageHeight}
        />
        {showText && <span className="font-medium text-black dark:text-white ml-2">Templatiz</span>}
      </Link>
    </div>
  );
};
