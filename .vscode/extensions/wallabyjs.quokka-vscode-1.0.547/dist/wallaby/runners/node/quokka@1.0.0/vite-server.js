/*
 * Wallaby.js - v1.0.1433
 * https://wallabyjs.com
 * Copyright (c) 2014-2023 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
function start(_a){var localProjectRoot=_a.localProjectRoot,vitePath=_a.vitePath,viteNodeServerPath=_a.viteNodeServerPath,quokkaSettingsDirPath=_a.quokkaSettingsDirPath,quokkaTempDirPath=_a.quokkaTempDirPath;return __awaiter(this,void 0,void 0,function(){var createServer,ViteNodeServer,resolve,fs;return __generator(this,function(_b){switch(_b.label){case 0:return[4,eval("import(vitePath)")];case 1:return createServer=_b.sent().createServer,[4,eval("import(viteNodeServerPath)")];case 2:return ViteNodeServer=_b.sent().ViteNodeServer,[4,eval("import('resolve')")];case 3:return resolve=_b.sent()["default"].sync,[4,eval("import('fs')")];case 4:return fs=_b.sent(),[4,createServer({mode:"development",root:localProjectRoot,build:{sourcemap:!0},optimizeDeps:{disabled:!0},logLevel:"error",plugins:[{name:"quokka:adjust-config",enforce:"pre",config:function(e){e.esbuild!==!1&&(e.esbuild=e.esbuild||{},e.esbuild.sourcemap=!0,e.esbuild.legalComments="none")}},{name:"quokka:preprocessing",enforce:"pre",load:function(e){if(e===filePath)return content}},{name:"quokka:postprocessing",enforce:"post",transform:function(e,t){return __awaiter(this,void 0,void 0,function(){var i;return __generator(this,function(r){switch(r.label){case 0:return t!==filePath?[2,{code:e}]:(i={code:e,map:this._getCombinedSourcemap()},[4,externalRequest("transform",{transformed:i,fileName:t})]);case 1:return[2,r.sent()]}})})}},{name:"quokka:resolveId",resolveId:function(e,t,i){return __awaiter(this,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:return/\0/.test(e)?[2,null]:[4,this.resolve(e,t,__assign({skipSelf:!0},i))];case 1:if(r=n.sent())return[2];try{return[2,resolve(e,{basedir:quokkaTempDirPath})]}catch(s){}try{return[2,resolve(e,{basedir:quokkaSettingsDirPath})]}catch(s){}return[2]}})})}}]})];case 5:return vite=_b.sent(),[4,vite.pluginContainer.buildStart({})];case 6:return _b.sent(),node=new ViteNodeServer(vite,{sourcemap:!0}),[2,{root:vite.config.root,base:vite.config.base}]}})})}function reset(e){filePath=e.filePath,content=e.content,id=1,pendingPromises={},vite.moduleGraph.invalidateAll(),node.fetchCache.clear(),node.fetchPromiseMap.clear()}function externalRequest(e,t){return new Promise(function(i,r){pendingPromises[id]={resolve:i,reject:r},process.send({type:e,id:id,payload:t}),id++})}function resolveId(e){var t=e.id,i=e.importer;return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,node.resolveId(t,i)];case 1:return[2,e.sent()]}})})}function fetchModule(e){var t=e.moduleId;return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,node.fetchModule(t)];case 1:return[2,e.sent()]}})})}var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,i,r){function n(e){return e instanceof i?e:new i(function(t){t(e)})}return new(i||(i=Promise))(function(i,s){function o(e){try{l(r.next(e))}catch(t){s(t)}}function a(e){try{l(r["throw"](e))}catch(t){s(t)}}function l(e){e.done?i(e.value):n(e.value).then(o,a)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function i(e){return function(t){return r([e,t])}}function r(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,s&&(o=2&i[0]?s["return"]:i[0]?s["throw"]||((o=s["return"])&&o.call(s),0):s.next)&&!(o=o.call(s,i[1])).done)return o;switch(s=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,s=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(o=l.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(r){i=[6,r],s=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var n,s,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},vite,node,filePath,content,id=1,pendingPromises={},messageHandlers={reset:reset,start:start,resolveId:resolveId,fetchModule:fetchModule};!function(){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(e){return process.on("message",function(e){return __awaiter(void 0,void 0,void 0,function(){var t,i,r,n,s,i,o,a;return __generator(this,function(l){switch(l.label){case 0:return e?e.returnId?(t=e.returnId,i=e.result,r=e.error,pendingPromises[t]&&(r?(n=JSON.parse(r),s=new Error,Object.keys(n).forEach(function(e){s[e]=n[e]}),pendingPromises[t].reject(s)):pendingPromises[t].resolve(i),delete pendingPromises[t]),[3,5]):[3,1]:[3,5];case 1:if(!(e&&e.type&&messageHandlers[e.type]))return[3,5];l.label=2;case 2:return l.trys.push([2,4,,5]),[4,messageHandlers[e.type](e.payload)];case 3:return i=l.sent(),e.id&&process.send({returnId:e.id,result:i}),[3,5];case 4:return o=l.sent(),e.id&&(a=__assign(__assign({},o),{message:o.message,stack:o.stack}),process.send({returnId:e.id,error:JSON.stringify(a)})),[3,5];case 5:return[2]}})})}),process.send({type:"ready"}),setTimeout(function(){},void 0),[2]})})}();