import React, { Component } from 'react'
import { Top } from './Top.jsx'
import { Desktop } from './Desktop.jsx'
import './App.less'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewer: 'welcome',
      authorized: false,
    }
    this.credentials = {
      firstName: '',
      lastName: '',
      eMail: '',
      isAdmin: false,
      token: '',
    }
    this.setViewer = this.setViewer.bind(this)
    this.didLogin = this.didLogin.bind(this)
    this.didLogout = this.didLogout.bind(this)
  }

  didLogin(cred) {
    this.credentials.firstName = cred.firstName
    this.credentials.lastName = cred.lastName
    this.credentials.eMail = cred.eMail
    this.credentials.isAdmin = cred.isAdmin
    this.credentials.token = cred.token
    this.setState({ authorized: true, viewer: 'TaskListViewer' })
  }

  didLogout() {
    this.credentials.firstName = ''
    this.credentials.lastName = ''
    this.credentials.eMail = ''
    this.credentials.isAdmin = false
    this.credentials.token = ''
    this.setState({ authorized: false, viewer: 'welcome' })
  }

  setViewer(viewer) {
    this.setState({ viewer: viewer })
  }

  render() {
    return (
      <div className='App-body'><div className='App-ribbon'>
        <Top
          apiUrl={this.props.apiUrl}
          token={this.credentials.token}
          authorized={this.state.authorized}
          isAdmin={this.credentials.isAdmin}
          firstName={this.credentials.firstName}
          lastName={this.credentials.lastName}
          viewer={this.state.viewer}
          setViewer={this.setViewer}
          didLogin={this.didLogin}
          didLogout={this.didLogout}
        />
        <Desktop viewer={this.state.viewer} setViewer={this.setViewer} />
      </div></div>
    )
  }
}

export { App }
