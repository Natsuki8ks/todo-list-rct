(this["webpackJsonptodolist-rct"]=this["webpackJsonptodolist-rct"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(3),l=n.n(i),o=(n(14),n(4)),r=n(1),s=n(5),u=n(6),d=n(7),m=n(8),h=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).addItem=function(){var e=a.state.id+1,t={id:e,value:a.state.newItem},n=[].concat(Object(r.a)(a.state.list),[t]);a.setState({id:e,list:n,newItem:""})},a.state={id:1,newItem:"",list:[]},a}return Object(u.a)(n,[{key:"updateInput",value:function(e,t){this.setState(Object(o.a)({},e,t))}},{key:"deleteItem",value:function(e){var t=Object(r.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"checkTodo",value:function(){}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"TodoApp"},c.a.createElement("h1",null,"Add an Item..."),c.a.createElement("br",null),c.a.createElement("input",{type:"text",placeholder:"Type list here..",value:this.state.newItem,onChange:function(t){return e.updateInput("newItem",t.target.value)}}),c.a.createElement("button",{className:"add",disabled:0===this.state.newItem.trim().length,onClick:this.addItem},"Add"),c.a.createElement("br",null),c.a.createElement("ul",null,this.state.list.map((function(t){return c.a.createElement("li",{key:t.id},c.a.createElement("input",{type:"checkbox",className:"checkbox"}),t.value,c.a.createElement("button",{className:"del",onClick:function(){return e.deleteItem(t.id)}},"X"))}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.6302851c.chunk.js.map