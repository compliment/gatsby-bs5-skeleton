require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  flags: {
    DEV_SSR: true
  },
  pathPrefix: "/",
  siteMetadata: {
    title: `-`,
    description: `-`,
    author: `-`,
    siteUrl: `https://com.com`,
    siteDescription: `-`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,  
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
   
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Asia/Kolkata',
        format: 'dddd, MMM D, YYYY HH:mm:s Z',
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
