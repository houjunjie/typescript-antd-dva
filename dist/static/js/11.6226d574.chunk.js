webpackJsonp([11],{1244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=n.n(r),i=n(236),c=(n.n(i),n(76)),l=(n.n(c),n(39)),d=n(456),s=n.n(d),u=n(120),p=n(1286),m=n(1266),f=n.n(m),h=this&&this.__extends||(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=this&&this.__assign||Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},g=l.r.TabPane,_=l.h.Search,w=u.a.reasonType,b=2,x=3,E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.showModal=function(e){t.props.dispatch({type:"reportcontent/updateState",payload:{modalVisible:!0,currentItem:e}})},t.delComment=function(e){var n=t.props.dispatch;l.l.confirm({title:"\u5220\u9664",content:"\u5220\u9664\u540e\u4e0d\u53ef\u6062\u590d\uff0c\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",onOk:function(){n({type:"reportcontent/delComment",payload:{id:e.id}})},onCancel:function(){console.log(1)}})},t.handleSearch=function(e){t.props.dispatch({type:"reportcontent/updateState",payload:{searchValue:e}}),t.props.dispatch({type:"reportcontent/query",payload:{}})},t.handleTabClick=function(e){var n=t.props.location.pathname;t.props.dispatch(c.routerRedux.push({pathname:n,search:s.a.stringify({target_type:e})}))},t}return h(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.reportcontent,a=t.dispatch,i=t.loading,d=t.location,u=n.list,m=n.pagination,h=n.currentItem,E=n.modalVisible;d.query=s.a.parse(d.search);var v=d.query,k=d.pathname,O=[{title:"\u5e8f\u53f7",dataIndex:"",render:function(e,t,n){return n+1}},{title:"\u4f5c\u54c1",dataIndex:"",render:function(e){return o.a.createElement("span",{className:f.a.avatar},o.a.createElement("img",{src:e.work_comment.work.description,alt:"\u5c01\u9762"}))}},{title:"\u914d\u6587",dataIndex:"",render:function(e){return o.a.createElement("span",null,e.work_comment.work.description)}},{title:"\u7528\u6237",dataIndex:"",render:function(e){return o.a.createElement("span",null,e.work_comment.user.name)}},{title:"\u53d1\u5e03\u65f6\u95f4",dataIndex:"created_at",sorter:function(e,t){return new Date(e.created_at).getTime()-new Date(t.created_at).getTime()}},{title:"\u4e3e\u62a5\u4eba",dataIndex:"",render:function(e){return o.a.createElement("span",null,e.user.name)}},{title:"\u539f\u56e0",dataIndex:"reason_type",render:function(e){return o.a.createElement("span",null,w[e-1])}},{title:"\u5907\u6ce8",dataIndex:"remark"},{title:"\u4e3e\u62a5\u65f6\u95f4",dataIndex:"updated_at",sorter:function(e,t){return new Date(e.updated_at).getTime()-new Date(t.updated_at).getTime()}},{title:"\u64cd\u4f5c",render:function(t){return o.a.createElement(l.b,{onClick:function(){return e.showModal(t)}},"\u4e0b\u67b6")}}],I=[{title:"\u5e8f\u53f7",dataIndex:"",render:function(e,t,n){return n+1}},{title:"\u4e3b\u9898\u4f5c\u54c1",dataIndex:"",render:function(e){return o.a.createElement("span",{className:f.a.avatar},o.a.createElement("img",{src:e.work_comment.work.description,alt:"\u5c01\u9762"}))}},{title:"\u4e3b\u9898\u914d\u6587",dataIndex:"",render:function(e){return o.a.createElement("span",null,e.work_comment.work.description)}},{title:"\u8bc4\u8bba\u8be6\u60c5",dataIndex:"",render:function(e){return o.a.createElement("span",null,e.work_comment.content)}},{title:"\u7528\u6237",dataIndex:"",render:function(e){return o.a.createElement("span",null,e.work_comment.user.name)}},{title:"\u53d1\u5e03\u65f6\u95f4",dataIndex:"created_at",sorter:function(e,t){return new Date(e.created_at).getTime()-new Date(t.created_at).getTime()}},{title:"\u4e3e\u62a5\u4eba",dataIndex:"user",render:function(e){return o.a.createElement("span",null,e.name)}},{title:"\u539f\u56e0",dataIndex:"reason_type",render:function(e){return o.a.createElement("span",null,w[e-1])}},{title:"\u5907\u6ce8",dataIndex:"remark"},{title:"\u4e3e\u62a5\u65f6\u95f4",dataIndex:"updated_at",sorter:function(e,t){return new Date(e.updated_at).getTime()-new Date(t.updated_at).getTime()}},{title:"\u64cd\u4f5c",render:function(t){return o.a.createElement(l.b,{onClick:function(){return e.delComment(t)}},"\u5220\u9664")}}],C={pagination:m,dataSource:u,columns:2===v.target_type?O:I,loading:i.effects["reportcontent/query"],onChange:function(e){a(c.routerRedux.push({pathname:k,search:s.a.stringify(y({},v,{current_page:e.current,per_page:e.pageSize}))}))}},S={item:h,visible:E,maskClosable:!1,title:"\u4e0b\u67b6",wrapClassName:"vertical-center-modal",onOk:function(e){a({type:"reportcontent/offShelf",payload:y({status:3},e)}),a({type:"reportcontent/updateState",payload:{modalVisible:!1}})},onCancel:function(){a({type:"reportcontent/updateState",payload:{modalVisible:!1}})}};return o.a.createElement(r.Fragment,null,o.a.createElement(l.n,{className:"margin-bottom",type:"flex",align:"middle"},o.a.createElement(l.d,{span:6},o.a.createElement("h3",{style:{marginBottom:0}},"\u4e3e\u62a5\u5185\u5bb9")),o.a.createElement(l.d,{span:18,className:f.a.textRight},o.a.createElement(_,{style:{width:300},placeholder:"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u4f5c\u54c1\u540d\u79f0",onSearch:this.handleSearch,enterButton:!0}))),o.a.createElement(l.r,{activeKey:v.target_type===String(x)?String(x):String(b),onTabClick:this.handleTabClick},o.a.createElement(g,{tab:"\u4e3e\u62a5\u7684\u4f5c\u54c1",key:String(b)},o.a.createElement(l.q,y({},C,{bordered:!0,rowKey:function(e){return e.id}}))),o.a.createElement(g,{tab:"\u4e3e\u62a5\u7684\u8bc4\u8bba",key:String(x)},o.a.createElement(l.q,y({},C,{bordered:!0,rowKey:function(e){return e.id}})))),E&&o.a.createElement(p.a,y({},S)))},t}(o.a.PureComponent);t.default=Object(i.connect)(function(e){return{reportcontent:e.reportcontent,loading:e.loading,dispatch:e.dispatch}})(E)},1266:function(e,t,n){var a=n(1267);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0};n(54)(a,r);a.locals&&(e.exports=a.locals)},1267:function(e,t,n){(t=e.exports=n(53)(void 0)).push([e.i,".textRight_2G87a{text-align:right}.avatar_2V6Bf{display:block;margin:0 auto;width:80px;height:80px;border-radius:50%;overflow:hidden}.avatar_2V6Bf img{width:100%}.mr10_3sCER{margin-right:10px}",""]),t.locals={textRight:"textRight_2G87a",avatar:"avatar_2V6Bf",mr10:"mr10_3sCER"}},1286:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(39),i=n(120),c=this&&this.__assign||Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},d=i.a.reasonType,s=o.f.Item,u=o.o.Option,p=o.h.TextArea,m={labelCol:{span:6},wrapperCol:{span:14}};t.a=o.f.create()(function(e){var t=e.item,n=void 0===t?{}:t,a=e.onOk,i=e.form,f=i.getFieldDecorator,h=i.validateFields,y=i.getFieldsValue,g=l(e,["item","onOk","form"]),_=c({},g,{onOk:function(){h(function(e){if(!e){var t=c({},y(),{id:n.id});a(t)}})}});return r.a.createElement(o.l,c({},_),r.a.createElement(o.f,{layout:"horizontal"},r.a.createElement(s,c({label:"\u4e0b\u67b6\u539f\u56e0",hasFeedback:!0},m),f("reason_type",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4e0b\u67b6\u539f\u56e0"}]})(r.a.createElement(o.o,{showSearch:!0,placeholder:"\u8bf7\u9009\u62e9\u539f\u56e0",optionFilterProp:"children",filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},d.map(function(e,t){return r.a.createElement(u,{key:t,value:t+1},e)})))),r.a.createElement(s,c({label:"\u5907\u6ce8",hasFeedback:!0},m),f("remark",{rules:[{}]})(r.a.createElement(p,{autosize:!0})))))})}});
//# sourceMappingURL=11.6226d574.chunk.js.map