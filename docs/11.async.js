(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{R29j:function(t,e,a){"use strict";var l=a("284h"),n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("P2fV");var o=n(a("NJEC"));a("+L6B");var i=n(a("2/Rp"));a("7Kak");var r=n(a("9yH6"));a("Pwec");var u=n(a("CtXQ"));a("/xke");var s=n(a("TeRw"));a("OaEy");var c=n(a("2fM7"));a("5NDa");var d=n(a("5rEg")),f=l(a("mrSG")),m=n(a("q1tI")),p=a("MuoO"),g=a("iRFk"),h=a("SaUt"),w=(d.default.Group,c.default.Option,d.default.TextArea),v=function(t){function e(e){var a,l,n=t.call(this,e)||this;return n.handleText=function(t){n.setState({text:t.target.value,isNullText:!t.target.value})},n.handleTitle=function(t){n.setState({title:t.target.value,isNullTitle:!t.target.value})},n.openNotification=function(t,e,a){s.default.open({message:t,description:e,icon:a})},n.clearInput=function(){n.setState({text:"",title:""}),localStorage&&(localStorage.removeItem("writing-title"),localStorage.removeItem("writing-text"))},n.save=function(){localStorage?(localStorage.setItem("writing-title",n.state.title),localStorage.setItem("writing-text",n.state.text),n.openNotification("\u4fdd\u5b58\u8349\u7a3f\u6210\u529f\uff01","\u8349\u7a3f\u5b58\u50a8\u4e8e\u60a8\u7684\u78c1\u76d8\u4e2d\uff0c\u5f53\u60a8\u4e0b\u6b21\u8bbf\u95ee\u672c\u9875\u65f6\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u8349\u7a3f\u5230\u7f16\u8f91\u5668\u4e2d\u3002",m.default.createElement(u.default,{type:"smile",style:{color:"green"}}))):n.openNotification("\u4fdd\u5b58\u8349\u7a3f\u5931\u8d25\uff01","\u60a8\u7684\u6d4f\u89c8\u5668\u53ef\u80fd\u4e0d\u652f\u6301\u79bb\u7ebf\u5b58\u50a8\uff0c\u8bf7\u4f7f\u7528Edge\u3001Chrome\u7b49\u73b0\u4ee3\u6d4f\u89c8\u5668\u4f53\u9a8c\u3002",m.default.createElement(u.default,{type:"frown",style:{color:"red"}}))},n.push=function(){n.state.title&&n.state.text?(n.props.dispatch({type:"global/sendNewArticle",payload:{title:n.state.title,content:n.state.text,category:n.state.category}}),n.openNotification("\u53d1\u5e03\u4e2d\u2026\u2026","\u60a8\u7684\u7559\u8a00\u6b63\u5728\u5199\u5165GitHub\u9759\u6001\u6587\u4ef6\u670d\u52a1\u5668\uff0c\u7a0d\u540e\u5c06\u5728\u7559\u8a00\u5361\u7247\u4e2d\u5c55\u793a\u3002",m.default.createElement(u.default,{type:"smile",style:{color:"green"}})),n.clearInput()):(n.state.title||(window.scrollTo({top:0}),n.setState({isNullTitle:!0})),n.state.text||(window.scrollTo({top:0}),n.setState({isNullText:!0})),n.openNotification("\u73b0\u5728\u8fd8\u4e0d\u80fd\u53d1\u5e03","\u60a8\u7684\u7559\u8a00\u6807\u9898\u6216\u5185\u5bb9\u4e3a\u7a7a\uff0c\u8bf7\u8f93\u5165\u5b8c\u6574\u3002",m.default.createElement(u.default,{type:"frown",style:{color:"red"}})))},localStorage&&(a=localStorage.getItem("writing-title"),l=localStorage.getItem("writing-text")),n.state={text:l||"",title:a||"",isNullTitle:!1,isNullText:!1,category:"life"},n}return f.__extends(e,t),e.prototype.render=function(){var t=this;return m.default.createElement("div",null,m.default.createElement(r.default.Group,{defaultValue:"life",style:{marginBottom:"10px"},onChange:function(e){t.setState({category:e.target.value})}},m.default.createElement(r.default.Button,{value:"life"},"\u751f\u6d3b"),m.default.createElement(r.default.Button,{value:"tech"},"\u6280\u672f")),m.default.createElement(d.default,{value:this.state.title,placeholder:"\u6807\u9898",onChange:this.handleTitle,className:this.state.isNullTitle?h.dangerTitle:h.primaryTitle}),m.default.createElement("div",null,m.default.createElement(w,{onChange:this.handleText,className:this.state.isNullText?h.dangerWriteArea:h.writeArea,value:this.state.text,placeholder:"Markdown\u8bed\u6cd5\u7f16\u8f91\u5668",autosize:!0}),m.default.createElement(g,{source:this.state.text,className:h.parseMarkdown,escapeHtml:!1})),m.default.createElement("div",{style:{float:"left"}},m.default.createElement(i.default,{type:"primary",onClick:this.push,className:h.submitButton},"\u53d1\u5e03"),localStorage?m.default.createElement(i.default,{type:"default",onClick:this.save,className:h.submitButton},"\u5b58\u4e3a\u8349\u7a3f"):null,m.default.createElement(o.default,{title:"\u786e\u5b9a\u6e05\u9664\u6b63\u5728\u7f16\u8f91\u7684\u5185\u5bb9\uff0c\u5e76\u6e05\u7a7a\u8349\u7a3f\u7bb1\uff1f",onConfirm:this.clearInput,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},m.default.createElement(i.default,{type:"danger",className:h.submitButton},"\u91cd\u7f6e")),m.default.createElement(i.default,{type:"dashed",onClick:function(){window.open("https://www.baidu.com/s?wd=markdown\u8bed\u6cd5","_blank")},className:h.submitButton},"Help")))},e}(m.default.Component),y=(0,p.connect)()(v);e.default=y}}]);