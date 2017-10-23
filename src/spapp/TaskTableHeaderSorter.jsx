import React, { Component } from 'react'
import { Button } from './Button.jsx'

class TaskTableHeaderSorter extends Component {
  render() {
    return (
      <tr>
        <th><Button caption="Name" /></th>
        <th><Button caption="Doer" /></th>
        <th><Button caption="Priority" /></th>
        <th><Button caption="Deadline" /></th>
      </tr>
    )
  }
}

export { TaskTableHeaderSorter }
