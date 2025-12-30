/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "export",
	env: {
		dir: '/',
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.vercel.app',
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
			},
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: '**.medium.com',
			},
		],
	},
}

module.exports = nextConfig