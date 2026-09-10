import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supabase.fastduka.co.ke",
      },
    ],
  },
};

export default nextConfig;
