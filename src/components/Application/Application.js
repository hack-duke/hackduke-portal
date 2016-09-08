import React from 'react'
import classes from './Application.scss'
import Participant from 'components/Participant'
import NavMenu from 'redux/containers/NavMenuContainer'

class Application extends React.Component {

  static propTypes = {
    participant: React.PropTypes.object,
    fetchParticipant: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <NavMenu />
        <div className={classes.container}>
          {this.props.participant ? (
            <Participant participant={this.props.participant['role']}
              person={this.props.participant['person']} />
          ) : null}
        </div>
      </div>
    )
  }
}

export default Application
