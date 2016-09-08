import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import participant from 'redux/modules/participant'
import authentication from 'routes/Login/modules/authentication'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    participant,
    router,
    authentication,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
