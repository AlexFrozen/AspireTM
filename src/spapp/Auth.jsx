import React, { Component } from 'react'
import { InputEdit } from './InputEdit.jsx'
import { InputPass } from './InputPass.jsx'
import { Label } from './Label.jsx'
import { Button } from './Button.jsx'
import './Top.less'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      pass: '',
    }
    this.doLogin = this.doLogin.bind(this)
    this.doLogout = this.doLogout.bind(this)
    this.loginChange = this.loginChange.bind(this)
    this.passChange = this.passChange.bind(this)
  }

  loginChange(ev) {
    this.setState({ login: ev.target.value })
  }

  passChange(ev) {
    this.setState({ pass: ev.target.value })
  }

  doLogin() {
    fetch(`${this.props.apiUrl}auth`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: this.state.login,
        password: this.state.pass,
      }),
    })
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        const error = new Error('Authorization error')
        error.bad_auth = true
        throw error
      }
    })
    .then((answer) => {
      let isAdmin = false
      if (answer.role === 'Admin') {
        isAdmin = true
      }
      this.props.didLogin({
        firstName: answer.firstName,
        lastName: answer.lastName,
        eMail: this.state.login,
        isAdmin: isAdmin,
        idUser: answer.idUser,
        token: answer.token,
      })
      this.setState({
        login: '',
        pass: '',
      })
    })
    .catch(errorLogin => {
      if (errorLogin.bad_auth !== true) {
        alert('Possibly network problem')
      }
      this.setState({
        login: '',
        pass: '',
      })
    })
  }

  doLogout() {
    fetch(`${this.props.apiUrl}${this.props.token}/logout`)
    .then(() => {
      this.props.didLogout()
    })
  }

  render() {
    const elems = []
    if (this.props.authorized) {
      elems.push(<Label
        key='1'
        caption={`${this.props.firstName  } ${  this.props.lastName  } `}
      />)
      elems.push(<Button
        key='2'
        className='Menu-button'
        caption='Logout'
        onClick={this.doLogout}
      />)
    } else {
      elems.push(<InputEdit
        key='3'
        className='Auth-input'
        hint='E-Mail address'
        value={this.state.login}
        onChange={this.loginChange}
      />)
      elems.push(<InputPass
        key='4'
        className='Auth-input'
        hint='Password'
        value={this.state.pass}
        onChange={this.passChange}
      />)
      elems.push(<Button
        key='5'
        className='Menu-button'
        caption='Log in'
        onClick={this.doLogin}
      />)
    }
    return (
      <div className='Auth'>
        {elems}
      </div>
    )
  }
}

export { Auth }
