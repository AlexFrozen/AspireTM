import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TaskTableFilter } from './TaskTableFilter.jsx'
import { TaskTable } from './TaskTable.jsx'
import { TaskTablePager } from './TaskTablePager.jsx'

class TaskListViewer extends Component {
  static propTypes = { setViewer: PropTypes.func.isRequired }

  constructor(props) {
    super(props)
    this.state = {
      sortColumn: 'name',
      sortDirection: 'down',
      //      doer: 0,
      //      priority: 'all',
      //      substr: '',
      //      pageSize: 10,
      //      page: 1,
      //      totalRows: 0,
    }
  }
  render() {
    const ROWS = [
      { name: 'Nam1', doer: 'asdf', priority: 'Urgent', deadline: 'weeks' },
      { name: 'Nam2', doer: 'zxcv', priority: 'Urgent', deadline: 'weeks' },
      { name: 'Nam3', doer: 'sdfg', priority: 'Medium', deadline: 'weeks' },
      { name: 'Nam4', doer: 'asdf', priority: 'Urgent', deadline: 'weeks' },
      { name: 'Nam5', doer: 'asdf', priority: 'Medium', deadline: 'weeks' },
      { name: 'Nam6', doer: 'asdf', priority: 'Urgent', deadline: 'we' },
      { name: 'Nam7', doer: 'asdf', priority: 'Blocker', deadline: 'tomor' },
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
        <TaskTablePager
          pad='4'
          pages='24'
          currentPage='9'
        />
      </div>
    )
  }
}

export { TaskListViewer }
