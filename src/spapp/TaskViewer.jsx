import React, { Component } from 'react'
import { Label } from './Label.jsx'
import { Text } from './Text.jsx'
import { AttachList } from './AttachList.jsx'
import { SetOfButtons } from './SetOfButtons.jsx'

class TaskViewer extends Component {
  constructor(props) {
    super(props)
    this.setTaskListViewer = this.setTaskListViewer.bind(this)
  }

  setTaskListViewer(e) {
    this.props.setViewer('TaskListViewer')
  }

  render() {
    const task = {
      name: 'MongoDB driven REST API for Aspire task manager',
      doer: 'AlexAnder Moiseev',
      priority: 'Urgent',
      deadline: 'Saturday',
      attachList: [
        { name: 'robots.txt', url: 'http://localhost:3000/static/robots.txt' },
        { name: 'descr.txt', url: 'http://localhost:3000/static/descr.txt' },
      ],
      descr: `Create REST API with
        routing support and running by express`,
    }
    const buttons = [
      { caption: 'Close' },
      { caption: 'Reopen' },
      { caption: 'Edit' },
      {
        caption: 'Exit',
        onClick: this.setTaskListViewer,
      },
    ]
    return (
      <div>
        <div><Label caption={task.name} /></div>
        <div>
          <Label caption={task.doer} />
          <Label caption={task.priority} />
          <Label caption={task.deadline} />
        </div>
        <Text text={task.descr} />
        <AttachList list={task.attachList} />
        <SetOfButtons buttons={buttons} />
      </div>
    )
  }
}

export { TaskViewer }
