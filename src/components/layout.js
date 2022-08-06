import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import AuthorCard from './author-card'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <title>{ pageTitle } | { data.site.siteMetadata.title }</title>
      <header>{ data.site.siteMetadata.title }</header>
      <AuthorCard />

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <main>
        { children }
      </main>
    </>
  )
}

export default Layout
