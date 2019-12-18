import React, { Component } from 'react'
import client from './feathers'

interface State {
  error: string,
}

const getInitialState = () => {
  return {
    error: '',
  }
}

class Login extends Component<{}, State> {

  state = getInitialState()
  txtEmail = React.createRef<HTMLInputElement>()
  txtPassword = React.createRef<HTMLInputElement>()

  login = () => {
    const email = this.txtEmail.current?.value
    const password = this.txtPassword.current?.value

    return client.authenticate({
      strategy: 'local',
      email, password
    }).catch(error => this.setState({ error: error.message }))
  }

  signup = () => {
    const email = this.txtEmail.current?.value
    const password = this.txtPassword.current?.value
    
    return client.service('users')
      .create({ email, password })
      .then(() => this.login())
  }



  render() {
    return <main className="login container">
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet text-center heading">
          <h1 className="font-100">Log in or signup</h1>
          <p>{ this.state.error }</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
          <form className="form">
            <fieldset>
              <input ref={this.txtEmail} className="block" type="email" name="email" placeholder="email" />
            </fieldset>

            <fieldset>
              <input ref={this.txtPassword} className="block" type="password" name="password" placeholder="password" />
            </fieldset>

            <button type="button" className="button button-primary block signup" onClick={this.login}>
              Log in
            </button>

            <button type="button" className="button button-primary block signup" onClick={this.signup}>
              Signup
            </button>
          </form>
        </div>
      </div>
    </main>
  }
}


export default Login