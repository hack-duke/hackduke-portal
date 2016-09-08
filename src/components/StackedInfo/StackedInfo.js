import React from 'react'
import classes from './StackedInfo.scss'

class StackedInfo extends React.Component {

  static propTypes = {
    text: React.PropTypes.array.isRequired
  }

  renderRow (index) {
    if (index + 1 < this.props.text.length) {
      const question = this.props.text[index]
      const answer = this.props.text[index + 1]
      return (
        <div className={classes.section} key={index}>
          <p className={classes.question}>
            {question}
          </p>
          <p className={classes.answer}>
            {answer}
          </p>
        </div>
      )
    }
  }

  render () {
    return (
      <div className={classes.container}>
        {this.props.text.map((title, index) => {
          if (index % 2 === 0) {
            return this.renderRow(index)
          }
        }
        )}
      </div>
    )
  }
}

export default StackedInfo
