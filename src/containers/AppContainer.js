import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { push } from 'react-router-redux'
import { authenticate } from 'routes/Login/modules/authentication'

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  handleAuth () {
    const routeNames = ['/dashboard', '/login', '/application']
    const store = this.props.store
    const currRoute = store.getState().router.locationBeforeTransitions.pathname
    if (!routeNames.includes(currRoute)) {
      store.dispatch(push('/login'))
    }
    if (!store.getState().authentication.loggedIn) {
      store.dispatch(authenticate(localStorage.getItem('email'), 'password'))
    }
  }

  render () {
    const { history, routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={routes} onEnter={this.handleAuth()} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
