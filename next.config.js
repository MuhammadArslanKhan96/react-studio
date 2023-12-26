/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["https://pixabay.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pixabay.com",
            },
        ],
    },
    transpilePackages: [
        "antd",
        "rc-util",
        // "@babel/runtime",
        "@ant-design/icons",
        "@ant-design/icons-svg",
        "rc-pagination",
        "rc-picker",
        "rc-tree",
        "rc-table",
    ],
    output: "standalone",
};

module.exports = nextConfig;
