import React from 'react'
import {statusColorFromRole, statusMessageFromRole} from 'extensions/statusUtils'
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
          {statusMessageFromRole(this.props.status)}
        </div>
        <div>
          {this.props.email}
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

export default StatusText
