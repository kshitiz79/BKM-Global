/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // This generates folders with index.html inside them
  images: {
    unoptimized: true, // Disable the default image optimization
  },
};

export default nextConfig;
