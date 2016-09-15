import React from 'react'
import Typeform from 'components/Typeform'
import classes from 'components/Typeform/Typeform.scss'
import { shallow} from 'enzyme'

describe('(Component) Typeform', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      email: 'email@email.com'
    },
    _wrapper = shallow(<Typeform {..._props} />)
  })

  it('renders an embed with the Typeform url', () => {
    const titles = _wrapper.instance().props.titles
    expect(_wrapper.find('embed')).to.have.length(1)
  })

  it('renders the Typeform with the correct src url', () => {
    expect(_wrapper.find('embed').at(0).node.props.src)
    .to.eql('https://hackduke.typeform.com/to/aMQ9pA?email=email@email.com&route_update_participant=xxxxx')
  })

})