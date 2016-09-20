import React from 'react'
import NavMenu from 'redux/containers/NavMenuContainer'
import { navMenuWidth, tabletBreakpoint } from 'constants/design'
import '../../styles/core.scss'

class CoreLayout extends React.Component {

  constructor () {
    super()
    this.handleResize = this.handleResize.bind(this)
    this.state = {width: window.innerWidth}
  }

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize () {
    this.setState({width: window.innerWidth})
  }

  hasLoggedIn () {
    return window.location.href.includes('/dashboard') || window.location.href.includes('/application')
  }

  navMenuDisplay () {
    return hasLoggedIn() ? 'block' : 'none'
  }

  mainContainerPadding () {
    return !hasLoggedIn() || this.state.width <= tabletBreakpoint ? '0px' : `${navMenuWidth}px`
  }

  render () {
    return (
      <div>
        <div style={{'display': this.navMenuDisplay()}} >
          <NavMenu />
        </div>
        <div style={{'paddingLeft': this.mainContainerPadding()}}>
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default CoreLayout
