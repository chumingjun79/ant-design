webpackJsonp([38,135],{25:function(n,t,s){/*!
	 * object.omit <https://github.com/jonschlinkert/object.omit>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
"use strict";var a=s(36),e=s(35);n.exports=function(n,t){if(!a(n))return{};var s,t=[].concat.apply([],[].slice.call(arguments,1)),o=t[t.length-1],p={};"function"==typeof o&&(s=t.pop());var c="function"==typeof s;return t.length||c?(e(n,function(a,e){t.indexOf(e)===-1&&(c?s(a,e,n)&&(p[e]=a):p[e]=a)}),p):n}},34:function(n,t){/*!
	 * for-in <https://github.com/jonschlinkert/for-in>
	 *
	 * Copyright (c) 2014-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
"use strict";n.exports=function(n,t,s){for(var a in n)if(t.call(s,n[a],a,n)===!1)break}},35:function(n,t,s){/*!
	 * for-own <https://github.com/jonschlinkert/for-own>
	 *
	 * Copyright (c) 2014-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
"use strict";var a=s(34),e=Object.prototype.hasOwnProperty;n.exports=function(n,t,s){a(n,function(a,o){if(e.call(n,o))return t.call(s,n[o],o,n)})}},36:function(n,t){/*!
	 * is-extendable <https://github.com/jonschlinkert/is-extendable>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
"use strict";n.exports=function(n){return"undefined"!=typeof n&&null!==n&&("object"==typeof n||"function"==typeof n)}},553:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function e(n,t){for(var s=Object.getOwnPropertyNames(t),a=0;a<s.length;a++){var e=s[a],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function o(n,t,s){return t in n?Object.defineProperty(n,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[t]=s,n}function p(n,t){var s={};for(var a in n)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=n[a]);return s}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):e(n,t))}function i(n,t){if("undefined"==typeof window)return 0;var s=t?"pageYOffset":"pageXOffset",a=t?"scrollTop":"scrollLeft",e=n===window,o=e?n[s]:n[a];return e&&"number"!=typeof o&&(o=window.document.documentElement[a]),o}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r,f,k,d=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},g=s(1),m=a(g),h=s(37),b=a(h),v=s(8),y=a(v),w=s(132),O=a(w),x=s(3),T=a(x),j=s(25),E=a(j),P=(f=r=function(n){function t(s){c(this,t);var a=l(this,n.call(this,s));k.call(a);var e=i(s.target(),!0);return a.state={visible:e>s.visibilityHeight},a}return u(t,n),t.prototype.setScrollTop=function(n){var t=this.props.target();t===window?(document.body.scrollTop=n,document.documentElement.scrollTop=n):t.scrollTop=n},t.prototype.componentDidMount=function(){this.scrollEvent=(0,O["default"])(this.props.target(),"scroll",this.handleScroll)},t.prototype.componentWillUnmount=function(){this.scrollEvent&&this.scrollEvent.remove()},t.prototype.render=function(){var n,t=this.props,s=t.prefixCls,a=t.className,e=t.children,c=p(t,["prefixCls","className","children"]),l=(0,T["default"])((n={},o(n,s,!0),o(n,a,!!a),n)),u=m["default"].createElement("div",{className:s+"-content"},m["default"].createElement(y["default"],{className:s+"-icon",type:"to-top"})),i=(0,E["default"])(c,["visibilityHeight"]);return m["default"].createElement(b["default"],{component:"",transitionName:"fade"},this.state.visible?m["default"].createElement("div",d({},i,{className:l,onClick:this.scrollToTop}),e||u):null)},t}(m["default"].Component),r.propTypes={visibilityHeight:m["default"].PropTypes.number,target:m["default"].PropTypes.func},r.defaultProps={onClick:function(){},visibilityHeight:400,target:function(){return window},prefixCls:"ant-back-top"},k=function(){var n=this;this.scrollToTop=function(t){t&&t.preventDefault(),n.setScrollTop(0),n.props.onClick(t)},this.handleScroll=function(){var t=n.props,s=t.visibilityHeight,a=t.target,e=i(a(),!0);n.setState({visible:e>s})}},f);t["default"]=P,n.exports=t["default"]},554:function(n,t,s){"use strict";s(5),s(1370)},693:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var e=(s(554),s(553)),o=a(e),p=s(1),c=a(p),l=s(2);a(l);n.exports={content:[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/back-top/demo/basic.md",id:"components-back-top-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> BackTop <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>BackTop</span> <span class="token punctuation" >/></span></span>\n    \u5411\u4e0b\u6eda\u52a8\u540e\uff0c\u89c1\u53f3\u4e0b\u89d2\u7070\u8272\u6309\u94ae\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(o["default"],null),"\u5411\u4e0b\u6eda\u52a8\u540e\uff0c\u89c1\u53f3\u4e0b\u89d2\u7070\u8272\u6309\u94ae")}}},694:function(n,t,s){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var e=(s(554),s(553)),o=a(e),p=s(1),c=a(p),l=s(2);a(l);n.exports={content:[["p","\u53ef\u4ee5\u81ea\u5b9a\u4e49\u56de\u5230\u9876\u90e8\u6309\u94ae\u7684\u6837\u5f0f\uff0c\u9650\u5236\u5bbd\u9ad8\uff1a",["code","40px * 40px"],"\u3002"]],meta:{order:1,title:"\u81ea\u5b9a\u4e49\u6837\u5f0f",filename:"components/back-top/demo/custom.md",id:"components-back-top-demo-custom"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> BackTop <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> style <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  height<span class="token punctuation" >:</span> <span class="token number" >40</span><span class="token punctuation" >,</span>\n  width<span class="token punctuation" >:</span> <span class="token number" >40</span><span class="token punctuation" >,</span>\n  lineHeight<span class="token punctuation" >:</span> <span class="token string" >\'40px\'</span><span class="token punctuation" >,</span>\n  borderRadius<span class="token punctuation" >:</span> <span class="token number" >4</span><span class="token punctuation" >,</span>\n  backgroundColor<span class="token punctuation" >:</span> <span class="token string" >\'#57c5f7\'</span><span class="token punctuation" >,</span>\n  color<span class="token punctuation" >:</span> <span class="token string" >\'#fff\'</span><span class="token punctuation" >,</span>\n  textAlign<span class="token punctuation" >:</span> <span class="token string" >\'center\'</span><span class="token punctuation" >,</span>\n  fontSize<span class="token punctuation" >:</span> <span class="token number" >20</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>BackTop</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> bottom<span class="token punctuation" >:</span> <span class="token number" >100</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>style<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>UP<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>BackTop</span><span class="token punctuation" >></span></span>\n    \u5411\u4e0b\u6eda\u52a8\u540e\uff0c\u89c1\u53f3\u4e0b\u89d2\u84dd\u8272\u6309\u94ae\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n={height:40,width:40,lineHeight:"40px",borderRadius:4,backgroundColor:"#57c5f7",color:"#fff",textAlign:"center",fontSize:20};return c["default"].createElement("div",null,c["default"].createElement(o["default"],{style:{bottom:100}},c["default"].createElement("div",{style:n},"UP")),"\u5411\u4e0b\u6eda\u52a8\u540e\uff0c\u89c1\u53f3\u4e0b\u89d2\u84dd\u8272\u6309\u94ae")}}},1095:function(n,t,s){n.exports={basic:s(693),custom:s(694)}},1370:function(n,t){}});