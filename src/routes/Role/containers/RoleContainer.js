import { connect } from 'react-redux'
import { fetchRoles } from '../modules/role'
import { seePersonAction, addPersonAction } from '../modules/roleNavigation'
import Role from 'components/Role'

const mapDispatchToProps = {
  fetchRoles,
  seePersonAction,
  addPersonAction
}

const mapStateToProps = (state) => ({
  event: state.events.currEvent,
  selectedPerson: state.roleNavigation.selected,
  detailActiveStatus: state.roleNavigation.detailActiveStatus,
  typeformActiveStatus: state.roleNavigation.typeformActiveStatus
})

export default connect(mapStateToProps, mapDispatchToProps)(Role)
