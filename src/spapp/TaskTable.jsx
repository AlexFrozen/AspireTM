import React, { Component } from 'react'
import { TaskTableHeaderSorter } from './TaskTableHeaderSorter.jsx'
import { TableRow } from './TableRow.jsx'
import './TaskTable.css'

class TaskTable extends Component {
  constructor(props) {
    super(props)
    this.rowClicked = this.rowClicked.bind(this)
  }

  rowClicked(e) {
    this.props.setViewer('TaskViewer');
  }
  render() {
    const rows = []
    let bkey = 1
    this.props.rows.forEach((row) => {
      let ikey = 'fixme-'+bkey
      rows.push(<TableRow key={bkey++}
        className='TaskTable-row'
        rowid={ikey}
        onClick={this.rowClicked}
        cols={[row.name, row.doer, row.priority, row.deadline]}
      />)
    })
    return (
      <table border="1">
        <thead>
          <TaskTableHeaderSorter />
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export { TaskTable }
