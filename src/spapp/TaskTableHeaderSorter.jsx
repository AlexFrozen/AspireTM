import React, { Component } from 'react'
import { Button } from './Button.jsx'

class TaskTableHeaderSorter extends Component {
  render() {
    const captions = {
      name: 'Name',
      doer: 'Doer',
      priority: 'Priority',
      deadline: 'Deadline'
    }
    let direction = ''
    if (this.props.dir === 'up') {
      direction = '↑'
    }else{
      direction = '↓'
    }
    switch (this.props.col) {
      case 'name': captions.name = direction+captions.name; break
      case 'doer': captions.doer = direction+captions.doer; break
      case 'priority': captions.priority = direction+captions.priority; break
      case 'deadline': captions.deadline = direction+captions.deadline; break
    }
    return (
      <tr>
        <th><Button caption={captions.name} /></th>
        <th><Button caption={captions.doer} /></th>
        <th><Button caption={captions.priority} /></th>
        <th><Button caption={captions.deadline} /></th>
      </tr>
    )
  }
}

export { TaskTableHeaderSorter }
