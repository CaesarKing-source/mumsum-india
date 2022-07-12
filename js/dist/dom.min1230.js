/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.dom=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="2sUP")}({"2sUP":function(t,e,n){"use strict";n.r(e),n.d(e,"focus",(function(){return ct})),n.d(e,"computeCaretRect",(function(){return C})),n.d(e,"documentHasTextSelection",(function(){return w})),n.d(e,"documentHasUncollapsedSelection",(function(){return S})),n.d(e,"documentHasSelection",(function(){return x})),n.d(e,"getRectangleFromRange",(function(){return E})),n.d(e,"getScrollContainer",(function(){return R})),n.d(e,"getOffsetParent",(function(){return P})),n.d(e,"isEntirelySelected",(function(){return M})),n.d(e,"isHorizontalEdge",(function(){return F})),n.d(e,"isNumberInput",(function(){return O})),n.d(e,"isTextField",(function(){return T})),n.d(e,"isVerticalEdge",(function(){return B})),n.d(e,"placeCaretAtHorizontalEdge",(function(){return q})),n.d(e,"placeCaretAtVerticalEdge",(function(){return k})),n.d(e,"replace",(function(){return W})),n.d(e,"remove",(function(){return Y})),n.d(e,"insertAfter",(function(){return X})),n.d(e,"unwrap",(function(){return G})),n.d(e,"replaceTag",(function(){return $})),n.d(e,"wrap",(function(){return J})),n.d(e,"__unstableStripHTML",(function(){return Q})),n.d(e,"isEmpty",(function(){return Z})),n.d(e,"removeInvalidHTML",(function(){return it})),n.d(e,"isRTL",(function(){return j})),n.d(e,"safeHTML",(function(){return K})),n.d(e,"getPhrasingContentSchema",(function(){return nt})),n.d(e,"isPhrasingContent",(function(){return rt})),n.d(e,"isTextContent",(function(){return ot})),n.d(e,"getFilesFromDataTransfer",(function(){return ut}));var r={};n.r(r),n.d(r,"find",(function(){return a}));var o={};function i(t){return[t?'[tabindex]:not([tabindex^="-"])':"[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])",'iframe:not([tabindex^="-"])',"object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",")}function u(t){return t.offsetWidth>0||t.offsetHeight>0||t.getClientRects().length>0}function c(t){const e=t.closest("map[name]");if(!e)return!1;const n=t.ownerDocument.querySelector('img[usemap="#'+e.name+'"]');return!!n&&u(n)}function a(t){let{sequential:e=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=t.querySelectorAll(i(e));return Array.from(n).filter(t=>{if(!u(t))return!1;const{nodeName:e}=t;return"AREA"!==e||c(t)})}n.r(o),n.d(o,"isTabbableIndex",(function(){return d})),n.d(o,"find",(function(){return b})),n.d(o,"findPrevious",(function(){return g})),n.d(o,"findNext",(function(){return y}));var s=n("YLtl");function l(t){const e=t.getAttribute("tabindex");return null===e?0:parseInt(e,10)}function d(t){return-1!==l(t)}function f(t,e){return{element:t,index:e}}function m(t){return t.element}function p(t,e){const n=l(t.element),r=l(e.element);return n===r?t.index-e.index:n-r}function h(t){return t.filter(d).map(f).sort(p).map(m).reduce(function(){const t={};return function(e,n){const{nodeName:r,type:o,checked:i,name:u}=n;if("INPUT"!==r||"radio"!==o||!u)return e.concat(n);const c=t.hasOwnProperty(u);if(!(i||!c))return e;if(c){const n=t[u];e=Object(s.without)(e,n)}return t[u]=n,e.concat(n)}}(),[])}function b(t){return h(a(t))}function g(t){const e=a(t.ownerDocument.body),n=e.indexOf(t);return e.length=n,Object(s.last)(h(e))}function y(t){const e=a(t.ownerDocument.body),n=e.indexOf(t),r=e.slice(n+1);return Object(s.first)(h(r))}function N(t,e){0}function E(t){if(!t.collapsed){const e=Array.from(t.getClientRects());if(1===e.length)return e[0];const n=e.filter(t=>{let{width:e}=t;return e>1});if(0===n.length)return t.getBoundingClientRect();if(1===n.length)return n[0];let{top:r,bottom:o,left:i,right:u}=n[0];for(const{top:t,bottom:e,left:c,right:a}of n)t<r&&(r=t),e>o&&(o=e),c<i&&(i=c),a>u&&(u=a);return new window.DOMRect(i,r,u-i,o-r)}const{startContainer:e}=t,{ownerDocument:n}=e;if("BR"===e.nodeName){const{parentNode:r}=e;N();const o=Array.from(r.childNodes).indexOf(e);N(),(t=n.createRange()).setStart(r,o),t.setEnd(r,o)}let r=t.getClientRects()[0];if(!r){N();const e=n.createTextNode("​");(t=t.cloneRange()).insertNode(e),r=t.getClientRects()[0],N(e.parentNode),e.parentNode.removeChild(e)}return r}function C(t){const e=t.getSelection();N();const n=e.rangeCount?e.getRangeAt(0):null;return n?E(n):null}function w(t){N(t.defaultView);const e=t.defaultView.getSelection();N();const n=e.rangeCount?e.getRangeAt(0):null;return!!n&&!n.collapsed}function v(t){return!!t&&"INPUT"===t.nodeName}function T(t){return v(t)&&t.type&&!["button","checkbox","hidden","file","radio","image","range","reset","submit","number"].includes(t.type)||"TEXTAREA"===t.nodeName||"true"===t.contentEditable}function O(t){return v(t)&&"number"===t.type&&!!t.valueAsNumber}function S(t){return w(t)||!!t.activeElement&&function(t){if(!T(t)&&!O(t))return!1;try{const{selectionStart:e,selectionEnd:n}=t;return null!==e&&e!==n}catch(t){return!1}}(t.activeElement)}function x(t){return!!t.activeElement&&(T(t.activeElement)||O(t.activeElement)||w(t))}function A(t){return N(t.ownerDocument.defaultView),t.ownerDocument.defaultView.getComputedStyle(t)}function R(t){if(t){if(t.scrollHeight>t.clientHeight){const{overflowY:e}=A(t);if(/(auto|scroll)/.test(e))return t}return R(t.parentNode)}}function P(t){let e;for(;(e=t.parentNode)&&e.nodeType!==e.ELEMENT_NODE;);return e?"static"!==A(e).position?e:e.offsetParent:null}function L(t){return"INPUT"===t.tagName||"TEXTAREA"===t.tagName}function M(t){if(L(t))return 0===t.selectionStart&&t.value.length===t.selectionEnd;if(!t.isContentEditable)return!0;const{ownerDocument:e}=t,{defaultView:n}=e;N();const r=n.getSelection();N();const o=r.rangeCount?r.getRangeAt(0):null;if(!o)return!0;const{startContainer:i,endContainer:u,startOffset:c,endOffset:a}=o;if(i===t&&u===t&&0===c&&a===t.childNodes.length)return!0;t.lastChild;N();const s=u.nodeType===u.TEXT_NODE?u.data.length:u.childNodes.length;return D(i,t,"firstChild")&&D(u,t,"lastChild")&&0===c&&a===s}function D(t,e,n){let r=e;do{if(t===r)return!0;r=r[n]}while(r);return!1}function j(t){return"rtl"===A(t).direction}function H(t){const e=Array.from(t.getClientRects());if(!e.length)return;const n=Math.min(...e.map(t=>{let{top:e}=t;return e}));return Math.max(...e.map(t=>{let{bottom:e}=t;return e}))-n}function I(t){const{anchorNode:e,focusNode:n,anchorOffset:r,focusOffset:o}=t;N(),N();const i=e.compareDocumentPosition(n);return!(i&e.DOCUMENT_POSITION_PRECEDING)&&(!!(i&e.DOCUMENT_POSITION_FOLLOWING)||(0!==i||r<=o))}function _(t,e,n,r){const o=r.style.zIndex,i=r.style.position,{position:u="static"}=A(r);"static"===u&&(r.style.position="relative"),r.style.zIndex="10000";const c=function(t,e,n){if(t.caretRangeFromPoint)return t.caretRangeFromPoint(e,n);if(!t.caretPositionFromPoint)return null;const r=t.caretPositionFromPoint(e,n);if(!r)return null;const o=t.createRange();return o.setStart(r.offsetNode,r.offset),o.collapse(!0),o}(t,e,n);return r.style.zIndex=o,r.style.position=i,c}function V(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(L(t)&&"number"==typeof t.selectionStart)return t.selectionStart===t.selectionEnd&&(e?0===t.selectionStart:t.value.length===t.selectionStart);if(!t.isContentEditable)return!0;const{ownerDocument:r}=t,{defaultView:o}=r;N();const i=o.getSelection();if(!i||!i.rangeCount)return!1;const u=i.getRangeAt(0),c=u.cloneRange(),a=I(i),s=i.isCollapsed;s||c.collapse(!a);const l=E(c),d=E(u);if(!l||!d)return!1;const f=H(u);if(!s&&f&&f>l.height&&a===e)return!1;const m=j(t)?!e:e,p=t.getBoundingClientRect(),h=m?p.left+1:p.right-1,b=e?p.top+1:p.bottom-1,g=_(r,h,b,t);if(!g)return!1;const y=E(g);if(!y)return!1;const C=e?"top":"bottom",w=m?"left":"right",v=y[C]-d[C],T=y[w]-l[w],O=Math.abs(v)<=1,S=Math.abs(T)<=1;return n?O:O&&S}function F(t,e){return V(t,e)}function B(t,e){return V(t,e,!0)}function U(t,e,n){const{ownerDocument:r}=t,o=j(t)?!e:e,i=t.getBoundingClientRect();void 0===n&&(n=e?i.right-1:i.left+1);return _(r,n,o?i.bottom-1:i.top+1,t)}function z(t,e,n){if(!t)return;if(t.focus(),L(t)){if("number"!=typeof t.selectionStart)return;return void(e?(t.selectionStart=t.value.length,t.selectionEnd=t.value.length):(t.selectionStart=0,t.selectionEnd=0))}if(!t.isContentEditable)return;let r=U(t,e,n);if(!(r&&r.startContainer&&t.contains(r.startContainer)||(t.scrollIntoView(e),r=r=U(t,e,n),r&&r.startContainer&&t.contains(r.startContainer))))return;const{ownerDocument:o}=t,{defaultView:i}=o;N();const u=i.getSelection();N(),u.removeAllRanges(),u.addRange(r)}function q(t,e){return z(t,e,void 0)}function k(t,e,n){return z(t,e,null==n?void 0:n.left)}function X(t,e){N(e.parentNode),e.parentNode.insertBefore(t,e.nextSibling)}function Y(t){N(t.parentNode),t.parentNode.removeChild(t)}function W(t,e){N(t.parentNode),X(e,t.parentNode),Y(t)}function G(t){const e=t.parentNode;for(N();t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}function $(t,e){const n=t.ownerDocument.createElement(e);for(;t.firstChild;)n.appendChild(t.firstChild);return N(t.parentNode),t.parentNode.replaceChild(n,t),n}function J(t,e){N(e.parentNode),e.parentNode.insertBefore(t,e),t.appendChild(e)}function K(t){const{body:e}=document.implementation.createHTMLDocument("");e.innerHTML=t;const n=e.getElementsByTagName("*");let r=n.length;for(;r--;){const t=n[r];if("SCRIPT"===t.tagName)Y(t);else{let e=t.attributes.length;for(;e--;){const{name:n}=t.attributes[e];n.startsWith("on")&&t.removeAttribute(n)}}}return e.innerHTML}function Q(t){t=K(t);const e=document.implementation.createHTMLDocument("");return e.body.innerHTML=t,e.body.textContent||""}function Z(t){switch(t.nodeType){case t.TEXT_NODE:return/^[ \f\n\r\t\v\u00a0]*$/.test(t.nodeValue||"");case t.ELEMENT_NODE:return!t.hasAttributes()&&(!t.hasChildNodes()||Array.from(t.childNodes).every(Z));default:return!0}}const tt={strong:{},em:{},s:{},del:{},ins:{},a:{attributes:["href","target","rel","id"]},code:{},abbr:{attributes:["title"]},sub:{},sup:{},br:{},small:{},q:{attributes:["cite"]},dfn:{attributes:["title"]},data:{attributes:["value"]},time:{attributes:["datetime"]},var:{},samp:{},kbd:{},i:{},b:{},u:{},mark:{},ruby:{},rt:{},rp:{},bdi:{attributes:["dir"]},bdo:{attributes:["dir"]},wbr:{},"#text":{}};Object(s.without)(Object.keys(tt),"#text","br").forEach(t=>{tt[t].children=Object(s.omit)(tt,t)});const et={...tt,audio:{attributes:["src","preload","autoplay","mediagroup","loop","muted"]},canvas:{attributes:["width","height"]},embed:{attributes:["src","type","width","height"]},img:{attributes:["alt","src","srcset","usemap","ismap","width","height"]},object:{attributes:["data","type","name","usemap","form","width","height"]},video:{attributes:["src","poster","preload","autoplay","mediagroup","loop","muted","controls","width","height"]}};function nt(t){return"paste"!==t?et:Object(s.omit)({...et,ins:{children:et.ins.children},del:{children:et.del.children}},["u","abbr","data","time","wbr","bdi","bdo"])}function rt(t){const e=t.nodeName.toLowerCase();return nt().hasOwnProperty(e)||"span"===e}function ot(t){const e=t.nodeName.toLowerCase();return tt.hasOwnProperty(e)||"span"===e}function it(t,e,n){const r=document.implementation.createHTMLDocument("");return r.body.innerHTML=t,function t(e,n,r,o){Array.from(e).forEach(e=>{var i,u;const c=e.nodeName.toLowerCase();if(r.hasOwnProperty(c)&&(!r[c].isMatch||null!==(i=(u=r[c]).isMatch)&&void 0!==i&&i.call(u,e))){if(function(t){return!!t&&t.nodeType===t.ELEMENT_NODE}(e)){const{attributes:i=[],classes:u=[],children:a,require:l=[],allowEmpty:d}=r[c];if(a&&!d&&Z(e))return void Y(e);if(e.hasAttributes()&&(Array.from(e.attributes).forEach(t=>{let{name:n}=t;"class"===n||Object(s.includes)(i,n)||e.removeAttribute(n)}),e.classList&&e.classList.length)){const t=u.map(t=>"string"==typeof t?e=>e===t:t instanceof RegExp?e=>t.test(e):s.noop);Array.from(e.classList).forEach(n=>{t.some(t=>t(n))||e.classList.remove(n)}),e.classList.length||e.removeAttribute("class")}if(e.hasChildNodes()){if("*"===a)return;if(a)l.length&&!e.querySelector(l.join(","))?(t(e.childNodes,n,r,o),G(e)):e.parentNode&&"BODY"===e.parentNode.nodeName&&rt(e)?(t(e.childNodes,n,r,o),Array.from(e.childNodes).some(t=>!rt(t))&&G(e)):t(e.childNodes,n,a,o);else for(;e.firstChild;)Y(e.firstChild)}}}else t(e.childNodes,n,r,o),o&&!rt(e)&&e.nextElementSibling&&X(n.createElement("br"),e),G(e)})}(r.body.childNodes,r,e,n),r.body.innerHTML}function ut(t){const e=Array.from(t.files);return Array.from(t.items).forEach(t=>{const n=t.getAsFile();n&&!e.find(t=>{let{name:e,type:r,size:o}=t;return e===n.name&&r===n.type&&o===n.size})&&e.push(n)}),e}const ct={focusable:r,tabbable:o}},YLtl:function(t,e){t.exports=window.lodash}});