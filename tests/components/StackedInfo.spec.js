import React from 'react'
import StackedInfo from 'components/StackedInfo'
import classes from 'components/StackedInfo/StackedInfo.scss'
import { shallow} from 'enzyme'

describe('(Component) StackedInfo', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      text: ["Question One", "Answer One", "Question Two", "Answer Two"]
    },
    _wrapper = shallow(<StackedInfo {..._props} />)
  })

  it('renders 2 questions and 2 answers with their respective text', () => {
    const text = _wrapper.instance().props.text
    expect(_wrapper.find('.' + classes.question).filterWhere(p => p.text() === text[0])).to.have.length(1)
    expect(_wrapper.find('.' + classes.answer).filterWhere(p => p.text() === text[1])).to.have.length(1)
    expect(_wrapper.find('.' + classes.question).filterWhere(p => p.text() === text[2])).to.have.length(1)
    expect(_wrapper.find('.' + classes.answer).filterWhere(p => p.text() === text[3])).to.have.length(1)
  })

  it('does not include the last question if text array has an odd number of elements', () => {
    _wrapper.setProps({text: ["Question One", "Answer One", "Question Two"]})
    const text = _wrapper.instance().props.text
    expect(_wrapper.find('.' + classes.question).filterWhere(p => p.text() === text[0])).to.have.length(1)
    expect(_wrapper.find('.' + classes.answer).filterWhere(p => p.text() === text[1])).to.have.length(1)
    expect(_wrapper.find('.' + classes.question).filterWhere(p => p.text() === text[2])).to.have.length(0)
  })

})