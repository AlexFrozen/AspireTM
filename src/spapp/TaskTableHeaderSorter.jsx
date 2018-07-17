import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TableRow } from './TableRow.jsx'
import { Button } from './Button.jsx'

class TaskTableHeaderSorter extends Component {
  static propTypes = {
    dir: PropTypes.oneOf([
      'up',
      'down',
    ]),
    col: PropTypes.oneOf([
      'name',
      'doer',
      'priority',
      'deadline',
    ]),
    onSort: PropTypes.func.isRequired,
  }
  static defaultProps = {
    dir: 'down',
    col: 'deadline',
  }

  constructor(props) {
    super(props)
    this.sorter_click = this.sorter_click.bind(this)
  }

  sorter_click(button) {
    let dir
    if (button === this.props.col) {
      if ('up' === this.props.dir) {
        dir = 'down'
      } else {
        dir = 'up'
      }
    } else {
      dir = this.props.dir
    }
    this.props.onSort(button, dir)
  }

  render() {
    const buttons = {
      name: {
        caption: 'Name',
        variant: '',
        onClick: () => {
          return this.sorter_click('name')
        },
      },
      doer: {
        caption: 'Doer',
        variant: '',
        onClick: () => {
          return this.sorter_click('doer')
        },
      },
      priority: {
        caption: 'Priority',
        variant: '',
        onClick: () => {
          return this.sorter_click('priority')
        },
      },
      deadline: {
        caption: 'Deadline',
        variant: '',
        onClick: () => {
          return this.sorter_click('deadline')
        },
      },
    }
    const cols = []
    let direction
    if (this.props.dir === 'up') {
      direction = '↑'
    } else {
      direction = '↓'
    }
    Object.keys(buttons).forEach((name) => {
      if (name === this.props.col) {
        buttons[name].variant = 'header_default'
        buttons[name].caption = direction + buttons[name].caption
      } else {
        buttons[name].variant = 'header'
      }
      cols.push(<Button {...buttons[name]} />)
    })
    return (<TableRow cols={cols} />)
  }
}

export { TaskTableHeaderSorter }
