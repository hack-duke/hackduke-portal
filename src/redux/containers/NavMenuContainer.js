import { connect } from 'react-redux'
import { logout } from 'routes/Login/modules/authentication'
import NavMenu from 'components/NavMenu'

const mapDispatchToProps = {
  logout
}

const mapStateToProps = (state) => ({ 

})

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
