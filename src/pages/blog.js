import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/post-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <div style={{ margin: "1rem 0" }}>
        <PostLink key={edge.node.id} post={edge.node} />{" "}
        <div>{edge.node.excerpt}</div>
      </div>
    ))

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>All My Posts Haha</h1>
      <div>{Posts}</div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
