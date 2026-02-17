import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path((?!api|_next|southbound|southboundsips|favicon).*)",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
