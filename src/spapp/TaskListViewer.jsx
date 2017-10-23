import React, { Component } from 'react'
import { TaskTableFilter } from './TaskTableFilter.jsx'
import { TaskTable } from './TaskTable.jsx'
import { TaskTablePager } from './TaskTablePager.jsx'

class TaskListViewer extends Component {
  render() {
    const ROWS = [
      {name: 'Nam1', doer: 'qwer asdf', priority: 'Urgent', deadline: 'weekends'},
      {name: 'Nam2', doer: 'asdf zxcv', priority: 'Urgent', deadline: 'weekends'},
      {name: 'Nam3', doer: 'erty sdfg', priority: 'Medium', deadline: 'weekends'},
      {name: 'Nam4', doer: 'qwer asdf', priority: 'Urgent', deadline: 'weekends'},
      {name: 'Nam5', doer: 'qwer asdf', priority: 'Medium', deadline: 'weekends'},
      {name: 'Nam6', doer: 'qwer asdf', priority: 'Urgent', deadline: 'we'},
      {name: 'Nam7', doer: 'qwer asdf', priority: 'Blocker', deadline: 'tomorrow'},
    ]
    return (
      <div>
        <TaskTableFilter />
        <TaskTable rows={ROWS} setViewer={this.props.setViewer} />
        <TaskTablePager pad='4' pages='24' currentPage='9' />
      </div>
    )
  }
}

export { TaskListViewer }
