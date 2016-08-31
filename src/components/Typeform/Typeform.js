import React from 'react'
import classes from './Typeform.scss'
import NavBar from 'components/NavBar'
import { navBarWidth } from 'extensions/designConstants'
import { tagColorMap } from 'extensions/tagUtils'
import { DisplayType } from 'routes/Role/modules/roleNavigation'

class Typeform extends React.Component {
  constructor () {
    super()
    this.state = {windowWidth: window.innerWidth,
                  rectWidth: this.calcRectWidth(),
                  rectPadding: this.calcRectPadding(),
                  rectMargin: this.calcRectMargin(),
                  activeIndices: [],
                  allName: []}
    this.handleResize = this.handleResize.bind(this)
    this.handleBackClick = this.handleBackClick.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  static propTypes = {
    event: React.PropTypes.object.isRequired,
    email: React.PropTypes.string,
    roleFilter: React.PropTypes.string,
    actionFilter: React.PropTypes.string,
    typeformActiveIndex: React.PropTypes.number.isRequired,
    updateActiveIndex: React.PropTypes.func.isRequired,
    menuTitle: React.PropTypes.string.isRequired,
    typeformBackAction: React.PropTypes.func.isRequired
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
    this.filterForms(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.filterForms(nextProps)
  }

  filterForms (nextProps) {
    const routes = nextProps.event['form_routes']
    const indices = this.filterIndexArrayByWord([nextProps.actionFilter, nextProps.roleFilter], routes)
    this.setState({activeIndices: indices})
  }

  filterIndexArrayByWord (words, routes) {
    let indices = []
    for (let i = 0; i < routes.length; i++) {
      let counter = 0
      for (let j = 0; j < words.length; j++) {
        if (routes[i].includes(words[j])) {
          counter++
        }
      }
      if (counter === words.length) {
        indices.push(i)
      }
    }
    return indices
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize (event) {
    this.setState({windowWidth: window.innerWidth,
                   rectWidth: this.calcRectWidth(),
                   rectPadding: this.calcRectPadding(),
                   rectMargin: this.calcRectMargin()})
  }

  calcRectWidth () {
    return ((window.innerWidth - navBarWidth) / 2) / 2.5
  }

  calcRectPadding () {
    return ((window.innerWidth - navBarWidth) / 2) / 15
  }

  calcRectMargin () {
    return ((window.innerWidth - navBarWidth) / 2) - 2 * this.calcRectWidth() - 2 * this.calcRectPadding() - 5
  }

  colorForIndex (index) {
    const route = this.props.event['form_routes'][index]
    const routeSplit = route.split('_')
    return routeSplit.length > 2 ? tagColorMap[routeSplit[2]] : '#FFFFFF'
  }

  handleClick (index) {
    this.props.updateActiveIndex(index, DisplayType.TYPEFORM)
  }

  handleBackClick () {
    this.props.typeformBackAction()
  }

  handleRefreshClick () {
    const iframes = document.getElementsByClassName(classes.typeform)
    const currentFrame = iframes[this.props.typeformActiveIndex]
    currentFrame.src = currentFrame.src
    currentFrame.style.display = 'none'
    currentFrame.style.display = 'block'
  }

  /* eslint eqeqeq: 0 */

  handleTypeformActiveDisplay (activeIndex) {
    return this.state.activeIndices[this.props.typeformActiveIndex] == activeIndex ? 'block' : 'none'
  }

  formBaseUrl (activeIndex) {
    let baseUrl = 'https://hackduke.typeform.com/to/'
    baseUrl += this.props.event['form_ids'][activeIndex]
    baseUrl += `?${this.props.event['form_routes'][activeIndex]}=xxxxx`
    if (this.props.email !== '' && this.props.roleFilter === 'participant') {
      baseUrl += `?email=${this.props.email}`
    }
    return baseUrl
  }

  renderTypeform (index) {
    const activeIndex = [this.state.activeIndices[index]]
    if (activeIndex < this.props.event['form_names'].length) {
      let baseUrl = this.formBaseUrl(activeIndex)
      return (
        <div className={classes.frameContainer}
          style={{'display': `${this.handleTypeformActiveDisplay(activeIndex)}`}}
          key={index}>
          <NavBar leftItem={'Back'}
            leftClick={() => this.handleBackClick()}
            rightItem={'Refresh'}
            rightClick={() => this.handleRefreshClick()}
            title={this.props.event['form_names'][activeIndex]} />
          <div className={classes.spinner}>
            <embed className={classes.typeform}
              src={baseUrl}
              style={{'display': `${this.handleTypeformActiveDisplay(activeIndex)}`}} />
          </div>
        </div>
      )
    }
  }

  renderRect (activeIndex) {
    const name = this.props.event['form_names'][activeIndex]
    return (
      <div key={activeIndex}>
        <div className={classes.title}>
          {name}
        </div>
      </div>
    )
  }

  handleBackStatus () {
    return this.props.email && this.props.email !== '' ? 'Back' : ''
  }

  renderIndex (index, floatDirection) {
    const activeIndex = [this.state.activeIndices[index]]
    return (
      <button onClick={() => this.handleClick(index)} className={classes.coloredRect}
        key={index}
        style={{'width': `${this.state.rectWidth}px`,
                      'height': `${this.state.rectWidth * 1.2}px`,
                      'marginBottom': `${this.state.rectMargin}px`,
                      'backgroundColor': `${this.colorForIndex(activeIndex)}`,
                      'float': `${floatDirection}`}}>
        {this.renderRect(activeIndex)}
      </button>
    )
  }

  renderRow (index) {
    if (index + 1 < this.state.activeIndices.length) {
      return (
        <div key={index}>
          {this.renderIndex(index, 'left')}
          {this.renderIndex(index + 1, 'right')}
        </div>
      )
    } else {
      return this.renderIndex(index, 'left')
    }
  }

  render () {
    return (
      <div>
        {this.state.activeIndices.map((name, index) => {
          return this.renderTypeform(index)
        }
        )}
        {this.props.typeformActiveIndex !== -1 ? (
          null
          ) : (
          <div className={classes.typeformListContainer}>
            <NavBar title={this.props.menuTitle}
              leftItem={this.handleBackStatus()}
              leftClick={() => this.handleBackClick()} />
            <div className={classes.menuContainer}
              style={{'paddingLeft': `${this.state.rectPadding}px`,
                        'paddingRight': `${this.state.rectPadding}px`}}>
                {this.state.activeIndices.map((name, index) => {
                  if (index % 2 === 0) {
                    return this.renderRow(index)
                  }
                })}
            </div>
          </div>
          )
        }
      </div>
    )
  }
}

export default Typeform
