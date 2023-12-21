// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src='../images/confinement1.jpg' alt=' '/>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (<SEO title="Home Page"  description={undefined} pathname={undefined} children={undefined}/>)

// Step 3: Export your component
export default IndexPage