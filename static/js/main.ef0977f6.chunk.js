(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/animation.7a52b39e.gif"},40:function(e,t,a){e.exports=a.p+"static/media/me.52863eb0.jpg"},41:function(e,t,a){e.exports=a(84)},46:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(46),a(3)),i=a(37),s=a.n(i),m=a(2),u=a(9);var E=function(){var e=Object(o.c)((function(e){return e.headerColor})),t=Object(o.c)((function(e){return e.headerBack}));return l.a.createElement("header",{id:"header",className:e},l.a.createElement(m.b,{to:"/",className:"logo"},l.a.createElement("i",{className:"icon-logo"})),l.a.createElement("nav",null,t?l.a.createElement(m.b,{to:"/"},l.a.createElement("i",{className:"icon-chevron-left"})," BACK"):l.a.createElement(m.b,{to:"/me"},"ME")))};var d=function(){var e=Object(o.c)((function(e){return e.footerColor})),t=Object(o.c)((function(e){return e.footerBack}));return l.a.createElement("footer",{id:"footer",className:e},l.a.createElement("nav",null,t?l.a.createElement(m.b,{to:"/"},l.a.createElement("i",{className:"icon-chevron-left"})," BACK"):l.a.createElement(m.b,{to:"/portfolio"},"PORTFOLIO")),l.a.createElement("div",{className:"social-links"},l.a.createElement("a",{target:"blank",href:"https://www.behance.net/yasinburakkalkan"},l.a.createElement("i",{className:"icon-behance"})),l.a.createElement("a",{target:"blank",href:"https://codepen.io/yasinburakkalkan"},l.a.createElement("i",{className:"icon-codepen"})),l.a.createElement("a",{target:"blank",href:"https://dribbble.com/yasinkalkan"},l.a.createElement("i",{className:"icon-dribbble"})),l.a.createElement("a",{href:"mailto:yasinburakkalkan@gmail.com"},l.a.createElement("i",{className:"icon-envelope"})),l.a.createElement("a",{target:"blank",href:"https://github.com/yasinkalkan"},l.a.createElement("i",{className:"icon-github"}))))},p=a(39),f=a.n(p);var h=function(){return l.a.createElement("section",{className:"home-section"},l.a.createElement("figure",null,l.a.createElement("img",{src:f.a,alt:""})),l.a.createElement("article",null,l.a.createElement("h1",null,"YASIN BURAK KALKAN"),l.a.createElement("h2",null,"Front-End Developer at Medyasoft. from Turkey.")))},g=a(40),b=a.n(g);var k=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){return e({type:"HEADER_BACK_CHANGE",headerBack:!0}),function(){e({type:"HEADER_BACK_CHANGE",headerBack:!1})}})),l.a.createElement("section",{className:"me-section"},l.a.createElement("picture",{style:{backgroundImage:"url(".concat(b.a,")")}}),l.a.createElement("article",null,l.a.createElement("h2",null,"me."),l.a.createElement("p",null,"Someone who tries to do ",l.a.createElement("strong",null,"quality work"),", not fast jobs, and thinks that quality is hidden in ",l.a.createElement("strong",null,"small details"),", not in design. Someone who tries to ",l.a.createElement("strong",null,"be different")," from them, not like everyone else."),l.a.createElement("p",null,"Someone who thinks that being an ",l.a.createElement("strong",null,"expert")," on a subject is better than having an opinion on everything. Someone who thinks that if quality jobs are desired, it is necessary to work with ",l.a.createElement("strong",null,"qualified")," people."),l.a.createElement("p",null,"It's me."),l.a.createElement("p",null,"If you want quality projects, ",l.a.createElement("strong",null,"contact me"),"."),l.a.createElement("a",{download:!0,href:"https://github.com/yasinkalkan/yasinkalkan.github.io/raw/master/static/media/resume.efda29ba.pdf"},"Download Resume")))},j=a(19),O=a.n(j);a(34),a(35);var N=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.data})),a={dots:!0,arrows:!1,fade:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return Object(n.useEffect)((function(){return e({type:"FOOTER_BACK_CHANGE",footerBack:!0}),function(){e({type:"FOOTER_BACK_CHANGE",footerBack:!1})}})),l.a.createElement("section",{className:"portfolio-section"},l.a.createElement(O.a,a,t.projects&&t.projects.map((function(e,a){return l.a.createElement("div",{key:a,className:"portfolio-section-item"},l.a.createElement("figure",{style:{backgroundImage:"url(".concat(t.root+e.picture,")")}}),l.a.createElement("article",{className:"summary"},l.a.createElement("span",null,e.project),l.a.createElement("h2",null,e.client),l.a.createElement("p",null,e.summary),l.a.createElement(m.b,{to:"/portfolio-detail/".concat(a),className:"button"},"View Project")))}))))};var y=function(e){return l.a.createElement("section",{id:"detail-carousel",className:"detail-carousel"},l.a.createElement(O.a,Object.assign({},{dots:!0,arrows:!1,fade:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},{className:"detail-carousel"}),e.data.map((function(t,a){return l.a.createElement("div",{key:a},l.a.createElement("figure",{style:{backgroundColor:"".concat(e.color)}},l.a.createElement("img",{src:e.root+t.url,alt:t.title})))}))))};var w=function(e){return l.a.createElement("section",{id:"detail-index",className:"detail-index",style:{backgroundImage:"url(".concat(e.picture,")")}},l.a.createElement("article",null,l.a.createElement("strong",null,e.project),l.a.createElement("h2",null,e.client)),l.a.createElement("small",null))};var v=function(e){return l.a.createElement("section",{id:"detail-article",className:"detail-article"},l.a.createElement("div",{className:"container"},l.a.createElement("article",{className:"summary"},l.a.createElement("span",null,e.project),l.a.createElement("h2",null,e.client),e.detail.map((function(e,t){return l.a.createElement("p",{key:t},e)})),l.a.createElement(m.b,{to:"http://www.pelinguley.com/",className:"button black"},"View Project"))))};var C=function(e){return l.a.createElement("section",{id:"detail-credits",className:"detail-credits"},l.a.createElement("div",{className:"container"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"CLIENT"),l.a.createElement("strong",null,e.data.client)),l.a.createElement("li",null,l.a.createElement("span",null,"PROJECT"),l.a.createElement("strong",null,e.data.project)),l.a.createElement("li",null,l.a.createElement("span",null,"DEVELOPER"),l.a.createElement("strong",null,e.data.developer)),l.a.createElement("li",null,l.a.createElement("span",null,"DESIGNER"),l.a.createElement("strong",null,e.data.designer)),l.a.createElement("li",null,l.a.createElement("span",null,"COMPANY"),l.a.createElement("strong",null,e.data.company)))))};var A=function(e){var t=Number(e.id),a=e.data.projects,n=function e(){var n=Math.floor(Math.random()*a.length),l=Math.floor(Math.random()*a.length);return n!==l&&n!==t&&l!==t?{left:n,right:l}:e()}(),r={left:a[n.left],right:a[n.right]};return l.a.createElement("section",{id:"detail-related",className:"detail-related"},l.a.createElement(m.b,{to:"/portfolio-detail/".concat(r.left.id),onClick:function(){return window.scrollTo(0,0)}},l.a.createElement("figure",{style:{backgroundImage:"url(".concat(e.data.root+r.left.picture,")")}}),l.a.createElement("article",null,l.a.createElement("span",null,r.left.project),l.a.createElement("h4",null,r.left.client))),l.a.createElement(m.b,{to:"/portfolio-detail/".concat(r.right.id),onClick:function(){return window.scrollTo(0,0)}},l.a.createElement("figure",{style:{backgroundImage:"url(".concat(e.data.root+r.right.picture,")")}}),l.a.createElement("article",null,l.a.createElement("span",null,r.right.project),l.a.createElement("h4",null,r.right.client))))};var B=function(e){var t=Object(o.b)(),a=Object(o.c)((function(e){return e.data})),r=e.match.params.id,c=function(){var e=document.documentElement,a=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),n=document.getElementById("detail-index"),l=document.getElementById("detail-article"),r=document.getElementById("detail-carousel"),c=document.getElementById("header"),o=document.getElementById("footer"),i=a>o.clientHeight/2,s=a<n.clientHeight+l.clientHeight+r.clientHeight+o.clientHeight/2,m=a>n.clientHeight-c.clientHeight/2;t({type:"FOOTER_COLOR_CHANGE",color:i&&s?"black":"white"}),t({type:"HEADER_COLOR_CHANGE",color:m?"black":"white"})};return Object(n.useEffect)((function(){return window.addEventListener("scroll",c),document.getElementById("root").classList.add("full-height"),function(){window.removeEventListener("scroll",c),document.getElementById("root").classList.remove("full-height"),t({type:"FOOTER_COLOR_CHANGE",color:"white"}),t({type:"HEADER_COLOR_CHANGE",color:"white"})}})),a.projects&&r>a.projects.length-1?l.a.createElement(u.a,{to:"/404"}):l.a.createElement("section",{className:"portfolio-detail-section"},a.projects&&l.a.createElement(w,{picture:a.root+a.projects[r].picture,project:a.projects[r].project,client:a.projects[r].client}),a.projects&&l.a.createElement(v,{project:a.projects[r].project,client:a.projects[r].client,detail:a.projects[r].detail}),a.projects&&l.a.createElement(y,{data:a.projects[r].gallery,root:a.root,color:a.projects[r].color}),a.projects&&l.a.createElement(C,{data:a.projects[r].credits}),a.projects&&l.a.createElement(A,{data:a,id:r}))};var H=function(){return Object(n.useEffect)((function(){return document.getElementById("root").classList.add("page-not-found"),function(){document.getElementById("root").classList.remove("page-not-found")}})),l.a.createElement("section",{className:"page-not-found-section"},l.a.createElement("h1",null,"404"),l.a.createElement("p",{className:"glitch","data-text":"PAGE NOT FOUND"},"PAGE NOT FOUND"),l.a.createElement(m.b,{className:"button",to:"/"},"GO HOME"))};var _=function(){var e="https://raw.githubusercontent.com/yasinkalkan/yasinkalkan.github.io/master/data.json",t=Object(o.b)();return Object(n.useEffect)((function(){s.a.get(e).then((function(e){t({type:"DATA_CHANGE",data:e.data})})).catch((function(e){console.log(e)}))}),[e,t]),l.a.createElement(m.a,null,l.a.createElement(E,null),l.a.createElement(d,null),l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/",component:h}),l.a.createElement(u.b,{exact:!0,path:"/me",component:k}),l.a.createElement(u.b,{exact:!0,path:"/portfolio",component:N}),l.a.createElement(u.b,{exact:!0,path:"/portfolio-detail/:id",component:B}),l.a.createElement(u.b,{component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(12),T=a(18),I=Object(T.b)((function(e,t){switch(t.type){case"HEADER_COLOR_CHANGE":return Object(R.a)({},e,{headerColor:t.color});case"FOOTER_COLOR_CHANGE":return Object(R.a)({},e,{footerColor:t.color});case"DATA_CHANGE":return Object(R.a)({},e,{data:t.data});case"HEADER_BACK_CHANGE":return Object(R.a)({},e,{headerBack:t.headerBack});case"FOOTER_BACK_CHANGE":return Object(R.a)({},e,{footerBack:t.footerBack});default:return e}}),{headerColor:"white",footerColor:"white",headerBack:!1,footerBack:!1,data:{}},window.devToolsExtension&&window.devToolsExtension());c.a.render(l.a.createElement(o.a,{store:I},l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ef0977f6.chunk.js.map