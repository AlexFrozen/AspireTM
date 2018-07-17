import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import { Button } from './Button.jsx'

class SetOfButtons extends Component {
  static propTypes = {
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        variant: PropTypes.oneOf([
          'menu',
          'simple',
        ]),
        caption: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
      }).isRequired
    ).isRequired,
    variant: PropTypes.oneOf([
      'vertical',
      'horizontal',
    ]),
  }
  static defaultProps = { variant: 'horizontal' }

  render() {
    let mui_alignItems, mui_justify, mui_direction
    switch (this.props.variant) {
      case 'vertical':
        mui_alignItems = 'center'
        mui_justify = 'center'
        mui_direction = 'column'
        break
      case 'horizontal':
        mui_alignItems = 'center'
        mui_justify = 'center'
        mui_direction = 'row'
        break
    }
    const buttons = []
    let bkey = 1
    this.props.buttons.forEach((button) => {
      buttons.push(
        <Grid
          item
          key={bkey++}
        >
          <Button
            key={bkey++}
            variant={button.variant}
            caption={button.caption}
            onClick={button.onClick}
          />
        </Grid>
      )
    })
    return (
      <Grid
        container
        alignItems={mui_alignItems}
        justify={mui_justify}
        direction={mui_direction}
      >
        {buttons}
      </Grid>
    )
  }
}

export { SetOfButtons }
