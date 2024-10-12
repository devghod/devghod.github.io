/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // loading: './pages/loading',
  // document: './pages/_document'
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
