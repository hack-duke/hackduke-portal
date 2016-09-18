import React from 'react'
import Dashboard from 'components/Dashboard'
import classes from 'components/Dashboard/Dashboard.scss'
import Participant from 'components/Participant'
import { shallow} from 'enzyme'

describe('(Component) Dashboard', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      participant: {
        'person': {'first_name': 'George', 'email': 'george.smith@gmail.com'},
        'role': {
          'event_id': 13,
          'team_id': null,
          'status': 'accepted',
          'graduation_year': 2018,
          'over_eighteen': 1,
          'attending': null,
          'major': 'Computer Science',
          'school': 'North Carolina State University',
          'dietary_restrictions': [
            'None'
          ],
          'website': null,
          'resume': null,
          'github': 'www.github.com',
          'travel': null,
          'portfolio': null,
          'skills': [],
          'custom': [
            'Q: Why do you want to attend Ideate?',
            'asdasd',
            'Q: Tell us about your design experience.',
            'asdasd'
          ]
        }
      }
    },
    _wrapper = shallow(<Dashboard {..._props} />)
  })


  it('renders a header', function () {
    expect(_wrapper.find('.' + classes.header).filterWhere(p => p.text() === 'DASHBOARD')).to.have.length(1)
  })

  it('renders the correct status', function() {
    expect(_wrapper.find('.' + classes.status).filterWhere(p => p.text() === 'ACCEPTED')).to.have.length(1)
    // TODO: pass in status from props and check against props in this class
  })

})
