import React, { Component } from 'react'
import { Button } from './Button.jsx'

class SetOfButtons extends Component {
  render() {
    const buttons = []
    let bkey = 1
    this.props.buttons.forEach((button) => {
      buttons.push(<Button key={bkey++}
        className={button.className}
        caption={button.caption}
        onClick={button.onClick}
      />)
    })
    return (
      <div className={this.props.className}>
        {buttons}
      </div>
    )
  }
}

export { SetOfButtons }
