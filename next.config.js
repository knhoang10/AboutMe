/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site's home is www.kevinhoang.dev. The old Vercel address redirects there, path and all,
  // so the two never compete in search as duplicates. Preview deploys use other hosts and are untouched.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'about-me-omega.vercel.app' }],
        destination: 'https://www.kevinhoang.dev/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
