import React, { Component } from 'react'
import Material_TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

class InputPass extends Component {
  static propTypes = {
    variant: PropTypes.string,
    hint: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    variant: 'simple',
    hint: '',
    value: '',
  }

  render() {
    if (this.props.variant === 'simple') {
      return (
        <Material_TextField
          type='password'
          label={this.props.hint}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      )
    }
  }
}

export { InputPass }
