import * as React from 'react'
import ContentLayout from '../../components/content-layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useLocation } from '@reach/router'
import AuthorPhoto from '../../components/author-photo'

const BlogPost = ({ data }) => {
  const location = useLocation()

  return (
    <ContentLayout pageTitle={data.mdx.frontmatter.title}>
      <h1 className="p-name">{ data.mdx.frontmatter.title }</h1>
      <a className="u-url" href={location.pathname}>
        Published <span className="dt-published">{data.mdx.frontmatter.date}</span>
      </a>
      <div className="p-author h-card">
        <AuthorPhoto />
        <span>Written by</span>
        <span className="p-name">Christian Poplawski</span>
      </div>
      <div className="e-content">
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </div>
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

export default BlogPost
