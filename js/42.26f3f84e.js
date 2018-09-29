(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{367:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t.n(a),o=t(5),s=t.n(o),i=t(2),c=t.n(i),d=t(6),l=t.n(d),u=t(411),m=(t(503),function(e){function n(){var e,a,o,i;s()(this,n);for(var d=arguments.length,l=Array(d),u=0;u<d;u++)l[u]=arguments[u];return a=o=c()(this,(e=n.__proto__||r()(n)).call.apply(e,[this].concat(l))),o.document=function(){return{document:t(420),className:"badge-page"}},i=a,c()(o,i)}return l()(n,e),n}(u.a));n.default=m},401:function(e,n,t){"use strict";t(241),t(329)},411:function(e,n,t){"use strict";var a=t(406),r=t.n(a),o=t(407),s=t.n(o),i=t(408),c=t.n(i),d=t(4),l=t.n(d),u=t(5),m=t.n(u),p=t(7),h=t.n(p),v=t(2),f=t.n(v),g=t(6),x=t.n(g),N=t(0),C=t.n(N),B=t(55),y=t.n(B),b=t(409),w=t.n(b),k=t(410),_=t(1),D=t.n(_),E=t(413),M=t.n(E),A=(t(414),t(415),t(416),t(333),function(e){function n(){return m()(this,n),f()(this,(n.__proto__||l()(n)).apply(this,arguments))}return x()(n,e),h()(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props,t=n.onChange,a=n.value;this.cm=M()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(a),this.cm.on("changes",function(n){t&&(clearTimeout(e.timeout),e.timeout=setTimeout(function(){t(n.getValue())},300))})}},{key:"render",value:function(){var e=this;return C.a.createElement("div",{className:"editor",ref:function(n){e.editor=n}})}}]),n}(N.Component)),O=A;A.propTypes={onChange:D.a.func,value:D.a.string},A.defaultProps={onChange:function(){},value:""};t(401);var S=function(e){function n(e){m()(this,n);var t=f()(this,(n.__proto__||l()(n)).call(this,e));return t.toggleShowCode=function(){t.setState({isOpen:!t.state.isOpen})},t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={isOpen:!1},t}return x()(n,e),h()(n,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&y.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(e){var n=this;Promise.all([t.e(5),t.e(6),t.e(71)]).then(t.bind(null,544)).then(function(e){return{args:["context","React","ReactDOM","zarm"],argv:[n,C.a,y.a,e]}}).then(function(t){var a=t.args;t.argv;e=e.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+n.containerId+"')");var r=Object(k.transform)(e,{presets:["es2015","react"]}).code;a.push(r),n.source[2]=e}).catch(function(e){0})}},{key:"render",value:function(){var e=this;return C.a.createElement("div",null,C.a.createElement("h3",null,this.title),C.a.createElement("div",{className:"demo"},C.a.createElement("div",{className:"demo-code"},C.a.createElement("div",{className:"demo-code-editor",ref:function(n){e.code=n},dangerouslySetInnerHTML:{__html:this.description}}),C.a.createElement(O,{value:this.source[2],onChange:function(n){return e.renderSource(n)}}))))}}]),n}(N.Component),I=function(e){function n(e){m()(this,n);var t=f()(this,(n.__proto__||l()(n)).call(this,e));return t.nodeList=[],t.components=new c.a,t.renderer=new w.a.Renderer,t}return x()(n,e),h()(n,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(e){y.a.unmountComponentAtNode(e)})}},{key:"renderDOM",value:function(){var e=!0,n=!1,t=void 0;try{for(var a,o=r()(this.components);!(e=(a=o.next()).done);e=!0){var i=a.value,c=s()(i,2),d=c[0],l=c[1],u=document.getElementById(d);this.nodeList.push(u),u instanceof HTMLElement&&y.a.render(l,u)}}catch(e){n=!0,t=e}finally{try{!e&&o.return&&o.return()}finally{if(n)throw t}}}},{key:"render",value:function(){var e=this,n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=n.document,a=n.className;if("string"==typeof t){this.components.clear();var r=w()(t.replace(/:::\s?api\s?([^]+?):::/g,function(e,n){return n}).replace(/:::\s?demo\s?([^]+?):::/g,function(n,t,a){var r=a.toString(36);return e.components.set(r,C.a.createElement(S,e.props,t)),"<div id="+r+"></div>"}),{renderer:this.renderer});return C.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:r}})}return C.a.createElement("span",null)}}]),n}(C.a.Component);n.a=I},420:function(e,n){e.exports='## 徽标 Badge\n\n:::demo 基本用法\n```jsx\nimport { Badge, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell hasArrow title="点状" description={<Badge text="99" />} onClick={() => {}} />\n        <Cell hasArrow title="圆形" description={<Badge shape="circle" text={3} />} onClick={() => {}} />\n        <Cell hasArrow title="椭圆形" description={<Badge shape="round" text="999+" />} onClick={() => {}} />\n        <Cell hasArrow title="圆角" description={<Badge shape="radius" text="new" />} onClick={() => {}} />\n        <Cell hasArrow title="直角" description={<Badge shape="rect" text="免费" />} onClick={() => {}} />\n        <Cell hasArrow title="叶形" description={<Badge shape="leaf" text="新品" />} onClick={() => {}} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 上标位置\n```jsx\nimport { Badge } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="custom-panel">\n        <div className="box">\n          <Badge sup shape="dot"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="circle" text="3" theme=\'warning\'><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="round" text="999+" theme=\'success\'><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="radius" text="new"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="rect" text="免费"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="leaf" text="新品"><div className="box-item" /></Badge>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n:::demo\n```jsx\nimport { Badge } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="text-panel">\n        <div className="box">\n          <Badge sup shape="dot"><span className="box-text">邀请有奖</span></Badge>\n        </div>\n        <div className="box">\n          <span className="box-text">邀请有奖</span><Badge sup shape="dot"/>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-badge | | 类名前缀 |\n| className | string | | | 追加类名 |\n| theme | string | `error` | `default`, `primary`, `info`, `success`, `warning`, `error` | 主题 |\n| text | string | | | 显示文字 |\n| shape | string | | `dot`, `rect` , `radius`, `round`, `circle` ,`leaf` | 形状 |\n| sup | bool | false | | 是否上标位置 |\n\n:::\n'},503:function(e,n,t){}}]);