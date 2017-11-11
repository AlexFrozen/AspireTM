import React, { Component } from 'react'
import { LabelClick } from './LabelClick.jsx'

class AttachList extends Component {
  render() {
    const links = []
    let bkey = 1
    this.props.list.forEach((attach) => {
      links.push(<div key={bkey++}>
        <LabelClick name={attach.name} url={attach.url} />
      </div>)
    })
    return (
      <div>{links}</div>
    )
  }
}

export { AttachList }
