import React from 'react'
import classes from './Typeform.scss'

class Typeform extends React.Component {

  static propTypes = {
    email: React.PropTypes.string.isRequired
  }

  render () {
    let baseUrl = 'https://hackduke.typeform.com/to/dB8QHB?route_receive_participant=xxxxx&email='
    baseUrl += this.props.email
    return (
      <div className={classes.frameContainer}>
        <div className={classes.spinner}>
          <embed id='typeform' className={classes.typeform}
            src={baseUrl} />
        </div>
      </div>
    )
  }

}

export default Typeform
