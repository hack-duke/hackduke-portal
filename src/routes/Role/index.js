import { injectReducer } from '../../store/reducers'
import { fetchRoles } from './modules/role'

export default (store) => ({
  path: 'role/:eventType/:year/:season',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Role = require('./containers/RoleContainer').default
      const reducer = require('./modules/role').default

      const params = nextState.params

      injectReducer(store, { key: 'role', reducer })
      store.dispatch(fetchRoles(params.eventType, params.year, params.season))

      /*  Return getComponent   */
      cb(null, Role)

    /* Webpack named bundle   */
    }, 'role')
  }
})
