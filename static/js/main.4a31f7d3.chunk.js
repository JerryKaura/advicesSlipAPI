(this.webpackJsonpadvice_app=this.webpackJsonpadvice_app||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(11),r=a.n(i),s=a(12),o=a(13),d=a(16),l=a(15),v=(a(22),a(14)),u=a.n(v),m=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={advice:""},e.fetchAdvice=function(){u.a.get("https://api.adviceslip.com/advice").then((function(t){var a=t.data.slip.advice;e.setState({advice:a})})).catch((function(e){console.log(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){var e=this.state.advice;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body "},n.a.createElement("h4",{className:"card-text"},'"',e," ",'"')),n.a.createElement("div",{className:"card-footer bg-transparent  text-center "},n.a.createElement("button",{className:"btn btn-success btn-sm",onClick:this.fetchAdvice},"Get Advice"))))}}]),a}(n.a.Component);r.a.render(n.a.createElement(m,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4a31f7d3.chunk.js.map