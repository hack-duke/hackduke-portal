webpackJsonp([3],{

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(358);
	
	var _participant = __webpack_require__(297);
	
	var _Dashboard = __webpack_require__(415);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  fetchParticipant: _participant.fetchParticipant
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    participant: state.participant.participant
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Dashboard2.default);

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dashboard = __webpack_require__(416);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dashboard2.default;

/***/ },

/***/ 416:
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
	
	var _Dashboard = __webpack_require__(417);
	
	var _Dashboard2 = _interopRequireDefault(_Dashboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Dashboard = function (_React$Component) {
	  (0, _inherits3.default)(Dashboard, _React$Component);
	
	  function Dashboard() {
	    (0, _classCallCheck3.default)(this, Dashboard);
	    return (0, _possibleConstructorReturn3.default)(this, (Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Dashboard, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _Dashboard2.default.status },
	        this.props.participant ? 'Your Status: ' + this.props.participant['role']['status'].toUpperCase() : null
	      );
	    }
	  }]);
	  return Dashboard;
	}(_react2.default.Component);
	
	Dashboard.propTypes = {
	  participant: _react2.default.PropTypes.object,
	  fetchParticipant: _react2.default.PropTypes.func.isRequired
	};
	exports.default = Dashboard;

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(418);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(370)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(418, function() {
				var newContent = __webpack_require__(418);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(369)();
	// imports
	
	
	// module
	exports.push([module.id, ".Dashboard__status___2BdRh{text-align:center;font-size:30px}", "", {"version":3,"sources":["/./src/components/Dashboard/src/components/Dashboard/Dashboard.scss"],"names":[],"mappings":"AAAA,2BACE,kBAAmB,cACH,CACjB","file":"Dashboard.scss","sourcesContent":[".status {\n  text-align: center;\n  font-size: 30px;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"status": "Dashboard__status___2BdRh"
	};

/***/ }

});
//# sourceMappingURL=3.dashboard.833a2b3a0021b16c924e.js.map