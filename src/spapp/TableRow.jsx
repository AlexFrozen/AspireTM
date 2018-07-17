import React, { Component } from 'react'
import Material_TableRow from '@material-ui/core/TableRow'
import PropTypes from 'prop-types'
import { TableCell } from './TableCell.jsx'

class TableRow extends Component {
  static propTypes = {
    cols: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.string.isRequired,
      ]).isRequired
    ).isRequired,
    variant: PropTypes.oneOf([
      'simple',
      'hover',
    ]),
    onClick: PropTypes.func,
  }

  static defaultProps = {
    variant: 'simple',
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
    let props = {}
    if (this.props.onClick != null) { props.onClick=this.props.onClick }
    switch (this.props.variant) {
      case 'hover': props.hover = true; break
    }
    return (
      <Material_TableRow {...props}>
        {cols}
      </Material_TableRow>
    )
  }
}

export { TableRow }
