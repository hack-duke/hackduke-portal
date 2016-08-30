import React from 'react'
import { bindActionCreators } from 'redux'
import NavBar from 'components/NavBar'
import classes from 'components/NavBar/NavBar.scss'
import { shallow} from 'enzyme'

describe('(Component) NavBar', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      leftItem: 'leftItem',
      leftClick: _spies.leftClick = sinon.spy(),
      rightItem: 'rightItem',
      rightClick: _spies.rightClick = sinon.spy(),
      title: 'title'
    }
    _wrapper = shallow(<NavBar {..._props} />)
  })

  it('has one title', () => {
    expect(_wrapper.find('.' + classes.barTitle)).to.have.length(1)
  })

  it('calls the left click when the left side is clicked', () => {
    const leftButton = _wrapper.find('button').filterWhere(a => a.text() === _wrapper.instance().props.leftItem)
    leftButton.simulate('click')
    _spies.leftClick.should.have.been.called
  })

  it('calls the right click when the right side is clicked', () => {
    const rightButton = _wrapper.find('button').filterWhere(a => a.text() === _wrapper.instance().props.rightItem)
    rightButton.simulate('click')
    _spies.rightClick.should.have.been.called
  })

  it('has two buttons with names given initial props', () => {
    expect(_wrapper.find('button')).to.have.length(2)
    expect(_wrapper.find('button').filterWhere(a => a.text() === _wrapper.instance().props.leftItem)).to.have.length(1)
    expect(_wrapper.find('button').filterWhere(a => a.text() === _wrapper.instance().props.rightItem)).to.have.length(1)
  })

  it('has one item if the rightItem is empty', () => {
    _wrapper.setProps({rightItem: ''})
    expect(_wrapper.find('button')).to.have.length(1)
    expect(_wrapper.find('button').filterWhere(a => a.text() === _wrapper.instance().props.leftItem)).to.have.length(1)
    expect(_wrapper.find('button').filterWhere(a => a.text() === _wrapper.instance().props.rightItem)).to.have.length(0)
  })

  it('has no buttons if both items are empty', () => {
    _wrapper.setProps({rightItem: '', leftItem: ''})
    expect(_wrapper.find('button')).to.have.length(0)
  })

})