import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Currently extends React.Component {
  render () {
    return (
      <div>
        <h6
        >
          Currently —
        </h6>
        <ol
          style={{
            marginBottom: rhythm(1.5),
          }}
        >
          <li>
          I’m at <a id="tumblr" href="http://www.tumblr.com">Tumblr</a> building a dazzling array of digital products for millions of creative people <em>and</em></li>
          <li>
          I’m tending to my experimental personal–projects–lab, <a id="mornings" href="https://mornings.co/">Mornings</a> <a id="mornings" href="https://github.com/mornings">(Github)</a> <em>and</em> </li>
          <li>
          I’m building a self–organized learning group(s) at <a id="ss" href="http://sunday-school.github.io/">Sunday School</a> with some good friends.</li>
        </ol>

      </div>
    )
  }
}

export default Currently
