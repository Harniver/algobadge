(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4311)}])},4311:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return W},default:function(){return Y}});var n=t(5893),o=100,i=.25,a=.5,s=.75;function l(e,r){return e>=o*r*1?"gold":e>=o*r*s?"silver":e>=o*r*a?"bronze":"none"}var c=t(4408),u=t.n(c),d=t(9655),f=t(7294),h=t(674),v=t.n(h),p=t(2050);function g(e){var r=e.color;return(0,n.jsx)("svg",{fill:r,width:"35px",height:"35px",viewBox:"0 0 1024 1024",children:(0,n.jsx)("path",{d:"M547 304.2h-451l108.2-207.8h481.4z M685.6 754.4c0 95.656-77.544 173.2-173.2 173.2s-173.2-77.544-173.2-173.2c0-95.656 77.544-173.2 173.2-173.2s173.2 77.544 173.2 173.2z M697.8 598.2l230.2-294-138.6-207.8-276.6 415.6c64.6 0 125.4 25.4 171 71 5 5 9.6 10 14 15.2z M411.6 533.2l-107-161.2h-207.8l180.2 323c10.4-42.4 32.2-81.2 64-112.8 20.8-20.6 44.6-37.2 70.6-49z"})})}function y(e){var r=e.color;return(0,n.jsx)("svg",{width:"35px",height:"35px",viewBox:"0 0 170 170",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{style:{fillRule:"evenodd",fill:r},d:"m112.5 4.1909c-20.072 0-36.231 16.159-36.231 36.231v40.256h10.064v-40.256c0-14.497 11.671-26.167 26.167-26.167 14.5 0 26.17 11.67 26.17 26.167v27.756h10.06v-27.756c0-20.072-16.16-36.231-36.23-36.231z"}),(0,n.jsx)("rect",{style:{fillRule:"evenodd",fill:r},rx:"0.5",ry:".5",height:"66.259",width:"85.603",y:"74.55",x:"7.1987"})]})})}function m(){var e=[{position:a,color:"#cd7f32"},{position:s,color:"#c0c0c0"},{position:1,color:"#ffdf00"}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:v().checkpoint,style:{"--position":"".concat(25,"%")},children:(0,n.jsx)(y,{color:"black"})}),e.map((function(e){return(0,n.jsx)("div",{className:v().checkpoint,style:{"--position":"".concat(100*e.position,"%")},children:(0,n.jsx)(g,{color:e.color})},e.position)}))]})}function x(e){var r=e.score,t=e.numTasks;if(r===t*o)return(0,n.jsx)("div",{className:v().progress,children:(0,n.jsxs)(p.Z,{children:[(0,n.jsx)(p.Z,{className:v().progressGold,animated:!0,now:100}),(0,n.jsx)(m,{})]})});var i=[],l=[{from:s,to:1,className:v().progressSilver},{from:a,to:s,className:v().progressBronze},{from:0,to:a,className:v().progressNone}],c=r/t/o,u=!0,d=!1,f=void 0;try{for(var h,g=l[Symbol.iterator]();!(u=(h=g.next()).done);u=!0){var y=h.value;if(c>=y.from){i.push((0,n.jsx)(p.Z,{className:y.className,animated:!0,now:100*c},y.from));break}}}catch(x){d=!0,f=x}finally{try{u||null==g.return||g.return()}finally{if(d)throw f}}return(0,n.jsx)("div",{className:v().progress,children:(0,n.jsxs)(p.Z,{children:[i,(0,n.jsx)(m,{})]})})}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e){var r=e.tasks,t=function(e){var r=e.task,t=e.score;return(0,n.jsxs)("li",{children:[(0,n.jsx)("a",{href:"https://training.olinfo.it/#/task/".concat(r,"/statement"),rel:"noreferrer",target:"_blank",children:r})," ","(",t," / ",o,")"]})};return(0,n.jsx)("ul",{children:Object.entries(r).map((function(e){var r=_(e,2),o=r[0],i=r[1];return(0,n.jsx)(t,{task:o,score:i},o)}))})}function k(e){var r=e.badge,t=e.badges,a=r.node.prerequisites.map((function(e){return Object.keys(t[e].tasks).length*o})),s=r.node.tasks.length;return(0,n.jsxs)("div",{className:u().category,children:[(0,n.jsx)("h2",{className:u().title,children:r.node.title}),"locked"!==r.badge?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{score:r.score,numTasks:s}),(0,n.jsx)("div",{className:u().taskList,children:(0,n.jsx)(j,{tasks:r.tasks})})]}):(0,n.jsxs)("p",{children:["Questa categoria \xe8 bloccata! Totalizza almeno"," ",a[0]*i," punti in"," ",(0,n.jsx)("code",{children:r.node.prerequisites})," per sbloccarla."]}),(0,n.jsx)("div",{className:u().resources,children:(0,n.jsx)(d.D,{components:{h1:"h3",h2:"h4",h3:"h5",h4:"h6"},children:r.node.resources_md})})]})}var w=t(8707),N=t.n(w);function S(){return(0,n.jsxs)("div",{className:N().loading,children:[(0,n.jsx)("img",{src:"/loading.gif",alt:"Loading..."}),"caricamento..."]})}function O(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Login richiesto"}),(0,n.jsxs)("p",{children:["Per usare algobadge devi essere loggato su"," ",(0,n.jsx)("a",{href:"https://training.olinfo.it/",children:"https://training.olinfo.it/"})]})]})}var z=t(5532),C=t.n(z),E=function(e){var r=e.getBoundingClientRect();return{left:r.left+window.pageXOffset,top:r.top+window.pageYOffset,width:r.width||e.offsetWidth,height:r.height||e.offsetHeight}};function P(e){var r=e.start,t=e.end,o=E(r),i=E(t),a=o.left+o.width/2,s=o.top+o.height/2,l=i.left+i.width/2,c=i.top+i.height/2,u=Math.sqrt((l-a)*(l-a)+(c-s)*(c-s)),d=(a+l)/2-u/2,f=(s+c)/2-1,h=Math.atan2(s-c,a-l)*(180/Math.PI),v={"--color":"black","--thickness":"".concat(2,"px"),"--cx":"".concat(d,"px"),"--cy":"".concat(f,"px"),"--length":"".concat(u,"px"),"--angle":"".concat(h,"deg")};return(0,n.jsx)("div",{className:C().line,style:v})}var T=t(695),A=t.n(T),L={locked:"#eee",none:"#fff",bronze:"#cd7f32",silver:"#c0c0c0",gold:"#ffdf00"},M={locked:"#bbb",none:"#000",bronze:"#523214",silver:"#4c4c4c",gold:"#665900"};function q(e){var r=e.node,t=e.onClick,i={"--row":r.node.position[1],"--column":r.node.position[0],"--color":L[r.badge],"--text-color":M[r.badge]},a=r.node.tasks.length*o;return(0,n.jsx)("div",{className:A().node,style:i,children:(0,n.jsxs)("button",{"data-node-id":r.node.id,className:A().badge,onClick:t,children:[(0,n.jsx)("div",{className:A().badgeName,children:r.node.id}),(0,n.jsxs)("div",{className:A().score,children:[r.score," / ",a]})]})})}function B(e){var r=e.badges,t=e.setSelectedNode,o=(0,f.useRef)(null),i=(0,f.useState)(null),a=i[0],s=i[1],l=(0,f.useState)([]),c=l[0],u=l[1];(0,f.useEffect)((function(){if(null!==o.current){var e=o.current.querySelectorAll(".".concat(A().badge)),r=Object.fromEntries(Array.from(e.values()).map((function(e){return[e.getAttribute("data-node-id"),e]})));s(r)}}),[]);var d=(0,f.useCallback)((function(){if(a){var e=[],t=!0,n=!1,o=void 0;try{for(var i,s=Object.values(r)[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var l=i.value,c=!0,d=!1,f=void 0;try{for(var h,v=l.node.prerequisites[Symbol.iterator]();!(c=(h=v.next()).done);c=!0){var p=h.value,g=a[l.node.id],y=a[p];e.push({id:"".concat(l.node.id,"-").concat(p),start:g,end:y})}}catch(m){d=!0,f=m}finally{try{c||null==v.return||v.return()}finally{if(d)throw f}}}}catch(m){n=!0,o=m}finally{try{t||null==s.return||s.return()}finally{if(n)throw o}}u(e)}}),[r,a]);(0,f.useEffect)((function(){d()}),[r,d]),(0,f.useEffect)((function(){return window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}}),[d]);var h=Object.values(r);return(0,n.jsxs)("div",{className:A().tree,ref:o,children:[h.map((function(e){return(0,n.jsx)(q,{node:e,onClick:function(){return t(e.node.id)}},e.node.id)})),c.map((function(e){return(0,n.jsx)(P,{start:e.start,end:e.end},e.id)}))]})}var I=t(6489);function R(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function G(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return R(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(){var e=(0,f.useState)(void 0),r=e[0],t=e[1];return(0,f.useEffect)((function(){t(function(){var e=I.parse(window.document.cookie);if(!e.token)return null;var r=G(e.token.split("."),3),t=(r[0],r[1]);r[2];try{var n=t.replace(/-/g,"+").replace(/_/g,"/"),o=atob(n);return JSON.parse(o)}catch(i){return null}}())}),[]),r}var Z=t(4051),Q=t.n(Z);function U(e,r,t,n,o,i,a){try{var s=e[i](a),l=s.value}catch(c){return void t(c)}s.done?r(l):Promise.resolve(l).then(n,o)}function F(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function a(e){U(i,n,o,a,s,"next",e)}function s(e){U(i,n,o,a,s,"throw",e)}a(void 0)}))}}function J(){return(J=F(Q().mark((function e(r){var t,n;return Q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={action:"get",username:r},e.next=4,fetch("https://training.olinfo.it/api/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"});case 4:if(200===(n=e.sent).status){e.next=7;break}return e.abrupt("return",null);case 7:return e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var W=!0;function Y(e){var r,t,a=e.taskGraph,s=X(),c=(0,f.useState)(void 0),u=c[0],d=c[1],h=(0,f.useState)(null!==(t=null===(r=a.nodes.find((function(e){return 0===e.prerequisites.length})))||void 0===r?void 0:r.id)&&void 0!==t?t:""),v=h[0],p=h[1];if((0,f.useEffect)((function(){null===s&&d(null),s&&function(e){return J.apply(this,arguments)}(s.username).then((function(e){return d(e)}))}),[s]),void 0===s||void 0===u)return(0,n.jsx)(S,{});if(null===s||null===u)return(0,n.jsx)(O,{});var g=function(e,r){var t={},n=Object.fromEntries(r.scores.map((function(e){return[e.name,e.score]}))),a=!0,s=!1,c=void 0;try{for(var u,d=e.nodes[Symbol.iterator]();!(a=(u=d.next()).done);a=!0){var f=u.value,h=0,v={},p=!0,g=!1,y=void 0;try{for(var m,x=f.tasks[Symbol.iterator]();!(p=(m=x.next()).done);p=!0){var b,_=m.value,j=null!==(b=n[_.name])&&void 0!==b?b:0;v[_.name]=j,h+=j}}catch(P){g=!0,y=P}finally{try{p||null==x.return||x.return()}finally{if(g)throw y}}t[f.id]={node:f,score:h,badge:l(h,f.tasks.length),tasks:v}}}catch(P){s=!0,c=P}finally{try{a||null==d.return||d.return()}finally{if(s)throw c}}var k=new Set,w=function(e){if(!k.has(e)){k.add(e);var r=t[e],n=!1,a=!0,s=!1,l=void 0;try{for(var c,u=r.node.prerequisites[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var d=c.value;w(d);var f=t[d],h=f.node.tasks.length*o*i;("locked"===f.badge||f.score<h)&&(n=!0)}}catch(P){s=!0,l=P}finally{try{a||null==u.return||u.return()}finally{if(s)throw l}}n&&(r.badge="locked")}},N=!0,S=!1,O=void 0;try{for(var z,C=e.nodes[Symbol.iterator]();!(N=(z=C.next()).done);N=!0){var E=z.value;w(E.id)}}catch(P){S=!0,O=P}finally{try{N||null==C.return||C.return()}finally{if(S)throw O}}return t}(a,u);return(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Ciao"," ",(0,n.jsxs)("strong",{children:[s.firstName," ",s.lastName]}),"! (Login effettuato tramite"," ",(0,n.jsx)("a",{href:"https://training.olinfo.it",children:"training.olinfo.it"}),")"]}),(0,n.jsx)(B,{badges:g,setSelectedNode:p}),v in g&&(0,n.jsx)(k,{badge:g[v],badges:g})]})}},4408:function(e){e.exports={category:"Category_category__yzdBd",title:"Category_title__8klu6",taskList:"Category_taskList__uYCvW",resources:"Category_resources__dqPOc"}},674:function(e){e.exports={progressNone:"Progress_progressNone__o_ttj",progressBronze:"Progress_progressBronze__TJD81",progressSilver:"Progress_progressSilver__LQ8l3",progressGold:"Progress_progressGold__7qQo3",progress:"Progress_progress__axvfY",checkpoint:"Progress_checkpoint__TZ_n2"}},8707:function(e){e.exports={loading:"Loading_loading__PXEn4"}},5532:function(e){e.exports={line:"Line_line__C9XiF"}},695:function(e){e.exports={tree:"Tree_tree__UfTc3",node:"Tree_node__fgN5z",badge:"Tree_badge__VAWxQ",badgeName:"Tree_badgeName__UP_Ry",score:"Tree_score__RxP9M"}}},function(e){e.O(0,[282,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);