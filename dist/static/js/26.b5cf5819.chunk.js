webpackJsonp([26],{1249:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1263),a=r.n(n),u=r(1283),s=r(1264),i=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},c=this&&this.__generator||function(t,e){var r,n,a,u,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(a=2&u[0]?n.return:u[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,u[1])).done)return a;switch(n=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,n=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){s.label=u[1];break}if(6===u[0]&&s.label<a[1]){s.label=a[1],a=u;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(u);break}a[2]&&s.ops.pop(),s.trys.pop();continue}u=e.call(t,s)}catch(t){u=[6,t],n=0}finally{r=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}};e.default=a()(s.a,{namespace:"ycyh",state:{regprofile:{}},subscriptions:{setup:function(t){var e=t.dispatch;t.history.listen(function(t){"/signup/ycyh"===t.pathname&&e({type:"query",payload:{}})})}},effects:{query:function(t,e){var r,n,a=t.payload,s=e.call,i=e.put;return c(this,function(t){switch(t.label){case 0:return[4,s(u.b,a)];case 1:return(r=t.sent()).success?(n=r.data,[4,i({type:"updateState",payload:{regprofile:n.activity_signup.data[0]}})]):[3,3];case 2:return t.sent(),[3,4];case 3:throw r;case 4:return[2]}})}},reducers:{updateState:function(t,e){var r=e.payload;return i({},t,r)}}})},1263:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(r(458)),a=u(r(21));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(){for(var t=[],e={},r=[],u={},c=[],o={},l=[],f={},p=arguments.length,d=Array(p),h=0;h<p;h++)d[h]=arguments[h];var b=d.reduce(function(i,p){return i.namespace=p.namespace,"object"!==(0,a.default)(p.state)||Array.isArray(p.state)?"state"in p&&(i.state=p.state):(s(p.state,t,e),(0,n.default)(i.state,p.state)),s(p.subscriptions,r,u),(0,n.default)(i.subscriptions,p.subscriptions),s(p.effects,c,o),(0,n.default)(i.effects,p.effects),s(p.reducers,l,f),(0,n.default)(i.reducers,p.reducers),i},{state:{},subscriptions:{},effects:{},reducers:{}});return i(b,"state",e),i(b,"subscriptions",u),i(b,"effects",o),i(b,"reducers",f),b};var s=function(t,e,r){},i=function(t,e,r){}},1264:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(1263),a=r.n(n),u=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},s={reducers:{updateState:function(t,e){var r=e.payload;return u({},t,r)}}},i=a()(s,{state:{list:[],pagination:{showSizeChanger:!0,showQuickJumper:!0,showTotal:function(t){return"\u5171 "+t+" \u6761\u6570\u636e"},current:1,total:0,pageSize:10},searchValue:""},reducers:{querySuccess:function(t,e){var r=e.payload,n=r.list,a=r.pagination;return u({},t,{list:n,pagination:u({},t.pagination,a)})}}})},1283:function(t,e,r){"use strict";e.c=function(t){return Object(u.a)({url:i,method:"get",data:t})},e.b=function(t){return Object(u.a)({url:c,method:"get",data:t})},e.a=function(t){return Object(u.a)({url:o,method:"get",data:t})},e.d=function(t){var e=Object(n.b)("SystemAdmin"),r=l.replace(":uid",e.id);return Object(u.a)({url:r.replace(":id",t.id),method:"put",data:t})},e.e=function(t){return Object(u.a)({url:f,method:"get",data:t})},e.f=function(t){return Object(u.a)({url:f+"/"+t._id,method:"put",data:t})};var n=r(89),a=r(120),u=r(457),s=a.a.api,i=s.topSongList,c=s.regprofile,o=s.reglist,l=s.updateReg,f=s.userProfile}});
//# sourceMappingURL=26.b5cf5819.chunk.js.map