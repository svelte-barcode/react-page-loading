import React from 'react'
import PropTypes from 'prop-types'
// import BarLoader from './bar/BarLoader'
// import BubbleSpinLoader from './bubble-spin/BubbleSpinLoader'
// import BubbleLoader from './bubble/BubbleLoader'
// import CometSpinLoader from './comet-spin/CometSpinLoader'
// import CylinderSpinLoader from './cylinder-spin/CylinderSpinLoader'
// import ResizeSpinLoader from './resize-spin/ResizeSpinLoader'
import RotateSpinLoader from './rotate-spin/RotateSpinLoader'

export default class PageLoading extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => { 
        this.setState({ loading: false })
    }, 1000)
  }

  render() {
    const { loading } = this.state

    let containerStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }

    if (loading) { 
      return (
        <div style={containerStyle}>
          <RotateSpinLoader />
        </div>
      )
    }

    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
