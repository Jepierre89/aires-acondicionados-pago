/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/payments/es',
        permanent: false,
      },
      {
        source: '/payments',
        destination: '/payments/es',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
