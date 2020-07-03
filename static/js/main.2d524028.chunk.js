(this.webpackJsonpreact_frontend=this.webpackJsonpreact_frontend||[]).push([[0],{164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),r=a(9),s=a(5),o=a(6),i=a(7),m=a(8),_=a(172),u=a(177),E=a(18),d=a.n(E),p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getNews()},n.getNews=function(){d.a.get("http://localhost:8080/rest/news").then((function(e){return console.log("Received Data : ",e.data),e.data})).then((function(e){return n.setState({news:e})}))},n.deleteUser=function(e){d.a.delete("http://localhost:8080/rest/news/"+e).then((function(e){return console.log("Deleted Data : ",e.data),e.data})).then(n.setState({news:n.state.news.filter((function(t){return t.id!==e}))})).catch((function(t){alert("ERROR : "+e)}))},n.state={news:[]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=0;return l.a.createElement("div",{className:"news"},l.a.createElement("h1",null,"News",l.a.createElement(c.b,{style:{textDecoration:"none"},className:"text-muted",to:this.props.location.pathname+"/create"},"(\uc791\uc131)")),l.a.createElement(_.a,{hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Content"))),l.a.createElement("tbody",null,0===this.state.news.length?l.a.createElement("tr",{align:"center"},l.a.createElement("td",{colSpan:6},"No News Available.")):this.state.news.map((function(a){return l.a.createElement("tr",{key:++t},l.a.createElement("td",null,t),l.a.createElement("td",null,a.title),l.a.createElement("td",null,a.content),l.a.createElement("td",null,l.a.createElement(c.b,{to:"/news/edit/"+a.id},l.a.createElement(u.a,null," \uc218\uc815 "))," "," ",l.a.createElement(u.a,{variant:"danger",onClick:function(){e.deleteUser(a.id)}}," \uc0ad\uc81c")))})))))}}]),a}(l.a.Component),f=(a(82),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector(".navbar__toggleBtn"),t=document.querySelector(".navbar__menu"),a=document.querySelector(".navbar__icons");e.addEventListener("click",(function(){t.classList.toggle("active"),a.classList.toggle("active"),c.classList.toggle("active")}));for(var n=document.querySelectorAll(".navbar__menu li"),l=0;l<n.length;l++)n[l].addEventListener("click",(function(){t.classList.toggle("active"),a.classList.toggle("active"),c.classList.toggle("active")}));var c=document.querySelector("#navbar"),r=c.getBoundingClientRect().height;document.addEventListener("scroll",(function(){window.scrollY>r/5?c.classList.add("navbar--dark"):c.classList.remove("navbar--dark")})),document.querySelector(".navbar__menu__item").addEventListener("click",(function(e){var t=e.target.dataset.section;if(null!==t){console.log(t);var a=document.querySelector(t);null!==a?a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}):alert("\ud574\ub2f9 \ud398\uc774\uc9c0\uc5d0\ub294 About Me\uac00 \uc5c6\uc5b4\uc694! Resume \ud398\uc774\uc9c0\ub85c \uac00\uc8fc\uc138\uc694!")}}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"Header"},l.a.createElement("nav",{id:"navbar"},l.a.createElement("div",{className:"navbar__logo"},l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"fas fa-puzzle-piece"})," BeneBean's Coding")),l.a.createElement("ul",{className:"navbar__menu"},l.a.createElement("li",{className:"navbar__menu__item","data-section":"#about"},"About Me"),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/resume"},"Resume")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/journals"},"Journals")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/news"},"News")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/functions"},"Functions")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/problems"},"Problem Solving "))),l.a.createElement("ul",{className:"navbar__icons"},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/posungkim"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/posung.kim"},l.a.createElement("i",{className:"fab fa-facebook-square"})))),l.a.createElement("a",{href:"#",className:"navbar__toggleBtn"},l.a.createElement("i",{className:"fas fa-bars"}))))}}]),a}(l.a.Component)),b=(a(83),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=(new Date).getFullYear();return l.a.createElement("div",{className:"Footer"},l.a.createElement("nav",{className:"nav_bar"},l.a.createElement("span",null,e-1," - ",e," Rights Reserved By BeneBean ")))}}]),a}(l.a.Component)),h=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"FunctionComp"},l.a.createElement("h2",null,"Functions"),l.a.createElement("li",null," ",l.a.createElement(c.b,{to:this.props.location.pathname+"/calculator"}," Calculator \uae30\ub2a5 ")," "),l.a.createElement("li",null," ",l.a.createElement(c.b,{to:this.props.location.pathname+"/crawling"}," Crawling \uae30\ub2a5 ")," "),l.a.createElement("li",null," ",l.a.createElement(c.b,{to:this.props.location.pathname+"/youtube"}," YouTube Cloning ")," "))}}]),a}(l.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"problemsolving"},"This is problemsolving page!")}}]),a}(l.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Crawling Page!")}}]),a}(l.a.Component),N=a(55),C=a(175),k=a(173),O=a(56),D=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).initialState={id:-1,title:"",content:""},n.findNewsById=function(e){d.a.get("http://localhost:8080/rest/news/"+e).then((function(e){null!=e.data&&n.setState({id:e.data.id,title:e.data.title,content:e.data.content})})).catch((function(e){alert(e)}))},n.alertNews=function(e){alert(e+"!  \uc81c\ubaa9 : "+n.state.title+"\n\ub0b4\uc6a9 : "+n.state.content)},n.goBack=function(){n.props.history.push("/news")},n.updateNews=function(e){n.setState(Object(N.a)({},e.target.name,e.target.value))},n.submitNews=function(e){e.preventDefault();var t={title:n.state.title,content:n.state.content};d.a.post("http://localhost:8080/rest/news/submit/",t).then((function(e){n.alertNews("SAVED"),n.setState(n.initialState),n.goBack()})).catch((function(e){alert("NOT SAVED!")}))},n.editNews=function(e){e.preventDefault();var t={id:n.state.id,title:n.state.title,content:n.state.content};d.a.put("http://localhost:8080/rest/news/edit/"+n.state.id,t).then((function(e){n.alertNews("EDIT"),n.props.history.push("/news")})).catch((function(e){alert(e)}))},n.state=n.initialState,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;console.log("here is the param : "+e),e&&this.findNewsById(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"NewsCreate"},l.a.createElement(C.a,null,l.a.createElement(C.a.Group,{as:k.a,controlId:"formPlaintextTitle"},l.a.createElement(C.a.Label,{column:!0,sm:"2",className:"ml-2"},"\uc81c\ubaa9"),l.a.createElement(O.a,{sm:"11"},l.a.createElement(C.a.Control,{required:!0,type:"text",name:"title",placeholder:"\uc81c\ubaa9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694",value:this.state.title,onChange:this.updateNews}))),l.a.createElement(C.a.Group,{as:k.a,controlId:"formPlaintextContent"},l.a.createElement(C.a.Label,{column:!0,sm:"2",className:"ml-2"},"\ub0b4\uc6a9"),l.a.createElement(O.a,{sm:"11",style:{height:"25rem"}},l.a.createElement(C.a.Control,{required:!0,style:{height:"100%"},type:"text",name:"content",placeholder:"\ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694",as:"textarea",value:this.state.content,onChange:this.updateNews}),l.a.createElement("div",{className:"mt-3",style:{textAlign:"right"}},l.a.createElement(u.a,{onClick:this.goBack,variant:"success",type:"submit"},"\ub4a4\ub85c \uac00\uae30")," ",l.a.createElement(u.a,{onClick:-1===this.state.id?this.submitNews:this.editNews,variant:"primary",type:"submit"},-1===this.state.id?"Save":"Edit"))))))}}]),a}(l.a.Component),y=a(174),M=a(176),P=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"d-none d-lg-block"},l.a.createElement(y.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(M.a,{style:{width:"18rem"}},l.a.createElement(M.a.Img,{variant:"top",src:"https://avatars2.githubusercontent.com/u/37537227?s=460&u=202a41ec807e7d974885904913c6c46649020392&v=4"}),l.a.createElement(M.a.Body,null,l.a.createElement(M.a.Title,null,"\uae40\ubcf4\uc131"),l.a.createElement(M.a.Text,null,"\uafb8\uc900\ud788 \uc5f4\uc2ec\ud788 \ubc30\uc6b0\uc790!")))))}}]),a}(l.a.Component),w=a(57),B=a(35),L=a.n(B),S=(a(164),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"JournalComp"},l.a.createElement(L.a,{source:"# React \uc77c\uc9c0 1 - FLEXBOX FROGGY, CSS DINER\n"}),l.a.createElement("br",null),l.a.createElement(L.a,{source:"##### dfdf\n "}),l.a.createElement("div",{className:"code__Area"},l.a.createElement("code",null,"int i = 0 "),l.a.createElement("br",null),l.a.createElement("code",null,"int j = 0 ")))}}]),a}(l.a.Component)),j=(a(165),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("#arrowUp"),t=document.querySelector("#navbar");document.addEventListener("scroll",(function(){window.scrollY>t.getBoundingClientRect().height?e.classList.add("visible"):e.classList.remove("visible")}));var a=document.querySelector("#navbar");e.addEventListener("click",(function(){console.log(a),window.scrollTo({top:0,left:0,behavior:"smooth"})}));var n=document.querySelector(".experience__categories"),l=document.querySelector(".experience__projects"),c=document.querySelectorAll(".project");n.addEventListener("click",(function(e){var t=e.target.dataset.filter?e.target.dataset.filter:e.target.parentNode.dataset.filter,a="BUTTON"===e.target.nodeName?e.target:e.target.parentNode;void 0!==t&&(l.classList.add("animation-bottom"),setTimeout((function(){c.forEach((function(e){var a=e.dataset.type;"*"===t||t===a?e.classList.remove("invisible"):e.classList.add("invisible")})),l.classList.remove("animation-bottom")}),300),document.querySelector(".category__btn.selected").classList.remove("selected"),a.classList.add("selected"))}));var r=document.querySelector(".pointer");document.addEventListener("mousemove",(function(e){var t=e.clientY,a=e.clientX,n=e.pageY,l=e.pageX,c=document.querySelector(".row").childNodes[0].offsetWidth,s=document.querySelector("#navbar").offsetHeight;r.innerText="(".concat(a," , ").concat(t,")"),r.style.left="".concat(l-c,"px"),r.style.top="".concat(n-s,"px")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"ResumeComp"},l.a.createElement("section",{id:"coordinate"},l.a.createElement("span",{className:"pointer"},"(0 , 0)")),l.a.createElement("section",{id:"poster__background"},l.a.createElement("div",{className:"blackCover"}),l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"poster"},l.a.createElement("h1",{className:"posterTitle"},"Developer"),l.a.createElement("figure",{className:"images"}))),l.a.createElement("div",{className:"right"},l.a.createElement("h3",{className:"title"}," Developer "),l.a.createElement("p",null,"\ucef4\ud4e8\ud130\ub97c \ud1b5\ud574 \uba38\ub9ac \uc18d\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uac83\uc774 \uad6c\ud604\ub418\ub294 \uc138\uc0c1\uc5d0 \ub300\ud55c \ud070 \ub9e4\ub825\uc744 \ub290\ub07c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),l.a.createElement("br",null),"\uc774\uc5d0 \ub530\ub77c, \uc138\uc0c1\uc5d0 \uc784\ud329\ud2b8\ub97c \uc904 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4 \uad6c\ud604\uc5d0 \ub300\ud55c \ud765\ubbf8\uac00 \ucee4\uc84c\uace0,",l.a.createElement("br",null)," \ud604\uc7ac \uc990\uac70\uc6b4 \ub9c8\uc74c\uc73c\ub85c \ud615\ud0dc\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ub2e4\uc591\ud55c \uc758\ubbf8\uc640 \uc6a9\ub3c4\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \uc0ac\ud68c\uc5d0 \uc81c\uacf5\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."))),l.a.createElement("section",{id:"photo"},l.a.createElement("img",{src:"https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",alt:"topPhoto"})),l.a.createElement("section",{id:"about",class:"section"},l.a.createElement("div",{class:"left"},l.a.createElement("h3",{id:"about_me"},"About Me")),l.a.createElement("div",{class:"right"},l.a.createElement("h3",{className:"title"}," \uad81\uae08\uc99d\uc774 \ub9ce\uc740 \uac1c\ubc1c\uc790 "),l.a.createElement("p",{className:"content"},"\ucef4\ud4e8\ud130\ub97c \ud1b5\ud574 \uba38\ub9ac \uc18d\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uac83\uc774 \uad6c\ud604\ub418\ub294 \uc138\uc0c1\uc5d0 \ub300\ud55c \ud070 \ub9e4\ub825\uc744 \ub290\ub07c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),l.a.createElement("br",null),"\uc774\uc5d0 \ub530\ub77c, \uc138\uc0c1\uc5d0 \uc784\ud329\ud2b8\ub97c \uc904 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4 \uad6c\ud604\uc5d0 \ub300\ud55c \ud765\ubbf8\uac00 \ucee4\uc84c\uace0,",l.a.createElement("br",null)," \ud604\uc7ac \uc990\uac70\uc6b4 \ub9c8\uc74c\uc73c\ub85c \ud615\ud0dc\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ub2e4\uc591\ud55c \uc758\ubbf8\uc640 \uc6a9\ub3c4\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \uc0ac\ud68c\uc5d0 \uc81c\uacf5\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."))),l.a.createElement("section",{id:"skills",class:"section"},l.a.createElement("h1",null,"Skills"),l.a.createElement("div",{className:"skillComps"},l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png",alt:"c++ icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",alt:"python icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",alt:"JS icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVSn6huPlarccfZEFY__z79K6s-BrjBKVEWQ&usqp=CAU",alt:"react icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",alt:"node.js icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://pngimg.com/uploads/mysql/mysql_PNG23.png",alt:"mysql icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://miro.medium.com/max/300/1*UdM3Isk3gfnEOX7r6lWI8A.png",alt:"docker icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-512/jenkins-5-569553.png",alt:"docker icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))))),l.a.createElement("section",{id:"experience",class:"section"},l.a.createElement("h1",null,"Experience"),l.a.createElement("div",{className:"experience__categories"},l.a.createElement("button",{className:"category__btn selected","data-filter":"*"},"All ",l.a.createElement("span",{className:"category__count"},"4")),l.a.createElement("button",{className:"category__btn","data-filter":"frontend"},"Front-end ",l.a.createElement("span",{className:"category__count"},"1")),l.a.createElement("button",{className:"category__btn","data-filter":"backend"},"Back-end ",l.a.createElement("span",{className:"category__count"},"1")),l.a.createElement("button",{className:"category__btn","data-filter":"mobile"},"Mobile ",l.a.createElement("span",{className:"category__count"},"2"))),l.a.createElement("div",{className:"experience__projects"},l.a.createElement("a",{href:"/",className:"project",target:"_blank","data-type":"frontend"},l.a.createElement("div",{className:"project__img"}),l.a.createElement("div",{className:"project__description"},l.a.createElement("h3",null,"YouTube Mobile Site"),l.a.createElement("span",null,"Clone Coding with HTML, CSS, JS"))),l.a.createElement("a",{href:"/",className:"project",target:"_blank","data-type":"backend"},l.a.createElement("div",{className:"project__img"}),l.a.createElement("div",{className:"project__description"},l.a.createElement("h3",null,"YouTube Mobile Site"),l.a.createElement("span",null,"Clone Coding with HTML, CSS, JS"))),l.a.createElement("a",{href:"/",className:"project",target:"_blank","data-type":"mobile"},l.a.createElement("div",{className:"project__img"}),l.a.createElement("div",{className:"project__description"},l.a.createElement("h3",null,"YouTube Mobile Site"),l.a.createElement("span",null,"Clone Coding with HTML, CSS, JS"))),l.a.createElement("a",{href:"/",className:"project",target:"_blank","data-type":"mobile"},l.a.createElement("div",{className:"project__img"}),l.a.createElement("div",{className:"project__description"},l.a.createElement("h3",null,"YouTube Mobile Site"),l.a.createElement("span",null,"Clone Coding with HTML, CSS, JS"))))),l.a.createElement("button",{id:"arrowUp"},l.a.createElement("i",{className:"fas fa-arrow-up"})))}}]),a}(l.a.Component)),T=(a(166),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector(".info .metaData .titleAndButton .moreBtn"),t=document.querySelector(".info .metaData .titleAndButton .title");e.addEventListener("click",(function(){e.classList.toggle("clicked"),t.classList.toggle("clamp")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"YouTubeCloning"},l.a.createElement("section",{className:"header"},l.a.createElement("div",{className:"logos"},l.a.createElement("i",{className:"fab fa-youtube"}),l.a.createElement("span",null," YouTube")),l.a.createElement("div",{className:"icons"},l.a.createElement("i",{className:"fas fa-search"}),l.a.createElement("i",{className:"fas fa-ellipsis-v"}))),l.a.createElement("section",{className:"videoPlayer"},l.a.createElement("video",{"encrypted-media":!0,controls:!0,autoPlay:!0,src:"https://cdn.videvo.net/videvo_files/video/free/2012-07/small_watermarked/hd0936_preview.webm"})),l.a.createElement("section",{className:"infoAndupNext"},l.a.createElement("section",{className:"info"},l.a.createElement("div",{className:"metaData"},l.a.createElement("ul",{className:"hashTags"},l.a.createElement("li",null,"#Free Stock Video"),l.a.createElement("li",null,"#Motion Background"),l.a.createElement("li",null,"#Blue Rays")),l.a.createElement("div",{className:"titleAndButton"},l.a.createElement("span",{className:"title clamp"},"YouTube Clone Coding: \ubaa8\ubc14\uc77c\uc6a9 \uc6f9\uc0ac\uc774\ud2b8 \ub9cc\ub4e4\uae30 | HTML, CSS, JS\ub85c Responsive\ud55c \ubc18\uc751 \uad6c\ud604\ud558\uae30, Flex Box \ubc0f Justify Content \uc5f0\uc2b5\ud558\uae30, Layout \uad6c\uc131 \ud655\uc778 \ubc0f \uc5f0\uc2b5\ud558\uae30"),l.a.createElement("button",{className:"moreBtn"},l.a.createElement("i",{class:"fas fa-caret-down"}))),l.a.createElement("span",{className:"view"},"1M views 1 month ago")),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-thumbs-up active"}),l.a.createElement("span",null,"5K"))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-thumbs-down"}),l.a.createElement("span",null,"0"))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-share"}),l.a.createElement("span",null,"Share"))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-plus"}),l.a.createElement("span",null,"Save"))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement("i",{className:"fab fa-font-awesome-flag"}),l.a.createElement("span",null,"Report")))),l.a.createElement("section",{className:"channel"},l.a.createElement("div",{className:"metaData"},l.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/37537227?s=460&u=202a41ec807e7d974885904913c6c46649020392&v=4",alt:"channelImg"}),l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"channelName"},"BeneBean's Coding"),l.a.createElement("span",{className:"subscriberNumber"},"100M Subscribers"))),l.a.createElement("button",{className:"subscribe"},"Subscribe"))),l.a.createElement("section",{className:"upNext"},l.a.createElement("span",{className:"title"},"Up next"),l.a.createElement("ul",null,l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png",alt:"react banner"})),l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"title"},"React 1"),l.a.createElement("span",{className:"name"},"BeneBean's Coding"),l.a.createElement("span",{className:"views"},"10M views")),l.a.createElement("button",{className:"moreBtn"},l.a.createElement("i",{className:"fas fa-ellipsis-v"}))),l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png",alt:"react banner"})),l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"title"},"React 2"),l.a.createElement("span",{className:"name"},"BeneBean's Coding"),l.a.createElement("span",{className:"views"},"15M views")),l.a.createElement("button",{className:"moreBtn"},l.a.createElement("i",{className:"fas fa-ellipsis-v"}))),l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png",alt:"react banner"})),l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"title"},"React 3"),l.a.createElement("span",{className:"name"},"BeneBean's Coding"),l.a.createElement("span",{className:"views"},"20M views")),l.a.createElement("button",{className:"moreBtn"},l.a.createElement("i",{className:"fas fa-ellipsis-v"})))))))}}]),a}(l.a.Component));a(167);var R=function(){return l.a.createElement("div",{className:"Router"},l.a.createElement(c.a,null,l.a.createElement(f,null),l.a.createElement(k.a,null,l.a.createElement(O.a,{xs:4,md:3},l.a.createElement(P,null)),l.a.createElement(O.a,{xs:12,md:8},l.a.createElement(r.d,null,l.a.createElement(r.a,{exact:!0,path:"/",to:"/resume"}),l.a.createElement(r.b,{exact:!0,path:"/resume",component:j}),l.a.createElement(r.b,{exact:!0,path:"/journals",component:S}),l.a.createElement(r.b,{exact:!0,path:"/news",component:p}),l.a.createElement(r.b,{exact:!0,path:"/news/create",component:D}),l.a.createElement(r.b,{exact:!0,path:"/news/edit/:id",component:D}),l.a.createElement(r.b,{exact:!0,path:"/functions",component:h}),l.a.createElement(r.b,{exact:!0,path:"/functions/calculator",component:w.a}),l.a.createElement(r.b,{exact:!0,path:"/functions/crawling",component:g}),l.a.createElement(r.b,{exact:!0,path:"/functions/youtube",component:T}),l.a.createElement(r.b,{exact:!0,path:"/problems",component:v}),l.a.createElement(r.a,{path:"/*",to:"/news"})))),l.a.createElement(b,null)))};var A=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(R,null))},x=a(58),U=a.n(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));U.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(172),CalculatorComp=function(_React$Component){Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(CalculatorComp,_React$Component);var _super=Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.a)(CalculatorComp);function CalculatorComp(props){var _this;return Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalculatorComp),_this=_super.call(this,props),_this.calc=function(e){!0===_this.state.flag?_this.setState({inputBox:""+e,flag:!1}):_this.setState({inputBox:_this.state.inputBox+e})},_this.clearCalc=function(){_this.setState({inputBox:"",flag:!1})},_this.finishCalc=function(){try{_this.setState({inputBox:eval(_this.state.inputBox),flag:!0})}catch(err){alert("\uc5d0\ub7ec \ub0b4\uc6a9 => "+err+"\n\ub2e4\uc2dc \uc801\uc5b4\uc8fc\uc138\uc694"),_this.clearCalc(),_this.props.history.push("/functions/calculator")}},_this.state={inputBox:"",flag:!1},_this}return Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalculatorComp,[{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",null,"Calculator (React Only)"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.a,{responsive:!0,hover:!0,variant:"dark",bordered:!0,style:{textAlign:"center"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",{style:{height:"50px",backgroundColor:"black"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{colSpan:"4"},"",this.state.inputBox)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(9)}},"9"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(8)}},"8"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(7)}},"7"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("*")}},"*")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(6)}},"6"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(5)}},"5"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(4)}},"4"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("+")}},"+")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(3)}},"3"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(2)}},"2"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(1)}},"1"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("-")}},"-")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(0)}},"0"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(".")}},"."),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.finishCalc()}},"="),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("/")}},"/")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{colSpan:"4",onClick:this.clearCalc},"Clear")))))}}]),CalculatorComp}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=CalculatorComp},59:function(e,t,a){e.exports=a(171)},82:function(e,t,a){},83:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.2d524028.chunk.js.map