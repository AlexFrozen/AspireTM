import React, { Component } from 'react'
import { UsersTableHeaderSorter } from './UsersTableHeaderSorter.jsx'
import { TableRow } from './TableRow.jsx'
import './UsersTable.less'

class UsersTable extends Component {
  render() {
    const rows = []
    let bkey = 1
    this.props.rows.forEach((row) => {
      rows.push(<TableRow key={bkey++} className='UsersTable-row' cols={
        [row.firstname, row.lastname, row.email, row.manager, row.role]
      }/>)
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
