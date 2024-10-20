// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cloud.appwrite.io',
            },
            {
                protocol: 'https',
                hostname: 'media2.giphy.com',
            }
        ]
    }
};

export default nextConfig;

