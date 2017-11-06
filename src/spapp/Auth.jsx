import React, { Component } from 'react'
import { InputEdit } from './InputEdit.jsx'
import { InputPass } from './InputPass.jsx'
import { Label } from './Label.jsx'
import { Button } from './Button.jsx'
import './Top.less'

class Auth extends Component {
  render() {
    const elems = []
    if (this.props.authorized) {
      elems.push(<Label key='1' caption={this.props.firstName + ' '
                                       + this.props.lastName + ' '}/>)
      elems.push(<Button key='2' className='Menu-button' caption='Logout' />)
    }else{
      elems.push(<InputEdit key='3' className='Auth-input'
                            hint='E-Mail address' />)
      elems.push(<InputPass key='4' className='Auth-input'
                            hint='Password' />)
      elems.push(<Button key='5' className='Menu-button' caption='Log in' />)
    }
    return (
      <div className='Auth'>
        {elems}
      </div>
    )
  }
}

export { Auth }
