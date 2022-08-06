import * as React from 'react'
import PageLayout from '../components/page-layout'

export { Head } from '../components/head'

const AboutPage = () => {
  return (
    <PageLayout pageTitle="About me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </PageLayout>
  )
}

export default AboutPage
