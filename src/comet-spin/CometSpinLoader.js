import React from 'react'
import PropTypes from 'prop-types'
import CometSpin from './CometSpin'

const CometSpinLoader = props => (
  <CometSpin {...props} />
)

CometSpinLoader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
}

CometSpinLoader.defaultProps = {
  color: '#bebebe',
  duration: 1.7,
  size: 30,
}

export default CometSpinLoader