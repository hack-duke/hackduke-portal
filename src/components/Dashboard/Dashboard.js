import React from 'react'
import classes from './Dashboard.scss'
import {statusColorFromRole, statusMessageFromRole} from 'extensions/statusUtils'

class Dashboard extends React.Component {

  static propTypes = {
    participant: React.PropTypes.object
    // fetchParticipant: React.PropTypes.func.isRequired
  }

  render () {
    const statusLabel = 'YOUR STATUS:'
    const titleText = 'DASHBOARD'
    var divStyle = {color: statusColorFromRole(this.props.participant ? (
      this.props.participant['role']['status']) : 'black')}
    return (
      <div>
        <div className={classes.background}>
          <div className={classes.container}>
            <div className={classes.contentContainer}>
              <div className={classes.header}>
                {titleText}
              </div>

              <div className={classes.statusLabelText}>
                {statusLabel}
              </div>

              <div className={classes.status} >
                <div style={divStyle}>
                  {this.props.participant ? (
                  `${this.props.participant['role']['status'].toUpperCase()}`
                  ) : null}
                </div>
              </div>

              <div className={classes.aboutText}>
                {statusMessageFromRole(this.props.participant ? (
                    this.props.participant['role']['status']) : 'registered')}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
