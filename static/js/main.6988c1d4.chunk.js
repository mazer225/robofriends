(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),i=n(7),a=n.n(i),c=(n(12),n(2)),o=n(3),l=n(5),h=n(4),u=n(0),b=function(t){var e=t.id,n=t.name,s=t.email;return Object(u.jsxs)("div",{className:"bg-light-green dib pa3 ma3 grow br4 bw2 shadow-5",children:[Object(u.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(e,"?")}),Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)("p",{children:s})]})]})},j=function(t){var e=t.robots.map((function(t,e){return Object(u.jsx)(b,{id:t.id,name:t.name,email:t.email},e)}));return Object(u.jsx)("div",{children:e})},d=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"tc",children:Object(u.jsx)("input",{className:"bg-light-green b mb2 w-15",type:"text",placeholder:"Enter Robot Name",onInput:this.props.inputEnter})})}}]),n}(r.a.Component),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={hasError:!1},t}return Object(o.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oops, there was a problem. Try Refreshing!"}):this.props.children}}]),n}(r.a.Component),m=(n(14),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).trackScrolling=function(){var e={height:"100px",transition:"height 0.4s linear"},n={fontSize:"30px"};window.pageYOffset<=120&&(e={height:"140px",transition:"height 0.4s linear"},n={fontSize:"40px",marginBottom:"18px"}),t.setState({style1:e}),t.setState({style2:n})},t.inputValue=function(e){t.setState({searchValue:e.target.value})},t.state={robots:[],searchValue:"",style1:{height:"140px"},style2:{marginBottom:"18px",fontSize:"40px"}},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){return t.setState({robots:e})})),document.addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"render",value:function(){var t=this,e=this.state.robots.filter((function(e){return e.name.toLowerCase().includes(t.state.searchValue.toLowerCase())}));return 0===this.state.robots.length?Object(u.jsx)("h1",{className:"tc ma50",children:"Loading..."}):Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsxs)("div",{style:this.state.style1,className:"pa2 bw2 positionHeader ba",children:[Object(u.jsx)("h1",{className:"tc light-blue f1 ma2",style:this.state.style2,children:"RoboFriends"}),Object(u.jsx)(d,{inputEnter:this.inputValue})]}),Object(u.jsx)("div",{className:"positionRobots",children:Object(u.jsx)(p,{children:Object(u.jsx)(j,{robots:e})})})]})}}]),n}(r.a.Component)),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),s(t),r(t),i(t),a(t)}))};n(15);a.a.render(Object(u.jsx)(m,{}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.6988c1d4.chunk.js.map