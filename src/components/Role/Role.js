import React from 'react'
import classes from './Role.scss'
import RoleDetail from 'routes/Role/containers/RoleDetailContainer'
import RoleList from 'routes/Role/containers/RoleListContainer'
import Typeform from 'routes/Role/containers/TypeformContainer'
import { updateChannel } from 'pusher/updateChannel'

class Role extends React.Component {

  constructor () {
    super()
    const that = this
    updateChannel.bind('trigger_update', function (data) {
      that.props.fetchRoles(that.props.event['event_type'], that.props.event['year'], that.props.event['season'])
    })
    this.state = {detailDisplay: 'none', typeformDisplay: 'none'}
    this.handlePlusClick = this.handlePlusClick.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
  }

  static propTypes = {
    event: React.PropTypes.object.isRequired,
    selectedPerson: React.PropTypes.object.isRequired,
    detailActiveStatus: React.PropTypes.bool.isRequired,
    typeformActiveStatus: React.PropTypes.bool.isRequired,
    fetchRoles: React.PropTypes.func.isRequired,
    addPersonAction: React.PropTypes.func.isRequired,
    seePersonAction: React.PropTypes.func.isRequired
  }

  handleCellClick (index, scrollTop) {
    this.props.seePersonAction(index)
    if (scrollTop) {
      document.getElementsByClassName(classes.detailContainer)[0].scrollTop = 0
    }
  }

  handlePlusClick () {
    this.props.addPersonAction('Add New Role')
  }

  render () {
    return (
      <div>
        <div className={classes.roleContainer}>
          <RoleList handlePlusClick={this.handlePlusClick}
            handleCellClick={this.handleCellClick} />
        </div>
        <div className={classes.detailContainer}>
          {Object.keys(this.props.selectedPerson).length > 0 && this.props.detailActiveStatus ? (
            <RoleDetail person={this.props.selectedPerson['person']}
              roles={this.props.selectedPerson['roles']} />
          ) : null}
          {this.props.typeformActiveStatus ? (
            <Typeform event={this.props.event} />
          ) : null}
        </div>
      </div>
    )
  }
}

export default Role
