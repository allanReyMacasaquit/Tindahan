import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	devIndicators: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
			},
		],
		unoptimized: true, // ⛔ Disable next/image optimization to avoid "sharp" issues
	},
};

export default nextConfig;
