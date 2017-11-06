import React, { Component } from 'react'

class InputEdit extends Component {
  render() {
    return (
      <input className={this.props.className} type='text'
             placeholder={this.props.hint} />
    )
  }
}

export { InputEdit }
