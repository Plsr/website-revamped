import * as React from 'react'
import Layout from './layout'

const PageLayout = ({ pageTitle, children }) => {
  return (
    <Layout pageTitle={pageTitle}>
      <h1>{ pageTitle }</h1>
      <>
        { children }
      </>
    </Layout>
  )
}

export default PageLayout
