(function(e){function t(t){for(var r,c,i=t[0],l=t[1],s=t[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a77":function(e,t,n){},"21a4":function(e,t,n){"use strict";n("acb2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,c){var i=Object(r["l"])("FolderView");return Object(r["h"])(),Object(r["c"])(i,{name:"$",folders:e.folders,files:e.files},null,8,["folders","files"])}n("b0c0");Object(r["j"])("data-v-3088425c");var o={class:"container"},c={key:0,class:"wrapper"};function i(e,t,n,a,i,l){var s=this,p=Object(r["l"])("FolderView",!0),u=Object(r["l"])("FileView");return Object(r["h"])(),Object(r["e"])("div",o,[Object(r["f"])("p",{class:Object(r["g"])(["folder",this.isFolderOpened?"opened":null]),onClick:t[0]||(t[0]=function(e){return s.isFolderOpened=!s.isFolderOpened})},Object(r["m"])(n.name),3),this.isFolderOpened?(Object(r["h"])(),Object(r["e"])("div",c,[(Object(r["h"])(!0),Object(r["e"])(r["a"],null,Object(r["k"])(n.folders,(function(e){return Object(r["h"])(),Object(r["c"])(p,{name:e.name,folders:e.folders,files:e.files},null,8,["name","folders","files"])})),256)),(Object(r["h"])(!0),Object(r["e"])(r["a"],null,Object(r["k"])(n.files,(function(e){return Object(r["h"])(),Object(r["c"])(u,{name:e.name,isOpened:s.isFolderOpened},null,8,["name","isOpened"])})),256))])):Object(r["d"])("",!0)])}Object(r["i"])();n("159b");Object(r["j"])("data-v-f5be0286");var l={key:0,class:"file"};function s(e,t,n,a,o,c){return this.$props.isOpened?(Object(r["h"])(),Object(r["e"])("p",l,Object(r["m"])(n.name),1)):Object(r["d"])("",!0)}Object(r["i"])();var p={name:"FileView",props:{name:{type:String},isOpened:{type:Boolean}}};n("ea39");p.render=s,p.__scopeId="data-v-f5be0286";var u=p,f={name:"FolderView",components:{FileView:u},props:{name:{type:String},folders:{type:Array},files:{type:Array},isOpened:{type:Boolean}},data:function(){return{isFolderOpened:!1}},mounted:function(){var e=document.querySelectorAll(".container");e.forEach((function(e){e.classList.contains("last")&&e.classList.remove("last")})),e[e.length-1].classList.add("last")}};n("7a3e");f.render=i,f.__scopeId="data-v-3088425c";var d=f,b={folders:[{name:"assets",folders:[{name:"icons",folders:[],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]},O={name:"App",components:{FolderView:d},data:function(){return b}};n("21a4");O.render=a;var g=O;Object(r["b"])(g).mount("#app")},"7a3e":function(e,t,n){"use strict";n("d84a")},acb2:function(e,t,n){},d84a:function(e,t,n){},ea39:function(e,t,n){"use strict";n("1a77")}});
//# sourceMappingURL=app.2b9462b7.js.map