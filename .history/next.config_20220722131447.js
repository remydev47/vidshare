/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "file-uploads.teachablecdn.com",
      "lh3.googleusercontent.com"
  ],
  }
}

module.exports = nextConfig
