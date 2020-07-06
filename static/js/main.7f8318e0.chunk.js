(this.webpackJsonpreact_frontend=this.webpackJsonpreact_frontend||[]).push([[0],{172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),r=a(9),s=a(5),o=a(6),i=a(7),m=a(8),u=a(180),_=a(185),d=a(18),E=a.n(d),p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getNews()},n.getNews=function(){E.a.get("http://localhost:8080/rest/news").then((function(e){return console.log("Received Data : ",e.data),e.data})).then((function(e){return n.setState({news:e})}))},n.deleteUser=function(e){E.a.delete("http://localhost:8080/rest/news/"+e).then((function(e){return console.log("Deleted Data : ",e.data),e.data})).then(n.setState({news:n.state.news.filter((function(t){return t.id!==e}))})).catch((function(t){alert("ERROR : "+e)}))},n.state={news:[]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=0;return l.a.createElement("div",{className:"news"},l.a.createElement("h1",null,"News",l.a.createElement(c.b,{style:{textDecoration:"none"},className:"text-muted",to:this.props.location.pathname+"/create"},"(\uc791\uc131)")),l.a.createElement(u.a,{hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Content"))),l.a.createElement("tbody",null,0===this.state.news.length?l.a.createElement("tr",{align:"center"},l.a.createElement("td",{colSpan:6},"No News Available.")):this.state.news.map((function(a){return l.a.createElement("tr",{key:++t},l.a.createElement("td",null,t),l.a.createElement("td",null,a.title),l.a.createElement("td",null,a.content),l.a.createElement("td",null,l.a.createElement(c.b,{to:"/news/edit/"+a.id},l.a.createElement(_.a,null," \uc218\uc815 "))," "," ",l.a.createElement(_.a,{variant:"danger",onClick:function(){e.deleteUser(a.id)}}," \uc0ad\uc81c")))})))))}}]),a}(l.a.Component),f=(a(89),a(55)),v=a.n(f),b=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("audio"),t=!1;document.addEventListener("click",(function(){t||(t=!0,e.loop=!1,e.play(),console.log("ASdfsad"))}));var a=document.querySelector(".navbar__toggleBtn"),n=document.querySelector(".navbar__menu"),l=document.querySelector(".navbar__icons");a.addEventListener("click",(function(){n.classList.toggle("active"),l.classList.toggle("active"),s.classList.toggle("active")}));for(var c=document.querySelectorAll(".navbar__menu"),r=0;r<c.length;r++)c[r].addEventListener("click",(function(){n.classList.toggle("active"),l.classList.toggle("active"),s.classList.toggle("active")}));var s=document.querySelector("#navbar"),o=s.getBoundingClientRect().height;document.addEventListener("scroll",(function(){window.scrollY>o/5?s.classList.add("navbar--dark"):s.classList.remove("navbar--dark")})),document.querySelector(".navbar__menu__item").addEventListener("click",(function(e){if("LI"===e.target.tagName){var t=e.target.dataset.section;if(null!==t){console.log(t);var a=document.querySelector(t);null!==a?a.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}):alert("\ud574\ub2f9 \ud398\uc774\uc9c0\uc5d0\ub294 About Me\uac00 \uc5c6\uc5b4\uc694! Resume \ud398\uc774\uc9c0\ub85c \uac00\uc8fc\uc138\uc694!")}}}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"Header"},l.a.createElement("nav",{id:"navbar"},l.a.createElement("audio",{src:v.a}),l.a.createElement("div",{className:"navbar__logo"},l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"fas fa-puzzle-piece"})," BeneBean's Coding")),l.a.createElement("ul",{className:"navbar__menu"},l.a.createElement("li",{className:"navbar__menu__item","data-section":"#about"},"About Me"),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/resume"},"Resume")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/journals"},"Journals")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/news"},"News")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/functions"},"Functions")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/problems"},"Problem Solving "))),l.a.createElement("ul",{className:"navbar__icons"},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/posungkim"},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/posung.kim"},l.a.createElement("i",{className:"fab fa-facebook-square"})))),l.a.createElement("a",{href:"#",className:"navbar__toggleBtn"},l.a.createElement("i",{className:"fas fa-bars"}))))}}]),a}(l.a.Component),h=(a(90),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=(new Date).getFullYear();return l.a.createElement("div",{className:"Footer"},l.a.createElement("nav",{className:"nav_bar"},l.a.createElement("span",null,e-1," - ",e," Rights Reserved By BeneBean ")))}}]),a}(l.a.Component)),g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"FunctionComp"},l.a.createElement("h2",null,"Functions"),l.a.createElement("li",null," ",l.a.createElement(c.b,{to:this.props.location.pathname+"/calculator"}," Calculator \uae30\ub2a5 ")," "),l.a.createElement("li",null," ",l.a.createElement(c.b,{to:this.props.location.pathname+"/game"}," Game \uae30\ub2a5 ")," "),l.a.createElement("li",null," ",l.a.createElement(c.b,{to:this.props.location.pathname+"/youtube"}," YouTube Cloning ")," "))}}]),a}(l.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"problemsolving"},"This is problemsolving page!")}}]),a}(l.a.Component),C=(a(91),a(56)),y=a.n(C),k=a(57),O=a.n(k),M=a(58),D=a.n(M),w=a(59),P=a.n(w),L=a(60),S=a.n(L),B=a(61),T=a.n(B),j=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("audio");null!==e&&e.pause();var t=new Audio(y.a),a=new Audio(O.a),n=new Audio(D.a),l=new Audio(P.a);function c(e){e.play()}function r(e){e.currentTime=0,e.pause()}var s=document.querySelector(".game__field"),o=s.getBoundingClientRect(),i=document.querySelector(".header__timer"),m=document.querySelector(".header__score"),u=document.querySelector(".game__popUp"),_=document.querySelector(".popUp__message"),d=document.querySelector(".popUp__refresh"),E=document.querySelector(".header__startBtn"),p=!1,f=0,v=void 0;function b(e){p=!1,r(t),k(),M(),w(e?"Congratulation! \ud83d\ude0a\u200d":"Sorry, Lost! \ud83d\udc7b");try{var a=document.querySelector(".fa-stop");a.classList.remove("fa-stop"),a.classList.add("fa-play-circle")}catch(s){console.log(s)}finally{c(e?l:n)}}function h(){c(t),p=!0,E.style.visibility="visible",f=0,s.innerHTML="",m.innerHTML="".concat(5," score"),N("corgi",5),N("bulldog",5),function(){var e=document.querySelector(".fa-play-circle");e.classList.remove("fa-play-circle"),e.classList.add("fa-stop")}(),i.style.visibility="visible",m.style.visibility="visible",C(v=5),window.curInterval=setInterval((function(){return v<=0?(clearInterval(window.curInterval),void b(!1)):null===document.querySelector(".fa-stop")?(clearInterval(window.curInterval),void r(t)):void C(--v)}),1e3)}function g(e,t){return Math.random()*(t-e)+e}function N(e,t){for(var a=o.width-100,n=o.height-100,l=0;l<t;l++){var c=document.createElement("img"),r=g(0,a),i=g(0,n);c.className=e,c.style.position="absolute",c.style.left="".concat(r,"px"),c.style.top="".concat(i,"px"),c.src="corgi"===e?S.a:T.a,s.appendChild(c)}}function C(e){var t=Math.floor(e/60),a=e%60;i.innerHTML="".concat(t," min ").concat(a," sec")}function k(){clearInterval(window.curInterval)}function M(){E.style.visibility="hidden"}function w(e){u.classList.remove("hide"),_.innerHTML=e}d.addEventListener("click",(function(){h(),u.classList.add("hide")})),s.addEventListener("click",(function(e){if(!p)return;var t=e.target;t.matches(".corgi")?(t.remove(),c(a),++f,m.innerText="".concat(5-f," score"),console.log("corgi"),5===f&&b(!0)):e.target.matches(".bulldog")&&(console.log("bulldog"),c(n),b(!1))})),E.addEventListener("click",(function(){p?function(){p=!1,r(t),k(),M(),w("Play Again?");var e=document.querySelector(".fa-stop");e.classList.remove("fa-stop"),e.classList.add("fa-play-circle")}():h()}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"game"},l.a.createElement("section",{className:"game__header"},l.a.createElement("button",{className:"header__startBtn"},l.a.createElement("i",{className:"fas fa-play-circle"})),l.a.createElement("span",{className:"header__timer"},"0min 0sec"),l.a.createElement("span",{className:"header__score"},"0")),l.a.createElement("section",{className:"game__field"})),l.a.createElement("section",{className:"game__popUp hide"},l.a.createElement("button",{className:"popUp__refresh"},l.a.createElement("i",{className:"fas fa-redo-alt"})),l.a.createElement("span",{className:"popUp__message"},"popUp__message")))}}]),a}(l.a.Component),A=a(62),x=a(183),I=a(181),R=a(63),U=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).initialState={id:-1,title:"",content:""},n.findNewsById=function(e){E.a.get("http://localhost:8080/rest/news/"+e).then((function(e){null!=e.data&&n.setState({id:e.data.id,title:e.data.title,content:e.data.content})})).catch((function(e){alert(e)}))},n.alertNews=function(e){alert(e+"!  \uc81c\ubaa9 : "+n.state.title+"\n\ub0b4\uc6a9 : "+n.state.content)},n.goBack=function(){n.props.history.push("/news")},n.updateNews=function(e){n.setState(Object(A.a)({},e.target.name,e.target.value))},n.submitNews=function(e){e.preventDefault();var t={title:n.state.title,content:n.state.content};E.a.post("http://localhost:8080/rest/news/submit/",t).then((function(e){n.alertNews("SAVED"),n.setState(n.initialState),n.goBack()})).catch((function(e){alert("NOT SAVED!")}))},n.editNews=function(e){e.preventDefault();var t={id:n.state.id,title:n.state.title,content:n.state.content};E.a.put("http://localhost:8080/rest/news/edit/"+n.state.id,t).then((function(e){n.alertNews("EDIT"),n.props.history.push("/news")})).catch((function(e){alert(e)}))},n.state=n.initialState,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;console.log("here is the param : "+e),e&&this.findNewsById(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"NewsCreate"},l.a.createElement(x.a,null,l.a.createElement(x.a.Group,{as:I.a,controlId:"formPlaintextTitle"},l.a.createElement(x.a.Label,{column:!0,sm:"2",className:"ml-2"},"\uc81c\ubaa9"),l.a.createElement(R.a,{sm:"11"},l.a.createElement(x.a.Control,{required:!0,type:"text",name:"title",placeholder:"\uc81c\ubaa9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694",value:this.state.title,onChange:this.updateNews}))),l.a.createElement(x.a.Group,{as:I.a,controlId:"formPlaintextContent"},l.a.createElement(x.a.Label,{column:!0,sm:"2",className:"ml-2"},"\ub0b4\uc6a9"),l.a.createElement(R.a,{sm:"11",style:{height:"25rem"}},l.a.createElement(x.a.Control,{required:!0,style:{height:"100%"},type:"text",name:"content",placeholder:"\ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694",as:"textarea",value:this.state.content,onChange:this.updateNews}),l.a.createElement("div",{className:"mt-3",style:{textAlign:"right"}},l.a.createElement(_.a,{onClick:this.goBack,variant:"success",type:"submit"},"\ub4a4\ub85c \uac00\uae30")," ",l.a.createElement(_.a,{onClick:-1===this.state.id?this.submitNews:this.editNews,variant:"primary",type:"submit"},-1===this.state.id?"Save":"Edit"))))))}}]),a}(l.a.Component),q=a(182),W=a(184),K=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"d-none d-lg-block"},l.a.createElement(q.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(W.a,{style:{width:"18rem"}},l.a.createElement(W.a.Img,{variant:"top",src:"https://avatars2.githubusercontent.com/u/37537227?s=460&u=202a41ec807e7d974885904913c6c46649020392&v=4"}),l.a.createElement(W.a.Body,null,l.a.createElement(W.a.Title,null,"\uae40\ubcf4\uc131"),l.a.createElement(W.a.Text,null,"\uafb8\uc900\ud788 \uc5f4\uc2ec\ud788 \ubc30\uc6b0\uc790!")))))}}]),a}(l.a.Component),Y=a(64),z=a(35),H=a.n(z),J=(a(172),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"JournalComp"},l.a.createElement(H.a,{source:"# React \uc77c\uc9c0 1 - FLEXBOX FROGGY, CSS DINER\n"}),l.a.createElement("br",null),l.a.createElement(H.a,{source:"##### dfdf\n "}),l.a.createElement("div",{className:"code__Area"},l.a.createElement("code",null,"int i = 0 "),l.a.createElement("br",null),l.a.createElement("code",null,"int j = 0 ")))}}]),a}(l.a.Component)),F=(a(173),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("#arrowUp"),t=document.querySelector("#navbar");document.addEventListener("scroll",(function(){window.scrollY>t.getBoundingClientRect().height?e.classList.add("visible"):e.classList.remove("visible")}));var a=document.querySelector("#navbar");e.addEventListener("click",(function(){console.log(a),window.scrollTo({top:0,left:0,behavior:"smooth"})}));var n=document.querySelector(".experience__categories"),l=document.querySelector(".experience__projects"),c=document.querySelectorAll(".project");n.addEventListener("click",(function(e){var t=e.target.dataset.filter?e.target.dataset.filter:e.target.parentNode.dataset.filter,a="BUTTON"===e.target.nodeName?e.target:e.target.parentNode;void 0!==t&&(l.classList.add("animation-bottom"),setTimeout((function(){c.forEach((function(e){var a=e.dataset.type;"*"===t||t===a?e.classList.remove("invisible"):e.classList.add("invisible")})),l.classList.remove("animation-bottom")}),300),document.querySelector(".category__btn.selected").classList.remove("selected"),a.classList.add("selected"))}));var r=document.querySelector(".pointer");document.addEventListener("mousemove",(function(e){var t=e.clientY,a=e.clientX,n=e.pageY,l=e.pageX,c=document.querySelector(".row").childNodes[0].offsetWidth,s=document.querySelector("#navbar").offsetHeight;r.style.opacity=1,r.innerText="(".concat(a,"px, ").concat(t,"px)"),r.style.transform="translate(".concat(l-c,"px, ").concat(n-s,"px)")})),document.addEventListener("scroll",(function(e){r.style.opacity=0}));var s=document.querySelector(".items"),o=document.querySelector(".input__btn"),i=document.querySelector(".input__area");function m(){var e=i.value;if(""!==e){var t=function(e){var t=document.createElement("li");return t.setAttribute("class","item"),t.setAttribute("data-id",u),t.innerHTML='\n                <div class="item__content">\n                    <span class="item__name">'.concat(e,'</span>\n                    <button class="item__delete">\n                        <i class="fas fa-trash-alt" data-id=').concat(u,'></i>\n                    </button>\n                </div>\n                <div class="item__split"></div>\n            '),u++,t}(e);s.appendChild(t),t.scrollIntoView(),i.value="",i.focus()}else i.focus()}var u=0;s.addEventListener("click",(function(e){var t=e.target.dataset.id;t&&document.querySelector('.item[data-id="'.concat(t,'"]')).remove()})),o.addEventListener("click",(function(){m()})),i.addEventListener("keypress",(function(e){"Enter"===e.key&&m()}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"ResumeComp"},l.a.createElement("section",{id:"coordinate"},l.a.createElement("span",{className:"pointer"},"(0 , 0)")),l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"blackCover"}),l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"poster"},l.a.createElement("h1",{className:"posterTitle"},l.a.createElement("strong",null,"\uac1c\ubc1c"),"\uc774 \uc990\uac81\uc2b5\ub2c8\ub2e4!"),l.a.createElement("figure",{className:"images"}))),l.a.createElement("div",{className:"right"},l.a.createElement("h3",{className:"title"},l.a.createElement("strong",null,"Proactive")," ",l.a.createElement("strong",null,"Developer")," "),l.a.createElement("div",{className:"content"},l.a.createElement("p",null,"\ucef4\ud4e8\ud130\ub97c \ud1b5\ud574 \uba38\ub9ac \uc18d\uc758 \ubaa8\ub4e0 \uac83\uc774 \uad6c\ud604\ub420 \uc218 \uc788\ub294 \uc138\uc0c1\uc5d0 \ud070 \ub9e4\ub825\uc744 \ub290\ub07c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),l.a.createElement("p",null,"\uc774\uc5d0 \ub530\ub77c, \uc138\uc0c1\uc5d0 \uc784\ud329\ud2b8\ub97c \uc904 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4 \uad6c\ud604\uc5d0 \ub300\ud55c \ud765\ubbf8\uac00 \ucee4\uc84c\uace0, ",l.a.createElement("br",null),"\ud604\uc7ac \uc990\uac70\uc6b4 \ub9c8\uc74c\uc73c\ub85c \ud615\ud0dc\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ub2e4\uc591\ud55c \uc758\ubbf8\uc640 \uc6a9\ub3c4\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \uc0ac\ud68c\uc5d0 \uc81c\uacf5\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."),l.a.createElement("p",null,"\ud0d0\uad6c\ub825\uacfc \ucc3d\uc758\ub825\uc744 \uae30\ubc18\uc73c\ub85c \uc138\uacc4\uc778\ub4e4\uacfc \ud568\uaed8 \ud611\uc5c5\ud558\uc5ec \uc0c1\uc0c1\uc744 \ud604\uc2e4\ub85c \ub9cc\ub4dc\ub294 \uc138\uc0c1,",l.a.createElement("br",null),"\ucef4\ud4e8\ud130\uc640 \uc544\uc774\ub514\uc5b4\ub9cc \uc788\ub2e4\uba74 \uc5b8\uc81c \uc5b4\ub514\uc11c\ub098 \uad6c\ud604\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\ub294 \uc138\uc0c1,",l.a.createElement("br",null),"\ub2a5\ub3d9\uc801\uc778 \uc790\uc138\uc640 \uc5f4\uc815\uc801\uc778 \uc790\uc138\ub97c \ud1b5\ud574 \ud558\ub8e8\ud558\ub8e8 \uc131\uc7a5\ud560 \uc218 \uc788\ub294 \uc138\uc0c1 \ub4f1 ",l.a.createElement("br",null),"\ub2e4\uc74c\uc774 \uae30\ub2e4\ub824\uc9c0\ub294 \uc138\uc0c1\uc744 \ub9cc\ub4e4\uc5b4 \ub098\uac00\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.")))),l.a.createElement("section",{id:"skills",class:"section"},l.a.createElement("h1",null,l.a.createElement("strong",null,"Skills")),l.a.createElement("div",{className:"skillComps"},l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png",alt:"c++ icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",alt:"python icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",alt:"JS icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVSn6huPlarccfZEFY__z79K6s-BrjBKVEWQ&usqp=CAU",alt:"react icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",alt:"node.js icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://pngimg.com/uploads/mysql/mysql_PNG23.png",alt:"mysql icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://miro.medium.com/max/300/1*UdM3Isk3gfnEOX7r6lWI8A.png",alt:"docker icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))),l.a.createElement("div",{className:"skill"},l.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-512/jenkins-5-569553.png",alt:"docker icon",className:"skillComp"}),l.a.createElement("div",{className:"skill__description"},l.a.createElement("span",null,"70%"))))),l.a.createElement("section",{id:"experience",class:"section"},l.a.createElement("h1",null,l.a.createElement("strong",null,"Experience")),l.a.createElement("div",{className:"experience__categories"},l.a.createElement("button",{className:"category__btn selected","data-filter":"*"},"All ",l.a.createElement("span",{className:"category__count"},"4")),l.a.createElement("button",{className:"category__btn","data-filter":"frontend"},"Front-end ",l.a.createElement("span",{className:"category__count"},"1")),l.a.createElement("button",{className:"category__btn","data-filter":"backend"},"Back-end ",l.a.createElement("span",{className:"category__count"},"1")),l.a.createElement("button",{className:"category__btn","data-filter":"mobile"},"Mobile ",l.a.createElement("span",{className:"category__count"},"2"))),l.a.createElement("div",{className:"experience__projects"},l.a.createElement("a",{href:"/",className:"project",target:"_blank","data-type":"frontend"},l.a.createElement("div",{className:"project__img"}),l.a.createElement("div",{className:"project__description"},l.a.createElement("h3",null,"YouTube Mobile Site"),l.a.createElement("span",null,"Clone Coding with HTML, CSS, JS"))),l.a.createElement("a",{href:"/",className:"project",target:"_blank","data-type":"backend"},l.a.createElement("div",{className:"project__img"}),l.a.createElement("div",{className:"project__description"},l.a.createElement("h3",null,"YouTube Mobile Site"),l.a.createElement("span",null,"Clone Coding with HTML, CSS, JS"))),l.a.createElement("a",{href:"/",className:"project",target:"_blank","data-type":"mobile"},l.a.createElement("div",{className:"project__img"}),l.a.createElement("div",{className:"project__description"},l.a.createElement("h3",null,"YouTube Mobile Site"),l.a.createElement("span",null,"Clone Coding with HTML, CSS, JS"))),l.a.createElement("a",{href:"/",className:"project",target:"_blank","data-type":"mobile"},l.a.createElement("div",{className:"project__img"}),l.a.createElement("div",{className:"project__description"},l.a.createElement("h3",null,"YouTube Mobile Site"),l.a.createElement("span",null,"Clone Coding with HTML, CSS, JS"))))),l.a.createElement("section",{id:"activity",className:"section"},l.a.createElement("h1",null,l.a.createElement("strong",null,"Activity")),l.a.createElement("div",{className:"list"},l.a.createElement("ul",{className:"items"})),l.a.createElement("div",{className:"input"},l.a.createElement("input",{type:"text",placeholder:"Activity\ub97c \uae30\uc785\ud574\uc8fc\uc138\uc694",className:"input__area"}),l.a.createElement("button",{className:"input__btn"},"Add Button"))),l.a.createElement("section",{id:"last"}),l.a.createElement("button",{id:"arrowUp"},l.a.createElement("i",{className:"fas fa-arrow-up"})))}}]),a}(l.a.Component)),G=(a(174),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector(".info .metaData .titleAndButton .moreBtn"),t=document.querySelector(".info .metaData .titleAndButton .title");e.addEventListener("click",(function(){e.classList.toggle("clicked"),t.classList.toggle("clamp")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"YouTubeCloning"},l.a.createElement("section",{className:"header"},l.a.createElement("div",{className:"logos"},l.a.createElement("i",{className:"fab fa-youtube"}),l.a.createElement("span",null," YouTube")),l.a.createElement("div",{className:"icons"},l.a.createElement("i",{className:"fas fa-search"}),l.a.createElement("i",{className:"fas fa-ellipsis-v"}))),l.a.createElement("section",{className:"videoPlayer"},l.a.createElement("video",{"encrypted-media":!0,controls:!0,autoPlay:!0,src:"https://cdn.videvo.net/videvo_files/video/free/2012-07/small_watermarked/hd0936_preview.webm"})),l.a.createElement("section",{className:"infoAndupNext"},l.a.createElement("section",{className:"info"},l.a.createElement("div",{className:"metaData"},l.a.createElement("ul",{className:"hashTags"},l.a.createElement("li",null,"#Free Stock Video"),l.a.createElement("li",null,"#Motion Background"),l.a.createElement("li",null,"#Blue Rays")),l.a.createElement("div",{className:"titleAndButton"},l.a.createElement("span",{className:"title clamp"},"YouTube Clone Coding: \ubaa8\ubc14\uc77c\uc6a9 \uc6f9\uc0ac\uc774\ud2b8 \ub9cc\ub4e4\uae30 | HTML, CSS, JS\ub85c Responsive\ud55c \ubc18\uc751 \uad6c\ud604\ud558\uae30, Flex Box \ubc0f Justify Content \uc5f0\uc2b5\ud558\uae30, Layout \uad6c\uc131 \ud655\uc778 \ubc0f \uc5f0\uc2b5\ud558\uae30"),l.a.createElement("button",{className:"moreBtn"},l.a.createElement("i",{class:"fas fa-caret-down"}))),l.a.createElement("span",{className:"view"},"1M views 1 month ago")),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-thumbs-up active"}),l.a.createElement("span",null,"5K"))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-thumbs-down"}),l.a.createElement("span",null,"0"))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-share"}),l.a.createElement("span",null,"Share"))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement("i",{className:"fas fa-plus"}),l.a.createElement("span",null,"Save"))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement("i",{className:"fab fa-font-awesome-flag"}),l.a.createElement("span",null,"Report")))),l.a.createElement("section",{className:"channel"},l.a.createElement("div",{className:"metaData"},l.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/37537227?s=460&u=202a41ec807e7d974885904913c6c46649020392&v=4",alt:"channelImg"}),l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"channelName"},"BeneBean's Coding"),l.a.createElement("span",{className:"subscriberNumber"},"100M Subscribers"))),l.a.createElement("button",{className:"subscribe"},"Subscribe"))),l.a.createElement("section",{className:"upNext"},l.a.createElement("span",{className:"title"},"Up next"),l.a.createElement("ul",null,l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png",alt:"react banner"})),l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"title"},"React 1"),l.a.createElement("span",{className:"name"},"BeneBean's Coding"),l.a.createElement("span",{className:"views"},"10M views")),l.a.createElement("button",{className:"moreBtn"},l.a.createElement("i",{className:"fas fa-ellipsis-v"}))),l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png",alt:"react banner"})),l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"title"},"React 2"),l.a.createElement("span",{className:"name"},"BeneBean's Coding"),l.a.createElement("span",{className:"views"},"15M views")),l.a.createElement("button",{className:"moreBtn"},l.a.createElement("i",{className:"fas fa-ellipsis-v"}))),l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png",alt:"react banner"})),l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"title"},"React 3"),l.a.createElement("span",{className:"name"},"BeneBean's Coding"),l.a.createElement("span",{className:"views"},"20M views")),l.a.createElement("button",{className:"moreBtn"},l.a.createElement("i",{className:"fas fa-ellipsis-v"})))))))}}]),a}(l.a.Component));a(175);var V=function(){return l.a.createElement("div",{className:"Router"},l.a.createElement(c.a,null,l.a.createElement(b,null),l.a.createElement(I.a,null,l.a.createElement(R.a,{xs:4,md:3},l.a.createElement(K,null)),l.a.createElement(R.a,{xs:12,md:8},l.a.createElement(r.d,null,l.a.createElement(r.a,{exact:!0,path:"/",to:"/resume"}),l.a.createElement(r.b,{exact:!0,path:"/resume",component:F}),l.a.createElement(r.b,{exact:!0,path:"/journals",component:J}),l.a.createElement(r.b,{exact:!0,path:"/news",component:p}),l.a.createElement(r.b,{exact:!0,path:"/news/create",component:U}),l.a.createElement(r.b,{exact:!0,path:"/news/edit/:id",component:U}),l.a.createElement(r.b,{exact:!0,path:"/functions",component:g}),l.a.createElement(r.b,{exact:!0,path:"/functions/calculator",component:Y.a}),l.a.createElement(r.b,{exact:!0,path:"/functions/game",component:j}),l.a.createElement(r.b,{exact:!0,path:"/functions/youtube",component:G}),l.a.createElement(r.b,{exact:!0,path:"/problems",component:N})))),l.a.createElement(h,null)))};var X=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(V,null))},$=a(65),Q=a.n($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Q.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports=a.p+"static/media/homepageBgMusic.e175412e.mp3"},56:function(e,t,a){e.exports=a.p+"static/media/bgSound.4af35b95.mp3"},57:function(e,t,a){e.exports=a.p+"static/media/successSound.cbcd6ccc.mp3"},58:function(e,t,a){e.exports=a.p+"static/media/failSound.853245ad.mp3"},59:function(e,t,a){e.exports=a.p+"static/media/winSound.e0c7c75e.mp3"},60:function(e,t,a){e.exports=a.p+"static/media/welshCorgiImg.eb8d645e.png"},61:function(e,t,a){e.exports=a.p+"static/media/bullDogImg.fbba2278.png"},64:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(180),CalculatorComp=function(_React$Component){Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(CalculatorComp,_React$Component);var _super=Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.a)(CalculatorComp);function CalculatorComp(props){var _this;return Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalculatorComp),_this=_super.call(this,props),_this.calc=function(e){!0===_this.state.flag?_this.setState({inputBox:""+e,flag:!1}):_this.setState({inputBox:_this.state.inputBox+e})},_this.clearCalc=function(){_this.setState({inputBox:"",flag:!1})},_this.finishCalc=function(){try{_this.setState({inputBox:eval(_this.state.inputBox),flag:!0})}catch(err){alert("\uc5d0\ub7ec \ub0b4\uc6a9 => "+err+"\n\ub2e4\uc2dc \uc801\uc5b4\uc8fc\uc138\uc694"),_this.clearCalc(),_this.props.history.push("/functions/calculator")}},_this.state={inputBox:"",flag:!1},_this}return Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalculatorComp,[{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",null,"Calculator (React Only)"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.a,{responsive:!0,hover:!0,variant:"dark",bordered:!0,style:{textAlign:"center"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",{style:{height:"50px",backgroundColor:"black"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{colSpan:"4"},"",this.state.inputBox)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(9)}},"9"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(8)}},"8"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(7)}},"7"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("*")}},"*")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(6)}},"6"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(5)}},"5"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(4)}},"4"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("+")}},"+")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(3)}},"3"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(2)}},"2"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(1)}},"1"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("-")}},"-")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(0)}},"0"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(".")}},"."),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.finishCalc()}},"="),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("/")}},"/")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{colSpan:"4",onClick:this.clearCalc},"Clear")))))}}]),CalculatorComp}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=CalculatorComp},66:function(e,t,a){e.exports=a(179)},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.7f8318e0.chunk.js.map