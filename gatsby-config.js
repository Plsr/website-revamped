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
    "gatsby-plugin-mdx"
  ],
}
