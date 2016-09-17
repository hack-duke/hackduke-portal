import React from 'react'
import { bindActionCreators } from 'redux'
import Login from 'components/Login'
import classes from 'components/Login/Login.scss'
import { AuthenticationStatus } from 'routes/Login/modules/authentication'
import { shallow } from 'enzyme'

describe('(Component) Login', () => {
  let _props, _spies, _wrapper
   beforeEach(() => {
    _spies = {}
    _props = {
      authStatus: '',
      message: '',
      fetching: false,
      ...bindActionCreators({
        authenticate: (_spies.authenticate = sinon.spy()),
        setPassword: (_spies.setPassword = sinon.spy()),
        resetPassword: (_spies.resetPassword = sinon.spy()),
        updateMessage: (_spies.updateMessage = sinon.spy()),
        updateAuthStatus: (_spies.updateAuthStatus = sinon.spy()),
        login: (_spies.login = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Login {..._props} />)
  })
   
  it('renders 2 inputs, 3 buttons, and a logo image with correct text given initial props', () => {
    expect(_wrapper.find('input').at(0).node.props.placeholder.trim()).to.eql('Email')
    expect(_wrapper.find('input').at(1).node.props.placeholder.trim()).to.eql('Password')
    expect(_wrapper.find('button').at(0).text().trim()).to.eql('Log in')
    expect(_wrapper.find('button').at(1).text().trim()).to.eql('Register')
    expect(_wrapper.find('button').at(2).text().trim()).to.eql('Forgot password?')
    expect(_wrapper.find('input')).to.have.length(2)
    expect(_wrapper.find('button')).to.have.length(3)
    expect(_wrapper.find('img')).to.have.length(1)
  })

  it('renders 1 input, 2 buttons, and a logo image with correct text when clicking password help', () => {
    expect(_wrapper.find('button').at(2).text().trim()).to.eql('Forgot password?')
    _wrapper.find('button').at(2).simulate('click');
    expect(_wrapper.find('input').at(0).node.props.placeholder.trim()).to.eql('Email')
    expect(_wrapper.find('button').at(0).text().trim()).to.eql('Send password')
    expect(_wrapper.find('button').at(1).text().trim()).to.eql('Back to log in')
    expect(_wrapper.find('input')).to.have.length(1)
    expect(_wrapper.find('button')).to.have.length(2)
    expect(_wrapper.find('img')).to.have.length(1)
  })

  it('dispatches reset password when clicking on send password', () => {
    _wrapper.setState({sendPassword: true})
    expect(_wrapper.find('button').at(0).text().trim()).to.eql('Send password')
    _wrapper.find('button').at(0).simulate('click');
    _spies.dispatch.should.have.been.called
    _spies.resetPassword.should.have.been.called
    _wrapper.setState({sendPassword: false})
  })

  it('renders original elements when clicking back to log in after clicking on send password', () => {
    _wrapper.setState({sendPassword: true})
    expect(_wrapper.find('button').at(1).text().trim()).to.eql('Back to log in')
    _wrapper.find('button').at(1).simulate('click');
    expect(_wrapper.find('input')).to.have.length(2)
    expect(_wrapper.find('input').at(0).node.props.placeholder.trim()).to.eql('Email')
    expect(_wrapper.find('input').at(1).node.props.placeholder.trim()).to.eql('Password')
    expect(_wrapper.find('button').at(0).text().trim()).to.eql('Log in')
    expect(_wrapper.find('button').at(1).text().trim()).to.eql('Register')
    expect(_wrapper.find('button').at(2).text().trim()).to.eql('Forgot password?')
    expect(_wrapper.find('input')).to.have.length(2)
    expect(_wrapper.find('button')).to.have.length(3)
    expect(_wrapper.find('img')).to.have.length(1)
    _wrapper.setState({sendPassword: false})
  })

  it('dispatches authenticate when clicking on log in', () => {
    expect(_wrapper.find('button').at(0).text().trim()).to.eql('Log in')
    _wrapper.find('button').at(0).simulate('click');
    _spies.dispatch.should.have.been.called
    _spies.authenticate.should.have.been.called
  })

  it('changes element text and sets values to empty when updating to temporary authStatus', () => {
    _wrapper.setState({firstValue: 'firstValue', secondValue: 'secondValue'})
    _wrapper.setProps({authStatus: AuthenticationStatus.TEMPORARY})
    expect(_wrapper.find('input').at(0).node.props.placeholder.trim()).to.eql('New Password')
    expect(_wrapper.find('input').at(1).node.props.placeholder.trim()).to.eql('Confirm Password')
    expect(_wrapper.find('input').at(0).node.props.value.trim()).to.eql('')
    expect(_wrapper.find('input').at(1).node.props.value.trim()).to.eql('')
    expect(_wrapper.find('button').at(1).text().trim()).to.eql('Back to log in')
    expect(_wrapper.find('button')).to.have.length(2)
  })

  it('dispatches updateAuthStatus when clicking back to log in after updating to temporary authStatus', () => {
    _wrapper.setProps({authStatus: AuthenticationStatus.TEMPORARY})
    expect(_wrapper.find('button').at(1).text().trim()).to.eql('Back to log in')
    _wrapper.find('button').at(1).simulate('click');
    _spies.dispatch.should.have.been.called
    _spies.updateAuthStatus.should.have.been.called
  })

  it('dispatches updateMessage when passwords don\'t match when clicking set password', () => {
    _wrapper.setProps({authStatus: AuthenticationStatus.TEMPORARY})
    _wrapper.setState({firstValue: 'firstValue', secondValue: 'secondValue'})
    expect(_wrapper.find('button').at(0).text().trim()).to.eql('Set password')
    _wrapper.find('button').at(0).simulate('click');
    _spies.dispatch.should.have.been.called
    _spies.updateMessage.should.have.been.called
  })

  it('dispatches setPassword when passwords do match when clicking set password', () => {
    _wrapper.setProps({authStatus: AuthenticationStatus.TEMPORARY})
    _wrapper.setState({firstValue: 'password', secondValue: 'password'})
    expect(_wrapper.find('button').at(0).text().trim()).to.eql('Set password')
    _wrapper.find('button').at(0).simulate('click');
    _spies.dispatch.should.have.been.called
    _spies.setPassword.should.have.been.called
  })

  it('dispatches login when updating to permanent authStatus', () => {
    _wrapper.setProps({authStatus: AuthenticationStatus.PERMANENT})
    _spies.dispatch.should.have.been.called
    _spies.login.should.have.been.called
  })

})


