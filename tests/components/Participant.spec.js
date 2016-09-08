import React from 'react'
import Participant from 'components/Participant'
import StackedInfo from 'components/StackedInfo'
import SpacedInfo from 'components/SpacedInfo'
import LinkInfo from 'components/LinkInfo'
import classes from 'components/Participant/Participant.scss'
import { shallow} from 'enzyme'

describe('(Component) Participant', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      participant: {
        "event_id": 13,
        "team_id": null,
        "status": "accepted",
        "graduation_year": 2018,
        "over_eighteen": 1,
        "attending": null,
        "major": "Computer Science",
        "school": "North Carolina State University",
        "dietary_restrictions": [
          "None"
        ],
        "website": null,
        "resume": null,
        "github": "www.github.com",
        "travel": null,
        "portfolio": null,
        "skills": [],
        "custom": [
          "Q: Why do you want to attend Ideate?",
          "asdasd",
          "Q: Tell us about your design experience.",
          "asdasd"
        ]
      },
      person: {'first_name': 'George', 'email': 'george.smith@gmail.com'},
      roleType: 'participant accepted',
    }
    _wrapper = shallow(<Participant {..._props} />)
  })

  it('has 3 spaced info seperators, including one with the person\'s name', () => {
    expect(_wrapper.find('.' + classes.spacedInfoSeparator)).to.have.length(3)
  })

  it('always has a <SpacedInfo />', () => {
    expect(_wrapper.find(StackedInfo)).to.have.length(1)
  })

  it('has a <StackedInfo /> given initial props', () => {
    expect(_wrapper.find(StackedInfo)).to.have.length(1)
  })

  it('doesn\'t have a <StackedInfo /> when custom is empty', () => {
    const participant = { ..._wrapper.instance().props.participant, custom: []}
    _wrapper.setProps({participant: participant})
    expect(_wrapper.find(StackedInfo)).to.have.length(0)
  })

  it('has a <LinkInfo /> when updateState is called (github is in initial props)', () => {
    _wrapper.instance().updateState(_wrapper.instance().props)
    _wrapper.setState(_wrapper.instance().state)
    expect(_wrapper.find(LinkInfo)).to.have.length(1)
  })

  it('doesn\'t have a <LinkInfo /> when github is null and updateState is called', () => {
     const participant = { ..._wrapper.instance().props.participant, github: null}
    _wrapper.setProps({participant: participant})
    _wrapper.instance().updateState(_wrapper.instance().props)
    _wrapper.setState(_wrapper.instance().state)
    expect(_wrapper.find(LinkInfo)).to.have.length(0)
  })

  it('has 1 list container for given initial props (skills is empty)', () => {
    expect(_wrapper.find('.' + classes.listContainer)).to.have.length(1)
  })

  it('has 0 list containers for when dietary restrictions and skills are empty', () => {
    const participant = { ..._wrapper.instance().props.participant, dietary_restrictions: []}
    _wrapper.setProps({participant: participant})
    expect(_wrapper.find('.' + classes.listContainer)).to.have.length(0)
  })

})