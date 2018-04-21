import React from 'react'
import PropTypes from 'prop-types'
import BubbleSpin from './BubbleSpin'

const BubbleSpinLoader = props => (
  <BubbleSpin {...props} />
)

BubbleSpinLoader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
}

BubbleSpinLoader.defaultProps = {
  color: '#bebebe',
  duration: 1.3,
  size: 8,
}

export default BubbleSpinLoader