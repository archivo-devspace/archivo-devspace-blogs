/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "development"
      ? ""
      : `/${process.env.NEXT_PUBLIC_BASE_PATH}`,
};

export default nextConfig;
