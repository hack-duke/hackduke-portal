import React from 'react'
import classes from './Dashboard.scss'
// import { tagFromRole, tagColorFromRole } from 'extensions/tagUtils'

class Dashboard extends React.Component {

  static propTypes = {
    participant: React.PropTypes.object,
    fetchParticipant: React.PropTypes.func.isRequired
  }

  render () {
    const statusLabel = 'YOUR STATUS:'
    const titleText = 'DASHBOARD'
    return (
      <div>
        <div className={classes.background}>
          <div className={classes.container}>
            <div className={classes.contentContainer}>
              <div className={classes.header}>
                  {titleText}
              </div>

              <div className={classes.aboutText}>
                <a href='#'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </a>
              </div>

              <div className={classes.statusLabelText}>
                {statusLabel}
              </div>

              <div className={classes.status} >
                {this.props.participant ? (
                `${this.props.participant['role']['status'].toUpperCase()}`
                ) : null}
              </div>

              <div className={classes.aboutText}>
                <a href='#'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
