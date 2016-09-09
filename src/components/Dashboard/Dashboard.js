import React from 'react'
import classes from './Dashboard.scss'
import NavMenu from 'redux/containers/NavMenuContainer'

class Dashboard extends React.Component {

  static propTypes = {
    participant: React.PropTypes.object,
    fetchParticipant: React.PropTypes.func.isRequired
  }

  // <NavMenu />

  render () {
    return (
      <div>
        <NavMenu />
        <div className={classes.container}>

          <div className={classes.contentContainer}>

            <div className={classes.header}>
                DASHBOARD
            </div>

            <div className={classes.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div className={classes.statusLabelText}>
              YOUR STATUS:
            </div>

            <div className={classes.status} >
              {this.props.participant ? (
              `${this.props.participant['role']['status'].toUpperCase()}`
              ) : null}
            </div>

            <div className={classes.aboutText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
