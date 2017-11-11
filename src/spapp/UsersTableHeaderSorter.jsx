import React, { Component } from 'react'
import { Button } from './Button.jsx'
import './UsersTableHeaderSorter.less'

class UsersTableHeaderSorter extends Component {
  render() {
    return (
      <tr>
        <th><Button
          className="UTHS-btn"
          caption="First name"
        />
        </th>
        <th><Button
          className="UTHS-btn"
          caption="Last name"
        />
        </th>
        <th><Button
          className="UTHS-btn"
          caption="E-Mail"
        />
        </th>
        <th><Button
          className="UTHS-btn"
          caption="Manager"
        />
        </th>
        <th><Button
          className="UTHS-btn"
          caption="Role"
        />
        </th>
      </tr>
    )
  }
}

export { UsersTableHeaderSorter }
