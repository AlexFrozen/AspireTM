import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Text extends Component {
  static propTypes = { text: PropTypes.string.isRequired }

  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}

export { Text }
