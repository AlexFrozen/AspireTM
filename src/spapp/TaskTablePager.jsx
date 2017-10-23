import React, { Component } from 'react'
import { Button } from './Button.jsx'
import './TaskTablePager.css'

class TaskTablePager extends Component {
  render() {
    const middlePages = []
    let buttonStyle = ''

    if(this.props.pages > 1) {

      let pad = this.props.pad * 1
      let pages = this.props.pages * 1
      let curr = this.props.currentPage * 1

      let first, last

      if (pages <= pad * 2) {
        first = 1
        last = pages
      }else{
        first = curr - pad
        last = curr + pad
        if (first < 1) {
          first = 1
          last = pad * 2 + 1
        }else if (last > pages) {
          first = pages - pad * 2
          last = pages
        }
      }

      for(let i=first; i<=last; i++) {
        if(i == curr) {
          buttonStyle = 'TaskTablePager-curr'
        }else{
          buttonStyle = 'TaskTablePager-page'
        }
        middlePages.push(<Button key={i}
          caption={i}
          className={buttonStyle}
        />)
      }
      return (
        <div>
          <Button caption="Previous" className="TaskTablePager-prev" />
          {middlePages}
          <Button caption="Next" className="TaskTablePager-next"/>
        </div>
      )
    }else return([])
  }
}

export { TaskTablePager }
