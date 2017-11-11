import React, { Component } from 'react'
import { TableCell } from './TableCell.jsx'

class TableRow extends Component {
  render() {
    const cols = []
    let bkey = 1
    this.props.cols.forEach((col) => {
      cols.push(<TableCell
        key={bkey++}
        val={col}
      />)
    })
    return (
      <tr
        id={this.props.rowid}
        onClick={this.props.onClick}
        className={this.props.className}
      >
        {cols}
      </tr>
    )
  }
}

export { TableRow }
