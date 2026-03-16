/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export for hosting on GitHub Pages
  output: 'export',
  // Optional: Change links `/about` to `/about/` and emit `/about/index.html`
  // trailingSlash: true,
  images: {
    unoptimized: true, // Needed since server-based image optimization doesn't work in static exports
  },
};

export default nextConfig;
