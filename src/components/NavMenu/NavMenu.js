import React from 'react'
import classes from './NavMenu.scss'
import { IndexLink } from 'react-router'
import { pushRotate as Menu } from 'react-burger-menu'

class NavMenu extends React.Component {
  constructor () {
    super()
    this.state = {enabled: false, width: '0px', left: '0px'}
  }

  handleClick () {
    const width = !this.state.enabled ? '200px' : '0px'
    const left = !this.state.enabled ? '200px' : '0px'
    this.setState({width: width, left: left, enabled: !this.state.enabled})
  }

  static propTypes = {
    logout: React.PropTypes.func.isRequired,
    click: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={this.handleClick.bind(this)}
            className={classes.menuButton}
            style={{'left': `${this.state.left}`}}>
            <img src='hackduke-logo.png' />
          </button>
          <div className={classes.navMenu}
            style={{'width': `${this.state.width}`}}>
            <img src='hackduke-logo.png' alt='Hackduke Logo' />
            <div className={classes.menuItem}>
              <IndexLink className={classes.linkElement} to={'/dashboard'}> DASHBOARD </IndexLink>
            </div>
            <div className={classes.menuItem}>
              <IndexLink className={classes.linkElement} to={'/application'}> APPLICATION </IndexLink>
            </div>
            <div className={classes.menuItem}>
              <IndexLink onClick={this.props.logout} className={classes.linkElement} to={'/login'}> LOGOUT </IndexLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavMenu

