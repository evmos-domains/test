(self.webpackChunkens_app=self.webpackChunkens_app||[]).push([[604],{4652:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r,a=n(33032),i=n(23430),o=n(17186),c=n(84322),s=n.n(c),l=n(50390),u=n(89743),p=n(68476),f=n(48114),d=n(19840),m=n(41874),h=n(3038),v=n(62559),y=function(e){var t=e.singleName,n=e.searchTerm,r=(0,u.a)(h.iG,{name:n}),a=r.data.favourites,i=r.loading;return(0,v.jsx)(m.Z,{loading:i,domain:t,isFavourite:t&&a&&a.filter((function(e){return e.name===t.name})).length>0})},g=function(e){var t=e.searchTerm,n=(0,u.a)(h.yD,{variables:{name:t}}),r=n.data,a=n.loading,i=n.error;if(a||!r)return null;if(i)return console.error(i),null;var o=r.singleName;return(0,v.jsx)(y,{singleName:o,searchTerm:t})},b=n(78855),O=n(83078),j=n(2479),x=n(34690),E=(0,p.Ps)(r||(r=(0,o.Z)(["\n  query getResultsContainer {\n    isENSReady @client\n  }\n"]))),w=function(e){e.searchDomain;var t=e.match,n=(0,u.a)(E).data.isENSReady,r=t.params.searchTerm,o=(0,j.k6)(),c=r.toLowerCase();o&&c!==r&&o.push("/search/".concat(c));var p=function(e,t){var n=(0,l.useState)([]),r=(0,i.Z)(n,2),o=r[0],c=r[1],u=(0,l.useState)(null),p=(0,i.Z)(u,2),f=p[0],d=p[1];return(0,l.useEffect)((function(){var n=function(){var t=(0,a.Z)(s().mark((function t(){var n,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c([]),r=1===e.split(".").length?e+".evmos":e,t.next=4,(0,b.ev)(r);case 4:a=t.sent,["unsupported","invalid","short"].includes(a)||(n=(0,b.Ol)(r),d(n)),document.title="Evmos Domains Search: ".concat(r),"unsupported"===a?c(["unsupported"]):"short"===a?c(["tooShort"]):"invalid"===a&&c(["domainMalformed"]);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t&&n()}),[e,t]),{errors:o,parsed:f}}(r,n),m=p.errors,h=p.parsed;return n?"tooShort"===m[0]?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(O.Z,{errors:m,searchTerm:r})}):m.length>0?(0,v.jsx)(O.Z,{errors:m,searchTerm:r}):h?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x.L,{children:(0,v.jsx)(x.Qx,{})}),(0,v.jsx)(d.H2,{children:(0,v.jsx)(f.c,{i18nKey:"singleName.search.title",children:"Names"})}),(0,v.jsx)(g,{searchTerm:h})]}):"":(0,v.jsx)("div",{children:"Loading"})}},48114:function(e,t,n){"use strict";n.d(t,{c:function(){return N}});var r=n(45987),a=n(71002),i=n(4942),o=n(50390),c=n(45346),s=n.n(c),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function u(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(s()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(l),i=null;null!==(i=a.exec(e));)if(i[0].trim())if(i[1]){var o=i[1].trim(),c=[o,""];o.indexOf("=")>-1&&(c=o.split("=")),t.attrs[c[0]]=c[1],a.lastIndex--}else i[2]&&(t.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return t}var p=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,f=/^\s*$/,d=Object.create(null);function m(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(m,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var h={parse:function(e,t){t||(t={}),t.components||(t.components=d);var n,r=[],a=[],i=-1,o=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(p,(function(c,s){if(o){if(c!=="</"+n.name+">")return;o=!1}var l,p="/"!==c.charAt(1),d=c.startsWith("\x3c!--"),m=s+c.length,h=e.charAt(m);if(d){var v=u(c);return i<0?(r.push(v),r):((l=a[i]).children.push(v),r)}if(p&&(i++,"tag"===(n=u(c)).type&&t.components[n.name]&&(n.type="component",o=!0),n.voidElement||o||!h||"<"===h||n.children.push({type:"text",content:e.slice(m,e.indexOf("<",m))}),0===i&&r.push(n),(l=a[i-1])&&l.children.push(n),a[i]=n),(!p||n.voidElement)&&(i>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(i--,n=-1===i?r:a[i]),!o&&"<"!==h&&h)){l=-1===i?r:a[i].children;var y=e.indexOf("<",m),g=e.slice(m,-1===y?void 0:y);f.test(g)&&(g=" "),(y>-1&&i+l.length>=0||" "!==g)&&l.push({type:"text",content:g})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+m("",t)}),"")}},v=h,y=n(15750),g=n(56454),b=["format"],O=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function w(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function Z(e){return Array.isArray(e)?e:[e]}function k(e,t){if(!e)return"";var n="",i=Z(e),c=t.transKeepBasicHtmlNodesFor||[];return i.forEach((function(e,i){if("string"===typeof e)n+="".concat(e);else if(o.isValidElement(e)){var s=Object.keys(e.props).length,l=c.indexOf(e.type)>-1,u=e.props.children;if(!u&&l&&0===s)n+="<".concat(e.type,"/>");else if(u||l&&0===s)if(e.props.i18nIsDynamicList)n+="<".concat(i,"></").concat(i,">");else if(l&&1===s&&"string"===typeof u)n+="<".concat(e.type,">").concat(u,"</").concat(e.type,">");else{var p=k(u,t);n+="<".concat(i,">").concat(p,"</").concat(i,">")}else n+="<".concat(i,"></").concat(i,">")}else if(null===e)(0,g.ZK)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,a.Z)(e)){var f=e.format,d=(0,r.Z)(e,b),m=Object.keys(d);if(1===m.length){var h=f?"".concat(m[0],", ").concat(f):m[0];n+="{{".concat(h,"}}")}else(0,g.ZK)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else(0,g.ZK)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function P(e,t,n,r,i){if(""===t)return[];var c=r.transKeepBasicHtmlNodesFor||[],s=t&&new RegExp(c.join("|")).test(t);if(!e&&!s)return[t];var l={};!function e(t){Z(t).forEach((function(t){"string"!==typeof t&&(E(t)?e(w(t)):"object"!==(0,a.Z)(t)||o.isValidElement(t)||Object.assign(l,t))}))}(e);var u=v.parse("<0>".concat(t,"</0>")),p=x(x({},l),i);function f(e,t,n){var r=w(e),a=m(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return o.isValidElement(e)}))}(r)&&0===a.length?r:a}function d(e,t,n,r,a){e.dummy&&(e.children=t),n.push(o.cloneElement(e,x(x({},e.props),{},{key:r}),a?void 0:t))}function m(t,i,l){var u=Z(t);return Z(i).reduce((function(t,i,h){var v=i.children&&i.children[0]&&i.children[0].content&&n.services.interpolator.interpolate(i.children[0].content,p,n.language);if("tag"===i.type){var y=u[parseInt(i.name,10)];!y&&1===l.length&&l[0][i.name]&&(y=l[0][i.name]),y||(y={});var g=0!==Object.keys(i.attrs).length?function(e,t){var n=x({},t);return n.props=Object.assign(e.props,t.props),n}({props:i.attrs},y):y,b=o.isValidElement(g),O=b&&E(i,!0)&&!i.voidElement,j=s&&"object"===(0,a.Z)(g)&&g.dummy&&!b,w="object"===(0,a.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"===typeof g){var Z=n.services.interpolator.interpolate(g,p,n.language);t.push(Z)}else if(E(g)||O){d(g,f(g,i,l),t,h)}else if(j){var k=m(u,i.children,l);t.push(o.cloneElement(g,x(x({},g.props),{},{key:h}),k))}else if(Number.isNaN(parseFloat(i.name))){if(w)d(g,f(g,i,l),t,h,i.voidElement);else if(r.transSupportBasicHtmlNodes&&c.indexOf(i.name)>-1)if(i.voidElement)t.push(o.createElement(i.name,{key:"".concat(i.name,"-").concat(h)}));else{var P=m(u,i.children,l);t.push(o.createElement(i.name,{key:"".concat(i.name,"-").concat(h)},P))}else if(i.voidElement)t.push("<".concat(i.name," />"));else{var N=m(u,i.children,l);t.push("<".concat(i.name,">").concat(N,"</").concat(i.name,">"))}}else if("object"!==(0,a.Z)(g)||b)1===i.children.length&&v?t.push(o.cloneElement(g,x(x({},g.props),{},{key:h}),v)):t.push(o.cloneElement(g,x(x({},g.props),{},{key:h})));else{var S=i.children[0]?v:null;S&&t.push(S)}}else if("text"===i.type){var R=r.transWrapTextNodes,T=n.services.interpolator.interpolate(i.content,p,n.language);R?t.push(o.createElement(R,{key:"".concat(i.name,"-").concat(h)},T)):t.push(T)}return t}),[])}return w(m([{dummy:!0,children:e||[]}],u,Z(e||[]))[0])}function N(e){var t=e.children,n=e.count,a=e.parent,i=e.i18nKey,c=e.tOptions,s=void 0===c?{}:c,l=e.values,u=e.defaults,p=e.components,f=e.ns,d=e.i18n,m=e.t,h=(0,r.Z)(e,O),v=(0,o.useContext)(y.OO)||{},b=v.i18n,j=v.defaultNS,E=d||b||(0,y.nI)();if(!E)return(0,g.O4)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var w=m||E.t.bind(E)||function(e){return e},Z=x(x({},(0,y.JP)()),E.options&&E.options.react),N=f||w.ns||j||E.options&&E.options.defaultNS;N="string"===typeof N?[N]:N||["translation"];var S=u||k(t,Z)||Z.transEmptyNodeValue||i,R=Z.hashTransKey,T=i||(R?R(S):S),D=l?s.interpolation:{interpolation:x(x({},s.interpolation),{},{prefix:"#$?",suffix:"?$#"})},K=x(x(x(x({},s),{},{count:n},l),D),{},{defaultValue:S,ns:N}),A=P(p||t,T?w(T,K):S,E,Z,K),C=void 0!==a?a:Z.defaultTransParent;return C?o.createElement(C,h,A):A}},43022:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(4942),a=n(70885),i=n(45987),o=n(50390),c=n(60048),s=n(56454),l=["forwardedRef"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var s=r.forwardedRef,u=(0,i.Z)(r,l),f=(0,c.$)(e,u),d=(0,a.Z)(f,3),m=d[0],h=d[1],v=d[2],y=p(p({},u),{},{t:m,i18n:h,tReady:v});return t.withRef&&s?y.ref=s:!t.withRef&&s&&(y.forwardedRef=s),o.createElement(n,y)}r.displayName="withI18nextTranslation(".concat((0,s.Gf)(n),")"),r.WrappedComponent=n;return t.withRef?o.forwardRef((function(e,t){return o.createElement(r,Object.assign({},e,{forwardedRef:t}))})):r}}},45346:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},45987:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(63366);function a(e,t){if(null==e)return{};var n,a,i=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}}}]);
//# sourceMappingURL=SearchResults.6b9ef358-37efd.chunk.js.map