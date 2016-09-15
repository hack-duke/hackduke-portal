import React from 'react'
import LinkInfo from 'components/Dashboard'
import classes from 'components/Dashboard/Dashboard.scss'
import { shallow} from 'enzyme'

describe('(Component) LinkInfo', () => {
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
      }
    },
    _wrapper = shallow(<LinkInfo {..._props} />)
  })

  it('header', () => {
    const titles = _wrapper.instance().props.titles
    expect(_wrapper.find('a').filterWhere(a => a.text() === titles[0])).to.have.length(1)
    expect(_wrapper.find('a').filterWhere(a => a.text() === titles[1])).to.have.length(1)
    expect(_wrapper.find('a').filterWhere(a => a.text() === titles[2])).to.have.length(1)
    expect(_wrapper.find('a').filterWhere(a => a.text() === titles[3])).to.have.length(1)
  })

})
