webpackJsonp([39],{1221:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(1269),n=a(456),o=(a.n(n),a(39)),s=this&&this.__assign||Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c=this&&this.__generator||function(e,t){var a,r,n,o,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;s;)try{if(a=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){s.label=o[1];break}if(6===o[0]&&s.label<n[1]){s.label=n[1],n=o;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(o);break}n[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};t.default={namespace:"indexbanner",state:{modalVisible:!1,modalType:"create",tabKey:"1",focusList:{},currentItem:{},previewVisible:!1,previewImage:""},subscriptions:{setup:function(e){var t=e.dispatch;e.history.listen(function(e){"/banner/indexbanner"===e.pathname&&t({type:"query",payload:s({},n.parse(e.search))})})}},effects:{query:function(e,t){var a,n,o=e.payload,u=t.call,i=t.put;return c(this,function(e){switch(e.label){case 0:return[4,u(r.c,s({},o,{type:1}))];case 1:return(a=e.sent()).success?(console.log(a,"data"),n=a.data.focus,[4,i({type:"updateState",payload:{focusList:n.data}})]):[3,3];case 2:return e.sent(),[3,4];case 3:throw a;case 4:return[2]}})},queryModifyFocus:function(e,t){var a,n=e.payload,s=t.call,u=t.put;return c(this,function(e){switch(e.label){case 0:return[4,s(r.a,n,{method:"put"})];case 1:return(a=e.sent()).success?(console.log(a,"data"),o.t.success("\u4fee\u6539\u6210\u529f"),[4,u({type:"query",payload:{}})]):[3,4];case 2:return e.sent(),[4,u({type:"updateState",payload:{modalVisible:!1}})];case 3:return e.sent(),[3,5];case 4:throw a;case 5:return[2]}})},addFocus:function(e,t){var a,n=e.payload,s=t.call,u=t.put;return c(this,function(e){switch(e.label){case 0:return[4,s(r.a,n,{method:"post"})];case 1:return(a=e.sent()).success?(console.log(a,"data"),o.t.success("\u4fee\u6539\u6210\u529f"),[4,u({type:"query",payload:{}})]):[3,4];case 2:return e.sent(),[4,u({type:"updateState",payload:{modalVisible:!1}})];case 3:return e.sent(),[3,5];case 4:throw a;case 5:return[2]}})}},reducers:{updateState:function(e,t){var a=t.payload;return console.log("payload",a),s({},e,a)},showModal:function(e,t){var a=t.payload;return s({},e,a,{modalVisible:!0})},hideModal:function(e){return s({},e,{modalVisible:!1})}}}},1269:function(e,t,a){"use strict";t.b=function(e){return Object(o.a)({url:u,method:"get",data:e})},t.c=function(e){return Object(o.a)({url:i,method:"get",data:e})},t.a=function(e,t){console.log("method",t);var a=Object(r.b)("SystemAdmin"),n=l.replace(":uid",a.id);return Object(o.a)(s({url:"put"===t.method?n.replace(":id",e.id):n.replace("/:id","")},t,{data:e}))};var r=a(89),n=a(120),o=a(457),s=this&&this.__assign||Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c=n.a.api,u=c.indexbanner,i=c.focusList,l=c.modifyFocus}});
//# sourceMappingURL=39.2649332a.chunk.js.map