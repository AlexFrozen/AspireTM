import React, { Component } from 'react'
import { Button } from './Button.jsx'
import './UsersTableHeaderSorter.less'

class UsersTableHeaderSorter extends Component {
  render() {
    return (
      <tr>
        <th><Button
          caption="First name"
        />
        </th>
        <th><Button
          caption="Last name"
        />
        </th>
        <th><Button
          caption="E-Mail"
        />
        </th>
        <th><Button
          caption="Manager"
        />
        </th>
        <th><Button
          caption="Role"
        />
        </th>
      </tr>
    )
  }
}

export { UsersTableHeaderSorter }
