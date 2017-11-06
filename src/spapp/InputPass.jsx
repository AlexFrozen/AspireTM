import React, { Component } from 'react'

class InputPass extends Component {
  render() {
    return (
      <input className={this.props.className} type='password'
             placeholder={this.props.hint} />
    )
  }
}

export { InputPass }
