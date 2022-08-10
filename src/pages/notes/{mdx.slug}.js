import * as React from 'react'
import { graphql } from 'gatsby'
import ContentLayout from '../../components/content-layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useLocation }  from '@reach/router'
import AuthorPhoto from '../../components/author-photo'


const Note = ({ data }) => {
  const location = useLocation()

  return (
    <ContentLayout pageTitle={data.mdx.frontmatter.title} showHeader={false}>
      <h1 className="p-name" style={{ display: 'none' }}>{ data.mdx.frontmatter.title }</h1>
      <a className="u-url" href={location.pathname}>
        Published <span className="dt-published">{data.mdx.frontmatter.date}</span>
      </a>
      <div className='e-content'>
        <MDXRenderer>
          { data.mdx.body }
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

export default Note
