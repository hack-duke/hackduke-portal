import React from 'react'
import classes from './NavMenu.scss'
import EventNavElement from 'components/EventNavElement'
import { IndexLink } from 'react-router'

class NavMenu extends React.Component {

  static propTypes = {
    events: React.PropTypes.array.isRequired,
    fetchEvents: React.PropTypes.func.isRequired,
    selectCurrEventType: React.PropTypes.func.isRequired,
    currYear: React.PropTypes.string.isRequired,
    currSeason: React.PropTypes.string.isRequired
  }

  handleEventClick (eventType) {
    this.props.selectCurrEventType(eventType)
  }

  render () {
    return (
      <div className={classes.navMenu}>
        <IndexLink className={classes.linkElement} to={'/'}> Home </IndexLink>
        <IndexLink className={classes.linkElement} to={'/login'}> Login </IndexLink>
        <EventNavElement title={'Events'} elements={this.props.events}
          click={this.handleEventClick.bind(this)}
          year={this.props.currYear}
          season={this.props.currSeason} />
      </div>
    )
  }
}

export default NavMenu
