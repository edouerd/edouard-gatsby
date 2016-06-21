import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Info extends React.Component {
  render () {
    return (
      <div>
        <h6>Here's some more —</h6>
        <ol
          style={{
            marginBottom: rhythm(1.5),
          }}
        >
          <li>No-brainer social networking: Facebook, Twitter, and Instagram.</li>
          <li>Open sourcing all my non-confidential work on Github.</li>
          <li>Hyperlinking and researching on Arena.</li>
          <li>Producing sounds and uploading them to Soundcloud. I make mixes for fun too.</li>
          <li>I record process n’ sketches n’ more on Tumblr.</li>
        </ol>
        <h6>Colophon —</h6>
        <ul
          style={{
            marginBottom: rhythm(1.5),
          }}
        >
          <li>Built with Webpack + React</li>
          <li>Hosted on Linode + Github.</li>
          <li>Set in Neue Haas Unica & Times New Roman.</li>
        </ul>
        <h6>Copyright —</h6>
        <p>© 2016 Édouard Urcades, unless noted.</p>
      </div>
    )
  }
}

export default Info
