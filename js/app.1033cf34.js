(function(e){function t(t){for(var c,o,u=t[0],i=t[1],l=t[2],d=0,s=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},o={app:0},r={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-02edd072":"9e10948b","chunk-060d5066":"711a13ef","chunk-10b34b05":"535927e9","chunk-127aa191":"f03517c7","chunk-247125fa":"86d475ab","chunk-266457e8":"662d41ad","chunk-2674f119":"260d6cfd","chunk-2c20ba8a":"9b5c7d4c","chunk-36aa8d93":"56811c94","chunk-36cfdf08":"b35c5460","chunk-3ac40537":"9b9466fb","chunk-3e0e2b37":"17a5a5f0","chunk-416da9ba":"1a18a17b","chunk-478da530":"73a5fc53","chunk-4d62910e":"2e11eecf","chunk-69f17bb6":"b846a617","chunk-871a6aae":"51c2feec","chunk-8dcbe364":"ab1c4d28","chunk-9933063e":"1a229ab1","chunk-aea973ec":"c78d99b7","chunk-fc370fe0":"3040d063"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-02edd072":1,"chunk-060d5066":1,"chunk-247125fa":1,"chunk-266457e8":1,"chunk-36aa8d93":1,"chunk-416da9ba":1,"chunk-478da530":1,"chunk-4d62910e":1,"chunk-8dcbe364":1,"chunk-aea973ec":1,"chunk-fc370fe0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-02edd072":"17bc885f","chunk-060d5066":"fdafed67","chunk-10b34b05":"31d6cfe0","chunk-127aa191":"31d6cfe0","chunk-247125fa":"adc5e138","chunk-266457e8":"6b280b31","chunk-2674f119":"31d6cfe0","chunk-2c20ba8a":"31d6cfe0","chunk-36aa8d93":"a3650002","chunk-36cfdf08":"31d6cfe0","chunk-3ac40537":"31d6cfe0","chunk-3e0e2b37":"31d6cfe0","chunk-416da9ba":"ec192055","chunk-478da530":"94374fe7","chunk-4d62910e":"94374fe7","chunk-69f17bb6":"31d6cfe0","chunk-871a6aae":"31d6cfe0","chunk-8dcbe364":"adc5e138","chunk-9933063e":"31d6cfe0","chunk-aea973ec":"8c1ddf8a","chunk-fc370fe0":"5f5f1749"}[e]+".css",r=i.p+c,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===c||d===r))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],d=l.getAttribute("data-href");if(d===c||d===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete o[e],b.parentNode.removeChild(b),n(a)},b.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var a=new Promise((function(t,n){c=r[e]=[t,n]}));t.push(c[2]=a);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var s=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",s.name="ChunkLoadError",s.type=c,s.request=o,n[1](s)}r[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var b=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0200":function(e,t,n){},"36cd":function(e,t,n){"use strict";n("f390")},4360:function(e,t,n){"use strict";var c=n("5502"),o={set_token:function(e,t){e.token=t,localStorage.setItem("token",t)},set_role:function(e,t){e.role=t,localStorage.setItem("role",t)},set_isLogin:function(e,t){e.isLogin=t,localStorage.setItem("isLogin",t)}};t["a"]=Object(c["a"])({state:function(){return{token:localStorage.getItem("token")||"",role:localStorage.getItem("role")||"",isLogin:"true"===localStorage.getItem("isLogin")}},mutations:o})},"534f":function(e,t,n){e.exports=n.p+"img/logo1.17e62546.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=n("534f"),r=n.n(o),a=Object(c["o"])("img",{src:r.a},null,-1),u={class:"grid-content bg-purple-dark title"};function i(e,t,n,o,r,i){var l=this,d=Object(c["O"])("el-header"),s=Object(c["O"])("Aside"),b=Object(c["O"])("el-aside"),f=Object(c["O"])("el-page-header"),h=Object(c["O"])("el-col"),m=Object(c["O"])("el-row"),p=Object(c["O"])("router-view"),O=Object(c["O"])("el-card"),j=Object(c["O"])("el-main"),k=Object(c["O"])("el-container"),g=Object(c["O"])("el-config-provider");return Object(c["F"])(),Object(c["k"])(g,{locale:r.locale},{default:Object(c["db"])((function(){return[Object(c["o"])(k,null,{default:Object(c["db"])((function(){return[Object(c["o"])(d,null,{default:Object(c["db"])((function(){return[a]})),_:1}),Object(c["o"])(k,null,{default:Object(c["db"])((function(){return[Object(c["o"])(k,null,{default:Object(c["db"])((function(){return[Object(c["o"])(b,{width:"220px"},{default:Object(c["db"])((function(){return[Object(c["o"])(s)]})),_:1}),Object(c["o"])(j,null,{default:Object(c["db"])((function(){return[Object(c["o"])(m,null,{default:Object(c["db"])((function(){return[Object(c["o"])(f,{onBack:i.goBack,content:"详情页面"},null,8,["onBack"]),Object(c["o"])(h,{span:24},{default:Object(c["db"])((function(){return[Object(c["o"])("div",u,Object(c["S"])(l.$route.meta.title),1)]})),_:1})]})),_:1}),Object(c["o"])(O,{shadow:"hover"},{default:Object(c["db"])((function(){return[Object(c["o"])(p)]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["locale"])}var l=n("ade3"),d=(n("b0c0"),n("caad"),n("2532"),{id:"aside"}),s=Object(c["n"])("展开"),b=Object(c["n"])("收起");function f(e,t,n,o,r,a){var u=this,i=Object(c["O"])("el-radio-button"),l=Object(c["O"])("el-radio-group"),f=Object(c["O"])("el-menu-item"),h=Object(c["O"])("el-menu-item-group"),m=Object(c["O"])("el-submenu"),p=Object(c["O"])("el-menu");return Object(c["F"])(),Object(c["k"])("div",d,[Object(c["o"])(l,{modelValue:r.isCollapse,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.isCollapse=e}),style:{"margin-bottom":"20px"},fill:"#1353c9"},{default:Object(c["db"])((function(){return[Object(c["o"])(i,{label:!1},{default:Object(c["db"])((function(){return[s]})),_:1}),Object(c["o"])(i,{label:!0},{default:Object(c["db"])((function(){return[b]})),_:1})]})),_:1},8,["modelValue"]),Object(c["o"])(p,{"default-active":this.$route.path,class:"el-menu-vertical-demo",onOpen:a.handleOpen,onClose:a.handleClose,collapse:r.isCollapse,router:""},{default:Object(c["db"])((function(){return[(Object(c["F"])(!0),Object(c["k"])(c["b"],null,Object(c["M"])(r.menuList,(function(e){return Object(c["F"])(),Object(c["k"])("div",{key:e.index},[e.roles.includes("ALL")||e.roles.includes(u.$store.state.role)?(Object(c["F"])(),Object(c["k"])(m,{key:0,index:e.index},{title:Object(c["db"])((function(){return[Object(c["o"])("i",{class:e.icon},null,2),Object(c["o"])("span",null,Object(c["S"])(e.name),1)]})),default:Object(c["db"])((function(){return[Object(c["o"])(h,null,{default:Object(c["db"])((function(){return[(Object(c["F"])(!0),Object(c["k"])(c["b"],null,Object(c["M"])(e.child,(function(e){return Object(c["F"])(),Object(c["k"])("div",{key:e.index},[e.roles.includes("ALL")||e.roles.includes(u.$store.state.role)?(Object(c["F"])(),Object(c["k"])(f,{key:0,index:e.index},{default:Object(c["db"])((function(){return[Object(c["o"])("i",{class:e.icon},null,2),Object(c["n"])(Object(c["S"])(e.name),1)]})),_:2},1032,["index"])):Object(c["l"])("",!0)])})),128))]})),_:2},1024)]})),_:2},1032,["index"])):Object(c["l"])("",!0)])})),128))]})),_:1},8,["default-active","onOpen","onClose","collapse"])])}var h={data:function(){return{isCollapse:!1,menuList:[{index:"1",name:"资讯",icon:"el-icon-chat-line-square",roles:["NEWS_AUDITOR","USER_REG_AUDITOR"],child:[{index:"/news/edit",name:"资讯编辑",icon:"el-icon-edit",roles:["NEWS_EDITOR"]},{index:"/news/list",name:"资讯列表",icon:"el-icon-s-order",roles:["ALL"]}]},{index:"2",name:"账户管理",icon:"",roles:["ALL"],child:[{index:"/user/info",name:"个人信息",icon:"el-icon-s-open",roles:["ALL"]},{index:"/user/login",name:"登录",icon:"el-icon-s-open",roles:["ALL"]},{index:"/user/reg",name:"注册",icon:"el-icon-s-open",roles:["ALL"]},{index:"/user/complete",name:"信息完善",icon:"el-icon-s-open",roles:["USER_SALE","USER_BUY"]},{index:"/user/new",name:"新增用户",icon:"el-icon-s-open",roles:["SUPER_ADMIN"]}]},{index:"3",name:"审核中心",icon:"",roles:["ALL"],child:[{index:"/news/audit",name:"资讯审核",icon:"",roles:["NEWS_AUDITOR"]},{index:"/user/audit",name:"注册审核",icon:"",roles:["USER_REG_AUDITOR"]},{index:"/trade/audit/list",name:"交易审核",icon:"",roles:["TRADE_AUDITOR"]}]},{index:"4",name:"交易中心",icon:"",roles:["ALL"],child:[{index:"/trade/GPList/public",name:"公共挂牌列表",icon:"el-icon-s-open",roles:["ALL"]},{index:"/trade/GPList/my",name:"本公司挂牌列表",icon:"el-icon-s-open",roles:["USER_SALE","USER_BUY","USER_MONEY"]},{index:"/trade/MyZPList",name:"本公司摘牌列表",icon:"el-icon-s-open",roles:["USER_SALE","USER_BUY","USER_MONEY"]}]},{index:"5",name:"财务中心",icon:"",roles:["USER_MONEY"],child:[{index:"/trade/predeposit",name:"预存资金",icon:"el-icon-s-open",roles:["USER_MONEY"]}]}]}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}};n("36cd");h.render=f;var m=h,p=n("7864"),O=n("3ef0"),j=n.n(O),k={name:"App",components:Object(l["a"])({Aside:m},p["a"].name,p["a"]),data:function(){return{locale:j.a}},methods:{goBack:function(){this.$router.back()}}};n("b547");k.render=i;var g=k,v=(n("7dd6"),function(e){e.use(p["c"])}),_=n("a18c"),y=n("a27e"),L=n("2106"),E=n.n(L),S=n("4360"),x=Object(c["j"])(g);x.use(E.a,y["a"]),x.use(_["a"]),x.use(S["a"]),v(x),x.mount("#app")},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var c=n("6c02"),o=[{path:"/",redirect:"/news/list"},{path:"/news/edit",component:function(){return n.e("chunk-3e0e2b37").then(n.bind(null,"8ba6"))},meta:{title:"编辑资讯"}},{path:"/news/list",component:function(){return n.e("chunk-36aa8d93").then(n.bind(null,"2a621"))},meta:{title:"资讯中心"}},{path:"/news/audit",component:function(){return n.e("chunk-fc370fe0").then(n.bind(null,"7dca"))},meta:{title:"资讯审核"}},{path:"/news/detail",component:function(){return n.e("chunk-02edd072").then(n.bind(null,"f90a"))},meta:{title:"资讯详情"}},{path:"/news/auditdetail",component:function(){return n.e("chunk-416da9ba").then(n.bind(null,"04ad"))},meta:{title:"审核资讯"}},{path:"/user/login",component:function(){return n.e("chunk-69f17bb6").then(n.bind(null,"71a8"))},meta:{title:"登录"}},{path:"/user/reg",name:"userReg",component:function(){return n.e("chunk-36cfdf08").then(n.bind(null,"4ac0"))},meta:{title:"注册"}},{path:"/user/audit",component:function(){return n.e("chunk-aea973ec").then(n.bind(null,"da2b"))},meta:{title:"注册审核"}},{path:"/user/info",name:"info",component:function(){return n.e("chunk-9933063e").then(n.bind(null,"1d46"))},meta:{title:"信息修改"}},,{path:"/user/complete",name:"userComplete",component:function(){return n.e("chunk-127aa191").then(n.bind(null,"a284"))},meta:{title:"完善企业信息"}},{path:"/user/new",name:"userNew",component:function(){return n.e("chunk-3ac40537").then(n.bind(null,"fcdf"))},meta:{title:"新增用户"}},{path:"/message/list",component:function(){return n.e("chunk-060d5066").then(n.bind(null,"6e24"))},meta:{title:"用户信息列表"}},{path:"/trade/GPList/:mode",name:"GPList",component:function(){return n.e("chunk-247125fa").then(n.bind(null,"b4d7"))},meta:{title:"挂牌列表"}},{path:"/trade/MyZPList",name:"MyZPList",component:function(){return n.e("chunk-8dcbe364").then(n.bind(null,"a192"))},meta:{title:"我的摘牌列表"}},{path:"/trade/margin",name:"margin",component:function(){return n.e("chunk-10b34b05").then(n.bind(null,"a869"))},meta:{title:"支付保证金"}},{path:"/trade/predeposit",name:"predeposit",component:function(){return n.e("chunk-266457e8").then(n.bind(null,"fd3a"))},meta:{title:"资金预存"}},{path:"/trade/contract/:mode",name:"contract",component:function(){return n.e("chunk-2674f119").then(n.bind(null,"f3ca"))},meta:{title:"合同处理"}},{path:"/trade/A/:mode",name:"GP1",component:function(){return n.e("chunk-871a6aae").then(n.bind(null,"e10b"))},beforeEnter:function(e,t,n){"zp"===e.params.mode?e.meta.title="卖方摘牌":e.meta.title="买方挂牌",n()}},{path:"/trade/B/:mode",name:"GP2",component:function(){return n.e("chunk-478da530").then(n.bind(null,"060c"))},beforeEnter:function(e,t,n){"zp"===e.params.mode?e.meta.title="买方摘牌":e.meta.title="卖方挂牌",n()}},{path:"/trade/audit/list",name:"tradeAuditList",component:function(){return n.e("chunk-2c20ba8a").then(n.bind(null,"da02"))},meta:{title:"交易审核列表"}},{path:"/trade/audit/detail/:type/:id",name:"tradeAuditDetail",component:function(){return n.e("chunk-4d62910e").then(n.bind(null,"1ea0"))},meta:{title:"交易审核"}}],r=Object(c["a"])({history:Object(c["b"])(),routes:o});r.beforeResolve((function(e,t,n){window.document.title=e.meta.title,n()})),t["a"]=r},a27e:function(e,t,n){"use strict";n("d3b7"),n("b0c0"),n("caad"),n("2532");var c=n("bc3a"),o=n.n(c),r=n("a18c"),a=n("7864"),u=n("4360"),i={baseURL:"http://106.52.202.68/api",timeout:1e4,withCredentials:!1},l=o.a.create(i);l.interceptors.request.use((function(e){var t=u["a"].state.token;return t&&(e.headers["Authorization"]="Bearer "+t),e}),(function(e){return console.log("request error",e),Promise.reject(e)})),l.interceptors.response.use((function(e){if(console.log("response",e),200!==e.status)return Promise.reject(e);var t=e.data;return t.code&&200!==t.code?(console.log("状态码异常",t),t.error&&Object(a["b"])({message:t.error,center:!0,type:"error"}),Promise.reject(t)):e.data}),(function(e){if(console.log("请求出现异常 - ",e),console.log("错误对象类型 - ",Object.prototype.toString.call(e)),console.log("error.name",e.name),console.log("error.message",e.message),console.log("error.code",e.code),console.log("error.status",e.status),"Network Error"===e.message)return Object(a["b"])({message:"网络错误！",center:!0,type:"error"}),Promise.reject(e);if(e.message.includes("timeout"))return Object(a["b"])({message:"响应超时",center:!0,type:"error"}),Promise.reject(e);var t=e.response,n=t.data||null;if(console.log(t),t&&t.status)switch(t.status){case 401:Object(a["b"])({message:"未登录",center:!0}),localStorage.removeItem("token"),u["a"].commit("set_isLogin",!1),r["a"].push({path:"/user/login",query:{redirect:r["a"].currentRoute.value.fullPath}});break;case 403:Object(a["b"])({message:"你没有权限执行该操作",center:!0});break;case 404:Object(a["b"])({message:"接口不存在！",center:!0});break;default:n.error?Object(a["b"])({message:n.error,center:!0,type:"error"}):Object(a["b"])({message:"请求发生异常1！",center:!0,type:"error"})}else Object(a["b"])({message:"请求发生异常2！",center:!0,type:"error"});return console.log(" ==== axios尝试处理异常结束 ==== "),Promise.reject(e)})),t["a"]=l},b547:function(e,t,n){"use strict";n("0200")},f390:function(e,t,n){}});
//# sourceMappingURL=app.1033cf34.js.map