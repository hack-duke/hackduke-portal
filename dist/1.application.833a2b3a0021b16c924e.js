webpackJsonp([1],{

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(358);
	
	var _participant = __webpack_require__(297);
	
	var _Application = __webpack_require__(379);
	
	var _Application2 = _interopRequireDefault(_Application);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  fetchParticipant: _participant.fetchParticipant
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    participant: state.participant.participant
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Application2.default);

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Application = __webpack_require__(380);
	
	var _Application2 = _interopRequireDefault(_Application);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Application2.default;

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(308);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(313);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(314);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(315);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(350);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Application = __webpack_require__(381);
	
	var _Application2 = _interopRequireDefault(_Application);
	
	var _Participant = __webpack_require__(383);
	
	var _Participant2 = _interopRequireDefault(_Participant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Application = function (_React$Component) {
	  (0, _inherits3.default)(Application, _React$Component);
	
	  function Application() {
	    (0, _classCallCheck3.default)(this, Application);
	    return (0, _possibleConstructorReturn3.default)(this, (Application.__proto__ || (0, _getPrototypeOf2.default)(Application)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Application, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.participant ? _react2.default.createElement(_Participant2.default, { participant: this.props.participant['role'],
	          person: this.props.participant['person'] }) : null
	      );
	    }
	  }]);
	  return Application;
	}(_react2.default.Component);
	
	Application.propTypes = {
	  participant: _react2.default.PropTypes.object.isRequired,
	  fetchParticipant: _react2.default.PropTypes.func.isRequired
	};
	exports.default = Application;

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(382);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(370)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(382, function() {
				var newContent = __webpack_require__(382);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(369)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Application.scss","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Participant = __webpack_require__(384);
	
	var _Participant2 = _interopRequireDefault(_Participant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Participant2.default;

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(385);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getPrototypeOf = __webpack_require__(308);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(313);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(314);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(315);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(350);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Participant = __webpack_require__(388);
	
	var _Participant2 = _interopRequireDefault(_Participant);
	
	var _SpacedInfo = __webpack_require__(390);
	
	var _SpacedInfo2 = _interopRequireDefault(_SpacedInfo);
	
	var _StackedInfo = __webpack_require__(395);
	
	var _StackedInfo2 = _interopRequireDefault(_StackedInfo);
	
	var _LinkInfo = __webpack_require__(399);
	
	var _LinkInfo2 = _interopRequireDefault(_LinkInfo);
	
	var _participantUtils = __webpack_require__(403);
	
	var _stringUtils = __webpack_require__(394);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Participant = function (_React$Component) {
	  (0, _inherits3.default)(Participant, _React$Component);
	
	  function Participant() {
	    (0, _classCallCheck3.default)(this, Participant);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Participant.__proto__ || (0, _getPrototypeOf2.default)(Participant)).call(this));
	
	    _this.state = { personalInfo: [], linkInfo: [] };
	    return _this;
	  }
	
	  (0, _createClass3.default)(Participant, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.updateState(this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.updateState(nextProps);
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState(props) {
	      var _this2 = this;
	
	      var personalInfo = _participantUtils.personalInfoFields.map(function (field) {
	        return _this2.getInfo(field, props);
	      });
	      var linkInfo = _participantUtils.linkFields.map(function (field) {
	        return _this2.getInfo(field, props);
	      });
	      this.setState({ personalInfo: this.filterInfo(personalInfo),
	        linkInfo: this.filterInfo(linkInfo) });
	    }
	  }, {
	    key: 'getInfo',
	    value: function getInfo(field, props) {
	      var key = (0, _stringUtils.dehumanize)(field);
	      var description = props.person[key];
	      if (description == null) {
	        description = props.participant[key];
	      }
	      return { title: field, description: description };
	    }
	
	    /* eslint eqeqeq: 0 */
	
	  }, {
	    key: 'filterInfo',
	    value: function filterInfo(info) {
	      return info.filter(function (info) {
	        return info['description'] != null && info['description'] != '';
	      });
	    }
	  }, {
	    key: 'renderList',
	    value: function renderList(title, list) {
	      if (list.length > 0) {
	        return _react2.default.createElement(
	          'div',
	          { className: _Participant2.default.listContainer },
	          _react2.default.createElement(
	            'div',
	            { className: _Participant2.default.listSubject },
	            title,
	            ': ',
	            _react2.default.createElement(
	              'span',
	              { className: _Participant2.default.listText },
	              ' ',
	              list,
	              ' '
	            )
	          )
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _Participant2.default.container },
	        _react2.default.createElement(
	          'div',
	          { className: _Participant2.default.leftPadding },
	          _react2.default.createElement(
	            'div',
	            { className: _Participant2.default.spacedInfoSeparator, style: { 'marginTop': '0', 'paddingTop': '50px' } },
	            (0, _stringUtils.humanize)(this.props.person['first_name'] + ' ' + this.props.person['last_name'])
	          ),
	          _react2.default.createElement(_SpacedInfo2.default, { titles: this.state.personalInfo.map(function (info) {
	              return info['title'];
	            }),
	            descriptions: this.state.personalInfo.map(function (info) {
	              return info['description'];
	            }) })
	        ),
	        _react2.default.createElement('div', { className: _Participant2.default.lineSeparator }),
	        _react2.default.createElement(
	          'div',
	          { className: _Participant2.default.leftPadding },
	          _react2.default.createElement(
	            'div',
	            { className: _Participant2.default.spacedInfoSeparator },
	            ' More Info '
	          ),
	          this.renderList('Dietary Restrictions', this.props.participant['dietary_restrictions'].join(', ')),
	          this.renderList('Skills', this.props.participant['skills'].join(', ')),
	          (0, _keys2.default)(this.state.linkInfo).length > 0 ? _react2.default.createElement(_LinkInfo2.default, { titles: this.state.linkInfo.map(function (info) {
	              return info['title'];
	            }),
	            links: this.state.linkInfo.map(function (info) {
	              return info['description'];
	            }) }) : null
	        ),
	        _react2.default.createElement('div', { className: _Participant2.default.lineSeparator }),
	        _react2.default.createElement(
	          'div',
	          { className: _Participant2.default.leftPadding },
	          _react2.default.createElement(
	            'div',
	            { className: _Participant2.default.spacedInfoSeparator },
	            ' Custom Questions '
	          ),
	          (0, _keys2.default)(this.props.participant['custom']).length > 0 ? _react2.default.createElement(_StackedInfo2.default, { text: this.props.participant['custom'] }) : null
	        )
	      );
	    }
	  }]);
	  return Participant;
	}(_react2.default.Component);
	
	Participant.propTypes = {
	  participant: _react2.default.PropTypes.object.isRequired,
	  person: _react2.default.PropTypes.object.isRequired
	};
	exports.default = Participant;

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(386), __esModule: true };

