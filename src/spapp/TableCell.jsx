import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TableCell extends Component {
  static propTypes = { val: PropTypes.string }
  static defaultProps = { val: '' }

  render() {
    return (
      <td>{this.props.val}</td>
    )
  }
}

export { TableCell }
