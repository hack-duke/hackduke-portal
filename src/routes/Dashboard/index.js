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

      let email = localStorage.getItem('email')
      if (email === '' || email === null) {
        email = document.cookie.split('=')[1]
      }
      store.dispatch(fetchParticipant(email, 'code_for_good', 2017, 'fall'))

      /*  Return getComponent   */
      cb(null, Dashboard)

    /* Webpack named bundle   */
    }, 'dashboard')
  }
})
