import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Currently extends React.Component {
  render () {
    return (
      <div>
        <h6
          style={{
            marginBottom: rhythm(1.5),
          }}
        >
          Currently —
        </h6>
        <ol
          style={{
            marginBottom: rhythm(1.5),
          }}
        >
          <li>
          I’m at Tumblr building a dazzling array of digital products for millions of creative people and</li>
          <li>
          I’m tending to my experimental personal–projects–lab, Mornings (Github) and </li>
          <li>
          I’m self-organizing creative events and schooling at Public Services with some good friends.</li>
        </ol>

      </div>
    )
  }
}

export default Currently
