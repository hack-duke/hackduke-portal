import { connect } from 'react-redux'
import { authenticate, setPassword, resetPassword,
         updateAuthStatus, updateMessage, login } from '../modules/authentication'
import Login from 'components/Login'

const mapDispatchToProps = {
  authenticate,
  setPassword,
  resetPassword,
  updateAuthStatus,
  updateMessage,
  login
}

const mapStateToProps = (state) => ({
  authStatus: state.authentication.authStatus,
  message: state.authentication.message,
  fetching: state.authentication.fetching
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
