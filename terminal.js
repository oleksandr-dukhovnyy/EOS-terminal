(()=>{"use strict";var __webpack_modules__={340:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),s=n(645),a=n.n(s)()(o());a.push([e.id,"* {\r\n  box-sizing: border-box;\r\n}\r\n\r\ninput {\r\n  padding: 4px;\r\n  color: #fff;\r\n}\r\n\r\ninput,\r\ninput:active,\r\ninput:focus,\r\ninput:hover {\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.rez {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  min-width: 570px;\r\n  height: 100vh;\r\n  margin: 0 7px;\r\n}\r\n\r\n.eos-commandline {\r\n  letter-spacing: 1px;\r\n  position: relative;\r\n  padding: 7px;\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-family: sans-serif;\r\n  font-size: 0.9em;\r\n  border-radius: 5px;\r\n  width: calc(100% - 34px);\r\n  height: calc(100vh - 34px);\r\n  min-width: 570px;\r\n  min-height: 130px;\r\n  max-width: 1000px;\r\n  max-height: 560px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  -webkit-box-shadow: 0px 3px 13px -6px rgba(0, 0, 0, 0.94);\r\n  -moz-box-shadow: 0px 3px 13px -6px rgba(0, 0, 0, 0.94);\r\n  box-shadow: 0px 3px 13px -6px rgba(0, 0, 0, 0.94);\r\n}\r\n\r\n.eos-commandline-output {\r\n  display: absolute;\r\n  z-index: 1;\r\n\r\n  -ms-overflow-style: none;\r\n  scrollbar-width: none;\r\n  overflow-y: scroll;\r\n  scroll-behavior: smooth;\r\n}\r\n.eos-commandline-output::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.eos-commandline-input-input {\r\n  width: 100%;\r\n}\r\n\r\n.eos-commandline-input {\r\n  height: 20px;\r\n  display: grid;\r\n  grid-template-columns: max-content 1fr;\r\n  grid-gap: 0px;\r\n}\r\n\r\n.eos-commandline-background {\r\n  letter-spacing: -1px;\r\n  position: absolute;\r\n  z-index: 0;\r\n  width: 545px;\r\n  height: 89px;\r\n  left: calc(50% - 273px);\r\n  top: calc(50% - 44px);\r\n  color: #444;\r\n  opacity: 0.4;\r\n}\r\n\r\n.eos-commandline-input-user {\r\n  padding: 4px 0;\r\n  color: #a6d626;\r\n}\r\n\r\n.eos-commandline-input-user-dollar {\r\n  height: 100%;\r\n  line-height: 20px;\r\n  color: #f65bff;\r\n}\r\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},a=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],d=s[c]||0,u="".concat(c," ").concat(d);s[c]=d+1;var _=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==_)t[_].references++,t[_].updater(p);else{var m=o(p,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=n(s[a]);t[i].references--}for(var l=r(e,o),c=0;c<s.length;c++){var d=n(s[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},236:(e,t,n)=>{n.d(t,{Z:()=>s});const r=(e,t)=>({name:e.replace(new RegExp(...t.input.getFlagName),""),value:e.replace(new RegExp(...t.input.getFlagValue),"")}),o=(e,t)=>{const n=[];return{flags:n,params:e.filter((e=>{const o=new RegExp(...t.input.flagMask).test(e);return o&&n.push(r(e,t)),!o&&""!==e}))}},s=(e,t)=>{const n=e.split(" "),{params:r,flags:s}=o(n.slice(1),t);return{command:n[0],params:r,flags:s}}},870:(e,t,n)=>{n.d(t,{Z:()=>r});const r={version:"v1.0.0",windowKey:"EOSTerm"}},501:(e,t,n)=>{n.d(t,{Z:()=>r});const r=({node:e,callback:t,commandsHistory:n=[],currentCommand:r={value:0},userName:o="",logToConsole:s=(()=>{}),config:a})=>{const i=document.createElement("div");i.classList.add("eos-commandline"),i.innerHTML=`\n\t\t  <div class="eos-commandline-output"></div>\n\t\t  <div class="eos-commandline-input">\n\t\t\t<div class="eos-commandline-input-user"></div>\n\t\t\t<input class="eos-commandline-input-input" />\n\t\t  </div>\n\t\t<div class="eos-commandline-background">\n\t\t\t███████╗░█████╗░░██████╗████████╗███████╗██████╗░███╗░░░███╗\n\t\t\t██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗████╗░████║\n\t\t\t█████╗░░██║░░██║╚█████╗░░░░██║░░░█████╗░░██████╔╝██╔████╔██║\n\t\t\t██╔══╝░░██║░░██║░╚═══██╗░░░██║░░░██╔══╝░░██╔══██╗██║╚██╔╝██║\n\t\t\t███████╗╚█████╔╝██████╔╝░░░██║░░░███████╗██║░░██║██║░╚═╝░██║\n\t\t\t╚══════╝░╚════╝░╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝\n\t\t\t<div style="text-align: right; font-style: italic;">${a.globalConfig.version}</div>\n\t\t</div>\n\t`;const l=i.querySelector("input"),c=i.querySelector(".eos-commandline-output"),d=i.querySelector(".eos-commandline-input-user");d.innerText=o;const u=document.createElement("span");u.innerText="$",u.classList.add("eos-commandline-input-user-dollar"),d.appendChild(u),l.addEventListener("keydown",(e=>{const o=e.key.toLowerCase();"enter"===o?(t(l.value,((...e)=>{s(c,a,...e)})),l.value=""):"arrowup"===o&&void 0!==n[r.value]&&(l.value=n[r.value--],l.selectionStart=l.value.length)})),e.innerHTML=null,e.appendChild(i)}},84:(e,t,n)=>{function r({flags:e,commandLine:t}){if(e.hasFlag("c")){const n=+e.getFlag("c").value||1/0;[...t.output.children].forEach(((e,t)=>t<n?e.remove():null))}else t.output.innerHTML=null}function o({log:e,commandLine:t}){e({text:`commands: ${Object.keys(t.commands).filter((e=>"help"!==e)).sort().join(", ")}`})}n.r(t),n.d(t,{clear:()=>r,help:()=>o,version:()=>s});const s=({log:e})=>e({text:'EOSTerm version: "1.0.0"'})},921:(e,t,n)=>{n.d(t,{Z:()=>r});const r=function(e){return{flags:e,getFlag:t=>e.find((e=>e.name===t)),hasFlag:t=>Boolean(e.find((e=>e.name===t))),forEach:e.forEach}}},464:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _commandParser_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(236),_createTemplate_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(501),_flagController_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(921),_defaultUtils_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(84),_config_term_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(870);const terms={};let id=0;const getFreeTermId=()=>id++;function Terminal(containSelector,commands={},userName=""){const config={output:{defaultFontSize:"1em",defaultFontFamily:"sans-serif",defaultColor:"#fff",showArrowByDefault:!1,maxAliveLogRows:150},input:{showInput:!1,flagMask:["^--[a-z]+[:a-z0-9]{0,}?$","i"],getFlagName:["--|:[a-z0-9]*$","gi"],getFlagValue:["--[a-z]*:?","i"]},globalConfig:_config_term_js__WEBPACK_IMPORTED_MODULE_0__.Z},commandsHistory=[],currentCommand={value:0},logToConsole=(e,t,{text:n="",styles:r={}}={},o=t.output.showArrowByDefault)=>{const s=document.createElement("div"),a=document.createElement("span");a.style.color=t.output.defaultColor,a.style.fontSize=t.output.defaultFontSize,a.style.fontFamily=t.output.defaultFontFamily;for(const e in r)a.style[e]=r[e];a.innerText=o?`> ${n}`:n,s.appendChild(a),e.children.length+1>t.output.maxAliveLogRows&&e.children[0].remove(),e.appendChild(s),e.scroll(0,e.scrollHeight)};for(let e in _defaultUtils_js__WEBPACK_IMPORTED_MODULE_1__)void 0===commands[e]&&(commands[e]=_defaultUtils_js__WEBPACK_IMPORTED_MODULE_1__[e]);const exec=(command,showRez)=>{config.input.showInput&&showRez({text:`< ${command}`},!1),commandsHistory.push(command),currentCommand.value=commandsHistory.length-1;const parsed=(0,_commandParser_js__WEBPACK_IMPORTED_MODULE_2__.Z)(command,config);if(void 0!==commands[parsed.command]){const e={log:showRez,closeProcess:null,flags:(0,_flagController_js__WEBPACK_IMPORTED_MODULE_3__.Z)(parsed.flags),exec:e=>exec(e,showRez),source:command,commandLine:this};try{commands[parsed.command](e,parsed.params)}catch(e){showRez({text:`[command error]: "${e}"`,styles:{color:"#f00"}})}}else try{const styles={};showRez({text:eval(command)},styles)}catch(e){showRez({text:`[eval err]: "${e}"`,styles:{color:"#f00"}})}};this.node=document.querySelector(containSelector),(0,_createTemplate_js__WEBPACK_IMPORTED_MODULE_4__.Z)({node:this.node,callback:exec,commandsHistory,currentCommand,userName,config,logToConsole}),this.output=this.node.querySelector(".eos-commandline-output"),this.input=this.node.querySelector(".eos-commandline-input-input"),this.log=(...e)=>{logToConsole(this.output,config,...e)},this.config=config,this.commands=commands,this.exec=e=>exec(e,((...e)=>{logToConsole(this.output,config,...e)})),this.id=getFreeTermId(),terms[this.id]=this}window[_config_term_js__WEBPACK_IMPORTED_MODULE_0__.Z.windowKey]={use(e,t){const n=terms[e];if(void 0!==n)if(void 0===n.commands[t.name])n.commands[t.name]=t.function;else{const e=`cannot set a new util. Name (${t.name}) alredy exist!`;console.error(e),n.exec(`styles.color = '#f00'; '${e}'`)}else{const t=`cannot find terminal with id (${e})`;console.error(t),n.exec(`styles.color = '#f00'; '${t}'`)}}};const __WEBPACK_DEFAULT_EXPORT__=Terminal}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};(()=>{var util_namespaceObject={};__webpack_require__.r(util_namespaceObject),__webpack_require__.d(util_namespaceObject,{cd:()=>cd,ls:()=>ls,mkdir:()=>mkdir,showState:()=>showState,touch:()=>touch});var terminal_core=__webpack_require__(464),injectStylesIntoStyleTag=__webpack_require__(379),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__(795),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__(569),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__(565),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__(216),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__(589),styleTagTransform_default=__webpack_require__.n(styleTagTransform),css=__webpack_require__(340),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();var update=injectStylesIntoStyleTag_default()(css.Z,options);const src_css=css.Z&&css.Z.locals?css.Z.locals:void 0,reload=(e,[t=!1])=>location.reload(Boolean(t)),state={stats:{requests:{}},stoped:!1},testStop=e=>{state.stoped=!0,e({text:"testing was stopped"})},testContinue=()=>state.stoped=!1,request=(e,t,n)=>{fetch(e,{mode:"no-cors"}).then(t).catch(n).finally((()=>{state.stats.requests[e]++}))};function test(e,t,n){state.stoped||n.forEach((n=>{void 0===state.stats.requests[n]&&(state.stats.requests[n]=1),request(n,(r=>{state.stoped||(t({text:`[${state.stats.requests[n]}] ${n} -> ok - ${r.ok}, status: ${r.status}`}),setTimeout((()=>{test(e,t,[n])}),e.delay||0))}),(()=>{state.stoped||(t({text:`[${state.stats.requests[n]}] ${n} -> down!`,styles:{color:"#0f0"}}),setTimeout((()=>{test(e,t,[n])}),1e4))}))}))}function testForce(e,t,n){state.stoped||(n.forEach((n=>{void 0===state.stats.requests[n]&&(state.stats.requests[n]=1);const r=setInterval((()=>{request(n,(e=>{if(state.stoped)return clearInterval(r);t({text:`[${state.stats.requests[n]}] ${n} -> ok - ${e.ok}, status: ${e.status}`})}),(()=>{if(state.stoped)return clearInterval(r);t({text:`[${state.stats.requests[n]}] ${n} -> down!`,styles:{color:"#0f0"}})}))}),e.delay)})),t({text:"testForce"}))}const utils_test=({log:e,flags:t},n)=>{if(t.hasFlag("stop"))return testStop(e);if(testContinue(),!n.length)return e({text:"please, enter urls"});const r={delay:+t.getFlag("delay")?.value||0},o=t.flags.length?`with flags: [${t.flags.map((e=>e.value?`${e.name}: ${e.value}`:e.name))}]`:"without flags";e({text:`test for ${n.length} urls is started ${o}`,styles:{color:"#00e000"}}),t.hasFlag("force")?(e({text:"test mode: wait timeout (--delay:[delay] flag) -> request",styles:{color:"#4040ff"}}),testForce(r,e,n)):(e({text:"test mode: request -> wait response -> wait timeout (--delay:[delay] flag) -> request",styles:{color:"#4040ff"}}),test(r,e,n))},fs_fs={read:e=>new Promise((t=>{t(localStorage.getItem(e))})),write:(e,t)=>new Promise(((n,r)=>{const o=new FileReader;o.onload=()=>{n(localStorage.setItem(e,o.result))},o.onerror=r,o.readAsText(t)}))},install_fs=null,setupFiles_setupFiles=()=>{for(let key in localStorage)/root\/utils\/.*/.test(key)&&fs.read(key).then(eval)},install_setupFiles=null,setup=()=>{setupFiles()},install=(e,t)=>{if(!t)return e({text:'set a "--name:[UTILNAME]" flag',styles:{color:"#f00"}});e({text:"install start..."});const n=document.createElement("input");n.setAttribute("type","file"),n.style.opacity=0,n.style.position="absolute",n.addEventListener("change",(()=>{fs.write(`root/utils/${t.value}.js`,n.files[0]).then((()=>{e({text:`installation "${t.value}" was finished!`,styles:{color:"#0f0"}})})).catch((t=>{e({text:`install error: "${t}"`,styles:{color:"#0f0"}})})).finally((()=>{n.remove(),setupFiles()}))})),document.querySelector("body").appendChild(n),n.click()},uninstall=()=>{},app=({log:e,flags:t,commandLine:n})=>{e({text:"App manager in development. Coming soon... 😗"})},install_app=app,logs={warn({msg:e="unnamed warn"}){console.warn(e)},error({msg:e="unnamed warn"}){console.error(e)}},normalize=e=>e.replace(/^\/*|\/*$/g,"").replace(/\/{2,}/,"/").split("/").join("/"),pathParser={getName:e=>normalize(e).split("/").at(-1),back(e){const t=normalize(e).split("/");return t.length<2?null:t.slice(0,-1).join("/")},join:(e,t)=>(e=normalize(e).split("/"),t=normalize(t).split("/"),[...e,...t].join("/")),resolve(e,t){const n=e.split("/"),r=normalize(t).split("/");let o=[];return r.forEach((e=>{switch(e){case"~":o=["root"];break;case"..":o.pop();break;case".":n.map((e=>o.push(e)));break;default:o.push(e)}})),o.length||o.push("root"),normalize(o.join("/"))},sliceName(e){e=normalize(e);const t=this.getName(e),n=normalize(e).split("/");return n.pop(),[t,n.join("/")]},normalize},checkFind=(e,t,n,r,o=(()=>{}))=>{const s=e[t];if(s){if(0!==s.type){const e=`item via parentPATH === "${t}" is not a folder, is a ${s.type}`;return logs.error({msg:e}),{status:0,msg:e}}if(r!==(void 0!==fsIndex.fs[`${t}/${n}`])){const e=`item via path "${t}/${n}" ${r?"is not defined":"already exists"}`;return logs.error({msg:e}),{status:0,msg:e}}return o(s)}{const e=`folder via parentPATH === "${t}" is not defined`;return logs.error({msg:e}),{status:0,msg:e}}},normalizePath=pathParser.normalize,fsIndex={fs:{root:{type:0,childs:[]}}},indexes_fs={addFile(e,t=!0){const[n,r]=pathParser.sliceName(e),o=()=>checkFind(fsIndex.fs,r,n,!1,(e=>(fsIndex.fs[`${r}/${n}`]={type:1},e.childs.push(n),e.childs.sort(),{status:1})));return t?o():o},addFolder(e,t=!0){const[n,r]=pathParser.sliceName(e),o=()=>checkFind(fsIndex.fs,r,n,!1,(e=>(fsIndex.fs[`${r}/${n}`]={type:0,childs:[]},e.childs.push(n),{status:1})));return t?o():o},removeFile(e,t=!0){const n=pathParser.getName(e);e=normalizePath(e);const r=()=>checkFind(fsIndex.fs,e,n,!0,(t=>(delete fsIndex.fs[`${e}/${n}`],t.childs.splice(t.childs.indexOf(n),1),{status:1})));return t?r():r},removeFolder(e,t=!0){const n=pathParser.getName(e);e=normalizePath(e);const r=()=>checkFind(fsIndex.fs,e,n,!0,(t=>(delete fsIndex.fs[`${e}/${n}`],t.childs.splice(t.childs.indexOf(n),1),{status:1})));return t?r():r},get(e){const t=fsIndex.fs[normalizePath(e)];return void 0!==t?{body:t,status:1}:{msg:`Not found by path [${e}]`,status:0}},getFolder(e){e=normalizePath(e);const t=fsIndex.fs[e];if(void 0!==t)return{body:{...t,name:e,childs:t.childs.map((t=>({name:t,type:fsIndex.fs[`${e}/${t}`].type})))},status:1};{const t=`folder via path === "${e}" is not defined`;return logs.error({msg:t}),{status:0,msg:t}}},pasteIndex(e){const t="string"==typeof e?e:JSON.stringify(e);return fsIndex.fs=JSON.parse(t),{status:1}}};indexes_fs.pasteIndex({root:{type:0,childs:["some.exe","else"]},"root/some.exe":{type:1},"root/else":{type:0,childs:["item.js"]},"root/else/item.js":{type:1}});const indexes=indexes_fs,getTools_state={config:{},db:null},tools={file:{read:e=>new Promise(((t,n)=>{const r=indexes.get(e);r.status?t(r.body):n(r)})),write:e=>new Promise(((t,n)=>{const r=indexes.addFile(e);r.status?t(r.body):n(r)})),delete:e=>new Promise(((t,n)=>{const r=indexes.removeFile(e);r.status?t(r.body):n(r)}))},folder:{read:e=>new Promise(((t,n)=>{const r=indexes.getFolder(e);r.status?t(r.body):n(r)})),write:e=>new Promise(((t,n)=>{const r=indexes.addFolder(e);r.status?t(r.body):n(r)})),delete:e=>new Promise(((t,n)=>{const r=indexes.removeFolder(e);r.status?t(r.body):n(r)}))}},API={};for(let e in tools){API[e]={};for(let t in tools[e])API[e][t]=n=>{if(!n||"string"!=typeof n){const e="invalid path!";throw console.error(e,n),e}return tools[e][t](n)}}const getTools=(e,t)=>(getTools_state.db=e,getTools_state.config=t,API),init=(e={})=>new Promise(((t,n)=>{const r=indexedDB.open("files",1),o=n=>{t(getTools(n.target.result,e))};r.addEventListener("success",o),r.addEventListener("upgradeneeded",o),r.addEventListener("error",(e=>{console.error("[request]: error",e),n(e)}))})),fileSystem=e=>new Promise(((t,n)=>{init(e).then(t).catch(n)}));let FS;fileSystem().then((e=>(FS=e,util_state.inited=!0))).catch((e=>{console.log("FS init error:",e)}));const util_state={current:"root",inited:!1,queue:[]},getErrorer=(e,t)=>{e({text:`error -> [${t.msg||"unknow"}]`,styles:{color:"#f00"}})};function showState(){console.log(util_state,FS)}function ls({log:e}){FS.folder.read(util_state.current).then((t=>{e({text:`📁 ${util_state.current}`,styles:{color:"#fc20ff"}}),t.childs.forEach((t=>{e({text:`|-- ${t.type?"🗋":"📁"} ${t.name}`,styles:{color:"#42ff20"}})}))})).catch((t=>getErrorer(e,t)))}function cd({log:e},[t=""]){let n=pathParser.resolve(util_state.current,t);FS.folder.read(n).then((()=>{util_state.current=n,e({text:`📁 ${n}`,styles:{color:"#fc20ff"}})})).catch((t=>getErrorer(e,t)))}function mkdir({log:e},[t]){t?FS.folder.write(pathParser.join(util_state.current,t)).then((()=>{e({text:"mkdir: ok",color:"#0f0"})})).catch((t=>getErrorer(e,t))):e({text:"Missing required param [0: name]",styles:{color:"#f00"}})}function touch({log:e},[t]){t?FS.file.write(pathParser.join(util_state.current,t)).then((()=>{e({text:"touch: ok",color:"#0f0"})})).catch((t=>getErrorer(e,t))):e({text:"Missing required param [0: name]",styles:{color:"#f00"}})}const locales={ru:'\n\t\tПеред вами - простой терминал, который обслуживает файловую систему.\n\t\tПрямо сейчас я ещё работаю над файловой системой, но некоторые команды (в силу выбранной архитектуры) уже доступны.\n\t\tВот работающие команды: "cd [path]", "ls", "mkdir [name]", "touch [name]".\n\t\tВ файлы нельзя сейчас ничего записать, а созданные папки и их содержимое пропадают при перезагрузке страницы.\n\t\tКогда я закончу работу над файловой системой - всё заработает привычным для вас образом 😙\n\t',en:'\n\t\tBefore you is a simple terminal that serves the file system.\n\t\tRight now I\'m still working on the file system, but some commands (due to the chosen architecture) are already available.\n\t\tHere are the commands that work: "cd [path]", "ls", "mkdir [name]", "touch [name]".\n\t\tNothing can be written to the files now, and the created folders and their contents disappear when the page is reloaded.\n\t\tWhen I finish working on the file system, everything will work in the usual way for you 😙\n\t'},info=({log:e},[t="en"])=>{e({text:locales[t]||locales.en})},term=new terminal_core.Z(".rez",{reload,test:utils_test,app:install_app,info,...util_namespaceObject},"root");term.log({text:"#StandWithUkraine",styles:{fontWeight:"700",color:"#00f",fontSize:"1em",backgroundColor:"#ff0",padding:"5px",display:"block",width:"max-content",letterSpacing:"0px"}}),term.log({text:"support Ukraine: https://www.comebackalive.in.ua/donate/",styles:{color:"#6767ff",padding:"5px 0",display:"block"}}),term.config.input.showInput=!0,term.input.focus()})()})();