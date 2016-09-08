import React from 'react'
import classes from './NavMenu.scss'
import { IndexLink } from 'react-router'

class NavMenu extends React.Component {

  static propTypes = {
    logout: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={classes.navMenu}>
        <IndexLink className={classes.linkElement} to={'/dashboard'}> Dashboard </IndexLink>
        <IndexLink className={classes.linkElement} to={'/application'}> Application </IndexLink>
        <div onClick={this.props.logout}>
          <IndexLink className={classes.linkElement} to={'/login'}> Log out </IndexLink>
        </div>
      </div>
    )
  }
}

export default NavMenu

