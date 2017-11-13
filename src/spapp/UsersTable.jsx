import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UsersTableHeaderSorter } from './UsersTableHeaderSorter.jsx'
import { TableRow } from './TableRow.jsx'
import './UsersTable.less'

class UsersTable extends Component {
  static propTypes = {
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        eMail: PropTypes.string,
        manager: PropTypes.string,
        role: PropTypes.oneOf(['Admin', 'User']),
      })
    ).isRequired,
  }

  render() {
    const rows = []
    let bkey = 1
    this.props.rows.forEach((row) => {
      rows.push(<TableRow
        key={bkey++}
        looktype='UsersTable'
        cols={
          [row.firstname, row.lastname, row.email, row.manager, row.role]
        }
      />)
    })
    return (
      <table border="1">
        <thead>
          <UsersTableHeaderSorter />
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export { UsersTable }
