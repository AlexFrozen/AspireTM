import React, { Component } from 'react'

class LabelClick extends Component {
  render() {
    return (
      <a href={this.props.url}>{this.props.name}</a>
    )
  }
}

export { LabelClick }
