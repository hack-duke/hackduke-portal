import { connect } from 'react-redux'
import { logout } from 'routes/Login/modules/authentication'
import NavMenu from 'components/NavMenu'

const mapDispatchToProps = {
  logout
}

const mapStateToProps = (state) => ({
  participant: state.participant.participant
})

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
