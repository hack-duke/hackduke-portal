import { connect } from 'react-redux'
import { fetchEvents, selectCurrEventType } from '../modules/events'
import NavMenu from 'components/NavMenu'

const mapDispatchToProps = {
  fetchEvents,
  selectCurrEventType
}

const mapStateToProps = (state) => ({
  events: state.events.events,
  currYear: state.events.currYear,
  currEventType: state.events.eventType,
  currSeason: state.events.currSeason
})

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
