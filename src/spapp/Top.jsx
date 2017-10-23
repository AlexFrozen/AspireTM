import React, { Component } from 'react'
import { SetOfButtons } from './SetOfButtons.jsx'
import { Auth } from './Auth.jsx'
import './Top.css'

class Top extends Component {
  constructor(props) {
    super(props)
    this.setTaskEditor = this.setTaskEditor.bind(this)
    this.setTaskListViewer = this.setTaskListViewer.bind(this)
    this.setUserEditor = this.setUserEditor.bind(this)
    this.setUsersViewer = this.setUsersViewer.bind(this)
  }

  setTaskEditor(e) { this.props.setViewer('TaskEditor') }
  setTaskListViewer(e) { this.props.setViewer('TaskListViewer') }
  setUserEditor(e) { this.props.setViewer('UserEditor') }
  setUsersViewer(e) { this.props.setViewer('UsersViewer') }

  render() {
    const buttons = []
    let toolbar = ''
    if (this.props.user.authorized) {
      if (this.props.viewer !== 'TaskEditor') buttons.push(
        {
          className: 'Top-new-task-button',
          caption: 'New task',
          onClick: this.setTaskEditor
        }
      )
      if (this.props.viewer !== 'TaskListViewer') buttons.push(
        {
          className: 'Top-task-list-button',
          caption: 'Task list',
          onClick: this.setTaskListViewer
        }
      )
      if (this.props.user.isAdmin) {
        if (this.props.viewer !== 'UserEditor') buttons.push(
          {
          className: 'Top-user-editor-button',
            caption: 'New user',
            onClick: this.setUserEditor
          }
        )
        if (this.props.viewer !== 'UsersViewer') buttons.push(
          {
          className: 'Top-user-viewer-button',
            caption: 'Users',
            onClick: this.setUsersViewer
          }
        )
      }
      toolbar = <SetOfButtons className='Menu' buttons={buttons} />
    }
    return (
      <div className='Top'>
        {toolbar}
        <Auth className='Auth' {...this.props.user} />
      </div>
    )
  }
}

export { Top }
