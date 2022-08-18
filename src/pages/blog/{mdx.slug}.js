import * as React from 'react'
import ContentLayout from '../../components/content-layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useLocation } from '@reach/router'
import PostAuthorCard from '../../components/post-author-card'
import { buildWebMentions } from '../../util/webmentionMocks'

// TODO: Get permalink in post context
const BlogPost = ({ data }) => {
  const location = useLocation()

  const mockdata = { 
    nodes: [
      ...buildWebMentions(6, 'mentionOf', 'http://localhost:8000/blog/second-article'),
      ...buildWebMentions(3, 'inReplyTo', 'http://localhost:8000/blog/second-article'),
      ...buildWebMentions(12, 'likeOf', 'http://localhost:8000/blog/second-article'),
      ...buildWebMentions(2, 'repostOf', 'http://localhost:8000/blog/second-article')
    ] 
  }

  // TODO: Get likes
  // TODO: Get bookmarks?
  // TODO: Get reposts (as likes?)
  const mentions = mockdata.nodes.filter(wm => !!wm.mentionOf)
  const replies = mockdata.nodes.filter(wm => !!wm.inReplyTo)
  const likes = mockdata.nodes.filter(wm => !!wm.likeOf)
  const reposts = mockdata.nodes.filter(wm => !!wm.repostOf)
  const mentionsAndReplies = [...mentions, ...replies].sort((a, b) => (new Date(b.published) - new Date(a.published)))

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
      <h2>Likes & Reposts</h2>
        <p>{ likes.length} likes</p>
        <p>{ reposts.length} reposts</p>
      <h2>Mentions & Replys</h2>
      { mentionsAndReplies.map(mention => (
        <>
          <p>{ mention.author.name }</p>
          <small>{ mention.published }</small>
          <div>
            { mention.content.text }
          </div>
        </>
      ))}
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
    allWebMentionEntry(
      filter: {wmTarget: {eq: "https://chris-new-website.netlify.app/blog/second-article/"}}
    ) {
      nodes {
        author {
          name
          photo
          url
        }
        wmSource
        type
        repostOf
        mentionOf
        likeOf
        inReplyTo
        bookmarkOf
        published
        content {
          text
        }
      }
    }
  }
`

export { Head } from '../../components/head'

export default BlogPost
