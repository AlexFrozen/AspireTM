import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Label extends Component {
  static propTypes = { caption: PropTypes.string.isRequired }

  render() {
    return (
      <span>{this.props.caption}</span>
    )
  }
}

export { Label }
