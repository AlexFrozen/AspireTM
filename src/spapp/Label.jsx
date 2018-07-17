import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

class Label extends Component {
  static propTypes = {
    variant: PropTypes.oneOf([
      'badge',
      'simple',
    ]),
    caption: PropTypes.string.isRequired,
  }

  static defaultProps = { variant: 'simple' }

  render() {
    let mui_variant
    switch (this.props.variant) {
      case 'simple': mui_variant = 'body1'; break
      case 'badge': mui_variant = 'headline'; break
    }
    return (<Typography variant={mui_variant}>{this.props.caption}</Typography>)
  }
}

export { Label }
