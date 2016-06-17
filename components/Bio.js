import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        Hey — I’m a physical–digital product designer né industrial designer based in New York City.
      </p>
    )
  }
}

export default Bio
