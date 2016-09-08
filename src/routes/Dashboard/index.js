import { fetchParticipant } from 'redux/modules/participant'

export default (store) => ({
  path: 'dashboard',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Dashboard = require('./containers/DashboardContainer').default

      store.dispatch(fetchParticipant(localStorage.getItem('email'), 'design_con', 2016, 'spring'))

      /*  Return getComponent   */
      cb(null, Dashboard)

    /* Webpack named bundle   */
    }, 'dashboard')
  }
})