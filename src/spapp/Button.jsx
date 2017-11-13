import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
  }

  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.caption}
      </button>
    )
  }
}

export { Button }
