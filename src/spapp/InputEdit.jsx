import React, { Component } from 'react'

class InputEdit extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type='text'
        placeholder={this.props.hint}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

export { InputEdit }
