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
export const UPDATE_LOGGED_IN = 'UPDATED_LOGGED_IN'

// ------------------------------------
// Actions
// ------------------------------------

export function updateLoggedIn (status) {
  return {
    type: UPDATE_LOGGED_IN,
    payload: status
  }
}

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

export function receiveAuthentication (body, dispatch) {
  const status = checkAuthentication(body)
  if (status === AuthenticationStatus.PERMANENT) {
    localStorage.setItem('session', body['session_token'])
    dispatch(login())
  }
  if (status === AuthenticationStatus.FAILURE || status === '') {
    dispatch(logout())
  }
  return {
    type: RECEIVE_AUTHENTICATION,
    payload: {
      status,
      message: checkMessage(status, body),
      loggedIn: checkLoggedIn(status)
    }
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
  const status = checkAuthentication(body)
  if (status === AuthenticationStatus.PERMANENT) {
    localStorage.setItem('session', body['session_token'])
  }
  return {
    type: RECEIVE_SET_PASSWORD,
    payload: {
      status,
      message: checkMessage(status, body),
      loggedIn: checkLoggedIn(status)
    }
  }
}

/* eslint handle-callback-err: 0 */

export const authenticate = (email, password) => {
  return (dispatch, getState) => {
    dispatch(requestAuthentication())
    const sessionToken = localStorage.getItem('session')
    localStorage.setItem('email', email)
    const body = JSON.stringify({email: email, password: password, session_token: sessionToken})
    fetchAPI('POST', body, 'people/authenticate')
    .catch(error => dispatch(logout()))
    .then(data => data.json())
    .then(json => dispatch(receiveAuthentication(json, dispatch)))
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
    dispatch(push('/dashboard'))
  }
}

export const logout = () => {
  return (dispatch, getState) => {
    localStorage.removeItem('session')
    localStorage.setItem('email', '')
    dispatch(push('/login'))
    dispatch(updateAuthStatus(''))
    dispatch(updateMessage(''))
    dispatch(updateLoggedIn(false))
  }
}

export const actions = {
  requestAuthentication,
  receiveAuthentication,
  requestResetPassword,
  receiveResetPassword,
  requestSetPassword,
  receiveSetPassword,
  updateLoggedIn,
  resetPassword,
  setPassword,
  authenticate,
  updateAuthStatus,
  login,
  logout
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

const checkMessage = (status, body) => {
  return status !== AuthenticationStatus.FAILURE ? body['success'] : body['errors']
}

const checkLoggedIn = (status) => {
  return status === AuthenticationStatus.PERMANENT
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
    return ({...state, fetching: false, authStatus: action.payload.status,
      message: action.payload.message, loggedIn: action.payload.loggedIn})
  },
  [RECEIVE_RESET_PASSWORD]: (state, action) => {
    const keys = Object.keys(action.payload)
    const body = action.payload
    let message = keys.includes('success') ? body['success'] : body['errors']
    return ({...state, fetching: false, message: message})
  },
  [RECEIVE_SET_PASSWORD]: (state, action) => {
    return ({...state, fetching: false, authStatus: action.payload.status,
      message: action.payload.message, loggedIn: action.payload.loggedIn})
  },
  [UPDATE_AUTH_STATUS]: (state, action) => {
    return ({...state, authStatus: action.payload})
  },
  [UPDATE_MESSAGE]: (state, action) => {
    return ({...state, message: action.payload})
  },
  [UPDATE_LOGGED_IN]: (state, action) => {
    return ({...state, loggedIn: action.payload})
  }
}

const initialState = {fetching: false, authStatus: '', message: '', loggedIn: false}

export default function authenticationReducer (state = initialState, action) {
  const handler = AUTHENTICATION_ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
