(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{QMrq:function(e,t,a){"use strict";var l=a("fbTi"),n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("QKdE");var r=n(a("2Vcd"));a("jDyY");var o=n(a("q6Oz"));a("VIk5");var i=n(a("X+Ft")),d=l(a("rOct")),c=n(a("FQm9")),u=a("Nyzl"),s=n(a("SaUt")),f=a("x8j0"),m=function(e){function t(t){var a=e.call(this,t)||this;return a.handleRemoveCard=function(e){a.props.dispatch({type:"global/removeArticle",payload:e.target.getAttribute("data-time")})},a.changeCard=function(e){try{"block"===e.target.parentNode.parentNode.nextSibling.style.display?e.target.parentNode.parentNode.nextSibling.style.display="none":e.target.parentNode.parentNode.nextSibling.style.display="block"}catch(e){}},a.state={category:"life"},a}return d.__extends(t,e),t.getDerivedStateFromProps=function(e){var t=e.articleList;return{articleList:t}},t.prototype.render=function(){var e=this,t=[];return c.default.createElement(c.default.Fragment,null,c.default.createElement(i.default,{type:"life"===this.state.category?"primary":"dashed",size:"small",style:{margin:"0 10px 20px 0",borderRadius:"5px"},onClick:function(){e.setState({category:"life"})}},"\u751f\u6d3b"),c.default.createElement(i.default,{type:"tech"===this.state.category?"primary":"dashed",size:"small",style:{borderRadius:"5px"},onClick:function(){e.setState({category:"tech"})}},"\u6280\u672f"),c.default.createElement(r.default,{grid:{column:1},dataSource:this.props.loading?new Array(5):this.props.articleList.filter(function(t){return t.category===e.state.category||"tech"===e.state.category&&void 0===t.category}),rowKey:function(e){return e&&e.time},renderItem:function(a){if(a){var l=new Date(a.time),n=l.toLocaleString(),i=l.getFullYear()+"/"+(l.getMonth()+1)+"/"+l.getDate();return t.push(i),c.default.createElement(c.default.Fragment,null,t.indexOf(i)===t.length-1?c.default.createElement("p",null,i):null,c.default.createElement(r.default.Item,null,c.default.createElement(o.default,{hoverable:!0,title:a.title,bodyStyle:{display:"none"},extra:"?delete"===document.location.search?c.default.createElement("span",{onClick:e.handleRemoveCard,"data-time":a.time},"\xd7"):null,onClick:e.changeCard},c.default.createElement(f,{source:a.content,className:s.default.markDownCard,escapeHtml:!1}),c.default.createElement("span",null,n))))}return c.default.createElement(r.default.Item,null,c.default.createElement("div",{className:s.default.skeleton},c.default.createElement("div",{className:s.default.skeletonTitle}),c.default.createElement("div",{className:s.default.skeletonContent}),c.default.createElement("div",{className:s.default.skeletonTime})))}}))},t}(c.default.Component),p=(0,u.connect)(function(e){return{loading:e.loading.global,articleList:e.global.articleList,photoFiles:e.global.photoFiles}})(m);t.default=p}}]);