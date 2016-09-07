import React from 'react'
import classes from './NavMenu.scss'
import { IndexLink } from 'react-router'

class NavMenu extends React.Component {

  static propTypes = {

  }

  render () {
    return (
      <div className={classes.navMenu}>
        <IndexLink className={classes.linkElement} to={'/application'}> Application </IndexLink>
        <IndexLink className={classes.linkElement} to={'/dashboard'}> Dashboard </IndexLink>
        <IndexLink className={classes.linkElement} to={'/login'}> Login </IndexLink>
      </div>
    )
  }
}

export default NavMenu
