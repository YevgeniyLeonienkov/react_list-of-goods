(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(2),r=n.n(s),i=n(3),l=n(4),c=n(6),d=n(5),u=n(7),m=function(e){var t=e.allGoods,n=e.handleRevers;return o.a.createElement("div",null,o.a.createElement("button",{onClick:n,type:"button"},"Reverse"),o.a.createElement("ul",null,t.map(function(e){return o.a.createElement("li",null,e)})))},h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={goods:[],isLoaded:!1,isLoading:!1},n.handleClick=function(){n.setState({isLoading:!0}),setTimeout(function(){n.setState({goods:h,isLoaded:!0,isLoading:!1})},1e3)},n.handleRevers=function(){n.setState({goods:h.reverse()})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("main",null,this.state.isLoaded?o.a.createElement(m,{allGoods:this.state.goods,handleRevers:this.handleRevers}):o.a.createElement("button",{type:"button",className:"loadData",onClick:this.handleClick},this.state.isLoading?"Loading...":"Load"))}}]),t}(o.a.Component);r.a.render(o.a.createElement(p,{test:123}),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9be892be.chunk.js.map