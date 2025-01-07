/** @type {import('next').NextConfig} */

const nextConfig = {
    crossOrigin: 'anonymous',
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://interior-abrasivos.onrender.com/:path*',
          },
        ]
      },
}

export default nextConfig;
