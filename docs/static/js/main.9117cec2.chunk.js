(this["webpackJsonpparadise-city-mini"]=this["webpackJsonpparadise-city-mini"]||[]).push([[0],{0:function(t,e,a){t.exports={"sider-menu":"src_sider-menu__1Bw2a",content:"src_content__3N9hT",loading:"src_loading__3ANA8",load:"src_load__2XCvD","main-container":"src_main-container__3_HVZ",catagory:"src_catagory__2B-wO","catagory-item":"src_catagory-item__IA7Qu","catagory-item-active":"src_catagory-item-active___ITnh",title:"src_title__YXAJk","title-name":"src_title-name__1Yfuv","title-props":"src_title-props__2wQgW","title-user":"src_title-user__29Qky","article-container":"src_article-container__1teJI",back:"src_back__6MTGB","article-props":"src_article-props__TqCvT","article-title":"src_article-title__2UyCo","article-content":"src_article-content__3Q680","write-container":"src_write-container__9b_gM","write-title":"src_write-title__12-bU","write-catagory":"src_write-catagory__2LnOH","editor-container":"src_editor-container__2m6Aw","write-textarea":"src_write-textarea__152_-",parseMarkdown:"src_parseMarkdown__1ObP0",submitButton:"src_submitButton__24YPm","about-container":"src_about-container__DBowH",rot:"src_rot__115DF"}},11:function(t,e){t.exports=React},185:function(t,e){},196:function(t,e,a){"use strict";a.r(e);a(61);var n=a(13),r=a(14),c=a(17),o=a(16),i=a(0),s=a.n(i),l=a(15),u=a.n(l),m=a(1),p=a.n(m),h=a(3),d="61e06fdec3996fbda3c",f="eb8094d137bf927e7e5b2";function g(){return(g=Object(h.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/article",{method:"GET",headers:{Authorization:"token "+d+f}}).then((function(t){return t.status<299?t.json():null})).then((function(t){return t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return v.apply(this,arguments)}function v(){return(v=Object(h.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/article/"+e,{method:"GET",headers:{Authorization:"token "+d+f}}).then((function(t){return t.json()})).then((function(t){return t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,e,a){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(p.a.mark((function t(e,a,n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Date.now(),t.next=3,fetch("https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/article/"+e+"-"+n+"-"+r+".md",{method:"PUT",headers:{Authorization:"token "+d+f},body:JSON.stringify({message:"AutoPush Article: "+e,content:btoa(unescape(encodeURIComponent(JSON.stringify({title:e,content:a,time:r,catagory:n}))))})}).then((function(t){return t.json()})).then((function(t){return!0})).catch((function(t){return!1}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=Object(h.a)(p.a.mark((function t(e,a,n,r,c,o,i){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E({sha:e,title:a,catagory:r,time:o}).then((function(t){return t})).catch((function(t){return t}));case 2:if("remove failed"!==t.sent){t.next=5;break}return t.abrupt("return",Promise.reject("update failed"));case 5:return t.next=7,R(n,i,c);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){return b.apply(this,arguments)}function b(){return(b=Object(h.a)(p.a.mark((function t(e){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("rm"===(a=prompt("\u4f60\u6b63\u5728\u53d8\u66f4\u79c1\u6709\u5e93\u7684\u6587\u4ef6\u5b58\u50a8\uff0c\u8f93\u5165Token:"))){t.next=4;break}return alert(a+" \u4e0d\u662f\u6709\u6548\u7684 Token"),t.abrupt("return",Promise.reject("remove failed"));case 4:return t.next=6,fetch("https://api.github.com/repos/xiaozhaoqi/privateRepository/contents/files/article/"+e.title+"-"+e.catagory+"-"+e.time+".md",{method:"DELETE",headers:{Authorization:"token "+d+f},body:JSON.stringify({message:"AutoDelete article: "+e.title,sha:e.sha})}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.log(t)}));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.PARADISE_CITY_Fetch=window.fetch,window.fetch=Object(h.a)(p.a.mark((function t(){var e,a=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.PARADISE_CITY_Loading(),t.next=3,(e=window).PARADISE_CITY_Fetch.apply(e,a).finally((function(){window.PARADISE_CITY_Loading()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));var A=(0,ReactRouterDOM.withRouter)((function(t){var e=window.PARADISE_history.location.state||t.article;return document.location.hash||t.history.push("/"),React.createElement(React.Fragment,null,React.createElement("span",{className:s.a.back,onClick:function(){t.history.push("/")}},"\u8fd4\u56de"),React.createElement("span",{className:s.a.back,onClick:function(){t.history.push("/write",{article:e,isEdit:!0})}},"\u7f16\u8f91"),React.createElement("span",{className:s.a.back,style:{color:"red"},onClick:function(){E(e).then((function(){location.href=location.origin})).catch((function(){}))}},"\u5220\u9664"),React.createElement("div",{className:s.a["article-container"]},React.createElement("p",{className:s.a["article-title"]},e.title),React.createElement("p",{className:s.a["article-props"]},React.createElement("span",null,e.catagory||"\u6280\u672f"),e.time&&React.createElement("span",null,"\u6700\u540e\u7f16\u8f91\u4e8e ",new Date(e.time).toLocaleDateString()),e.content&&React.createElement("span",null,"\u9884\u8ba1\u9605\u8bfb\u65f6\u95f4 ",(e.content.length/200+1).toFixed(0)," \u5206\u949f")),React.createElement(u.a,{className:s.a["article-content"],source:e.content,escapeHtml:!1})))})),x=a(58),k=a(57),S=a.n(k),I=function(t){var e=React.useState(""),a=Object(x.a)(e,2),n=a[0],r=a[1];return React.useEffect((function(){t.articleList[0]&&r(t.articleList[0].catagory)}),[t.articleList]),React.createElement("div",{className:s.a["main-container"]},React.createElement("div",{className:s.a.catagory},t.articleList.map((function(t){return t.catagory||"\u6280\u672f"})).filter((function(t,e,a){return a.indexOf(t,0)===e})).reverse().map((function(t,e,a){return React.createElement("a",{onClick:function(t){r(t.target.innerText)},className:n===t?s.a["catagory-item-active"]:s.a["catagory-item"]},t)}))),t.articleList.filter((function(t){return t.catagory===n})).map((function(t){return React.createElement("p",{className:s.a.title,key:t.name,onClick:function(){_(t.name).then((function(t){t&&(window.PARADISE_history.push("/article",{title:JSON.parse(decodeURIComponent(escape(atob(t.content)))).title,content:JSON.parse(decodeURIComponent(escape(atob(t.content)))).content,time:JSON.parse(decodeURIComponent(escape(atob(t.content)))).time,catagory:JSON.parse(decodeURIComponent(escape(atob(t.content)))).catagory,sha:t.sha}),document.location.hash=t.sha)}))}},React.createElement("img",{src:S.a,alt:"",className:s.a["title-user"]}),React.createElement("p",{className:s.a["title-name"]},t.name.slice(0,"0000/00/00"===t.date?-3:-17).split("-")[0]),React.createElement("span",{className:s.a["title-props"]},t.date),React.createElement("span",{className:s.a["title-props"]},t.size+"\u5b57\u8282"))})))},C=function(t){Object(c.a)(a,t);var e=Object(o.a)(a);function a(t){var r;Object(n.a)(this,a),(r=e.call(this,t)).recorder=void 0,r.clearInput=function(){r.setState({text:"",title:"",help:""}),localStorage.removeItem("writing-title"),localStorage.removeItem("writing-text")},r.save=function(){localStorage.setItem("writing-title",r.state.title),localStorage.setItem("writing-text",r.state.text)},r.push=function(){var t=r.props.location.state,e=(t=void 0===t?{}:t).isEdit,a=void 0!==e&&e,n=t.article,c=(n=void 0===n?{}:n).title,o=void 0===c?"":c,i=n.catagory,s=void 0===i?"":i,l=n.time,u=void 0===l?"":l,m=n.sha,p=void 0===m?"":m;r.state.title?a?function(t,e,a,n,r,c,o){return y.apply(this,arguments)}(p,o,r.state.title,s,r.state.catagory||"\u6280\u672f",u,r.state.text).then((function(){r.setState({text:"",title:"",help:"\ud83d\ude0a\u66f4\u65b0\u6210\u529f\u4e86\uff0c\u79c1\u6709\u5e93\u5b58\u50a8\u7684\u6587\u4ef6\u5bf9\u4f60\u6765\u8bf4\u662f\u4e0d\u53ef\u89c1\u7684\uff0c\u4f46\u5728\u9996\u9875\u53ef\u4ee5\u770b\u5230!"})})):R(r.state.title,r.state.text,r.state.catagory||"\u6280\u672f").then((function(){r.setState({text:"",title:"",help:"\ud83d\ude0a\u53d1\u5e03\u6210\u529f\u4e86\uff0c\u79c1\u6709\u5e93\u5b58\u50a8\u7684\u6587\u4ef6\u5bf9\u4f60\u6765\u8bf4\u662f\u4e0d\u53ef\u89c1\u7684\uff0c\u4f46\u5728\u9996\u9875\u53ef\u4ee5\u770b\u5230!"})})):r.setState({help:'\ud83e\udd22\u4f60\u9700\u8981\u4e00\u4e2a\u6807\u9898\uff0c"\u6807\u9898+\u5206\u7c7b+\u65f6\u95f4\u6233"\u5c06\u4f5c\u4e3a\u79c1\u6709\u5e93\u5b58\u50a8\u6587\u4ef6\u7684\u552f\u4e00\u6807\u8bc6!'})};var c=t.location.state,o=(c=void 0===c?{}:c).article,i=(o=void 0===o?{}:o).content,s=void 0===i?"":i,l=o.title,u=void 0===l?"":l,m=o.catagory,p=void 0===m?"":m;return r.state={text:s||localStorage.getItem("writing-text")||"",title:u||localStorage.getItem("writing-title")||"",catagory:p||"",help:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.recorder=setInterval((function(){var e=localStorage.getItem("writing-text")&&localStorage.getItem("writing-text").length||0;Math.abs(e-t.state.text.length)>100&&t.save()}),3e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.recorder)}},{key:"render",value:function(){var t=this,e=this.props.location.state,a=(e=void 0===e?{}:e).isEdit,n=void 0!==a&&a;return React.createElement("div",{className:s.a["write-container"]},React.createElement("input",{className:s.a["write-title"],placeholder:"\u6807\u9898",value:this.state.title,onChange:function(e){t.setState({title:e.target.value})}}),React.createElement("div",{className:s.a["editor-container"]},React.createElement("textarea",{onChange:function(e){t.setState({text:e.target.value})},placeholder:"\u4f7f\u7528Markdown\u8bed\u6cd5\u4e66\u5199\u6b63\u6587\uff0c\u53f3\u4fa7\u9762\u677f\u9884\u89c8\u683c\u5f0f",className:s.a["write-textarea"],value:this.state.text}),React.createElement(u.a,{source:this.state.text,className:s.a.parseMarkdown,escapeHtml:!1})),React.createElement("input",{className:s.a["write-catagory"],placeholder:"\u81ea\u5b9a\u4e49\u5206\u7c7b\uff0c\u9ed8\u8ba4\u4e3a[\u6280\u672f]",value:this.state.catagory,onChange:function(e){t.setState({catagory:e.target.value})}}),React.createElement("div",null,React.createElement("button",{onClick:this.push,className:s.a.submitButton},n?"\u66f4\u65b0\u8fd9\u7bc7\u6587\u7ae0\u5230GitHub\u79c1\u6709\u5e93":"\u53d1\u5e03\u5230GitHub\u79c1\u6709\u5e93"),React.createElement("button",{className:s.a.submitButton,onClick:this.clearInput},"\u6e05\u7a7a\u8f93\u5165\u5185\u5bb9")),React.createElement("p",{style:{color:"red",marginTop:"10px"}},this.state.help))}}]),a}(React.Component),N=(0,ReactRouterDOM.withRouter)(C),O=function(){var t=document.createElement("img");return t.src="https://s11.flagcounter.com/count/m1nf/bg_FFFFFF/txt_000000/border_FFFFFF/columns_2/maxflags_64/viewers_3/labels_1/pageviews_1/flags_0/percent_0/",t.onload=function(){var e=document.querySelector(".load-counter");e&&e.classList.remove("load-counter"),e&&e.appendChild(t)},React.createElement("div",{className:s.a["about-container"]},React.createElement("p",null,"\u563f"),React.createElement("p",null,"\u8fd9\u662f\u6211\u7684\u7f51\u7edc\u65e5\u5fd7"),React.createElement("p",null,"\u770b\u770b\u548c\u4f60\u4e00\u6837\u7684\u4eba\u6765\u81ea\u54ea\u91cc"),React.createElement("div",{className:"load-counter",style:{marginTop:"10px"}}))},D=a(59),U=Object(D.a)(),T=ReactRouterDOM,F=T.BrowserRouter,M=T.Switch,Q=T.Route,j=T.Link;window.PARADISE_history=window.PARADISE_history||U;var L=function(t){Object(c.a)(a,t);var e=Object(o.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={loading:!1,articleList:[],article:{}},r.initData=function(){(function(){return g.apply(this,arguments)})().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(document.location.hash){var e=document.location.hash.split("#")[1],a=t.filter((function(t){return e.indexOf(t.sha)>-1}));a.length?_(a[0].name).then((function(t){t&&r.setState({article:{title:JSON.parse(decodeURIComponent(escape(atob(t.content)))).title,content:JSON.parse(decodeURIComponent(escape(atob(t.content)))).content,time:JSON.parse(decodeURIComponent(escape(atob(t.content)))).time,catagory:JSON.parse(decodeURIComponent(escape(atob(t.content)))).catagory,sha:t.sha}})})):location.href=location.origin}r.setState({articleList:t.map((function(t){var e=t.name.slice(-16,-3).replace(/\D*/,"");if(13===e.length){var a=new Date(parseInt(e));t.year=a.getFullYear(),t.month=a.getMonth()+1,t.day=a.getDate(),t.date=a.toLocaleDateString(),t.catagory=t.name.slice(0,-17).split("-")[1]||"\u6280\u672f"}return t})).sort((function(t,e){return t.date<e.date?1:-1}))||[]})}))},r.loading=function(){r.setState({loading:!r.state.loading})},r.coloring=function(t){document.querySelector(":root").setAttribute("style","--mainColor: "+t.target.value),r.forceUpdate()},window.PARADISE_CITY_Loading=r.loading,r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){return React.createElement(F,{history:U},React.createElement("nav",{className:s.a["sider-menu"]},React.createElement("label",{htmlFor:"color",title:"\u70b9\u51fb\u66f4\u6362\u6587\u5b57\u989c\u8272"},"\ud83d\udc6b"),React.createElement(j,{to:"/about"},"\u7edf\u8ba1"),React.createElement(j,{to:"/write"},"\u8bb0\u5f55"),React.createElement(j,{to:"/",onClick:this.initData},"\u56de\u987e"),React.createElement("input",{type:"color",id:"color",onChange:this.coloring})),React.createElement("div",{className:s.a.content},React.createElement(M,null,React.createElement(Q,{exact:!0,path:"/"},React.createElement(I,{articleList:this.state.articleList})),React.createElement(Q,{exact:!0,path:"/article"},React.createElement(A,{article:this.state.article})),React.createElement(Q,{exact:!0,path:"/write"},React.createElement(N,null)),React.createElement(Q,{exact:!0,path:"/about"},React.createElement(O,null)))),this.state.loading?React.createElement("div",{className:s.a.loading}):null)}}]),a}(React.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));ReactDOM.render(React.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},57:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAvklEQVRYhe2YsQ2AMAwEAVHQMQSzwCzUDMI8LMMQlHRUFETCbycCffHXBqLTx0ms1OO5VTdDv1Zu9mN5GyqZp/H/+Q8SQrTGWLK6ocrInocuIQkh6ITquZucn/prs2Q30CUkIQSdkHVS2xi3fQl0CUkIQScUKOrs9iMEXUISQtAJPYr6o8PXJtkrdAlJCJF/2/tb2BB0CUkIQSekFhYhIQSdkFXUds+a/Qpr7wa6hCSEoBMKvKD9A11CEkLQCV0ZTCcOXM9UwQAAAABJRU5ErkJggg=="},60:function(t,e,a){t.exports=a(196)},61:function(t,e,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.9117cec2.chunk.js.map