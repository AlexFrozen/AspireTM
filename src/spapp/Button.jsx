import React, { Component } from 'react'
import Material_Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {
    caption: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.string,
  }
  static defaultProps = {
    variant: 'simple',
    caption: '',
  }

  render() {
    let mui_variant, mui_size, mui_color, mui_fullWith

    switch (this.props.variant) {
      case 'menu':
        mui_variant = 'flat'
        mui_size = 'medium'
        mui_color = 'default'
        mui_fullWith = false
        break
      case 'simple':
        mui_variant = 'outlined'
        mui_size = 'medium'
        mui_color = 'default'
        mui_fullWith = false
        break
      case 'header':
        mui_variant = 'flat'
        mui_size = 'small'
        mui_color = 'default'
        mui_fullWith = true
        break
      case 'header_default':
        mui_variant = 'flat'
        mui_size = 'small'
        mui_color = 'primary'
        mui_fullWith = true
        break
    }
    return (
      <Material_Button
        variant={mui_variant}
        size={mui_size}
        color={mui_color}
        fullWidth={mui_fullWith}
        onClick={this.props.onClick}
      >
        {this.props.caption}
      </Material_Button>
    )
  }
}

export { Button }
