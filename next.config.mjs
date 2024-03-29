/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: false,
      fileName: false
    }
  },
  images: {
    remotePatterns: [
      {
        hostname: 'loremflickr.com'
      },
      { hostname: 'picsum.photos' },
      { hostname: 'images.unsplash.com' }
    ]
  }
};

export default nextConfig;
