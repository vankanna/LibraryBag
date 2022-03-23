(function(){"use strict";var t={4597:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(9567),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"container-fluid mt-3"},[n("library-manager")],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar bg-dark text-light"},[n("span",{staticClass:"navbar-brand"},[n("i",{staticClass:"fas fa-shopping-bag mx-2"}),t._v(" CHECK IT OUT!")])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},t._l(t.library,(function(t,e){return n("library-item",{key:e,attrs:{item:t}})})),1),n("div",{staticClass:"card"},t._l(t.bag,(function(t,e){return n("bag-item",{key:e,attrs:{item:t}})})),1)])},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",class:{"border-success":t.item.isAvailable()}},[n("div",{staticClass:"card-body"},[n(t.typeOfItem,{tag:"component",attrs:{item:t.item}})],1),n("div",{staticClass:"card-footer"},[t.item.isAvailable()?n("button",{on:{click:function(e){return t.item.checkOut()}}},[t._v("Check Out")]):n("button",{on:{click:function(e){return t.item.checkIn()}}},[t._v("Check In")]),n("button",{on:{click:function(e){return t.item.remove()}}},[t._v("Remove")])])])},u=[],l=(n(8309),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"album"},[n("h3",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),n("p",{staticClass:"card-text"},[t._v("Artist: "+t._s(t.item.artist)+" | Track Count: "+t._s(t.item.trackCount))])])}),m=[],f=n(2751),h=n(6133),v=n(3796);function d(t,e){var n={CHECKED_IN:"in",CHECKED_OUT:"out",PURCHASED:"purchased",NOT_PURCHASED:"not-purchased"};return t.status=n.CHECKED_IN,t.purchased=n.NOT_PURCHASED,t.checkIn=function(){this.status=n.CHECKED_IN},t.checkOut=function(){this.status=n.CHECKED_OUT},t.isAvailable=function(){return this.status===n.CHECKED_IN&&this.purchased===n.NOT_PURCHASED},t.remove=e,t}function p(t,e){this.title=t,this.pages=e}var _=(0,f.Z)((function t(e,n){(0,h.Z)(this,t),(0,v.Z)(this,"title",""),(0,v.Z)(this,"runtime",0),this.title=e,this.runtime=n})),b=(0,f.Z)((function t(e,n,i){(0,h.Z)(this,t),(0,v.Z)(this,"title",""),(0,v.Z)(this,"artist",""),(0,v.Z)(this,"trackCount",0),this.title=e,this.artist=n,this.trackCount=i})),C={name:"AlbumDetails",props:{item:b}},I=C,g=n(1001),E=(0,g.Z)(I,l,m,!1,null,"7672758e",null),O=E.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book"},[n("h3",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),n("p",{staticClass:"card-text"},[t._v("Pages: "+t._s(t.item.pages))])])},y=[],w={name:"BookDetails",props:{item:p}},Z=w,x=(0,g.Z)(Z,k,y,!1,null,"310852af",null),D=x.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movie"},[n("h3",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),n("p",{staticClass:"card-text"},[t._v("Runtime: "+t._s(t.item.runtime))])])},A=[],H={name:"MovieDetails",props:{item:_}},U=H,$=(0,g.Z)(U,T,A,!1,null,"d1891504",null),j=$.exports,P={name:"LibraryItem",components:{AlbumDetails:O,BookDetails:D,MovieDetails:j},props:{item:{type:Object,required:!0},removeMethod:{type:Function}},computed:{typeOfItem:function(){return this.item.constructor.name+"Details"}}},K=P,M=(0,g.Z)(K,o,u,!1,null,"92abef50",null),N=M.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h3",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),n("button",{on:{click:function(e){return t.item.remove()}}},[t._v("Remove")])])])},L=[],B={name:"BagItem",props:{item:{type:Object,required:!0}}},S=B,q=(0,g.Z)(S,R,L,!1,null,"3029f507",null),F=q.exports;n(561);function V(){this.__proto__=[],this.addItem=function(t){return this.push(new d(t,function(t){return function(){t.removeItem(this)}}(this))),this},this.removeItem=function(t){return this.splice(this.indexOf(t),1),this}}var z=(0,f.Z)((function t(e,n){(0,h.Z)(this,t),this.title=e,this.removeMethod=n}));function G(){this.__proto__=[],this.addItem=function(t){this.push(new z(t,this.removeItem(t)))},this.removeItem=function(t){return this.splice(this.indexOf(t),1),this}}var J={name:"LibraryManager",components:{LibraryItem:N,BagItem:F},data:function(){var t=new G;return t.addItem("Test Item"),{library:(new V).addItem(new p("Interaction Design",234)).addItem(new p("Learn Vue",345)).addItem(new _("The Muppets",107)).addItem(new _("Strange Brew",97)).addItem(new b("Lilac","IU",12)).addItem(new b("Pallete","IU",11)),bag:t}}},Q=J,W=(0,g.Z)(Q,a,c,!1,null,"61d2c0ba",null),X=W.exports,Y={name:"App",components:{LibraryManager:X}},tt=Y,et=(0,g.Z)(tt,r,s,!1,null,null,null),nt=et.exports;i.Z.config.productionTip=!1,new i.Z({render:function(t){return t(nt)}}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,s){if(!i){var a=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],s=t[l][2];for(var c=!0,o=0;o<i.length;o++)(!1&s||a>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[o])}))?i.splice(o--,1):(c=!1,s<a&&(a=s));if(c){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[i,r,s]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,s,a=i[0],c=i[1],o=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(o)var l=o(n)}for(e&&e(i);u<a.length;u++)s=a[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},i=self["webpackChunkvue_components_cli"]=self["webpackChunkvue_components_cli"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4597)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.4e0ac59c.js.map