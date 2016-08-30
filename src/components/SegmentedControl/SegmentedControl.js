import React from 'react'
import classes from './SegmentedControl.scss'
import { humanize } from 'extensions/stringUtils'
import { lightGreen, lightGrey } from 'extensions/colorUtils'

class SegmentedControl extends React.Component {

  constructor () {
    super()
    this.state = {dynamicPadding: 0}
  }

  static propTypes = {
    titles: React.PropTypes.array.isRequired,
    click: React.PropTypes.func,
    active: React.PropTypes.number
  }

  componentDidMount () {
    this.updateState(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.updateState(nextProps)
  }

  updateState (props) {
    const dynamicPadding = (Math.max(0, (50 - 5 * props.titles.length)) + 1) / 2
    this.setState({dynamicPadding: dynamicPadding})
  }

  handleClick (index) {
    this.props.click(index)
  }

  handleActiveBorderStyle (index, active) {
    return this.props.active === index ? lightGreen : lightGrey
  }

  handleActiveTextStyle (index, active) {
    return this.props.active === index ? '1.0' : '0.5'
  }

  render () {
    return (
      <div>
        <div className={classes.segmentContainer}>
          {this.props.titles.map((title, index) =>
            <div className={classes.segment}
              style={{'paddingRight': `${this.state.dynamicPadding}px`,
                         'paddingLeft': `${this.state.dynamicPadding}px`,
                         'borderBottom': `1.5px solid ${this.handleActiveBorderStyle(index, this.props.active)}`,
                         'opacity': `${this.handleActiveTextStyle(index, this.props.active)}`}}
              key={index}
              onClick={() => this.handleClick(index).bind(this)}>
              {humanize(title)}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SegmentedControl
