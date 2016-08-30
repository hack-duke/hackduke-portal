import React from 'react'
import { bindActionCreators } from 'redux'
import RoleDetail from 'components/RoleDetail'
import RoleCell from 'components/RoleCell'
import SegmentedControl from 'components/SegmentedControl'
import Participant from 'components/Participant'
import { shallow} from 'enzyme'

describe('(Component) RoleDetail', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      person: {'first_name': 'George', 'email': 'george.smith@gmail.com'},
      roles: [
        {
          "participant accepted": {
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
            "github": null,
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
      ],
      ...bindActionCreators({
        editPersonAction: (_spies.editPersonAction = sinon.spy()),
        updateTypeformAttribute: (_spies.updateTypeformAttribute = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<RoleDetail {..._props} />)
  })

  it('renders one <RoleCell /> and one <SegmentedControl />', () => {
    expect(_wrapper.find(RoleCell)).to.have.length(1)
    expect(_wrapper.find(SegmentedControl)).to.have.length(1)
  })

  it('renders one <Participant /> given initial props (one participant role)', () => {
    expect(_wrapper.find(Participant)).to.have.length(1)
  })

  it('updates active index on handleSegmentClick', () => {
    _wrapper.instance().handleSegmentClick(1)
    expect(_wrapper.instance().state.active).to.equal(1)
  })

  it('dispatches updateTypeformAttribute and editPersonAction on handleEditClick', () => {
    _wrapper.instance().handleEditClick()
    _spies.dispatch.should.have.been.called
    _spies.updateTypeformAttribute.should.have.been.called
    _spies.editPersonAction.should.have.been.called
  })

  it('updates active index to 0 when updating props (roles)', () => {
    _wrapper.setProps(_wrapper.instance().props)
    expect(_wrapper.instance().state.active).to.equal(0)
  })

})
