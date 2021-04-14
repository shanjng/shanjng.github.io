import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Why, hello!</h1>
    <p>Welcome to Shan Jiang's personal website, (crib) and blog.</p>
    <StaticImage
      src="../images/shan.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Moi"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/blog/">Go to ze blog</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
