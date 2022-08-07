import * as React from 'react'
import { graphql } from 'gatsby'
import ContentLayout from '../../components/content-layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const Note = ({ data }) => {
  return (
    <ContentLayout pageTitle={data.mdx.frontmatter.title}>
      { data.mdx.frontmatter.title && <h1>{ data.mdx.frontmatter.title }</h1>}
      <MDXRenderer>
        { data.mdx.body }
      </MDXRenderer>
    </ContentLayout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`

export default Note
