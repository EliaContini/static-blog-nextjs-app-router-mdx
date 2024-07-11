import WithMDX from "@next/mdx";

const withMDX = WithMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"],
};

export default withMDX(nextConfig);
