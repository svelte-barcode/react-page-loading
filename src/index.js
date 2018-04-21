import React from 'react'
import PropTypes from 'prop-types'
import BarLoader from './bar/BarLoader'
import BubbleSpinLoader from './bubble-spin/BubbleSpinLoader'
import BubbleLoader from './bubble/BubbleLoader'
import CometSpinLoader from './comet-spin/CometSpinLoader'
import CylinderSpinLoader from './cylinder-spin/CylinderSpinLoader'
import ResizeSpinLoader from './resize-spin/ResizeSpinLoader'
import RotateSpinLoader from './rotate-spin/RotateSpinLoader'
import SpinLoader from './spin/SpinLoader'

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
    const { color, duration, size, loader } = this.props

    let containerStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }

    if (loading) { 
      if (loader == "bar") {
        return (
          <div style={containerStyle}>
            <BarLoader 
              color={color} 
              duration={duration} 
              size={size} />
          </div>
        )
      } else if (loader == "bubble-spin") {
        return (
          <div style={containerStyle}>
            <BubbleSpinLoader 
              color={color} 
              duration={duration} 
              size={size} />
          </div>
        )
      } else if (loader == "bubble") {
        return (
          <div style={containerStyle}>
            <BubbleLoader 
              color={color} 
              duration={duration} 
              size={size} />
          </div>
        )
      } else if (loader == "comet-spin") {
        return (
          <div style={containerStyle}>
            <CometSpinLoader 
              color={color} 
              duration={duration} 
              size={size} />
          </div>
        )
      } else if (loader == "cylinder-spin") {
        return (
          <div style={containerStyle}>
            <CylinderSpin 
              color={color} 
              duration={duration} 
              size={size} />
          </div>
        )
      } else if (loader == "resize-spin") {
        return (
          <div style={containerStyle}>
            <ResizeSpinLoader 
              color={color} 
              duration={duration} 
              size={size} />
          </div>
        )
      } else if (loader == "rotate-spin") {
        return (
          <div style={containerStyle}>
            <RotateSpinLoader 
              color={color} 
              duration={duration} 
              size={size} />
          </div>
        )
      } else if (loader == "spin") {
        return (
          <div style={containerStyle}>
            <SpinLoader 
              color={color} 
              duration={duration} 
              size={size} />
          </div>
        )
      }
    }

    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

PageLoading.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.number,
  loader: PropTypes.string,
}

PageLoading.defaultProps = {
  color: '#A9A9A9',
  duration: 1.3,
  size: 4,
  loader: "bar",
}