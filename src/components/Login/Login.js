import React from 'react'
import classes from './Login.scss'
import Logo from './assets/hackduke-logo.svg'
import { AuthenticationStatus } from 'routes/Login/modules/authentication'

class Login extends React.Component {

  constructor () {
    super()
    this.state = {sendPassword: false, showMessage: false, firstValue: '', secondValue: ''}
    this.handlePasswordClick = this.handlePasswordClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleFirstChange = this.handleFirstChange.bind(this)
    this.handleSecondChange = this.handleSecondChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  static propTypes = {
    authStatus: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired,
    authenticate: React.PropTypes.func.isRequired,
    setPassword: React.PropTypes.func.isRequired,
    resetPassword: React.PropTypes.func.isRequired,
    updateAuthStatus: React.PropTypes.func.isRequired,
    updateMessage: React.PropTypes.func.isRequired,
    login: React.PropTypes.func.isRequired,
    fetching: React.PropTypes.bool.isRequired
  }

  handleEnter (event) {
    if (event.keyCode === 13) {
      this.handleButtonClick()
    }
  }

  componentWillMount () {
    document.addEventListener('keydown', this.handleEnter, false)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleEnter, false)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.authStatus === AuthenticationStatus.TEMPORARY) {
      this.setState({firstValue: '', secondValue: ''})
    } else if (nextProps.authStatus === AuthenticationStatus.PERMANENT) {
      this.props.login()
    }
    this.setState({showMessage: true})
  }

  handleButtonClick () {
    const first = this.state.firstValue
    if (this.state.sendPassword) {
      this.props.resetPassword(first)
    } else if (this.props.authStatus === AuthenticationStatus.TEMPORARY) {
      const second = this.state.secondValue
      if (first !== second) {
        this.props.updateMessage('The passwords must match!')
      } else {
        this.props.setPassword(localStorage.getItem('email'), first)
      }
    } else {
      this.props.authenticate(first, this.state.secondValue)
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
    } else {
      return this.props.authStatus === AuthenticationStatus.TEMPORARY ? 'Set password' : 'Log in'
    }
  }

  handleFirstPlaceholder () {
    return this.props.authStatus === AuthenticationStatus.TEMPORARY ? 'New Password' : 'Email'
  }

  handleSecondPlaceholder () {
    return this.props.authStatus === AuthenticationStatus.TEMPORARY ? 'Confirm Password' : 'Password'
  }

  handlePasswordText () {
    const needsBackToLogin = this.state.sendPassword || this.props.authStatus === AuthenticationStatus.TEMPORARY
    return needsBackToLogin ? 'Back to log in' : 'Forgot or need password?'
  }

  handleSecondType () {
    return this.props.authStatus === AuthenticationStatus.TEMPORARY ? 'password' : 'text'
  }

  handleFirstChange (event) {
    this.setState({firstValue: event.target.value})
  }

  handleSecondChange (event) {
    this.setState({secondValue: event.target.value})
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
            value={this.state.firstValue}
            type={this.handleSecondType()}
            onChange={this.handleFirstChange}
            placeholder={this.handleFirstPlaceholder()} />
          {this.state.sendPassword ? null
            : (<input id='second'
              className={classes.input}
              type='password'
              value={this.state.secondValue}
              onChange={this.handleSecondChange}
              placeholder={this.handleSecondPlaceholder()} />)
          }
          <button id='action' className={classes.loginButton} onClick={this.handleButtonClick}>
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
