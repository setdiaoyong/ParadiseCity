(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{QHNV:function(t,e,n){"use strict";var a=n("284h"),i=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("D2jH");var l=i(n("2ROE"));n("mw1O");var s=i(n("nJCp"));n("XGli");var o=i(n("NHyu"));n("XCdk");var r=i(n("b+ud"));n("5aHp");var u=i(n("dzEL"));n("ufv1");var d=i(n("QYgq"));n("HVTF");var c=i(n("OT5E")),h=a(n("mrSG")),f=i(n("q1tI")),p=n("MuoO"),g=n("iRFk"),m=function(t){function e(e){var n=t.call(this,e)||this;return n.state={title:"",content:"",isPreview:!1,rightBtn:["\u9884\u89c8","\u7f16\u8f91"]},n}return h.__extends(e,t),e.prototype.handleTitleChange=function(t){t.length>20&&c.default.info("\u6807\u9898\u8fc7\u957f",1),this.setState({title:t})},e.prototype.handleContentChange=function(t){this.setState({content:t})},e.prototype.push=function(){return this.state.title?this.state.title.length>20?(c.default.info("\u6807\u9898\u8fc7\u957f",1),0):this.state.content?void this.props.dispatch({type:"global/sendNewArticle",payload:{title:this.state.title,content:this.state.content}}):(c.default.info("\u4f60\u4e0d\u5199\u5185\u5bb9\u600e\u4e48\u884c\uff01",1),0):(c.default.info("\u4f60\u4e0d\u5199\u6807\u9898\u600e\u4e48\u884c\uff01",1),0)},e.prototype.componentWillReceiveProps=function(t){t.isSuccessSubmit&&(c.default.success("\u53d1\u5e03\u6210\u529f",2),this.props.dispatch({type:"global/changeSubmitState",payload:!1}))},e.prototype.render=function(){var t=this;return f.default.createElement("div",null,f.default.createElement(s.default,{size:"md"},f.default.createElement(d.default,{size:"lg"}),f.default.createElement(u.default,{clear:!0,placeholder:"\u8f93\u5165\u6807\u9898",onChange:this.handleTitleChange.bind(this)}),this.state.isPreview?f.default.createElement(g,{source:this.state.content,escapeHtml:!1}):f.default.createElement(r.default,{clear:!0,rows:15,count:65535,placeholder:"\u8f93\u5165\u5185\u5bb9",value:this.state.content,onChange:this.handleContentChange.bind(this)}),f.default.createElement("div",{style:{display:"flex",position:"absolute",bottom:"1vh",width:"100%",justifyContent:"center"}},f.default.createElement(o.default,{type:"primary",size:"small",style:{width:"30%",marginRight:"5px"},onClick:this.push.bind(this)},"\u53d1\u5e03"),f.default.createElement(o.default,{size:"small",style:{width:"30%"},onClick:function(){t.setState({isPreview:!t.state.isPreview,rightBtn:t.state.rightBtn.reverse()})}},this.state.rightBtn[0])),f.default.createElement(d.default,{size:"lg"})),this.props.loading?f.default.createElement(l.default,{type:"loading",size:"lg",style:{position:"relative",bottom:"150px",left:"45%"}}):null)},e}(f.default.Component);function v(t){return{loading:t.loading.global,isSuccessSubmit:t.global.isSuccessSubmit}}var y=(0,p.connect)(v)(m);e.default=y}}]);