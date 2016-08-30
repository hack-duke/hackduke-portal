import React from 'react'
import classes from './EventNavElement.scss'
import Collapse from 'react-collapse'
import { IndexLink } from 'react-router'
import { humanize } from 'extensions/stringUtils'

class EventNavElement extends React.Component {
  constructor () {
    super()
    this.state = {open: false}
    this.handleElementClick = this.handleElementClick.bind(this)
  }

  handleClick () {
    this.setState({open: !this.state.open})
  }

  handleElementClick (index) {
    this.props.click(this.props.elements[index]['event_type'])
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    elements: React.PropTypes.array.isRequired,
    click: React.PropTypes.func.isRequired,
    season: React.PropTypes.string.isRequired,
    year: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <button className={classes.navElement} onClick={this.handleClick.bind(this)}>
          {this.props.title}
        </button>
        <Collapse
          isOpened={this.state.open}
          fixedHeight={this.props.elements.length * 75}
          keepCollapsedContent>
          {this.props.elements.map((element, index) =>
            <div onClick={() => this.handleElementClick(index)} key={index}>
              <IndexLink className={classes.linkElement}
                to={`/role/${element['event_type']}/${this.props.year}/${this.props.season}`}>
                {humanize(element['event_type'])}
              </IndexLink>
            </div>
          )}
        </Collapse>
      </div>
    )
  }
}

export default EventNavElement
