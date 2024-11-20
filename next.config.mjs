/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/CV',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
