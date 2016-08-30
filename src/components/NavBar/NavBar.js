import React from 'react'
import classes from './NavBar.scss'

class NavBar extends React.Component {

  static propTypes = {
    leftItem: React.PropTypes.string,
    rightItem: React.PropTypes.string,
    leftClick: React.PropTypes.func,
    rightClick: React.PropTypes.func,
    title: React.PropTypes.string.isRequired
  }

  handleRightClick () {
    if (this.props.rightClick) {
      this.props.rightClick()
    }
  }

  handleLeftClick () {
    if (this.props.leftClick) {
      this.props.leftClick()
    }
  }

  render () {
    return (
      <div className={classes.navBar}>
        {this.props.leftItem && this.props.leftItem !== '' ? (
          <button className={classes.leftButton} onClick={this.handleLeftClick.bind(this)}>
            {this.props.leftItem}
          </button>
        ) : null }
        <div className={classes.barTitle}> {this.props.title} </div>
        {this.props.rightItem && this.props.rightItem !== '' ? (
          <button className={classes.rightButton} onClick={this.handleRightClick.bind(this)}>
            {this.props.rightItem}
          </button>
        ) : null }
      </div>
    )
  }
}

export default NavBar
