import { connect } from 'react-redux'
import { updateActiveIndex, typeformBackAction } from '../modules/roleNavigation'
import Typeform from 'components/Typeform'

const mapDispatchToProps = {
  updateActiveIndex,
  typeformBackAction
}

const mapStateToProps = (state) => ({
  event: state.events.currEvent,
  typeformActiveIndex: state.roleNavigation.typeformActiveIndex,
  menuTitle: state.roleNavigation.typeformMenuTitle,
  actionFilter: state.roleNavigation.typeformMenuActionFilter,
  roleFilter: state.roleNavigation.typeformMenuRoleFilter,
  email: state.roleNavigation.email
})

export default connect(mapStateToProps, mapDispatchToProps)(Typeform)
