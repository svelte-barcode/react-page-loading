import React from 'react'
import PropTypes from 'prop-types'
import ResizeSpin from './ResizeSpin'

const ResizeSpinLoader = props => (
  <ResizeSpin {...props} />
)

ResizeSpinLoader.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
}

ResizeSpinLoader.defaultProps = {
  background: '#fff',
  color: '#bebebe',
  duration: 2,
  size: 4,
}

export default ResizeSpinLoader