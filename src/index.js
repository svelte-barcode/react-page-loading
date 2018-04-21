import React from 'react'
import PropTypes from 'prop-types'
// import BarLoader from './bar/BarLoader'
// import BubbleSpinLoader from './bubble-spin/BubbleSpinLoader'
import BubbleLoader from './bubble/BubbleLoader'

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
          <BubbleLoader />
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
