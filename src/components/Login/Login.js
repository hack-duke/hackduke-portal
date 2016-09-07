import React from 'react'
import classes from './Login.scss'
import Logo from './assets/hackduke-logo.svg'
import { AuthenticationStatus } from 'routes/Login/modules/authentication'

class Login extends React.Component {

  constructor () {
    super()
    this.state = {sendPassword: false, showMessage: false}
    this.handlePasswordClick = this.handlePasswordClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  static propTypes = {
    authStatus: React.PropTypes.string.isRequired,
    resetStatus: React.PropTypes.bool.isRequired,
    message: React.PropTypes.string.isRequired,
    authenticate: React.PropTypes.func.isRequired,
    setPassword: React.PropTypes.func.isRequired,
    resetPassword: React.PropTypes.func.isRequired,
    updateAuthStatus: React.PropTypes.func.isRequired,
    updateMessage: React.PropTypes.func.isRequired,
    login: React.PropTypes.func.isRequired,
    fetching: React.PropTypes.bool.isRequired
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.authStatus === AuthenticationStatus.TEMPORARY) {
      document.getElementById('first').value = ''
      document.getElementById('second').value = ''
    } else if (nextProps.authStatus === AuthenticationStatus.PERMANENT) {
      this.props.login()
    }
    this.setState({showMessage: true})
  }

  handleButtonClick () {
    const first = document.getElementById('first').value
    if (this.state.sendPassword) {
      this.props.resetPassword(first)
    } else if (this.props.authStatus === AuthenticationStatus.TEMPORARY) {
      const second = document.getElementById('second').value
      if (first !== second) {
        this.props.updateMessage('The passwords must match!')
      } else {
        this.props.setPassword(localStorage.getItem('email'), first)
      }
    } else {
      const second = document.getElementById('second').value
      this.props.authenticate(first, second)
    }
  }

  handlePasswordClick () {
    if (this.props.authStatus === AuthenticationStatus.TEMPORARY) {
      this.props.updateAuthStatus('')
    } else {
      this.setState({sendPassword: !this.state.sendPassword})
    }
    this.setState({showMessage: false})
    this.props.updateMessage('')
  }

  loginBoxHeight () {
    return this.state.sendPassword ? '400px' : '460px'
  }

  handleMessageVisibility () {
    return this.state.showMessage ? 'visible' : 'hidden'
  }

  handleMessagePadding () {
    return this.state.showMessage ? '15px 0px 15px 0px' : '0'
  }

  handleButtonText () {
    if (this.state.sendPassword) {
      return 'Send password'
    } else if (this.props.authStatus === AuthenticationStatus.TEMPORARY) {
      return 'Set password'
    } else {
      return 'Log in'
    }
  }

  handleFirstPlaceholder () {
    if (this.props.authStatus === AuthenticationStatus.TEMPORARY) {
      return 'New Password'
    } else {
      return 'Email'
    }
  }

  handleSecondPlaceholder () {
    if (this.props.authStatus === AuthenticationStatus.TEMPORARY) {
      return 'Confirm Password'
    } else {
      return 'Password'
    }
  }

  handlePasswordText () {
    if (this.state.sendPassword || this.props.authStatus === AuthenticationStatus.TEMPORARY) {
      return 'Back to log in'
    } else {
      return 'Forgot or need password?'
    }
  }

  handleSecondType () {
    return this.props.authStatus === AuthenticationStatus.TEMPORARY ? 'password' : 'text'
  }

  render () {
    return (
      <div className={classes.background}>
        <div className={classes.loginBox} style={{'height': `${this.loginBoxHeight()}`}}>
          <img alt='logo' src={Logo} className={classes.logo} />
          <div className={classes.message}
            style={{'visibility': `${this.handleMessageVisibility()}`}}>
            {this.state.showMessage ? this.props.message : ''}
          </div>
          <input id='first'
            className={classes.input}
            type={this.handleSecondType()}
            placeholder={this.handleFirstPlaceholder()} />
          {this.state.sendPassword ? null
            : (<input id='second'
              className={classes.input}
              type='password'
              placeholder={this.handleSecondPlaceholder()} />)
          }
          <button className={classes.loginButton} onClick={this.handleButtonClick}>
            {this.handleButtonText()}
          </button>
          <button className={classes.textButton} onClick={this.handlePasswordClick}> {this.state.bottomText}
            {this.handlePasswordText()}
          </button>
        </div>
      </div>
    )
  }
}

export default Login
