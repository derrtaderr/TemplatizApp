import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Templatiz - The All-in-One Content OS",
  description:
    "Templatize is your all-in-one Content OS. Discover top-performing posts, create templates, and publish with AI-powered tools designed to save time and scale your brand across platforms.",
  metadataBase: new URL('https://templatiz.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://templatiz.io',
    siteName: 'Templatiz',
    title: 'Templatiz - The All-in-One Content OS',
    description: 'Templatize is your all-in-one Content OS. Discover top-performing posts, create templates, and publish with AI-powered tools designed to save time and scale your brand across platforms.',
    images: [
      {
        url: 'https://templatiz.io/banner.png',
        width: 1200,
        height: 630,
        alt: 'Templatiz - Content Operating System',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templatiz - The All-in-One Content OS',
    description: 'Templatize is your all-in-one Content OS. Discover top-performing posts, create templates, and publish with AI-powered tools designed to save time and scale your brand across platforms.',
    images: ['https://templatiz.io/banner.png'],
    creator: '@templatiz',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-16x16.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#da532c',
    'theme-color': '#ffffff'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            GeistSans.className,
            "bg-white dark:bg-black antialiased h-full w-full"
          )}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
