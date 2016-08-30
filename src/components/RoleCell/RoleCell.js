import React from 'react'
import classes from './RoleCell.scss'
import { capitalize } from 'extensions/stringUtils'
import { tagFromRole, tagColorFromRole } from 'extensions/tagUtils'

class RoleCell extends React.Component {

  static propTypes = {
    person: React.PropTypes.object.isRequired,
    roles: React.PropTypes.array.isRequired,
    bottomBorderColor: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div className={classes.container}
        style={{'borderBottom': `1px solid ${this.props.bottomBorderColor}`}}>
        <div className={classes.textContainer}>
          <div className={classes.nameText}>
            {`${capitalize(this.props.person['first_name'])} ${capitalize(this.props.person['last_name'])}`}
          </div>
          <div className={classes.subText}>
            {this.props.person['email']}
          </div>
          <div>
            {this.props.roles.map((role, index) =>
              <div style={{'backgroundColor': tagColorFromRole(role)}}
                className={classes.tag}
                key={index}>
                {tagFromRole(role)}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default RoleCell
