import React, { Component } from 'react'
import { TaskTableHeaderSorter } from './TaskTableHeaderSorter.jsx'
import { TableRow } from './TableRow.jsx'
import './TaskTable.less'

class TaskTable extends Component {
  constructor(props) {
    super(props)
    this.rowClicked = this.rowClicked.bind(this)
  }

  rowClicked() {
    this.props.setViewer('TaskViewer')
  }
  render() {
    const rows = []
    let bkey = 1
    this.props.rows.forEach((row) => {
      const ikey = `fixme-${bkey}`
      rows.push(<TableRow
        key={bkey++}
        className='TaskTable-row'
        rowid={ikey}
        onClick={this.rowClicked}
        cols={[row.name, row.doer, row.priority, row.deadline]}
      />)
    })
    return (
      <table border="1">
        <thead>
          <TaskTableHeaderSorter
            col={this.props.col}
            dir={this.props.dir}
          />
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export { TaskTable }
