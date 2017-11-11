import React, { Component } from 'react'
import { InputEdit } from './InputEdit.jsx'
import { InputCombo } from './InputCombo.jsx'

class TaskTableFilter extends Component {
  render() {
    const DOER = [
      [ 1, 'Andrea Muches' ],
      [ 2, 'AlexAnder Moiseev' ],
      [ 3, 'Alex Fisher' ],
      [ 4, 'Oleg Gazmanoff' ],
      [ 5, 'Brian May' ],
    ]
    const PRIO = [
      [ 1, 'Low' ],
      [ 2, 'Medium' ],
      [ 3, 'High' ],
    ]
    const PAGE = [
      [ 1, '10' ],
      [ 2, '25' ],
      [ 3, '50' ],
      [ 4, '100' ],
      [ 5, '500' ],
    ]
    return (
      <div>
        <InputCombo list={DOER} />
        <InputCombo list={PRIO} />
        <InputEdit />
        <InputCombo list={PAGE} />
      </div>
    )
  }
}

export { TaskTableFilter }
