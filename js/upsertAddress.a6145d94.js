(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["upsertAddress"],{"19e9":function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("5502")),c=n("b775"),s=function(){var e=Object(a["b"])(),t=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.state.addressList,!n&&r.length){t.next=6;break}return t.next=4,Object(c["a"])("/api/user/address");case 4:s=t.sent,null!==s&&void 0!==s&&null!==(a=s.data)&&void 0!==a&&a.length&&e.commit("changeAddressList",s.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{getAddressList:t}};t["a"]=s},"1d6b":function(e,t,n){},"6bda":function(e,t,n){"use strict";n("1d6b")},8234:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),a=function(e){return Object(r["w"])("data-v-46f86bf1"),e=e(),Object(r["u"])(),e},c={class:"wrapper"},s={class:"title"},i={class:"title__text"},o={class:"form"},u={class:"form__item"},d=a((function(){return Object(r["g"])("div",{class:"form__item__label"},"所在城市:",-1)})),l={class:"form__item"},b=a((function(){return Object(r["g"])("div",{class:"form__item__label"},"小区/大厦/学校:",-1)})),m={class:"form__item"},f=a((function(){return Object(r["g"])("div",{class:"form__item__label"},"楼号-门牌号:",-1)})),p={class:"form__item"},_=a((function(){return Object(r["g"])("div",{class:"form__item__label"},"收货人:",-1)})),v={class:"form__item"},j=a((function(){return Object(r["g"])("div",{class:"form__item__label"},"联系电话:",-1)}));function O(e,t,n,a,O,g){return Object(r["t"])(),Object(r["f"])("div",c,[Object(r["g"])("div",s,[Object(r["g"])("div",{class:"iconfont title__back",onClick:t[0]||(t[0]=function(){return a.handleBackClick&&a.handleBackClick.apply(a,arguments)})},""),Object(r["g"])("div",i,Object(r["C"])(a.addressId?"编辑收货地址":"新建收货地址"),1),Object(r["g"])("div",{class:"title__save",onClick:t[1]||(t[1]=function(){return a.upsertAddress&&a.upsertAddress.apply(a,arguments)})},"保存")]),Object(r["g"])("div",o,[Object(r["g"])("div",u,[d,Object(r["K"])(Object(r["g"])("input",{class:"form__item__content",placeholder:"如北京市","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.formData.city=e})},null,512),[[r["F"],a.formData.city]])]),Object(r["g"])("div",l,[b,Object(r["K"])(Object(r["g"])("input",{class:"form__item__content",placeholder:"如理工大学国防科技园","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.formData.department=e})},null,512),[[r["F"],a.formData.department]])]),Object(r["g"])("div",m,[f,Object(r["K"])(Object(r["g"])("input",{class:"form__item__content",placeholder:"A号楼B层","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.formData.houseNumber=e})},null,512),[[r["F"],a.formData.houseNumber]])]),Object(r["g"])("div",p,[_,Object(r["K"])(Object(r["g"])("input",{class:"form__item__content",placeholder:"请填写收货人的姓名","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.formData.name=e})},null,512),[[r["F"],a.formData.name]])]),Object(r["g"])("div",v,[j,Object(r["K"])(Object(r["g"])("input",{class:"form__item__content",placeholder:"请填写收货手机号","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.formData.phone=e})},null,512),[[r["F"],a.formData.phone]])])])])}var g=n("1da1"),h=(n("96cf"),n("5502")),k=n("6c02"),w=n("b775"),D=n("19e9"),x=function(){var e=Object(h["b"])(),t=Object(r["D"])(e.state),n=t.addressList,a=Object(D["a"])(),c=a.getAddressList;return c(),{addressList:n}},y=function(e){var t=Object(k["d"])(),n=Object(r["x"])({city:"",department:"",houseNumber:"",name:"",phone:""}),a=function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var r,a,c,s,i,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["a"])("/api/user/address/".concat(e));case 2:r=t.sent,0===(null===r||void 0===r?void 0:r.errno)&&null!==r&&void 0!==r&&r.data&&(a=r.data,c=a.city,s=a.department,i=a.houseNumber,o=a.name,u=a.phone,n.city=c,n.department=s,n.houseNumber=i,n.name=o,n.phone=u);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var r=Object(g["a"])(regeneratorRuntime.mark((function r(){var a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e){r.next=7;break}return r.next=3,Object(w["b"])("/api/user/address/".concat(e),{data:n});case 3:a=r.sent,0===(null===a||void 0===a?void 0:a.errno)&&t.back(),r.next=11;break;case 7:return r.next=9,Object(w["c"])("/api/user/address",{data:n});case 9:c=r.sent,0===(null===c||void 0===c?void 0:c.errno)&&t.back();case 11:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return e&&a(),{formData:n,upsertAddress:c}},A={name:"MyAddressList",setup:function(){var e,t=Object(k["d"])(),n=Object(k["c"])(),r=null===n||void 0===n||null===(e=n.params)||void 0===e?void 0:e.id,a=x(),c=a.addressList,s=y(r),i=s.formData,o=s.upsertAddress,u=function(){t.back()};return{addressId:r,addressList:c,formData:i,handleBackClick:u,upsertAddress:o}}},L=(n("6bda"),n("6b0d")),C=n.n(L);const R=C()(A,[["render",O],["__scopeId","data-v-46f86bf1"]]);t["default"]=R}}]);
//# sourceMappingURL=upsertAddress.a6145d94.js.map