import React from 'react'
import classes from './Participant.scss'
import SpacedInfo from 'components/SpacedInfo'
import StackedInfo from 'components/StackedInfo'
import LinkInfo from 'components/LinkInfo'
import { personalInfoFields, linkFields } from 'extensions/participantUtils'
import { dehumanize, humanize } from 'extensions/stringUtils'

class Participant extends React.Component {

  constructor () {
    super()
    this.state = {personalInfo: [], linkInfo: []}
  }

  static propTypes = {
    participant: React.PropTypes.object.isRequired,
    person: React.PropTypes.object.isRequired
  }

  componentDidMount () {
    this.updateState(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.updateState(nextProps)
  }

  updateState (props) {
    const personalInfo = personalInfoFields.map(field => this.getInfo(field, props))
    const linkInfo = linkFields.map(field => this.getInfo(field, props))
    this.setState({personalInfo: this.filterInfo(personalInfo),
                   linkInfo: this.filterInfo(linkInfo)})
  }

  getInfo (field, props) {
    const key = dehumanize(field)
    let description = props.person[key]
    if (description == null) {
      description = props.participant[key]
    }
    return {title: field, description: description}
  }

  /* eslint eqeqeq: 0 */

  filterInfo (info) {
    return info.filter(info => info['description'] != null && info['description'] != '')
  }

  renderList (title, list) {
    if (list.length > 0) {
      return (
        <div className={classes.listContainer}>
          <div className={classes.listSubject}>
            {title}: <span className={classes.listText}> {list} </span>
          </div>
        </div>
      )
    }
  }

  render () {
    return (
      <div className={classes.container}>

        <div className={classes.leftPadding}>
          <div className={classes.spacedInfoSeparator} style={{'marginTop': '0', 'paddingTop': '50px'}}>
            {humanize(`${this.props.person['first_name']} ${this.props.person['last_name']}`)}
          </div>
          <SpacedInfo titles={this.state.personalInfo.map(info => info['title'])}
            descriptions={this.state.personalInfo.map(info => info['description'])} />
        </div>

        <div className={classes.lineSeparator} />

        <div className={classes.leftPadding}>
          <div className={classes.spacedInfoSeparator}> More Info </div>
          {this.renderList('Dietary Restrictions', this.props.participant['dietary_restrictions'].join(', '))}
          {this.renderList('Skills', this.props.participant['skills'].join(', '))}
          {Object.keys(this.state.linkInfo).length > 0 ? (
            <LinkInfo titles={this.state.linkInfo.map(info => info['title'])}
              links={this.state.linkInfo.map(info => info['description'])} />
          ) : null}
        </div>

        <div className={classes.lineSeparator} />

        <div className={classes.leftPadding}>
          <div className={classes.spacedInfoSeparator}> Custom Questions </div>
          {Object.keys(this.props.participant['custom']).length > 0 ? (
            <StackedInfo text={this.props.participant['custom']} />
          ) : null}
        </div>

      </div>
    )
  }
}

export default Participant
