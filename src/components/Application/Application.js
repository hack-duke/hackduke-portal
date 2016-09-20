import React from 'react'
import classes from './Application.scss'
import Participant from 'components/Participant'
import Typeform from 'components/Typeform'
import { updateChannel } from 'pusher/updateChannel'

class Application extends React.Component {

  componentWillReceiveProps () {
    const that = this
    updateChannel.bind('trigger_update', function (data) {
      console.log('hii')
      that.props.fetchParticipant(that.props.participant['person']['email'], 'code_for_good', 2016, 'fall')
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
