import React from 'react'
import { bindActionCreators } from 'redux'
import { IndexLink } from 'react-router'
import NavMenu from 'components/NavMenu'
import classes from 'components/NavMenu/NavMenu.scss'
import { shallow } from 'enzyme'
import { navMenuWidth } from 'constants/design'

describe('(Component) NavMenu', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      ...bindActionCreators({
        logout: (_spies.logout = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<NavMenu {..._props} />)
  })

  it('dispatches logout when clicking on the logout option in the nav menu', () => {
    _wrapper.find(IndexLink).at(2).simulate('click');
    _spies.dispatch.should.have.been.called
    _spies.logout.should.have.been.called
  })

  it('renders the correct number of IndexLinks (3)', () => {
    expect(_wrapper.find(IndexLink)).to.have.length(3)
  })

  it('clicking IndexLinks sends to correct page', () => {
    expect(_wrapper.find('[to="/dashboard"]')).to.have.length(1)
    expect(_wrapper.find('[to="/application"]')).to.have.length(1)
    expect(_wrapper.find('[to="/login"]')).to.have.length(1)
  })

  it('pressing menu button changes state correctly', () => {
    _wrapper.instance().setState({enabled: false, menuLeft: '0px', buttonLeft: '0px'})
    _wrapper.instance().handleClick()
    expect(_wrapper.instance().state.enabled).to.eql(true)
    expect(_wrapper.instance().state.menuLeft).to.eql('0px')
    expect(_wrapper.instance().state.buttonLeft).to.eql(`${navMenuWidth}px`)
  })
})