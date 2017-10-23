import React, { Component } from 'react'

class Label extends Component {
  render() {
    return (
      <span>{this.props.caption}</span>
    )
  }
}

export { Label }