/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(387);
	module.exports = __webpack_require__(265).Object.keys;

/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(296)
	  , $keys    = __webpack_require__(279);
	
	__webpack_require__(312)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(389);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(370)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(389, function() {
				var newContent = __webpack_require__(389);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(369)();
	// imports
	
	
	// module
	exports.push([module.id, ".Participant__container___1iGGM{padding-bottom:30px}.Participant__spacedInfoSeparator___1C8B1{margin-top:30px;font-size:20px;width:100%;margin-bottom:20px}.Participant__lineSeparator___2f8g2{height:1px;padding-top:10px;width:100%;border-bottom:1px solid #dedede}.Participant__listText___2dso5{color:#000}.Participant__listSubject___36js_{color:rgba(0,0,0,.6)}.Participant__listContainer___1S54C{padding-bottom:20px}.Participant__leftPadding___Y2y3N{padding-left:10px}.Participant__edit___14vcu{display:inline-block;float:right;background-color:#f9f9fc;border:0;border-radius:5px;color:#fff;padding-bottom:2px;font-size:15px}.Participant__edit___14vcu:hover{opacity:.7}.Participant__edit___14vcu:focus{outline:none}", "", {"version":3,"sources":["/./src/components/Participant/src/components/Participant/Participant.scss","/./src/components/Participant/src/styles/_base.scss"],"names":[],"mappings":"AAEA,gCACC,mBAAqB,CACrB,0CAGA,gBAAiB,eACD,WACJ,kBACQ,CACpB,oCAGA,WAAY,iBACM,WACN,+BCGM,CDDlB,+BAGA,UAAe,CACf,kCAGA,oBAAW,CACX,oCAGA,mBAAqB,CACrB,kCAGA,iBAAmB,CACnB,2BAGA,qBAAsB,YACT,yBAEb,SAAU,kBACS,WACJ,mBACK,cACJ,CAChB,iCAGA,UAAa,CACb,iCAGA,YAAc,CACd","file":"Participant.scss","sourcesContent":["@import 'src/styles/base';\n\n.container {\n\tpadding-bottom: 30px;\n}\n\n.spacedInfoSeparator {\n\tmargin-top: 30px;\n\tfont-size: 20px;\n\twidth: 100%;\n\tmargin-bottom: 20px;\n}\n\n.lineSeparator {\n\theight: 1px;\n\tpadding-top: 10px;\n\twidth: 100%;\n\tborder-bottom: 1px solid $lightGrey;\n}\n\n.listText{\n\tcolor: #000000;\n}\n\n.listSubject {\n\tcolor: rgba(0, 0, 0, 0.6);\n}\n\n.listContainer {\n\tpadding-bottom: 20px;\n}\n\n.leftPadding {\n\tpadding-left: 10px;\n}\n\n.edit {\n\tdisplay: inline-block; \n\tfloat: right;\n\tbackground-color: $lightestGrey;\n\tborder: 0;\n\tborder-radius: 5px;\n\tcolor: #FFFFFF;\n\tpadding-bottom: 2px;\n\tfont-size: 15px;\n}\n\n.edit:hover {\n\topacity: 0.7;\n}\n\n.edit:focus {\n\toutline: none;\n}","/*\nApplication Settings Go Here\n------------------------------------\nThis file acts as a bundler for all variables/mixins/themes, so they\ncan easily be swapped out without `core.scss` ever having to know.\n\nFor example:\n\n@import './variables/colors';\n@import './variables/components';\n@import './themes/default';\n*/\n\n$navMenuWidth: 250px;\n\n$navLight: #192738;\n$navDark: #0F1B27;\n$navMedium: #162330;\n\n$lightGrey: #DEDEDE;\n$lightestGrey: #F9F9FC;\n\n$inputGray: #F0F0F0;\n$loginBlue: #33A4F4;\n$loginGray: #C5C5C5;\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "Participant__container___1iGGM",
		"spacedInfoSeparator": "Participant__spacedInfoSeparator___1C8B1",
		"lineSeparator": "Participant__lineSeparator___2f8g2",
		"listText": "Participant__listText___2dso5",
		"listSubject": "Participant__listSubject___36js_",
		"listContainer": "Participant__listContainer___1S54C",
		"leftPadding": "Participant__leftPadding___Y2y3N",
		"edit": "Participant__edit___14vcu"
	};

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SpacedInfo = __webpack_require__(391);
	
	var _SpacedInfo2 = _interopRequireDefault(_SpacedInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SpacedInfo2.default;

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(308);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(313);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(314);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(315);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(350);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SpacedInfo = __webpack_require__(392);
	
	var _SpacedInfo2 = _interopRequireDefault(_SpacedInfo);
	
	var _stringUtils = __webpack_require__(394);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SpacedInfo = function (_React$Component) {
	  (0, _inherits3.default)(SpacedInfo, _React$Component);
	
	  function SpacedInfo() {
	    (0, _classCallCheck3.default)(this, SpacedInfo);
	    return (0, _possibleConstructorReturn3.default)(this, (SpacedInfo.__proto__ || (0, _getPrototypeOf2.default)(SpacedInfo)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(SpacedInfo, [{
	    key: 'handleBreakStyle',
	    value: function handleBreakStyle(title) {
	      return title.toLowerCase() === 'email' ? 'break-all' : 'word-wrap';
	    }
	  }, {
	    key: 'renderIndex',
	    value: function renderIndex(index) {
	      var title = this.props.titles[index];
	      var description = this.props.descriptions[index];
	      return _react2.default.createElement(
	        'div',
	        { className: _SpacedInfo2.default.section, key: index },
	        _react2.default.createElement(
	          'div',
	          { className: _SpacedInfo2.default.title },
	          (0, _stringUtils.humanize)(title)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _SpacedInfo2.default.description, style: { 'wordBreak': '' + this.handleBreakStyle(title) } },
	          description
	        )
	      );
	    }
	  }, {
	    key: 'renderRow',
	    value: function renderRow(index) {
	      if (index + 1 < this.props.titles.length) {
	        return _react2.default.createElement(
	          'div',
	          { className: _SpacedInfo2.default.rowContainer, key: index },
	          this.renderIndex(index),
	          this.renderIndex(index + 1)
	        );
	      } else {
	        return this.renderIndex(index);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _SpacedInfo2.default.container },
	        this.props.titles.map(function (title, index) {
	          if (index % 2 === 0) {
	            return _this2.renderRow(index);
	          }
	        })
	      );
	    }
	  }]);
	  return SpacedInfo;
	}(_react2.default.Component);
	
	SpacedInfo.propTypes = {
	  titles: _react2.default.PropTypes.array.isRequired,
	  descriptions: _react2.default.PropTypes.array.isRequired
	};
	exports.default = SpacedInfo;

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(393);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(370)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(393, function() {
				var newContent = __webpack_require__(393);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(369)();
	// imports
	
	
	// module
	exports.push([module.id, ".SpacedInfo__container___3JZpI{display:inline-block;width:100%;transform:translateX(-20px)}.SpacedInfo__rowContainer___3UrBG{display:-ms-flexbox;display:flex}.SpacedInfo__title___3hcWS{opacity:.7}.SpacedInfo__section___3ekb9{padding-bottom:30px;padding-left:20px;display:inline-block;width:50%}", "", {"version":3,"sources":["/./src/components/SpacedInfo/src/components/SpacedInfo/SpacedInfo.scss"],"names":[],"mappings":"AAEA,+BACC,qBAAsB,WACV,2BACS,CACrB,kCAGA,oBAAA,YAAc,CACd,2BAGA,UAAa,CACb,6BAOA,oBAAqB,kBACF,qBACG,SACX,CACX","file":"SpacedInfo.scss","sourcesContent":["@import 'src/styles/base';\n\n.container {\n\tdisplay: inline-block;\n\twidth: 100%;\n\ttransform: translateX(-20px);\n}\n\n.rowContainer {\n\tdisplay: flex;\n}\n\n.title {\n\topacity: 0.7;\n}\n\n.description {\n\n}\n\n.section {\n\tpadding-bottom: 30px;\n\tpadding-left: 20px;\n\tdisplay: inline-block;\n\twidth: 50%;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "SpacedInfo__container___3JZpI",
		"rowContainer": "SpacedInfo__rowContainer___3UrBG",
		"title": "SpacedInfo__title___3hcWS",
		"section": "SpacedInfo__section___3ekb9"
	};

/***/ },

/***/ 394:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.capitalize = capitalize;
	exports.humanize = humanize;
	exports.dehumanize = dehumanize;
	exports.intersperse = intersperse;
	function capitalize(str) {
	  return str.toLowerCase().replace(/(?:^|\s|-)\S/g, function (m) {
	    return m.toUpperCase();
	  });
	}
	
	function humanize(str) {
	  return capitalize(str.toString().replace(/[_-]/g, ' '));
	}
	
	function dehumanize(str) {
	  return str.toString().replace(' ', '_').toLowerCase();
	}
	
	function intersperse(arr, sep) {
	  if (arr.length === 0) {
	    return [];
	  }
	  return arr.slice(1).reduce(function (xs, x, i) {
	    return xs.concat([sep, x]);
	  }, [arr[0]]);
	}

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _StackedInfo = __webpack_require__(396);
	
	var _StackedInfo2 = _interopRequireDefault(_StackedInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _StackedInfo2.default;

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(308);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(313);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(314);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(315);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(350);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _StackedInfo = __webpack_require__(397);
	
	var _StackedInfo2 = _interopRequireDefault(_StackedInfo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var StackedInfo = function (_React$Component) {
	  (0, _inherits3.default)(StackedInfo, _React$Component);
	
	  function StackedInfo() {
	    (0, _classCallCheck3.default)(this, StackedInfo);
	    return (0, _possibleConstructorReturn3.default)(this, (StackedInfo.__proto__ || (0, _getPrototypeOf2.default)(StackedInfo)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(StackedInfo, [{
	    key: 'renderRow',
	    value: function renderRow(index) {
	      if (index + 1 < this.props.text.length) {
	        var question = this.props.text[index];
	        var answer = this.props.text[index + 1];
	        return _react2.default.createElement(
	          'div',
	          { className: _StackedInfo2.default.section, key: index },
	          _react2.default.createElement(
	            'div',
	            { className: _StackedInfo2.default.question },
	            question
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _StackedInfo2.default.answer },
	            answer
	          )
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _StackedInfo2.default.container },
	        this.props.text.map(function (title, index) {
	          if (index % 2 === 0) {
	            return _this2.renderRow(index);
	          }
	        })
	      );
	    }
	  }]);
	  return StackedInfo;
	}(_react2.default.Component);
	
	StackedInfo.propTypes = {
	  text: _react2.default.PropTypes.array.isRequired
	};
	exports.default = StackedInfo;

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(398);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(370)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(398, function() {
				var newContent = __webpack_require__(398);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(369)();
	// imports
	
	
	// module
	exports.push([module.id, ".StackedInfo__container___2FBSd{width:100%}.StackedInfo__section___3y7G3{margin-bottom:20px}.StackedInfo__question___1xrCh{padding-bottom:10px;opacity:.7}.StackedInfo__answer___26XXC,.StackedInfo__question___1xrCh{font-size:13px;display:block}", "", {"version":3,"sources":["/./src/components/StackedInfo/src/components/StackedInfo/StackedInfo.scss"],"names":[],"mappings":"AAEA,gCACC,UAAY,CACZ,8BAGA,kBAAoB,CACpB,+BAIA,oBAAqB,UAER,CACb,4DAJA,eAAgB,aAED,CAOf","file":"StackedInfo.scss","sourcesContent":["@import 'src/styles/base';\n\n.container {\n\twidth: 100%;\n}\t\n\n.section {\n\tmargin-bottom: 20px;\n}\n\n.question {\n\tfont-size: 13px;\n\tpadding-bottom: 10px;\n\tdisplay: block;\n\topacity: 0.7;\n}\n\n.answer {\n\tfont-size: 13px;\n\tdisplay: block;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "StackedInfo__container___2FBSd",
		"section": "StackedInfo__section___3y7G3",
		"question": "StackedInfo__question___1xrCh",
		"answer": "StackedInfo__answer___26XXC"
	};

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _LinkInfo = __webpack_require__(400);
	
	var _LinkInfo2 = _interopRequireDefault(_LinkInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _LinkInfo2.default;

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(308);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(313);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(314);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(315);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(350);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LinkInfo = __webpack_require__(401);
	
	var _LinkInfo2 = _interopRequireDefault(_LinkInfo);
	
	var _stringUtils = __webpack_require__(394);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LinkInfo = function (_React$Component) {
	  (0, _inherits3.default)(LinkInfo, _React$Component);
	
	  function LinkInfo() {
	    (0, _classCallCheck3.default)(this, LinkInfo);
	    return (0, _possibleConstructorReturn3.default)(this, (LinkInfo.__proto__ || (0, _getPrototypeOf2.default)(LinkInfo)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(LinkInfo, [{
	    key: 'prepareLink',
	    value: function prepareLink(link) {
	      if (!link.toLowerCase().includes('http')) {
	        return 'http://' + link;
	      } else {
	        return link;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _LinkInfo2.default.container },
	        _react2.default.createElement(
	          'div',
	          { style: { 'opacity': '0.7', 'display': 'inline-block' } },
	          ' Links: '
	        ),
	        ' ',
	        (0, _stringUtils.intersperse)(this.props.titles.map(function (title, index) {
	          return _react2.default.createElement(
	            'a',
	            { href: _this2.prepareLink(_this2.props.links[index]),
	              className: _LinkInfo2.default.link,
	              key: index,
	              target: '_blank' },
	            title
	          );
	        }), ', ')
	      );
	    }
	  }]);
	  return LinkInfo;
	}(_react2.default.Component);
	
	LinkInfo.propTypes = {
	  links: _react2.default.PropTypes.array.isRequired,
	  titles: _react2.default.PropTypes.array.isRequired
	};
	exports.default = LinkInfo;

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(402);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(370)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(402, function() {
				var newContent = __webpack_require__(402);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(369)();
	// imports
	
	
	// module
	exports.push([module.id, ".LinkInfo__container___3lgSq{padding-bottom:20px}", "", {"version":3,"sources":["/./src/components/LinkInfo/src/components/LinkInfo/LinkInfo.scss"],"names":[],"mappings":"AAEA,6BACC,mBAAqB,CACrB","file":"LinkInfo.scss","sourcesContent":["@import 'src/styles/base';\n\n.container {\n\tpadding-bottom: 20px;\n}\n\n.link {\n  \n}"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "LinkInfo__container___3lgSq"
	};

/***/ },

/***/ 403:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var personalInfoFields = exports.personalInfoFields = ['Email', 'Gender', 'Phone', 'School', 'Graduation Year', 'Major'];
	var linkFields = exports.linkFields = ['Github', 'Resume', 'Website', 'Portfolio'];

/***/ }

});
//# sourceMappingURL=1.application.833a2b3a0021b16c924e.js.map