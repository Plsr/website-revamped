import * as React from 'react'
import Layout from './layout'

const ContentLayout = ({ children, pageTitle }) => {
  return (
    <Layout pageTitle={pageTitle}>
      <article className="h-entry">
        { children }
      </article>
    </Layout>
  )
}

export default ContentLayout
