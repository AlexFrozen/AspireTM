import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import PropTypes from 'prop-types'
import { SetOfButtons } from './SetOfButtons.jsx'
import { Auth } from './Auth.jsx'
import './Top.less'

class Top extends Component {
  static propTypes = {
    apiUrl: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    authorized: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    viewer: PropTypes.string.isRequired,
    setViewer: PropTypes.func.isRequired,
    didLogin: PropTypes.func.isRequired,
    didLogout: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.setTaskEditor = this.setTaskEditor.bind(this)
    this.setTaskListViewer = this.setTaskListViewer.bind(this)
    this.setUserEditor = this.setUserEditor.bind(this)
    this.setUsersViewer = this.setUsersViewer.bind(this)
  }

  setTaskEditor() {
    this.props.setViewer('TaskEditor')
  }
  setTaskListViewer() {
    this.props.setViewer('TaskListViewer')
  }
  setUserEditor() {
    this.props.setViewer('UserEditor')
  }
  setUsersViewer() {
    this.props.setViewer('UsersViewer')
  }

  render() {
    const buttons = []
    let toolbar = ''
    if (this.props.authorized) {
      if (this.props.viewer !== 'TaskEditor') {
        buttons.push({
          variant: 'menu',
          caption: 'New task',
          onClick: this.setTaskEditor,
        })
      }
      if (this.props.viewer !== 'TaskListViewer') {
        buttons.push({
          variant: 'menu',
          caption: 'Task list',
          onClick: this.setTaskListViewer,
        })
      }
      if (this.props.isAdmin) {
        if (this.props.viewer !== 'UserEditor') {
          buttons.push({
            variant: 'menu',
            caption: 'New user',
            onClick: this.setUserEditor,
          })
        }
        if (this.props.viewer !== 'UsersViewer') {
          buttons.push({
            variant: 'menu',
            caption: 'Users',
            onClick: this.setUsersViewer,
          })
        }
      }
      toolbar = <SetOfButtons buttons={buttons} />
    }
    return (
      <AppBar position='static'>
        <Grid
          container
          alignItems='center'
          justify='space-between'
          direction='row'
        >
          <Grid item>
            {toolbar}
          </Grid>
          <Grid item>
            <Auth
              apiUrl={this.props.apiUrl}
              token={this.props.token}
              authorized={this.props.authorized}
              firstName={this.props.firstName}
              lastName={this.props.lastName}
              didLogin={this.props.didLogin}
              didLogout={this.props.didLogout}
            />
          </Grid>
        </Grid>
      </AppBar>
    )
  }
}

export { Top }
