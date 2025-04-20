/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // 允許任何來源
      },
    ],
  },
};

export default nextConfig;
