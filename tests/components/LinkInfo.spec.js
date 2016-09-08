import React from 'react'
import LinkInfo from 'components/LinkInfo'
import classes from 'components/LinkInfo/LinkInfo.scss'
import { shallow} from 'enzyme'

describe('(Component) LinkInfo', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      links: ['google.com', 'http://facebook.com', 'www.espn.com', 'http://www.reddit.com'],
      titles: ['Google', 'Facebook', 'ESPN', 'Reddit']
    },
    _wrapper = shallow(<LinkInfo {..._props} />)
  })

  it('renders 4 links with their respective titles', () => {
    const titles = _wrapper.instance().props.titles
    expect(_wrapper.find('a').filterWhere(a => a.text() === titles[0])).to.have.length(1)
    expect(_wrapper.find('a').filterWhere(a => a.text() === titles[1])).to.have.length(1)
    expect(_wrapper.find('a').filterWhere(a => a.text() === titles[2])).to.have.length(1)
    expect(_wrapper.find('a').filterWhere(a => a.text() === titles[3])).to.have.length(1)
  })


  it('appends http on to links without them', () => {
    const linksWithHTTP = ['http://google.com', 'http://facebook.com', 'http://www.espn.com', 'http://www.reddit.com']
    expect(_wrapper.find({ href: linksWithHTTP[0] })).to.have.length(1)
    expect(_wrapper.find({ href: linksWithHTTP[1] })).to.have.length(1)
    expect(_wrapper.find({ href: linksWithHTTP[2] })).to.have.length(1)
    expect(_wrapper.find({ href: linksWithHTTP[3] })).to.have.length(1)
  })

})