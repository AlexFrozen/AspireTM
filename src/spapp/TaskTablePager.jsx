import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button.jsx'
import './TaskTablePager.less'

class TaskTablePager extends Component {
  static propTypes = {
    pad: PropTypes.number,
    pages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
  }

  static defaultProps = { pad: 4 }

  render() {
    const middlePages = []
    let buttonKind = ''

    if (this.props.pages > 1) {
      const pad = this.props.pad * 1
      const pages = this.props.pages * 1
      const curr = this.props.currentPage * 1

      let first, last

      if (pages <= pad * 2) {
        first = 1
        last = pages
      } else {
        first = curr - pad
        last = curr + pad
        if (first < 1) {
          first = 1
          last = pad * 2 + 1
        } else if (last > pages) {
          first = pages - pad * 2
          last = pages
        }
      }

      for (let i = first; i <= last; i++) {
        if (i === curr) {
          buttonKind = 'Pager-curr'
        } else {
          buttonKind = 'Pager-page'
        }
        middlePages.push(<Button
          key={i}
          caption={i}
          classKind={buttonKind}
        />)
      }
      return (
        <div>
          <Button
            caption="Previous"
            classKind="Pager-prev"
          />
          {middlePages}
          <Button
            caption="Next"
            classKind="Pager-next"
          />
        </div>
      )
    } else {
      return []
    }
  }
}

export { TaskTablePager }
