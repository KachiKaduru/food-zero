/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cqqspwagnewoiggnffbt.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/meal-images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
