import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputCombo extends Component {
  static propTypes = { list: PropTypes.array.isRequired }

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

