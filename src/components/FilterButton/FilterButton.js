import React from 'react'
import classes from './FilterButton.scss'
import { humanize } from 'extensions/stringUtils'
import { tagColorMap } from 'extensions/tagUtils'

class FilterButton extends React.Component {
  constructor () {
    super()
    this.state = {enabled: false, backgroundColor: '#FFFFFF', opacity: '0.3'}
  }

  componentDidMount () {
    const backgroundColor = tagColorMap[this.props.name]
    this.setState({backgroundColor: backgroundColor})
  }

  handleClick () {
    const opacity = !this.state.enabled ? '1.0' : '0.3'
    this.setState({opacity: opacity, enabled: !this.state.enabled})
    this.props.click(this.props.name)
  }

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    click: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={classes.tagContainer}>
        <button onClick={this.handleClick.bind(this)}
          style={{'backgroundColor': `${this.state.backgroundColor}`,
                        'opacity': `${this.state.opacity}`}}
          className={classes.tag}>
            {humanize(this.props.name)}
        </button>
      </div>
    )
  }
}

export default FilterButton
