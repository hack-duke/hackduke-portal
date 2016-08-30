webpackJsonp([1],{

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(365);
	
	var _role = __webpack_require__(416);
	
	var _roleNavigation = __webpack_require__(307);
	
	var _Role = __webpack_require__(418);
	
	var _Role2 = _interopRequireDefault(_Role);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  fetchRoles: _role.fetchRoles,
	  seePersonAction: _roleNavigation.seePersonAction,
	  addPersonAction: _roleNavigation.addPersonAction
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    event: state.events.currEvent,
	    selectedPerson: state.roleNavigation.selected,
	    detailActiveStatus: state.roleNavigation.detailActiveStatus,
	    typeformActiveStatus: state.roleNavigation.typeformActiveStatus
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Role2.default);

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Role = __webpack_require__(419);
	
	var _Role2 = _interopRequireDefault(_Role);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Role2.default;

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(420);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Role = __webpack_require__(423);
	
	var _Role2 = _interopRequireDefault(_Role);
	
	var _RoleDetailContainer = __webpack_require__(425);
	
	var _RoleDetailContainer2 = _interopRequireDefault(_RoleDetailContainer);
	
	var _RoleListContainer = __webpack_require__(485);
	
	var _RoleListContainer2 = _interopRequireDefault(_RoleListContainer);
	
	var _TypeformContainer = __webpack_require__(505);
	
	var _TypeformContainer2 = _interopRequireDefault(_TypeformContainer);
	
	var _updateChannel = __webpack_require__(516);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Role = function (_React$Component) {
	  (0, _inherits3.default)(Role, _React$Component);
	
	  function Role() {
	    (0, _classCallCheck3.default)(this, Role);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Role.__proto__ || (0, _getPrototypeOf2.default)(Role)).call(this));
	
	    var that = _this;
	    _updateChannel.updateChannel.bind('trigger_update', function (data) {
	      that.props.fetchRoles(that.props.event['event_type'], that.props.event['year'], that.props.event['season']);
	    });
	    _this.state = { detailDisplay: 'none', typeformDisplay: 'none' };
	    _this.handlePlusClick = _this.handlePlusClick.bind(_this);
	    _this.handleCellClick = _this.handleCellClick.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(Role, [{
	    key: 'handleCellClick',
	    value: function handleCellClick(index, scrollTop) {
	      this.props.seePersonAction(index);
	      if (scrollTop) {
	        document.getElementsByClassName(_Role2.default.detailContainer)[0].scrollTop = 0;
	      }
	    }
	  }, {
	    key: 'handlePlusClick',
	    value: function handlePlusClick() {
	      this.props.addPersonAction('Add New Role');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _Role2.default.roleContainer },
	          _react2.default.createElement(_RoleListContainer2.default, { handlePlusClick: this.handlePlusClick,
	            handleCellClick: this.handleCellClick })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _Role2.default.detailContainer },
	          (0, _keys2.default)(this.props.selectedPerson).length > 0 && this.props.detailActiveStatus ? _react2.default.createElement(_RoleDetailContainer2.default, { person: this.props.selectedPerson['person'],
	            roles: this.props.selectedPerson['roles'] }) : null,
	          this.props.typeformActiveStatus ? _react2.default.createElement(_TypeformContainer2.default, { event: this.props.event }) : null
	        )
	      );
	    }
	  }]);
	  return Role;
	}(_react2.default.Component);
	
	Role.propTypes = {
	  event: _react2.default.PropTypes.object.isRequired,
	  selectedPerson: _react2.default.PropTypes.object.isRequired,
	  detailActiveStatus: _react2.default.PropTypes.bool.isRequired,
	  typeformActiveStatus: _react2.default.PropTypes.bool.isRequired,
	  fetchRoles: _react2.default.PropTypes.func.isRequired,
	  addPersonAction: _react2.default.PropTypes.func.isRequired,
	  seePersonAction: _react2.default.PropTypes.func.isRequired
	};
	exports.default = Role;

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(421), __esModule: true };

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(422);
	module.exports = __webpack_require__(264).Object.keys;

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(295)
	  , $keys    = __webpack_require__(278);
	
	__webpack_require__(319)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(424);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(424, function() {
				var newContent = __webpack_require__(424);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
	// imports
	
	
	// module
	exports.push([module.id, ".Role__roleContainer___HilLH{top:0;display:inline-block;height:100vh;width:50%;border-right:1px solid #f9f9fc}.Role__detailContainer___1WtSr{display:inline-block;overflow:auto;width:50%;height:101vh;background-color:#f9f9fc}", "", {"version":3,"sources":["/./src/components/Role/src/components/Role/Role.scss","/./src/components/Role/src/styles/_base.scss"],"names":[],"mappings":"AAEA,6BACC,MAAO,qBACe,aACR,UACH,8BCcU,CDZrB,+BAGA,qBAAsB,cACP,UACJ,aACG,wBCMO,CDJrB","file":"Role.scss","sourcesContent":["@import 'src/styles/base';\n\n.roleContainer {\n\ttop: 0;\n\tdisplay: inline-block;\n\theight: 100vh;\n\twidth: 50%;\n\tborder-right: 1px solid $lightestGrey;\n}\n\n.detailContainer {\n\tdisplay: inline-block;\n\toverflow: auto;\n\twidth: 50%;\n\theight: 101vh;\n\tbackground-color: $lightestGrey;\n}\n\n","/*\nApplication Settings Go Here\n------------------------------------\nThis file acts as a bundler for all variables/mixins/themes, so they\ncan easily be swapped out without `core.scss` ever having to know.\n\nFor example:\n\n@import './variables/colors';\n@import './variables/components';\n@import './themes/default';\n*/\n\n$navMenuWidth: 250px;\n\n$navLight: #192738;\n$navDark: #0F1B27;\n$navMedium: #162330;\n\n$lightGrey: #DEDEDE;\n$lightestGrey: #F9F9FC;\n$lightGreen: #52D298;\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"roleContainer": "Role__roleContainer___HilLH",
		"detailContainer": "Role__detailContainer___1WtSr"
	};

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(365);
	
	var _role = __webpack_require__(416);
	
	var _roleNavigation = __webpack_require__(307);
	
	var _RoleDetail = __webpack_require__(426);
	
	var _RoleDetail2 = _interopRequireDefault(_RoleDetail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  editPersonAction: _roleNavigation.editPersonAction,
	  updateTypeformAttribute: _roleNavigation.updateTypeformAttribute
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_RoleDetail2.default);

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RoleDetail = __webpack_require__(427);
	
	var _RoleDetail2 = _interopRequireDefault(_RoleDetail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _RoleDetail2.default;

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(420);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _set = __webpack_require__(428);
	
	var _set2 = _interopRequireDefault(_set);
	
	var _from = __webpack_require__(447);
	
	var _from2 = _interopRequireDefault(_from);
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RoleDetail = __webpack_require__(452);
	
	var _RoleDetail2 = _interopRequireDefault(_RoleDetail);
	
	var _RoleCell = __webpack_require__(454);
	
	var _RoleCell2 = _interopRequireDefault(_RoleCell);
	
	var _Participant = __webpack_require__(463);
	
	var _Participant2 = _interopRequireDefault(_Participant);
	
	var _SegmentedControl = __webpack_require__(480);
	
	var _SegmentedControl2 = _interopRequireDefault(_SegmentedControl);
	
	var _tagUtils = __webpack_require__(458);
	
	var _typeformUtils = __webpack_require__(308);
	
	var _stringUtils = __webpack_require__(405);
	
	var _colorUtils = __webpack_require__(484);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RoleDetail = function (_React$Component) {
	  (0, _inherits3.default)(RoleDetail, _React$Component);
	
	  function RoleDetail() {
	    (0, _classCallCheck3.default)(this, RoleDetail);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (RoleDetail.__proto__ || (0, _getPrototypeOf2.default)(RoleDetail)).call(this));
	
	    _this.state = { active: 0 };
	    _this.handleSegmentClick = _this.handleSegmentClick.bind(_this);
	    _this.handleEditClick = _this.handleEditClick.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(RoleDetail, [{
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
	      var myTags = this.props.roles.map(function (role) {
	        return (0, _tagUtils.topLevelTagFromRole)(role);
	      });
	      this.setState({ active: 0 });
	    }
	  }, {
	    key: 'handleEditClick',
	    value: function handleEditClick() {
	      var currentRole = this.props.roles[this.state.active];
	      var name = this.props.person['first_name'];
	      var roleFilter = (0, _tagUtils.topLevelTagFromRole)(currentRole);
	      this.props.editPersonAction(roleFilter, name, this.props.person['email']);
	      this.props.updateTypeformAttribute('Update ' + (0, _stringUtils.humanize)(roleFilter) + ' ' + name, _typeformUtils.TypeformAttribute.TITLE);
	    }
	  }, {
	    key: 'handleSegmentClick',
	    value: function handleSegmentClick(index) {
	      this.setState({ active: index });
	    }
	  }, {
	    key: 'renderSegmentedControl',
	    value: function renderSegmentedControl() {
	      var myTags = this.props.roles.map(function (role) {
	        return (0, _tagUtils.topLevelTagFromRole)(role);
	      });
	      var intersection = (0, _from2.default)(new _set2.default(_tagUtils.allTopLevelTags.filter(function (n) {
	        return myTags.indexOf(n) != -1;
	      })));
	      if (intersection.length > 0) {
	        return _react2.default.createElement(_SegmentedControl2.default, { titles: intersection,
	          click: this.handleSegmentClick,
	          active: this.state.active });
	      }
	    }
	  }, {
	    key: 'renderDetail',
	    value: function renderDetail() {
	      var _this2 = this;
	
	      var myTags = this.props.roles.map(function (role) {
	        return (0, _tagUtils.topLevelTagFromRole)(role);
	      });
	      if (this.state.active < myTags.length) {
	        var tag = myTags[this.state.active];
	        var longRoleType = (0, _keys2.default)(this.props.roles[this.state.active])[0];
	        var role = (0, _tagUtils.findRoleObjectForTag)(tag, this.props.roles);
	        switch (tag) {
	          case 'participant':
	            return _react2.default.createElement(_Participant2.default, { person: this.props.person,
	              participant: role,
	              roleType: longRoleType,
	              clickEdit: function clickEdit() {
	                return _this2.handleEditClick();
	              } });
	          case 'mentor':
	            break;
	          case 'judge':
	            break;
	          case 'speaker':
	            break;
	          default:
	            break;
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _RoleDetail2.default.detailContainer },
	          _react2.default.createElement(_RoleCell2.default, { person: this.props.person,
	            roles: this.props.roles,
	            bottomBorderColor: _colorUtils.lightestGrey }),
	          this.renderSegmentedControl(),
	          this.renderDetail()
	        )
	      );
	    }
	  }]);
	  return RoleDetail;
	}(_react2.default.Component);
	
	RoleDetail.propTypes = {
	  person: _react2.default.PropTypes.object.isRequired,
	  roles: _react2.default.PropTypes.array.isRequired,
	  editPersonAction: _react2.default.PropTypes.func.isRequired,
	  updateTypeformAttribute: _react2.default.PropTypes.func.isRequired
	};
	exports.default = RoleDetail;

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(429), __esModule: true };

/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(354);
	__webpack_require__(326);
	__webpack_require__(338);
	__webpack_require__(430);
	__webpack_require__(444);
	module.exports = __webpack_require__(264).Set;

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(431);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(440)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(268).f
	  , create      = __webpack_require__(333)
	  , redefineAll = __webpack_require__(432)
	  , ctx         = __webpack_require__(265)
	  , anInstance  = __webpack_require__(433)
	  , defined     = __webpack_require__(284)
	  , forOf       = __webpack_require__(434)
	  , $iterDefine = __webpack_require__(328)
	  , step        = __webpack_require__(341)
	  , setSpecies  = __webpack_require__(439)
	  , DESCRIPTORS = __webpack_require__(272)
	  , fastKey     = __webpack_require__(346).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(267);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },

/***/ 433:
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(265)
	  , call        = __webpack_require__(435)
	  , isArrayIter = __webpack_require__(436)
	  , anObject    = __webpack_require__(269)
	  , toLength    = __webpack_require__(286)
	  , getIterFn   = __webpack_require__(437)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(269);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(331)
	  , ITERATOR   = __webpack_require__(337)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(438)
	  , ITERATOR  = __webpack_require__(337)('iterator')
	  , Iterators = __webpack_require__(331);
	module.exports = __webpack_require__(264).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(283)
	  , TAG = __webpack_require__(337)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(263)
	  , core        = __webpack_require__(264)
	  , dP          = __webpack_require__(268)
	  , DESCRIPTORS = __webpack_require__(272)
	  , SPECIES     = __webpack_require__(337)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(263)
	  , $export        = __webpack_require__(262)
	  , meta           = __webpack_require__(346)
	  , fails          = __webpack_require__(273)
	  , hide           = __webpack_require__(267)
	  , redefineAll    = __webpack_require__(432)
	  , forOf          = __webpack_require__(434)
	  , anInstance     = __webpack_require__(433)
	  , isObject       = __webpack_require__(270)
	  , setToStringTag = __webpack_require__(336)
	  , dP             = __webpack_require__(268).f
	  , each           = __webpack_require__(441)(0)
	  , DESCRIPTORS    = __webpack_require__(272);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(265)
	  , IObject  = __webpack_require__(282)
	  , toObject = __webpack_require__(295)
	  , toLength = __webpack_require__(286)
	  , asc      = __webpack_require__(442);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(443);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(270)
	  , isArray  = __webpack_require__(350)
	  , SPECIES  = __webpack_require__(337)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(262);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(445)('Set')});

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(438)
	  , from    = __webpack_require__(446);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(434);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(448), __esModule: true };

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(326);
	__webpack_require__(449);
	module.exports = __webpack_require__(264).Array.from;

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(265)
	  , $export        = __webpack_require__(262)
	  , toObject       = __webpack_require__(295)
	  , call           = __webpack_require__(435)
	  , isArrayIter    = __webpack_require__(436)
	  , toLength       = __webpack_require__(286)
	  , createProperty = __webpack_require__(450)
	  , getIterFn      = __webpack_require__(437);
	
	$export($export.S + $export.F * !__webpack_require__(451)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(268)
	  , createDesc      = __webpack_require__(276);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(337)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(453);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(453, function() {
				var newContent = __webpack_require__(453);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
	// imports
	
	
	// module
	exports.push([module.id, ".RoleDetail__detailContainer___3tWgY{padding-top:30px;padding-left:30px;padding-right:30px}.RoleDetail__headerText___3RXIK{display:inline-block}", "", {"version":3,"sources":["/./src/components/RoleDetail/src/components/RoleDetail/RoleDetail.scss"],"names":[],"mappings":"AAEA,qCACC,iBAAkB,kBACC,kBACC,CACpB,gCAGA,oBAAsB,CACtB","file":"RoleDetail.scss","sourcesContent":["@import 'src/styles/base';\n\n.detailContainer {\n\tpadding-top: 30px;\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n}\n\n.headerText {\n\tdisplay: inline-block;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"detailContainer": "RoleDetail__detailContainer___3tWgY",
		"headerText": "RoleDetail__headerText___3RXIK"
	};

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RoleCell = __webpack_require__(455);
	
	var _RoleCell2 = _interopRequireDefault(_RoleCell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _RoleCell2.default;

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RoleCell = __webpack_require__(456);
	
	var _RoleCell2 = _interopRequireDefault(_RoleCell);
	
	var _stringUtils = __webpack_require__(405);
	
	var _tagUtils = __webpack_require__(458);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RoleCell = function (_React$Component) {
	  (0, _inherits3.default)(RoleCell, _React$Component);
	
	  function RoleCell() {
	    (0, _classCallCheck3.default)(this, RoleCell);
	    return (0, _possibleConstructorReturn3.default)(this, (RoleCell.__proto__ || (0, _getPrototypeOf2.default)(RoleCell)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(RoleCell, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _RoleCell2.default.container,
	          style: { 'borderBottom': '1px solid ' + this.props.bottomBorderColor } },
	        _react2.default.createElement(
	          'div',
	          { className: _RoleCell2.default.textContainer },
	          _react2.default.createElement(
	            'div',
	            { className: _RoleCell2.default.nameText },
	            (0, _stringUtils.capitalize)(this.props.person['first_name']) + ' ' + (0, _stringUtils.capitalize)(this.props.person['last_name'])
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _RoleCell2.default.subText },
	            this.props.person['email']
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            this.props.roles.map(function (role, index) {
	              return _react2.default.createElement(
	                'div',
	                { style: { 'backgroundColor': (0, _tagUtils.tagColorFromRole)(role) },
	                  className: _RoleCell2.default.tag,
	                  key: index },
	                (0, _tagUtils.tagFromRole)(role)
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);
	  return RoleCell;
	}(_react2.default.Component);
	
	RoleCell.propTypes = {
	  person: _react2.default.PropTypes.object.isRequired,
	  roles: _react2.default.PropTypes.array.isRequired,
	  bottomBorderColor: _react2.default.PropTypes.string.isRequired
	};
	exports.default = RoleCell;

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(457);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(457, function() {
				var newContent = __webpack_require__(457);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
	// imports
	
	
	// module
	exports.push([module.id, ".RoleCell__container___1-OQ_{height:100px}.RoleCell__textContainer___13_01{position:relative;top:50%;transform:translateY(-50%)}.RoleCell__nameText___3tcwz{display:inline-block;font-size:15px;width:50%;font-weight:500}.RoleCell__nameText___3tcwz,.RoleCell__subText___2tVt5{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.RoleCell__subText___2tVt5{float:right;text-align:right;width:45%;font-weight:200;opacity:.7;padding-right:10px}.RoleCell__tag___lTf_I{margin-bottom:6px;display:inline-block;color:#fff;border-radius:5px;padding:3px 7px;margin-right:10px}", "", {"version":3,"sources":["/./src/components/RoleCell/src/components/RoleCell/RoleCell.scss"],"names":[],"mappings":"AAEA,6BACC,YAAc,CACd,iCAGA,kBAAmB,QACT,0BACY,CACtB,4BAGA,qBAAsB,eACN,UAGH,eAEI,CACjB,uDALA,mBAAoB,gBACD,sBAEO,CAI3B,2BAGC,YAAa,iBACK,UACP,gBAEM,WACJ,kBACO,CACpB,uBAGA,kBAAmB,qBACG,WACP,kBACI,gBACM,iBACN,CACnB","file":"RoleCell.scss","sourcesContent":["@import 'src/styles/base';\n\n.container {\n\theight: 100px;\n}\n\n.textContainer {\n\tposition: relative;\n \ttop: 50%;\n \ttransform: translateY(-50%);\n}\n\n.nameText {\n\tdisplay: inline-block;\n\tfont-size: 15px;\n\twhite-space: nowrap;\n  \toverflow: hidden;\n  \twidth: 50%;\n  \ttext-overflow: ellipsis;\n\tfont-weight: 500;\n}\n\n.subText {\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tfloat: right;\n\ttext-align: right;\n\twidth: 45%;\n\ttext-overflow: ellipsis;\n\tfont-weight: 200;\n\topacity: 0.7;\n\tpadding-right: 10px;\n}\n\n.tag {\n\tmargin-bottom: 6px;\n\tdisplay: inline-block;\n\tcolor: #FFFFFF;\n\tborder-radius: 5px;\n\tpadding: 3px 7px 3px 7px;\n\tmargin-right: 10px;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "RoleCell__container___1-OQ_",
		"textContainer": "RoleCell__textContainer___13_01",
		"nameText": "RoleCell__nameText___3tcwz",
		"subText": "RoleCell__subText___2tVt5",
		"tag": "RoleCell__tag___lTf_I"
	};

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.allTopLevelTags = exports.tagColorMap = undefined;
	
	var _values = __webpack_require__(459);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _keys = __webpack_require__(420);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.tagColorFromRole = tagColorFromRole;
	exports.tagFromRole = tagFromRole;
	exports.topLevelTagFromRole = topLevelTagFromRole;
	exports.findRoleObjectForTag = findRoleObjectForTag;
	
	var _stringUtils = __webpack_require__(405);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tagColorMap = exports.tagColorMap = {
	  'participant': '#EE5A63',
	  'participant accepted': '#1A7790', // grey blue
	  'participant rejected': '#EE5A63', // red
	  'participant waitlisted': '#FEC60D', // yellow
	  'participant confirmed': '#24BAB9', // turquoise
	  'mentor': '#584AD3', // purple
	  'speaker': '#24A0EC', // blue
	  'judge': '#415263' // gray black
	};
	
	function tagColorFromRole(role) {
	  var tag = tagFromRole(role);
	  var color = tagColorMap[tag.toLowerCase()];
	  return color ? color : '#415263'; // gray black
	}
	
	function tagFromRole(role) {
	  return (0, _stringUtils.humanize)((0, _keys2.default)(role)[0]);
	}
	
	function topLevelTagFromRole(role) {
	  return tagFromRole(role).toLowerCase().split(' ')[0];
	}
	
	var allTopLevelTags = exports.allTopLevelTags = (0, _keys2.default)(tagColorMap).map(function (key) {
	  return key.split(' ')[0];
	});
	
	function findRoleObjectForTag(tag, roles) {
	  for (var i = 0; i < roles.length; i++) {
	    if ((0, _keys2.default)(roles[i])[0].includes(tag)) {
	      return (0, _values2.default)(roles[i])[0];
	    }
	  }
	}

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(460), __esModule: true };

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(461);
	module.exports = __webpack_require__(264).Object.values;

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(262)
	  , $values = __webpack_require__(462)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(278)
	  , toIObject = __webpack_require__(281)
	  , isEnum    = __webpack_require__(294).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Participant = __webpack_require__(464);
	
	var _Participant2 = _interopRequireDefault(_Participant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Participant2.default;

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(420);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Participant = __webpack_require__(465);
	
	var _Participant2 = _interopRequireDefault(_Participant);
	
	var _SpacedInfo = __webpack_require__(467);
	
	var _SpacedInfo2 = _interopRequireDefault(_SpacedInfo);
	
	var _StackedInfo = __webpack_require__(471);
	
	var _StackedInfo2 = _interopRequireDefault(_StackedInfo);
	
	var _LinkInfo = __webpack_require__(475);
	
	var _LinkInfo2 = _interopRequireDefault(_LinkInfo);
	
	var _participantUtils = __webpack_require__(479);
	
	var _stringUtils = __webpack_require__(405);
	
	var _tagUtils = __webpack_require__(458);
	
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
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _Participant2.default.container },
	        _react2.default.createElement(
	          'div',
	          { className: _Participant2.default.leftPadding },
	          _react2.default.createElement(
	            'div',
	            { className: _Participant2.default.spacedInfoSeparator },
	            (0, _stringUtils.humanize)(this.props.person['first_name'] + ' ' + this.props.person['last_name']),
	            _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement(
	                'button',
	                { className: _Participant2.default.edit,
	                  style: { 'backgroundColor': '' + _tagUtils.tagColorMap[this.props.roleType] },
	                  onClick: function onClick() {
	                    return _this3.props.clickEdit();
	                  } },
	                'Edit'
	              )
	            )
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
	  person: _react2.default.PropTypes.object.isRequired,
	  roleType: _react2.default.PropTypes.string.isRequired,
	  clickEdit: _react2.default.PropTypes.func.isRequired
	};
	exports.default = Participant;

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(466);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(466, function() {
				var newContent = __webpack_require__(466);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
	// imports
	
	
	// module
	exports.push([module.id, ".Participant__container___1iGGM{padding-bottom:30px}.Participant__spacedInfoSeparator___1C8B1{margin-top:30px;font-size:20px;width:100%;margin-bottom:20px}.Participant__lineSeparator___2f8g2{height:1px;padding-top:10px;width:100%;border-bottom:1px solid #dedede}.Participant__listText___2dso5{color:#000}.Participant__listSubject___36js_{color:rgba(0,0,0,.6)}.Participant__listContainer___1S54C{padding-bottom:20px}.Participant__leftPadding___Y2y3N{padding-left:10px}.Participant__edit___14vcu{display:inline-block;float:right;background-color:#f9f9fc;border:0;border-radius:5px;color:#fff;padding-bottom:2px;font-size:15px}.Participant__edit___14vcu:hover{opacity:.7}.Participant__edit___14vcu:focus{outline:none}", "", {"version":3,"sources":["/./src/components/Participant/src/components/Participant/Participant.scss","/./src/components/Participant/src/styles/_base.scss"],"names":[],"mappings":"AAEA,gCACC,mBAAqB,CACrB,0CAGA,gBAAiB,eACD,WACJ,kBACQ,CACpB,oCAGA,WAAY,iBACM,WACN,+BCGM,CDDlB,+BAGA,UAAe,CACf,kCAGA,oBAAW,CACX,oCAGA,mBAAqB,CACrB,kCAGA,iBAAmB,CACnB,2BAGA,qBAAsB,YACT,yBAEb,SAAU,kBACS,WACJ,mBACK,cACJ,CAChB,iCAGA,UAAa,CACb,iCAGA,YAAc,CACd","file":"Participant.scss","sourcesContent":["@import 'src/styles/base';\n\n.container {\n\tpadding-bottom: 30px;\n}\n\n.spacedInfoSeparator {\n\tmargin-top: 30px;\n\tfont-size: 20px;\n\twidth: 100%;\n\tmargin-bottom: 20px;\n}\n\n.lineSeparator {\n\theight: 1px;\n\tpadding-top: 10px;\n\twidth: 100%;\n\tborder-bottom: 1px solid $lightGrey;\n}\n\n.listText{\n\tcolor: #000000;\n}\n\n.listSubject {\n\tcolor: rgba(0, 0, 0, 0.6);\n}\n\n.listContainer {\n\tpadding-bottom: 20px;\n}\n\n.leftPadding {\n\tpadding-left: 10px;\n}\n\n.edit {\n\tdisplay: inline-block; \n\tfloat: right;\n\tbackground-color: $lightestGrey;\n\tborder: 0;\n\tborder-radius: 5px;\n\tcolor: #FFFFFF;\n\tpadding-bottom: 2px;\n\tfont-size: 15px;\n}\n\n.edit:hover {\n\topacity: 0.7;\n}\n\n.edit:focus {\n\toutline: none;\n}","/*\nApplication Settings Go Here\n------------------------------------\nThis file acts as a bundler for all variables/mixins/themes, so they\ncan easily be swapped out without `core.scss` ever having to know.\n\nFor example:\n\n@import './variables/colors';\n@import './variables/components';\n@import './themes/default';\n*/\n\n$navMenuWidth: 250px;\n\n$navLight: #192738;\n$navDark: #0F1B27;\n$navMedium: #162330;\n\n$lightGrey: #DEDEDE;\n$lightestGrey: #F9F9FC;\n$lightGreen: #52D298;\n\n"],"sourceRoot":"webpack://"}]);
	
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

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SpacedInfo = __webpack_require__(468);
	
	var _SpacedInfo2 = _interopRequireDefault(_SpacedInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SpacedInfo2.default;

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SpacedInfo = __webpack_require__(469);
	
	var _SpacedInfo2 = _interopRequireDefault(_SpacedInfo);
	
	var _stringUtils = __webpack_require__(405);
	
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
	      return title.toLowerCase() == 'email' ? 'break-all' : 'word-wrap';
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
	          if (index % 2 == 0) {
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

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(470);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(470, function() {
				var newContent = __webpack_require__(470);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
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

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _StackedInfo = __webpack_require__(472);
	
	var _StackedInfo2 = _interopRequireDefault(_StackedInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _StackedInfo2.default;

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _StackedInfo = __webpack_require__(473);
	
	var _StackedInfo2 = _interopRequireDefault(_StackedInfo);
	
	var _stringUtils = __webpack_require__(405);
	
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
	          if (index % 2 == 0) {
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

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(474);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(474, function() {
				var newContent = __webpack_require__(474);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
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

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _LinkInfo = __webpack_require__(476);
	
	var _LinkInfo2 = _interopRequireDefault(_LinkInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _LinkInfo2.default;

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LinkInfo = __webpack_require__(477);
	
	var _LinkInfo2 = _interopRequireDefault(_LinkInfo);
	
	var _stringUtils = __webpack_require__(405);
	
	var _tagUtils = __webpack_require__(458);
	
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

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(478);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(478, function() {
				var newContent = __webpack_require__(478);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
	// imports
	
	
	// module
	exports.push([module.id, ".LinkInfo__container___3lgSq{padding-bottom:20px}", "", {"version":3,"sources":["/./src/components/LinkInfo/src/components/LinkInfo/LinkInfo.scss"],"names":[],"mappings":"AAEA,6BACC,mBAAqB,CACrB","file":"LinkInfo.scss","sourcesContent":["@import 'src/styles/base';\n\n.container {\n\tpadding-bottom: 20px;\n}\n\n.link {\n  \n}"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "LinkInfo__container___3lgSq"
	};

/***/ },

/***/ 479:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var personalInfoFields = exports.personalInfoFields = ['Email', 'Gender', 'Phone', 'School', 'Graduation Year', 'Major'];
	var linkFields = exports.linkFields = ['Github', 'Resume', 'Website', 'Portfolio'];

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SegmentedControl = __webpack_require__(481);
	
	var _SegmentedControl2 = _interopRequireDefault(_SegmentedControl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SegmentedControl2.default;

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SegmentedControl = __webpack_require__(482);
	
	var _SegmentedControl2 = _interopRequireDefault(_SegmentedControl);
	
	var _stringUtils = __webpack_require__(405);
	
	var _tagUtils = __webpack_require__(458);
	
	var _colorUtils = __webpack_require__(484);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SegmentedControl = function (_React$Component) {
	  (0, _inherits3.default)(SegmentedControl, _React$Component);
	
	  function SegmentedControl() {
	    (0, _classCallCheck3.default)(this, SegmentedControl);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (SegmentedControl.__proto__ || (0, _getPrototypeOf2.default)(SegmentedControl)).call(this));
	
	    _this.state = { dynamicPadding: 0 };
	    return _this;
	  }
	
	  (0, _createClass3.default)(SegmentedControl, [{
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
	      var dynamicPadding = (Math.max(0, 50 - 5 * props.titles.length) + 1) / 2;
	      this.setState({ dynamicPadding: dynamicPadding });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(index) {
	      this.props.click(index);
	    }
	  }, {
	    key: 'handleActiveBorderStyle',
	    value: function handleActiveBorderStyle(index, active) {
	      return this.props.active == index ? _colorUtils.lightGreen : _colorUtils.lightGrey;
	    }
	  }, {
	    key: 'handleActiveTextStyle',
	    value: function handleActiveTextStyle(index, active) {
	      return this.props.active == index ? '1.0' : '0.5';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _SegmentedControl2.default.segmentContainer },
	          this.props.titles.map(function (title, index) {
	            return _react2.default.createElement(
	              'div',
	              { className: _SegmentedControl2.default.segment,
	                style: { 'paddingRight': _this2.state.dynamicPadding + 'px',
	                  'paddingLeft': _this2.state.dynamicPadding + 'px',
	                  'borderBottom': '1.5px solid ' + _this2.handleActiveBorderStyle(index, _this2.props.active),
	                  'opacity': '' + _this2.handleActiveTextStyle(index, _this2.props.active) },
	                key: index,
	                onClick: function onClick() {
	                  return _this2.handleClick(index).bind(_this2);
	                } },
	              (0, _stringUtils.humanize)(title)
	            );
	          })
	        )
	      );
	    }
	  }]);
	  return SegmentedControl;
	}(_react2.default.Component);
	
	SegmentedControl.propTypes = {
	  titles: _react2.default.PropTypes.array.isRequired,
	  click: _react2.default.PropTypes.func,
	  active: _react2.default.PropTypes.number
	};
	exports.default = SegmentedControl;

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(483);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(483, function() {
				var newContent = __webpack_require__(483);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
	// imports
	
	
	// module
	exports.push([module.id, ".SegmentedControl__segmentContainer___3lwt0{text-align:center}.SegmentedControl__segment___3JH8m{font-size:15px;padding-top:10px;padding-bottom:7px;display:inline-block}", "", {"version":3,"sources":["/./src/components/SegmentedControl/src/components/SegmentedControl/SegmentedControl.scss"],"names":[],"mappings":"AAEA,4CACC,iBAAmB,CACnB,mCAGA,eAAgB,iBACE,mBACE,oBACE,CACtB","file":"SegmentedControl.scss","sourcesContent":["@import 'src/styles/base';\n\n.segmentContainer {\n\ttext-align: center;\n}\n\n.segment {\n\tfont-size: 15px;\n\tpadding-top: 10px;\n\tpadding-bottom: 7px;\n\tdisplay: inline-block;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"segmentContainer": "SegmentedControl__segmentContainer___3lwt0",
		"segment": "SegmentedControl__segment___3JH8m"
	};

/***/ },

/***/ 484:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var lightestGrey = exports.lightestGrey = '#F9F9FC';
	var lightGrey = exports.lightGrey = '#DEDEDE';
	var lightGreen = exports.lightGreen = '#52D298';

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(365);
	
	var _roleNavigation = __webpack_require__(307);
	
	var _RoleList = __webpack_require__(486);
	
	var _RoleList2 = _interopRequireDefault(_RoleList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  updateActiveIndex: _roleNavigation.updateActiveIndex,
	  updateSelectedPerson: _roleNavigation.updateSelectedPerson
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    event: state.events.currEvent,
	    detailActiveIndex: state.roleNavigation.detailActiveIndex,
	    roles: state.role.roles
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_RoleList2.default);

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RoleList = __webpack_require__(487);
	
	var _RoleList2 = _interopRequireDefault(_RoleList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _RoleList2.default;

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _values = __webpack_require__(459);
	
	var _values2 = _interopRequireDefault(_values);
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RoleList = __webpack_require__(488);
	
	var _RoleList2 = _interopRequireDefault(_RoleList);
	
	var _stringUtils = __webpack_require__(405);
	
	var _plus = __webpack_require__(490);
	
	var _plus2 = _interopRequireDefault(_plus);
	
	var _search = __webpack_require__(491);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _tagUtils = __webpack_require__(458);
	
	var _colorUtils = __webpack_require__(484);
	
	var _roleNavigation = __webpack_require__(307);
	
	var _reactInfinite = __webpack_require__(492);
	
	var _reactInfinite2 = _interopRequireDefault(_reactInfinite);
	
	var _RoleCell = __webpack_require__(454);
	
	var _RoleCell2 = _interopRequireDefault(_RoleCell);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RoleList = function (_React$Component) {
	  (0, _inherits3.default)(RoleList, _React$Component);
	
	  function RoleList() {
	    (0, _classCallCheck3.default)(this, RoleList);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (RoleList.__proto__ || (0, _getPrototypeOf2.default)(RoleList)).call(this));
	
	    _this.state = { rowHeight: 100, headerHeight: 150, tableHeight: window.innerHeight - 150,
	      windowHeight: window.innerHeight, value: '', roles: [] };
	    _this.handleResize = _this.handleResize.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleSelectClick = _this.handleSelectClick.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(RoleList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this.handleResize);
	      this.updateState(this.props);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.updateState(nextProps);
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState(nextProps) {
	      if (this.props.detailActiveIndex == nextProps.detailActiveIndex) {
	        this.setState({ roles: this.filterRolesByText(this.state.value, nextProps.roles) });
	      }
	      if (this.state.roles.length == 0) {
	        this.setState({ roles: nextProps.roles });
	      }
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize(event) {
	      this.setState({ windowHeight: window.innerHeight,
	        tableHeight: window.innerHeight - this.state.headerHeight });
	    }
	  }, {
	    key: 'handleActiveStyle',
	    value: function handleActiveStyle(index) {
	      return this.props.detailActiveIndex == index ? _colorUtils.lightestGrey : '#FFFFFF';
	    }
	
	    // for search auto-complete filtering
	
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      var text = event.target.value;
	      var invalidSearch = this.state.roles.length == 0 && text.length > this.state.value.length;
	      if (!invalidSearch) {
	        this.state.value = text;
	        var filteredRoles = this.filterRolesByText(event.target.value, this.props.roles);
	        this.props.updateActiveIndex(-1, _roleNavigation.DisplayType.DETAIL);
	        this.setState({ roles: filteredRoles });
	      }
	    }
	  }, {
	    key: 'handleSelectClick',
	    value: function handleSelectClick(index) {
	      this.props.updateSelectedPerson(this.state.roles[index]);
	      this.props.updateActiveIndex(index, _roleNavigation.DisplayType.DETAIL);
	      this.props.handleCellClick(index, true);
	    }
	  }, {
	    key: 'filterRolesByText',
	    value: function filterRolesByText(text, roles) {
	      var _this2 = this;
	
	      if (text == '') {
	        return roles;
	      }
	      return roles.filter(function (role) {
	        return _this2.filterByName(role, text);
	      });
	    }
	
	    // full-text search only implemented for participants and roles currently (hacky)
	
	  }, {
	    key: 'filterByName',
	    value: function filterByName(role, text) {
	      var first_name = role['person']['first_name'].toLowerCase();
	      var last_name = role['person']['last_name'].toLowerCase();
	      var email = role['person']['email'].toLowerCase();
	      var gender = role['person']['gender'];
	      var searchString = first_name + ' ' + last_name + email;
	      if (gender != null && gender != '') {
	        searchString += gender.toLowerCase();
	      }
	      role['roles'].forEach(function (role, index) {
	        var topLevelTag = (0, _tagUtils.topLevelTagFromRole)(role).toLowerCase();
	        searchString += (0, _stringUtils.dehumanize)((0, _tagUtils.tagFromRole)(role));
	        if (topLevelTag == 'participant') {
	          var attributes = (0, _values2.default)(role)[0];
	          searchString += attributes['graduation_year'].toString().toLowerCase();
	          searchString += attributes['major'].toLowerCase();
	          searchString += attributes['school'].toLowerCase();
	          attributes['dietary_restrictions'].forEach(function (restriction) {
	            return searchString += restriction.toLowerCase();
	          });
	          attributes['custom'].forEach(function (q) {
	            return searchString += q.toLowerCase();
	          });
	        }
	      });
	      return searchString.includes(text.toLowerCase());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _RoleList2.default.flexContainer, style: { 'borderBottom': '1px solid ' + _colorUtils.lightGrey } },
	          _react2.default.createElement('div', { className: _RoleList2.default.tenPercentSpacer }),
	          _react2.default.createElement(
	            'div',
	            { className: _RoleList2.default.headerContainer },
	            _react2.default.createElement(
	              'div',
	              { className: _RoleList2.default.roleListHeaderText },
	              (0, _stringUtils.humanize)(this.props.event['event_type'] + ' ' + this.props.event['season'] + ' ' + this.props.event['year'])
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: _RoleList2.default.plusContainer },
	              _react2.default.createElement('img', { alt: '',
	                className: _RoleList2.default.plusIcon,
	                src: _plus2.default,
	                onClick: function onClick() {
	                  return _this3.props.handlePlusClick();
	                } })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _RoleList2.default.searchContainer },
	              _react2.default.createElement('img', { alt: '', className: _RoleList2.default.searchIcon, src: _search2.default }),
	              _react2.default.createElement('input', {
	                className: _RoleList2.default.searchBar,
	                type: 'text',
	                placeholder: 'Search...',
	                onChange: this.handleChange
	              })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _reactInfinite2.default,
	          { containerHeight: this.state.tableHeight,
	            preloadAdditionalHeight: 10 * this.state.tableHeight,
	            elementHeight: this.state.rowHeight },
	          this.state.roles.map(function (element, index) {
	            return _react2.default.createElement(
	              'div',
	              { style: { 'backgroundColor': '' + _this3.handleActiveStyle(index) },
	                className: _RoleList2.default.cellFlexContainer,
	                onClick: function onClick() {
	                  return _this3.handleSelectClick(index);
	                },
	                key: index },
	              _react2.default.createElement('div', { className: _RoleList2.default.tenPercentSpacer }),
	              _react2.default.createElement(
	                'div',
	                { className: _RoleList2.default.roleCellWrapper },
	                _react2.default.createElement(_RoleCell2.default, { key: index,
	                  bottomBorderColor: _colorUtils.lightGrey,
	                  person: _this3.state.roles[index]['person'],
	                  roles: _this3.state.roles[index]['roles'] })
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	  return RoleList;
	}(_react2.default.Component);
	
	RoleList.propTypes = {
	  event: _react2.default.PropTypes.object.isRequired,
	  handlePlusClick: _react2.default.PropTypes.func.isRequired,
	  handleCellClick: _react2.default.PropTypes.func.isRequired,
	  updateActiveIndex: _react2.default.PropTypes.func.isRequired,
	  detailActiveIndex: _react2.default.PropTypes.number.isRequired,
	  roles: _react2.default.PropTypes.array.isRequired,
	  updateSelectedPerson: _react2.default.PropTypes.func.isRequired
	};
	exports.default = RoleList;

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(489);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(489, function() {
				var newContent = __webpack_require__(489);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
	// imports
	
	
	// module
	exports.push([module.id, ".RoleList__cellFlexContainer___OVxYv,.RoleList__flexContainer___fuC91{display:-ms-flexbox;display:flex}.RoleList__tenPercentSpacer___3kKkc{display:inline-block;width:10%}.RoleList__roleListHeaderText___Z_30e{height:56px;display:inline-block;padding-top:35px;font-size:20px;font-weight:100;opacity:.9}.RoleList__searchContainer___3XhWE{margin-top:30px;padding-bottom:20px}.RoleList__headerContainer___3kzMa{display:inline-block;width:90%;float:right;height:150px}.RoleList__plusIcon___1lzMi{opacity:.7;height:35px}.RoleList__plusIcon___1lzMi:hover{opacity:.3}.RoleList__plusContainer___2Zg9I{margin-top:27px;margin-right:20px;text-align:right;float:right;border:0;background-color:#fff}.RoleList__plusContainer___2Zg9I:focus{outline:none}.RoleList__searchBar___3AJlZ{border:0 solid;width:75%}.RoleList__searchBar___3AJlZ:focus{outline:none}.RoleList__searchIcon___1ztnB{opacity:.8;padding-right:10px;transform:translateY(-1px);height:25px}.RoleList__roleCellWrapper___1kmev{display:inline-block;width:90%;float:right}", "", {"version":3,"sources":["/./src/components/RoleList/src/components/RoleList/RoleList.scss"],"names":[],"mappings":"AAIA,sEACE,oBAAA,YAAc,CACf,oCAGC,qBAAsB,SACX,CACZ,sCAGC,YAAa,qBACS,iBACJ,eACF,gBACC,UACJ,CACd,mCAGC,gBAAiB,mBACI,CACtB,mCAGC,qBAAsB,UACX,YACE,YACC,CACf,4BAGC,WAAa,WACA,CACd,kCAGC,UAAa,CACd,iCAGC,gBAAiB,kBACE,iBACD,YACL,SACH,qBACgB,CAC3B,uCAGC,YAAc,CACf,6BAGC,eAAkB,SACP,CACZ,mCAGC,YAAc,CACf,8BAGC,WAAa,mBACO,2BACC,WACR,CACd,mCAGC,qBAAsB,UACX,WACE,CACd","file":"RoleList.scss","sourcesContent":[".flexContainer {\n  display: flex;\n}\n\n.cellFlexContainer {\n  display: flex;\n}\n\n.tenPercentSpacer {\n  display: inline-block;\n  width: 10%;\n}\n\n.roleListHeaderText {\n  height: 56px;\n  display: inline-block;\n  padding-top: 35px;\n  font-size: 20px;\n  font-weight: 100;\n  opacity: 0.9;\n}\n\n.searchContainer {\n  margin-top: 30px;\n  padding-bottom: 20px;\n}\n\n.headerContainer {\n  display: inline-block;\n  width: 90%;\n  float: right;\n  height: 150px;\n}\n\n.plusIcon {\n  opacity: 0.7;\n  height: 35px;\n}\n\n.plusIcon:hover {\n  opacity: 0.3;\n}\n\n.plusContainer {\n  margin-top: 27px;\n  margin-right: 20px;\n  text-align: right;\n  float: right;\n  border: 0;\n  background-color: #FFFFFF;\n}\n\n.plusContainer:focus {\n  outline: none;\n}\n\n.searchBar {\n  border: 0px solid;\n  width: 75%;\n}\n\n.searchBar:focus {\n  outline: none;\n}\n\n.searchIcon {\n  opacity: 0.8;\n  padding-right: 10px;\n  transform: translateY(-1px);\n  height: 25px;\n}\n\n.roleCellWrapper {\n  display: inline-block;\n  width: 90%;\n  float: right;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"cellFlexContainer": "RoleList__cellFlexContainer___OVxYv",
		"flexContainer": "RoleList__flexContainer___fuC91",
		"tenPercentSpacer": "RoleList__tenPercentSpacer___3kKkc",
		"roleListHeaderText": "RoleList__roleListHeaderText___Z_30e",
		"searchContainer": "RoleList__searchContainer___3XhWE",
		"headerContainer": "RoleList__headerContainer___3kzMa",
		"plusIcon": "RoleList__plusIcon___1lzMi",
		"plusContainer": "RoleList__plusContainer___2Zg9I",
		"searchBar": "RoleList__searchBar___3AJlZ",
		"searchIcon": "RoleList__searchIcon___1ztnB",
		"roleCellWrapper": "RoleList__roleCellWrapper___1kmev"
	};

/***/ },

/***/ 490:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZRJREFUeJzt3LFpHEEAheE3hy0J5BaMA4FLUCFqQokS4QpcljsQKkA9GEWKDDZolWx4gXVwO2e/74ODuWhe8MNmkwAAAAAAAAAAAAAAAAAA/5Ixe8BEF0k+rec/SV4mbmGCuzHGsv4eZo+ZZTd7AHMJoJwAygmgnADKCaCcAMoJoJwAygmgnADKCaCcAMoJoJwAygmgnADKCaCcAMoJoJwAygmgnADKCaCcAMoJoJwAygmgnADKCaCcAMoJoJwAygmgnADKCaDcJq+EjTG+J/m2xV3v8DHJ2Xp+TfJr4pZ9fi7LcnXsSz4c+4LVeZLLje46xC6nt2+TPT4B5bZ6KPJLks8b3fVXxhg3Se7Xv0/LstzO3LPH7ySPs0f8zzwUGZ+AegIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHICKCeAcgIoJ4ByAigngHJbPRJ1ir4muV7Pz0l+TNwCAAAAAAAAAAAAAId7A4moGTmer7fQAAAAAElFTkSuQmCC"

/***/ },

/***/ 491:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAC0hJREFUeJztnX+MXFUVx885Myy71AGxs6TxH00ECjZAlEKJRQpGykIJKMqvxhBrwBUy771dQYyRdrotYpZl3XnzmiWLon8YaC3KDwN0WgWKxSgrVAWRFv7BmGBpyS6hWOl03jn+sW+aNy8z+6v73r1vuZ//7nl39nzfvO/e9+veMwAGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAY5gOoWsBcUCwWqbOz80wROV9Ezmbm04joUwDQycwnEVEbAAAzVwHgPQA4gIj/AoA3EfEVERkdGxvb09fXxyr3QwWpNUB/f3+uo6PjShG5GhEvBYBPHOOfHAOAHcz8RDabfbJQKHwwBzK1J3UGGBoaWkZEtyHitQDQEUcOZj4EAFuJ6H7btkfjyKELqTCAiOCmTZtWisg6APhCkrmZeRcRbbAs6xlElCRzJ4H2BiiXy+cAwBAAXDJZP2Y+REQviMhLiLhXRN5g5n3ZbPbgu+++exAAIJ/P52q1Wo6IFonIYiJaLCJLEfFCmGI0YebfA0BvT0/PP+Zq33RAWwMMDg52ZLPZ9Yh4BwBQi27vAMBDzPzY+Pj4aF9fX3U2uYrFYtvChQuXAcA1zLyaiE5p1o+ZfSK6N5fLbVizZs2Hs8mlG1oawPO8s5h5MyIuadHlOWa+b3x8fEdfX19tLnMXi8VsPp/vEpE7AGBFsz7M/Go2m72xUCi8Npe5VaCdATzPWy0iP4PmQ/IziLjWsqw/JaGlVCpdiIgbEfHi6DZmPoSIaxzH2ZqElrjQxgAiguVyeS0i9kW3MfPbmUymp1Ao/DrpCzERQc/zbmDmnxDRoiZdfmhZ1o/TeoGohQFEBF3XLRGR3WTzFhHpdhzn/cSFhRgaGvo4ET0Q3H42ICJDtm3fnkYTKDfAJAf/sIjYtm3/VJcvNhgNbmXmEhEdF9mWShMoN4DruuuaDPvvi8hVjuM8r0TUFJTL5S8BwOMAkAvHReQux3F+pEbV7FBqgOCC76FwjJn3i8hlvb29f1Olazp4nvd5EakAQGc4jojXWZb1iCJZM0aZATzPO0tEXoTGq/33AeAi27b/rkjWjAhMsBMaR4L/isj5juP8U5GsGdHqAUusDA4OdjDzZmg8+IdF5Kq0HHwAAMuydgPAVwAg/ABqgYg87Lru8YpkzQglBgie8DU85BERW9dz/mTYtv0sAPSGY0R0jojcpUjSjEj8FBA8298NjebbYlnW6rRdQdcJ7g62AsDXQ+GaiJyj+6kg0RFARBAmXuwczcvMb4tId1oPPgAAIorv+7cw875QOIuIQ8pETZNMksny+fxlALA2Er7ZcZzdSeqIg+3bt3+4atWq/wDA10Lhz3R1df2hUqm8pUjWlCQ9AqyLhJ6xbTs1t0xTUSgUNgNAw3UMIhYVyZkWiRlgaGhoGUQmcyDi2jQP/VGCfYmOcCtKpdJ5KvRMh8QMQES3RULPJfVWL0ls297FzLvCMSL6jio9U5GIAfr7+3PRlyjMfF8SuVWAiAOR0PUDAwMLlIiZgkQM0NHRcSU0PvR5Z3x8fEcSuVXQ3t5eAYADodCCtra2Var0TEYiBhCRqyOhh+Z6Jo9OdHd3HxGRh8MxRLxKlZ7JiN0AxWKRRGRlOMbMj8WdVzXM/GgktDJ4DqIVsRugs7PzTCI6ud5m5kPj4+Pzeq49AAARvcjM4YmjnaVS6XRlgloQuwFE5PyGhEQvzHb2bppwHOcwALwQjmUymWWK5LQkCQOcHWm/FHdOXSCil8Pt6HehA7EbgJlPC7cRcW/cOXUhuq+IeKoqLa2I3QDBKt2jiMgbcefUBWbeG2l/WpGUliRxG9gwZSryxmxe4/t+dF87m3ZUSBKngJPC7Ww2ezDunLqQyWQa9jV8N6QLSZwC2sLt+kLNjwjRtQzaTRNTMiXMoA9JnAIa7vnz+XyuVd95yImR9mElKiYhiRHgvXCjVqt9ZAzg+37DvjLzuCotrUjCAOG3YtBigeW8JJPJRPf1QNOOCondAEE1rqOIyOK4c+oCES2OtN9SJKUlSYwAbzYkjHwp8xlmPiMSerNpR4UkMQK8Em6LyNK4c+oCIp4bCb2qRMgkJPEyaDTSXl4sFtta9Z8vuK57PDMvD8cQ8c+q9LQidgOMjY3tgYkijBMJiU4ICjLNdy4govZ6g5n3FwqFj94pICi/Gp3/d03ceVWDiOEFIkBE23WcAp/Ik0BmfiLSXl0sFrNJ5FbByMjIcQBwYzgmIr9VJGdSEjFANpt9Mii/OpGU6JR8Pt+VRG4VVKvVywEgX28z8wft7e1PK5TUkkQMEBRebiinFtThm3eICPq+f2c4RkRburu7D7X6jEqSXBl0fyS0olwuL2/aOcWUy+WLiCh69R/dd21IzAC2bY9Gl0yJyN06TpWeLSKCIrIxHGPmZ4NKIlqS6OtgItoQbiPixZ7n3ZCkhjgpl8vfIKIvhmNEtF6RnGmR6H9fUBNwBxF9uR5j5n0icmZvb+97k31Wd4aHh0+uVqt7IoWmn7ZtW8slYXUSHQGC++BeZvaPCiBaREQPpPlUICJYq9UeDB98Zj7i+/53VeqaDolWCAEAqFQq+6+44op2ADg6VCLiktHR0f3btm37S9J65oKFCxfaECkUBQB39/T0/EaFnpmgZEpYLpfbwMwNL0aYuRRU4EwVnuddGl3qLiK7x8bG7lGlaSYoG3Y3bdq0pFarjRLRCaHwQRFZ4TjOX1Xpmgme5y31ff85IvpYKHwQEZdalpWK9Q/KJoUWCoXXEHFNJJxDxO2u635OiagZ4HneUhHZFjn4AAA3peXgAyieFew4ztYmBRU7EfF513Un/Y0glXied2lQIjYf2XSnbduPK5A0a5RPC7dt+x4RidbTyyFixXXdW3W6Owh+1ML2ff8pAFgQ2XavZVmpK3ujxZcbfLGDiBi9kgYReYSZv636OcHw8PDJtVrtQQD4aosuG2zb1rokXDOUjwAAE88HbNu+vVl9XUS8FhFfD0rLJ27YwJw3VavVPdD64AMArHNdd31CsuYMLUaAMK7rXoeIP4fIEBvwPACstW17V5Ntc0pw4C8SkY3Rx7tTfK7PcZz1MUqbU7QzAACA67qfRcTNANC0oAIz70LEgfb29kp3d/eRucw9MjJyXLVavVxEvgcAF7bI/zYRfbLV30iTCbQ0AMDEpEpEXAsA3weAVrOHDojIw8z8KBG9GJRlmVUuALggmMZ1A7RYxs3MRwCgHxHvBoAfTFYGNi0m0NYAdYLRYAgAVk7R9X/M/EciehkR9zLzXt/39wVLtOurdE/0fT+XyWQWEdFiZj4DEc9l5uXhCZzNYOZtInJ7b2/v6yFt69NuAu0NUMd13UuCL7vpr3nGBTM/m8lkNlqWtbOFrlSbIDUGqFMqlc4Lau9eD80vFI8ZZv4AEX9FRMPTmcyRZhOkzgB1BgYGFrS1ta0KKnCuhGMsv8LM+4nod4j4RFtb21MzncOXVhOk1gBhRARLpdLpmUxmmYicjYinBgWZOoOyLPXKHIdhYrn6OwDwbxF5I1i6NmpZ1t5jnbefRhPMCwPoRNpMkPiEkPlOpVLZ2dXVhc1+cRxgYh5kV1cXViqVnckqa44xQAykyQTGADGRFhMYA8RIGkxgDBAzupvAGCABdDaBMUBC6GoCY4AE0dEExgAJo5sJjAEUoJMJjAEUoYsJjAEUooMJjAEUo9oE5m2gJkz1FhERv2VZ1i/mOq8W6wIMAI7jrBeRvlbbReTmOPIaA2jEZCZg5liKTBoDaEYrEyDiSBz5zDWAppTL5W8CwC3MLIg44jjOL1VrMhgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwaMr/AXQt5rdaKg3EAAAAAElFTkSuQmCC"

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var React = global.React || __webpack_require__(2);
	var ReactDOM = global.ReactDOM || __webpack_require__(35);
	
	__webpack_require__(493);
	var scaleEnum = __webpack_require__(496);
	var infiniteHelpers = __webpack_require__(497);
	var _isFinite = __webpack_require__(502);
	
	var preloadType = __webpack_require__(503).preloadType;
	var checkProps = checkProps = __webpack_require__(504);
	
	var Infinite = React.createClass({
	  displayName: 'Infinite',
	
	  propTypes: {
	    children: React.PropTypes.any,
	
	    handleScroll: React.PropTypes.func,
	
	    // preloadBatchSize causes updates only to
	    // happen each preloadBatchSize pixels of scrolling.
	    // Set a larger number to cause fewer updates to the
	    // element list.
	    preloadBatchSize: preloadType,
	    // preloadAdditionalHeight determines how much of the
	    // list above and below the container is preloaded even
	    // when it is not currently visible to the user. In the
	    // regular scroll implementation, preloadAdditionalHeight
	    // is equal to the entire height of the list.
	    preloadAdditionalHeight: preloadType, // page to screen ratio
	
	    // The provided elementHeight can be either
	    //  1. a constant: all elements are the same height
	    //  2. an array containing the height of each element
	    elementHeight: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.arrayOf(React.PropTypes.number)]).isRequired,
	    // This is the total height of the visible window. One
	    // of
	    containerHeight: React.PropTypes.number,
	    useWindowAsScrollContainer: React.PropTypes.bool,
	
	    displayBottomUpwards: React.PropTypes.bool.isRequired,
	
	    infiniteLoadBeginEdgeOffset: React.PropTypes.number,
	    onInfiniteLoad: React.PropTypes.func,
	    loadingSpinnerDelegate: React.PropTypes.node,
	
	    isInfiniteLoading: React.PropTypes.bool,
	    timeScrollStateLastsForAfterUserScrolls: React.PropTypes.number,
	
	    className: React.PropTypes.string,
	
	    styles: React.PropTypes.shape({
	      scrollableStyle: React.PropTypes.object
	    }).isRequired
	  },
	  statics: {
	    containerHeightScaleFactor: function containerHeightScaleFactor(factor) {
	      if (!_isFinite(factor)) {
	        throw new Error('The scale factor must be a number.');
	      }
	      return {
	        type: scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR,
	        amount: factor
	      };
	    }
	  },
	
	  // Properties currently used but which may be
	  // refactored away in the future.
	  computedProps: {},
	  utils: {},
	  shouldAttachToBottom: false,
	  preservedScrollState: 0,
	  loadingSpinnerHeight: 0,
	  deprecationWarned: false,
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      handleScroll: function handleScroll() {},
	
	      useWindowAsScrollContainer: false,
	
	      onInfiniteLoad: function onInfiniteLoad() {},
	      loadingSpinnerDelegate: React.createElement('div', null),
	
	      displayBottomUpwards: false,
	
	      isInfiniteLoading: false,
	      timeScrollStateLastsForAfterUserScrolls: 150,
	
	      className: '',
	
	      styles: {}
	    };
	  },
	
	  // automatic adjust to scroll direction
	  // give spinner a ReactCSSTransitionGroup
	  getInitialState: function getInitialState() {
	    var nextInternalState = this.recomputeInternalStateFromProps(this.props);
	
	    this.computedProps = nextInternalState.computedProps;
	    this.utils = nextInternalState.utils;
	    this.shouldAttachToBottom = this.props.displayBottomUpwards;
	
	    var state = nextInternalState.newState;
	    state.scrollTimeout = undefined;
	    state.isScrolling = false;
	
	    return state;
	  },
	
	  generateComputedProps: function generateComputedProps(props) {
	    // These are extracted so their type definitions do not conflict.
	    var containerHeight = props.containerHeight;
	    var preloadBatchSize = props.preloadBatchSize;
	    var preloadAdditionalHeight = props.preloadAdditionalHeight;
	
	    var oldProps = _objectWithoutProperties(props, ['containerHeight', 'preloadBatchSize', 'preloadAdditionalHeight']);
	
	    var newProps = {};
	    containerHeight = typeof containerHeight === 'number' ? containerHeight : 0;
	    newProps.containerHeight = props.useWindowAsScrollContainer ? window.innerHeight : containerHeight;
	
	    if (oldProps.infiniteLoadBeginBottomOffset !== undefined) {
	      newProps.infiniteLoadBeginEdgeOffset = oldProps.infiniteLoadBeginBottomOffset;
	      if (!this.deprecationWarned) {
	        console.error('Warning: React Infinite\'s infiniteLoadBeginBottomOffset prop\n        has been deprecated as of 0.6.0. Please use infiniteLoadBeginEdgeOffset.\n        Because this is a rather descriptive name, a simple find and replace\n        should suffice.');
	        this.deprecationWarned = true;
	      }
	    }
	
	    var defaultPreloadBatchSizeScaling = {
	      type: scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR,
	      amount: 0.5
	    };
	    var batchSize = preloadBatchSize && preloadBatchSize.type ? preloadBatchSize : defaultPreloadBatchSizeScaling;
	
	    if (typeof preloadBatchSize === 'number') {
	      newProps.preloadBatchSize = preloadBatchSize;
	    } else if (typeof batchSize === 'object' && batchSize.type === scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR) {
	      newProps.preloadBatchSize = newProps.containerHeight * batchSize.amount;
	    } else {
	      newProps.preloadBatchSize = 0;
	    }
	
	    var defaultPreloadAdditionalHeightScaling = {
	      type: scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR,
	      amount: 1
	    };
	    var additionalHeight = preloadAdditionalHeight && preloadAdditionalHeight.type ? preloadAdditionalHeight : defaultPreloadAdditionalHeightScaling;
	    if (typeof preloadAdditionalHeight === 'number') {
	      newProps.preloadAdditionalHeight = preloadAdditionalHeight;
	    } else if (typeof additionalHeight === 'object' && additionalHeight.type === scaleEnum.CONTAINER_HEIGHT_SCALE_FACTOR) {
	      newProps.preloadAdditionalHeight = newProps.containerHeight * additionalHeight.amount;
	    } else {
	      newProps.preloadAdditionalHeight = 0;
	    }
	
	    return Object.assign(oldProps, newProps);
	  },
	
	  generateComputedUtilityFunctions: function generateComputedUtilityFunctions(props) {
	    var _this = this;
	
	    var utilities = {};
	    utilities.getLoadingSpinnerHeight = function () {
	      var loadingSpinnerHeight = 0;
	      if (_this.refs && _this.refs.loadingSpinner) {
	        var loadingSpinnerNode = ReactDOM.findDOMNode(_this.refs.loadingSpinner);
	        loadingSpinnerHeight = loadingSpinnerNode.offsetHeight || 0;
	      }
	      return loadingSpinnerHeight;
	    };
	    if (props.useWindowAsScrollContainer) {
	      utilities.subscribeToScrollListener = function () {
	        window.addEventListener('scroll', _this.infiniteHandleScroll);
	      };
	      utilities.unsubscribeFromScrollListener = function () {
	        window.removeEventListener('scroll', _this.infiniteHandleScroll);
	      };
	      utilities.nodeScrollListener = function () {};
	      utilities.getScrollTop = function () {
	        return window.pageYOffset;
	      };
	      utilities.setScrollTop = function (top) {
	        window.scroll(window.pageXOffset, top);
	      };
	      utilities.scrollShouldBeIgnored = function () {
	        return false;
	      };
	      utilities.buildScrollableStyle = function () {
	        return {};
	      };
	    } else {
	      utilities.subscribeToScrollListener = function () {};
	      utilities.unsubscribeFromScrollListener = function () {};
	      utilities.nodeScrollListener = this.infiniteHandleScroll;
	      utilities.getScrollTop = function () {
	        var scrollable;
	        if (_this.refs && _this.refs.scrollable) {
	          scrollable = ReactDOM.findDOMNode(_this.refs.scrollable);
	        }
	        return scrollable ? scrollable.scrollTop : 0;
	      };
	
	      utilities.setScrollTop = function (top) {
	        var scrollable;
	        if (_this.refs && _this.refs.scrollable) {
	          scrollable = ReactDOM.findDOMNode(_this.refs.scrollable);
	        }
	        if (scrollable) {
	          scrollable.scrollTop = top;
	        }
	      };
	      utilities.scrollShouldBeIgnored = function (event) {
	        return event.target !== ReactDOM.findDOMNode(_this.refs.scrollable);
	      };
	
	      utilities.buildScrollableStyle = function () {
	        return Object.assign({}, {
	          height: _this.computedProps.containerHeight,
	          overflowX: 'hidden',
	          overflowY: 'scroll',
	          WebkitOverflowScrolling: 'touch'
	        }, _this.computedProps.styles.scrollableStyle || {});
	      };
	    }
	    return utilities;
	  },
	
	  recomputeInternalStateFromProps: function recomputeInternalStateFromProps(props) {
	    checkProps(props);
	    var computedProps = this.generateComputedProps(props);
	    var utils = this.generateComputedUtilityFunctions(props);
	
	    var newState = {};
	
	    newState.numberOfChildren = React.Children.count(computedProps.children);
	    newState.infiniteComputer = infiniteHelpers.createInfiniteComputer(computedProps.elementHeight, computedProps.children, computedProps.displayBottomUpwards);
	
	    if (computedProps.isInfiniteLoading !== undefined) {
	      newState.isInfiniteLoading = computedProps.isInfiniteLoading;
	    }
	
	    newState.preloadBatchSize = computedProps.preloadBatchSize;
	    newState.preloadAdditionalHeight = computedProps.preloadAdditionalHeight;
	
	    newState = Object.assign(newState, infiniteHelpers.recomputeApertureStateFromOptionsAndScrollTop(newState, utils.getScrollTop()));
	
	    return {
	      computedProps: computedProps,
	      utils: utils,
	      newState: newState
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var nextInternalState = this.recomputeInternalStateFromProps(nextProps);
	
	    this.computedProps = nextInternalState.computedProps;
	    this.utils = nextInternalState.utils;
	
	    this.setState(nextInternalState.newState);
	  },
	
	  componentWillUpdate: function componentWillUpdate() {
	    if (this.props.displayBottomUpwards) {
	      this.preservedScrollState = this.utils.getScrollTop() - this.loadingSpinnerHeight;
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    this.loadingSpinnerHeight = this.utils.getLoadingSpinnerHeight();
	
	    if (this.props.displayBottomUpwards) {
	      var lowestScrollTop = this.getLowestPossibleScrollTop();
	      if (this.shouldAttachToBottom && this.utils.getScrollTop() < lowestScrollTop) {
	        this.utils.setScrollTop(lowestScrollTop);
	      } else if (prevProps.isInfiniteLoading && !this.props.isInfiniteLoading) {
	        this.utils.setScrollTop(this.state.infiniteComputer.getTotalScrollableHeight() - prevState.infiniteComputer.getTotalScrollableHeight() + this.preservedScrollState);
	      }
	    }
	
	    var hasLoadedMoreChildren = this.state.numberOfChildren !== prevState.numberOfChildren;
	    if (hasLoadedMoreChildren) {
	      var newApertureState = infiniteHelpers.recomputeApertureStateFromOptionsAndScrollTop(this.state, this.utils.getScrollTop());
	      this.setState(newApertureState);
	    }
	
	    var isMissingVisibleRows = hasLoadedMoreChildren && !this.hasAllVisibleItems() && !this.state.isInfiniteLoading;
	    if (isMissingVisibleRows) {
	      this.onInfiniteLoad();
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.utils.subscribeToScrollListener();
	
	    if (!this.hasAllVisibleItems()) {
	      this.onInfiniteLoad();
	    }
	
	    if (this.props.displayBottomUpwards) {
	      var lowestScrollTop = this.getLowestPossibleScrollTop();
	      if (this.shouldAttachToBottom && this.utils.getScrollTop() < lowestScrollTop) {
	        this.utils.setScrollTop(lowestScrollTop);
	      }
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.utils.unsubscribeFromScrollListener();
	  },
	
	  infiniteHandleScroll: function infiniteHandleScroll(e) {
	    if (this.utils.scrollShouldBeIgnored(e)) {
	      return;
	    }
	    this.computedProps.handleScroll(ReactDOM.findDOMNode(this.refs.scrollable));
	    this.handleScroll(this.utils.getScrollTop());
	  },
	
	  manageScrollTimeouts: function manageScrollTimeouts() {
	    // Maintains a series of timeouts to set this.state.isScrolling
	    // to be true when the element is scrolling.
	
	    if (this.state.scrollTimeout) {
	      clearTimeout(this.state.scrollTimeout);
	    }
	
	    var that = this,
	        scrollTimeout = setTimeout(function () {
	      that.setState({
	        isScrolling: false,
	        scrollTimeout: undefined
	      });
	    }, this.computedProps.timeScrollStateLastsForAfterUserScrolls);
	
	    this.setState({
	      isScrolling: true,
	      scrollTimeout: scrollTimeout
	    });
	  },
	
	  getLowestPossibleScrollTop: function getLowestPossibleScrollTop() {
	    return this.state.infiniteComputer.getTotalScrollableHeight() - this.computedProps.containerHeight;
	  },
	
	  hasAllVisibleItems: function hasAllVisibleItems() {
	    return !(_isFinite(this.computedProps.infiniteLoadBeginEdgeOffset) && this.state.infiniteComputer.getTotalScrollableHeight() < this.computedProps.containerHeight);
	  },
	
	  passedEdgeForInfiniteScroll: function passedEdgeForInfiniteScroll(scrollTop) {
	    if (this.computedProps.displayBottomUpwards) {
	      return !this.shouldAttachToBottom && scrollTop < this.computedProps.infiniteLoadBeginEdgeOffset;
	    } else {
	      return scrollTop > this.state.infiniteComputer.getTotalScrollableHeight() - this.computedProps.containerHeight - this.computedProps.infiniteLoadBeginEdgeOffset;
	    }
	  },
	
	  onInfiniteLoad: function onInfiniteLoad() {
	    this.setState({ isInfiniteLoading: true });
	    this.computedProps.onInfiniteLoad();
	  },
	
	  handleScroll: function handleScroll(scrollTop) {
	    this.shouldAttachToBottom = this.computedProps.displayBottomUpwards && scrollTop >= this.getLowestPossibleScrollTop();
	
	    this.manageScrollTimeouts();
	
	    var newApertureState = infiniteHelpers.recomputeApertureStateFromOptionsAndScrollTop(this.state, scrollTop);
	
	    if (this.passedEdgeForInfiniteScroll(scrollTop) && !this.state.isInfiniteLoading) {
	      this.setState(Object.assign({}, newApertureState));
	      this.onInfiniteLoad();
	    } else {
	      this.setState(newApertureState);
	    }
	  },
	
	  buildHeightStyle: function buildHeightStyle(height) {
	    return {
	      width: '100%',
	      height: Math.ceil(height)
	    };
	  },
	
	  render: function render() {
	    var displayables;
	    if (this.state.numberOfChildren > 1) {
	      displayables = this.computedProps.children.slice(this.state.displayIndexStart, this.state.displayIndexEnd + 1);
	    } else {
	      displayables = this.computedProps.children;
	    }
	
	    var infiniteScrollStyles = {};
	    if (this.state.isScrolling) {
	      infiniteScrollStyles.pointerEvents = 'none';
	    }
	
	    var topSpacerHeight = this.state.infiniteComputer.getTopSpacerHeight(this.state.displayIndexStart),
	        bottomSpacerHeight = this.state.infiniteComputer.getBottomSpacerHeight(this.state.displayIndexEnd);
	
	    // This asymmetry is due to a reluctance to use CSS to control
	    // the bottom alignment
	    if (this.computedProps.displayBottomUpwards) {
	      var heightDifference = this.computedProps.containerHeight - this.state.infiniteComputer.getTotalScrollableHeight();
	      if (heightDifference > 0) {
	        topSpacerHeight = heightDifference - this.loadingSpinnerHeight;
	      }
	    }
	
	    var loadingSpinner = this.computedProps.infiniteLoadBeginEdgeOffset === undefined ? null : React.createElement(
	      'div',
	      { ref: 'loadingSpinner' },
	      this.state.isInfiniteLoading ? this.computedProps.loadingSpinnerDelegate : null
	    );
	
	    // topSpacer and bottomSpacer take up the amount of space that the
	    // rendered elements would have taken up otherwise
	    return React.createElement(
	      'div',
	      { className: this.computedProps.className,
	        ref: 'scrollable',
	        style: this.utils.buildScrollableStyle(),
	        onScroll: this.utils.nodeScrollListener },
	      React.createElement(
	        'div',
	        { ref: 'smoothScrollingWrapper', style: infiniteScrollStyles },
	        React.createElement('div', { ref: 'topSpacer',
	          style: this.buildHeightStyle(topSpacerHeight) }),
	        this.computedProps.displayBottomUpwards && loadingSpinner,
	        displayables,
	        !this.computedProps.displayBottomUpwards && loadingSpinner,
	        React.createElement('div', { ref: 'bottomSpacer',
	          style: this.buildHeightStyle(bottomSpacerHeight) })
	      )
	    );
	  }
	});
	
	module.exports = Infinite;
	global.Infinite = Infinite;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	/*
	  A number of polyfills for native functions are consolidated
	  here. We do this instead of using the libraries directly
	  because Flow is designed to make its type refinements
	  with these native functions.
	 */
	
	'use strict';
	
	if (!Object.assign) {
	  Object.assign = __webpack_require__(494);
	}
	
	if (!Array.isArray) {
	  Array.isArray = __webpack_require__(495);
	}

/***/ },

/***/ 494:
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },

/***/ 495:
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;


/***/ },

/***/ 496:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  CONTAINER_HEIGHT_SCALE_FACTOR: 'containerHeightScaleFactor'
	};

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var ConstantInfiniteComputer = __webpack_require__(498);
	var ArrayInfiniteComputer = __webpack_require__(500);
	var React = global.React || __webpack_require__(2);
	
	function createInfiniteComputer(data, children) {
	  var computer;
	  var numberOfChildren = React.Children.count(children);
	
	  // This should be guaranteed by checkProps
	  if (Array.isArray(data)) {
	    computer = new ArrayInfiniteComputer(data, numberOfChildren);
	  } else {
	    computer = new ConstantInfiniteComputer(data, numberOfChildren);
	  }
	  return computer;
	}
	
	// Given the scrollTop of the container, computes the state the
	// component should be in. The goal is to abstract all of this
	// from any actual representation in the DOM.
	// The window is the block with any preloadAdditionalHeight
	// added to it.
	function recomputeApertureStateFromOptionsAndScrollTop(_ref, scrollTop) {
	  var preloadBatchSize = _ref.preloadBatchSize;
	  var preloadAdditionalHeight = _ref.preloadAdditionalHeight;
	  var infiniteComputer = _ref.infiniteComputer;
	  return (function () {
	    var blockNumber = preloadBatchSize === 0 ? 0 : Math.floor(scrollTop / preloadBatchSize),
	        blockStart = preloadBatchSize * blockNumber,
	        blockEnd = blockStart + preloadBatchSize,
	        apertureTop = Math.max(0, blockStart - preloadAdditionalHeight),
	        apertureBottom = Math.min(infiniteComputer.getTotalScrollableHeight(), blockEnd + preloadAdditionalHeight);
	
	    return {
	      displayIndexStart: infiniteComputer.getDisplayIndexStart(apertureTop),
	      displayIndexEnd: infiniteComputer.getDisplayIndexEnd(apertureBottom)
	    };
	  })();
	}
	
	module.exports = {
	  createInfiniteComputer: createInfiniteComputer,
	  recomputeApertureStateFromOptionsAndScrollTop: recomputeApertureStateFromOptionsAndScrollTop
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var InfiniteComputer = __webpack_require__(499);
	
	var ConstantInfiniteComputer = (function (_InfiniteComputer) {
	  _inherits(ConstantInfiniteComputer, _InfiniteComputer);
	
	  function ConstantInfiniteComputer() {
	    _classCallCheck(this, ConstantInfiniteComputer);
	
	    _get(Object.getPrototypeOf(ConstantInfiniteComputer.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ConstantInfiniteComputer, [{
	    key: 'getTotalScrollableHeight',
	    value: function getTotalScrollableHeight() {
	      return this.heightData * this.numberOfChildren;
	    }
	  }, {
	    key: 'getDisplayIndexStart',
	    value: function getDisplayIndexStart(windowTop) {
	      return Math.floor(windowTop / this.heightData);
	    }
	  }, {
	    key: 'getDisplayIndexEnd',
	    value: function getDisplayIndexEnd(windowBottom) {
	      var nonZeroIndex = Math.ceil(windowBottom / this.heightData);
	      if (nonZeroIndex > 0) {
	        return nonZeroIndex - 1;
	      }
	      return nonZeroIndex;
	    }
	  }, {
	    key: 'getTopSpacerHeight',
	    value: function getTopSpacerHeight(displayIndexStart) {
	      return displayIndexStart * this.heightData;
	    }
	  }, {
	    key: 'getBottomSpacerHeight',
	    value: function getBottomSpacerHeight(displayIndexEnd) {
	      var nonZeroIndex = displayIndexEnd + 1;
	      return Math.max(0, (this.numberOfChildren - nonZeroIndex) * this.heightData);
	    }
	  }]);
	
	  return ConstantInfiniteComputer;
	})(InfiniteComputer);
	
	module.exports = ConstantInfiniteComputer;

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	// An infinite computer must be able to do the following things:
	//  1. getTotalScrollableHeight()
	//  2. getDisplayIndexStart()
	//  3. getDisplayIndexEnd()
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var InfiniteComputer = (function () {
	  function InfiniteComputer(heightData, numberOfChildren) {
	    _classCallCheck(this, InfiniteComputer);
	
	    this.heightData = heightData;
	    this.numberOfChildren = numberOfChildren;
	  }
	
	  _createClass(InfiniteComputer, [{
	    key: 'getTotalScrollableHeight',
	    value: function getTotalScrollableHeight() {
	      if (true) {
	        throw new Error('getTotalScrollableHeight not implemented.');
	      }
	    }
	
	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getDisplayIndexStart',
	    value: function getDisplayIndexStart(windowTop) {
	      /* eslint-enable no-unused-vars */
	      if (true) {
	        throw new Error('getDisplayIndexStart not implemented.');
	      }
	    }
	
	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getDisplayIndexEnd',
	    value: function getDisplayIndexEnd(windowBottom) {
	      /* eslint-enable no-unused-vars */
	      if (true) {
	        throw new Error('getDisplayIndexEnd not implemented.');
	      }
	    }
	
	    // These are helper methods, and can be calculated from
	    // the above details.
	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getTopSpacerHeight',
	    value: function getTopSpacerHeight(displayIndexStart) {
	      /* eslint-enable no-unused-vars */
	      if (true) {
	        throw new Error('getTopSpacerHeight not implemented.');
	      }
	    }
	
	    /* eslint-disable no-unused-vars */
	  }, {
	    key: 'getBottomSpacerHeight',
	    value: function getBottomSpacerHeight(displayIndexEnd) {
	      /* eslint-enable no-unused-vars */
	      if (true) {
	        throw new Error('getBottomSpacerHeight not implemented.');
	      }
	    }
	  }]);
	
	  return InfiniteComputer;
	})();
	
	module.exports = InfiniteComputer;

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var InfiniteComputer = __webpack_require__(499),
	    bs = __webpack_require__(501);
	
	var ArrayInfiniteComputer = (function (_InfiniteComputer) {
	  _inherits(ArrayInfiniteComputer, _InfiniteComputer);
	
	  function ArrayInfiniteComputer(heightData, numberOfChildren) {
	    _classCallCheck(this, ArrayInfiniteComputer);
	
	    _get(Object.getPrototypeOf(ArrayInfiniteComputer.prototype), 'constructor', this).call(this, heightData, numberOfChildren);
	    this.prefixHeightData = this.heightData.reduce(function (acc, next) {
	      if (acc.length === 0) {
	        return [next];
	      } else {
	        acc.push(acc[acc.length - 1] + next);
	        return acc;
	      }
	    }, []);
	  }
	
	  _createClass(ArrayInfiniteComputer, [{
	    key: 'maybeIndexToIndex',
	    value: function maybeIndexToIndex(index) {
	      if (typeof index === 'undefined' || index === null) {
	        return this.prefixHeightData.length - 1;
	      } else {
	        return index;
	      }
	    }
	  }, {
	    key: 'getTotalScrollableHeight',
	    value: function getTotalScrollableHeight() {
	      var length = this.prefixHeightData.length;
	      return length === 0 ? 0 : this.prefixHeightData[length - 1];
	    }
	  }, {
	    key: 'getDisplayIndexStart',
	    value: function getDisplayIndexStart(windowTop) {
	      var foundIndex = bs.binaryIndexSearch(this.prefixHeightData, windowTop, bs.opts.CLOSEST_HIGHER);
	      return this.maybeIndexToIndex(foundIndex);
	    }
	  }, {
	    key: 'getDisplayIndexEnd',
	    value: function getDisplayIndexEnd(windowBottom) {
	      var foundIndex = bs.binaryIndexSearch(this.prefixHeightData, windowBottom, bs.opts.CLOSEST_HIGHER);
	      return this.maybeIndexToIndex(foundIndex);
	    }
	  }, {
	    key: 'getTopSpacerHeight',
	    value: function getTopSpacerHeight(displayIndexStart) {
	      var previous = displayIndexStart - 1;
	      return previous < 0 ? 0 : this.prefixHeightData[previous];
	    }
	  }, {
	    key: 'getBottomSpacerHeight',
	    value: function getBottomSpacerHeight(displayIndexEnd) {
	      if (displayIndexEnd === -1) {
	        return 0;
	      }
	      return this.getTotalScrollableHeight() - this.prefixHeightData[displayIndexEnd];
	    }
	  }]);
	
	  return ArrayInfiniteComputer;
	})(InfiniteComputer);
	
	module.exports = ArrayInfiniteComputer;

/***/ },

/***/ 501:
/***/ function(module, exports) {

	"use strict";
	
	var opts = {
	  CLOSEST_LOWER: 1,
	  CLOSEST_HIGHER: 2
	};
	
	var binaryIndexSearch = function binaryIndexSearch(array, /* : Array<number> */
	item, /* : number */
	opt /* : number */) /* : ?number */{
	  var index;
	
	  var high = array.length - 1,
	      low = 0,
	      middle,
	      middleItem;
	
	  while (low <= high) {
	    middle = low + Math.floor((high - low) / 2);
	    middleItem = array[middle];
	
	    if (middleItem === item) {
	      return middle;
	    } else if (middleItem < item) {
	      low = middle + 1;
	    } else if (middleItem > item) {
	      high = middle - 1;
	    }
	  }
	
	  if (opt === opts.CLOSEST_LOWER && low > 0) {
	    index = low - 1;
	  } else if (opt === opts.CLOSEST_HIGHER && high < array.length - 1) {
	    index = high + 1;
	  }
	
	  return index;
	};
	
	module.exports = {
	  binaryIndexSearch: binaryIndexSearch,
	  opts: opts
	};

/***/ },

/***/ 502:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsFinite = global.isFinite;
	
	/**
	 * Checks if `value` is a finite primitive number.
	 *
	 * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	 * @example
	 *
	 * _.isFinite(10);
	 * // => true
	 *
	 * _.isFinite('10');
	 * // => false
	 *
	 * _.isFinite(true);
	 * // => false
	 *
	 * _.isFinite(Object(10));
	 * // => false
	 *
	 * _.isFinite(Infinity);
	 * // => false
	 */
	function isFinite(value) {
	  return typeof value == 'number' && nativeIsFinite(value);
	}
	
	module.exports = isFinite;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var React = global.React || __webpack_require__(2);
	
	module.exports = {
	  preloadType: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.shape({
	    type: React.PropTypes.oneOf(['containerHeightScaleFactor']).isRequired,
	    amount: React.PropTypes.number.isRequired
	  })])
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This module provides a centralized place for
	// runtime checking that the props passed to React Infinite
	// make the minimum amount of sense.
	
	'use strict';
	
	var React = global.React || __webpack_require__(2);
	var _isFinite = __webpack_require__(502);
	
	module.exports = function (props) {
	  var rie = 'Invariant Violation: ';
	  if (!(props.containerHeight || props.useWindowAsScrollContainer)) {
	    throw new Error(rie + 'Either containerHeight or useWindowAsScrollContainer must be provided.');
	  }
	
	  if (!(_isFinite(props.elementHeight) || Array.isArray(props.elementHeight))) {
	    throw new Error(rie + 'You must provide either a number or an array of numbers as the elementHeight.');
	  }
	
	  if (Array.isArray(props.elementHeight)) {
	    if (React.Children.count(props.children) !== props.elementHeight.length) {
	      throw new Error(rie + 'There must be as many values provided in the elementHeight prop as there are children.');
	    }
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(365);
	
	var _roleNavigation = __webpack_require__(307);
	
	var _Typeform = __webpack_require__(506);
	
	var _Typeform2 = _interopRequireDefault(_Typeform);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {
	  updateActiveIndex: _roleNavigation.updateActiveIndex,
	  typeformBackAction: _roleNavigation.typeformBackAction
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    event: state.events.currEvent,
	    typeformActiveIndex: state.roleNavigation.typeformActiveIndex,
	    menuTitle: state.roleNavigation.typeformMenuTitle,
	    actionFilter: state.roleNavigation.typeformMenuActionFilter,
	    roleFilter: state.roleNavigation.typeformMenuRoleFilter,
	    email: state.roleNavigation.email
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Typeform2.default);

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Typeform = __webpack_require__(507);
	
	var _Typeform2 = _interopRequireDefault(_Typeform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Typeform2.default;

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Typeform = __webpack_require__(508);
	
	var _Typeform2 = _interopRequireDefault(_Typeform);
	
	var _NavBar = __webpack_require__(511);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	var _designConstants = __webpack_require__(515);
	
	var _tagUtils = __webpack_require__(458);
	
	var _roleNavigation = __webpack_require__(307);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Typeform = function (_React$Component) {
	  (0, _inherits3.default)(Typeform, _React$Component);
	
	  function Typeform() {
	    (0, _classCallCheck3.default)(this, Typeform);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Typeform.__proto__ || (0, _getPrototypeOf2.default)(Typeform)).call(this));
	
	    _this.state = { windowWidth: window.innerWidth,
	      rectWidth: _this.calcRectWidth(),
	      rectPadding: _this.calcRectPadding(),
	      rectMargin: _this.calcRectMargin(),
	      activeIndices: [],
	      allName: [] };
	    _this.handleResize = _this.handleResize.bind(_this);
	    _this.handleBackClick = _this.handleBackClick.bind(_this);
	    _this.handleRefreshClick = _this.handleRefreshClick.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(Typeform, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this.handleResize);
	      this.filterForms(this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.filterForms(nextProps);
	    }
	  }, {
	    key: 'filterForms',
	    value: function filterForms(nextProps) {
	      var names = nextProps.event['form_names'];
	      var routes = nextProps.event['form_routes'];
	      var indices = this.filterIndexArrayByWord([nextProps.actionFilter, nextProps.roleFilter], routes);
	      var iframes = document.getElementsByClassName(_Typeform2.default.typeform);
	      this.setState({ activeIndices: indices });
	    }
	  }, {
	    key: 'filterIndexArrayByWord',
	    value: function filterIndexArrayByWord(words, routes) {
	      var indices = [];
	      for (var i = 0; i < routes.length; i++) {
	        var counter = 0;
	        for (var j = 0; j < words.length; j++) {
	          if (routes[i].includes(words[j])) {
	            counter++;
	          }
	        }
	        if (counter == words.length) {
	          indices.push(i);
	        }
	      }
	      return indices;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize(event) {
	      this.setState({ windowWidth: window.innerWidth,
	        rectWidth: this.calcRectWidth(),
	        rectPadding: this.calcRectPadding(),
	        rectMargin: this.calcRectMargin() });
	    }
	  }, {
	    key: 'calcRectWidth',
	    value: function calcRectWidth() {
	      return (window.innerWidth - _designConstants.navBarWidth) / 2 / 2.5;
	    }
	  }, {
	    key: 'calcRectPadding',
	    value: function calcRectPadding() {
	      return (window.innerWidth - _designConstants.navBarWidth) / 2 / 15;
	    }
	  }, {
	    key: 'calcRectMargin',
	    value: function calcRectMargin() {
	      return (window.innerWidth - _designConstants.navBarWidth) / 2 - 2 * this.calcRectWidth() - 2 * this.calcRectPadding() - 5;
	    }
	  }, {
	    key: 'colorForIndex',
	    value: function colorForIndex(index) {
	      var route = this.props.event['form_routes'][index];
	      var route_split = route.split('_');
	      return route_split.length > 2 ? _tagUtils.tagColorMap[route_split[2]] : '#FFFFFF';
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(index) {
	      this.props.updateActiveIndex(index, _roleNavigation.DisplayType.TYPEFORM);
	    }
	  }, {
	    key: 'handleBackClick',
	    value: function handleBackClick() {
	      this.props.typeformBackAction();
	    }
	  }, {
	    key: 'handleRefreshClick',
	    value: function handleRefreshClick() {
	      var iframes = document.getElementsByClassName(_Typeform2.default.typeform);
	      var currentFrame = iframes[this.props.typeformActiveIndex];
	      currentFrame.src = currentFrame.src;
	      currentFrame.style.display = 'none';
	      currentFrame.style.display = 'block';
	    }
	  }, {
	    key: 'handleTypeformActiveDisplay',
	    value: function handleTypeformActiveDisplay(activeIndex) {
	      return this.state.activeIndices[this.props.typeformActiveIndex] == activeIndex ? 'block' : 'none';
	    }
	  }, {
	    key: 'formBaseUrl',
	    value: function formBaseUrl(activeIndex) {
	      var baseUrl = 'https://hackduke.typeform.com/to/';
	      baseUrl += this.props.event['form_ids'][activeIndex];
	      baseUrl += '?' + this.props.event['form_routes'][activeIndex] + '=xxxxx';
	      if (this.props.email != '' && this.props.roleFilter == 'participant') {
	        baseUrl += '?email=' + this.props.email;
	      }
	      return baseUrl;
	    }
	  }, {
	    key: 'renderTypeform',
	    value: function renderTypeform(index) {
	      var _this2 = this;
	
	      var activeIndex = [this.state.activeIndices[index]];
	      if (activeIndex < this.props.event['form_names'].length) {
	        var baseUrl = this.formBaseUrl(activeIndex);
	        return _react2.default.createElement(
	          'div',
	          { className: _Typeform2.default.frameContainer,
	            style: { 'display': '' + this.handleTypeformActiveDisplay(activeIndex) },
	            key: index },
	          _react2.default.createElement(_NavBar2.default, { leftItem: 'Back',
	            leftClick: function leftClick() {
	              return _this2.handleBackClick();
	            },
	            rightItem: 'Refresh',
	            rightClick: function rightClick() {
	              return _this2.handleRefreshClick();
	            },
	            title: this.props.event['form_names'][activeIndex] }),
	          _react2.default.createElement(
	            'div',
	            { className: _Typeform2.default.spinner },
	            _react2.default.createElement('embed', { className: _Typeform2.default.typeform,
	              src: baseUrl,
	              style: { 'display': '' + this.handleTypeformActiveDisplay(activeIndex) } })
	          )
	        );
	      }
	    }
	  }, {
	    key: 'renderRect',
	    value: function renderRect(activeIndex) {
	      var name = this.props.event['form_names'][activeIndex];
	      var id = this.props.event['form_ids'][activeIndex];
	      var route = this.props.event['form_routes'][activeIndex];
	      return _react2.default.createElement(
	        'div',
	        { key: activeIndex },
	        _react2.default.createElement(
	          'div',
	          { className: _Typeform2.default.title },
	          name
	        )
	      );
	    }
	  }, {
	    key: 'handleBackStatus',
	    value: function handleBackStatus() {
	      return this.props.email && this.props.email != '' ? 'Back' : '';
	    }
	  }, {
	    key: 'renderIndex',
	    value: function renderIndex(index, floatDirection) {
	      var _this3 = this;
	
	      var activeIndex = [this.state.activeIndices[index]];
	      return _react2.default.createElement(
	        'button',
	        { onClick: function onClick() {
	            return _this3.handleClick(index);
	          }, className: _Typeform2.default.coloredRect,
	          key: index,
	          style: { 'width': this.state.rectWidth + 'px',
	            'height': this.state.rectWidth * 1.2 + 'px',
	            'marginBottom': this.state.rectMargin + 'px',
	            'backgroundColor': '' + this.colorForIndex(activeIndex),
	            'float': '' + floatDirection } },
	        this.renderRect(activeIndex)
	      );
	    }
	  }, {
	    key: 'renderRow',
	    value: function renderRow(index) {
	      if (index + 1 < this.state.activeIndices.length) {
	        return _react2.default.createElement(
	          'div',
	          { key: index },
	          this.renderIndex(index, 'left'),
	          this.renderIndex(index + 1, 'right')
	        );
	      } else {
	        return this.renderIndex(index, 'left');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.state.activeIndices.map(function (name, index) {
	          return _this4.renderTypeform(index);
	        }),
	        this.props.typeformActiveIndex != -1 ? null : _react2.default.createElement(
	          'div',
	          { className: _Typeform2.default.typeformListContainer },
	          _react2.default.createElement(_NavBar2.default, { title: this.props.menuTitle,
	            leftItem: this.handleBackStatus(),
	            leftClick: function leftClick() {
	              return _this4.handleBackClick();
	            } }),
	          _react2.default.createElement(
	            'div',
	            { className: _Typeform2.default.menuContainer,
	              style: { 'paddingLeft': this.state.rectPadding + 'px',
	                'paddingRight': this.state.rectPadding + 'px' } },
	            this.state.activeIndices.map(function (name, index) {
	              if (index % 2 == 0) {
	                return _this4.renderRow(index);
	              }
	            })
	          )
	        )
	      );
	    }
	  }]);
	  return Typeform;
	}(_react2.default.Component);
	
	Typeform.propTypes = {
	  event: _react2.default.PropTypes.object.isRequired,
	  email: _react2.default.PropTypes.string,
	  roleFilter: _react2.default.PropTypes.string,
	  actionFilter: _react2.default.PropTypes.string,
	  typeformActiveIndex: _react2.default.PropTypes.number.isRequired,
	  updateActiveIndex: _react2.default.PropTypes.func.isRequired,
	  menuTitle: _react2.default.PropTypes.string.isRequired,
	  typeformBackAction: _react2.default.PropTypes.func.isRequired
	};
	exports.default = Typeform;

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(509);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(509, function() {
				var newContent = __webpack_require__(509);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
	// imports
	
	
	// module
	exports.push([module.id, ".Typeform__menuContainer___Z8Oxk{padding-top:70px;width:100%}.Typeform__coloredRect___d-dAb:focus{outline:none}.Typeform__coloredRect___d-dAb{border:0;border-radius:5px;display:inline-block;text-align:center;height:200px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.Typeform__title___2ib4y{padding-left:10px;padding-right:10px;font-size:20px;color:#fff;font-weight:800}.Typeform__typeform___3PS0m{height:100vh;width:100%;border:0}.Typeform__spinner___9WJjz{background-image:url(" + __webpack_require__(510) + ");background-repeat:no-repeat;background-position:50% 55%;background-size:50px 50px;z-index:1000000;height:100vh}.Typeform__frameContainer___lvXL3{height:100vh}.Typeform__frameContainer___lvXL3,.Typeform__typeformListContainer___3s0bn{position:relative;width:100%}", "", {"version":3,"sources":["/./src/components/Typeform/src/components/Typeform/Typeform.scss"],"names":[],"mappings":"AAEA,iCACC,iBAAkB,UAElB,CAAC,qCAGD,YAAc,CACd,+BAGA,SAAU,kBACS,qBACG,kBACH,aACL,oBACd,aAAc,qBACd,uBAAwB,sBACxB,kBAAoB,CACpB,yBAGA,kBAAmB,mBACC,eACJ,WACD,eACE,CACjB,4BAGA,aAAc,WACF,QACF,CACV,2BAGA,+CAAqB,4BACW,4BACA,0BACF,gBACV,YACH,CACjB,kCAKA,YAAc,CAEd,2EAHA,kBAAmB,UAEP,CAMZ","file":"Typeform.scss","sourcesContent":["@import 'src/styles/base';\n\n.menuContainer {\n\tpadding-top: 70px;\n\twidth: 100%\n}\n\n.coloredRect:focus {\n\toutline: none;\n}\n\n.coloredRect {\n\tborder: 0;\n\tborder-radius: 5px;\n\tdisplay: inline-block;\n\ttext-align: center;\n\theight: 200px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.title {\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tfont-size: 20px;\n\tcolor: #FFFFFF;\n\tfont-weight: 800;\n}\n\n.typeform {\n\theight: 100vh;\n\twidth: 100%;\n\tborder: 0;\n}\n\n.spinner {\n\tbackground-image: url('static/spinner.gif');\n    background-repeat: no-repeat;\n    background-position: 50% 55%;\n    background-size: 50px 50px;\n    z-index: 1000000;\n    height: 100vh;\n}\n\n\n.frameContainer {\n\tposition: relative;\n\theight: 100vh;\n\twidth: 100%;\n}\n\n.typeformListContainer {\n\tposition: relative;\n\twidth: 100%;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"menuContainer": "Typeform__menuContainer___Z8Oxk",
		"coloredRect": "Typeform__coloredRect___d-dAb",
		"title": "Typeform__title___2ib4y",
		"typeform": "Typeform__typeform___3PS0m",
		"spinner": "Typeform__spinner___9WJjz",
		"frameContainer": "Typeform__frameContainer___lvXL3",
		"typeformListContainer": "Typeform__typeformListContainer___3s0bn"
	};

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "18be94cf37fa0da67af3c46ddebca50a.gif";

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NavBar = __webpack_require__(512);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _NavBar2.default;

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(315);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(320);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(321);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(322);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(357);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavBar = __webpack_require__(513);
	
	var _NavBar2 = _interopRequireDefault(_NavBar);
	
	var _stringUtils = __webpack_require__(405);
	
	var _tagUtils = __webpack_require__(458);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavBar = function (_React$Component) {
	  (0, _inherits3.default)(NavBar, _React$Component);
	
	  function NavBar() {
	    (0, _classCallCheck3.default)(this, NavBar);
	    return (0, _possibleConstructorReturn3.default)(this, (NavBar.__proto__ || (0, _getPrototypeOf2.default)(NavBar)).call(this));
	  }
	
	  (0, _createClass3.default)(NavBar, [{
	    key: 'handleRightClick',
	    value: function handleRightClick() {
	      if (this.props.rightClick) {
	        this.props.rightClick();
	      }
	    }
	  }, {
	    key: 'handleLeftClick',
	    value: function handleLeftClick() {
	      if (this.props.leftClick) {
	        this.props.leftClick();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _NavBar2.default.navBar },
	        this.props.leftItem && this.props.leftItem != '' ? _react2.default.createElement(
	          'button',
	          { className: _NavBar2.default.leftButton, onClick: this.handleLeftClick.bind(this) },
	          this.props.leftItem
	        ) : null,
	        _react2.default.createElement(
	          'div',
	          { className: _NavBar2.default.barTitle },
	          ' ',
	          this.props.title,
	          ' '
	        ),
	        this.props.rightItem && this.props.rightItem != '' ? _react2.default.createElement(
	          'button',
	          { className: _NavBar2.default.rightButton, onClick: this.handleRightClick.bind(this) },
	          this.props.rightItem
	        ) : null
	      );
	    }
	  }]);
	  return NavBar;
	}(_react2.default.Component);
	
	NavBar.propTypes = {
	  leftItem: _react2.default.PropTypes.string,
	  rightItem: _react2.default.PropTypes.string,
	  leftClick: _react2.default.PropTypes.func,
	  rightClick: _react2.default.PropTypes.func,
	  title: _react2.default.PropTypes.string.isRequired
	};
	exports.default = NavBar;

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(514);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(380)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(514, function() {
				var newContent = __webpack_require__(514);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(379)();
	// imports
	
	
	// module
	exports.push([module.id, ".NavBar__navBar___3oeIh{position:absolute;top:0;width:100%;line-height:45px;color:#fff;font-size:15px;text-align:left}.NavBar__navBar___3oeIh,.NavBar__rightButton___2gPRr{display:inline-block;height:45px;background-color:#192738}.NavBar__rightButton___2gPRr{border:0;transform:translateY(-3px);float:right;padding-right:20px}.NavBar__leftButton___1gM6Z{background-color:#192738;border:0;height:45px;transform:translateY(-1px);padding-left:20px}.NavBar__barTitle____d98d{color:#fff;line-height:45px;height:45px;font-size:15px;display:inline-block;position:absolute;left:50%;transform:translate(-50%);padding-left:0}.NavBar__leftButton___1gM6Z:hover,.NavBar__rightButton___2gPRr:hover{color:#ccc}.NavBar__leftButton___1gM6Z:focus,.NavBar__rightButton___2gPRr:focus{outline:none}", "", {"version":3,"sources":["/./src/components/NavBar/src/components/NavBar/NavBar.scss","/./src/components/NavBar/src/styles/_base.scss"],"names":[],"mappings":"AAEA,wBACC,kBAAmB,MAEX,WACI,iBAGO,WACH,eACC,eACC,CAClB,qDATA,qBAAsB,YAGR,wBCQG,CDAlB,6BAEC,SAAU,2BAEU,YAEP,kBACO,CACpB,4BAGA,yBACA,SAAU,YACG,2BACO,iBACD,CACnB,0BAGA,WAAe,iBACG,YACL,eACG,qBACM,kBACH,SACT,0BACU,cACJ,CAChB,qEAGA,UAAa,CACb,qEAGA,YAAc,CACd","file":"NavBar.scss","sourcesContent":["@import 'src/styles/base';\n\n.navBar {\n\tposition: absolute;\n\tdisplay: inline-block;\n  top: 0;\n  width:100%;\n  height: 45px;\n \tbackground-color: $navLight;\n \tline-height: 45px;\n \tcolor: #FFFFFF;\n \tfont-size: 15px;\n \ttext-align: left;\n}\n\n.rightButton {\n\tbackground-color: $navLight;\n\tborder: 0;\n\theight: 45px;\n\ttransform: translate(0, -3px);\n\tdisplay: inline-block;\n\tfloat: right;\n\tpadding-right: 20px;\n}\n\n.leftButton {\n\tbackground-color: $navLight;\n\tborder: 0;\n\theight: 45px;\n\ttransform: translate(0, -1px);\n\tpadding-left: 20px;\n}\n\n.barTitle {\n\tcolor: #FFFFFF;\n\tline-height: 45px;\n\theight: 45px;\n\tfont-size: 15px;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tleft: 50%;\n\ttransform: translate(-50%, 0%);\n\tpadding-left: 0;\n}\n\n.rightButton:hover, .leftButton:hover {\n\tcolor: darken(#FFFFFF, 20%);\n}\n\n.rightButton:focus, .leftButton:focus {\n\toutline: none;\n}","/*\nApplication Settings Go Here\n------------------------------------\nThis file acts as a bundler for all variables/mixins/themes, so they\ncan easily be swapped out without `core.scss` ever having to know.\n\nFor example:\n\n@import './variables/colors';\n@import './variables/components';\n@import './themes/default';\n*/\n\n$navMenuWidth: 250px;\n\n$navLight: #192738;\n$navDark: #0F1B27;\n$navMedium: #162330;\n\n$lightGrey: #DEDEDE;\n$lightestGrey: #F9F9FC;\n$lightGreen: #52D298;\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"navBar": "NavBar__navBar___3oeIh",
		"rightButton": "NavBar__rightButton___2gPRr",
		"leftButton": "NavBar__leftButton___1gM6Z",
		"barTitle": "NavBar__barTitle____d98d"
	};

/***/ },

/***/ 515:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var navBarWidth = exports.navBarWidth = 250;

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateChannel = undefined;
	
	var _pusherJs = __webpack_require__(517);
	
	var _pusherJs2 = _interopRequireDefault(_pusherJs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_pusherJs2.default.logToConsole = true;
	var pusher = new _pusherJs2.default(("2b0e7f8a07fe64f46399"), {
	  encrypted: true
	});
	
	var updateChannel = exports.updateChannel = pusher.subscribe('update_channel');

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Pusher JavaScript Library v3.2.0
	 * http://pusher.com/
	 *
	 * Copyright 2016, Pusher
	 * Released under the MIT licence.
	 */
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Pusher"] = factory();
		else
			root["Pusher"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var pusher_1 = __webpack_require__(1);
		module.exports = pusher_1["default"];
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var runtime_1 = __webpack_require__(2);
		var Collections = __webpack_require__(9);
		var dispatcher_1 = __webpack_require__(23);
		var timeline_1 = __webpack_require__(38);
		var level_1 = __webpack_require__(39);
		var StrategyBuilder = __webpack_require__(40);
		var timers_1 = __webpack_require__(12);
		var defaults_1 = __webpack_require__(5);
		var DefaultConfig = __webpack_require__(62);
		var logger_1 = __webpack_require__(8);
		var factory_1 = __webpack_require__(42);
		var Pusher = (function () {
		    function Pusher(app_key, options) {
		        var _this = this;
		        checkAppKey(app_key);
		        options = options || {};
		        this.key = app_key;
		        this.config = Collections.extend(DefaultConfig.getGlobalConfig(), options.cluster ? DefaultConfig.getClusterConfig(options.cluster) : {}, options);
		        this.channels = factory_1["default"].createChannels();
		        this.global_emitter = new dispatcher_1["default"]();
		        this.sessionID = Math.floor(Math.random() * 1000000000);
		        this.timeline = new timeline_1["default"](this.key, this.sessionID, {
		            cluster: this.config.cluster,
		            features: Pusher.getClientFeatures(),
		            params: this.config.timelineParams || {},
		            limit: 50,
		            level: level_1["default"].INFO,
		            version: defaults_1["default"].VERSION
		        });
		        if (!this.config.disableStats) {
		            this.timelineSender = factory_1["default"].createTimelineSender(this.timeline, {
		                host: this.config.statsHost,
		                path: "/timeline/v2/" + runtime_1["default"].TimelineTransport.name
		            });
		        }
		        var getStrategy = function (options) {
		            var config = Collections.extend({}, _this.config, options);
		            return StrategyBuilder.build(runtime_1["default"].getDefaultStrategy(config), config);
		        };
		        this.connection = factory_1["default"].createConnectionManager(this.key, Collections.extend({ getStrategy: getStrategy,
		            timeline: this.timeline,
		            activityTimeout: this.config.activity_timeout,
		            pongTimeout: this.config.pong_timeout,
		            unavailableTimeout: this.config.unavailable_timeout
		        }, this.config, { encrypted: this.isEncrypted() }));
		        this.connection.bind('connected', function () {
		            _this.subscribeAll();
		            if (_this.timelineSender) {
		                _this.timelineSender.send(_this.connection.isEncrypted());
		            }
		        });
		        this.connection.bind('message', function (params) {
		            var internal = (params.event.indexOf('pusher_internal:') === 0);
		            if (params.channel) {
		                var channel = _this.channel(params.channel);
		                if (channel) {
		                    channel.handleEvent(params.event, params.data);
		                }
		            }
		            if (!internal) {
		                _this.global_emitter.emit(params.event, params.data);
		            }
		        });
		        this.connection.bind('disconnected', function () {
		            _this.channels.disconnect();
		        });
		        this.connection.bind('error', function (err) {
		            logger_1["default"].warn('Error', err);
		        });
		        Pusher.instances.push(this);
		        this.timeline.info({ instances: Pusher.instances.length });
		        if (Pusher.isReady) {
		            this.connect();
		        }
		    }
		    Pusher.ready = function () {
		        Pusher.isReady = true;
		        for (var i = 0, l = Pusher.instances.length; i < l; i++) {
		            Pusher.instances[i].connect();
		        }
		    };
		    Pusher.log = function (message) {
		        if (Pusher.logToConsole && (window).console && (window).console.log) {
		            (window).console.log(message);
		        }
		    };
		    Pusher.getClientFeatures = function () {
		        return Collections.keys(Collections.filterObject({ "ws": runtime_1["default"].Transports.ws }, function (t) { return t.isSupported({}); }));
		    };
		    Pusher.prototype.channel = function (name) {
		        return this.channels.find(name);
		    };
		    Pusher.prototype.allChannels = function () {
		        return this.channels.all();
		    };
		    Pusher.prototype.connect = function () {
		        this.connection.connect();
		        if (this.timelineSender) {
		            if (!this.timelineSenderTimer) {
		                var encrypted = this.connection.isEncrypted();
		                var timelineSender = this.timelineSender;
		                this.timelineSenderTimer = new timers_1.PeriodicTimer(60000, function () {
		                    timelineSender.send(encrypted);
		                });
		            }
		        }
		    };
		    Pusher.prototype.disconnect = function () {
		        this.connection.disconnect();
		        if (this.timelineSenderTimer) {
		            this.timelineSenderTimer.ensureAborted();
		            this.timelineSenderTimer = null;
		        }
		    };
		    Pusher.prototype.bind = function (event_name, callback) {
		        this.global_emitter.bind(event_name, callback);
		        return this;
		    };
		    Pusher.prototype.unbind = function (event_name, callback) {
		        this.global_emitter.unbind(event_name, callback);
		        return this;
		    };
		    Pusher.prototype.bind_all = function (callback) {
		        this.global_emitter.bind_all(callback);
		        return this;
		    };
		    Pusher.prototype.subscribeAll = function () {
		        var channelName;
		        for (channelName in this.channels.channels) {
		            if (this.channels.channels.hasOwnProperty(channelName)) {
		                this.subscribe(channelName);
		            }
		        }
		    };
		    Pusher.prototype.subscribe = function (channel_name) {
		        var channel = this.channels.add(channel_name, this);
		        if (this.connection.state === "connected") {
		            channel.subscribe();
		        }
		        return channel;
		    };
		    Pusher.prototype.unsubscribe = function (channel_name) {
		        var channel = this.channels.remove(channel_name);
		        if (channel && this.connection.state === "connected") {
		            channel.unsubscribe();
		        }
		    };
		    Pusher.prototype.send_event = function (event_name, data, channel) {
		        return this.connection.send_event(event_name, data, channel);
		    };
		    Pusher.prototype.isEncrypted = function () {
		        if (runtime_1["default"].getProtocol() === "https:") {
		            return true;
		        }
		        else {
		            return Boolean(this.config.encrypted);
		        }
		    };
		    Pusher.instances = [];
		    Pusher.isReady = false;
		    Pusher.logToConsole = false;
		    Pusher.Runtime = runtime_1["default"];
		    Pusher.ScriptReceivers = runtime_1["default"].ScriptReceivers;
		    Pusher.DependenciesReceivers = runtime_1["default"].DependenciesReceivers;
		    Pusher.auth_callbacks = runtime_1["default"].auth_callbacks;
		    return Pusher;
		}());
		exports.__esModule = true;
		exports["default"] = Pusher;
		function checkAppKey(key) {
		    if (key === null || key === undefined) {
		        throw "You must pass your app key when you instantiate Pusher.";
		    }
		}
		runtime_1["default"].setup(Pusher);
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var dependencies_1 = __webpack_require__(3);
		var xhr_auth_1 = __webpack_require__(7);
		var jsonp_auth_1 = __webpack_require__(14);
		var script_request_1 = __webpack_require__(15);
		var jsonp_request_1 = __webpack_require__(16);
		var script_receiver_factory_1 = __webpack_require__(4);
		var jsonp_timeline_1 = __webpack_require__(17);
		var transports_1 = __webpack_require__(18);
		var net_info_1 = __webpack_require__(25);
		var default_strategy_1 = __webpack_require__(26);
		var transport_connection_initializer_1 = __webpack_require__(27);
		var http_1 = __webpack_require__(28);
		var Runtime = {
		    nextAuthCallbackID: 1,
		    auth_callbacks: {},
		    ScriptReceivers: script_receiver_factory_1.ScriptReceivers,
		    DependenciesReceivers: dependencies_1.DependenciesReceivers,
		    getDefaultStrategy: default_strategy_1["default"],
		    Transports: transports_1["default"],
		    transportConnectionInitializer: transport_connection_initializer_1["default"],
		    HTTPFactory: http_1["default"],
		    TimelineTransport: jsonp_timeline_1["default"],
		    getXHRAPI: function () {
		        return window.XMLHttpRequest;
		    },
		    getWebSocketAPI: function () {
		        return window.WebSocket || window.MozWebSocket;
		    },
		    setup: function (PusherClass) {
		        var _this = this;
		        window.Pusher = PusherClass;
		        var initializeOnDocumentBody = function () {
		            _this.onDocumentBody(PusherClass.ready);
		        };
		        if (!window.JSON) {
		            dependencies_1.Dependencies.load("json2", {}, initializeOnDocumentBody);
		        }
		        else {
		            initializeOnDocumentBody();
		        }
		    },
		    getDocument: function () {
		        return document;
		    },
		    getProtocol: function () {
		        return this.getDocument().location.protocol;
		    },
		    getAuthorizers: function () {
		        return { ajax: xhr_auth_1["default"], jsonp: jsonp_auth_1["default"] };
		    },
		    onDocumentBody: function (callback) {
		        var _this = this;
		        if (document.body) {
		            callback();
		        }
		        else {
		            setTimeout(function () {
		                _this.onDocumentBody(callback);
		            }, 0);
		        }
		    },
		    createJSONPRequest: function (url, data) {
		        return new jsonp_request_1["default"](url, data);
		    },
		    createScriptRequest: function (src) {
		        return new script_request_1["default"](src);
		    },
		    getLocalStorage: function () {
		        try {
		            return window.localStorage;
		        }
		        catch (e) {
		            return undefined;
		        }
		    },
		    createXHR: function () {
		        if (this.getXHRAPI()) {
		            return this.createXMLHttpRequest();
		        }
		        else {
		            return this.createMicrosoftXHR();
		        }
		    },
		    createXMLHttpRequest: function () {
		        var Constructor = this.getXHRAPI();
		        return new Constructor();
		    },
		    createMicrosoftXHR: function () {
		        return new ActiveXObject("Microsoft.XMLHTTP");
		    },
		    getNetwork: function () {
		        return net_info_1.Network;
		    },
		    createWebSocket: function (url) {
		        var Constructor = this.getWebSocketAPI();
		        return new Constructor(url);
		    },
		    createSocketRequest: function (method, url) {
		        if (this.isXHRSupported()) {
		            return this.HTTPFactory.createXHR(method, url);
		        }
		        else if (this.isXDRSupported(url.indexOf("https:") === 0)) {
		            return this.HTTPFactory.createXDR(method, url);
		        }
		        else {
		            throw "Cross-origin HTTP requests are not supported";
		        }
		    },
		    isXHRSupported: function () {
		        var Constructor = this.getXHRAPI();
		        return Boolean(Constructor) && (new Constructor()).withCredentials !== undefined;
		    },
		    isXDRSupported: function (encrypted) {
		        var protocol = encrypted ? "https:" : "http:";
		        var documentProtocol = this.getProtocol();
		        return Boolean((window['XDomainRequest'])) && documentProtocol === protocol;
		    },
		    addUnloadListener: function (listener) {
		        if (window.addEventListener !== undefined) {
		            window.addEventListener("unload", listener, false);
		        }
		        else if (window.attachEvent !== undefined) {
		            window.attachEvent("onunload", listener);
		        }
		    },
		    removeUnloadListener: function (listener) {
		        if (window.addEventListener !== undefined) {
		            window.removeEventListener("unload", listener, false);
		        }
		        else if (window.detachEvent !== undefined) {
		            window.detachEvent("onunload", listener);
		        }
		    }
		};
		exports.__esModule = true;
		exports["default"] = Runtime;
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var script_receiver_factory_1 = __webpack_require__(4);
		var defaults_1 = __webpack_require__(5);
		var dependency_loader_1 = __webpack_require__(6);
		exports.DependenciesReceivers = new script_receiver_factory_1.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers");
		exports.Dependencies = new dependency_loader_1["default"]({
		    cdn_http: defaults_1["default"].cdn_http,
		    cdn_https: defaults_1["default"].cdn_https,
		    version: defaults_1["default"].VERSION,
		    suffix: defaults_1["default"].dependency_suffix,
		    receivers: exports.DependenciesReceivers
		});
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		"use strict";
		var ScriptReceiverFactory = (function () {
		    function ScriptReceiverFactory(prefix, name) {
		        this.lastId = 0;
		        this.prefix = prefix;
		        this.name = name;
		    }
		    ScriptReceiverFactory.prototype.create = function (callback) {
		        this.lastId++;
		        var number = this.lastId;
		        var id = this.prefix + number;
		        var name = this.name + "[" + number + "]";
		        var called = false;
		        var callbackWrapper = function () {
		            if (!called) {
		                callback.apply(null, arguments);
		                called = true;
		            }
		        };
		        this[number] = callbackWrapper;
		        return { number: number, id: id, name: name, callback: callbackWrapper };
		    };
		    ScriptReceiverFactory.prototype.remove = function (receiver) {
		        delete this[receiver.number];
		    };
		    return ScriptReceiverFactory;
		}());
		exports.ScriptReceiverFactory = ScriptReceiverFactory;
		exports.ScriptReceivers = new ScriptReceiverFactory("_pusher_script_", "Pusher.ScriptReceivers");
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		"use strict";
		var Defaults = {
		    VERSION: "3.2.0",
		    PROTOCOL: 7,
		    host: 'ws.pusherapp.com',
		    ws_port: 80,
		    wss_port: 443,
		    sockjs_host: 'sockjs.pusher.com',
		    sockjs_http_port: 80,
		    sockjs_https_port: 443,
		    sockjs_path: "/pusher",
		    stats_host: 'stats.pusher.com',
		    channel_auth_endpoint: '/pusher/auth',
		    channel_auth_transport: 'ajax',
		    activity_timeout: 120000,
		    pong_timeout: 30000,
		    unavailable_timeout: 10000,
		    cdn_http: 'http://js.pusher.com',
		    cdn_https: 'https://js.pusher.com',
		    dependency_suffix: ''
		};
		exports.__esModule = true;
		exports["default"] = Defaults;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var script_receiver_factory_1 = __webpack_require__(4);
		var runtime_1 = __webpack_require__(2);
		var DependencyLoader = (function () {
		    function DependencyLoader(options) {
		        this.options = options;
		        this.receivers = options.receivers || script_receiver_factory_1.ScriptReceivers;
		        this.loading = {};
		    }
		    DependencyLoader.prototype.load = function (name, options, callback) {
		        var self = this;
		        if (self.loading[name] && self.loading[name].length > 0) {
		            self.loading[name].push(callback);
		        }
		        else {
		            self.loading[name] = [callback];
		            var request = runtime_1["default"].createScriptRequest(self.getPath(name, options));
		            var receiver = self.receivers.create(function (error) {
		                self.receivers.remove(receiver);
		                if (self.loading[name]) {
		                    var callbacks = self.loading[name];
		                    delete self.loading[name];
		                    var successCallback = function (wasSuccessful) {
		                        if (!wasSuccessful) {
		                            request.cleanup();
		                        }
		                    };
		                    for (var i = 0; i < callbacks.length; i++) {
		                        callbacks[i](error, successCallback);
		                    }
		                }
		            });
		            request.send(receiver);
		        }
		    };
		    DependencyLoader.prototype.getRoot = function (options) {
		        var cdn;
		        var protocol = runtime_1["default"].getDocument().location.protocol;
		        if ((options && options.encrypted) || protocol === "https:") {
		            cdn = this.options.cdn_https;
		        }
		        else {
		            cdn = this.options.cdn_http;
		        }
		        return cdn.replace(/\/*$/, "") + "/" + this.options.version;
		    };
		    DependencyLoader.prototype.getPath = function (name, options) {
		        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
		    };
		    ;
		    return DependencyLoader;
		}());
		exports.__esModule = true;
		exports["default"] = DependencyLoader;
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var logger_1 = __webpack_require__(8);
		var runtime_1 = __webpack_require__(2);
		var ajax = function (context, socketId, callback) {
		    var self = this, xhr;
		    xhr = runtime_1["default"].createXHR();
		    xhr.open("POST", self.options.authEndpoint, true);
		    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		    for (var headerName in this.authOptions.headers) {
		        xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
		    }
		    xhr.onreadystatechange = function () {
		        if (xhr.readyState === 4) {
		            if (xhr.status === 200) {
		                var data, parsed = false;
		                try {
		                    data = JSON.parse(xhr.responseText);
		                    parsed = true;
		                }
		                catch (e) {
		                    callback(true, 'JSON returned from webapp was invalid, yet status code was 200. Data was: ' + xhr.responseText);
		                }
		                if (parsed) {
		                    callback(false, data);
		                }
		            }
		            else {
		                logger_1["default"].warn("Couldn't get auth info from your webapp", xhr.status);
		                callback(true, xhr.status);
		            }
		        }
		    };
		    xhr.send(this.composeQuery(socketId));
		    return xhr;
		};
		exports.__esModule = true;
		exports["default"] = ajax;
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var collections_1 = __webpack_require__(9);
		var pusher_1 = __webpack_require__(1);
		var Logger = {
		    debug: function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i - 0] = arguments[_i];
		        }
		        if (!pusher_1["default"].log) {
		            return;
		        }
		        pusher_1["default"].log(collections_1.stringify.apply(this, arguments));
		    },
		    warn: function () {
		        var args = [];
		        for (var _i = 0; _i < arguments.length; _i++) {
		            args[_i - 0] = arguments[_i];
		        }
		        var message = collections_1.stringify.apply(this, arguments);
		        if ((window).console) {
		            if ((window).console.warn) {
		                (window).console.warn(message);
		            }
		            else if ((window).console.log) {
		                (window).console.log(message);
		            }
		        }
		        if (pusher_1["default"].log) {
		            pusher_1["default"].log(message);
		        }
		    }
		};
		exports.__esModule = true;
		exports["default"] = Logger;
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var base64_1 = __webpack_require__(10);
		var util_1 = __webpack_require__(11);
		function extend(target) {
		    var sources = [];
		    for (var _i = 1; _i < arguments.length; _i++) {
		        sources[_i - 1] = arguments[_i];
		    }
		    for (var i = 0; i < sources.length; i++) {
		        var extensions = sources[i];
		        for (var property in extensions) {
		            if (extensions[property] && extensions[property].constructor &&
		                extensions[property].constructor === Object) {
		                target[property] = extend(target[property] || {}, extensions[property]);
		            }
		            else {
		                target[property] = extensions[property];
		            }
		        }
		    }
		    return target;
		}
		exports.extend = extend;
		function stringify() {
		    var m = ["Pusher"];
		    for (var i = 0; i < arguments.length; i++) {
		        if (typeof arguments[i] === "string") {
		            m.push(arguments[i]);
		        }
		        else {
		            m.push(safeJSONStringify(arguments[i]));
		        }
		    }
		    return m.join(" : ");
		}
		exports.stringify = stringify;
		function arrayIndexOf(array, item) {
		    var nativeIndexOf = Array.prototype.indexOf;
		    if (array === null) {
		        return -1;
		    }
		    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
		        return array.indexOf(item);
		    }
		    for (var i = 0, l = array.length; i < l; i++) {
		        if (array[i] === item) {
		            return i;
		        }
		    }
		    return -1;
		}
		exports.arrayIndexOf = arrayIndexOf;
		function objectApply(object, f) {
		    for (var key in object) {
		        if (Object.prototype.hasOwnProperty.call(object, key)) {
		            f(object[key], key, object);
		        }
		    }
		}
		exports.objectApply = objectApply;
		function keys(object) {
		    var keys = [];
		    objectApply(object, function (_, key) {
		        keys.push(key);
		    });
		    return keys;
		}
		exports.keys = keys;
		function values(object) {
		    var values = [];
		    objectApply(object, function (value) {
		        values.push(value);
		    });
		    return values;
		}
		exports.values = values;
		function apply(array, f, context) {
		    for (var i = 0; i < array.length; i++) {
		        f.call(context || (window), array[i], i, array);
		    }
		}
		exports.apply = apply;
		function map(array, f) {
		    var result = [];
		    for (var i = 0; i < array.length; i++) {
		        result.push(f(array[i], i, array, result));
		    }
		    return result;
		}
		exports.map = map;
		function mapObject(object, f) {
		    var result = {};
		    objectApply(object, function (value, key) {
		        result[key] = f(value);
		    });
		    return result;
		}
		exports.mapObject = mapObject;
		function filter(array, test) {
		    test = test || function (value) { return !!value; };
		    var result = [];
		    for (var i = 0; i < array.length; i++) {
		        if (test(array[i], i, array, result)) {
		            result.push(array[i]);
		        }
		    }
		    return result;
		}
		exports.filter = filter;
		function filterObject(object, test) {
		    var result = {};
		    objectApply(object, function (value, key) {
		        if ((test && test(value, key, object, result)) || Boolean(value)) {
		            result[key] = value;
		        }
		    });
		    return result;
		}
		exports.filterObject = filterObject;
		function flatten(object) {
		    var result = [];
		    objectApply(object, function (value, key) {
		        result.push([key, value]);
		    });
		    return result;
		}
		exports.flatten = flatten;
		function any(array, test) {
		    for (var i = 0; i < array.length; i++) {
		        if (test(array[i], i, array)) {
		            return true;
		        }
		    }
		    return false;
		}
		exports.any = any;
		function all(array, test) {
		    for (var i = 0; i < array.length; i++) {
		        if (!test(array[i], i, array)) {
		            return false;
		        }
		    }
		    return true;
		}
		exports.all = all;
		function encodeParamsObject(data) {
		    return mapObject(data, function (value) {
		        if (typeof value === "object") {
		            value = safeJSONStringify(value);
		        }
		        return encodeURIComponent(base64_1["default"](value.toString()));
		    });
		}
		exports.encodeParamsObject = encodeParamsObject;
		function buildQueryString(data) {
		    var params = filterObject(data, function (value) {
		        return value !== undefined;
		    });
		    var query = map(flatten(encodeParamsObject(params)), util_1["default"].method("join", "=")).join("&");
		    return query;
		}
		exports.buildQueryString = buildQueryString;
		function decycleObject(object) {
		    var objects = [], paths = [];
		    return (function derez(value, path) {
		        var i, name, nu;
		        switch (typeof value) {
		            case 'object':
		                if (!value) {
		                    return null;
		                }
		                for (i = 0; i < objects.length; i += 1) {
		                    if (objects[i] === value) {
		                        return { $ref: paths[i] };
		                    }
		                }
		                objects.push(value);
		                paths.push(path);
		                if (Object.prototype.toString.apply(value) === '[object Array]') {
		                    nu = [];
		                    for (i = 0; i < value.length; i += 1) {
		                        nu[i] = derez(value[i], path + '[' + i + ']');
		                    }
		                }
		                else {
		                    nu = {};
		                    for (name in value) {
		                        if (Object.prototype.hasOwnProperty.call(value, name)) {
		                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
		                        }
		                    }
		                }
		                return nu;
		            case 'number':
		            case 'string':
		            case 'boolean':
		                return value;
		        }
		    }(object, '$'));
		}
		exports.decycleObject = decycleObject;
		function safeJSONStringify(source) {
		    try {
		        return JSON.stringify(source);
		    }
		    catch (e) {
		        return JSON.stringify(decycleObject(source));
		    }
		}
		exports.safeJSONStringify = safeJSONStringify;
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		function encode(s) {
		    return btoa(utob(s));
		}
		exports.__esModule = true;
		exports["default"] = encode;
		var fromCharCode = String.fromCharCode;
		var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		var b64tab = {};
		for (var i = 0, l = b64chars.length; i < l; i++) {
		    b64tab[b64chars.charAt(i)] = i;
		}
		var cb_utob = function (c) {
		    var cc = c.charCodeAt(0);
		    return cc < 0x80 ? c
		        : cc < 0x800 ? fromCharCode(0xc0 | (cc >>> 6)) +
		            fromCharCode(0x80 | (cc & 0x3f))
		            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
		                fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
		                fromCharCode(0x80 | (cc & 0x3f));
		};
		var utob = function (u) {
		    return u.replace(/[^\x00-\x7F]/g, cb_utob);
		};
		var cb_encode = function (ccc) {
		    var padlen = [0, 2, 1][ccc.length % 3];
		    var ord = ccc.charCodeAt(0) << 16
		        | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
		        | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0));
		    var chars = [
		        b64chars.charAt(ord >>> 18),
		        b64chars.charAt((ord >>> 12) & 63),
		        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
		        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
		    ];
		    return chars.join('');
		};
		var btoa = (window).btoa || function (b) {
		    return b.replace(/[\s\S]{1,3}/g, cb_encode);
		};
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var timers_1 = __webpack_require__(12);
		var Util = {
		    now: function () {
		        if (Date.now) {
		            return Date.now();
		        }
		        else {
		            return new Date().valueOf();
		        }
		    },
		    defer: function (callback) {
		        return new timers_1.OneOffTimer(0, callback);
		    },
		    method: function (name) {
		        var args = [];
		        for (var _i = 1; _i < arguments.length; _i++) {
		            args[_i - 1] = arguments[_i];
		        }
		        var boundArguments = Array.prototype.slice.call(arguments, 1);
		        return function (object) {
		            return object[name].apply(object, boundArguments.concat(arguments));
		        };
		    }
		};
		exports.__esModule = true;
		exports["default"] = Util;
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var abstract_timer_1 = __webpack_require__(13);
		function clearTimeout(timer) {
		    (window).clearTimeout(timer);
		}
		function clearInterval(timer) {
		    (window).clearInterval(timer);
		}
		var OneOffTimer = (function (_super) {
		    __extends(OneOffTimer, _super);
		    function OneOffTimer(delay, callback) {
		        _super.call(this, setTimeout, clearTimeout, delay, function (timer) {
		            callback();
		            return null;
		        });
		    }
		    return OneOffTimer;
		}(abstract_timer_1["default"]));
		exports.OneOffTimer = OneOffTimer;
		var PeriodicTimer = (function (_super) {
		    __extends(PeriodicTimer, _super);
		    function PeriodicTimer(delay, callback) {
		        _super.call(this, setInterval, clearInterval, delay, function (timer) {
		            callback();
		            return timer;
		        });
		    }
		    return PeriodicTimer;
		}(abstract_timer_1["default"]));
		exports.PeriodicTimer = PeriodicTimer;
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
		"use strict";
		var Timer = (function () {
		    function Timer(set, clear, delay, callback) {
		        var _this = this;
		        this.clear = clear;
		        this.timer = set(function () {
		            if (_this.timer) {
		                _this.timer = callback(_this.timer);
		            }
		        }, delay);
		    }
		    Timer.prototype.isRunning = function () {
		        return this.timer !== null;
		    };
		    Timer.prototype.ensureAborted = function () {
		        if (this.timer) {
		            this.clear(this.timer);
		            this.timer = null;
		        }
		    };
		    return Timer;
		}());
		exports.__esModule = true;
		exports["default"] = Timer;
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var logger_1 = __webpack_require__(8);
		var jsonp = function (context, socketId, callback) {
		    if (this.authOptions.headers !== undefined) {
		        logger_1["default"].warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
		    }
		    var callbackName = context.nextAuthCallbackID.toString();
		    context.nextAuthCallbackID++;
		    var document = context.getDocument();
		    var script = document.createElement("script");
		    context.auth_callbacks[callbackName] = function (data) {
		        callback(false, data);
		    };
		    var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
		    script.src = this.options.authEndpoint +
		        '?callback=' +
		        encodeURIComponent(callback_name) +
		        '&' +
		        this.composeQuery(socketId);
		    var head = document.getElementsByTagName("head")[0] || document.documentElement;
		    head.insertBefore(script, head.firstChild);
		};
		exports.__esModule = true;
		exports["default"] = jsonp;
	
	
	/***/ },
	/* 15 */
	/***/ function(module, exports) {
	
		"use strict";
		var ScriptRequest = (function () {
		    function ScriptRequest(src) {
		        this.src = src;
		    }
		    ScriptRequest.prototype.send = function (receiver) {
		        var self = this;
		        var errorString = "Error loading " + self.src;
		        self.script = document.createElement("script");
		        self.script.id = receiver.id;
		        self.script.src = self.src;
		        self.script.type = "text/javascript";
		        self.script.charset = "UTF-8";
		        if (self.script.addEventListener) {
		            self.script.onerror = function () {
		                receiver.callback(errorString);
		            };
		            self.script.onload = function () {
		                receiver.callback(null);
		            };
		        }
		        else {
		            self.script.onreadystatechange = function () {
		                if (self.script.readyState === 'loaded' ||
		                    self.script.readyState === 'complete') {
		                    receiver.callback(null);
		                }
		            };
		        }
		        if (self.script.async === undefined && document.attachEvent &&
		            /opera/i.test(navigator.userAgent)) {
		            self.errorScript = document.createElement("script");
		            self.errorScript.id = receiver.id + "_error";
		            self.errorScript.text = receiver.name + "('" + errorString + "');";
		            self.script.async = self.errorScript.async = false;
		        }
		        else {
		            self.script.async = true;
		        }
		        var head = document.getElementsByTagName('head')[0];
		        head.insertBefore(self.script, head.firstChild);
		        if (self.errorScript) {
		            head.insertBefore(self.errorScript, self.script.nextSibling);
		        }
		    };
		    ScriptRequest.prototype.cleanup = function () {
		        if (this.script) {
		            this.script.onload = this.script.onerror = null;
		            this.script.onreadystatechange = null;
		        }
		        if (this.script && this.script.parentNode) {
		            this.script.parentNode.removeChild(this.script);
		        }
		        if (this.errorScript && this.errorScript.parentNode) {
		            this.errorScript.parentNode.removeChild(this.errorScript);
		        }
		        this.script = null;
		        this.errorScript = null;
		    };
		    return ScriptRequest;
		}());
		exports.__esModule = true;
		exports["default"] = ScriptRequest;
	
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var Collections = __webpack_require__(9);
		var runtime_1 = __webpack_require__(2);
		var JSONPRequest = (function () {
		    function JSONPRequest(url, data) {
		        this.url = url;
		        this.data = data;
		    }
		    JSONPRequest.prototype.send = function (receiver) {
		        if (this.request) {
		            return;
		        }
		        var query = Collections.buildQueryString(this.data);
		        var url = this.url + "/" + receiver.number + "?" + query;
		        this.request = runtime_1["default"].createScriptRequest(url);
		        this.request.send(receiver);
		    };
		    JSONPRequest.prototype.cleanup = function () {
		        if (this.request) {
		            this.request.cleanup();
		        }
		    };
		    return JSONPRequest;
		}());
		exports.__esModule = true;
		exports["default"] = JSONPRequest;
	
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var runtime_1 = __webpack_require__(2);
		var script_receiver_factory_1 = __webpack_require__(4);
		var getAgent = function (sender, encrypted) {
		    return function (data, callback) {
		        var scheme = "http" + (encrypted ? "s" : "") + "://";
		        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
		        var request = runtime_1["default"].createJSONPRequest(url, data);
		        var receiver = runtime_1["default"].ScriptReceivers.create(function (error, result) {
		            script_receiver_factory_1.ScriptReceivers.remove(receiver);
		            request.cleanup();
		            if (result && result.host) {
		                sender.host = result.host;
		            }
		            if (callback) {
		                callback(error, result);
		            }
		        });
		        request.send(receiver);
		    };
		};
		var jsonp = {
		    name: 'jsonp',
		    getAgent: getAgent
		};
		exports.__esModule = true;
		exports["default"] = jsonp;
	
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var transports_1 = __webpack_require__(19);
		var transport_1 = __webpack_require__(21);
		var URLSchemes = __webpack_require__(20);
		var runtime_1 = __webpack_require__(2);
		var dependencies_1 = __webpack_require__(3);
		var Collections = __webpack_require__(9);
		var SockJSTransport = new transport_1["default"]({
		    file: "sockjs",
		    urls: URLSchemes.sockjs,
		    handlesActivityChecks: true,
		    supportsPing: false,
		    isSupported: function () {
		        return true;
		    },
		    isInitialized: function () {
		        return window.SockJS !== undefined;
		    },
		    getSocket: function (url, options) {
		        return new window.SockJS(url, null, {
		            js_path: dependencies_1.Dependencies.getPath("sockjs", {
		                encrypted: options.encrypted
		            }),
		            ignore_null_origin: options.ignoreNullOrigin
		        });
		    },
		    beforeOpen: function (socket, path) {
		        socket.send(JSON.stringify({
		            path: path
		        }));
		    }
		});
		var xdrConfiguration = {
		    isSupported: function (environment) {
		        var yes = runtime_1["default"].isXDRSupported(environment.encrypted);
		        return yes;
		    }
		};
		var XDRStreamingTransport = new transport_1["default"](Collections.extend({}, transports_1.streamingConfiguration, xdrConfiguration));
		var XDRPollingTransport = new transport_1["default"](Collections.extend({}, transports_1.pollingConfiguration, xdrConfiguration));
		transports_1["default"].xdr_streaming = XDRStreamingTransport;
		transports_1["default"].xdr_polling = XDRPollingTransport;
		transports_1["default"].sockjs = SockJSTransport;
		exports.__esModule = true;
		exports["default"] = transports_1["default"];
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var URLSchemes = __webpack_require__(20);
		var transport_1 = __webpack_require__(21);
		var Collections = __webpack_require__(9);
		var runtime_1 = __webpack_require__(2);
		var WSTransport = new transport_1["default"]({
		    urls: URLSchemes.ws,
		    handlesActivityChecks: false,
		    supportsPing: false,
		    isInitialized: function () {
		        return Boolean(runtime_1["default"].getWebSocketAPI());
		    },
		    isSupported: function () {
		        return Boolean(runtime_1["default"].getWebSocketAPI());
		    },
		    getSocket: function (url) {
		        return runtime_1["default"].createWebSocket(url);
		    }
		});
		var httpConfiguration = {
		    urls: URLSchemes.http,
		    handlesActivityChecks: false,
		    supportsPing: true,
		    isInitialized: function () {
		        return true;
		    }
		};
		exports.streamingConfiguration = Collections.extend({ getSocket: function (url) {
		        return runtime_1["default"].HTTPFactory.createStreamingSocket(url);
		    }
		}, httpConfiguration);
		exports.pollingConfiguration = Collections.extend({ getSocket: function (url) {
		        return runtime_1["default"].HTTPFactory.createPollingSocket(url);
		    }
		}, httpConfiguration);
		var xhrConfiguration = {
		    isSupported: function () {
		        return runtime_1["default"].isXHRSupported();
		    }
		};
		var XHRStreamingTransport = new transport_1["default"](Collections.extend({}, exports.streamingConfiguration, xhrConfiguration));
		var XHRPollingTransport = new transport_1["default"](Collections.extend({}, exports.pollingConfiguration, xhrConfiguration));
		var Transports = {
		    ws: WSTransport,
		    xhr_streaming: XHRStreamingTransport,
		    xhr_polling: XHRPollingTransport
		};
		exports.__esModule = true;
		exports["default"] = Transports;
	
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var defaults_1 = __webpack_require__(5);
		function getGenericURL(baseScheme, params, path) {
		    var scheme = baseScheme + (params.encrypted ? "s" : "");
		    var host = params.encrypted ? params.hostEncrypted : params.hostUnencrypted;
		    return scheme + "://" + host + path;
		}
		function getGenericPath(key, queryString) {
		    var path = "/app/" + key;
		    var query = "?protocol=" + defaults_1["default"].PROTOCOL +
		        "&client=js" +
		        "&version=" + defaults_1["default"].VERSION +
		        (queryString ? ("&" + queryString) : "");
		    return path + query;
		}
		exports.ws = {
		    getInitial: function (key, params) {
		        return getGenericURL("ws", params, getGenericPath(key, "flash=false"));
		    }
		};
		exports.http = {
		    getInitial: function (key, params) {
		        var path = (params.httpPath || "/pusher") + getGenericPath(key);
		        return getGenericURL("http", params, path);
		    }
		};
		exports.sockjs = {
		    getInitial: function (key, params) {
		        return getGenericURL("http", params, params.httpPath || "/pusher");
		    },
		    getPath: function (key, params) {
		        return getGenericPath(key);
		    }
		};
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var transport_connection_1 = __webpack_require__(22);
		var Transport = (function () {
		    function Transport(hooks) {
		        this.hooks = hooks;
		    }
		    Transport.prototype.isSupported = function (environment) {
		        return this.hooks.isSupported(environment);
		    };
		    Transport.prototype.createConnection = function (name, priority, key, options) {
		        return new transport_connection_1["default"](this.hooks, name, priority, key, options);
		    };
		    return Transport;
		}());
		exports.__esModule = true;
		exports["default"] = Transport;
	
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var util_1 = __webpack_require__(11);
		var Collections = __webpack_require__(9);
		var dispatcher_1 = __webpack_require__(23);
		var logger_1 = __webpack_require__(8);
		var runtime_1 = __webpack_require__(2);
		var TransportConnection = (function (_super) {
		    __extends(TransportConnection, _super);
		    function TransportConnection(hooks, name, priority, key, options) {
		        _super.call(this);
		        this.initialize = runtime_1["default"].transportConnectionInitializer;
		        this.hooks = hooks;
		        this.name = name;
		        this.priority = priority;
		        this.key = key;
		        this.options = options;
		        this.state = "new";
		        this.timeline = options.timeline;
		        this.activityTimeout = options.activityTimeout;
		        this.id = this.timeline.generateUniqueID();
		    }
		    TransportConnection.prototype.handlesActivityChecks = function () {
		        return Boolean(this.hooks.handlesActivityChecks);
		    };
		    TransportConnection.prototype.supportsPing = function () {
		        return Boolean(this.hooks.supportsPing);
		    };
		    TransportConnection.prototype.connect = function () {
		        var _this = this;
		        if (this.socket || this.state !== "initialized") {
		            return false;
		        }
		        var url = this.hooks.urls.getInitial(this.key, this.options);
		        try {
		            this.socket = this.hooks.getSocket(url, this.options);
		        }
		        catch (e) {
		            util_1["default"].defer(function () {
		                _this.onError(e);
		                _this.changeState("closed");
		            });
		            return false;
		        }
		        this.bindListeners();
		        logger_1["default"].debug("Connecting", { transport: this.name, url: url });
		        this.changeState("connecting");
		        return true;
		    };
		    TransportConnection.prototype.close = function () {
		        if (this.socket) {
		            this.socket.close();
		            return true;
		        }
		        else {
		            return false;
		        }
		    };
		    TransportConnection.prototype.send = function (data) {
		        var _this = this;
		        if (this.state === "open") {
		            util_1["default"].defer(function () {
		                if (_this.socket) {
		                    _this.socket.send(data);
		                }
		            });
		            return true;
		        }
		        else {
		            return false;
		        }
		    };
		    TransportConnection.prototype.ping = function () {
		        if (this.state === "open" && this.supportsPing()) {
		            this.socket.ping();
		        }
		    };
		    TransportConnection.prototype.onOpen = function () {
		        if (this.hooks.beforeOpen) {
		            this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
		        }
		        this.changeState("open");
		        this.socket.onopen = undefined;
		    };
		    TransportConnection.prototype.onError = function (error) {
		        this.emit("error", { type: 'WebSocketError', error: error });
		        this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
		    };
		    TransportConnection.prototype.onClose = function (closeEvent) {
		        if (closeEvent) {
		            this.changeState("closed", {
		                code: closeEvent.code,
		                reason: closeEvent.reason,
		                wasClean: closeEvent.wasClean
		            });
		        }
		        else {
		            this.changeState("closed");
		        }
		        this.unbindListeners();
		        this.socket = undefined;
		    };
		    TransportConnection.prototype.onMessage = function (message) {
		        this.emit("message", message);
		    };
		    TransportConnection.prototype.onActivity = function () {
		        this.emit("activity");
		    };
		    TransportConnection.prototype.bindListeners = function () {
		        var _this = this;
		        this.socket.onopen = function () {
		            _this.onOpen();
		        };
		        this.socket.onerror = function (error) {
		            _this.onError(error);
		        };
		        this.socket.onclose = function (closeEvent) {
		            _this.onClose(closeEvent);
		        };
		        this.socket.onmessage = function (message) {
		            _this.onMessage(message);
		        };
		        if (this.supportsPing()) {
		            this.socket.onactivity = function () { _this.onActivity(); };
		        }
		    };
		    TransportConnection.prototype.unbindListeners = function () {
		        if (this.socket) {
		            this.socket.onopen = undefined;
		            this.socket.onerror = undefined;
		            this.socket.onclose = undefined;
		            this.socket.onmessage = undefined;
		            if (this.supportsPing()) {
		                this.socket.onactivity = undefined;
		            }
		        }
		    };
		    TransportConnection.prototype.changeState = function (state, params) {
		        this.state = state;
		        this.timeline.info(this.buildTimelineMessage({
		            state: state,
		            params: params
		        }));
		        this.emit(state, params);
		    };
		    TransportConnection.prototype.buildTimelineMessage = function (message) {
		        return Collections.extend({ cid: this.id }, message);
		    };
		    return TransportConnection;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = TransportConnection;
	
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var callback_registry_1 = __webpack_require__(24);
		var Dispatcher = (function () {
		    function Dispatcher(failThrough) {
		        this.callbacks = new callback_registry_1["default"]();
		        this.global_callbacks = [];
		        this.failThrough = failThrough;
		    }
		    Dispatcher.prototype.bind = function (eventName, callback, context) {
		        this.callbacks.add(eventName, callback, context);
		        return this;
		    };
		    Dispatcher.prototype.bind_all = function (callback) {
		        this.global_callbacks.push(callback);
		        return this;
		    };
		    Dispatcher.prototype.unbind = function (eventName, callback, context) {
		        this.callbacks.remove(eventName, callback, context);
		        return this;
		    };
		    Dispatcher.prototype.unbind_all = function (eventName, callback) {
		        this.callbacks.remove(eventName, callback);
		        return this;
		    };
		    Dispatcher.prototype.emit = function (eventName, data) {
		        var i;
		        for (i = 0; i < this.global_callbacks.length; i++) {
		            this.global_callbacks[i](eventName, data);
		        }
		        var callbacks = this.callbacks.get(eventName);
		        if (callbacks && callbacks.length > 0) {
		            for (i = 0; i < callbacks.length; i++) {
		                callbacks[i].fn.call(callbacks[i].context || (window), data);
		            }
		        }
		        else if (this.failThrough) {
		            this.failThrough(eventName, data);
		        }
		        return this;
		    };
		    return Dispatcher;
		}());
		exports.__esModule = true;
		exports["default"] = Dispatcher;
	
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var Collections = __webpack_require__(9);
		var CallbackRegistry = (function () {
		    function CallbackRegistry() {
		        this._callbacks = {};
		    }
		    CallbackRegistry.prototype.get = function (name) {
		        return this._callbacks[prefix(name)];
		    };
		    CallbackRegistry.prototype.add = function (name, callback, context) {
		        var prefixedEventName = prefix(name);
		        this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
		        this._callbacks[prefixedEventName].push({
		            fn: callback,
		            context: context
		        });
		    };
		    CallbackRegistry.prototype.remove = function (name, callback, context) {
		        if (!name && !callback && !context) {
		            this._callbacks = {};
		            return;
		        }
		        var names = name ? [prefix(name)] : Collections.keys(this._callbacks);
		        if (callback || context) {
		            this.removeCallback(names, callback, context);
		        }
		        else {
		            this.removeAllCallbacks(names);
		        }
		    };
		    CallbackRegistry.prototype.removeCallback = function (names, callback, context) {
		        Collections.apply(names, function (name) {
		            this._callbacks[name] = Collections.filter(this._callbacks[name] || [], function (binding) {
		                return (callback && callback !== binding.fn) ||
		                    (context && context !== binding.context);
		            });
		            if (this._callbacks[name].length === 0) {
		                delete this._callbacks[name];
		            }
		        }, this);
		    };
		    CallbackRegistry.prototype.removeAllCallbacks = function (names) {
		        Collections.apply(names, function (name) {
		            delete this._callbacks[name];
		        }, this);
		    };
		    return CallbackRegistry;
		}());
		exports.__esModule = true;
		exports["default"] = CallbackRegistry;
		function prefix(name) {
		    return "_" + name;
		}
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var dispatcher_1 = __webpack_require__(23);
		var NetInfo = (function (_super) {
		    __extends(NetInfo, _super);
		    function NetInfo() {
		        _super.call(this);
		        var self = this;
		        if (window.addEventListener !== undefined) {
		            window.addEventListener("online", function () {
		                self.emit('online');
		            }, false);
		            window.addEventListener("offline", function () {
		                self.emit('offline');
		            }, false);
		        }
		    }
		    NetInfo.prototype.isOnline = function () {
		        if (window.navigator.onLine === undefined) {
		            return true;
		        }
		        else {
		            return window.navigator.onLine;
		        }
		    };
		    return NetInfo;
		}(dispatcher_1["default"]));
		exports.NetInfo = NetInfo;
		exports.Network = new NetInfo();
	
	
	/***/ },
	/* 26 */
	/***/ function(module, exports) {
	
		"use strict";
		var getDefaultStrategy = function (config) {
		    var wsStrategy;
		    if (config.encrypted) {
		        wsStrategy = [
		            ":best_connected_ever",
		            ":ws_loop",
		            [":delayed", 2000, [":http_fallback_loop"]]
		        ];
		    }
		    else {
		        wsStrategy = [
		            ":best_connected_ever",
		            ":ws_loop",
		            [":delayed", 2000, [":wss_loop"]],
		            [":delayed", 5000, [":http_fallback_loop"]]
		        ];
		    }
		    return [
		        [":def", "ws_options", {
		                hostUnencrypted: config.wsHost + ":" + config.wsPort,
		                hostEncrypted: config.wsHost + ":" + config.wssPort
		            }],
		        [":def", "wss_options", [":extend", ":ws_options", {
		                    encrypted: true
		                }]],
		        [":def", "sockjs_options", {
		                hostUnencrypted: config.httpHost + ":" + config.httpPort,
		                hostEncrypted: config.httpHost + ":" + config.httpsPort,
		                httpPath: config.httpPath
		            }],
		        [":def", "timeouts", {
		                loop: true,
		                timeout: 15000,
		                timeoutLimit: 60000
		            }],
		        [":def", "ws_manager", [":transport_manager", {
		                    lives: 2,
		                    minPingDelay: 10000,
		                    maxPingDelay: config.activity_timeout
		                }]],
		        [":def", "streaming_manager", [":transport_manager", {
		                    lives: 2,
		                    minPingDelay: 10000,
		                    maxPingDelay: config.activity_timeout
		                }]],
		        [":def_transport", "ws", "ws", 3, ":ws_options", ":ws_manager"],
		        [":def_transport", "wss", "ws", 3, ":wss_options", ":ws_manager"],
		        [":def_transport", "sockjs", "sockjs", 1, ":sockjs_options"],
		        [":def_transport", "xhr_streaming", "xhr_streaming", 1, ":sockjs_options", ":streaming_manager"],
		        [":def_transport", "xdr_streaming", "xdr_streaming", 1, ":sockjs_options", ":streaming_manager"],
		        [":def_transport", "xhr_polling", "xhr_polling", 1, ":sockjs_options"],
		        [":def_transport", "xdr_polling", "xdr_polling", 1, ":sockjs_options"],
		        [":def", "ws_loop", [":sequential", ":timeouts", ":ws"]],
		        [":def", "wss_loop", [":sequential", ":timeouts", ":wss"]],
		        [":def", "sockjs_loop", [":sequential", ":timeouts", ":sockjs"]],
		        [":def", "streaming_loop", [":sequential", ":timeouts",
		                [":if", [":is_supported", ":xhr_streaming"],
		                    ":xhr_streaming",
		                    ":xdr_streaming"
		                ]
		            ]],
		        [":def", "polling_loop", [":sequential", ":timeouts",
		                [":if", [":is_supported", ":xhr_polling"],
		                    ":xhr_polling",
		                    ":xdr_polling"
		                ]
		            ]],
		        [":def", "http_loop", [":if", [":is_supported", ":streaming_loop"], [
		                    ":best_connected_ever",
		                    ":streaming_loop",
		                    [":delayed", 4000, [":polling_loop"]]
		                ], [
		                    ":polling_loop"
		                ]]],
		        [":def", "http_fallback_loop",
		            [":if", [":is_supported", ":http_loop"], [
		                    ":http_loop"
		                ], [
		                    ":sockjs_loop"
		                ]]
		        ],
		        [":def", "strategy",
		            [":cached", 1800000,
		                [":first_connected",
		                    [":if", [":is_supported", ":ws"],
		                        wsStrategy,
		                        ":http_fallback_loop"
		                    ]
		                ]
		            ]
		        ]
		    ];
		};
		exports.__esModule = true;
		exports["default"] = getDefaultStrategy;
	
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var dependencies_1 = __webpack_require__(3);
		function default_1() {
		    var self = this;
		    self.timeline.info(self.buildTimelineMessage({
		        transport: self.name + (self.options.encrypted ? "s" : "")
		    }));
		    if (self.hooks.isInitialized()) {
		        self.changeState("initialized");
		    }
		    else if (self.hooks.file) {
		        self.changeState("initializing");
		        dependencies_1.Dependencies.load(self.hooks.file, { encrypted: self.options.encrypted }, function (error, callback) {
		            if (self.hooks.isInitialized()) {
		                self.changeState("initialized");
		                callback(true);
		            }
		            else {
		                if (error) {
		                    self.onError(error);
		                }
		                self.onClose();
		                callback(false);
		            }
		        });
		    }
		    else {
		        self.onClose();
		    }
		}
		exports.__esModule = true;
		exports["default"] = default_1;
	
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var http_xdomain_request_1 = __webpack_require__(29);
		var http_1 = __webpack_require__(31);
		http_1["default"].createXDR = function (method, url) {
		    return this.createRequest(http_xdomain_request_1["default"], method, url);
		};
		exports.__esModule = true;
		exports["default"] = http_1["default"];
	
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var Errors = __webpack_require__(30);
		var hooks = {
		    getRequest: function (socket) {
		        var xdr = new window.XDomainRequest();
		        xdr.ontimeout = function () {
		            socket.emit("error", new Errors.RequestTimedOut());
		            socket.close();
		        };
		        xdr.onerror = function (e) {
		            socket.emit("error", e);
		            socket.close();
		        };
		        xdr.onprogress = function () {
		            if (xdr.responseText && xdr.responseText.length > 0) {
		                socket.onChunk(200, xdr.responseText);
		            }
		        };
		        xdr.onload = function () {
		            if (xdr.responseText && xdr.responseText.length > 0) {
		                socket.onChunk(200, xdr.responseText);
		            }
		            socket.emit("finished", 200);
		            socket.close();
		        };
		        return xdr;
		    },
		    abortRequest: function (xdr) {
		        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
		        xdr.abort();
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;
	
	
	/***/ },
	/* 30 */
	/***/ function(module, exports) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var BadEventName = (function (_super) {
		    __extends(BadEventName, _super);
		    function BadEventName() {
		        _super.apply(this, arguments);
		    }
		    return BadEventName;
		}(Error));
		exports.BadEventName = BadEventName;
		var RequestTimedOut = (function (_super) {
		    __extends(RequestTimedOut, _super);
		    function RequestTimedOut() {
		        _super.apply(this, arguments);
		    }
		    return RequestTimedOut;
		}(Error));
		exports.RequestTimedOut = RequestTimedOut;
		var TransportPriorityTooLow = (function (_super) {
		    __extends(TransportPriorityTooLow, _super);
		    function TransportPriorityTooLow() {
		        _super.apply(this, arguments);
		    }
		    return TransportPriorityTooLow;
		}(Error));
		exports.TransportPriorityTooLow = TransportPriorityTooLow;
		var TransportClosed = (function (_super) {
		    __extends(TransportClosed, _super);
		    function TransportClosed() {
		        _super.apply(this, arguments);
		    }
		    return TransportClosed;
		}(Error));
		exports.TransportClosed = TransportClosed;
		var UnsupportedTransport = (function (_super) {
		    __extends(UnsupportedTransport, _super);
		    function UnsupportedTransport() {
		        _super.apply(this, arguments);
		    }
		    return UnsupportedTransport;
		}(Error));
		exports.UnsupportedTransport = UnsupportedTransport;
		var UnsupportedStrategy = (function (_super) {
		    __extends(UnsupportedStrategy, _super);
		    function UnsupportedStrategy() {
		        _super.apply(this, arguments);
		    }
		    return UnsupportedStrategy;
		}(Error));
		exports.UnsupportedStrategy = UnsupportedStrategy;
	
	
	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var http_request_1 = __webpack_require__(32);
		var http_socket_1 = __webpack_require__(33);
		var http_streaming_socket_1 = __webpack_require__(35);
		var http_polling_socket_1 = __webpack_require__(36);
		var http_xhr_request_1 = __webpack_require__(37);
		var HTTP = {
		    createStreamingSocket: function (url) {
		        return this.createSocket(http_streaming_socket_1["default"], url);
		    },
		    createPollingSocket: function (url) {
		        return this.createSocket(http_polling_socket_1["default"], url);
		    },
		    createSocket: function (hooks, url) {
		        return new http_socket_1["default"](hooks, url);
		    },
		    createXHR: function (method, url) {
		        return this.createRequest(http_xhr_request_1["default"], method, url);
		    },
		    createRequest: function (hooks, method, url) {
		        return new http_request_1["default"](hooks, method, url);
		    }
		};
		exports.__esModule = true;
		exports["default"] = HTTP;
	
	
	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var runtime_1 = __webpack_require__(2);
		var dispatcher_1 = __webpack_require__(23);
		var MAX_BUFFER_LENGTH = 256 * 1024;
		var HTTPRequest = (function (_super) {
		    __extends(HTTPRequest, _super);
		    function HTTPRequest(hooks, method, url) {
		        _super.call(this);
		        this.hooks = hooks;
		        this.method = method;
		        this.url = url;
		    }
		    HTTPRequest.prototype.start = function (payload) {
		        var _this = this;
		        this.position = 0;
		        this.xhr = this.hooks.getRequest(this);
		        this.unloader = function () {
		            _this.close();
		        };
		        runtime_1["default"].addUnloadListener(this.unloader);
		        this.xhr.open(this.method, this.url, true);
		        if (this.xhr.setRequestHeader) {
		            this.xhr.setRequestHeader("Content-Type", "application/json");
		        }
		        this.xhr.send(payload);
		    };
		    HTTPRequest.prototype.close = function () {
		        if (this.unloader) {
		            runtime_1["default"].removeUnloadListener(this.unloader);
		            this.unloader = null;
		        }
		        if (this.xhr) {
		            this.hooks.abortRequest(this.xhr);
		            this.xhr = null;
		        }
		    };
		    HTTPRequest.prototype.onChunk = function (status, data) {
		        while (true) {
		            var chunk = this.advanceBuffer(data);
		            if (chunk) {
		                this.emit("chunk", { status: status, data: chunk });
		            }
		            else {
		                break;
		            }
		        }
		        if (this.isBufferTooLong(data)) {
		            this.emit("buffer_too_long");
		        }
		    };
		    HTTPRequest.prototype.advanceBuffer = function (buffer) {
		        var unreadData = buffer.slice(this.position);
		        var endOfLinePosition = unreadData.indexOf("\n");
		        if (endOfLinePosition !== -1) {
		            this.position += endOfLinePosition + 1;
		            return unreadData.slice(0, endOfLinePosition);
		        }
		        else {
		            return null;
		        }
		    };
		    HTTPRequest.prototype.isBufferTooLong = function (buffer) {
		        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
		    };
		    return HTTPRequest;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = HTTPRequest;
	
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var state_1 = __webpack_require__(34);
		var util_1 = __webpack_require__(11);
		var runtime_1 = __webpack_require__(2);
		var autoIncrement = 1;
		var HTTPSocket = (function () {
		    function HTTPSocket(hooks, url) {
		        this.hooks = hooks;
		        this.session = randomNumber(1000) + "/" + randomString(8);
		        this.location = getLocation(url);
		        this.readyState = state_1["default"].CONNECTING;
		        this.openStream();
		    }
		    HTTPSocket.prototype.send = function (payload) {
		        return this.sendRaw(JSON.stringify([payload]));
		    };
		    HTTPSocket.prototype.ping = function () {
		        this.hooks.sendHeartbeat(this);
		    };
		    HTTPSocket.prototype.close = function (code, reason) {
		        this.onClose(code, reason, true);
		    };
		    HTTPSocket.prototype.sendRaw = function (payload) {
		        if (this.readyState === state_1["default"].OPEN) {
		            try {
		                runtime_1["default"].createSocketRequest("POST", getUniqueURL(getSendURL(this.location, this.session))).start(payload);
		                return true;
		            }
		            catch (e) {
		                return false;
		            }
		        }
		        else {
		            return false;
		        }
		    };
		    HTTPSocket.prototype.reconnect = function () {
		        this.closeStream();
		        this.openStream();
		    };
		    ;
		    HTTPSocket.prototype.onClose = function (code, reason, wasClean) {
		        this.closeStream();
		        this.readyState = state_1["default"].CLOSED;
		        if (this.onclose) {
		            this.onclose({
		                code: code,
		                reason: reason,
		                wasClean: wasClean
		            });
		        }
		    };
		    HTTPSocket.prototype.onChunk = function (chunk) {
		        if (chunk.status !== 200) {
		            return;
		        }
		        if (this.readyState === state_1["default"].OPEN) {
		            this.onActivity();
		        }
		        var payload;
		        var type = chunk.data.slice(0, 1);
		        switch (type) {
		            case 'o':
		                payload = JSON.parse(chunk.data.slice(1) || '{}');
		                this.onOpen(payload);
		                break;
		            case 'a':
		                payload = JSON.parse(chunk.data.slice(1) || '[]');
		                for (var i = 0; i < payload.length; i++) {
		                    this.onEvent(payload[i]);
		                }
		                break;
		            case 'm':
		                payload = JSON.parse(chunk.data.slice(1) || 'null');
		                this.onEvent(payload);
		                break;
		            case 'h':
		                this.hooks.onHeartbeat(this);
		                break;
		            case 'c':
		                payload = JSON.parse(chunk.data.slice(1) || '[]');
		                this.onClose(payload[0], payload[1], true);
		                break;
		        }
		    };
		    HTTPSocket.prototype.onOpen = function (options) {
		        if (this.readyState === state_1["default"].CONNECTING) {
		            if (options && options.hostname) {
		                this.location.base = replaceHost(this.location.base, options.hostname);
		            }
		            this.readyState = state_1["default"].OPEN;
		            if (this.onopen) {
		                this.onopen();
		            }
		        }
		        else {
		            this.onClose(1006, "Server lost session", true);
		        }
		    };
		    HTTPSocket.prototype.onEvent = function (event) {
		        if (this.readyState === state_1["default"].OPEN && this.onmessage) {
		            this.onmessage({ data: event });
		        }
		    };
		    HTTPSocket.prototype.onActivity = function () {
		        if (this.onactivity) {
		            this.onactivity();
		        }
		    };
		    HTTPSocket.prototype.onError = function (error) {
		        if (this.onerror) {
		            this.onerror(error);
		        }
		    };
		    HTTPSocket.prototype.openStream = function () {
		        var _this = this;
		        this.stream = runtime_1["default"].createSocketRequest("POST", getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
		        this.stream.bind("chunk", function (chunk) {
		            _this.onChunk(chunk);
		        });
		        this.stream.bind("finished", function (status) {
		            _this.hooks.onFinished(_this, status);
		        });
		        this.stream.bind("buffer_too_long", function () {
		            _this.reconnect();
		        });
		        try {
		            this.stream.start();
		        }
		        catch (error) {
		            util_1["default"].defer(function () {
		                _this.onError(error);
		                _this.onClose(1006, "Could not start streaming", false);
		            });
		        }
		    };
		    HTTPSocket.prototype.closeStream = function () {
		        if (this.stream) {
		            this.stream.unbind_all();
		            this.stream.close();
		            this.stream = null;
		        }
		    };
		    return HTTPSocket;
		}());
		function getLocation(url) {
		    var parts = /([^\?]*)\/*(\??.*)/.exec(url);
		    return {
		        base: parts[1],
		        queryString: parts[2]
		    };
		}
		function getSendURL(url, session) {
		    return url.base + "/" + session + "/xhr_send";
		}
		function getUniqueURL(url) {
		    var separator = (url.indexOf('?') === -1) ? "?" : "&";
		    return url + separator + "t=" + (+new Date()) + "&n=" + autoIncrement++;
		}
		function replaceHost(url, hostname) {
		    var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
		    return urlParts[1] + hostname + urlParts[3];
		}
		function randomNumber(max) {
		    return Math.floor(Math.random() * max);
		}
		function randomString(length) {
		    var result = [];
		    for (var i = 0; i < length; i++) {
		        result.push(randomNumber(32).toString(32));
		    }
		    return result.join('');
		}
		exports.__esModule = true;
		exports["default"] = HTTPSocket;
	
	
	/***/ },
	/* 34 */
	/***/ function(module, exports) {
	
		"use strict";
		var State;
		(function (State) {
		    State[State["CONNECTING"] = 0] = "CONNECTING";
		    State[State["OPEN"] = 1] = "OPEN";
		    State[State["CLOSED"] = 3] = "CLOSED";
		})(State || (State = {}));
		exports.__esModule = true;
		exports["default"] = State;
	
	
	/***/ },
	/* 35 */
	/***/ function(module, exports) {
	
		"use strict";
		var hooks = {
		    getReceiveURL: function (url, session) {
		        return url.base + "/" + session + "/xhr_streaming" + url.queryString;
		    },
		    onHeartbeat: function (socket) {
		        socket.sendRaw("[]");
		    },
		    sendHeartbeat: function (socket) {
		        socket.sendRaw("[]");
		    },
		    onFinished: function (socket, status) {
		        socket.onClose(1006, "Connection interrupted (" + status + ")", false);
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;
	
	
	/***/ },
	/* 36 */
	/***/ function(module, exports) {
	
		"use strict";
		var hooks = {
		    getReceiveURL: function (url, session) {
		        return url.base + "/" + session + "/xhr" + url.queryString;
		    },
		    onHeartbeat: function () {
		    },
		    sendHeartbeat: function (socket) {
		        socket.sendRaw("[]");
		    },
		    onFinished: function (socket, status) {
		        if (status === 200) {
		            socket.reconnect();
		        }
		        else {
		            socket.onClose(1006, "Connection interrupted (" + status + ")", false);
		        }
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;
	
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var runtime_1 = __webpack_require__(2);
		var hooks = {
		    getRequest: function (socket) {
		        var Constructor = runtime_1["default"].getXHRAPI();
		        var xhr = new Constructor();
		        xhr.onreadystatechange = xhr.onprogress = function () {
		            switch (xhr.readyState) {
		                case 3:
		                    if (xhr.responseText && xhr.responseText.length > 0) {
		                        socket.onChunk(xhr.status, xhr.responseText);
		                    }
		                    break;
		                case 4:
		                    if (xhr.responseText && xhr.responseText.length > 0) {
		                        socket.onChunk(xhr.status, xhr.responseText);
		                    }
		                    socket.emit("finished", xhr.status);
		                    socket.close();
		                    break;
		            }
		        };
		        return xhr;
		    },
		    abortRequest: function (xhr) {
		        xhr.onreadystatechange = null;
		        xhr.abort();
		    }
		};
		exports.__esModule = true;
		exports["default"] = hooks;
	
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var level_1 = __webpack_require__(39);
		var Timeline = (function () {
		    function Timeline(key, session, options) {
		        this.key = key;
		        this.session = session;
		        this.events = [];
		        this.options = options || {};
		        this.sent = 0;
		        this.uniqueID = 0;
		    }
		    Timeline.prototype.log = function (level, event) {
		        if (level <= this.options.level) {
		            this.events.push(Collections.extend({}, event, { timestamp: util_1["default"].now() }));
		            if (this.options.limit && this.events.length > this.options.limit) {
		                this.events.shift();
		            }
		        }
		    };
		    Timeline.prototype.error = function (event) {
		        this.log(level_1["default"].ERROR, event);
		    };
		    Timeline.prototype.info = function (event) {
		        this.log(level_1["default"].INFO, event);
		    };
		    Timeline.prototype.debug = function (event) {
		        this.log(level_1["default"].DEBUG, event);
		    };
		    Timeline.prototype.isEmpty = function () {
		        return this.events.length === 0;
		    };
		    Timeline.prototype.send = function (sendfn, callback) {
		        var _this = this;
		        var data = Collections.extend({
		            session: this.session,
		            bundle: this.sent + 1,
		            key: this.key,
		            lib: "js",
		            version: this.options.version,
		            cluster: this.options.cluster,
		            features: this.options.features,
		            timeline: this.events
		        }, this.options.params);
		        this.events = [];
		        sendfn(data, function (error, result) {
		            if (!error) {
		                _this.sent++;
		            }
		            if (callback) {
		                callback(error, result);
		            }
		        });
		        return true;
		    };
		    Timeline.prototype.generateUniqueID = function () {
		        this.uniqueID++;
		        return this.uniqueID;
		    };
		    return Timeline;
		}());
		exports.__esModule = true;
		exports["default"] = Timeline;
	
	
	/***/ },
	/* 39 */
	/***/ function(module, exports) {
	
		"use strict";
		var TimelineLevel;
		(function (TimelineLevel) {
		    TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
		    TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
		    TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
		})(TimelineLevel || (TimelineLevel = {}));
		exports.__esModule = true;
		exports["default"] = TimelineLevel;
	
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var transport_manager_1 = __webpack_require__(41);
		var Errors = __webpack_require__(30);
		var transport_strategy_1 = __webpack_require__(55);
		var sequential_strategy_1 = __webpack_require__(56);
		var best_connected_ever_strategy_1 = __webpack_require__(57);
		var cached_strategy_1 = __webpack_require__(58);
		var delayed_strategy_1 = __webpack_require__(59);
		var if_strategy_1 = __webpack_require__(60);
		var first_connected_strategy_1 = __webpack_require__(61);
		var runtime_1 = __webpack_require__(2);
		var Transports = runtime_1["default"].Transports;
		exports.build = function (scheme, options) {
		    var context = Collections.extend({}, globalContext, options);
		    return evaluate(scheme, context)[1].strategy;
		};
		var UnsupportedStrategy = {
		    isSupported: function () {
		        return false;
		    },
		    connect: function (_, callback) {
		        var deferred = util_1["default"].defer(function () {
		            callback(new Errors.UnsupportedStrategy());
		        });
		        return {
		            abort: function () {
		                deferred.ensureAborted();
		            },
		            forceMinPriority: function () { }
		        };
		    }
		};
		function returnWithOriginalContext(f) {
		    return function (context) {
		        return [f.apply(this, arguments), context];
		    };
		}
		var globalContext = {
		    extend: function (context, first, second) {
		        return [Collections.extend({}, first, second), context];
		    },
		    def: function (context, name, value) {
		        if (context[name] !== undefined) {
		            throw "Redefining symbol " + name;
		        }
		        context[name] = value;
		        return [undefined, context];
		    },
		    def_transport: function (context, name, type, priority, options, manager) {
		        var transportClass = Transports[type];
		        if (!transportClass) {
		            throw new Errors.UnsupportedTransport(type);
		        }
		        var enabled = (!context.enabledTransports ||
		            Collections.arrayIndexOf(context.enabledTransports, name) !== -1) &&
		            (!context.disabledTransports ||
		                Collections.arrayIndexOf(context.disabledTransports, name) === -1);
		        var transport;
		        if (enabled) {
		            transport = new transport_strategy_1["default"](name, priority, manager ? manager.getAssistant(transportClass) : transportClass, Collections.extend({
		                key: context.key,
		                encrypted: context.encrypted,
		                timeline: context.timeline,
		                ignoreNullOrigin: context.ignoreNullOrigin
		            }, options));
		        }
		        else {
		            transport = UnsupportedStrategy;
		        }
		        var newContext = context.def(context, name, transport)[1];
		        newContext.Transports = context.Transports || {};
		        newContext.Transports[name] = transport;
		        return [undefined, newContext];
		    },
		    transport_manager: returnWithOriginalContext(function (_, options) {
		        return new transport_manager_1["default"](options);
		    }),
		    sequential: returnWithOriginalContext(function (_, options) {
		        var strategies = Array.prototype.slice.call(arguments, 2);
		        return new sequential_strategy_1["default"](strategies, options);
		    }),
		    cached: returnWithOriginalContext(function (context, ttl, strategy) {
		        return new cached_strategy_1["default"](strategy, context.Transports, {
		            ttl: ttl,
		            timeline: context.timeline,
		            encrypted: context.encrypted
		        });
		    }),
		    first_connected: returnWithOriginalContext(function (_, strategy) {
		        return new first_connected_strategy_1["default"](strategy);
		    }),
		    best_connected_ever: returnWithOriginalContext(function () {
		        var strategies = Array.prototype.slice.call(arguments, 1);
		        return new best_connected_ever_strategy_1["default"](strategies);
		    }),
		    delayed: returnWithOriginalContext(function (_, delay, strategy) {
		        return new delayed_strategy_1["default"](strategy, { delay: delay });
		    }),
		    "if": returnWithOriginalContext(function (_, test, trueBranch, falseBranch) {
		        return new if_strategy_1["default"](test, trueBranch, falseBranch);
		    }),
		    is_supported: returnWithOriginalContext(function (_, strategy) {
		        return function () {
		            return strategy.isSupported();
		        };
		    })
		};
		function isSymbol(expression) {
		    return (typeof expression === "string") && expression.charAt(0) === ":";
		}
		function getSymbolValue(expression, context) {
		    return context[expression.slice(1)];
		}
		function evaluateListOfExpressions(expressions, context) {
		    if (expressions.length === 0) {
		        return [[], context];
		    }
		    var head = evaluate(expressions[0], context);
		    var tail = evaluateListOfExpressions(expressions.slice(1), head[1]);
		    return [[head[0]].concat(tail[0]), tail[1]];
		}
		function evaluateString(expression, context) {
		    if (!isSymbol(expression)) {
		        return [expression, context];
		    }
		    var value = getSymbolValue(expression, context);
		    if (value === undefined) {
		        throw "Undefined symbol " + expression;
		    }
		    return [value, context];
		}
		function evaluateArray(expression, context) {
		    if (isSymbol(expression[0])) {
		        var f = getSymbolValue(expression[0], context);
		        if (expression.length > 1) {
		            if (typeof f !== "function") {
		                throw "Calling non-function " + expression[0];
		            }
		            var args = [Collections.extend({}, context)].concat(Collections.map(expression.slice(1), function (arg) {
		                return evaluate(arg, Collections.extend({}, context))[0];
		            }));
		            return f.apply(this, args);
		        }
		        else {
		            return [f, context];
		        }
		    }
		    else {
		        return evaluateListOfExpressions(expression, context);
		    }
		}
		function evaluate(expression, context) {
		    if (typeof expression === "string") {
		        return evaluateString(expression, context);
		    }
		    else if (typeof expression === "object") {
		        if (expression instanceof Array && expression.length > 0) {
		            return evaluateArray(expression, context);
		        }
		    }
		    return [expression, context];
		}
	
	
	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var factory_1 = __webpack_require__(42);
		var TransportManager = (function () {
		    function TransportManager(options) {
		        this.options = options || {};
		        this.livesLeft = this.options.lives || Infinity;
		    }
		    TransportManager.prototype.getAssistant = function (transport) {
		        return factory_1["default"].createAssistantToTheTransportManager(this, transport, {
		            minPingDelay: this.options.minPingDelay,
		            maxPingDelay: this.options.maxPingDelay
		        });
		    };
		    TransportManager.prototype.isAlive = function () {
		        return this.livesLeft > 0;
		    };
		    TransportManager.prototype.reportDeath = function () {
		        this.livesLeft -= 1;
		    };
		    return TransportManager;
		}());
		exports.__esModule = true;
		exports["default"] = TransportManager;
	
	
	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var assistant_to_the_transport_manager_1 = __webpack_require__(43);
		var handshake_1 = __webpack_require__(44);
		var pusher_authorizer_1 = __webpack_require__(47);
		var timeline_sender_1 = __webpack_require__(48);
		var presence_channel_1 = __webpack_require__(49);
		var private_channel_1 = __webpack_require__(50);
		var channel_1 = __webpack_require__(51);
		var connection_manager_1 = __webpack_require__(53);
		var channels_1 = __webpack_require__(54);
		var Factory = {
		    createChannels: function () {
		        return new channels_1["default"]();
		    },
		    createConnectionManager: function (key, options) {
		        return new connection_manager_1["default"](key, options);
		    },
		    createChannel: function (name, pusher) {
		        return new channel_1["default"](name, pusher);
		    },
		    createPrivateChannel: function (name, pusher) {
		        return new private_channel_1["default"](name, pusher);
		    },
		    createPresenceChannel: function (name, pusher) {
		        return new presence_channel_1["default"](name, pusher);
		    },
		    createTimelineSender: function (timeline, options) {
		        return new timeline_sender_1["default"](timeline, options);
		    },
		    createAuthorizer: function (channel, options) {
		        return new pusher_authorizer_1["default"](channel, options);
		    },
		    createHandshake: function (transport, callback) {
		        return new handshake_1["default"](transport, callback);
		    },
		    createAssistantToTheTransportManager: function (manager, transport, options) {
		        return new assistant_to_the_transport_manager_1["default"](manager, transport, options);
		    }
		};
		exports.__esModule = true;
		exports["default"] = Factory;
	
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var util_1 = __webpack_require__(11);
		var Collections = __webpack_require__(9);
		var AssistantToTheTransportManager = (function () {
		    function AssistantToTheTransportManager(manager, transport, options) {
		        this.manager = manager;
		        this.transport = transport;
		        this.minPingDelay = options.minPingDelay;
		        this.maxPingDelay = options.maxPingDelay;
		        this.pingDelay = undefined;
		    }
		    AssistantToTheTransportManager.prototype.createConnection = function (name, priority, key, options) {
		        var _this = this;
		        options = Collections.extend({}, options, {
		            activityTimeout: this.pingDelay
		        });
		        var connection = this.transport.createConnection(name, priority, key, options);
		        var openTimestamp = null;
		        var onOpen = function () {
		            connection.unbind("open", onOpen);
		            connection.bind("closed", onClosed);
		            openTimestamp = util_1["default"].now();
		        };
		        var onClosed = function (closeEvent) {
		            connection.unbind("closed", onClosed);
		            if (closeEvent.code === 1002 || closeEvent.code === 1003) {
		                _this.manager.reportDeath();
		            }
		            else if (!closeEvent.wasClean && openTimestamp) {
		                var lifespan = util_1["default"].now() - openTimestamp;
		                if (lifespan < 2 * _this.maxPingDelay) {
		                    _this.manager.reportDeath();
		                    _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
		                }
		            }
		        };
		        connection.bind("open", onOpen);
		        return connection;
		    };
		    AssistantToTheTransportManager.prototype.isSupported = function (environment) {
		        return this.manager.isAlive() && this.transport.isSupported(environment);
		    };
		    return AssistantToTheTransportManager;
		}());
		exports.__esModule = true;
		exports["default"] = AssistantToTheTransportManager;
	
	
	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var Collections = __webpack_require__(9);
		var Protocol = __webpack_require__(45);
		var connection_1 = __webpack_require__(46);
		var Handshake = (function () {
		    function Handshake(transport, callback) {
		        this.transport = transport;
		        this.callback = callback;
		        this.bindListeners();
		    }
		    Handshake.prototype.close = function () {
		        this.unbindListeners();
		        this.transport.close();
		    };
		    Handshake.prototype.bindListeners = function () {
		        var _this = this;
		        this.onMessage = function (m) {
		            _this.unbindListeners();
		            var result;
		            try {
		                result = Protocol.processHandshake(m);
		            }
		            catch (e) {
		                _this.finish("error", { error: e });
		                _this.transport.close();
		                return;
		            }
		            if (result.action === "connected") {
		                _this.finish("connected", {
		                    connection: new connection_1["default"](result.id, _this.transport),
		                    activityTimeout: result.activityTimeout
		                });
		            }
		            else {
		                _this.finish(result.action, { error: result.error });
		                _this.transport.close();
		            }
		        };
		        this.onClosed = function (closeEvent) {
		            _this.unbindListeners();
		            var action = Protocol.getCloseAction(closeEvent) || "backoff";
		            var error = Protocol.getCloseError(closeEvent);
		            _this.finish(action, { error: error });
		        };
		        this.transport.bind("message", this.onMessage);
		        this.transport.bind("closed", this.onClosed);
		    };
		    Handshake.prototype.unbindListeners = function () {
		        this.transport.unbind("message", this.onMessage);
		        this.transport.unbind("closed", this.onClosed);
		    };
		    Handshake.prototype.finish = function (action, params) {
		        this.callback(Collections.extend({ transport: this.transport, action: action }, params));
		    };
		    return Handshake;
		}());
		exports.__esModule = true;
		exports["default"] = Handshake;
	
	
	/***/ },
	/* 45 */
	/***/ function(module, exports) {
	
		"use strict";
		exports.decodeMessage = function (message) {
		    try {
		        var params = JSON.parse(message.data);
		        if (typeof params.data === 'string') {
		            try {
		                params.data = JSON.parse(params.data);
		            }
		            catch (e) {
		                if (!(e instanceof SyntaxError)) {
		                    throw e;
		                }
		            }
		        }
		        return params;
		    }
		    catch (e) {
		        throw { type: 'MessageParseError', error: e, data: message.data };
		    }
		};
		exports.encodeMessage = function (message) {
		    return JSON.stringify(message);
		};
		exports.processHandshake = function (message) {
		    message = exports.decodeMessage(message);
		    if (message.event === "pusher:connection_established") {
		        if (!message.data.activity_timeout) {
		            throw "No activity timeout specified in handshake";
		        }
		        return {
		            action: "connected",
		            id: message.data.socket_id,
		            activityTimeout: message.data.activity_timeout * 1000
		        };
		    }
		    else if (message.event === "pusher:error") {
		        return {
		            action: this.getCloseAction(message.data),
		            error: this.getCloseError(message.data)
		        };
		    }
		    else {
		        throw "Invalid handshake";
		    }
		};
		exports.getCloseAction = function (closeEvent) {
		    if (closeEvent.code < 4000) {
		        if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
		            return "backoff";
		        }
		        else {
		            return null;
		        }
		    }
		    else if (closeEvent.code === 4000) {
		        return "ssl_only";
		    }
		    else if (closeEvent.code < 4100) {
		        return "refused";
		    }
		    else if (closeEvent.code < 4200) {
		        return "backoff";
		    }
		    else if (closeEvent.code < 4300) {
		        return "retry";
		    }
		    else {
		        return "refused";
		    }
		};
		exports.getCloseError = function (closeEvent) {
		    if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
		        return {
		            type: 'PusherError',
		            data: {
		                code: closeEvent.code,
		                message: closeEvent.reason || closeEvent.message
		            }
		        };
		    }
		    else {
		        return null;
		    }
		};
	
	
	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var Collections = __webpack_require__(9);
		var dispatcher_1 = __webpack_require__(23);
		var Protocol = __webpack_require__(45);
		var logger_1 = __webpack_require__(8);
		var Connection = (function (_super) {
		    __extends(Connection, _super);
		    function Connection(id, transport) {
		        _super.call(this);
		        this.id = id;
		        this.transport = transport;
		        this.activityTimeout = transport.activityTimeout;
		        this.bindListeners();
		    }
		    Connection.prototype.handlesActivityChecks = function () {
		        return this.transport.handlesActivityChecks();
		    };
		    Connection.prototype.send = function (data) {
		        return this.transport.send(data);
		    };
		    Connection.prototype.send_event = function (name, data, channel) {
		        var message = { event: name, data: data };
		        if (channel) {
		            message.channel = channel;
		        }
		        logger_1["default"].debug('Event sent', message);
		        return this.send(Protocol.encodeMessage(message));
		    };
		    Connection.prototype.ping = function () {
		        if (this.transport.supportsPing()) {
		            this.transport.ping();
		        }
		        else {
		            this.send_event('pusher:ping', {});
		        }
		    };
		    Connection.prototype.close = function () {
		        this.transport.close();
		    };
		    Connection.prototype.bindListeners = function () {
		        var _this = this;
		        var listeners = {
		            message: function (m) {
		                var message;
		                try {
		                    message = Protocol.decodeMessage(m);
		                }
		                catch (e) {
		                    _this.emit('error', {
		                        type: 'MessageParseError',
		                        error: e,
		                        data: m.data
		                    });
		                }
		                if (message !== undefined) {
		                    logger_1["default"].debug('Event recd', message);
		                    switch (message.event) {
		                        case 'pusher:error':
		                            _this.emit('error', { type: 'PusherError', data: message.data });
		                            break;
		                        case 'pusher:ping':
		                            _this.emit("ping");
		                            break;
		                        case 'pusher:pong':
		                            _this.emit("pong");
		                            break;
		                    }
		                    _this.emit('message', message);
		                }
		            },
		            activity: function () {
		                _this.emit("activity");
		            },
		            error: function (error) {
		                _this.emit("error", { type: "WebSocketError", error: error });
		            },
		            closed: function (closeEvent) {
		                unbindListeners();
		                if (closeEvent && closeEvent.code) {
		                    _this.handleCloseEvent(closeEvent);
		                }
		                _this.transport = null;
		                _this.emit("closed");
		            }
		        };
		        var unbindListeners = function () {
		            Collections.objectApply(listeners, function (listener, event) {
		                _this.transport.unbind(event, listener);
		            });
		        };
		        Collections.objectApply(listeners, function (listener, event) {
		            _this.transport.bind(event, listener);
		        });
		    };
		    Connection.prototype.handleCloseEvent = function (closeEvent) {
		        var action = Protocol.getCloseAction(closeEvent);
		        var error = Protocol.getCloseError(closeEvent);
		        if (error) {
		            this.emit('error', error);
		        }
		        if (action) {
		            this.emit(action);
		        }
		    };
		    return Connection;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = Connection;
	
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var runtime_1 = __webpack_require__(2);
		var Authorizer = (function () {
		    function Authorizer(channel, options) {
		        this.channel = channel;
		        var authTransport = options.authTransport;
		        if (typeof runtime_1["default"].getAuthorizers()[authTransport] === "undefined") {
		            throw "'" + authTransport + "' is not a recognized auth transport";
		        }
		        this.type = authTransport;
		        this.options = options;
		        this.authOptions = (options || {}).auth || {};
		    }
		    Authorizer.prototype.composeQuery = function (socketId) {
		        var query = 'socket_id=' + encodeURIComponent(socketId) +
		            '&channel_name=' + encodeURIComponent(this.channel.name);
		        for (var i in this.authOptions.params) {
		            query += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]);
		        }
		        return query;
		    };
		    Authorizer.prototype.authorize = function (socketId, callback) {
		        Authorizer.authorizers = Authorizer.authorizers || runtime_1["default"].getAuthorizers();
		        return Authorizer.authorizers[this.type].call(this, runtime_1["default"], socketId, callback);
		    };
		    return Authorizer;
		}());
		exports.__esModule = true;
		exports["default"] = Authorizer;
	
	
	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var runtime_1 = __webpack_require__(2);
		var TimelineSender = (function () {
		    function TimelineSender(timeline, options) {
		        this.timeline = timeline;
		        this.options = options || {};
		    }
		    TimelineSender.prototype.send = function (encrypted, callback) {
		        if (this.timeline.isEmpty()) {
		            return;
		        }
		        this.timeline.send(runtime_1["default"].TimelineTransport.getAgent(this, encrypted), callback);
		    };
		    return TimelineSender;
		}());
		exports.__esModule = true;
		exports["default"] = TimelineSender;
	
	
	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var private_channel_1 = __webpack_require__(50);
		var logger_1 = __webpack_require__(8);
		var members_1 = __webpack_require__(52);
		var PresenceChannel = (function (_super) {
		    __extends(PresenceChannel, _super);
		    function PresenceChannel(name, pusher) {
		        _super.call(this, name, pusher);
		        this.members = new members_1["default"]();
		    }
		    PresenceChannel.prototype.authorize = function (socketId, callback) {
		        var _this = this;
		        _super.prototype.authorize.call(this, socketId, function (error, authData) {
		            if (!error) {
		                if (authData.channel_data === undefined) {
		                    logger_1["default"].warn("Invalid auth response for channel '" +
		                        _this.name +
		                        "', expected 'channel_data' field");
		                    callback("Invalid auth response");
		                    return;
		                }
		                var channelData = JSON.parse(authData.channel_data);
		                _this.members.setMyID(channelData.user_id);
		            }
		            callback(error, authData);
		        });
		    };
		    PresenceChannel.prototype.handleEvent = function (event, data) {
		        switch (event) {
		            case "pusher_internal:subscription_succeeded":
		                this.members.onSubscription(data);
		                this.subscribed = true;
		                this.emit("pusher:subscription_succeeded", this.members);
		                break;
		            case "pusher_internal:member_added":
		                var addedMember = this.members.addMember(data);
		                this.emit('pusher:member_added', addedMember);
		                break;
		            case "pusher_internal:member_removed":
		                var removedMember = this.members.removeMember(data);
		                if (removedMember) {
		                    this.emit('pusher:member_removed', removedMember);
		                }
		                break;
		            default:
		                private_channel_1["default"].prototype.handleEvent.call(this, event, data);
		        }
		    };
		    PresenceChannel.prototype.disconnect = function () {
		        this.members.reset();
		        _super.prototype.disconnect.call(this);
		    };
		    return PresenceChannel;
		}(private_channel_1["default"]));
		exports.__esModule = true;
		exports["default"] = PresenceChannel;
	
	
	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var factory_1 = __webpack_require__(42);
		var channel_1 = __webpack_require__(51);
		var PrivateChannel = (function (_super) {
		    __extends(PrivateChannel, _super);
		    function PrivateChannel() {
		        _super.apply(this, arguments);
		    }
		    PrivateChannel.prototype.authorize = function (socketId, callback) {
		        var authorizer = factory_1["default"].createAuthorizer(this, this.pusher.config);
		        return authorizer.authorize(socketId, callback);
		    };
		    return PrivateChannel;
		}(channel_1["default"]));
		exports.__esModule = true;
		exports["default"] = PrivateChannel;
	
	
	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var dispatcher_1 = __webpack_require__(23);
		var Errors = __webpack_require__(30);
		var logger_1 = __webpack_require__(8);
		var Channel = (function (_super) {
		    __extends(Channel, _super);
		    function Channel(name, pusher) {
		        _super.call(this, function (event, data) {
		            logger_1["default"].debug('No callbacks on ' + name + ' for ' + event);
		        });
		        this.name = name;
		        this.pusher = pusher;
		        this.subscribed = false;
		    }
		    Channel.prototype.authorize = function (socketId, callback) {
		        return callback(false, {});
		    };
		    Channel.prototype.trigger = function (event, data) {
		        if (event.indexOf("client-") !== 0) {
		            throw new Errors.BadEventName("Event '" + event + "' does not start with 'client-'");
		        }
		        return this.pusher.send_event(event, data, this.name);
		    };
		    Channel.prototype.disconnect = function () {
		        this.subscribed = false;
		    };
		    Channel.prototype.handleEvent = function (event, data) {
		        if (event.indexOf("pusher_internal:") === 0) {
		            if (event === "pusher_internal:subscription_succeeded") {
		                this.subscribed = true;
		                this.emit("pusher:subscription_succeeded", data);
		            }
		        }
		        else {
		            this.emit(event, data);
		        }
		    };
		    Channel.prototype.subscribe = function () {
		        var _this = this;
		        this.authorize(this.pusher.connection.socket_id, function (error, data) {
		            if (error) {
		                _this.handleEvent('pusher:subscription_error', data);
		            }
		            else {
		                _this.pusher.send_event('pusher:subscribe', {
		                    auth: data.auth,
		                    channel_data: data.channel_data,
		                    channel: _this.name
		                });
		            }
		        });
		    };
		    Channel.prototype.unsubscribe = function () {
		        this.pusher.send_event('pusher:unsubscribe', {
		            channel: this.name
		        });
		    };
		    return Channel;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = Channel;
	
	
	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var Collections = __webpack_require__(9);
		var Members = (function () {
		    function Members() {
		        this.reset();
		    }
		    Members.prototype.get = function (id) {
		        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
		            return {
		                id: id,
		                info: this.members[id]
		            };
		        }
		        else {
		            return null;
		        }
		    };
		    Members.prototype.each = function (callback) {
		        var _this = this;
		        Collections.objectApply(this.members, function (member, id) {
		            callback(_this.get(id));
		        });
		    };
		    Members.prototype.setMyID = function (id) {
		        this.myID = id;
		    };
		    Members.prototype.onSubscription = function (subscriptionData) {
		        this.members = subscriptionData.presence.hash;
		        this.count = subscriptionData.presence.count;
		        this.me = this.get(this.myID);
		    };
		    Members.prototype.addMember = function (memberData) {
		        if (this.get(memberData.user_id) === null) {
		            this.count++;
		        }
		        this.members[memberData.user_id] = memberData.user_info;
		        return this.get(memberData.user_id);
		    };
		    Members.prototype.removeMember = function (memberData) {
		        var member = this.get(memberData.user_id);
		        if (member) {
		            delete this.members[memberData.user_id];
		            this.count--;
		        }
		        return member;
		    };
		    Members.prototype.reset = function () {
		        this.members = {};
		        this.count = 0;
		        this.myID = null;
		        this.me = null;
		    };
		    return Members;
		}());
		exports.__esModule = true;
		exports["default"] = Members;
	
	
	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var __extends = (this && this.__extends) || function (d, b) {
		    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
		    function __() { this.constructor = d; }
		    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		};
		var dispatcher_1 = __webpack_require__(23);
		var timers_1 = __webpack_require__(12);
		var logger_1 = __webpack_require__(8);
		var Collections = __webpack_require__(9);
		var runtime_1 = __webpack_require__(2);
		var ConnectionManager = (function (_super) {
		    __extends(ConnectionManager, _super);
		    function ConnectionManager(key, options) {
		        var _this = this;
		        _super.call(this);
		        this.key = key;
		        this.options = options || {};
		        this.state = "initialized";
		        this.connection = null;
		        this.encrypted = !!options.encrypted;
		        this.timeline = this.options.timeline;
		        this.connectionCallbacks = this.buildConnectionCallbacks();
		        this.errorCallbacks = this.buildErrorCallbacks();
		        this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
		        var Network = runtime_1["default"].getNetwork();
		        Network.bind("online", function () {
		            _this.timeline.info({ netinfo: "online" });
		            if (_this.state === "connecting" || _this.state === "unavailable") {
		                _this.retryIn(0);
		            }
		        });
		        Network.bind("offline", function () {
		            _this.timeline.info({ netinfo: "offline" });
		            if (_this.connection) {
		                _this.sendActivityCheck();
		            }
		        });
		        this.updateStrategy();
		    }
		    ConnectionManager.prototype.connect = function () {
		        if (this.connection || this.runner) {
		            return;
		        }
		        if (!this.strategy.isSupported()) {
		            this.updateState("failed");
		            return;
		        }
		        this.updateState("connecting");
		        this.startConnecting();
		        this.setUnavailableTimer();
		    };
		    ;
		    ConnectionManager.prototype.send = function (data) {
		        if (this.connection) {
		            return this.connection.send(data);
		        }
		        else {
		            return false;
		        }
		    };
		    ;
		    ConnectionManager.prototype.send_event = function (name, data, channel) {
		        if (this.connection) {
		            return this.connection.send_event(name, data, channel);
		        }
		        else {
		            return false;
		        }
		    };
		    ;
		    ConnectionManager.prototype.disconnect = function () {
		        this.disconnectInternally();
		        this.updateState("disconnected");
		    };
		    ;
		    ConnectionManager.prototype.isEncrypted = function () {
		        return this.encrypted;
		    };
		    ;
		    ConnectionManager.prototype.startConnecting = function () {
		        var _this = this;
		        var callback = function (error, handshake) {
		            if (error) {
		                _this.runner = _this.strategy.connect(0, callback);
		            }
		            else {
		                if (handshake.action === "error") {
		                    _this.emit("error", { type: "HandshakeError", error: handshake.error });
		                    _this.timeline.error({ handshakeError: handshake.error });
		                }
		                else {
		                    _this.abortConnecting();
		                    _this.handshakeCallbacks[handshake.action](handshake);
		                }
		            }
		        };
		        this.runner = this.strategy.connect(0, callback);
		    };
		    ;
		    ConnectionManager.prototype.abortConnecting = function () {
		        if (this.runner) {
		            this.runner.abort();
		            this.runner = null;
		        }
		    };
		    ;
		    ConnectionManager.prototype.disconnectInternally = function () {
		        this.abortConnecting();
		        this.clearRetryTimer();
		        this.clearUnavailableTimer();
		        if (this.connection) {
		            var connection = this.abandonConnection();
		            connection.close();
		        }
		    };
		    ;
		    ConnectionManager.prototype.updateStrategy = function () {
		        this.strategy = this.options.getStrategy({
		            key: this.key,
		            timeline: this.timeline,
		            encrypted: this.encrypted
		        });
		    };
		    ;
		    ConnectionManager.prototype.retryIn = function (delay) {
		        var _this = this;
		        this.timeline.info({ action: "retry", delay: delay });
		        if (delay > 0) {
		            this.emit("connecting_in", Math.round(delay / 1000));
		        }
		        this.retryTimer = new timers_1.OneOffTimer(delay || 0, function () {
		            _this.disconnectInternally();
		            _this.connect();
		        });
		    };
		    ;
		    ConnectionManager.prototype.clearRetryTimer = function () {
		        if (this.retryTimer) {
		            this.retryTimer.ensureAborted();
		            this.retryTimer = null;
		        }
		    };
		    ;
		    ConnectionManager.prototype.setUnavailableTimer = function () {
		        var _this = this;
		        this.unavailableTimer = new timers_1.OneOffTimer(this.options.unavailableTimeout, function () {
		            _this.updateState("unavailable");
		        });
		    };
		    ;
		    ConnectionManager.prototype.clearUnavailableTimer = function () {
		        if (this.unavailableTimer) {
		            this.unavailableTimer.ensureAborted();
		        }
		    };
		    ;
		    ConnectionManager.prototype.sendActivityCheck = function () {
		        var _this = this;
		        this.stopActivityCheck();
		        this.connection.ping();
		        this.activityTimer = new timers_1.OneOffTimer(this.options.pongTimeout, function () {
		            _this.timeline.error({ pong_timed_out: _this.options.pongTimeout });
		            _this.retryIn(0);
		        });
		    };
		    ;
		    ConnectionManager.prototype.resetActivityCheck = function () {
		        var _this = this;
		        this.stopActivityCheck();
		        if (!this.connection.handlesActivityChecks()) {
		            this.activityTimer = new timers_1.OneOffTimer(this.activityTimeout, function () {
		                _this.sendActivityCheck();
		            });
		        }
		    };
		    ;
		    ConnectionManager.prototype.stopActivityCheck = function () {
		        if (this.activityTimer) {
		            this.activityTimer.ensureAborted();
		        }
		    };
		    ;
		    ConnectionManager.prototype.buildConnectionCallbacks = function () {
		        var _this = this;
		        return {
		            message: function (message) {
		                _this.resetActivityCheck();
		                _this.emit('message', message);
		            },
		            ping: function () {
		                _this.send_event('pusher:pong', {});
		            },
		            activity: function () {
		                _this.resetActivityCheck();
		            },
		            error: function (error) {
		                _this.emit("error", { type: "WebSocketError", error: error });
		            },
		            closed: function () {
		                _this.abandonConnection();
		                if (_this.shouldRetry()) {
		                    _this.retryIn(1000);
		                }
		            }
		        };
		    };
		    ;
		    ConnectionManager.prototype.buildHandshakeCallbacks = function (errorCallbacks) {
		        var _this = this;
		        return Collections.extend({}, errorCallbacks, {
		            connected: function (handshake) {
		                _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
		                _this.clearUnavailableTimer();
		                _this.setConnection(handshake.connection);
		                _this.socket_id = _this.connection.id;
		                _this.updateState("connected", { socket_id: _this.socket_id });
		            }
		        });
		    };
		    ;
		    ConnectionManager.prototype.buildErrorCallbacks = function () {
		        var _this = this;
		        var withErrorEmitted = function (callback) {
		            return function (result) {
		                if (result.error) {
		                    _this.emit("error", { type: "WebSocketError", error: result.error });
		                }
		                callback(result);
		            };
		        };
		        return {
		            ssl_only: withErrorEmitted(function () {
		                _this.encrypted = true;
		                _this.updateStrategy();
		                _this.retryIn(0);
		            }),
		            refused: withErrorEmitted(function () {
		                _this.disconnect();
		            }),
		            backoff: withErrorEmitted(function () {
		                _this.retryIn(1000);
		            }),
		            retry: withErrorEmitted(function () {
		                _this.retryIn(0);
		            })
		        };
		    };
		    ;
		    ConnectionManager.prototype.setConnection = function (connection) {
		        this.connection = connection;
		        for (var event in this.connectionCallbacks) {
		            this.connection.bind(event, this.connectionCallbacks[event]);
		        }
		        this.resetActivityCheck();
		    };
		    ;
		    ConnectionManager.prototype.abandonConnection = function () {
		        if (!this.connection) {
		            return;
		        }
		        this.stopActivityCheck();
		        for (var event in this.connectionCallbacks) {
		            this.connection.unbind(event, this.connectionCallbacks[event]);
		        }
		        var connection = this.connection;
		        this.connection = null;
		        return connection;
		    };
		    ConnectionManager.prototype.updateState = function (newState, data) {
		        var previousState = this.state;
		        this.state = newState;
		        if (previousState !== newState) {
		            var newStateDescription = newState;
		            if (newStateDescription === "connected") {
		                newStateDescription += " with new socket ID " + data.socket_id;
		            }
		            logger_1["default"].debug('State changed', previousState + ' -> ' + newStateDescription);
		            this.timeline.info({ state: newState, params: data });
		            this.emit('state_change', { previous: previousState, current: newState });
		            this.emit(newState, data);
		        }
		    };
		    ConnectionManager.prototype.shouldRetry = function () {
		        return this.state === "connecting" || this.state === "connected";
		    };
		    return ConnectionManager;
		}(dispatcher_1["default"]));
		exports.__esModule = true;
		exports["default"] = ConnectionManager;
	
	
	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var Collections = __webpack_require__(9);
		var factory_1 = __webpack_require__(42);
		var Channels = (function () {
		    function Channels() {
		        this.channels = {};
		    }
		    Channels.prototype.add = function (name, pusher) {
		        if (!this.channels[name]) {
		            this.channels[name] = createChannel(name, pusher);
		        }
		        return this.channels[name];
		    };
		    Channels.prototype.all = function () {
		        return Collections.values(this.channels);
		    };
		    Channels.prototype.find = function (name) {
		        return this.channels[name];
		    };
		    Channels.prototype.remove = function (name) {
		        var channel = this.channels[name];
		        delete this.channels[name];
		        return channel;
		    };
		    Channels.prototype.disconnect = function () {
		        Collections.objectApply(this.channels, function (channel) {
		            channel.disconnect();
		        });
		    };
		    return Channels;
		}());
		exports.__esModule = true;
		exports["default"] = Channels;
		function createChannel(name, pusher) {
		    if (name.indexOf('private-') === 0) {
		        return factory_1["default"].createPrivateChannel(name, pusher);
		    }
		    else if (name.indexOf('presence-') === 0) {
		        return factory_1["default"].createPresenceChannel(name, pusher);
		    }
		    else {
		        return factory_1["default"].createChannel(name, pusher);
		    }
		}
	
	
	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var factory_1 = __webpack_require__(42);
		var util_1 = __webpack_require__(11);
		var Errors = __webpack_require__(30);
		var Collections = __webpack_require__(9);
		var TransportStrategy = (function () {
		    function TransportStrategy(name, priority, transport, options) {
		        this.name = name;
		        this.priority = priority;
		        this.transport = transport;
		        this.options = options || {};
		    }
		    TransportStrategy.prototype.isSupported = function () {
		        return this.transport.isSupported({
		            encrypted: this.options.encrypted
		        });
		    };
		    TransportStrategy.prototype.connect = function (minPriority, callback) {
		        var _this = this;
		        if (!this.isSupported()) {
		            return failAttempt(new Errors.UnsupportedStrategy(), callback);
		        }
		        else if (this.priority < minPriority) {
		            return failAttempt(new Errors.TransportPriorityTooLow(), callback);
		        }
		        var connected = false;
		        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
		        var handshake = null;
		        var onInitialized = function () {
		            transport.unbind("initialized", onInitialized);
		            transport.connect();
		        };
		        var onOpen = function () {
		            handshake = factory_1["default"].createHandshake(transport, function (result) {
		                connected = true;
		                unbindListeners();
		                callback(null, result);
		            });
		        };
		        var onError = function (error) {
		            unbindListeners();
		            callback(error);
		        };
		        var onClosed = function () {
		            unbindListeners();
		            var serializedTransport;
		            serializedTransport = Collections.safeJSONStringify(transport);
		            callback(new Errors.TransportClosed(serializedTransport));
		        };
		        var unbindListeners = function () {
		            transport.unbind("initialized", onInitialized);
		            transport.unbind("open", onOpen);
		            transport.unbind("error", onError);
		            transport.unbind("closed", onClosed);
		        };
		        transport.bind("initialized", onInitialized);
		        transport.bind("open", onOpen);
		        transport.bind("error", onError);
		        transport.bind("closed", onClosed);
		        transport.initialize();
		        return {
		            abort: function () {
		                if (connected) {
		                    return;
		                }
		                unbindListeners();
		                if (handshake) {
		                    handshake.close();
		                }
		                else {
		                    transport.close();
		                }
		            },
		            forceMinPriority: function (p) {
		                if (connected) {
		                    return;
		                }
		                if (_this.priority < p) {
		                    if (handshake) {
		                        handshake.close();
		                    }
		                    else {
		                        transport.close();
		                    }
		                }
		            }
		        };
		    };
		    return TransportStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = TransportStrategy;
		function failAttempt(error, callback) {
		    util_1["default"].defer(function () {
		        callback(error);
		    });
		    return {
		        abort: function () { },
		        forceMinPriority: function () { }
		    };
		}
	
	
	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var timers_1 = __webpack_require__(12);
		var SequentialStrategy = (function () {
		    function SequentialStrategy(strategies, options) {
		        this.strategies = strategies;
		        this.loop = Boolean(options.loop);
		        this.failFast = Boolean(options.failFast);
		        this.timeout = options.timeout;
		        this.timeoutLimit = options.timeoutLimit;
		    }
		    SequentialStrategy.prototype.isSupported = function () {
		        return Collections.any(this.strategies, util_1["default"].method("isSupported"));
		    };
		    SequentialStrategy.prototype.connect = function (minPriority, callback) {
		        var _this = this;
		        var strategies = this.strategies;
		        var current = 0;
		        var timeout = this.timeout;
		        var runner = null;
		        var tryNextStrategy = function (error, handshake) {
		            if (handshake) {
		                callback(null, handshake);
		            }
		            else {
		                current = current + 1;
		                if (_this.loop) {
		                    current = current % strategies.length;
		                }
		                if (current < strategies.length) {
		                    if (timeout) {
		                        timeout = timeout * 2;
		                        if (_this.timeoutLimit) {
		                            timeout = Math.min(timeout, _this.timeoutLimit);
		                        }
		                    }
		                    runner = _this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: _this.failFast }, tryNextStrategy);
		                }
		                else {
		                    callback(true);
		                }
		            }
		        };
		        runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
		        return {
		            abort: function () {
		                runner.abort();
		            },
		            forceMinPriority: function (p) {
		                minPriority = p;
		                if (runner) {
		                    runner.forceMinPriority(p);
		                }
		            }
		        };
		    };
		    SequentialStrategy.prototype.tryStrategy = function (strategy, minPriority, options, callback) {
		        var timer = null;
		        var runner = null;
		        if (options.timeout > 0) {
		            timer = new timers_1.OneOffTimer(options.timeout, function () {
		                runner.abort();
		                callback(true);
		            });
		        }
		        runner = strategy.connect(minPriority, function (error, handshake) {
		            if (error && timer && timer.isRunning() && !options.failFast) {
		                return;
		            }
		            if (timer) {
		                timer.ensureAborted();
		            }
		            callback(error, handshake);
		        });
		        return {
		            abort: function () {
		                if (timer) {
		                    timer.ensureAborted();
		                }
		                runner.abort();
		            },
		            forceMinPriority: function (p) {
		                runner.forceMinPriority(p);
		            }
		        };
		    };
		    return SequentialStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = SequentialStrategy;
	
	
	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var Collections = __webpack_require__(9);
		var util_1 = __webpack_require__(11);
		var BestConnectedEverStrategy = (function () {
		    function BestConnectedEverStrategy(strategies) {
		        this.strategies = strategies;
		    }
		    BestConnectedEverStrategy.prototype.isSupported = function () {
		        return Collections.any(this.strategies, util_1["default"].method("isSupported"));
		    };
		    BestConnectedEverStrategy.prototype.connect = function (minPriority, callback) {
		        return connect(this.strategies, minPriority, function (i, runners) {
		            return function (error, handshake) {
		                runners[i].error = error;
		                if (error) {
		                    if (allRunnersFailed(runners)) {
		                        callback(true);
		                    }
		                    return;
		                }
		                Collections.apply(runners, function (runner) {
		                    runner.forceMinPriority(handshake.transport.priority);
		                });
		                callback(null, handshake);
		            };
		        });
		    };
		    return BestConnectedEverStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = BestConnectedEverStrategy;
		function connect(strategies, minPriority, callbackBuilder) {
		    var runners = Collections.map(strategies, function (strategy, i, _, rs) {
		        return strategy.connect(minPriority, callbackBuilder(i, rs));
		    });
		    return {
		        abort: function () {
		            Collections.apply(runners, abortRunner);
		        },
		        forceMinPriority: function (p) {
		            Collections.apply(runners, function (runner) {
		                runner.forceMinPriority(p);
		            });
		        }
		    };
		}
		function allRunnersFailed(runners) {
		    return Collections.all(runners, function (runner) {
		        return Boolean(runner.error);
		    });
		}
		function abortRunner(runner) {
		    if (!runner.error && !runner.aborted) {
		        runner.abort();
		        runner.aborted = true;
		    }
		}
	
	
	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var util_1 = __webpack_require__(11);
		var runtime_1 = __webpack_require__(2);
		var sequential_strategy_1 = __webpack_require__(56);
		var Collections = __webpack_require__(9);
		var CachedStrategy = (function () {
		    function CachedStrategy(strategy, transports, options) {
		        this.strategy = strategy;
		        this.transports = transports;
		        this.ttl = options.ttl || 1800 * 1000;
		        this.encrypted = options.encrypted;
		        this.timeline = options.timeline;
		    }
		    CachedStrategy.prototype.isSupported = function () {
		        return this.strategy.isSupported();
		    };
		    CachedStrategy.prototype.connect = function (minPriority, callback) {
		        var encrypted = this.encrypted;
		        var info = fetchTransportCache(encrypted);
		        var strategies = [this.strategy];
		        if (info && info.timestamp + this.ttl >= util_1["default"].now()) {
		            var transport = this.transports[info.transport];
		            if (transport) {
		                this.timeline.info({
		                    cached: true,
		                    transport: info.transport,
		                    latency: info.latency
		                });
		                strategies.push(new sequential_strategy_1["default"]([transport], {
		                    timeout: info.latency * 2 + 1000,
		                    failFast: true
		                }));
		            }
		        }
		        var startTimestamp = util_1["default"].now();
		        var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
		            if (error) {
		                flushTransportCache(encrypted);
		                if (strategies.length > 0) {
		                    startTimestamp = util_1["default"].now();
		                    runner = strategies.pop().connect(minPriority, cb);
		                }
		                else {
		                    callback(error);
		                }
		            }
		            else {
		                storeTransportCache(encrypted, handshake.transport.name, util_1["default"].now() - startTimestamp);
		                callback(null, handshake);
		            }
		        });
		        return {
		            abort: function () {
		                runner.abort();
		            },
		            forceMinPriority: function (p) {
		                minPriority = p;
		                if (runner) {
		                    runner.forceMinPriority(p);
		                }
		            }
		        };
		    };
		    return CachedStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = CachedStrategy;
		function getTransportCacheKey(encrypted) {
		    return "pusherTransport" + (encrypted ? "Encrypted" : "Unencrypted");
		}
		function fetchTransportCache(encrypted) {
		    var storage = runtime_1["default"].getLocalStorage();
		    if (storage) {
		        try {
		            var serializedCache = storage[getTransportCacheKey(encrypted)];
		            if (serializedCache) {
		                return JSON.parse(serializedCache);
		            }
		        }
		        catch (e) {
		            flushTransportCache(encrypted);
		        }
		    }
		    return null;
		}
		function storeTransportCache(encrypted, transport, latency) {
		    var storage = runtime_1["default"].getLocalStorage();
		    if (storage) {
		        try {
		            storage[getTransportCacheKey(encrypted)] = Collections.safeJSONStringify({
		                timestamp: util_1["default"].now(),
		                transport: transport,
		                latency: latency
		            });
		        }
		        catch (e) {
		        }
		    }
		}
		function flushTransportCache(encrypted) {
		    var storage = runtime_1["default"].getLocalStorage();
		    if (storage) {
		        try {
		            delete storage[getTransportCacheKey(encrypted)];
		        }
		        catch (e) {
		        }
		    }
		}
	
	
	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var timers_1 = __webpack_require__(12);
		var DelayedStrategy = (function () {
		    function DelayedStrategy(strategy, _a) {
		        var number = _a.delay;
		        this.strategy = strategy;
		        this.options = { delay: number };
		    }
		    DelayedStrategy.prototype.isSupported = function () {
		        return this.strategy.isSupported();
		    };
		    DelayedStrategy.prototype.connect = function (minPriority, callback) {
		        var strategy = this.strategy;
		        var runner;
		        var timer = new timers_1.OneOffTimer(this.options.delay, function () {
		            runner = strategy.connect(minPriority, callback);
		        });
		        return {
		            abort: function () {
		                timer.ensureAborted();
		                if (runner) {
		                    runner.abort();
		                }
		            },
		            forceMinPriority: function (p) {
		                minPriority = p;
		                if (runner) {
		                    runner.forceMinPriority(p);
		                }
		            }
		        };
		    };
		    return DelayedStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = DelayedStrategy;
	
	
	/***/ },
	/* 60 */
	/***/ function(module, exports) {
	
		"use strict";
		var IfStrategy = (function () {
		    function IfStrategy(test, trueBranch, falseBranch) {
		        this.test = test;
		        this.trueBranch = trueBranch;
		        this.falseBranch = falseBranch;
		    }
		    IfStrategy.prototype.isSupported = function () {
		        var branch = this.test() ? this.trueBranch : this.falseBranch;
		        return branch.isSupported();
		    };
		    IfStrategy.prototype.connect = function (minPriority, callback) {
		        var branch = this.test() ? this.trueBranch : this.falseBranch;
		        return branch.connect(minPriority, callback);
		    };
		    return IfStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = IfStrategy;
	
	
	/***/ },
	/* 61 */
	/***/ function(module, exports) {
	
		"use strict";
		var FirstConnectedStrategy = (function () {
		    function FirstConnectedStrategy(strategy) {
		        this.strategy = strategy;
		    }
		    FirstConnectedStrategy.prototype.isSupported = function () {
		        return this.strategy.isSupported();
		    };
		    FirstConnectedStrategy.prototype.connect = function (minPriority, callback) {
		        var runner = this.strategy.connect(minPriority, function (error, handshake) {
		            if (handshake) {
		                runner.abort();
		            }
		            callback(error, handshake);
		        });
		        return runner;
		    };
		    return FirstConnectedStrategy;
		}());
		exports.__esModule = true;
		exports["default"] = FirstConnectedStrategy;
	
	
	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var defaults_1 = __webpack_require__(5);
		exports.getGlobalConfig = function () {
		    return {
		        wsHost: defaults_1["default"].host,
		        wsPort: defaults_1["default"].ws_port,
		        wssPort: defaults_1["default"].wss_port,
		        httpHost: defaults_1["default"].sockjs_host,
		        httpPort: defaults_1["default"].sockjs_http_port,
		        httpsPort: defaults_1["default"].sockjs_https_port,
		        httpPath: defaults_1["default"].sockjs_path,
		        statsHost: defaults_1["default"].stats_host,
		        authEndpoint: defaults_1["default"].channel_auth_endpoint,
		        authTransport: defaults_1["default"].channel_auth_transport,
		        activity_timeout: defaults_1["default"].activity_timeout,
		        pong_timeout: defaults_1["default"].pong_timeout,
		        unavailable_timeout: defaults_1["default"].unavailable_timeout
		    };
		};
		exports.getClusterConfig = function (clusterName) {
		    return {
		        wsHost: "ws-" + clusterName + ".pusher.com",
		        httpHost: "sockjs-" + clusterName + ".pusher.com"
		    };
		};
	
	
	/***/ }
	/******/ ])
	});
	;

/***/ }

});
//# sourceMappingURL=1.role.a23398077cfad4d75bff.js.map