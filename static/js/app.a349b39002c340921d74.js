webpackJsonp([0],{"6wA/":function(t,n,s){t.exports=s.p+"static/img/yarhushta.807272b.png"},NHnr:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s("7+uW"),a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"main-container center-align",attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App",metaInfo:function(){return{title:"Armenian Youth page"}}},a,!1,function(t){s("uCDS")},null,null).exports,o=s("/ocq"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("ul",{staticClass:"submenu"},[n("li",[n("a",{attrs:{href:this.telegramLink}},[n("i",{staticClass:"fa fa-telegram"})])]),this._v(" "),n("li",[n("a",{attrs:{href:this.vkLink}},[n("i",{staticClass:"fa fa-vk"})])]),this._v(" "),n("li",[n("a",{on:{click:this.setSoon}},[n("i",{staticClass:"fa fa-instagram"})])])])])},staticRenderFns:[]};var c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main-info"},[this._v("\n  Here will be beautiful text for searching creative peoples\n")])},staticRenderFns:[]};var l={name:"BusinessCard",data:function(){return{title:"Armenian Youth",soon:"Link coming soon...",isSoon:!1}},components:{SocialLinks:s("VU/8")({name:"SocialLinks",data:function(){return{telegramLink:"https://t.me/joinchat/E53qM0ofa2Sw0EaH7k70kA",vkLink:"https://vk.me/join/AJQ1dxOvtBUuRzwPao005HzV"}},methods:{setSoon:function(){this.$emit("set-soon")}}},r,!1,function(t){s("qXTQ")},"data-v-7ab0dd6a",null).exports,MainInfoBlock:s("VU/8")({name:"MainInfoBlock"},c,!1,function(t){s("y/r2")},"data-v-1775ae24",null).exports},methods:{setIsSoon:function(){var t=this;this.isSoon=!0,setTimeout(function(){t.isSoon=!1},1e3)}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"bg"},[e("h1",{staticClass:"before-all"},[t._v("Welcome to")]),t._v(" "),e("h1",{staticClass:"main-title"},[t._v(t._s(t.title))]),t._v(" "),e("img",{attrs:{src:s("6wA/"),alt:""}}),t._v(" "),e("div",{staticClass:"overlay"},[t.isSoon?e("h1",{staticClass:"main-title soon"},[t._v(t._s(t.soon))]):t._e(),t._v(" "),e("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("main-info-block",{staticClass:"main-block"}),t._v(" "),e("social-links",{staticClass:"link-list",on:{"set-soon":t.setIsSoon}})],1)])])},staticRenderFns:[]};var f=s("VU/8")(l,u,!1,function(t){s("bpqQ")},"data-v-19b81845",null).exports;e.a.use(o.a);var v=new o.a({routes:[{path:"/",name:"BusinessCard",component:f}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:v,components:{App:i},template:"<App/>"})},bpqQ:function(t,n){},qXTQ:function(t,n){},uCDS:function(t,n){},"y/r2":function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.a349b39002c340921d74.js.map