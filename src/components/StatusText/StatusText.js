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
          {generateMessage(this.props.status, this.props.email)}
        </div>
      </div>
    )
  }
}

function generateMessage (status, email) {
  if (status === 'accepted') {
    return generateAcceptedJSX(email)
  } else if (status === 'confirmed') {
    return generateConfirmedJSX(email)
  } else {
    return statusMessageFromRole(status)
  }
}

function generateConfirmedJSX (email) {
  return (
    <div>
      {'Whoo! We can\'t wait to see you! If you\'re flying or driving from out-of-state, don\'t forget to '}
      <a href={'https://hackduke.typeform.com/to/w4ZA3F?route_update_participant=xxxxx&email=' + email}
        className={classes.link}>{'upload'}</a>
      {' receipts. We will reimburse up to $200 for flights and $50 for gas, but we can\'t reimburse people from schools with buses.'}
    </div>
  )
}

function generateAcceptedJSX (email) {
  return (
    <div>
      {'Congratulations! You’ve been accepted! Please'}
      {' '}
      <a href={'https://hackduke.typeform.com/to/Dq5qeE?route_update_participant=xxxxx&email=' + email}
        className={classes.link}>{'confirm'}</a>
      {' '}
      {'you\'re coming by '}
      <div className={classes.bold}>
        Thursday, 11/15.
      </div>
      {' Our process has been more rigorous than in previous years, so you must confirm to guarantee your spot. We won\'t be accepting walk-ins the day of.'}
    </div>
  )
}

export default StatusText
