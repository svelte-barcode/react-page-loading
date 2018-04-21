import React from 'react'
import PropTypes from 'prop-types'
import Bubble from './Bubble'

const BubbleLoader = props => (
  <Bubble {...props} />
)

BubbleLoader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
}

BubbleLoader.defaultProps = {
  color: '#bebebe',
  duration: 1.8,
  size: 5,
}

export default BubbleLoader