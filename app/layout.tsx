import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Roboto } from 'next/font/google'
const robto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


import { Providers } from "./providers";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Script from "next/script";
import React, { Suspense } from "react";
import Loader from "@/components/Loader";
const NavbarComponent = dynamic(() => import("@/components/NavbarComponent"), {
  loading: () => <h1>loading ....</h1>,
  ssr: false
});
const FooterComponent = dynamic(() => import("@/components/FooterComponent"), {
  loading: () => <h1>loading ....</h1>,
  ssr: false
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
    <html className={robto.className} suppressHydrationWarning lang="en">
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
          strategy="beforeInteractive"
          defer
        />
        {/* <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
          data-use-service-core
          defer
        /> */}
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
                <NavbarComponent />
                {children}
              </div>
              <FooterComponent />
            </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
