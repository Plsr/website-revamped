import * as React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Blog = ({ data }) => {
  return(
    <Layout pageTitle="Blog Posts">
      {data.allMdx.edges.map(edge => (
        <article key={edge.node.slug}>
          <Link to={edge.node.slug}><h2>{ edge.node.frontmatter.title }</h2></Link>
          <p>published: { edge.node.frontmatter.date }</p>
          <MDXRenderer>
            { edge.node.body }
          </MDXRenderer>
        </article>
      ))}
    </Layout>
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
