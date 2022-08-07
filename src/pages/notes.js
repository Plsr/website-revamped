import * as React from 'react'
import PageLayout from '../components/page-layout'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Notes = ({ data }) => {
  return (
    <PageLayout pageTitle="Notes">
      {data.allMdx.edges.map(edge => (
        <article key={edge.node.slug}>
          <MDXRenderer>
            { edge.node.body }
          </MDXRenderer>
          <p>published: { edge.node.frontmatter.date }</p>
          <Link to={edge.node.slug}>Permalink</Link>
        </article>
      ))}
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/notes/"}}
      ) {
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

export default Notes
