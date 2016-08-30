import { connect } from 'react-redux'
import { updateActiveIndex, updateSelectedPerson } from '../modules/roleNavigation'
import RoleList from 'components/RoleList'

const mapDispatchToProps = {
  updateActiveIndex,
  updateSelectedPerson
}

const mapStateToProps = (state) => ({
  event: state.events.currEvent,
  detailActiveIndex: state.roleNavigation.detailActiveIndex,
  roles: state.role.roles
})

export default connect(mapStateToProps, mapDispatchToProps)(RoleList)
