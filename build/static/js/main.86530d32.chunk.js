(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{34:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(20),s=c.n(a),i=c(6),d=c(0);var b=function(){return Object(d.jsx)("header",{className:"jumbotron bg-dark",children:Object(d.jsxs)("div",{className:"container text-white",children:[Object(d.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(d.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var j=function(){return Object(d.jsx)("div",{className:"NotFound",children:Object(d.jsx)("h1",{children:"Not Found"})})},l=c(2),o=c.n(l),u=c(5),h=c(4),O=c(3),x=c(22),p=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:5000",m=new Headers;function f(e){e.cards;return Object(x.a)(e,["cards"])}function v(e,t,c){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark((function e(t,c,r){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((n=e.sent).status<200||n.status>399)){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:if(204!==n.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(r));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(p,"/decks?_embed=cards"),e.next=3,v(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/decks"),n={method:"POST",headers:m,body:JSON.stringify(f(t)),signal:c},e.next=4,v(r,n,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(o.a.mark((function e(t,c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/decks/").concat(t,"?_embed=cards"),e.next=3,v(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(u.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/decks/").concat(t.id,"?_embed=cards"),n={method:"PUT",headers:m,body:JSON.stringify(f(t)),signal:c},e.next=4,v(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/decks/").concat(t),n={method:"DELETE",signal:c},e.next=4,v(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(u.a)(o.a.mark((function e(t,c,r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/cards"),c.deckId=Number(t),a={method:"POST",headers:m,body:JSON.stringify(c),signal:r},e.next=5,v(n,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(u.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/cards/").concat(t.id),n={method:"PUT",headers:m,body:JSON.stringify(t)},e.next=4,v(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(u.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/cards/").concat(t),n={method:"DELETE",signal:c},e.next=4,v(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.append("Content-Type","application/json");var _=function(e){var t=e.children,c=e.onClick,r=e.type;return Object(d.jsx)("button",{type:r?{type:r}:"button",onClick:c,className:"btn btn-primary mb-2 mr-2 mt-2",children:t})};var A=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(i.f)();return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c?Object(d.jsxs)("div",{children:[Object(d.jsx)(O.b,{to:"/decks/new",children:Object(d.jsx)(_,{children:" Create Deck "})}),Object(d.jsx)("br",{}),c.map((function(e){return Object(d.jsx)("div",{className:"card mb-3",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h4",{className:"card-title",children:[" ",e.name," "]}),Object(d.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:[" ",e.cards.length," cards "]}),Object(d.jsxs)("p",{className:"card-text",children:[" ",e.description," "]}),Object(d.jsx)(O.b,{to:"/decks/".concat(e.id),children:Object(d.jsx)(_,{children:" View "})}),Object(d.jsx)("button",{className:"btn btn-danger",onClick:function(){window.confirm("Delete this deck?")&&(E("".concat(e.id)),a.go("/"))},children:"Delete"})]})},e.id)}))]}):Object(d.jsx)("p",{children:" Loading... "})},H=c(14),P=c(11);var B=function(){var e=Object(r.useState)({name:"",description:""}),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(i.f)(),s=function(e){var t=e.target;n(Object(P.a)(Object(P.a)({},c),{},Object(H.a)({},t.name,t.value)))};function b(){return(b=Object(u.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N(c);case 3:r=e.sent,n=r.id,a.push("/decks/".concat(n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(O.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:"Create Deck"})]})}),Object(d.jsx)("h2",{children:"Create New Deck"}),Object(d.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},className:"form-group",children:[Object(d.jsx)("label",{className:"col-form-label",htmlFor:"deckName",children:"Name"}),Object(d.jsx)("input",{id:"deckName",type:"text",name:"name",onChange:s,className:"form-control mb-3",value:c.name,placeholder:"Name of Deck"}),Object(d.jsx)("label",{htmlFor:"deckDescription",children:"Description"}),Object(d.jsx)("textarea",{id:"deckDescription",name:"description",onChange:s,className:"form-control mb-3",value:c.description,rows:"4",placeholder:"Description of deck contents"}),Object(d.jsx)("button",{type:"button",onClick:function(){return a.push("/")},className:"btn btn-primary mr-2",children:"Cancel"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})};var V=function(){var e=Object(i.g)().deckId,t=Object(i.f)(),c=Object(i.h)().url,n=Object(r.useState)(void 0),a=Object(h.a)(n,2),s=a[0],b=a[1],j=Object(r.useState)(void 0),l=Object(h.a)(j,2),x=l[0],p=l[1];return Object(r.useEffect)((function(){var t=new AbortController;function c(){return(c=Object(u.a)(o.a.mark((function c(){var r,n;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,C(e,t.signal);case 3:r=c.sent,b(r),n=r.cards,p(n),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),console.log("loadCurrentDeck Aborted");case 12:case"end":return c.stop()}}),c,null,[[0,9]])})))).apply(this,arguments)}return function(){c.apply(this,arguments)}(),function(){return t.abort()}}),[e]),s&&x?Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(O.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:"View Deck"})]})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:[" ",s.name," "]}),Object(d.jsxs)("h4",{children:[" ",s.description," "]}),Object(d.jsx)(O.b,{to:"".concat(c,"/edit"),children:Object(d.jsx)(_,{children:" Edit Deck "})}),Object(d.jsx)(O.b,{to:"".concat(c,"/study"),children:Object(d.jsx)(_,{children:" Study Deck "})}),Object(d.jsx)(O.b,{to:"".concat(c,"/cards/new"),children:Object(d.jsx)(_,{children:" Add Cards "})}),Object(d.jsx)("button",{className:"btn btn-danger",onClick:function(){window.confirm("Delete this deck?")&&(E(s.id),t.push("/"))},children:"Delete"})]}),Object(d.jsx)("div",{children:x.map((function(c){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"card border-primary mb-3",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-text text-danger",children:" Front "}),Object(d.jsxs)("p",{className:"card-text",children:[" ",c.front," "]}),Object(d.jsx)("br",{}),Object(d.jsx)("h4",{className:"card-text text-danger",children:" Back "}),Object(d.jsxs)("p",{className:"card-text",children:[" ",c.back," "]}),Object(d.jsx)(O.b,{to:"/decks/".concat(s.id,"/cards/").concat(c.id,"/edit"),children:Object(d.jsx)(_,{children:" Edit Card "})}),Object(d.jsx)("button",{className:"btn btn-danger",onClick:function(){window.confirm("Delete this card?")&&(!function(e,t){L.apply(this,arguments)}("".concat(c.id)),t.push("/decks/".concat(e)))},children:"Delete Card"})]})})},c.id)}))})]}):Object(d.jsx)("p",{children:" Loading... "})};var q=function(e){var t=e.currentCards,c=Object(i.f)(),n=Object(i.g)(),a=Object(r.useState)(1),s=Object(h.a)(a,2),b=s[0],j=s[1],l=Object(r.useState)(null),o=Object(h.a)(l,2),u=o[0],O=o[1],x=Object(r.useState)(0),p=Object(h.a)(x,2),m=p[0],f=p[1],v=Object(r.useState)(null),k=Object(h.a)(v,2),y=k[0],g=k[1],N=t.sort((function(e,t){return e.id-t.id}));Object(r.useEffect)((function(){t.length>2&&O(!0),g(N[m])}),[t]);var w=function(e){e.preventDefault(),O(!u)};return t?!0===u&&y?Object(d.jsx)("div",{className:"card border-primary mb-3",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h4",{className:"card-title",children:[" Card ",b," of ",t.length]}),Object(d.jsxs)("p",{className:"card-text",children:[" ",y.front," "]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:w,className:"btn btn-primary",children:"Flip"})]})}):!1===u&&y?Object(d.jsx)("div",{className:"card border-primary mb-3",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h4",{className:"card-title",children:["Card ",b," of ",t.length]}),Object(d.jsxs)("p",{className:"card-text",children:[" ",y.back," "]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:w,className:"btn btn-primary mr-3",children:"Flip"}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),O(!u),j((function(e){return e+1})),f((function(e){return e+1})),g(N[m+1]),t.length<=b&&(window.confirm("Restart Cards?")?(j(1),f(0),g(N[m]),c.push("/decks/".concat(n,"/study"))):c.push("/"))},className:"btn btn-primary mr-3",children:"Next"})]})}):Object(d.jsxs)("div",{className:"card border-primary",children:[Object(d.jsxs)("div",{className:"card-body mb-3",children:[Object(d.jsx)("h4",{className:"card-title",children:"Not enough cards."}),Object(d.jsxs)("p",{className:"card-text mb-3",children:["You need at least 3 cards to study. There are ",t.length," in this deck."]})]}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),c.push("/decks/".concat(n,"/cards/new"))},className:"btn btn-primary",children:" + Add Cards "})]}):Object(d.jsx)("p",{children:"Loading..."})};var J=function(){var e=Object(i.g)(),t=Object(r.useState)(null),c=Object(h.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(null),b=Object(h.a)(s,2),j=b[0],l=b[1];return Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a([]),l([]),t.prev=2,t.next=5,C(e.deckId);case 5:c=t.sent,a(c),r=c.cards,l(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),n?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(O.b,{to:"/",children:" Home "})}),Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(O.b,{to:"/decks/".concat(n.id),children:" View Deck "})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:" Study Deck "})]})})}),Object(d.jsx)("div",{children:Object(d.jsxs)("h1",{children:[n.name,": Study"]})}),Object(d.jsx)(q,{currentCards:j})]}):Object(d.jsx)("p",{children:"Loading..."})};var R=function(){var e=Object(i.g)().deckId,t=Object(i.f)(),c=Object(r.useState)(null),n=Object(h.a)(c,2),a=n[0],s=n[1],b=Object(r.useState)("Loading..."),j=Object(h.a)(b,2),l=j[0],x=j[1],p=Object(r.useState)("Loading..."),m=Object(h.a)(p,2),f=m[0],v=m[1];return Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s([]),t.prev=1,t.next=4,C(e);case 4:c=t.sent,s(c),x(c.name),v(c.description),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),a?Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(O.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"breadcrumb-item active",children:Object(d.jsx)(O.b,{to:"/decks/".concat(e),children:" View Deck "})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:" Edit Deck "})]})}),Object(d.jsx)("h2",{children:"Edit Deck"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){return D.apply(this,arguments)}(Object(P.a)(Object(P.a)({},a),{},{name:l,description:f})).then((function(e){console.log(e),s(e),t.push("/decks/".concat(a.id))}))},children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",required:!0,onChange:function(e){return x(e.target.value)},value:l}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{required:!0,onChange:function(e){return v(e.target.value)},value:f}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),t.push("/decks/".concat(a.id))},children:"Cancel"}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})]}):Object(d.jsx)("p",{children:"Loading..."})};var U=function(){var e=Object(i.g)(),t=Object(i.f)(),c=Object(r.useState)("Front side of card"),n=Object(h.a)(c,2),a=n[0],s=n[1],b=Object(r.useState)("Back side of card"),j=Object(h.a)(b,2),l=j[0],x=j[1],p=Object(r.useState)(null),m=Object(h.a)(p,2),f=m[0],v=m[1];return Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v([]),t.prev=1,t.next=4,C(e.deckId);case 4:c=t.sent,v(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),f?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(O.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(O.b,{to:"/decks/".concat(f.id),children:" View Deck "})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:" Create Card "})]})})}),Object(d.jsx)("div",{children:Object(d.jsxs)("h2",{children:[f.name,": Add Card"]})}),Object(d.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r={front:a,back:l,deckId:e.deckId};(function(e,t,c){return F.apply(this,arguments)})(e.deckId,r).then((function(e){console.log(e),s("Front side of card"),x("Back side of card")})),t.push("/decks/".concat(f.id))},className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"front",children:"Front"}),Object(d.jsx)("textarea",{className:"form-control",rows:"3",required:!0,value:a,onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Back"}),Object(d.jsx)("textarea",{className:"form-control",rows:"3",required:!0,value:l,onChange:function(e){return x(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(c){c.preventDefault(),t.push("/decks/".concat(e.deckId))},className:"btn btn-primary mr-2",children:" Done "}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:" Save "})]})]}):Object(d.jsx)("p",{children:"Loading..."})};var K=function(){var e=Object(i.f)(),t=Object(i.g)(),c=t.deckId,n=t.cardId,a=Object(r.useState)(""),s=Object(h.a)(a,2),b=s[0],j=s[1],l=Object(r.useState)(""),x=Object(h.a)(l,2),p=x[0],m=x[1],f=Object(r.useState)(null),v=Object(h.a)(f,2),k=v[0],y=v[1],g=Object(r.useState)(null),N=Object(h.a)(g,2),w=N[0],S=N[1];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(c);case 3:t=e.sent,y(t),S(t.cards.find((function(e){return e.id+""===n}))),j(t.cards.find((function(e){return e.id+""===n})).front),m(t.cards.find((function(e){return e.id+""===n})).back),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,n]),k&&w?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{class:"breadcrumb",children:[Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(O.b,{to:"/",children:" Home "})}),Object(d.jsx)("li",{class:"breadcrumb-item",children:Object(d.jsx)(O.b,{to:"/decks/".concat(c),children:" View Deck "})}),Object(d.jsx)("li",{class:"breadcrumb-item active","aria-current":"page",children:" Edit Card "})]})})}),Object(d.jsx)("h2",{children:"Edit Card"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(e,t){return T.apply(this,arguments)}(Object(P.a)(Object(P.a)({},w),{},{front:b,back:p})).then((function(t){console.log(t),S(t),e.push("/decks/".concat(c))}))},className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"front",children:"Front"}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{className:"form-control",rows:"3",required:!0,value:b,onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"back",children:"Back"}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{className:"form-control",rows:"3",required:!0,value:p,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),e.push("/decks/".concat(c))},className:"btn btn-secondary mr-2",children:"Cancel"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Submit"})]})]}):Object(d.jsx)("p",{children:"Loading..."})};var W=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{}),Object(d.jsx)("hr",{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(A,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/decks/new",children:Object(d.jsx)(B,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/decks/:deckId",children:Object(d.jsx)(V,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/decks/:deckId/study",children:Object(d.jsx)(J,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/decks/:deckId/edit",children:Object(d.jsx)(R,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/decks/:deckId/cards/new",children:Object(d.jsx)(U,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/decks/:deckId/cards/:cardId/edit",children:Object(d.jsx)(K,{})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(j,{})})]})]})};var M=function(){return Object(d.jsx)("div",{className:"app-routes",children:Object(d.jsx)(i.c,{children:Object(d.jsx)(i.a,{path:"/",children:Object(d.jsx)(W,{})})})})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(O.a,{children:Object(d.jsx)(M,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.86530d32.chunk.js.map