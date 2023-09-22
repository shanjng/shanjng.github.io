import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Why hello!</h1>
    <p>I'm Shan and this is my personal website.</p>
    <StaticImage
      src="../images/shan.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Moi"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
