import React, { Component } from 'react'
import { TaskTableFilter } from './TaskTableFilter.jsx'
import { TaskTable } from './TaskTable.jsx'
import { TaskTablePager } from './TaskTablePager.jsx'

class TaskListViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortColumn: 'name',
      sortDirection: 'down',
      doer: 0,
      priority: 'all',
      substr: '',
      pageSize: 10,
      page: 1,
      totalRows: 0,
    }
  }
  render() {
    const ROWS = [
      {
        name: 'Nam1',
        doer: 'qwer asdf',
        priority: 'Urgent',
        deadline: 'weeks',
      },
      {
        name: 'Nam2',
        doer: 'asdf zxcv',
        priority: 'Urgent',
        deadline: 'weeks',
      },
      {
        name: 'Nam3',
        doer: 'erty sdfg',
        priority: 'Medium',
        deadline: 'weeks',
      },
      {
        name: 'Nam4',
        doer: 'qwer asdf',
        priority: 'Urgent',
        deadline: 'weeks',
      },
      {
        name: 'Nam5',
        doer: 'qwer asdf',
        priority: 'Medium',
        deadline: 'weeks',
      },
      {
        name: 'Nam6',
        doer: 'qwer asdf',
        priority: 'Urgent',
        deadline: 'we',
      },
      {
        name: 'Nam7',
        doer: 'qwer asdf',
        priority: 'Blocker',
        deadline: 'tomor',
      },
    ]
    return (
      <div>
        <TaskTableFilter />
        <TaskTable
          col={this.state.sortColumn}
          dir={this.state.sortDirection}
          rows={ROWS}
          setViewer={this.props.setViewer}
        />
        <TaskTablePager pad='4' pages='24' currentPage='9' />
      </div>
    )
  }
}

export { TaskListViewer }
