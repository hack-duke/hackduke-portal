import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { push } from 'react-router-redux'

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  handle404 () {
    const routeNames = ['/dashboard', '/login', '/application']
    const currRoute = this.props.store.getState().router.locationBeforeTransitions.pathname
    if (!routeNames.includes(currRoute)) {
      this.props.store.dispatch(push('/login'))
    }
  }

  render () {
    const { history, routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={routes} onEnter={this.handle404()} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
