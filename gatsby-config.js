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
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allStrapiBlogs } }) => {
              return allStrapiBlogs.nodes.map(node => {
                return Object.assign({}, node.nodes, {
                  description: node.desc,
                  date: node.date,
                  title: node.title,
                  url: site.siteMetadata.siteUrl + "/blogs/" + node.slug,
                })
              })
            },
            query: `
              {
                allStrapiBlogs {
                  nodes {
                    slug
                    desc
                    date(formatString: "DD/MM/YYYY")
                    title
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
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
        apiURL: "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`projects`, `blogs`, `categories`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter sans-serif\:400,500,600`,
          `Fira Sans\:300,400,500`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
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
