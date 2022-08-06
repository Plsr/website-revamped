import * as React from 'react'
import PageLayout from '../components/page-layout'
import { StaticImage } from 'gatsby-plugin-image'

export { Head } from '../components/head'

const IndexPage = () => {
  return (
    <PageLayout pageTitle="Home">
      <p>I'm making this following the turorial</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/read-more-comparison.png"
      />
    </PageLayout>
  )
}

export default IndexPage
