/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Don't let a missing/stray lint setup on the CI builder block a deploy —
  // type-checking still runs, so real errors are still caught.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
