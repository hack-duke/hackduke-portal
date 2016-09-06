import React from 'react'
import classes from './CoreLayout.scss'
import NavMenu from 'redux/navigation/containers/navMenuContainer'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <NavMenu />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
