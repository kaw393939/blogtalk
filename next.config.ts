import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/blogtalk",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
