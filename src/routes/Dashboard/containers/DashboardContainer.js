import { connect } from 'react-redux'
import { fetchParticipant } from 'redux/modules/participant'
import Dashboard from 'components/Dashboard'

const mapDispatchToProps = {
  fetchParticipant
}

const mapStateToProps = (state) => ({
  participant: state.participant.participant
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
