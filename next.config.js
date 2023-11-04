/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER: "https://dukamarket-backend.onrender.com",
    LOCAL: "http://localhost:5000",
  },

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/amrelgendy/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
