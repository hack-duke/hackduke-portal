import React from 'react'
import { bindActionCreators } from 'redux'
import Role from 'components/Role'
import classes from 'components/Role/Role.scss'
import RoleList from 'routes/Role/containers/RoleListContainer'
import Typeform from 'routes/Role/containers/TypeformContainer'
import RoleDetail from 'routes/Role/containers/RoleDetailContainer'
import { shallow} from 'enzyme'

describe('(Component) Role', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      detailActiveStatus: false,
      typeformActiveStatus: true,
      selectedPerson: {},
      event: {},
      ...bindActionCreators({
        fetchRoles: (_spies.fetchRoles = sinon.spy()),
        seePersonAction: (_spies.seePersonAction = sinon.spy()),
        addPersonAction: (_spies.addPersonAction = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Role {..._props} />)
  })

  it('render <Typeform /> given initial props', () => {
    expect(_wrapper.find(RoleList)).to.have.length(1)
    expect(_wrapper.find(RoleDetail)).to.have.length(0)
    expect(_wrapper.find(Typeform)).to.have.length(1)
  })

  it('renders <RoleDetail /> and hides <Typeform /> after switching status booleans', () => {
    _wrapper.setProps({ detailActiveStatus: true, typeformActiveStatus: false, selectedPerson: {selected: 'selected'} })
    expect(_wrapper.find(RoleList)).to.have.length(1)
    expect(_wrapper.find(RoleDetail)).to.have.length(1)
    expect(_wrapper.find(Typeform)).to.have.length(0)
  })

  it('dispatches addPersonAction when calling handlePlusClick', () => {
    _wrapper.instance().handlePlusClick()
    _spies.dispatch.should.have.been.called
    _spies.addPersonAction.should.have.been.called
  })

  it('dispatches seePersonAction when calling cellPlusClick', () => {
    _wrapper.instance().handleCellClick(0, false)
    _spies.dispatch.should.have.been.called
    _spies.seePersonAction.should.have.been.called
  })

})