webpackJsonp([12],{1256:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(0),o=a.n(n),i=a(236),l=(a.n(i),a(76)),s=(a.n(l),a(39)),c=a(456),u=a.n(c),p=a(1288),d=a(1315),h=a.n(d),m=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])},function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),f=this&&this.__assign||Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},y=s.h.Search,g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.showModal=function(e){t.props.dispatch({type:"userlists/updateState",payload:{modalVisible:!0,currentItem:e}})},t.handleSearch=function(e){t.props.dispatch({type:"userlists/updateState",payload:{searchValue:e}}),t.props.dispatch({type:"userlists/query",payload:{}})},t}return m(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.userlists,r=t.dispatch,i=t.loading,c=t.location,d=a.list,m=a.pagination,g=a.currentItem,b=a.modalVisible,_=c.query,v=c.pathname,O={pagination:m,dataSource:d,columns:[{title:"\u5e8f\u53f7",dataIndex:"id"},{title:"\u7528\u6237\u5934\u50cf",dataIndex:"avatar",render:function(e){return o.a.createElement("span",{className:h.a.avatar},o.a.createElement("img",{src:e,alt:"\u7528\u6237\u5934\u50cf"}))}},{title:"\u7528\u6237\u6635\u79f0",dataIndex:"name"},{title:"\u7528\u6237id",dataIndex:"user_id"},{title:"\u6ce8\u518c\u65f6\u95f4",dataIndex:"created_at",sorter:function(e,t){return new Date(e.created_at).getTime()-new Date(t.created_at).getTime()}},{title:"\u64cd\u4f5c",render:function(t){return o.a.createElement(s.b,{onClick:function(){return e.showModal(t)}},"\u5c01\u7981")}}],loading:i.effects["userlists/query"],onChange:function(e){r(l.routerRedux.push({pathname:v,search:u.a.stringify(f({},_,{current_page:e.current,per_page:e.pageSize}))}))}},w={item:g,visible:b,maskClosable:!1,title:"\u5c01\u7981\u7528\u6237",wrapClassName:"vertical-center-modal",onOk:function(e){r({type:"userlists/freezeUser",payload:f({},e)}),r({type:"userlists/updateState",payload:{modalVisible:!1}})},onCancel:function(){r({type:"userlists/updateState",payload:{modalVisible:!1}})}};return o.a.createElement(n.Fragment,null,o.a.createElement(s.n,{className:"margin-bottom",type:"flex",align:"middle"},o.a.createElement(s.d,{span:6},o.a.createElement("h3",{style:{marginBottom:0}},"\u7528\u6237\u5217\u8868")),o.a.createElement(s.d,{span:18,className:"text-right"},o.a.createElement(y,{style:{width:200},placeholder:"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u6635\u79f0",onSearch:this.handleSearch,enterButton:!0}))),o.a.createElement(s.q,f({},O,{bordered:!0,rowKey:function(e){return e.id}})),b&&o.a.createElement(p.a,f({},w)))},t}(o.a.PureComponent);t.default=Object(i.connect)(function(e){return{userlists:e.userlists,loading:e.loading,dispatch:e.dispatch}})(g)},1288:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(39),i=a(120),l=this&&this.__assign||Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a},c=i.a.reasonType,u=o.f.Item,p=o.h.TextArea,d=o.o.Option,h={labelCol:{span:6},wrapperCol:{span:14}};t.a=o.f.create()(function(e){var t=e.item,a=void 0===t?{}:t,r=e.onOk,i=e.form,m=i.getFieldDecorator,f=i.validateFields,y=i.getFieldsValue,g=s(e,["item","onOk","form"]),b=l({},g,{onOk:function(){f(function(e){if(!e){var t=l({},y(),{freezeid:a.user_id,user_name:a.name});r(t)}})}});return n.a.createElement(o.l,l({},b),n.a.createElement(o.f,{layout:"horizontal"},n.a.createElement(u,l({label:"\u5c01\u7981\u7528\u6237",hasFeedback:!0},h),n.a.createElement("span",null,a.name)),n.a.createElement(u,l({label:"\u5c01\u7981\u65f6\u95f4",hasFeedback:!0},h),m("freeze_time",{rules:[{required:!0,message:"\u53ea\u80fd\u8f93\u5165\u6574\u6570\uff08\u5fc5\u586b\uff09"}]})(n.a.createElement(o.h,{type:"number",placeholder:"\u8bf7\u8f93\u5165\u5c01\u7981\u65f6\u95f4\uff08\u5c0f\u65f6\uff09"}))),n.a.createElement(u,l({label:"\u5c01\u7981\u539f\u56e0",hasFeedback:!0},h),m("reason_type",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5c01\u7981\u539f\u56e0"}]})(n.a.createElement(o.o,{showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u539f\u56e0",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},c.map(function(e,t){return n.a.createElement(d,{key:t,value:t+1},e)})))),n.a.createElement(u,l({label:"\u5907\u6ce8",hasFeedback:!0},h),m("remark",{rules:[{}]})(n.a.createElement(p,{autosize:!0})))))})},1315:function(e,t,a){var r=a(1316);"string"===typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0};a(54)(r,n);r.locals&&(e.exports=r.locals)},1316:function(e,t,a){(t=e.exports=a(53)(void 0)).push([e.i,".textRight_1H0Wz{text-align:right}.avatar_2FeH-{display:block;margin:0 auto;width:80px;height:80px;border-radius:50%;overflow:hidden}.avatar_2FeH- img{width:100%}",""]),t.locals={textRight:"textRight_1H0Wz",avatar:"avatar_2FeH-"}}});
//# sourceMappingURL=12.5b9d8c9f.chunk.js.map