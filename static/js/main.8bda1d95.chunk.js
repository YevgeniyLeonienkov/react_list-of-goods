(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),s=n.n(r),i=n(3),l=n(4),c=n(7),d=n(5),u=n(8),m=n(6),h=function(e){var t=e.allGoods,n=e.handleRevers;return o.a.createElement("div",null,o.a.createElement("button",{onClick:n,type:"button"},"Reverse"),o.a.createElement("ul",null,t.map(function(e){return o.a.createElement("li",null,e)})))},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(e){return Object(m.a)(e).reverse()},b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={goods:[],isLoaded:!1,isLoading:!1},n.handleClick=function(){n.setState({isLoading:!0}),setTimeout(function(){n.setState({goods:p,isLoaded:!0,isLoading:!1})},1e3)},n.handleRevers=function(){n.setState({goods:g(p)})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("main",null,this.state.isLoaded?o.a.createElement(h,{allGoods:this.state.goods,handleRevers:this.handleRevers}):o.a.createElement("button",{type:"button",className:"loadData",onClick:this.handleClick},this.state.isLoading?"Loading...":"Load"))}}]),t}(o.a.Component);s.a.render(o.a.createElement(b,{test:123}),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.8bda1d95.chunk.js.map