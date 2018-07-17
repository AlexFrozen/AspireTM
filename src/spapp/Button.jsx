import React, { Component } from 'react'
import Material_Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import './Top.less'

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
    let mui_variant, mui_size, mui_color

    switch (this.props.variant) {
      case 'menu':
        mui_variant = 'flat'
        mui_size = 'medium'
        mui_color = 'default'
        break
      case 'simple':
        mui_variant = 'outlined'
        mui_size = 'medium'
        mui_color = 'default'
        break
      case 'header':
        mui_variant = 'flat'
        mui_size = 'small'
        mui_color = 'default'
        break
      case 'header_default':
        mui_variant = 'flat'
        mui_size = 'small'
        mui_color = 'primary'
        break
    }
    return (
      <Material_Button
        variant={mui_variant}
        size={mui_size}
        color={mui_color}
        onClick={this.props.onClick}
      >
        {this.props.caption}
      </Material_Button>
    )
  }
}

export { Button }
