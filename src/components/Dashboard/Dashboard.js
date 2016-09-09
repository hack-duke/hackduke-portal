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
          <div className={'container text-center'}>
            <div className={classes.header}>
              DASHBOARD
            </div>
          </div>
          <p className={classes.aboutText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className={classes.statusLabelText}>
            YOUR STATUS:
          </div>
          <div className={classes.status} >
            {this.props.participant ? (
            `${this.props.participant['role']['status'].toUpperCase()}`
            ) : null}
          </div>
          <p className={classes.aboutText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
    )
  }
}

export default Dashboard
