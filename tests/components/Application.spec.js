import React from 'react'
import Application from 'components/Application'
import NavMenu from 'redux/containers/NavMenuContainer'
import Participant from 'components/Participant'
import Typeform from 'components/Participant'
import classes from 'components/Application/Application.scss'
import { shallow } from 'enzyme'

describe('(Component) Application', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      participant: {
        'person': {'first_name': 'George', 'email': 'george.smith@gmail.com'},
        'role': {
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
        }
      }
    },
    _wrapper = shallow(<Application {..._props} />)
  })

  it('renders a Participant', () => {
    expect(_wrapper.find(Participant)).to.have.length(1)
  })

  it('renders a Typeform', () => {
    expect(_wrapper.find(Typeform)).to.have.length(1)
  })

  it('doesn\'t render Participant or Typeform when participant is null', () => {
    _wrapper.setProps({participant: null})
    expect(_wrapper.find(Typeform)).to.have.length(0)
    expect(_wrapper.find(Participant)).to.have.length(0)
  })

})