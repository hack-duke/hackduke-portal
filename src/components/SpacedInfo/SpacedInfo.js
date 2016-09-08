import React from 'react'
import classes from './SpacedInfo.scss'
import { humanize } from 'extensions/stringUtils'

class SpacedInfo extends React.Component {

  static propTypes = {
    titles: React.PropTypes.array.isRequired,
    descriptions: React.PropTypes.array.isRequired
  }

  handleBreakStyle (title) {
    return title.toLowerCase() === 'email' ? 'break-all' : 'word-wrap'
  }

  renderIndex (index) {
    const title = this.props.titles[index]
    const description = this.props.descriptions[index]
    return (
      <div className={classes.section} key={index}>
        <p className={classes.title}>
          {humanize(title)}
        </p>
        <p className={classes.description} style={{'wordBreak': `${this.handleBreakStyle(title)}`}}>
          {description}
        </p>
      </div>
    )
  }

  renderRow (index) {
    if (index + 1 < this.props.titles.length) {
      return (
        <div className={classes.rowContainer} key={index}>
          {this.renderIndex(index)}
          {this.renderIndex(index + 1)}
        </div>
      )
    } else {
      return this.renderIndex(index)
    }
  }

  render () {
    return (
      <div className={classes.container}>
        {this.props.titles.map((title, index) => {
          if (index % 2 === 0) {
            return this.renderRow(index)
          }
        }
        )}
      </div>
    )
  }
}

export default SpacedInfo
