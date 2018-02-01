import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TableCell } from './TableCell.jsx'

class TableRow extends Component {
  static propTypes = {
    cols: PropTypes.array.isRequired,
    rowid: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    rowid: '',
    onClick: null,
  }

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
      >
        {cols}
      </tr>
    )
  }
}

export { TableRow }
