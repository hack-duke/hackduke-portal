import { fetchAPI } from 'fetch/requestManager'
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_PARTICIPANT = 'REQUEST_PARTICIPANT'
export const RECEIVE_PARTICIPANT = 'RECEIVE_PARTICIPANT'

// ------------------------------------
// Actions
// ------------------------------------

export function requestParticipant () {
  return {
    type: REQUEST_PARTICIPANT
  }
}

export function receiveParticipant (participant) {
  return {
    type: RECEIVE_PARTICIPANT,
    payload: participant
  }
}

export const fetchParticipant = (email, eventType, year, season) => {
  return (dispatch, getState) => {
    dispatch(requestParticipant())
    const body = JSON.stringify({ email: email, season: season, year: year,
      event_type: eventType, role: 'participant' })
    fetchAPI('POST', body, 'people/role').then(data => data.json())
                          .then(json => dispatch(receiveParticipant(json)))
  }
}

export const actions = {
  requestParticipant,
  receiveParticipant,
  fetchParticipant
}

const PARTICIPANT_ACTION_HANDLERS = {
  [REQUEST_PARTICIPANT]: (state) => {
    return ({...state, fetching: true})
  },
  [RECEIVE_PARTICIPANT]: (state, action) => {
    const participant = Object.keys(action.payload).includes('errors') ? null : action.payload
    return ({...state, fetching: false, participant: participant})
  }
}

const initialState = {fetching: false, participant: null}

export default function participantReducer (state = initialState, action) {
  const handler = PARTICIPANT_ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
