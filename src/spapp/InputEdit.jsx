import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputEdit extends Component {
  static propTypes = {
    classKind: PropTypes.string.isRequired,
    hint: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }
  static defaultProps = {
    hint: '',
    value: '',
  }

  render() {
    return (
      <input
        className={this.props.classKind}
        type='text'
        placeholder={this.props.hint}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

export { InputEdit }
