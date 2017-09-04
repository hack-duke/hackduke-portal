import React from 'react'
import classes from './Application.scss'
import Participant from 'components/Participant'
import Typeform from 'components/Typeform'
import { updateChannel } from 'pusher/updateChannel'

class Application extends React.Component {

  constructor () {
    super()
    const that = this
    updateChannel.bind('trigger_update', function (data) {
      let email = localStorage.getItem('email')
      if (email === '' || email === null) {
        email = document.cookie.split('=')[1]
      }
      that.props.fetchParticipant(email, 'code_for_good', 2017, 'fall')
    })
  }

  static propTypes = {
    participant: React.PropTypes.object,
    fetchParticipant: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        {this.props.participant ? (
          <div>
            <div className={classes.applicationContainer}>
              <Participant participant={this.props.participant['role']} person={this.props.participant['person']} />
            </div>
            <div className={classes.formContainer}>
              <Typeform email={this.props.participant['person']['email']} />
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Application
