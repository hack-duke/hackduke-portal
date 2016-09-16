import { fetchParticipant } from 'redux/modules/participant'

export default (store) => ({
  path: 'application',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Application = require('./containers/ApplicationContainer').default

      let email = localStorage.getItem('email')
      if (email === '' || email === null) {
        email = document.cookie.split('=')[1]
      }
      store.dispatch(fetchParticipant(email, 'design_con', 2016, 'spring'))

      /*  Return getComponent   */
      cb(null, Application)

    /* Webpack named bundle   */
    }, 'application')
  }
})
