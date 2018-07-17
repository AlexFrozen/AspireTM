import React, { Component } from 'react'
import Material_TableCell from '@material-ui/core/TableCell'
import PropTypes from 'prop-types'

class TableCell extends Component {
  static propTypes = {
    val: PropTypes.oneOfType([
      PropTypes.element.isRequired,
      PropTypes.string.isRequired,
    ]).isRequired,
  }

  render() {
    return (
      <Material_TableCell>{this.props.val}</Material_TableCell>
    )
  }
}

export { TableCell }
