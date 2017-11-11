import React, { Component } from 'react'
import { UsersTable } from './UsersTable.jsx'

class UsersViewer extends Component {
  render() {
    const USERS = [
      {
        firstname: 'AlexAnder',
        lastname: 'Moiseev',
        email: 'no@mail.me',
        manager: 'Self',
        role: 'Admin',
      },
      {
        firstname: 'Andreas',
        lastname: 'Muches',
        email: 'andres@muches.org',
        manager: 'AlexAnder Moiseev',
        role: 'User',
      },
      {
        firstname: 'Kriss',
        lastname: 'Kaspersky',
        email: 'nidden@mail.ru',
        manager: 'Self',
        role: 'User',
      },
    ]
    return (
      <div><UsersTable rows={USERS} /></div>
    )
  }
}

export { UsersViewer }
