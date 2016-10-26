import React from 'react'
import classes from './Dashboard.scss'
import {statusColorFromRole, statusMessageFromRole} from 'extensions/statusUtils'
import Cat from './assets/hackkitty_vector_1.jpg'
import StatusText from 'components/StatusText'

class Dashboard extends React.Component {

  static propTypes = {
    participant: React.PropTypes.object
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

              <div className={classes.catDiv}>
                <img className={classes.image} src={Cat} />
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
                <StatusText status={this.props.participant ? (
                  this.props.participant['role']['status']) : 'registered'}
                  email={this.props.participant
                  ? this.props.participant['person']['email'] : 'test@duke.edu'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function generateTextWithTwoLinks (beforeText, link1, linkText1, middleText, link2, linkText2, afterText) {
  return (
    <div>
      {beforeText}
      {' '}
      <a href={link1} className={classes.link}>{linkText1}</a>
      {' '}
      {middleText}
      {' '}
      <a href={link2} className={classes.link}>{linkText2}</a>
      {afterText}
    </div>
  )
}

export default Dashboard
