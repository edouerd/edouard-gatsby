import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Previously extends React.Component {
  render () {
    return (
      <div>
        <h6
          style={{
            marginBottom: rhythm(1.5),
          }}
        >
          Previously —
        </h6>
        <ol
          style={{
            marginBottom: rhythm(1.5),
          }}
        >
          <li>
          I was at <a href="http://www.ibm.com/design/">International Business Machines</a> building many things: A (global) community radio, a <a href="tba">platform</a> that blurred boundaries between physical space and big data, a <a href="https://www.youtube.com/watch?v=WwfC11NRPfQ">prototyping practice</a> non-designers/developers could understand, a democratic < a href="http://edouard.us/posts/ra.html">product</a> doomed to fail, and the <a href="http://www.ibm.com/design/thinking/">seed</a> of promise for enabling a 100-year old company to work better, together. It was a lovely time.</li>
        </ol>
        <p>Thanks for visiting and stay a while. If you want, <a href="mailto:mail@edouard.us">send me a letter</a> or <a href="https://twitter.com/edouerd">tweet at me.</a></p>
      </div>
    )
  }
}

export default Previously
