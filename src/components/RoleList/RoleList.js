import React from 'react'
import classes from './RoleList.scss'
import { humanize, dehumanize } from 'extensions/stringUtils'
import PlusIcon from './assets/plus.png'
import SearchIcon from './assets/search.png'
import { topLevelTagFromRole, tagFromRole } from 'extensions/tagUtils'
import { lightestGrey, lightGrey } from 'extensions/colorUtils'
import { DisplayType } from 'routes/Role/modules/roleNavigation'
import Infinite from 'react-infinite'
import RoleCell from 'components/RoleCell'

class RoleList extends React.Component {

  constructor () {
    super()
    this.state = {rowHeight: 100, headerHeight: 150, tableHeight: window.innerHeight - 150,
                  windowHeight: window.innerHeight, value: '', roles: []}
    this.handleResize = this.handleResize.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSelectClick = this.handleSelectClick.bind(this)
  }

  static propTypes = {
    event: React.PropTypes.object.isRequired,
    handlePlusClick: React.PropTypes.func.isRequired,
    handleCellClick: React.PropTypes.func.isRequired,
    updateActiveIndex: React.PropTypes.func.isRequired,
    detailActiveIndex: React.PropTypes.number.isRequired,
    roles: React.PropTypes.array.isRequired,
    updateSelectedPerson: React.PropTypes.func.isRequired
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
    this.updateState(this.props)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  componentWillReceiveProps (nextProps) {
    this.updateState(nextProps)
  }

  updateState (nextProps) {
    if (this.props.detailActiveIndex === nextProps.detailActiveIndex) {
      this.setState({roles: this.filterRolesByText(this.state.value, nextProps.roles)})
    }
    if (this.state.roles.length === 0) {
      this.setState({roles: nextProps.roles})
    }
  }

  handleResize (event) {
    this.setState({windowHeight: window.innerHeight,
                   tableHeight: window.innerHeight - this.state.headerHeight})
  }

  handleActiveStyle (index) {
    return this.props.detailActiveIndex === index ? lightestGrey : '#FFFFFF'
  }

  // for search auto-complete filtering
  handleChange (event) {
    let text = event.target.value
    const invalidSearch = this.state.roles.length === 0 && (text.length > this.state.value.length)
    if (!invalidSearch) {
      this.state.value = text
      const filteredRoles = this.filterRolesByText(event.target.value, this.props.roles)
      this.props.updateActiveIndex(-1, DisplayType.DETAIL)
      this.setState({roles: filteredRoles})
    }
  }

  handleSelectClick (index) {
    this.props.updateSelectedPerson(this.state.roles[index])
    this.props.updateActiveIndex(index, DisplayType.DETAIL)
    this.props.handleCellClick(index, true)
  }

  filterRolesByText (text, roles) {
    if (text === '') {
      return roles
    }
    return roles.filter(role => this.filterByName(role, text))
  }

  // full-text search only implemented for participants and roles currently (hacky)
  filterByName (role, text) {
    const firstName = role['person']['first_name'].toLowerCase()
    const lastName = role['person']['last_name'].toLowerCase()
    const email = role['person']['email'].toLowerCase()
    const gender = role['person']['gender']
    let searchString = firstName + ' ' + lastName + email
    if (gender !== null && gender !== '') {
      searchString += gender.toLowerCase()
    }
    role['roles'].forEach((role, index) => {
      const topLevelTag = topLevelTagFromRole(role).toLowerCase()
      searchString += dehumanize(tagFromRole(role))
      if (topLevelTag === 'participant') {
        const attributes = Object.values(role)[0]
        searchString += attributes['graduation_year'].toString().toLowerCase()
        searchString += attributes['major'].toLowerCase()
        searchString += attributes['school'].toLowerCase()
        attributes['dietary_restrictions'].forEach(restriction => searchString += restriction.toLowerCase())
        attributes['custom'].forEach(q => searchString += q.toLowerCase())
      }
    })
    return searchString.includes(text.toLowerCase())
  }

  render () {
    return (
      <div>
        <div className={classes.flexContainer} style={{'borderBottom': `1px solid ${lightGrey}`}}>
          <div className={classes.tenPercentSpacer} />
          <div className={classes.headerContainer}>
            <div className={classes.roleListHeaderText}>
              {humanize(`${this.props.event['event_type']} ${this.props.event['season']} ${this.props.event['year']}`)}
            </div>
            <button className={classes.plusContainer}>
              <img alt=''
                className={classes.plusIcon}
                src={PlusIcon}
                onClick={() => this.props.handlePlusClick()} />
            </button>
            <div className={classes.searchContainer}>
              <img alt='' className={classes.searchIcon} src={SearchIcon} />
              <input
                className={classes.searchBar}
                type='text'
                placeholder='Search...'
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <Infinite containerHeight={this.state.tableHeight}
          preloadAdditionalHeight={10 * this.state.tableHeight}
          elementHeight={this.state.rowHeight}>
          {this.state.roles.map((element, index) =>
            <div style={{'backgroundColor': `${this.handleActiveStyle(index)}`}}
              className={classes.cellFlexContainer}
              onClick={() => this.handleSelectClick(index)}
              key={index}>
              <div className={classes.tenPercentSpacer} />
              <div className={classes.roleCellWrapper}>
                <RoleCell key={index}
                  bottomBorderColor={lightGrey}
                  person={this.state.roles[index]['person']}
                  roles={this.state.roles[index]['roles']} />
              </div>
            </div>
          )}
        </Infinite>
      </div>
    )
  }
}

export default RoleList
