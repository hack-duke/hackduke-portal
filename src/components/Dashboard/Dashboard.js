import React from 'react'
import classes from './Dashboard.scss'

class Dashboard extends React.Component {

  static propTypes = {
    participant: React.PropTypes.object,
    fetchParticipant: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={classes.status} >
        {this.props.participant ? (
        `Your Status: ${this.props.participant['role']['status'].toUpperCase()}`
        ) : null}
      </div>
    )
  }
}

export default Dashboard
