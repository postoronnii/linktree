/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'pbs.twimg.com',
      'media.istockphoto.com',
      'play-lh.googleusercontent.com',
      'res.cloudinary.com',
    ],
  },
}

module.exports = nextConfig
