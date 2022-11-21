/**
 * BEGIN
 */

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
};

export default nextConfig;

/**
 * END
 */
