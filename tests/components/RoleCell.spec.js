import React from 'react'
import { bindActionCreators } from 'redux'
import RoleCell from 'components/RoleCell'
import classes from 'components/RoleCell/RoleCell.scss'
import { shallow} from 'enzyme'

describe('(Component) RoleCell', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      person: {
        "first_name": "Anthony",
        "last_name": "Smith",
        "phone": null,
        "email": "anthony.smith@gmail.com",
        "gender": "Male"
      },
      roles: [
        {
          "participant confirmed": {
            "event_id": 13,
            "team_id": null,
            "status": "confirmed",
            "graduation_year": null,
            "over_eighteen": 1,
            "attending": 1,
            "major": null,
            "school": null,
            "dietary_restrictions": [
              "None"
            ],
            "website": null,
            "resume": null,
            "github": null,
            "travel": null,
            "portfolio": null,
            "skills": [],
            "custom": [
              "Q: Why do you want to attend?",
              "",
              "Q: Tell us about your experience.",
              ""
            ]
          }
        }
      ],
      bottomBorderColor: '#FFFFF'
    }
    _wrapper = shallow(<RoleCell {..._props} />)
  })

  it('has a name text section', () => {
    expect(_wrapper.find('.' + classes.nameText)).to.have.length(1)
  })

  it('has a sub text section', () => {
    expect(_wrapper.find('.' + classes.subText)).to.have.length(1)
  })

  it('has a number of tags as specified in the initial props', () => {
    expect(_wrapper.find('.' + classes.tag)).to.have.length(_wrapper.instance().props.roles.length)
  })

  it('has 0 tags when the roles prop is set to zero', () => {
    _wrapper.setProps({roles: []})
    expect(_wrapper.find('.' + classes.tag)).to.have.length(0)
  })


})