import React, { Component } from 'react'

class TableCell extends Component {
  render() {
    return (
      <td>{this.props.val}</td>
    )
  }
}

export { TableCell }
