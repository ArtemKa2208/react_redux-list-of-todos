(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n.n(r),s=n(5),a=n(15),o=n(3),u=n(13),i="LOAD_TODOS",l="LOAD_USER",d="SEARCH_TODOS",j=function(e){return{type:i,payload:e}},p=function(e){return{type:l,payload:e}},b=function(e){return{type:d,payload:e}},h={todos:[],user:null,userError:!1},f=Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(o.a)(Object(o.a)({},e),{},{todos:Object(a.a)(t.payload)});case l:return Object(o.a)(Object(o.a)({},e),{},{user:t.payload});case d:return Object(o.a)(Object(o.a)({},e),{},{userError:t.payload});default:return e}})),O=f,v=(n(23),n(4)),x=n(11),m=n(2),_=n.n(m),y=(n(25),n(14)),N=n.n(y),w=n(0),k="https://mate.academy/students-api/todos";function C(){return L.apply(this,arguments)}function L(){return(L=Object(v.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return E.apply(this,arguments)}function E(){return(E=Object(v.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/").concat(t),{method:"DELETE"});case 2:return e.abrupt("return",C());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e){return e.todos},U=function(e){return e.user},g=function(e){return e.userError},S="https://mate.academy/students-api/users/";function D(e){return I.apply(this,arguments)}function I(){return(I=Object(v.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(S).concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=n(1),R=function(){var e=Object(s.b)(),t=Object(w.useState)(""),n=Object(x.a)(t,2),r=n[0],c=n[1],a=Object(w.useState)("all"),o=Object(x.a)(a,2),u=o[0],i=o[1],l=Object(s.c)(A),d=r.toLowerCase(),h=l.filter((function(e){return!!e.title.toLowerCase().includes(d)}));switch(u){case"active":h=h.filter((function(e){return!e.completed}));break;case"completed":h=h.filter((function(e){return e.completed}))}Object(w.useEffect)((function(){var t=function(){var t=Object(v.a)(_.a.mark((function t(){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:n=t.sent,e(j(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var f=function(){var t=Object(v.a)(_.a.mark((function t(n){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D(n);case 3:r=t.sent,e(p(r)),e(b(!1)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e(b(!0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(v.a)(_.a.mark((function t(n){var r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(n);case 2:r=t.sent,e(j(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(J.jsxs)("div",{className:"TodoList",children:[Object(J.jsx)("h2",{children:"Todos:"}),Object(J.jsxs)("div",{className:"TodoList__all-inputs",children:[Object(J.jsx)("input",{className:"input is-info",type:"text",value:r,onChange:function(e){c(e.target.value)}}),Object(J.jsx)("div",{className:"select is-link",children:Object(J.jsxs)("select",{value:u,onChange:function(e){i(e.target.value)},children:[Object(J.jsx)("option",{value:"",children:"All"}),Object(J.jsx)("option",{value:"active",children:"Active"}),Object(J.jsx)("option",{value:"completed",children:"Completed "})]})})]}),Object(J.jsx)("div",{className:"TodoList__list-container",children:Object(J.jsx)("ul",{className:"TodoList__list",children:h.map((function(e){return Object(J.jsxs)("li",{className:N()("TodoList__item",{"TodoList__item--unchecked":!e.completed},{"TodoList__item--checked":e.completed}),children:[Object(J.jsxs)("label",{htmlFor:"checkTodo",children:[Object(J.jsx)("input",{type:"checkbox",readOnly:!0}),Object(J.jsx)("p",{children:e.title})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("button",{className:"TodoList__user-button TodoList__user-button--selected button",type:"button",onClick:function(){return f(e.userId)},children:"User #".concat(e.userId)}),Object(J.jsx)("button",{className:"TodoList__user-button TodoList__user-button--selected button",type:"button",onClick:function(){return O(e.id)},children:"Delete"})]})]},e.id)}))})})]})},B=(n(27),function(){var e=Object(s.b)(),t=Object(s.c)(U);if(Object(s.c)(g))return Object(J.jsx)("p",{children:"No user was founded"});if(!t)return Object(J.jsx)("p",{children:"No user selected"});return Object(J.jsxs)("div",{className:"CurrentUser",children:[Object(J.jsx)("h2",{className:"CurrentUser__title",children:Object(J.jsx)("span",{children:"Selected user: ".concat(null===t||void 0===t?void 0:t.id)})}),Object(J.jsx)("h3",{className:"CurrentUser__name",children:null===t||void 0===t?void 0:t.name}),Object(J.jsx)("p",{className:"CurrentUser__email",children:null===t||void 0===t?void 0:t.email}),Object(J.jsx)("p",{className:"CurrentUser__phone",children:null===t||void 0===t?void 0:t.phone}),Object(J.jsx)("button",{type:"button",className:"CurrentUser__clear button",onClick:function(){e(p(null))},children:"Clear"})]})}),F=function(){return Object(J.jsxs)("div",{className:"App",children:[Object(J.jsx)("div",{className:"App__sidebar",children:Object(J.jsx)(R,{})}),Object(J.jsx)("div",{className:"App__content",children:Object(J.jsx)("div",{className:"App__content-container",children:Object(J.jsx)(B,{})})})]})},H=function(){return Object(J.jsx)(s.a,{store:O,children:Object(J.jsx)(F,{})})};c.a.render(Object(J.jsx)(H,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.994a43aa.chunk.js.map