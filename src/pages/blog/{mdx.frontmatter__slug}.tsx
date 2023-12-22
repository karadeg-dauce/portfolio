import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const BlogPost = ({data, children}) => {

  console.log(data)
  const images = data.mdx.frontmatter.hero_image.childImageSharp;
  const imageData = images.gatsbyImageData ? images.gatsbyImageData : null;
  const image = imageData ? getImage(imageData) : null;

  console.log(images)
  
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      {image && (
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
      )}
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children} 
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      hero_image_credit_text
      hero_image_credit_link
      hero_image_alt
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`

export const Head = ({data}) => <SEO title={data.mdx.frontmatter.title} description={undefined} pathname={undefined} children={undefined} />

export default BlogPost