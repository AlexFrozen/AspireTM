import React, { Component } from 'react'
import { InputEdit } from './InputEdit.jsx'
import { InputPass } from './InputPass.jsx'
import { Label } from './Label.jsx'
import { Button } from './Button.jsx'

class Auth extends Component {
  render() {
    const elems = []
    if (this.props.authorized) {
      elems.push(<Label key='1' caption={this.props.firstName + ' ' + this.props.lastName} />)
      elems.push(<Button key='2' caption='Logout' />)
    }else{
      elems.push(<InputEdit key='3' />)
      elems.push(<InputPass key='4' />)
      elems.push(<Button key='5' caption='Log in' />)
    }
    return (
      <div className={this.props.className}>
        {elems}
      </div>
    )
  }
}

export { Auth }
