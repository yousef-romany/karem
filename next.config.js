/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  exclude: ["**/media/**", "**/docs/**", "**/dev/**"],
  experimental: {
    optimizePackageImports: [
      "@nextui-org/accordion",
      "@nextui-org/button",
      "@nextui-org/card",
      "@nextui-org/code",
      "@nextui-org/dropdown",
      "@nextui-org/image",
      "@nextui-org/input",
      "@nextui-org/kbd",
      "@nextui-org/link",
      "@nextui-org/modal",
      "@nextui-org/navbar",
      "@nextui-org/select",
      "@nextui-org/skeleton",
      "@nextui-org/snippet",
      "@nextui-org/switch",
      "@nextui-org/system",
      "@nextui-org/table",
      "@nextui-org/tabs",
      "@nextui-org/theme",
      "react-icons",
      "antd",
      "react-intersection-observer",
      "tailwindcss",
      
    ],
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(nextConfig);
