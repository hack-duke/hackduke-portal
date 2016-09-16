import React from 'react'
import NavMenu from 'redux/containers/NavMenuContainer'
import { tabletBreakpoint } from 'constants/design'
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

  navMenuDisplay (isLoginScreen) {
    return window.location.href.includes('/login') ? 'none' : 'block'
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

  mainContainerPadding (isLoginScreen) {
    console.log(this.state.width <= tabletBreakpoint)
    return window.location.href.includes('/login') || this.state.width <= tabletBreakpoint ? '0px' : '25%'
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
