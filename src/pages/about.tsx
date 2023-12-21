import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => (<SEO title="About Me" description={undefined} pathname={undefined} children={undefined}/>)

export default AboutPage