(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return r(2794)}])},2794:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return x}});var s=r(4051),t=r.n(s),i=r(5893),c=r(5742),a=r.n(c),o=r(9008),l=r.n(o),u=r(5675),d=r.n(u),f=r(7294);function h(e,n,r,s,t,i,c){try{var a=e[i](c),o=a.value}catch(l){return void r(l)}a.done?n(o):Promise.resolve(o).then(s,t)}function p(e){return function(){var n=this,r=arguments;return new Promise((function(s,t){var i=e.apply(n,r);function c(e){h(i,s,t,c,a,"next",e)}function a(e){h(i,s,t,c,a,"throw",e)}c(void 0)}))}}function x(e){var n=e.user;void 0===n&&(n={userName:"none",img:"none",bDate:"none",rDate:"none",rate:"none",gender:"none",region:"none"});var r=(0,f.useState)([]),s=r[0],c=r[1];(0,f.useEffect)((function(){var e=function(){var e=p(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:(r=e.sent).owner===n.userName&&c(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}));var o=function(){var e=p(t().mark((function e(){var n,r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/products");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=p(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,fetch("http://localhost:5000/products?id=".concat(n),{method:"DELETE"});case 3:c(s.filter((function(e){return e.id!==n})));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,i.jsxs)("div",{className:a().profile+" div",children:[(0,i.jsx)(l(),{children:(0,i.jsxs)("title",{children:["eMarker/",n.userName]})}),(0,i.jsxs)("div",{className:a().top,children:[(0,i.jsx)("div",{className:a().profileImg,children:(0,i.jsx)(d(),{src:n.img,alt:""})}),(0,i.jsxs)("div",{className:a().userInfo,children:[(0,i.jsx)("div",{className:a().info,children:(0,i.jsxs)("span",{children:[(0,i.jsx)("h3",{children:"Birth Date:"}),n.bDate]})}),(0,i.jsx)("div",{className:a().info,children:(0,i.jsxs)("span",{children:[(0,i.jsx)("h3",{children:"Reg Date:"}),n.rDate]})}),(0,i.jsx)("div",{className:a().info,children:(0,i.jsxs)("span",{children:[(0,i.jsx)("h3",{children:"Seller Rate:"}),n.rate,"/10"]})}),(0,i.jsx)("div",{className:a().info,children:(0,i.jsxs)("span",{children:[(0,i.jsx)("h3",{children:"Region:"}),n.region]})}),(0,i.jsx)("div",{className:a().info,children:(0,i.jsxs)("span",{children:[(0,i.jsx)("h3",{children:"Gender"}),n.gender]})})]})]}),(0,i.jsx)("div",{className:a().products,children:s.map((function(e,n){return(0,i.jsxs)("div",{className:"searchItem",children:[(0,i.jsx)(d(),{src:e.img,alt:""}),(0,i.jsxs)("div",{className:"all",children:[(0,i.jsxs)("div",{className:"leftSearch",children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("span",{children:e.price})]}),(0,i.jsx)("p",{children:e.desc})]}),(0,i.jsx)("button",{onClick:function(){return u(e.id)},children:"Delete"})]},n)}))})]})}},5742:function(e){e.exports={profile:"Profile_profile___IC9d",top:"Profile_top__90MjF",profileImg:"Profile_profileImg__qXt8R",userInfo:"Profile_userInfo__V2SPt",info:"Profile_info__TqbMW"}}},function(e){e.O(0,[959,774,888,179],(function(){return n=9344,e(e.s=n);var n}));var n=e.O();_N_E=n}]);