import { fetchAPI } from 'fetch/requestManager'
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const UPDATE_CURR_EVENT = 'UPDATE_CURR_EVENT_TYPE'

// ------------------------------------
// Actions
// ------------------------------------

export function requestEvents () {
  return {
    type: REQUEST_EVENTS
  }
}

// temporary thing to speed up development
export function receiveEvents (events, dispatch) {
  return {
    type: RECEIVE_EVENTS,
    payload: events
  }
}

export function updateCurrEvent (event) {
  return {
    type: UPDATE_CURR_EVENT,
    payload: event
  }
}

/* eslint eqeqeq: 0 */

export const selectCurrEventType = (eventType) => {
  return (dispatch, getState) => {
    const eventsState = getState().events
    const currEvents = eventsState.events
    for (let i = 0; i < currEvents.length; i++) {
      let currEvent = currEvents[i]
      if (currEvent['event_type'] == eventType &&
          currEvent['season'] == eventsState.currSeason &&
          currEvent['year'] == eventsState.currYear) {
        dispatch(updateCurrEvent(currEvent))
      }
    }
  }
}

export const fetchEvents = (year, season) => {
  return (dispatch, getState) => {
    dispatch(requestEvents())
    const body = JSON.stringify({ season: season, year: year })
    fetchAPI('POST', body, 'events/semester').then(data => data.json())
                          .then(json => dispatch(receiveEvents(json, dispatch)))
  }
}

export const actions = {
  requestEvents,
  receiveEvents,
  fetchEvents,
  updateCurrEvent,
  selectCurrEventType
}

const EVENT_ACTION_HANDLERS = {
  [REQUEST_EVENTS]: (state) => {
    return ({...state, fetching: true})
  },
  [RECEIVE_EVENTS]: (state, action) => {
    return ({...state, fetching: false, events: action.payload})
  },
  [UPDATE_CURR_EVENT]: (state, action) => {
    return ({...state, currEvent: action.payload})
  }
}

// year/season shouldn't be hard-coded in the initialState
const initialState = {fetching: false, events: [], currType: '', currYear: '2016', currSeason: 'spring'}
export default function eventReducer (state = initialState, action) {
  const handler = EVENT_ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
