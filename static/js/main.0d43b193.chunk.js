(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(2),s=a.n(i),r=a(3),c=a(4),l=a(6),d=a(5),u=a(7),m=function(e){var t=e.allGoods;return o.a.createElement("ul",null,t.map(function(e){return o.a.createElement("li",null,e)}))},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={goods:[],isLoaded:!1,isLoading:!1},a.handleClick=function(){a.setState({isLoading:!0}),setTimeout(function(){a.setState({goods:p,isLoaded:!0,isLoading:!1})},0)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("main",null,this.state.isLoaded?o.a.createElement(m,{allGoods:this.state.goods}):o.a.createElement("button",{type:"button",className:"loadData",onClick:this.handleClick},this.state.isLoading?"Loading...":"Load"))}}]),t}(o.a.Component);s.a.render(o.a.createElement(g,{test:123}),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0d43b193.chunk.js.map