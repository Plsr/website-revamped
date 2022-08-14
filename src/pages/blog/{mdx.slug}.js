import * as React from 'react'
import ContentLayout from '../../components/content-layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useLocation } from '@reach/router'
import PostAuthorCard from '../../components/post-author-card'

const BlogPost = ({ data }) => {
  const location = useLocation()

  return (
    <ContentLayout pageTitle={data.mdx.frontmatter.title}>
      <h1 className="p-name">{ data.mdx.frontmatter.title }</h1>
      <a className="u-url" href={location.pathname}>
        Published <span className="dt-published">{data.mdx.frontmatter.date}</span>
      </a>
      <PostAuthorCard />
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

export { Head } from '../../components/head'

export default BlogPost
