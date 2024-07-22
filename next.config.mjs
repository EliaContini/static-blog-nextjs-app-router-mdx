// nextjs
import WithMDX from "@next/mdx";

// custom
import { CONFIG_PAGE_EXTENSIONS } from "./src/lib/constants.mjs";

const withMDX = WithMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: CONFIG_PAGE_EXTENSIONS,
};

export default withMDX(nextConfig);
