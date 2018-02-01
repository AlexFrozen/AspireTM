import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputPass extends Component {
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
        type='password'
        placeholder={this.props.hint}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

export { InputPass }
