(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02edd072"],{b263:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return d}));var c=n("a27e"),o=function(t,e){return console.log(t,e),c["a"].get("/news/show",{params:{current:t,size:e}})},r=function(t){return c["a"].get("/news/detail/"+t)},u=function(t){return c["a"].get("/news/more/"+t)},a=function(t,e){return c["a"].post("/news/"+e,{title:t.title,content:t.content})},i=function(t,e){return console.log(t,e),c["a"].get("/news/showAudit",{params:{current:t,size:e}})},s=function(t){return console.log(t),c["a"].post("/news/audit/reject/"+t)},d=function(t){return console.log(t),c["a"].post("/news/audit/pass/"+t)}},cd29:function(t,e,n){},e58c:function(t,e,n){"use strict";n("cd29")},f90a:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),o={class:"news-meta"},r={class:"news-content"};function u(t,e,n,u,a,i){var s=Object(c["O"])("el-header"),d=Object(c["O"])("el-main"),l=Object(c["O"])("el-container");return Object(c["F"])(),Object(c["k"])("div",null,[Object(c["o"])(l,null,{default:Object(c["db"])((function(){return[Object(c["o"])(s,null,{default:Object(c["db"])((function(){return[Object(c["o"])("h3",null,Object(c["S"])(a.title),1)]})),_:1}),Object(c["o"])(d,null,{default:Object(c["db"])((function(){return[Object(c["o"])("div",o,"发布时间："+Object(c["S"])(a.date),1),Object(c["o"])("div",r,Object(c["S"])(a.content),1)]})),_:1})]})),_:1})])}var a=n("b263"),i={data:function(){return{title:"",content:"",date:""}},created:function(){var t=this;Object(a["e"])(this.$route.query.id).then((function(e){console.log(e),t.title=e.data.title,t.content=e.data.content,t.date=e.data.date})).catch((function(e){console.log(e),e.error&&(t.$message({message:e.error,type:"error"}),t.$router.back())}))}};n("e58c");i.render=u;e["default"]=i}}]);
//# sourceMappingURL=chunk-02edd072.334158eb.js.map