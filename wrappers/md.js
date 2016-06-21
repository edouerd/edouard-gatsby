import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

import '../css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className="markdown">
          <h1
            style={{
              // fontSize: fontSizeToMS(1.5).fontSize,
              // lineHeight: fontSizeToMS(1.5).lineHeight,
              marginBottom: rhythm(1.5),
            }}
          >{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <hr
            style={{
              marginTop: rhythm(1.5),
              marginBottom: rhythm(1.3),
            }}
          />
          <ReadNext post={post} pages={route.pages} />
          <Bio />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
