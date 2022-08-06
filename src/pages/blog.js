import * as React from 'react'
import PageLayout from '../components/page-layout'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export { Head } from '../components/head'

const Blog = ({ data }) => {
  return(
    <PageLayout pageTitle="Blog Posts">
      {data.allMdx.edges.map(edge => (
        <article key={edge.node.slug}>
          <Link to={edge.node.slug}><h2>{ edge.node.frontmatter.title }</h2></Link>
          <p>published: { edge.node.frontmatter.date }</p>
          <MDXRenderer>
            { edge.node.body }
          </MDXRenderer>
        </article>
      ))}
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          slug
          id
          body
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
          }
        }
      }
    }
  }
`

export default Blog
