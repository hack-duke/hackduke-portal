import React from 'react'
import {statusMessageFromRole} from 'extensions/statusUtils'
import classes from './StatusText.scss'

class StatusText extends React.Component {

  static propTypes = {
    status: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <div>
          {(this.props.status === 'accepted') ? (
            generateAcceptedJSX(this.props.email)
          ) : statusMessageFromRole(this.props.status)
          }
        </div>
      </div>
    )
  }
}

function generateAcceptedJSX (email) {
  return (
    <div>
      {'Congratulations! You’ve been accepted to HackDuke! Please'}
      {' '}
      <a href={'https://hackduke.typeform.com/to/Dq5qeE?route_update_participant=xxxxx&email=' + email}
        className={classes.link}>{'confirm'}</a>
      {' '}
      {'you\'re coming and'}
      {' '}
      <a href={'https://hackduke.typeform.com/to/w4ZA3F?route_update_participant=xxxxx&email=' + email}
        className={classes.link}>{'upload'}</a>
      {' plane receipts by '}
      <div className={classes.bold}> Saturday 10/29/2016. </div>
    </div>
  )
}

export default StatusText
