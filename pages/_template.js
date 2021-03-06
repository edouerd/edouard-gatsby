import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, fontSizeToMS } from 'utils/typography'
import { config } from 'config'

import '../css/styles.css'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (
        <h1
          style={{
            // fontSize: fontSizeToMS(1.5).fontSize,
            // lineHeight: fontSizeToMS(1.5).lineHeight,
            marginBottom: rhythm(1.5),
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/')}
          >
            {config.blogTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h1
          style={{
            // fontSize: fontSizeToMS(1.5).fontSize,
            // lineHeight: fontSizeToMS(1.5).lineHeight,
            marginBottom: rhythm(1.5),
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/')}
          >
            {config.blogTitle}
          </Link>
        </h1>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(30),
          padding: `${rhythm(2)} ${rhythm(1/2)}`,
        }}
      >
        {header}
        <h2>
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/info/')}
          >
            Info + Links
          </Link>
        </h2>
        {children}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
