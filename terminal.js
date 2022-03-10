(()=>{"use strict";var __webpack_modules__={340:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([e.id,"* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\ninput {\r\n\tpadding: 4px;\r\n\tcolor: #fff;\r\n}\r\n\r\ninput,\r\ninput:active,\r\ninput:focus,\r\ninput:hover {\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.rez {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\theight: 100vh;\r\n}\r\n\r\n.eos-commandline {\r\n\tposition: relative;\r\n\tpadding: 5px;\r\n\tbackground-color: #000;\r\n\tcolor: #fff;\r\n\tfont-family: sans-serif;\r\n\tfont-size: 0.8em;\r\n\tborder-radius: 5px;\r\n\twidth: calc(100% - 20px);\r\n\theight: calc(100vh - 20px);\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: flex-end;\r\n\t-webkit-box-shadow: 0px 3px 13px -6px rgba(0, 0, 0, 0.94);\r\n\t-moz-box-shadow: 0px 3px 13px -6px rgba(0, 0, 0, 0.94);\r\n\tbox-shadow: 0px 3px 13px -6px rgba(0, 0, 0, 0.94);\r\n}\r\n\r\n.eos-commandline-output {\r\n\tdisplay: absolute;\r\n\tz-index: 1;\r\n\r\n\t-ms-overflow-style: none;\r\n\tscrollbar-width: none;\r\n\toverflow-y: scroll;\r\n}\r\n.eos-commandline-output::-webkit-scrollbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.eos-commandline-input-input {\r\n\twidth: 100%;\r\n}\r\n\r\n.eos-commandline-input {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n\theight: 20px;\r\n}\r\n\r\n.eos-commandline-background {\r\n\tposition: absolute;\r\n\tz-index: 0;\r\n\twidth: 545px;\r\n\theight: 89px;\r\n\tleft: calc(50% - 273px);\r\n\ttop: calc(50% - 44px);\r\n\tcolor: #444;\r\n\topacity: 0.4;\r\n}\r\n\r\n.eos-commandline-input-dollar {\r\n\theight: 100%;\r\n\tline-height: 20px;\r\n}\r\n",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=o.base?c[0]+o.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=n(d),_={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(_);else{var m=r(_,o);o.byIndex=i,t.splice(i,0,{identifier:d,updater:m,references:1})}s.push(d)}return s}function r(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=o(e,r),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},464:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function Terminal(containSelector,commands={}){const usedIDBefore={},config={output:{defaultFontSize:"1em",defaultFontFamily:"sans-serif",defaultColor:"#fff",showArrowByDefault:!1},input:{showInput:!1}},newFlowID=()=>{const e=Math.floor(1e8*Math.random());return void 0!==usedIDBefore[e]?newFlowID():e},commandsHistory=[];let currentCommand=0;const flows={},commandParser=e=>{const t=e.split(" ");return{command:t[0],params:t.slice(1)}},logToConsole=(e,{text:t="",styles:n={}}={},o=config.output.showArrowByDefault)=>{const r=document.createElement("div"),a=document.createElement("span");a.style.color=config.output.defaultColor,a.style.fontSize=config.output.defaultFontSize,a.style.fontFamily=config.output.defaultFontFamily;for(const e in n)a.style[e]=n[e];a.innerText=o?`> ${t}`:t,r.appendChild(a),e.appendChild(r),e.scroll(0,e.scrollHeight)},createTemplate=(e,t)=>{const n=document.createElement("div");n.classList.add("eos-commandline"),n.innerHTML='\n      \t\t<div class="eos-commandline-output"></div>\n      \t\t<div class="eos-commandline-input">\n        \t\t<div class="eos-commandline-input-dollar">$</div>\n        \t\t<input class="eos-commandline-input-input" />\n      \t\t</div>\n\t\t\t<div class="eos-commandline-background">\n\t\t\t\t███████╗░█████╗░░██████╗████████╗███████╗██████╗░███╗░░░███╗\n\t\t\t\t██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗████╗░████║\n\t\t\t\t█████╗░░██║░░██║╚█████╗░░░░██║░░░█████╗░░██████╔╝██╔████╔██║\n\t\t\t\t██╔══╝░░██║░░██║░╚═══██╗░░░██║░░░██╔══╝░░██╔══██╗██║╚██╔╝██║\n\t\t\t\t███████╗╚█████╔╝██████╔╝░░░██║░░░███████╗██║░░██║██║░╚═╝░██║\n\t\t\t\t╚══════╝░╚════╝░╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝\n\t\t\t</div>\n    \t';const o=n.querySelector("input"),r=n.querySelector(".eos-commandline-output");o.addEventListener("keydown",(e=>{const n=e.key.toLowerCase();"enter"===n?(t(o.value,((...e)=>{logToConsole(r,...e)})),o.value=""):"arrowup"===n&&void 0!==commandsHistory[currentCommand]&&(o.value=commandsHistory[currentCommand--],o.selectionStart=o.value.length)})),e.innerHTML=null,e.appendChild(n)};this.node=document.querySelector(containSelector),void 0===commands["--help"]&&(commands["--help"]=({log:e})=>{e({text:`commands: ${Object.keys(commands).filter((e=>"--help"!==e)).join(", ")}`})}),void 0===commands.clear&&(commands.clear=({log:e},t)=>{const n=t.includes("*")||t.includes("-o"),o=t.includes("*")||t.includes("-f");if(n&&(this.output.innerHTML=null),o)for(let e in this.flows)this.flows[e].stop()}),createTemplate(this.node,((command,showRez)=>{config.input.showInput&&showRez({text:`< ${command}`},!1),commandsHistory.push(command),currentCommand=commandsHistory.length-1;const parsed=commandParser(command);if(void 0!==commands[parsed.command]){const e={log:showRez,closeProcess:null},t=commands[parsed.command](e,parsed.params);if(void 0!==t&&void 0!==t.isProcess){const n=newFlowID();flows[n]={processName:t.name,command:parsed.command,stop:()=>{t.stop(),delete flows[n]},id:n},e.closeProcess=flows[n].stop}else e.log=null}else{const styles={};try{showRez({text:eval(command),styles})}catch(e){showRez({text:e,styles:{color:"#f00"}})}}})),this.output=this.node.querySelector(".eos-commandline-output"),this.input=this.node.querySelector(".eos-commandline-input-input"),this.flows=flows,this.log=(...e)=>{logToConsole(this.output,...e)},this.config=config,this.commands=commands}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=Terminal}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{var e=__webpack_require__(464),t=__webpack_require__(379),n=__webpack_require__.n(t),o=__webpack_require__(795),r=__webpack_require__.n(o),a=__webpack_require__(569),s=__webpack_require__.n(a),i=__webpack_require__(565),c=__webpack_require__.n(i),l=__webpack_require__(216),u=__webpack_require__.n(l),d=__webpack_require__(589),p=__webpack_require__.n(d),_=__webpack_require__(340),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u();n()(_.Z,m);_.Z&&_.Z.locals&&_.Z.locals;const f={};let h=!1;function v(e,t,n){h||n.forEach((n=>{void 0===f[n]&&(f[n]=1),fetch(n,{mode:"no-cors"}).then((o=>{h||(t({text:`[${f[n]}] ${n} -> ok - ${o.ok}, status: ${o.status}`}),setTimeout((()=>{v(e,t,[n])}),e.delay||0))})).catch((()=>{h||(t({text:`[${f[n]}] ${n} -> down!`,styles:{color:"#0f0"}}),setTimeout((()=>{v(e,t,[n])}),1e4))})).finally((()=>{f[n]++}))}))}new e.Z(".rez",{r(e,[t=!1]){location.reload(Boolean(t))},ddos({log:e},t){const n=[],o=t.filter((e=>e[0]!==e[1]||"-"!==e[1]||(n.push({flag:e.replace(/^\-\-|:[0-9]+/g,""),value:+e.replace(/^\-\-[a-z]*:/i,"")}),!1)));if(n.find((e=>"stop"===e.flag)))return h=!0,void e({text:"ddos stoped"});h=!1;const r={delay:0},a={delay(e){r.delay=e}};n.forEach((e=>void 0!==a[e.flag]?a[e.flag](e.value):null)),v(r,e,o)}}).input.focus()})()})();