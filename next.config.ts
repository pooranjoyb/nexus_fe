import type { NextConfig } from "next";
import { API_BASE_URL } from "@/helpers/config/keys.conf";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_BASE_URL}/:path*`
      }
    ]
  }
};

export default nextConfig;
