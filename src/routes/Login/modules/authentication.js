import { fetchAPI } from 'fetch/requestManager'
import { push } from 'react-router-redux'
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_AUTHENTICATION = 'REQUEST_AUTHENTICATION'
export const RECEIVE_AUTHENTICATION = 'RECEIVE_AUTHENTICATION'
export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD'
export const RECEIVE_RESET_PASSWORD = 'RECEIVE_RESET_PASSWORD'
export const REQUEST_SET_PASSWORD = 'REQUEST_SET_PASSWORD'
export const RECEIVE_SET_PASSWORD = 'RECEIVE_SET_PASSWORD'
export const UPDATE_AUTH_STATUS = 'UPDATE_AUTH_STATUS'
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

// ------------------------------------
// Actions
// ------------------------------------

export function updateMessage (message) {
  return {
    type: UPDATE_MESSAGE,
    payload: message
  }
}

export function updateAuthStatus (status) {
  return {
    type: UPDATE_AUTH_STATUS,
    payload: status
  }
}

export function requestAuthentication () {
  return {
    type: REQUEST_AUTHENTICATION
  }
}

export function receiveAuthentication (body) {
  return {
    type: RECEIVE_AUTHENTICATION,
    payload: body
  }
}

export function requestResetPassword () {
  return {
    type: REQUEST_RESET_PASSWORD
  }
}

export function receiveResetPassword (body) {
  return {
    type: RECEIVE_RESET_PASSWORD,
    payload: body
  }
}

export function requestSetPassword () {
  return {
    type: REQUEST_SET_PASSWORD
  }
}

export function receiveSetPassword (body) {
  return {
    type: RECEIVE_SET_PASSWORD,
    payload: body
  }
}

export const authenticate = (email, password) => {
  localStorage.setItem('email', email)
  return (dispatch, getState) => {
    dispatch(requestAuthentication())
    const body = JSON.stringify({ email: email, password: password })
    fetchAPI('POST', body, 'people/authenticate')
    .then(data => data.json())
    .then(json => dispatch(receiveAuthentication(json)))
  }
}

export const resetPassword = (email) => {
  return (dispatch, getState) => {
    dispatch(requestResetPassword())
    const body = JSON.stringify({ email: email })
    fetchAPI('POST', body, 'people/reset_password')
    .then(data => data.json())
    .then(json => dispatch(receiveResetPassword(json)))
  }
}

export const setPassword = (email, password) => {
  return (dispatch, getState) => {
    dispatch(requestSetPassword())
    const body = JSON.stringify({ email: email, password: password })
    fetchAPI('POST', body, 'people/set_password')
    .then(data => data.json())
    .then(json => dispatch(receiveSetPassword(json)))
  }
}

export const login = () => {
  return (dispatch, getState) => {
    dispatch(push('/application'))
  }
}

export const actions = {
  requestAuthentication,
  receiveAuthentication,
  requestResetPassword,
  receiveResetPassword,
  requestSetPassword,
  receiveSetPassword,
  resetPassword,
  setPassword,
  authenticate,
  updateAuthStatus,
  login
}

export const AuthenticationStatus = {
  TEMPORARY: 'temporary',
  PERMANENT: 'permanent',
  FAILURE: 'failure'
}

const checkAuthentication = (body) => {
  const keys = Object.keys(body)
  if (keys.includes('success') && keys.includes('authentication')) {
    return body['authentication']
  }
  return AuthenticationStatus.FAILURE
}

const generateAuthenticationState = (body, state) => {
  const status = checkAuthentication(body)
  let message = status !== AuthenticationStatus.FAILURE ? body['success'] : body['errors']
  return ({...state, fetching: false, authStatus: status, message: message})
}

const AUTHENTICATION_ACTION_HANDLERS = {
  [REQUEST_AUTHENTICATION]: (state) => {
    return ({...state, fetching: true})
  },
  [REQUEST_RESET_PASSWORD]: (state) => {
    return ({...state, fetching: true})
  },
  [REQUEST_SET_PASSWORD]: (state) => {
    return ({...state, fetching: true})
  },
  [RECEIVE_AUTHENTICATION]: (state, action) => {
    return generateAuthenticationState(action.payload, state)
  },
  [RECEIVE_RESET_PASSWORD]: (state, action) => {
    const keys = Object.keys(action.payload)
    const body = action.payload
    let message = keys.includes('success') ? body['success'] : body['errors']
    return ({...state, fetching: false, message: message})
  },
  [RECEIVE_SET_PASSWORD]: (state, action) => {
    return generateAuthenticationState(action.payload, state)
  },
  [UPDATE_AUTH_STATUS]: (state, action) => {
    return ({...state, authStatus: action.payload})
  },
  [UPDATE_MESSAGE]: (state, action) => {
    return ({...state, message: action.payload})
  }
}

const initialState = {fetching: false, authStatus: '', message: ''}

export default function authenticationReducer (state = initialState, action) {
  const handler = AUTHENTICATION_ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
