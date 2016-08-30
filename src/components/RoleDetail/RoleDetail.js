import React from 'react'
import classes from './RoleDetail.scss'
import RoleCell from 'components/RoleCell'
import Participant from 'components/Participant'
import SegmentedControl from 'components/SegmentedControl'
import { allTopLevelTags, topLevelTagFromRole, findRoleObjectForTag } from 'extensions/tagUtils'
import { TypeformAttribute } from 'extensions/typeformUtils'
import { humanize } from 'extensions/stringUtils'
import { lightestGrey } from 'extensions/colorUtils'

class RoleDetail extends React.Component {

  constructor () {
    super()
    this.state = {active: 0}
    this.handleSegmentClick = this.handleSegmentClick.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
  }

  static propTypes = {
    person: React.PropTypes.object.isRequired,
    roles: React.PropTypes.array.isRequired,
    editPersonAction: React.PropTypes.func.isRequired,
    updateTypeformAttribute: React.PropTypes.func.isRequired
  }

  componentDidMount () {
    this.updateState(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.updateState(nextProps)
  }

  updateState (props) {
    this.setState({active: 0})
  }

  handleEditClick () {
    const currentRole = this.props.roles[this.state.active]
    const name = this.props.person['first_name']
    const roleFilter = topLevelTagFromRole(currentRole)
    this.props.editPersonAction(roleFilter, name, this.props.person['email'])
    this.props.updateTypeformAttribute(`Update ${humanize(roleFilter)} ${name}`, TypeformAttribute.TITLE)
  }

  handleSegmentClick (index) {
    this.setState({active: index})
  }

  renderSegmentedControl () {
    const myTags = this.props.roles.map(role => topLevelTagFromRole(role))
    const intersection = Array.from(new Set(allTopLevelTags.filter(n => myTags.indexOf(n) !== -1)))
    if (intersection.length > 0) {
      return (<SegmentedControl titles={intersection}
        click={this.handleSegmentClick}
        active={this.state.active} />)
    }
  }

  renderDetail () {
    const myTags = this.props.roles.map(role => topLevelTagFromRole(role))
    if (this.state.active < myTags.length) {
      const tag = myTags[this.state.active]
      const longRoleType = Object.keys(this.props.roles[this.state.active])[0]
      const role = findRoleObjectForTag(tag, this.props.roles)
      switch (tag) {
        case 'participant':
          return (<Participant person={this.props.person}
            participant={role}
            roleType={longRoleType}
            clickEdit={() => this.handleEditClick()} />)
        case 'mentor':
          break
        case 'judge':
          break
        case 'speaker':
          break
        default:
          break
      }
    }
  }

  render () {
    return (
      <div>
        <div className={classes.detailContainer}>
          <RoleCell person={this.props.person}
            roles={this.props.roles}
            bottomBorderColor={lightestGrey} />
          {this.renderSegmentedControl()}
          {this.renderDetail()}
        </div>
      </div>
    )
  }
}

export default RoleDetail
