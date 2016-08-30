import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import events from 'redux/navigation/modules/events'
import roleNavigation from 'routes/Role/modules/roleNavigation'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    events,
    roleNavigation,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
