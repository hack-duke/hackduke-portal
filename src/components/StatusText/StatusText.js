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
      {'Whoo! Thanks for confirming. We can\'t wait to see you at Duke! Don\'t forget to '}
      <a href={'https://hackduke.typeform.com/to/w4ZA3F?route_update_participant=xxxxx&email=' + email}
        className={classes.link}>{'upload'}</a>
      {' receipts by '}
      <div className={classes.bold}>
        Saturday 10/29/2016
      </div>
      {'. We will reimburse up to $200 for flights and $50 for gas.'}
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
      {'you\'re coming and'}
      {' '}
      <a href={'https://hackduke.typeform.com/to/w4ZA3F?route_update_participant=xxxxx&email=' + email}
        className={classes.link}>{'upload'}</a>
      {' receipts by '}
      <div className={classes.bold}> 
        Saturday 10/29/2016 
      </div>
      {'. We will reimburse up to $200 for flights and $50 for gas.'}
    </div>
  )
}

export default StatusText
