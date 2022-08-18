require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Christian Poplawski`,
    siteUrl: `https://www.christianpoplawski.de`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'blog',
        path: `${__dirname}/blog`
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'notes',
        path: `${__dirname}/notes`
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: 'chris-new-website.netlify.app', // webmention.io username
        identity: {
          // you need to specify at least one of the identities
          // to be able to log in webmention.io
          github: "Plsr",
        },
        mentions: true,
        pingbacks: false,
        domain: "chris-new-website.netlify.app",
        fetchLimit: 10000, // number of webmentions to fetch
        token: process.env.WEBMENTIONS_TOKEN
      }
    }
  ],
}
