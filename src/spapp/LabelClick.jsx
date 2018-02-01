import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LabelClick extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

  render() {
    return (
      <a href={this.props.url}>{this.props.name}</a>
    )
  }
}

export { LabelClick }
