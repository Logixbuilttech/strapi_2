/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠️ use only if you're sure
  },
  images: {
    domains: ["localhost", "e83ef2399875.ngrok-free.app"], // Add any other domains here
  },
};

export default nextConfig;
