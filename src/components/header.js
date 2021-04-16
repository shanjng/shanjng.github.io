import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
      }}
    >
      <h2 style={{ margin: 0, marginRight: 60 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <h2 style={{ margin: 0, marginRight: 30 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h2>
      <h2 style={{ margin: 0, marginRight: 30 }}>
        <Link
          to="/blog"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Blog
        </Link>
      </h2>
      <h2 style={{ margin: 0, marginRight: 30 }}>
        <Link
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Projects
        </Link>
      </h2>
      <h2 style={{ margin: 0, marginRight: 30 }}>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
