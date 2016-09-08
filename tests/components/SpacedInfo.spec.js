import React from 'react'
import SpacedInfo from 'components/SpacedInfo'
import classes from 'components/SpacedInfo/SpacedInfo.scss'
import { shallow} from 'enzyme'

describe('(Component) SpacedInfo', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      titles: ["First Name", "Last Name", "Gender", "Phone"],
      descriptions: ["George", "Smith", "Male", "555-5555"]
    },
    _wrapper = shallow(<SpacedInfo {..._props} />)
  })

  it('renders 4 titles and 4 descriptions correctly', () => {
    const titles = _wrapper.instance().props.titles
    expect(_wrapper.find('.' + classes.title).filterWhere(p => p.text() === titles[0])).to.have.length(1)
    expect(_wrapper.find('.' + classes.title).filterWhere(p => p.text() === titles[1])).to.have.length(1)
    expect(_wrapper.find('.' + classes.title).filterWhere(p => p.text() === titles[2])).to.have.length(1)
    expect(_wrapper.find('.' + classes.title).filterWhere(p => p.text() === titles[3])).to.have.length(1)
    const descriptions = _wrapper.instance().props.descriptions
    expect(_wrapper.find('.' + classes.description).filterWhere(p => p.text() === descriptions[0])).to.have.length(1)
    expect(_wrapper.find('.' + classes.description).filterWhere(p => p.text() === descriptions[1])).to.have.length(1)
    expect(_wrapper.find('.' + classes.description).filterWhere(p => p.text() === descriptions[2])).to.have.length(1)
    expect(_wrapper.find('.' + classes.description).filterWhere(p => p.text() === descriptions[3])).to.have.length(1)
  })

  it('renders 3 titles and 3 descriptions correctly', () => {
    _wrapper.setProps({titles: ["First Name", "Last Name", "Gender"],
                       descriptions: ["George", "Smith", "Male"]})
    const titles = _wrapper.instance().props.titles
    expect(_wrapper.find('.' + classes.title).filterWhere(p => p.text() === titles[0])).to.have.length(1)
    expect(_wrapper.find('.' + classes.title).filterWhere(p => p.text() === titles[1])).to.have.length(1)
    expect(_wrapper.find('.' + classes.title).filterWhere(p => p.text() === titles[2])).to.have.length(1)
    const descriptions = _wrapper.instance().props.descriptions
    expect(_wrapper.find('.' + classes.description).filterWhere(p => p.text() === descriptions[0])).to.have.length(1)
    expect(_wrapper.find('.' + classes.description).filterWhere(p => p.text() === descriptions[1])).to.have.length(1)
    expect(_wrapper.find('.' + classes.description).filterWhere(p => p.text() === descriptions[2])).to.have.length(1)
  })

})