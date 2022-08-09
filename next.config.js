/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    images: {
        domains: ["images.unsplash.com"],
        loader: "akamai",
        path: "/",
    },
};

module.exports = nextConfig;
