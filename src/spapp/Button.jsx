import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <input type="button"
        className={this.props.className}
        value={this.props.caption}
        onClick={this.props.onClick}
      />
    )
  }
}

export { Button }
