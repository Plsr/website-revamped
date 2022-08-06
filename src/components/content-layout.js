import * as React from 'react'
import Layout from './layout'

const ContentLayout = ({ children }) => {
  return (
    <Layout>
      <article class="h-entry">
        { children }
      </article>
    </Layout>
  )
}

export default ContentLayout
