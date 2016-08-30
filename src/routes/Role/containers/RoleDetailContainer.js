import { connect } from 'react-redux'
import { editPersonAction, updateTypeformAttribute } from '../modules/roleNavigation'
import RoleDetail from 'components/RoleDetail'

const mapDispatchToProps = {
  editPersonAction,
  updateTypeformAttribute
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(RoleDetail)
