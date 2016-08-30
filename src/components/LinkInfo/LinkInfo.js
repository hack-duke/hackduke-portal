import React from 'react'
import classes from './LinkInfo.scss'
import { intersperse } from 'extensions/stringUtils'

class LinkInfo extends React.Component {

  static propTypes = {
    links: React.PropTypes.array.isRequired,
    titles: React.PropTypes.array.isRequired
  }

  prepareLink (link) {
    if (!link.toLowerCase().includes('http')) {
      return 'http://' + link
    } else {
      return link
    }
  }

  render () {
    return (
      <div className={classes.container}>
        <div style={{'opacity': '0.7', 'display': 'inline-block'}}> Links: </div>
        {' '}
        {intersperse(this.props.titles.map((title, index) =>
          <a href={this.prepareLink(this.props.links[index])}
            className={classes.link}
            key={index}
            target={'_blank'}>
              {title}
          </a>
        ), ', ')}
      </div>
    )
  }
}

export default LinkInfo
