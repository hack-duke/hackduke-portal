import React from 'react'
import classes from './NavMenu.scss'
import { IndexLink } from 'react-router'

class NavMenu extends React.Component {
  constructor () {
    super()
    this.handleResize = this.handleResize.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {enabled: false, menuLeft: '0px', buttonLeft: '0px'}
  }

  handleResize (e) {
    const menuLeft = window.innerWidth < 767 ? '-250px' : '0px'
    const buttonLeft = window.innerWidth < 767 ? '0px' : '250px'
    this.setState({menuLeft: menuLeft, buttonLeft: buttonLeft})
  }

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleClick () {
    const menuLeft = !this.state.enabled ? '0' : '-250px'
    const buttonLeft = !this.state.enabled ? '250px' : '0px'
    this.setState({menuLeft: menuLeft, buttonLeft: buttonLeft, enabled: !this.state.enabled})
  }

  static propTypes = {
    logout: React.PropTypes.func.isRequired,
    click: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}
          className={classes.menuButton}
          style={{'left': `${this.state.buttonLeft}`}}>
          <img src='hackduke-logo.png' />
        </button>
        <div className={classes.navMenu}
          style={{'left': `${this.state.menuLeft}`}}>
          <img src='hackduke-logo.png' alt='Hackduke Logo' />
          <div className={classes.menuItem}>
            <IndexLink className={classes.linkElement} to={'/dashboard'}>DASHBOARD</IndexLink>
          </div>
          <div className={classes.menuItem}>
            <IndexLink className={classes.linkElement} to={'/application'}>APPLICATION</IndexLink>
          </div>
          <div className={classes.menuItem}>
            <IndexLink onClick={this.props.logout} className={classes.linkElement} to={'/login'}>LOGOUT</IndexLink>
          </div>
        </div>
      </div>
    )
  }
}

export default NavMenu

