import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button.jsx'

class SetOfButtons extends Component {
  static propTypes = {
    buttons: PropTypes.array.isRequired,
    classKind: PropTypes.string.isRequired,
  }
  render() {
    const buttons = []
    let bkey = 1
    this.props.buttons.forEach((button) => {
      buttons.push(<Button
        key={bkey++}
        classKind={button.classKind}
        caption={button.caption}
        onClick={button.onClick}
      />)
    })
    return (
      <div className={this.props.classKind}>
        {buttons}
      </div>
    )
  }
}

export { SetOfButtons }
