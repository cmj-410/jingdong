(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderList"],{"159b":function(t,e,c){var n=c("da84"),r=c("fdbc"),o=c("785a"),i=c("17c2"),a=c("9112"),s=function(t){if(t&&t.forEach!==i)try{a(t,"forEach",i)}catch(e){t.forEach=i}};for(var u in r)r[u]&&s(n[u]&&n[u].prototype);s(o)},"17c2":function(t,e,c){"use strict";var n=c("b727").forEach,r=c("a640"),o=r("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},3104:function(t,e,c){"use strict";c("c491")},"38ce":function(t,e,c){},"3c1d":function(t,e,c){"use strict";var n=c("7a23"),r={class:"docker"},o=["innerHTML"],i={class:"docker__title"};function a(t,e,c,a,s,u){var d=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["f"])("div",r,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(a.dockerList,(function(t,e){return Object(n["t"])(),Object(n["f"])("div",{class:Object(n["p"])({docker__item:!0,"docker__item--active":e===c.currentIndex}),key:t.icon},[Object(n["j"])(d,{to:t.to},{default:Object(n["J"])((function(){return[Object(n["g"])("div",{class:"iconfont",innerHTML:t.icon},null,8,o),Object(n["g"])("div",i,Object(n["C"])(t.text),1)]})),_:2},1032,["to"])],2)})),128))])}var s={name:"Docker",props:["currentIndex"],setup:function(){var t=[{icon:"&#xe6f3;",text:"首页",to:{name:"Home"}},{icon:"&#xe7e5;",text:"购物车",to:{name:"CartList"}},{icon:"&#xe61e;",text:"订单",to:{name:"OrderList"}},{icon:"&#xe660;",text:"我的",to:{name:"PersonalInfo"}}];return{dockerList:t}}},u=(c("3104"),c("6b0d")),d=c.n(u);const l=d()(s,[["render",a],["__scopeId","data-v-35ff7262"]]);e["a"]=l},"77a1":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),r=function(t){return Object(n["w"])("data-v-07885676"),t=t(),Object(n["u"])(),t},o={class:"wrapper"},i=r((function(){return Object(n["g"])("div",{class:"title"},"我的订单",-1)})),a={class:"orders"},s={class:"order__title"},u={class:"order__status"},d={class:"order__content"},l={class:"order__content__imgs"},b=["src"],f={class:"order__content__info"},j={class:"order__content__price"},O={class:"order__content__count"};function v(t,e,c,r,v,_){var p=Object(n["A"])("Docker");return Object(n["t"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",o,[i,Object(n["g"])("div",a,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(r.list,(function(t,e){return Object(n["t"])(),Object(n["f"])("div",{class:"order",key:e},[Object(n["g"])("div",s,[Object(n["i"])(Object(n["C"])(t.shopName)+" ",1),Object(n["g"])("span",u,Object(n["C"])(t.isCanceled?"已取消":"已下单"),1)]),Object(n["g"])("div",d,[Object(n["g"])("div",l,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(t.products,(function(t,e){return Object(n["t"])(),Object(n["f"])(n["a"],{key:e},[e<=3?(Object(n["t"])(),Object(n["f"])("img",{key:0,class:"order__content__img",src:t.product.img},null,8,b)):Object(n["e"])("",!0)],64)})),128))]),Object(n["g"])("div",f,[Object(n["g"])("div",j,"¥ "+Object(n["C"])(t.totalPrice),1),Object(n["g"])("div",O,"共 "+Object(n["C"])(t.totalNumber)+" 件",1)])])])})),128))])]),Object(n["j"])(p,{currentIndex:2})],64)}var _=c("1da1"),p=(c("96cf"),c("d3b7"),c("159b"),c("b775")),g=c("3c1d"),m=function(){var t=Object(n["x"])({list:[]}),e=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var c,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["a"])("/api/order");case 2:n=e.sent,0===(null===n||void 0===n?void 0:n.errno)&&null!==n&&void 0!==n&&null!==(c=n.data)&&void 0!==c&&c.length&&(r=n.data,r.forEach((function(t){var e=t.products||[],c=0,n=0;e.forEach((function(t){var e;n+=(null===t||void 0===t?void 0:t.orderSales)||0,c+=(null===t||void 0===t||null===(e=t.product)||void 0===e?void 0:e.price)*(null===t||void 0===t?void 0:t.orderSales)||0})),t.totalPrice=c,t.totalNumber=n})),t.list=n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e();var c=Object(n["D"])(t),r=c.list;return{list:r}},h={name:"OrderList",components:{Docker:g["a"]},setup:function(){var t=m(),e=t.list;return{list:e}}},k=(c("ece3"),c("6b0d")),x=c.n(k);const w=x()(h,[["render",v],["__scopeId","data-v-07885676"]]);e["default"]=w},a640:function(t,e,c){"use strict";var n=c("d039");t.exports=function(t,e){var c=[][t];return!!c&&n((function(){c.call(null,e||function(){return 1},1)}))}},c491:function(t,e,c){},ece3:function(t,e,c){"use strict";c("38ce")}}]);
//# sourceMappingURL=orderList.59f11e97.js.map