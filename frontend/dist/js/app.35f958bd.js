(function(e){function t(t){for(var a,s,c=t[0],i=t[1],l=t[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("v-app-bar",{attrs:{color:"primary",dark:""}},[r("v-toolbar-title",[e._v(" Proyecto Javascript Fullstack ")]),r("v-spacer"),r("v-btn",{attrs:{text:"",to:"/productos"}},[e._v("Productos")]),r("v-btn",{attrs:{text:""}},[e._v("Login")])],1),e.alert?r("app-alert",{attrs:{message:e.alert.message,type:e.alert.type,closeAlert:e.closeAlert}}):e._e(),r("router-view")],1)],1)},o=[],s=r("5530"),c=r("2f62"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-alert",{staticClass:"text-center",attrs:{type:e.type,dismissible:"",outlined:"",border:"left"},on:{input:e.closeAlert}},[e._v(" "+e._s(e.message)+" ")])},l=[],u={props:{message:{type:String,default:""},type:{type:String,default:"error"},closeAlert:Function}},p=u,d=r("2877"),f=r("6544"),m=r.n(f),v=r("0798"),b=Object(d["a"])(p,i,l,!1,null,null,null),h=b.exports;m()(b,{VAlert:v["a"]});var g={name:"App",components:{AppAlert:h},computed:Object(s["a"])({},Object(c["c"])(["alert"])),methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["setAlert"])),{},{closeAlert:function(){this.setAlert(null)}})},w=g,y=r("7496"),x=r("40dc"),O=r("8336"),_=r("f6c4"),j=r("2fa4"),P=r("2a7f"),A=Object(d["a"])(w,n,o,!1,null,null,null),V=A.exports;m()(A,{VApp:y["a"],VAppBar:x["a"],VBtn:O["a"],VMain:_["a"],VSpacer:j["a"],VToolbarTitle:P["a"]});var E=r("8c4f"),T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-main",{staticClass:"home"},[r("v-card",{staticClass:"mx-auto my-auto",attrs:{width:"400px"}},[r("v-card-title",{staticClass:"pb-0"},[r("h1",{staticClass:"mx-auto mb-5"},[e._v("Ingreso")])]),r("v-form",{ref:"form"},[r("v-text-field",{attrs:{label:"Correo","prepend-icon":"mdi-account-circle",rules:e.emailRules,"validate-on-blur":"","data-cy":"username"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{label:"Contraseña",type:e.showPassword?"text":"password",rules:e.passwordRules,"validate-on-blur":"","prepend-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off","data-cy":"password"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("v-divider"),r("v-card-actions",[r("v-btn",{attrs:{to:"/registro",color:"success"}},[e._v(" Registro ")]),r("v-spacer"),r("v-btn",{attrs:{color:"info","data-cy":"login-btn"},on:{click:e.login}},[e._v(" Ingresar ")])],1)],1)],1)},k=[],C=r("1da1"),S=(r("96cf"),r("260b")),R=(r("ea7b"),{apiKey:"AIzaSyBZQ2u3e4GEDDwMZlgEDV0PEQrXnN5rPRY",authDomain:"rootchile-boolean.firebaseapp.com",projectId:"rootchile-boolean",storageBucket:"rootchile-boolean.appspot.com",messagingSenderId:"968981922090",appId:"1:968981922090:web:911b6440224f862f781e53"}),I=S["a"].initializeApp(R),M={data:function(){return{email:"",emailRules:[function(e){return!!e||"El correo es requerido"},function(e){return/.+@.+\..+/.test(e)||"El correo debe tener formato válido"}],password:"",passwordRules:[function(e){return!!e||"La contraseña es requerida"}],showPassword:!1}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["setAlert"])),{},{validate:function(){return this.$refs.form.validate()},login:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.validate()){t.next=10;break}return t.prev=1,t.next=4,I.auth().signInWithEmailAndPassword(e.email,e.password);case 4:e.$router.push({name:"Products"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),e.setAlert({message:"Error al hacer autenticación",type:"error"});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}})},D=M,$=r("b0af"),B=r("99d9"),L=r("ce7e"),z=r("4bd4"),F=r("8654"),U=Object(d["a"])(D,T,k,!1,null,null,null),J=U.exports;m()(U,{VBtn:O["a"],VCard:$["a"],VCardActions:B["a"],VCardTitle:B["c"],VDivider:L["a"],VForm:z["a"],VMain:_["a"],VSpacer:j["a"],VTextField:F["a"]});var q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-main",[r("h1",{staticClass:"title-1 text-center my-5"},[e._v("Productos")]),r("section",{attrs:{"data-cy":"products"}},[r("v-row",e._l(e.products,(function(e){return r("v-col",{key:e.id,attrs:{cols:"4","data-cy":"product-item"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{src:e.image,"lazy-src":"https://via.placeholder.com/300","aspect-ratio":"1",height:"200px"}}),r("v-card-title"),r("v-card-text")],1)],1)})),1)],1)])},Q=[],Z={computed:Object(s["a"])({},Object(c["c"])(["products"])),methods:Object(s["a"])({},Object(c["b"])(["getProducts"])),created:function(){this.getProducts()}},G=Z,K=r("62ad"),N=r("adda"),W=r("0fd9"),X=Object(d["a"])(G,q,Q,!1,null,null,null),Y=X.exports;m()(X,{VCard:$["a"],VCardText:B["b"],VCardTitle:B["c"],VCol:K["a"],VImg:N["a"],VMain:_["a"],VRow:W["a"]}),a["a"].use(E["a"]);var H=[{path:"/",name:"Login",component:J},{path:"/productos",name:"Products",component:Y,meta:{login:!0}}],ee=new E["a"]({mode:"history",routes:H});ee.beforeEach((function(e,t,r){var a=I.auth().currentUser,n=e.matched.some((function(e){return e.meta.login}));!a&&n?r("/"):r()}));var te=ee,re=r("bc3a"),ae=r.n(re),ne="api/products",oe={getProducts:function(){return Object(C["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null===(t=I.auth().currentUser)||void 0===t?void 0:t.getIdToken(!0);case 3:return r=e.sent,a={Authorization:"Bearer ".concat(r)},e.next=7,ae.a.get(ne,{headers:a});case 7:return n=e.sent,e.abrupt("return",n.data);case 11:throw e.prev=11,e.t0=e["catch"](0),new Error("Productos momentáneamente no disponibles");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}};a["a"].use(c["a"]);var se=new c["a"].Store({state:{products:[],alert:null},mutations:{SET_PRODUCTS:function(e,t){e.products=t},SET_ALERT:function(e,t){e.alert=t}},actions:{getProducts:function(e){return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,oe.getProducts();case 4:a=t.sent,r("SET_PRODUCTS",a),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),r("SET_ALERT",{message:t.t0.message,type:"error"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},setAlert:function(e,t){var r=e.commit;r("SET_ALERT",t)}}}),ce=r("f309");a["a"].use(ce["a"]);var ie=new ce["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:te,store:se,vuetify:ie,render:function(e){return e(V)}}).$mount("#app")}});
//# sourceMappingURL=app.35f958bd.js.map