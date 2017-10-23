import React, { Component } from 'react'
import { Top } from './Top.jsx'
import { Desktop } from './Desktop.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewer: 'welcome',
      user: {
        authorized: true,
        firstName: 'AlexAnder',
        lastName: 'Moiseev',
        eMail: 'alexfisher@mail.ru',
        isAdmin: true
      }
    }
    this.setViewer = this.setViewer.bind(this)
  }

  setViewer(viewer) {
    this.setState( {viewer: viewer} )
  }

  render() {
    return (
      <div>
        <Top {...this.state} setViewer={this.setViewer} />
        <Desktop viewer={this.state.viewer} setViewer={this.setViewer} />
      </div>
    )
  }
}

export { App }
