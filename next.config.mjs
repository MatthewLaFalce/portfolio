/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    domains: ["media2.dev.to","dev-to-uploads.s3.amazonaws.com"],
  },
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
