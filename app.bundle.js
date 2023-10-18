(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),l=new URL(n(937),n.b),d=new URL(n(883),n.b),u=i()(o()),p=s()(l),f=s()(d);u.push([e.id,`@font-face {\n  font-family: "Roboto";\n  src: url(${p});\n}\n@font-face {\n  font-family: "Autography";\n  src: url(${f});\n}\n\n* {\n  font-family: "Roboto", Arial, Helvetica, sans-serif;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\nmain {\n  gap: 1rem;\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  background-color: darkgrey;\n}\nheader {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\nheader > button {\n  color: white;\n  background-color: blue;\n  border: 2px solid black;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n}\naside {\n  background-color: lightgray;\n  display: grid;\n  grid-template-rows: 1fr 6fr;\n}\n.aside-upper {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n.aside-projects {\n  overflow-x: auto;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  justify-self: center;\n}\n.right {\n  background-color: lightgray;\n  display: grid;\n  grid-template-rows: 1fr 6fr;\n}\n.content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.cards {\n  width: 90%;\n  height: 90%;\n  border-radius: 5px;\n  box-shadow: 0 0 10px black;\n  background-color: white;\n}\nfooter {\n  background-color: darkgray;\n  min-height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: auto;\n  font-family: "Autography", Arial, Helvetica, sans-serif;\n  font-weight: bold;\n}\n`,""]);const h=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},883:(e,t,n)=>{e.exports=n.p+"fonts/Autography.otf"},937:(e,t,n)=>{e.exports=n.p+"fonts/Roboto-Regular.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,n(883),n(937);class m{constructor(e,t,n,r,o){this.projectName=e,this.name=t,this.priority=o,this.dueDate=r,this.description=n,this.dateCreated=new Date}}class v{constructor(e,t){this.projectName=e,this.projectDescription=t,this.projectDateCreated=new Date,this.allTodos=[]}createNewTodo(e){let t=new m(this.projectName,e);this.allTodos.push(t)}}function g(e){for(;document.querySelector(".aside-projects").firstChild;)document.querySelector(".aside-projects").removeChild(document.querySelector(".aside-projects").firstChild);e.forEach(((t,n)=>{const r=document.createElement("div"),o=document.createElement("h1"),a=document.createElement("p"),i=document.createElement("div");i.textContent="x",i.addEventListener("click",(()=>{console.log(n),e.splice(n,1),console.log(e),g(e)})),o.textContent=t.projectName,a.textContent=t.projectDescription,r.appendChild(i),r.appendChild(o),r.appendChild(a),document.querySelector(".aside-projects").appendChild(r)}))}const y=[],b=document.querySelector("header button"),x=document.querySelector("header input#project-name");let w=x.value;x.addEventListener("keyup",(()=>{w=x.value}));const j=document.querySelector("header input#project-description");let C=j.value;j.addEventListener("keyup",(()=>{C=j.value})),b.addEventListener("click",(()=>{let e=new v(w,C);y.push(e),function(e,t,n,r){const o=document.createElement("input");document.createElement("button").addEventListener("click",(()=>{undefined.createNewTodo(o.value)}));const a=document.createElement("div");a.textContent=`${e} ${t} ${n}`,document.querySelector(".cards").appendChild(a)}(w,C,e.projectDateCreated),g(y)}))})()})();