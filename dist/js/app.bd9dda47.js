(function(e){function n(n){for(var r,o,c=n[0],i=n[1],s=n[2],l=0,d=[];l<c.length;l++)o=c[l],u[o]&&d.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==u[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},u={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-5b891e0d":"b22f7dc9","chunk-7c3baa13":"dde12a65","chunk-85d79380":"5073bdf4","chunk-99809028":"c8b4d3a6","chunk-c8b32722":"4536df53"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-5b891e0d":1,"chunk-7c3baa13":1,"chunk-85d79380":1,"chunk-99809028":1,"chunk-c8b32722":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-5b891e0d":"18d19492","chunk-7c3baa13":"7893914f","chunk-85d79380":"f489134d","chunk-99809028":"02dc9c42","chunk-c8b32722":"c2fbdbb9"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete o[e],f.parentNode.removeChild(f),t(a)},f.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(function(n,t){r=u[e]=[n,t]});n.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e),s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}u[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],a=(t("5c0b"),t("2877")),c={},i=Object(a["a"])(c,o,u,!1,null,null,null);i.options.__file="App.vue";var s=i.exports,l=t("8c4f");r["a"].use(l["a"]);var d=new l["a"]({mode:"history",base:"/",routes:[{path:"/resume/:name",name:"name",component:function(){return Promise.all([t.e("chunk-7c3baa13"),t.e("chunk-99809028")]).then(t.bind(null,"1ba2"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-5b891e0d").then(t.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return t.e("chunk-c8b32722").then(t.bind(null,"73cf"))}},{path:"/editor",name:"editor",component:function(){return Promise.all([t.e("chunk-7c3baa13"),t.e("chunk-85d79380")]).then(t.bind(null,"49d7"))}},{path:"/resume",redirect:"/editor",name:"resume",component:function(){return Promise.all([t.e("chunk-7c3baa13"),t.e("chunk-85d79380")]).then(t.bind(null,"49d7"))}}]}),f=t("795b"),p=t.n(f),h=t("7f43"),m=t.n(h),b=t("8c92"),g=t.n(b),v="Resume-Token",k={getToken:function(){return g.a.get(v)},setToken:function(e){return g.a.set(v,e)},removeToken:function(){return g.a.remove(v)}},y={NODE_ENV:'"development"',ENV_CONFIG:'"dev"',TEST_API:"http://localhost:3000",BASE_API:"http://api.baymaxmall.com"},w=m.a.create({baseURL:y.BASE_API,timeout:5e3});w.interceptors.request.use(function(e){return k.getToken()&&(e.headers["x-access-token"]=k.getToken()),e},function(e){console.log(e),p.a.reject(e)}),w.interceptors.response.use(function(e){return e},function(e){return console.log("err"+e),p.a.reject(e)});var T=w,E={login:function(e,n){var t={username:e,password:n};return T({url:"/login",method:"post",data:t})},logout:function(){return T({url:"/logout",method:"post"})},register:function(e,n){var t={username:e,password:n};return T({url:"/register",method:"post",data:t})},getInfo:function(){return T({url:"/getInfo",method:"get"})},getResume:function(e){return console.log(e),T({url:"/resume/"+e,method:"get"})},update:function(e){var n={update:e};return T({url:"/update",method:"post",data:n})}},P=t("65d8"),_=t.n(P),O=t("befa"),j=(t("48f6"),t("4263")),x=(t("c51c"),t("eac6"),["/login","/register"]);d.beforeEach(function(e,n,t){k.getToken()?"/login"===e.path?t({path:"/editor"}):t():-1!==x.indexOf(e.path)||-1!==e.path.indexOf("/resume/")?t():t("/login")}),d.afterEach(function(){}),r["a"].config.productionTip=!1,r["a"].prototype.api=E,r["a"].prototype.token=k,r["a"].use(_.a,{name:"v-touch"}),r["a"].use(O["a"]),r["a"].use(j["a"]),new r["a"]({router:d,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("5e27"),o=t.n(r);o.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.bd9dda47.js.map