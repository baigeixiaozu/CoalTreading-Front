(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e0e2b37"],{"8ba6":function(t,e,n){"use strict";n.r(e);var o=n("7a23"),r=Object(o["n"])("保存"),c=Object(o["n"])("发布"),u=Object(o["n"])("清除");function i(t,e,n,i,l,a){var f=Object(o["O"])("el-input"),s=Object(o["O"])("el-form-item"),d=Object(o["O"])("el-button"),b=Object(o["O"])("el-form");return Object(o["F"])(),Object(o["k"])(b,{ref:"form",model:l.form,"label-width":"80px"},{default:Object(o["db"])((function(){return[Object(o["o"])(s,{label:"标题"},{default:Object(o["db"])((function(){return[Object(o["o"])(f,{modelValue:l.form.title,"onUpdate:modelValue":e[1]||(e[1]=function(t){return l.form.title=t}),placeholder:"请输入标题"},null,8,["modelValue"])]})),_:1}),Object(o["o"])(s,{label:"文章内容"},{default:Object(o["db"])((function(){return[Object(o["o"])(f,{type:"textarea",modelValue:l.form.content,"onUpdate:modelValue":e[2]||(e[2]=function(t){return l.form.content=t}),placeholder:"请输入内容",rows:30},null,8,["modelValue"])]})),_:1}),Object(o["o"])(s,null,{default:Object(o["db"])((function(){return[Object(o["o"])(d,{onClick:a.save},{default:Object(o["db"])((function(){return[r]})),_:1},8,["onClick"]),Object(o["o"])(d,{type:"primary",onClick:a.onSubmit},{default:Object(o["db"])((function(){return[c]})),_:1},8,["onClick"]),Object(o["o"])(d,{type:"primary",onClick:a.clear},{default:Object(o["db"])((function(){return[u]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model"])}var l=n("b263"),a={data:function(){return{id:null,form:{title:"",content:""}}},created:function(){var t=this.$route.query;t.id&&(this.id=t.id,this.loadNewsDetail(t.id))},methods:{postarticle:function(t,e){var n=this,o=t;console.log(o),Object(l["g"])(o,e).then((function(t){console.log(t)})).catch((function(t){console.log(t),t.error&&(n.$message({message:t.error,type:"error"}),n.$router.back())}))},onSubmit:function(){this.postarticle(this.form,"publish/"),this.clear()},clear:function(){this.form.title="",this.form.content=""},save:function(){this.postarticle(this.form,"draft/")},loadNewsDetail:function(t){var e=this;Object(l["e"])(t).then((function(t){console.log(t),e.form=t.data}))}}};a.render=i;e["default"]=a},b263:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return i})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return f}));var o=n("a27e"),r=function(t,e){return console.log(t,e),o["a"].get("/news/show",{params:{current:t,size:e}})},c=function(t){return o["a"].get("/news/detail/"+t)},u=function(t){return o["a"].get("/news/more/"+t)},i=function(t,e){return o["a"].post("/news/"+e,{title:t.title,content:t.content})},l=function(t,e){return console.log(t,e),o["a"].get("/news/showAudit",{params:{current:t,size:e}})},a=function(t){return console.log(t),o["a"].post("/news/audit/reject/"+t)},f=function(t){return console.log(t),o["a"].post("/news/audit/pass/"+t)}}}]);
//# sourceMappingURL=chunk-3e0e2b37.bd04d934.js.map