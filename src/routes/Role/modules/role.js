import { fetchAPI } from 'fetch/requestManager'
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_ROLES = 'REQUEST_ROLES'
export const RECEIVE_ROLES = 'RECEIVE_ROLES'

// ------------------------------------
// Actions
// ------------------------------------

export function requestRoles () {
  return {
    type: REQUEST_ROLES
  }
}

export function receiveRoles (roles) {
  return {
    type: RECEIVE_ROLES,
    payload: {
      roles: roles
    }
  }
}

export const fetchRoles = (eventType, year, season) => {
  return (dispatch, getState) => {
    dispatch(requestRoles())
    const body = JSON.stringify({ season: season, year: year, event_type: eventType })
    fetchAPI('POST', body, 'people/event').then(data => data.json()).then(json => dispatch(receiveRoles(json)))
  }
}

export const actions = {
  requestRoles,
  receiveRoles,
  fetchRoles
}

const ROLE_ACTION_HANDLERS = {
  [REQUEST_ROLES]: (state) => {
    return ({...state, fetching: true})
  },
  [RECEIVE_ROLES]: (state, action) => {
    return ({...state, fetching: false, roles: action.payload.roles})
  }
}

const initialState = {fetching: false, roles: []}
export default function roleReducer (state = initialState, action) {
  const handler = ROLE_ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
