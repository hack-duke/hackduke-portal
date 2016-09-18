import React from 'react'
import classes from './Typeform.scss'

class Typeform extends React.Component {

  static propTypes = {
    email: React.PropTypes.string.isRequired
  }

  render () {
    let baseUrl = 'https://hackduke.typeform.com/to/IdQYtU?email='
    baseUrl += this.props.email
    baseUrl += '&route_update_participant=xxxxx'
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
