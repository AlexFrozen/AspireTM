import React, { Component } from 'react'
import Material_Table from '@material-ui/core/Table'
import Material_TableHead from '@material-ui/core/TableHead'
import Material_TableBody from '@material-ui/core/TableBody'
import PropTypes from 'prop-types'
import { TaskTableHeaderSorter } from './TaskTableHeaderSorter.jsx'
import { TableRow } from './TableRow.jsx'

class TaskTable extends Component {
  static propTypes = {
    col: PropTypes.oneOf([
      'name',
      'doer',
      'priority',
      'deadline',
    ]),
    dir: PropTypes.oneOf([
      'up',
      'down',
    ]),
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        doer: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        deadline: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    setViewer: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
  }
  static defaultProps = {
    col: 'name',
    dir: 'down',
  }

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
      rows.push(<TableRow
        key={bkey++}
        variant='hover'
        onClick={this.rowClicked}
        cols={[row.name, row.doer, row.priority, row.deadline]}
      />)
    })
    return (
      <Material_Table>
        <Material_TableHead>
          <TaskTableHeaderSorter
            col={this.props.col}
            dir={this.props.dir}
            onSort={this.props.onSort}
          />
        </Material_TableHead>
        <Material_TableBody>
          {rows}
        </Material_TableBody>
      </Material_Table>
    )
  }
}

export { TaskTable }
