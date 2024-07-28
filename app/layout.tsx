import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Script from "next/script";
import React, { Suspense } from "react";
import Loader from "@/components/Loader";
import dynamic from "next/dynamic";

const Navbar = dynamic((): any => import("@/components/Navbar"), {
  loading: () => <h1>Loading....</h1>,
});
const Footer = dynamic((): any => import("@/components/Footer"), {
  loading: () => <h1>Loading....</h1>,
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <Script
          src="/assets/scripts/lang-config.js"
          strategy="beforeInteractive"
          defer
        />
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
          defer
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
          defer
        />
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased !w-full",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Suspense fallback={<Loader />}>
            <div className="flex flex-col h-fit relative gap-10 !w-full">
              <div className="min-h-screen !w-full">
                <Navbar />
                {children}
              </div>
              <Footer />
            </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
