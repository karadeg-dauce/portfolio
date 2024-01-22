// Step 1: Import React
import * as React from 'react'
// Import from a CSS file in your src
import "../styles/index.css"

import SEO from '../components/seo'
import ProfilView from '../components/profilView/profilView'
import FirstPage from '../components/firstPage/firstPage'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div className='home'>
      <ProfilView/>
      <FirstPage/>
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (<SEO title="Home Page"  description={undefined} pathname={undefined} children={undefined}/>)

// Step 3: Export your component
export default IndexPage