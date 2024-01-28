// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "image.tmdb.org",
//       },
//       {
//         protocol: "https",
//         hostname: "links.papareact.com",
//       },
//     ],
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "image.tmdb.org",
//       "links.papareact.com",
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "image.tmdb.org",
      "links.papareact.com",
      // Agrega otros dominios según sea necesario
    ],
    loader: "default",
  },
};

export default nextConfig;
