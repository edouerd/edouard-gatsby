import Typography from 'typography'

const options = {
  baseFontSize: '20px',
  baseLineHeight: '1.5em',
  // headerWeight: 300,
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
