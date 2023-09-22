import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#386994`,
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
            color: '#bdd9cd', // palette from http://paperheartdesign.com/blog/color-palette-peaceful-palettes
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
            color: '#8eaebb',
            textDecoration: `none`,
          }}
        >
          home
        </Link>
      </h2>
      <h2 style={{ margin: 0, marginRight: 30 }}>
        <Link
          to="/blog"
          style={{
            color: '#8eaebb',
            textDecoration: `none`,
          }}
        >
          blog
        </Link>
      </h2>
      <h2 style={{ margin: 0, marginRight: 30 }}>
        <Link
          to="/projects"
          style={{
            color: '#8eaebb',
            textDecoration: `none`,
          }}
        >
          projects
        </Link>
      </h2>
      <h2 style={{ margin: 0, marginRight: 30 }}>
        <Link
          to="/concerts"
          style={{
            color: '#8eaebb',
            textDecoration: `none`,
          }}
        >
          concerts
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
