import { connect } from 'react-redux'
import { logout } from 'routes/Login/modules/authentication'
import NavMenu from 'components/NavMenu'

const mapDispatchToProps = {
  logout
}

<<<<<<< HEAD
const mapStateToProps = (state) => ({ })
=======
const mapStateToProps = (state) => ({

})
>>>>>>> 0fad4cd4e57ce49597c5780eac08fd08a6b6df1e

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
