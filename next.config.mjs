/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
    ],
    remotePatterns: [
      {
        hostname: 'daisyui.com',
      },
    ],
  },
};

export default nextConfig;
