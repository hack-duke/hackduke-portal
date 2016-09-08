import React from 'react'
import classes from './Dashboard.scss'
import NavMenu from 'redux/containers/NavMenuContainer'

class Dashboard extends React.Component {

  static propTypes = {
    participant: React.PropTypes.object,
    fetchParticipant: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <NavMenu />
        <div className={classes.container}>
          <div className={classes.status} >
            {this.props.participant ? (
            `Your Status: ${this.props.participant['role']['status'].toUpperCase()}`
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
