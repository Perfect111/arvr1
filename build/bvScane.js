!function(t){var e=window.webpackHotUpdate;window.webpackHotUpdate=function(t,i){!function(t,e){if(!b[t]||!y[t])return;for(var i in y[t]=!1,e)Object.prototype.hasOwnProperty.call(e,i)&&(v[i]=e[i]);0==--m&&0===g&&H()}(t,i),e&&e(t,i)};var i,r=!0,s="a7c2d959637cd6fb48e7",n=1e4,o={},h=[],a=[];function d(t){var e=V[t];if(!e)return P;var r=function(r){return e.hot.active?(V[r]?-1===V[r].parents.indexOf(t)&&V[r].parents.push(t):(h=[t],i=r),-1===e.children.indexOf(r)&&e.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+t),h=[]),P(r)},s=function(t){return{configurable:!0,enumerable:!0,get:function(){return P[t]},set:function(e){P[t]=e}}};for(var n in P)Object.prototype.hasOwnProperty.call(P,n)&&"e"!==n&&"t"!==n&&Object.defineProperty(r,n,s(n));return r.e=function(t){return"ready"===l&&p("prepare"),g++,P.e(t).then(e,function(t){throw e(),t});function e(){g--,"prepare"===l&&(w[t]||O(t),0===g&&0===m&&H())}},r.t=function(t,e){return 1&e&&(t=r(t)),P.t(t,-2&e)},r}function c(t){var e={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==t,active:!0,accept:function(t,i){if(void 0===t)e._selfAccepted=!0;else if("function"==typeof t)e._selfAccepted=t;else if("object"==typeof t)for(var r=0;r<t.length;r++)e._acceptedDependencies[t[r]]=i||function(){};else e._acceptedDependencies[t]=i||function(){}},decline:function(t){if(void 0===t)e._selfDeclined=!0;else if("object"==typeof t)for(var i=0;i<t.length;i++)e._declinedDependencies[t[i]]=!0;else e._declinedDependencies[t]=!0},dispose:function(t){e._disposeHandlers.push(t)},addDisposeHandler:function(t){e._disposeHandlers.push(t)},removeDisposeHandler:function(t){var i=e._disposeHandlers.indexOf(t);i>=0&&e._disposeHandlers.splice(i,1)},check:E,apply:C,status:function(t){if(!t)return l;u.push(t)},addStatusHandler:function(t){u.push(t)},removeStatusHandler:function(t){var e=u.indexOf(t);e>=0&&u.splice(e,1)},data:o[t]};return i=void 0,e}var u=[],l="idle";function p(t){l=t;for(var e=0;e<u.length;e++)u[e].call(null,t)}var f,v,_,m=0,g=0,w={},y={},b={};function x(t){return+t+""===t?+t:t}function E(t){if("idle"!==l)throw new Error("check() is only allowed in idle status");return r=t,p("check"),(e=n,e=e||1e4,new Promise(function(t,i){if("undefined"==typeof XMLHttpRequest)return i(new Error("No browser support"));try{var r=new XMLHttpRequest,s=P.p+"hot-update/hot-update.json";r.open("GET",s,!0),r.timeout=e,r.send(null)}catch(t){return i(t)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)i(new Error("Manifest request to "+s+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)i(new Error("Manifest request to "+s+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(t){return void i(t)}t(e)}}})).then(function(t){if(!t)return p("idle"),null;y={},w={},b=t.c,_=t.h,p("prepare");var e=new Promise(function(t,e){f={resolve:t,reject:e}});v={};return O(0),"prepare"===l&&0===g&&0===m&&H(),e});var e}function O(t){var e;b[t]?(y[t]=!0,m++,(e=document.createElement("script")).charset="utf-8",e.src=P.p+"hot-update/hot-update.js",document.head.appendChild(e)):w[t]=!0}function H(){p("ready");var t=f;if(f=null,t)if(r)Promise.resolve().then(function(){return C(r)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var i in v)Object.prototype.hasOwnProperty.call(v,i)&&e.push(x(i));t.resolve(e)}}function C(e){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var i,r,n,a,d;function c(t){for(var e=[t],i={},r=e.slice().map(function(t){return{chain:[t],id:t}});r.length>0;){var s=r.pop(),n=s.id,o=s.chain;if((a=V[n])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:n};if(a.hot._main)return{type:"unaccepted",chain:o,moduleId:n};for(var h=0;h<a.parents.length;h++){var d=a.parents[h],c=V[d];if(c){if(c.hot._declinedDependencies[n])return{type:"declined",chain:o.concat([d]),moduleId:n,parentId:d};-1===e.indexOf(d)&&(c.hot._acceptedDependencies[n]?(i[d]||(i[d]=[]),u(i[d],[n])):(delete i[d],e.push(d),r.push({chain:o.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:t,outdatedModules:e,outdatedDependencies:i}}function u(t,e){for(var i=0;i<e.length;i++){var r=e[i];-1===t.indexOf(r)&&t.push(r)}}e=e||{};var f={},m=[],g={},w=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var y in v)if(Object.prototype.hasOwnProperty.call(v,y)){var E;d=x(y);var O=!1,H=!1,C=!1,j="";switch((E=v[y]?c(d):{type:"disposed",moduleId:y}).chain&&(j="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":e.onDeclined&&e.onDeclined(E),e.ignoreDeclined||(O=new Error("Aborted because of self decline: "+E.moduleId+j));break;case"declined":e.onDeclined&&e.onDeclined(E),e.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+j));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(E),e.ignoreUnaccepted||(O=new Error("Aborted because "+d+" is not accepted"+j));break;case"accepted":e.onAccepted&&e.onAccepted(E),H=!0;break;case"disposed":e.onDisposed&&e.onDisposed(E),C=!0;break;default:throw new Error("Unexception type "+E.type)}if(O)return p("abort"),Promise.reject(O);if(H)for(d in g[d]=v[d],u(m,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,d)&&(f[d]||(f[d]=[]),u(f[d],E.outdatedDependencies[d]));C&&(u(m,[E.moduleId]),g[d]=w)}var D,U=[];for(r=0;r<m.length;r++)d=m[r],V[d]&&V[d].hot._selfAccepted&&U.push({module:d,errorHandler:V[d].hot._selfAccepted});p("dispose"),Object.keys(b).forEach(function(t){!1===b[t]&&function(t){delete installedChunks[t]}(t)});for(var R,T,z=m.slice();z.length>0;)if(d=z.pop(),a=V[d]){var M={},A=a.hot._disposeHandlers;for(n=0;n<A.length;n++)(i=A[n])(M);for(o[d]=M,a.hot.active=!1,delete V[d],delete f[d],n=0;n<a.children.length;n++){var L=V[a.children[n]];L&&((D=L.parents.indexOf(d))>=0&&L.parents.splice(D,1))}}for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(a=V[d]))for(T=f[d],n=0;n<T.length;n++)R=T[n],(D=a.children.indexOf(R))>=0&&a.children.splice(D,1);for(d in p("apply"),s=_,g)Object.prototype.hasOwnProperty.call(g,d)&&(t[d]=g[d]);var k=null;for(d in f)if(Object.prototype.hasOwnProperty.call(f,d)&&(a=V[d])){T=f[d];var S=[];for(r=0;r<T.length;r++)if(R=T[r],i=a.hot._acceptedDependencies[R]){if(-1!==S.indexOf(i))continue;S.push(i)}for(r=0;r<S.length;r++){i=S[r];try{i(T)}catch(t){e.onErrored&&e.onErrored({type:"accept-errored",moduleId:d,dependencyId:T[r],error:t}),e.ignoreErrored||k||(k=t)}}}for(r=0;r<U.length;r++){var B=U[r];d=B.module,h=[d];try{P(d)}catch(t){if("function"==typeof B.errorHandler)try{B.errorHandler(t)}catch(i){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:i,originalError:t}),e.ignoreErrored||k||(k=i),k||(k=t)}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:d,error:t}),e.ignoreErrored||k||(k=t)}}return k?(p("fail"),Promise.reject(k)):(p("idle"),new Promise(function(t){t(m)}))}var V={};function P(e){if(V[e])return V[e].exports;var i=V[e]={i:e,l:!1,exports:{},hot:c(e),parents:(a=h,h=[],a),children:[]};return t[e].call(i.exports,i,i.exports,d(e)),i.l=!0,i.exports}P.m=t,P.c=V,P.d=function(t,e,i){P.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},P.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},P.t=function(t,e){if(1&e&&(t=P(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(P.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)P.d(i,r,function(e){return t[e]}.bind(null,r));return i},P.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return P.d(e,"a",e),e},P.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},P.p="build/",P.h=function(){return s},d(1)(P.s=1)}([function(t,e,i){"use strict";class r{constructor(t){this.type="BVVideo";var e=this;this.idArr=-1,this.par=t,this._src="null",this._active=!1,this._firstClick=this.par._firstClick,this._bCanvas=!1,this.video=document.createElement("video"),this.video.preload="auto",this.video.autoload=!0,this.video.autoplay=!0,this.video.loop=!0,this.video.crossOrigin="Anonymous",this.texture=void 0,this.material=void 0,this.canvas=void 0,this.ctx=void 0,this.creatCanvas=function(){null==this.canvas&&(trace("@@@@@@@@@@@creatCanvas@@@@@@@@@@"),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.texture=new THREE.CanvasTexture(this.canvas),this.texture.minFilter=THREE.LinearFilter,this.texture.magFilter=THREE.LinearFilter,this.texture.format=THREE.RGBFormat,this.texture.needsUpdate=!0,this.material=new THREE.MeshPhongMaterial({color:16777215,map:this.texture}))},this.video.onloadedmetadata=function(t){e.canvas&&(e.canvas.width=e.video.videoWidth,e.canvas.height=e.video.videoHeight)},this.clear=function(){this.material.dispose(),this.texture.dispose(),delete this.video},this.dragCan=!1,this.update=function(){0!=this._active&&1==this._bCanvas&&0!=this.dragCan&&(trace(e.canvas.width+"   "+e.canvas.height),e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height),e.ctx.drawImage(e.video,0,0,e.canvas.width,e.canvas.height),e.ctx.rect(Math.random()*e.canvas.width,Math.random()*e.canvas.height,100,100),e.texture.needsUpdate=!0,trace("--"))},this.getObj=function(){var t={};return t.src=this._src,t.active=this._active,t},this.setObj=function(t){this.bCanvas=t.bCanvas,this.src=t.src,this.active=t.active}}set bCanvas(t){trace(this._bCanvas+">>",t),this._bCanvas=t,1==this._bCanvas?this.creatCanvas():(this.texture=new THREE.VideoTexture(this.video),this.texture.minFilter=THREE.LinearFilter,this.texture.magFilter=THREE.LinearFilter,this.texture.format=THREE.RGBFormat,this.material=new THREE.MeshPhongMaterial({color:16777215,map:this.texture}))}get bCanvas(){return this._bCanvas}set firstClick(t){this._firstClick!=t&&(this._firstClick=t,this._active=!this._active,this.active=!this._active)}get firstClick(){return this._firstClick}set src(t){this._src!=t&&(this._src=t,this.video.src=t)}get src(){return this._src}set active(t){if(this._active!=t){if(this._active=t,0==this._firstClick)return;1==t?(this.video.play(),this.dragCan=!0):this.video.pause()}}get active(){return this._active}}class s{constructor(t){this.type="BVStand";this.par=t,this.idArr=-1,this._otUp=20,this._otLeft=20,this._width=100,this._height=100,this._x=0,this._y=0,this._w=1,this._h=1,this._px=0,this._py=0,this._pz=0,this._pr=0,this._indexVideo=-1,this.content3d=new THREE.Object3D,this.par.content3d.add(this.content3d),this.content3d.objBase=this,null!=this.par.visi3D&&this.par.visi3D.addChildMouse(this.content3d),this.geometry=new n(this),this.mesh=new THREE.Mesh(this.geometry.geom),this.mesh.position.y=this._otUp,this.mesh.position.x=-this._width/2,this.content3d.add(this.mesh),this.zad=new o(this,this.par.matBag),this.setXYWH=function(t,e,i,r){this.geometry.x=t,this.geometry.y=e,this.geometry.w=i,this.geometry.h=r,this.geometry.update()},this.clear=function(){this.par.content3d.remove(this.content3d),null!=this.par.visi3D&&this.par.par.visi3D.removeChildMouse(this.content3d)},this.getObj=function(){var t={};return t.indexVideo=this._indexVideo,t.otUp=this._otUp,t.otLeft=this._otLeft,t.x=this._x,t.y=this._y,t.w=this._w,t.h=this._h,t.width=this._width,t.height=this._height,t.px=this._px,t.py=this._py,t.pz=this._pz,t.pr=this._pr,t},this.setObj=function(t){this.src=t.src,this.indexVideo=t.indexVideo,this._x=t.x,this._y=t.y,this._w=t.w,this._h=t.h,this.setXYWH(this._x,this._y,this._w,this._h),this.otUp=t.otUp,this.width=t.width,this.height=t.height,this.px=t.px,this.py=t.py,this.pz=t.pz,this.pr=t.pr}}set px(t){this._px!=t&&(this._px=t,this.content3d.position.x=this._px)}get px(){return this._px}set py(t){this._py!=t&&(this._py=t,this.content3d.position.y=this._py)}get py(){return this._py}set pz(t){this._pz!=t&&(this._pz=t,this.content3d.position.z=this._pz)}get pz(){return this._pz}set pr(t){this._pr!=t&&(this._pr=t,this.content3d.rotation.y=this._pr*Math.PI/180)}get pr(){return this._pr}set indexVideo(t){if(this._indexVideo!=t){this._indexVideo=t;let e=this.par.arrVideo[t];null==e&&(e=this.par.matBag),this.mesh.material=e.material}}get indexVideo(){return this._indexVideo}set x(t){this._x!=t&&(this._x=t,this.setXYWH(this._x,this._y,this._w,this._h))}get x(){return this._x}set y(t){this._y!=t&&(this._y=t,this.setXYWH(this._x,this._y,this._w,this._h))}get y(){return this._y}set w(t){this._w!=t&&(this._w=t,this.setXYWH(this._x,this._y,this._w,this._h))}get w(){return this._w}set h(t){this._h!=t&&(this._h=t,this.setXYWH(this._x,this._y,this._w,this._h))}get h(){return this._h}set otUp(t){this._otUp!=t&&(this._otUp=t,this.mesh.position.y=this._otUp,this.zad.otUp=t)}get otUp(){return this._otUp}set otLeft(t){this._otLeft!=t&&(this._otLeft=t,this.zad.otLeft=t)}get otLeft(){return this._otLeft}set width(t){this._width!=t&&(this._width=t,this.geometry.width=this._width,this.geometry.update(),this.mesh.position.x=-this._width/2,this.zad.width=t)}get width(){return this._width}set height(t){this._height!=t&&(this._height=t,this.geometry.height=this._height,this.geometry.update(),this.zad.height=t)}get height(){return this._height}}class n{constructor(t){this.type="BVGeometry",this.x=0,this.y=0,this.w=1,this.h=1,this.width=100,this.height=100,this.geom=new THREE.BufferGeometry,this.geom.addAttribute("position",new THREE.BufferAttribute(new Float32Array(12),3)),this.arrPoz=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.arrUv=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.update=function(){this.arrPoz[0].set(this.width,0,0),this.arrPoz[1].set(0,0,0),this.arrPoz[2].set(0,this.height,0),this.arrPoz[3].set(this.width,this.height,0),this.arrUv[0].set(this.x,this.y),this.arrUv[1].set(this.x+this.w,this.y),this.arrUv[2].set(this.x+this.w,this.y+this.h),this.arrUv[3].set(this.x,this.y+this.h);let t=new Float32Array(18),e=new Float32Array(12),i=new Float32Array(18),r=0;t[r]=this.arrPoz[0].x,t[++r]=this.arrPoz[0].y,t[++r]=this.arrPoz[0].z,t[++r]=this.arrPoz[1].x,t[++r]=this.arrPoz[1].y,t[++r]=this.arrPoz[1].z,t[++r]=this.arrPoz[3].x,t[++r]=this.arrPoz[3].y,t[++r]=this.arrPoz[3].z,t[++r]=this.arrPoz[1].x,t[++r]=this.arrPoz[1].y,t[++r]=this.arrPoz[1].z,t[++r]=this.arrPoz[2].x,t[++r]=this.arrPoz[2].y,t[++r]=this.arrPoz[2].z,t[++r]=this.arrPoz[3].x,t[++r]=this.arrPoz[3].y,t[++r]=this.arrPoz[3].z,r++,e[r=0]=this.arrUv[0].x,e[++r]=this.arrUv[0].y,e[++r]=this.arrUv[1].x,e[++r]=this.arrUv[1].y,e[++r]=this.arrUv[3].x,e[++r]=this.arrUv[3].y,e[++r]=this.arrUv[1].x,e[++r]=this.arrUv[1].y,e[++r]=this.arrUv[2].x,e[++r]=this.arrUv[2].y,e[++r]=this.arrUv[3].x,e[++r]=this.arrUv[3].y,r++,this.geom.removeAttribute("position"),this.geom.removeAttribute("uv"),this.geom.removeAttribute("normal"),this.geom.addAttribute("position",new THREE.BufferAttribute(t,3)),this.geom.addAttribute("uv",new THREE.BufferAttribute(e,2)),this.geom.addAttribute("normal",new THREE.BufferAttribute(i,3)),this.geom.attributes.position.needsUpdate=!0,this.geom.attributes.normal.needsUpdate=!0,this.geom.attributes.uv.needsUpdate=!0,this.geom.computeBoundingSphere(),this.geom.computeVertexNormals()},this.update()}}class o{constructor(t){this.type="BVZad";this.par=t,this._otUp=this.par._otUp,this._otLeft=this.par._otLeft,this._width=this.par._width,this._height=this.par._height,this.par=t,this.content3d=new THREE.Object3D,this.par.content3d.add(this.content3d),this.arrC3D=[];for(var e=0;e<3;e++)this.arrC3D[e]=new THREE.Object3D,this.content3d.add(this.arrC3D[e]);this.draw=function(){this.arrC3D[0].scale.x=this._width/100,this.arrC3D[0].scale.y=this._height/100,this.arrC3D[0].position.y=this._otUp;let t=(this._height+this._otUp)/100;this.arrC3D[1].scale.set(t,t,t),this.arrC3D[2].scale.set(t,t,t),this.arrC3D[1].position.x=this._width/2-this._otLeft,this.arrC3D[2].position.x=-this._width/2+this._otLeft,this.arrC3D[1].position.z=this.arrC3D[2].position.z=.5*t},this.draw()}set otUp(t){this._otUp!=t&&(this._otUp=t,this.draw())}get otUp(){return this._otUp}set otLeft(t){this._otLeft!=t&&(this._otLeft=t,this.draw())}get otLeft(){return this._otLeft}set width(t){this._width!=t&&(this._width=t,this.draw())}get width(){return this._width}set height(t){this._height!=t&&(this._height=t,this.draw())}get height(){return this._height}}i.d(e,"a",function(){return h});class h{constructor(t,e,i){this.type="BVScane";var n=this;this.objectBase,window.dcmParam||(window.dcmParam=new DCM),this.dCont=new DCont(document.body),this.visi3D=i,this.par=t,this._activMouse=!0,this._activeObject=-1,this.content3d=new THREE.Object3D,this.par&&this.par.content3d.add(this.content3d),this._firstClick=!1,this.bvReflection=void 0,this.matBag=new THREE.MeshPhongMaterial({color:4697800});var o,h,d,c;new THREE.TextureLoader;this.matTest=new THREE.MeshPhongMaterial({color:16711680}),this.texture,this.modLoad=new a(this),this.arrVideo=[],this.arrStand=[],this.isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.isMobile.Android()||n.isMobile.BlackBerry()||n.isMobile.iOS()||n.isMobile.Opera()||n.isMobile.Windows()}},this.mobile=!1,null!=this.isMobile.any()&&(this.mobile=!0),this.creatStand=function(){var t=new s(this);return t.idArr=this.arrStand.length,this.arrStand.push(t),t},this.creatVideo=function(){var t=new r(this);return t.idArr=this.arrVideo.length,this.arrVideo.push(t),t},this.clear=function(){for(var t=0;t<this.arrStand.length;t++)this.arrStand[t].clear();for(t=0;t<this.arrVideo.length;t++)this.arrVideo[t].clear();this.arrVideo=[],this.arrStand=[]},this.getParName=function(t,e){return null!=t[e]?t[e]:null!=t.parent?this.getParName(t.parent,e):null},this.down=function(t){null!=t&&null!=t.target&&null!=(o=n.getParName(t.target,"objBase"))&&(n.activeObject=o.idArr),n.activeObject=-1},this.par&&this.par.visi3D.addEvent("down",this.down),this.mousedown=function(t){0==n.mobile?document.removeEventListener("mouseup",n.mousedown):document.removeEventListener("touchend",n.mousedown),setTimeout(function(){n.firstClick=!0},1)},0==this.mobile?document.addEventListener("mouseup",n.mousedown):document.addEventListener("touchend",n.mousedown),this.getObj=function(){for(var t={arrVideo:[],arrStand:[]},e=0;e<this.arrVideo.length;e++)t.arrVideo.push(this.arrVideo[e].getObj());for(e=0;e<this.arrStand.length;e++)t.arrStand.push(this.arrStand[e].getObj());return t},this.setObj=function(t){this.clear();for(var e=0;e<t.arrVideo.length;e++){this.creatVideo().setObj(t.arrVideo[e])}for(e=0;e<t.arrStand.length;e++){this.creatStand().setObj(t.arrStand[e])}},this.setVideo=function(t,e){trace("setVideo",e);var i={arrVideo:[],arrStand:[]};i.arrVideo[0]={},i.arrVideo[0].src=t,i.arrVideo[0].active=!0,i.arrVideo[0].bCanvas=!1,1==e&&(i.arrVideo[0].bCanvas=!0),this.setObj(i),this.modLoad.setV(this.arrVideo[0].material)},this.update=function(){for(var t=0;t<this.arrVideo.length;t++)this.arrVideo[t].update();this.bvReflection&&this.bvReflection.update(),h&&(d.clearRect(0,0,h.width,h.height),trace(h.width),d.drawImage(c,0,0,100,100),d.beginPath(),d.rect(h.width*Math.random(),h.height*Math.random(),100,90),d.strokeStyle="red",d.fillStyle="blue",d.fill(),d.stroke(),this.texture.needsUpdate=!0)},this.testV=function(t){(c=document.getElementById("video")).preload="auto",c.autoload=!0,c.autoplay=!0,c.inline=!0,c.loop=!0,c.crossorigin="Anonymous",c.src=t,this.window=new DWindow(this.dCont,300,220,"testV");var e=new DCont(this.window.content);e.scale=.2,new DCont(e).div.appendChild(c),setTimeout(function(){c.play();new DLabel(n.window,0,-50,c.videoWidth+"  "+c.videoHeight)},2e3),c.onloadedmetadata=function(t){(h=document.createElement("canvas")).width=512,h.height=512,d=h.getContext("2d");var i=new DCont(e);i.y=c.videoHeight,i.div.appendChild(h),n.texture=new THREE.CanvasTexture(h),n.texture.minFilter=THREE.LinearFilter,n.texture.magFilter=THREE.LinearFilter,n.texture.format=THREE.RGBFormat,n.texture.needsUpdate=!0,n.material=new THREE.MeshPhongMaterial({color:16777215,map:n.texture}),n.modLoad.setV(n.material)}}}set firstClick(t){if(this._firstClick!=t){this._firstClick=t;for(var e=0;e<this.arrVideo.length;e++)this.arrVideo[e].firstClick=this._firstClick}}get firstClick(){return this._firstClick}set activeObject(t){this._activeObject!=t&&(this._activeObject=t,-1!=this._activeObject&&this.par&&this.par.menu&&(this.par.menu.mObject.setObject(this.arrStand[this._activeObject]),this.par.menu.index=1))}get activeObject(){return this._activeObject}}class a{constructor(t){this.type="ModLoad",this.par=t,this.content3d=new THREE.Object3D,this.par.content3d.add(this.content3d),this.material=void 0,this.c3d=void 0,this.pars=function(){null!=this.material&&null!=this.c3d&&this.parsO3d(this.c3d,this.material)},this.parsO3d=function(t,e){null!=t.geometry&&-1!=t.name.indexOf("Mesh.023")&&(t.material=e);for(var i=0;i<t.children.length;i++)this.parsO3d(t.children[i],e)},this.gltfLoader=new THREE.GLTFLoader,this.gltfLoader.load("./resources/DemoRoom.gltf",t=>{t.scene.scale.set(100,100,100),t.scene.rotation.y=-Math.PI/2,this.content3d.add(t.scene),this.c3d=t.scene,this.pars()}),this.setV=function(t){this.material=t,this.pars()}}}},function(t,e,i){"use strict";i.r(e),function(t){var r=i(0);i.d(e,"BVScane",function(){return r.a}),t.BVScane=r.a}.call(this,i(2))},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i}]);