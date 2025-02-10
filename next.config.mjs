/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    unoptimized: true,
    domains: ["media2.dev.to","dev-to-uploads.s3.amazonaws.com"],
  },
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
