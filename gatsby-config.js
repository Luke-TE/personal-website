module.exports = {
  siteMetadata: {
    title: `Luke Texon Portfolio`,
    description: `My personal portfolio website.`,
    author: `Luke Texon`,
    contact: {
      github: `Luke-TE`,
      gitconnected: `luke-te`,
      linkedin: `luke-texon`,
      email: `ljt18@ic.ac.uk`,
      phone: `+447505729228`
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-custom-api`,
      options: {
        url: 'http://gitconnected.com/v1/portfolio/luke-te',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
