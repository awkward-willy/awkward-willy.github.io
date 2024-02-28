/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  assetPrefix: process.env.NODE_ENV !== "production" ? undefined : "/",
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV !== "production" ? false : true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
        port: "",
        pathname: "/badge/**",
      },
    ],
  },
};

export default nextConfig;
