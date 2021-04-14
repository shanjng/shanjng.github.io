import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import SocialMedia from "../components/socialMedia"

const Footer = ({ siteTitle }) => (
  <footer style={{ background: "#eee" }}>
    <SocialMedia />
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
