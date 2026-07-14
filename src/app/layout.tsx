import type { Metadata, Viewport } from "next";

import "@/styles/globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StructuredData } from "@/components/layout/structured-data";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { EditionLoader } from "@/components/motion/edition-loader";
import { PageTransition } from "@/components/motion/page-transition";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),

  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s — ${siteConfig.name}`,
  },

  description: siteConfig.description,
  keywords: [...siteConfig.keywords],

  authors: [
    {
      name: siteConfig.name,
      url: absoluteUrl(),
    },
  ],

  creator: siteConfig.name,
  category: "technology",

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl(),
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: "The Manish Singh Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },

  alternates: {
    canonical: absoluteUrl(),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#e2dedb",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#161615",
    },
  ],
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Explicit fallback for browsers that aggressively cache favicons */}
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          sizes="any"
        />

        <link
          rel="shortcut icon"
          href="/favicon.svg"
          type="image/svg+xml"
        />

        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js')",
          }}
        />
      </head>

      <body className="bg-background font-editorial text-foreground antialiased">
        <ThemeProvider>
          <StructuredData />

          <EditionLoader />
          <CustomCursor />
          <SmoothScroll />
          <ScrollProgress />

          <SiteHeader />

          <PageTransition>
            {children}
          </PageTransition>

          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}