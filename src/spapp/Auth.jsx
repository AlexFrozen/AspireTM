import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { InputEdit } from './InputEdit.jsx'
import { InputPass } from './InputPass.jsx'
import { Label } from './Label.jsx'
import { Button } from './Button.jsx'
import Grid from '@material-ui/core/Grid'

class Auth extends Component {
  static propTypes = {
    apiUrl: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    authorized: PropTypes.bool.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    didLogin: PropTypes.func.isRequired,
    didLogout: PropTypes.func.isRequired,
  }

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
    if (this.props.authorized) {
      const fullName = `${this.props.firstName} ${this.props.lastName} `
      return (
        <Grid
          container
          alignItems='center'
          justify='flex-end'
          direction='row'
        >
          <Grid item>
            <Label
              variant='badge'
              caption={fullName}
            />
          </Grid>
          <Grid item>
            <Button
              variant='menu'
              caption='Log out'
              onClick={this.doLogout}
            />
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid
          container
          alignItems='center'
          justify='flex-end'
          direction='row'
        >
          <Grid item>
            <InputEdit
              hint='E-Mail address'
              value={this.state.login}
              onChange={this.loginChange}
            />
          </Grid>
          <Grid item>
            <InputPass
              hint='Password'
              value={this.state.pass}
              onChange={this.passChange}
            />
          </Grid>
          <Grid item>
            <Button
              variant='menu'
              caption='Log in'
              onClick={this.doLogin}
            />
          </Grid>
        </Grid>
      )
    }
  }
}

export { Auth }
