/**
 * @type {import('next').NextConfig}
 */
// const withTM = require('next-transpile-modules')(['nacho-component-library']);
// const nextConfig = {
//     output: 'export',
   
//     // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//     // trailingSlash: true,
   
//     // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//     // skipTrailingSlashRedirect: true,
   
//     // Optional: Change the output directory `out` -> `dist`
//     // distDir: 'dist',
//     // images: {unoptimized: true,},

//   }


  const withTM = require('next-transpile-modules')(['nacho-component-library']);

    const nextConfig = withTM({
        output: 'export',
        webpack: (config) => {
            config.module.rules.push({
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            });
            return config;
        },
    });

    module.exports = nextConfig;