/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "CristianBernal",
    description:
      "Full-stack web developer based in Warsaw. I'm very passionate about programming and developing beautiful and efficient web applications",
    author: "CristianBernal",
    image: "/hero-img.png",
    siteUrl: "https://cristianbernal.com",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://portafolio-api-strapi.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Halant`,
            variants: [`400`, `500`, `600`],
          },
          {
            family: `Nunito Sans`,
            variants: [`300`, `400`, `500`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-cristianbernal-com`,
      },
    },
  ],
}
