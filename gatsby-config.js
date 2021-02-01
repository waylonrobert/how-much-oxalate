/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// module.exports = {
//   /* Your site config here */
//   plugins: [],
// }

// environment variables
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// TODO setup Google Tag Manager
export default {
  siteMetadata: {
    title: `How Much Oxalate?`,
    siteUrl: 'https://howmuchoxalate.com',
    description: 'Listing of oxalate content in food',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-anchor-links`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/how-much-oxalate-icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
  ],
};
