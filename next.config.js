/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }))
    return config;
  }
}
// module.exports = {
//   async headers() {
//     return [
//       {
//         // This works, and returns appropriate Response headers:
//         source: '/(.*).(jpg|png|)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value:
//               'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
//           },
//         ],
//       },
//       {
//         // This works, and returns appropriate Response headers:
//         source: '/(.*).(css|js)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value:
//               'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
//           },
//         ],
//       },
//       {
//         // This doesn't work for 'Cache-Control' key (works for others though):
//         source: '/_next/image(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             // Instead of this value:
//             value: 'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
//             // Cache-Control response header is `public, max-age=60` in production
//             // and `public, max-age=0, must-revalidate` in development
//           },
//         ],
//       },
//     ]
//   },
// }

