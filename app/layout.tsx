import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Define the JSON-LD schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Templatiz',
  url: 'https://templatiz.io',
  logo: 'https://templatiz.io/Templatiz Logo 1.png',
  description: 'Discover how our content operating system can help you create, schedule, and grow your online presence efficiently.',
  sameAs: [
    'https://twitter.com/templatiz',
    'https://linkedin.com/company/templatiz',
    'https://github.com/derrtaderr/TemplatizApp'
  ]
};

export const metadata: Metadata = {
  title: "Templatiz - Transform Your Content Creation",
  description:
    "Discover how our content operating system can help you create, schedule, and grow your online presence efficiently.",
  metadataBase: new URL('https://templatiz.io'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://templatiz.io',
    siteName: 'Templatiz',
    title: 'Templatiz - Transform Your Content Creation',
    description: 'Discover how our content operating system can help you create, schedule, and grow your online presence efficiently.',
    images: [
      {
        url: '/hero.png',
        width: 1920,
        height: 1080,
        alt: 'Templatiz - Content Operating System',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Templatiz - Transform Your Content Creation',
    description: 'Discover how our content operating system can help you create, schedule, and grow your online presence efficiently.',
    images: ['/hero.png'],
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
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
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
