/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kuankoshi.com",
      },
      {
        protocol: "https",
        hostname: "api.kuankoshi.com",
      },
      {
        protocol: "https",
        hostname: "inf.fjg.mybluehost.me", // ← 加入這個
      },
    ],
  },
};

export default nextConfig;
