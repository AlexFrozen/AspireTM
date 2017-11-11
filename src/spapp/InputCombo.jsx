import React, { Component } from 'react'

class InputCombo extends Component {
  render() {
    const options = []
    let bkey = 1
    this.props.list.forEach((el) => {
      options.push(
        <option
          key={bkey++}
          value={el[0]}
        >{el[1]}
        </option>)
    })
    return (
      <select>
        {options}
      </select>
    )
  }
}

export { InputCombo }

