webpackJsonp([3],{190:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(10),l=u(i),n=a(11),r=u(n),d=a(12),c=u(d),o=a(14),s=u(o),f=a(13),p=u(f),m=a(4),v=u(m),_=a(270),b=u(_),h=function(e){function t(){return(0,r["default"])(this,t),(0,s["default"])(this,(t.__proto__||(0,l["default"])(t)).apply(this,arguments))}return(0,p["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){var e="YOUR STATUS:",t="DASHBOARD";return v["default"].createElement("div",null,v["default"].createElement("div",{className:b["default"].background},v["default"].createElement("div",{className:b["default"].container},v["default"].createElement("div",{className:b["default"].contentContainer},v["default"].createElement("div",{className:b["default"].header},t),v["default"].createElement("div",{className:b["default"].aboutText},v["default"].createElement("a",{href:"#"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.")),v["default"].createElement("div",{className:b["default"].statusLabelText},e),v["default"].createElement("div",{className:b["default"].status},this.props.participant?""+this.props.participant.role.status.toUpperCase():null),v["default"].createElement("div",{className:b["default"].aboutText},v["default"].createElement("a",{href:"#"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."))))))}}]),t}(v["default"].Component);h.propTypes={participant:v["default"].PropTypes.object,fetchParticipant:v["default"].PropTypes.func.isRequired},t["default"]=h},191:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(190),l=u(i);t["default"]=l["default"]},214:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(40),l=a(45),n=a(191),r=u(n),d={fetchParticipant:l.fetchParticipant},c=function(e){return{participant:e.participant.participant}};t["default"]=(0,i.connect)(c,d)(r["default"])},270:275});