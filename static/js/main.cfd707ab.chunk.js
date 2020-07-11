(this.webpackJsonpreact_frontend=this.webpackJsonpreact_frontend||[]).push([[0],{174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),r=a(6),s=a(7),o=a(8),i=a(10),m=a(9),u=a(182),_=a(185),d=a(18),p=a.n(d),E=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getNews()},n.getNews=function(){p.a.get("http://localhost:8080/rest/news").then((function(e){return console.log("Received Data : ",e.data),e.data})).then((function(e){return n.setState({news:e})}))},n.deleteUser=function(e){p.a.delete("http://localhost:8080/rest/news/"+e).then((function(e){return console.log("Deleted Data : ",e.data),e.data})).then(n.setState({news:n.state.news.filter((function(t){return t.id!==e}))})).catch((function(t){alert("ERROR : "+e)}))},n.state={news:[]},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=0;return c.a.createElement("div",{className:"news"},c.a.createElement("h1",null,"News",c.a.createElement(i.b,{style:{textDecoration:"none"},className:"text-muted",to:this.props.location.pathname+"/create"},"(\uc791\uc131)")),c.a.createElement(u.a,{hover:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"Title"),c.a.createElement("th",null,"Content"))),c.a.createElement("tbody",null,0===this.state.news.length?c.a.createElement("tr",{align:"center"},c.a.createElement("td",{colSpan:6},"No News Available.")):this.state.news.map((function(a){return c.a.createElement("tr",{key:++t},c.a.createElement("td",null,t),c.a.createElement("td",null,a.title),c.a.createElement("td",null,a.content),c.a.createElement("td",null,c.a.createElement(i.b,{to:"/news/edit/"+a.id},c.a.createElement(_.a,null," \uc218\uc815 "))," "," ",c.a.createElement(_.a,{variant:"danger",onClick:function(){e.deleteUser(a.id)}}," \uc0ad\uc81c")))})))))}}]),a}(c.a.Component),f=(a(91),a(55)),h=a.n(f),v=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("audio"),t=!1;document.addEventListener("click",(function(){t||(t=!0,e.loop=!1,e.play())}));var a=document.querySelector(".header__navbar"),n=document.querySelector(".navbar__toggleBtn"),c=document.querySelector(".navbar__menu"),l=document.querySelector(".navbar__icons");console.log(n),n.addEventListener("click",(function(e){console.log(e.target),n.scrollIntoView(),"I"===e.target.tagName&&"BUTTON"===e.target.parentNode.tagName&&(c.classList.toggle("active"),l.classList.toggle("active"),a.classList.toggle("active"))}));for(var r=document.querySelector(".navbar__menu").childNodes,s=0;s<r.length;s++)r[s].addEventListener("click",(function(){c.classList.toggle("active"),l.classList.toggle("active"),a.classList.toggle("active")}));document.querySelector(".navbar__menu").addEventListener("click",(function(e){if(console.log(e.target),"LI"===e.target.tagName&&!e.target.matches(".navbar__menu__sidebar")){var t=e.target.dataset.section;if(null===t)return;console.log(t);var a=document.querySelector(t);if(null===a)return void alert("\ud574\ub2f9 \ud398\uc774\uc9c0\uc5d0\ub294 About Me\uac00 \uc5c6\uc5b4\uc694! Resume \ud398\uc774\uc9c0\ub85c \uac00\uc8fc\uc138\uc694!");a.scrollIntoView({behavior:"smooth",block:"#experience"!==t?"center":"start",inline:"center"})}}));var o=document.querySelector(".navbar__menu__sidebar"),i=document.querySelector("section#sidebar");o.addEventListener("click",(function(){console.log("sideBarBtn clicked!"),i.matches(".show")?(i.classList.remove("show"),i.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})):(i.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),window.setTimeout((function(){i.classList.add("show")}),window.scrollY<=window.innerHeight/2?500:1e3))})),["scroll","click"].forEach((function(e){document.addEventListener(e,(function(){i.matches(".show")&&i.classList.remove("show")}))}));var m=a.getBoundingClientRect().height;document.addEventListener("scroll",(function(){window.scrollY>m/5?a.classList.add("navbar--dark"):a.classList.remove("navbar--dark")}))}},{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("nav",{className:"header__navbar"},c.a.createElement("audio",{src:h.a}),c.a.createElement("div",{className:"navbar__logo"},c.a.createElement("a",{href:"/"},c.a.createElement("i",{className:"fas fa-puzzle-piece"})," BeneBean's Coding")),c.a.createElement("ul",{className:"navbar__menu"},c.a.createElement("li",{className:"navbar__menu__sidebar"},"SideBar"),c.a.createElement("li",{className:"navbar__menu__item","data-section":"#about"},"About Me"),c.a.createElement("li",{className:"navbar__menu__item","data-section":"#skills"},"Skills"),c.a.createElement("li",{className:"navbar__menu__item","data-section":"#experience"},"Experience"),c.a.createElement("li",{className:"navbar__menu__item","data-section":"#activity"},"Activity")),c.a.createElement("ul",{className:"navbar__icons"},c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/posungkim"},c.a.createElement("i",{className:"fab fa-github"}))),c.a.createElement("li",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/posung.kim"},c.a.createElement("i",{className:"fab fa-facebook-square"})))),c.a.createElement("button",{className:"navbar__toggleBtn"},c.a.createElement("i",{className:"fas fa-bars"}))))}}]),a}(c.a.Component),b=(a(92),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=(new Date).getFullYear();return c.a.createElement("footer",null,c.a.createElement("nav",{className:"footer__navbar"},c.a.createElement("span",null,e-1," - ",e," Rights Reserved By BeneBean ")))}}]),a}(c.a.Component)),g=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"FunctionComp"},c.a.createElement("h2",null,"Functions"),c.a.createElement("li",null," ",c.a.createElement(i.b,{to:this.props.location.pathname+"/calculator"}," Calculator \uae30\ub2a5 ")," "),c.a.createElement("li",null," ",c.a.createElement(i.b,{to:this.props.location.pathname+"/game"}," Game \uae30\ub2a5 ")," "),c.a.createElement("li",null," ",c.a.createElement(i.b,{to:this.props.location.pathname+"/youtube"}," YouTube Cloning ")," "))}}]),a}(c.a.Component),C=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"problemsolving"},"This is problemsolving page!")}}]),a}(c.a.Component),N=(a(93),a(17)),k=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setClickListener=function(e){n.onClickFunc=e},n.show=function(e){console.log(n.popUp),n.popUp.classList.remove("hide"),n.popUpMessage.innerHTML=e},n.hide=function(){n.popUp.classList.add("hide")},window.popUpComp=Object(N.a)(n),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.popUp=document.querySelector(".game__popUp"),this.popUpMessage=document.querySelector(".popUp__message"),this.popUpRefreshBtn=document.querySelector(".popUp__refresh"),this.popUpRefreshBtn.addEventListener("click",(function(){e.onClickFunc&&e.onClickFunc(),e.hide()}))}},{key:"render",value:function(){return c.a.createElement("section",{className:"game__popUp hide"},c.a.createElement("button",{className:"popUp__refresh"},c.a.createElement("i",{className:"fas fa-redo-alt"})),c.a.createElement("span",{className:"popUp__message"},"popUp__message"))}}]),a}(c.a.Component),O=a(56),y=a.n(O),w=a(57),D=a.n(w);function M(e,t){return Math.random()*(t-e)+e}var S=Object.freeze({corgi:"corgi",bulldog:"bulldog"}),B=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).initSetting=function(){n.gameField.innerHTML="",n._addIcon(S.corgi,n.props.corgiCount),n._addIcon(S.bulldog,n.props.bulldogCount)},n._addIcon=function(e,t){for(var a=n.fieldRect.width-n.props.sizeOffset,c=n.fieldRect.height-n.props.sizeOffset,l=0;l<t;l++){var r=document.createElement("img"),s=M(0,a),o=M(0,c);r.className=e,r.style.position="absolute",r.style.left="".concat(s,"px"),r.style.top="".concat(o,"px"),r.src=e===S.corgi?y.a:D.a,n.gameField.appendChild(r)}},n.setClickListener=function(e){n.onClickItem=e},n.onClickField=function(e){var t=e.target;if(t.matches(".corgi")){if(n.onClickItem&&n.onClickItem(S.corgi))return;t.remove()}else e.target.matches(".bulldog")&&n.onClickItem&&n.onClickItem(S.bulldog)},window.fieldComp=Object(N.a)(n),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.gameField=document.querySelector(".game__field"),this.fieldRect=this.gameField.getBoundingClientRect(),this.gameField.addEventListener("click",this.onClickField)}},{key:"render",value:function(){return c.a.createElement("section",{className:"game__field"})}}]),a}(c.a.Component),P=a(58),L=a.n(P),j=a(59),T=a.n(j),I=a(60),U=a.n(I),A=a(61),R=a.n(A),x=a(62),q=a.n(x),W=new Audio(L.a),K=new Audio(T.a),z=new Audio(U.a),F=new Audio(R.a),G=new Audio(q.a);function Y(e){e.pause()}function V(e){e.currentTime=0,e.play()}function J(){Y(W)}function H(){V(G)}var X=Object.freeze({win:"win",lose:"lose",quit:"quit"}),$=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).start=function(){V(W),n.isStarted=!0,window.fieldComp.initSetting(),n.initSetting(),n.initStopBtn(),n.initTimerAndScore(),n.runTimer()},n.stop=function(e){n.isStarted=!1,n.stopTimer(),n.hideGameBtn(),J(),n.onGameStop&&n.onGameStop(e);var t=document.querySelector(".fa-stop");void 0!==t&&(t.classList.remove("fa-stop"),t.classList.add("fa-play-circle"))},n.onClickItem=function(e){if(!n.isStarted)return!0;e===S.corgi?(V(K),n.updateScore(++n.score),n.score===n.corgiCount&&n.stop(X.win)):e===S.bulldog&&(H(),n.stop(X.lose))},n.updateScore=function(){n.scorer.innerText="".concat(n.corgiCount-n.score," score")},n.initSetting=function(){n.showGameBtn(),n.score=0,n.scorer.innerHTML="".concat(n.corgiCount," score")},n.initStopBtn=function(){var e=document.querySelector(".fa-play-circle");e.classList.remove("fa-play-circle"),e.classList.add("fa-stop")},n.initTimerAndScore=function(){n.timer.style.visibility="visible",n.scorer.style.visibility="visible"},n.updateTimer=function(e){var t=Math.floor(e/60),a=e%60;n.timer.innerHTML="".concat(t," min ").concat(a," sec")},n.stopTimer=function(){clearInterval(window.curInterval)},n.runTimer=function(){n.remainTime=n.gameSecDuration,n.updateTimer(n.remainTime),window.curInterval=setInterval((function(){return n.remainTime<=0?(clearInterval(window.curInterval),void n.stop(X.lose)):null===document.querySelector(".fa-stop")?(clearInterval(window.curInterval),void J()):void n.updateTimer(--n.remainTime)}),1e3)},n.hideGameBtn=function(){n.startBtn.style.visibility="hidden"},n.showGameBtn=function(){n.startBtn.style.visibility="visible"},window.playComp=Object(N.a)(n),n.gameSecDuration=n.props.gameSecDuration,n.corgiCount=n.props.corgiCount,n.bulldogCount=n.props.bulldogCount,n.isStarted=!1,n.score=0,n.remainTime=void 0,n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.fieldComp.setClickListener(this.onClickItem),this.timer=document.querySelector(".header__timer"),this.scorer=document.querySelector(".header__score"),this.startBtn=document.querySelector(".header__startBtn"),this.startBtn.addEventListener("click",(function(){e.isStarted?e.stop(X.quit):e.start()}))}},{key:"setGameStopListener",value:function(e){this.onGameStop=e}},{key:"render",value:function(){return c.a.createElement("section",{className:"game"},c.a.createElement("section",{className:"game__header"},c.a.createElement("button",{className:"header__startBtn"},c.a.createElement("i",{className:"fas fa-play-circle"})),c.a.createElement("span",{className:"header__timer"},"0min 0sec"),c.a.createElement("span",{className:"header__score"},"0")),c.a.createElement(B,{corgiCount:this.props.corgiCount,bulldogCount:this.props.bulldogCount,sizeOffset:this.props.sizeOffset}))}}]),a}(c.a.Component),Q=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).sizeOffset=100,n.corgiCount=5,n.bulldogCount=5,n.gameSecDuration=5,n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("audio");null!==e&&Y(e),window.playComp.setGameStopListener((function(e){var t;switch(e){case X.quit:t="Play Again?",V(z);break;case X.win:t="Congratulations! \ud83d\ude0a",V(F);break;case X.lose:t="Sorry, Lost! \ud83d\udc7b",H();break;default:throw new Error("unknown error")}window.popUpComp.show(t)})),window.popUpComp.setClickListener((function(){window.playComp.start()}))}},{key:"render",value:function(){return c.a.createElement("section",{id:"flashGame"},c.a.createElement($,{sizeOffset:this.sizeOffset,gameSecDuration:this.gameSecDuration,corgiCount:this.corgiCount,bulldogCount:this.bulldogCount}),c.a.createElement(k,null))}}]),a}(c.a.Component),Z=a(63),ee=a(184),te=a(183),ae=a(64),ne=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).initialState={id:-1,title:"",content:""},n.findNewsById=function(e){p.a.get("http://localhost:8080/rest/news/"+e).then((function(e){null!=e.data&&n.setState({id:e.data.id,title:e.data.title,content:e.data.content})})).catch((function(e){alert(e)}))},n.alertNews=function(e){alert(e+"!  \uc81c\ubaa9 : "+n.state.title+"\n\ub0b4\uc6a9 : "+n.state.content)},n.goBack=function(){n.props.history.push("/news")},n.updateNews=function(e){n.setState(Object(Z.a)({},e.target.name,e.target.value))},n.submitNews=function(e){e.preventDefault();var t={title:n.state.title,content:n.state.content};p.a.post("http://localhost:8080/rest/news/submit/",t).then((function(e){n.alertNews("SAVED"),n.setState(n.initialState),n.goBack()})).catch((function(e){alert("NOT SAVED!")}))},n.editNews=function(e){e.preventDefault();var t={id:n.state.id,title:n.state.title,content:n.state.content};p.a.put("http://localhost:8080/rest/news/edit/"+n.state.id,t).then((function(e){n.alertNews("EDIT"),n.props.history.push("/news")})).catch((function(e){alert(e)}))},n.state=n.initialState,n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;console.log("here is the param : "+e),e&&this.findNewsById(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"NewsCreate"},c.a.createElement(ee.a,null,c.a.createElement(ee.a.Group,{as:te.a,controlId:"formPlaintextTitle"},c.a.createElement(ee.a.Label,{column:!0,sm:"2",className:"ml-2"},"\uc81c\ubaa9"),c.a.createElement(ae.a,{sm:"11"},c.a.createElement(ee.a.Control,{required:!0,type:"text",name:"title",placeholder:"\uc81c\ubaa9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694",value:this.state.title,onChange:this.updateNews}))),c.a.createElement(ee.a.Group,{as:te.a,controlId:"formPlaintextContent"},c.a.createElement(ee.a.Label,{column:!0,sm:"2",className:"ml-2"},"\ub0b4\uc6a9"),c.a.createElement(ae.a,{sm:"11",style:{height:"25rem"}},c.a.createElement(ee.a.Control,{required:!0,style:{height:"100%"},type:"text",name:"content",placeholder:"\ub0b4\uc6a9\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694",as:"textarea",value:this.state.content,onChange:this.updateNews}),c.a.createElement("div",{className:"mt-3",style:{textAlign:"right"}},c.a.createElement(_.a,{onClick:this.goBack,variant:"success",type:"submit"},"\ub4a4\ub85c \uac00\uae30")," ",c.a.createElement(_.a,{onClick:-1===this.state.id?this.submitNews:this.editNews,variant:"primary",type:"submit"},-1===this.state.id?"Save":"Edit"))))))}}]),a}(c.a.Component),ce=a(65),le=a(34),re=a.n(le),se=(a(174),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"JournalComp"},c.a.createElement(re.a,{source:"# React \uc77c\uc9c0 1 - FLEXBOX FROGGY, CSS DINER\n"}),c.a.createElement("br",null),c.a.createElement(re.a,{source:"##### dfdf\n "}),c.a.createElement("div",{className:"code__Area"},c.a.createElement("code",null,"int i = 0 "),c.a.createElement("br",null),c.a.createElement("code",null,"int j = 0 ")))}}]),a}(c.a.Component)),oe=(a(175),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("#arrowUp"),t=document.querySelector("header");document.addEventListener("scroll",(function(){window.scrollY>t.getBoundingClientRect().height?e.classList.add("visible"):e.classList.remove("visible")}));var a=document.querySelector("header");e.addEventListener("click",(function(){console.log(a),window.scrollTo({top:0,left:0,behavior:"smooth"})}));var n=document.querySelector(".experience__categories"),c=document.querySelector(".experience__projects"),l=document.querySelectorAll(".project");n.addEventListener("click",(function(e){var t=e.target.dataset.filter?e.target.dataset.filter:e.target.parentNode.dataset.filter,a="BUTTON"===e.target.nodeName?e.target:e.target.parentNode;void 0!==t&&(c.classList.add("animation-bottom"),setTimeout((function(){l.forEach((function(e){var a=e.dataset.type;"*"===t||t===a?e.classList.remove("invisible"):e.classList.add("invisible")})),c.classList.remove("animation-bottom")}),300),document.querySelector(".category__btn.selected").classList.remove("selected"),a.classList.add("selected"))}));var r=document.querySelector(".items"),s=document.querySelector(".input__btn"),o=document.querySelector(".input__area");function i(){var e=o.value;if(""!==e){var t=function(e){var t=document.createElement("li");return t.setAttribute("class","item"),t.setAttribute("data-id",m),t.innerHTML='\n                <div class="item__content">\n                    <span class="item__name">'.concat(e,'</span>\n                    <button class="item__delete">\n                        <i class="fas fa-trash-alt" data-id=').concat(m,'></i>\n                    </button>\n                </div>\n                <div class="item__split"></div>\n            '),m++,t}(e);r.appendChild(t),t.scrollIntoView(),o.value="",o.focus()}else o.focus()}var m=0;r.addEventListener("click",(function(e){var t=e.target.dataset.id;t&&document.querySelector('.item[data-id="'.concat(t,'"]')).remove()})),s.addEventListener("click",(function(){i()})),o.addEventListener("keypress",(function(e){"Enter"===e.key&&i()}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"ResumeComp"},c.a.createElement("section",{id:"about"},c.a.createElement("div",{className:"blackCover"}),c.a.createElement("div",{className:"left"},c.a.createElement("div",{className:"poster"},c.a.createElement("h1",{className:"posterTitle"},c.a.createElement("strong",null,"\uac1c\ubc1c"),"\uc774 \uc990\uac81\uc2b5\ub2c8\ub2e4!"),c.a.createElement("figure",{className:"images"}))),c.a.createElement("div",{className:"right"},c.a.createElement("h3",{className:"title"},c.a.createElement("strong",null,"Proactive")," ",c.a.createElement("strong",null,"Developer")," "),c.a.createElement("div",{className:"content"},c.a.createElement("p",null,"\ucef4\ud4e8\ud130\ub97c \ud1b5\ud574 \uba38\ub9ac \uc18d\uc758 \ubaa8\ub4e0 \uac83\uc774 \uad6c\ud604\ub420 \uc218 \uc788\ub294 \uc138\uc0c1\uc5d0 \ud070 \ub9e4\ub825\uc744 \ub290\ub07c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),c.a.createElement("p",null,"\uc774\uc5d0 \ub530\ub77c, \uc138\uc0c1\uc5d0 \uc784\ud329\ud2b8\ub97c \uc904 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4 \uad6c\ud604\uc5d0 \ub300\ud55c \ud765\ubbf8\uac00 \ucee4\uc84c\uace0, ",c.a.createElement("br",null),"\ud604\uc7ac \uc990\uac70\uc6b4 \ub9c8\uc74c\uc73c\ub85c \ud615\ud0dc\uc5d0 \uc0c1\uad00\uc5c6\uc774 \ub2e4\uc591\ud55c \uc758\ubbf8\uc640 \uc6a9\ub3c4\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\ub97c \uc0ac\ud68c\uc5d0 \uc81c\uacf5\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."),c.a.createElement("p",null,"\ud0d0\uad6c\ub825\uacfc \ucc3d\uc758\ub825\uc744 \uae30\ubc18\uc73c\ub85c \uc138\uacc4\uc778\ub4e4\uacfc \ud568\uaed8 \ud611\uc5c5\ud558\uc5ec \uc0c1\uc0c1\uc744 \ud604\uc2e4\ub85c \ub9cc\ub4dc\ub294 \uc138\uc0c1,",c.a.createElement("br",null),"\ucef4\ud4e8\ud130\uc640 \uc544\uc774\ub514\uc5b4\ub9cc \uc788\ub2e4\uba74 \uc5b8\uc81c \uc5b4\ub514\uc11c\ub098 \uad6c\ud604\uc744 \uc2dc\uc791\ud560 \uc218 \uc788\ub294 \uc138\uc0c1,",c.a.createElement("br",null),"\ub2a5\ub3d9\uc801\uc778 \uc790\uc138\uc640 \uc5f4\uc815\uc801\uc778 \uc790\uc138\ub97c \ud1b5\ud574 \ud558\ub8e8\ud558\ub8e8 \uc131\uc7a5\ud560 \uc218 \uc788\ub294 \uc138\uc0c1 \ub4f1 ",c.a.createElement("br",null),"\ub2e4\uc74c\uc774 \uae30\ub2e4\ub824\uc9c0\ub294 \uc138\uc0c1\uc744 \ub9cc\ub4e4\uc5b4 \ub098\uac00\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.")))),c.a.createElement("section",{id:"skills",class:"section"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Skills")),c.a.createElement("div",{className:"skillComps"},c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png",alt:"c++ icon",className:"skillComp"}),c.a.createElement("div",{className:"skill__description"},c.a.createElement("span",null,"70%"))),c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",alt:"python icon",className:"skillComp"}),c.a.createElement("div",{className:"skill__description"},c.a.createElement("span",null,"70%"))),c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",alt:"JS icon",className:"skillComp"}),c.a.createElement("div",{className:"skill__description"},c.a.createElement("span",null,"70%"))),c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVSn6huPlarccfZEFY__z79K6s-BrjBKVEWQ&usqp=CAU",alt:"react icon",className:"skillComp"}),c.a.createElement("div",{className:"skill__description"},c.a.createElement("span",null,"70%"))),c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",alt:"node.js icon",className:"skillComp"}),c.a.createElement("div",{className:"skill__description"},c.a.createElement("span",null,"70%"))),c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"https://pngimg.com/uploads/mysql/mysql_PNG23.png",alt:"mysql icon",className:"skillComp"}),c.a.createElement("div",{className:"skill__description"},c.a.createElement("span",null,"70%"))),c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"https://miro.medium.com/max/300/1*UdM3Isk3gfnEOX7r6lWI8A.png",alt:"docker icon",className:"skillComp"}),c.a.createElement("div",{className:"skill__description"},c.a.createElement("span",null,"70%"))),c.a.createElement("div",{className:"skill"},c.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-512/jenkins-5-569553.png",alt:"docker icon",className:"skillComp"}),c.a.createElement("div",{className:"skill__description"},c.a.createElement("span",null,"70%"))))),c.a.createElement("section",{id:"experience",class:"section"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Experience")),c.a.createElement("div",{className:"experience__categories"},c.a.createElement("button",{className:"category__btn selected","data-filter":"*"},"All ",c.a.createElement("span",{className:"category__count"},"4")),c.a.createElement("button",{className:"category__btn","data-filter":"frontend"},"Front-end ",c.a.createElement("span",{className:"category__count"},"1")),c.a.createElement("button",{className:"category__btn","data-filter":"backend"},"Back-end ",c.a.createElement("span",{className:"category__count"},"1")),c.a.createElement("button",{className:"category__btn","data-filter":"mobile"},"Mobile ",c.a.createElement("span",{className:"category__count"},"2"))),c.a.createElement("div",{className:"experience__projects"},c.a.createElement(i.b,{to:"/functions/game",className:"project","data-type":"frontend"},c.a.createElement("div",{className:"project__img"}),c.a.createElement("div",{className:"project__description"},c.a.createElement("h3",null,"Flash Game"),c.a.createElement("span",null,"Practicing JS Programming"))),c.a.createElement(i.b,{to:"/functions/youtube",className:"project","data-type":"mobile"},c.a.createElement("div",{className:"project__img"}),c.a.createElement("div",{className:"project__description"},c.a.createElement("h3",null,"YouTube Mobile"),c.a.createElement("span",null,"Clone Coding with HTML, CSS, JS"))),c.a.createElement(i.b,{href:"/",className:"project","data-type":"backend"},c.a.createElement("div",{className:"project__img"}),c.a.createElement("div",{className:"project__description"},c.a.createElement("h3",null,"Soon to be Open"),c.a.createElement("span",null,"Coming Soon!"))),c.a.createElement(i.b,{href:"/",className:"project","data-type":"mobile"},c.a.createElement("div",{className:"project__img"}),c.a.createElement("div",{className:"project__description"},c.a.createElement("h3",null,"Soon to be Open"),c.a.createElement("span",null,"Coming Soon!"))))),c.a.createElement("section",{id:"activity",className:"section"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Activity")),c.a.createElement("div",{className:"list"},c.a.createElement("ul",{className:"items"})),c.a.createElement("div",{className:"input"},c.a.createElement("input",{type:"text",placeholder:"Activity\ub97c \uae30\uc785\ud574\uc8fc\uc138\uc694",className:"input__area"}),c.a.createElement("button",{className:"input__btn"},"Add Button"))),c.a.createElement("button",{id:"arrowUp"},c.a.createElement("i",{className:"fas fa-arrow-up"})))}}]),a}(c.a.Component)),ie=(a(176),a(66)),me=a.n(ie),ue=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector(".info .metaData .titleAndButton .moreBtn"),t=document.querySelector(".info .metaData .titleAndButton .title");e.addEventListener("click",(function(){e.classList.toggle("clicked"),t.classList.toggle("clamp")}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"YouTubeCloning"},c.a.createElement("section",{className:"header"},c.a.createElement("div",{className:"logos"},c.a.createElement("i",{className:"fab fa-youtube"}),c.a.createElement("span",null," YouTube")),c.a.createElement("div",{className:"icons"},c.a.createElement("i",{className:"fas fa-search"}),c.a.createElement("i",{className:"fas fa-ellipsis-v"}))),c.a.createElement("section",{className:"videoPlayer"},c.a.createElement("video",{"encrypted-media":!0,controls:!0,loop:!0,autoPlay:!0,src:me.a,type:"video/mp4"})),c.a.createElement("section",{className:"infoAndupNext"},c.a.createElement("section",{className:"info"},c.a.createElement("div",{className:"metaData"},c.a.createElement("ul",{className:"hashTags"},c.a.createElement("li",null,"#Free Stock Video"),c.a.createElement("li",null,"#Motion Background"),c.a.createElement("li",null,"#Blue Rays")),c.a.createElement("div",{className:"titleAndButton"},c.a.createElement("span",{className:"title clamp"},"YouTube Clone Coding: \ubaa8\ubc14\uc77c\uc6a9 \uc6f9\uc0ac\uc774\ud2b8 \ub9cc\ub4e4\uae30 | HTML, CSS, JS\ub85c Responsive\ud55c \ubc18\uc751 \uad6c\ud604\ud558\uae30, Flex Box \ubc0f Justify Content \uc5f0\uc2b5\ud558\uae30, Layout \uad6c\uc131 \ud655\uc778 \ubc0f \uc5f0\uc2b5\ud558\uae30"),c.a.createElement("button",{className:"moreBtn"},c.a.createElement("i",{class:"fas fa-caret-down"}))),c.a.createElement("span",{className:"view"},"1M views 1 month ago")),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement("button",null,c.a.createElement("i",{className:"fas fa-thumbs-up active"}),c.a.createElement("span",null,"5K"))),c.a.createElement("li",null,c.a.createElement("button",null,c.a.createElement("i",{className:"fas fa-thumbs-down"}),c.a.createElement("span",null,"0"))),c.a.createElement("li",null,c.a.createElement("button",null,c.a.createElement("i",{className:"fas fa-share"}),c.a.createElement("span",null,"Share"))),c.a.createElement("li",null,c.a.createElement("button",null,c.a.createElement("i",{className:"fas fa-plus"}),c.a.createElement("span",null,"Save"))),c.a.createElement("li",null,c.a.createElement("button",null,c.a.createElement("i",{className:"fab fa-font-awesome-flag"}),c.a.createElement("span",null,"Report")))),c.a.createElement("section",{className:"channel"},c.a.createElement("div",{className:"metaData"},c.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/37537227?s=460&u=202a41ec807e7d974885904913c6c46649020392&v=4",alt:"channelImg"}),c.a.createElement("div",{className:"info"},c.a.createElement("span",{className:"channelName"},"BeneBean's Coding"),c.a.createElement("span",{className:"subscriberNumber"},"100M Subscribers"))),c.a.createElement("button",{className:"subscribe"},"Subscribe"))),c.a.createElement("section",{className:"upNext"},c.a.createElement("span",{className:"title"},"Up next"),c.a.createElement("ul",null,c.a.createElement("li",{className:"item"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png",alt:"react banner"})),c.a.createElement("div",{className:"info"},c.a.createElement("span",{className:"title"},"React 1"),c.a.createElement("span",{className:"name"},"BeneBean's Coding"),c.a.createElement("span",{className:"views"},"10M views")),c.a.createElement("button",{className:"moreBtn"},c.a.createElement("i",{className:"fas fa-ellipsis-v"}))),c.a.createElement("li",{className:"item"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png",alt:"react banner"})),c.a.createElement("div",{className:"info"},c.a.createElement("span",{className:"title"},"React 2"),c.a.createElement("span",{className:"name"},"BeneBean's Coding"),c.a.createElement("span",{className:"views"},"15M views")),c.a.createElement("button",{className:"moreBtn"},c.a.createElement("i",{className:"fas fa-ellipsis-v"}))),c.a.createElement("li",{className:"item"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png",alt:"react banner"})),c.a.createElement("div",{className:"info"},c.a.createElement("span",{className:"title"},"React 3"),c.a.createElement("span",{className:"name"},"BeneBean's Coding"),c.a.createElement("span",{className:"views"},"20M views")),c.a.createElement("button",{className:"moreBtn"},c.a.createElement("i",{className:"fas fa-ellipsis-v"})))))))}}]),a}(c.a.Component),_e=(a(177),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",{className:"router"},c.a.createElement(v,null),c.a.createElement("main",{id:"content"},c.a.createElement("section",{id:"sidebar"}),c.a.createElement(i.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:oe}),c.a.createElement(m.a,{exact:!0,path:"/journals",component:se}),c.a.createElement(m.a,{exact:!0,path:"/news",component:E}),c.a.createElement(m.a,{exact:!0,path:"/news/create",component:ne}),c.a.createElement(m.a,{exact:!0,path:"/news/edit/:id",component:ne}),c.a.createElement(m.a,{exact:!0,path:"/functions",component:g}),c.a.createElement(m.a,{exact:!0,path:"/functions/calculator",component:ce.a}),c.a.createElement(m.a,{exact:!0,path:"/functions/game",component:Q}),c.a.createElement(m.a,{exact:!0,path:"/functions/youtube",component:ue}),c.a.createElement(m.a,{exact:!0,path:"/problems",component:C}))),c.a.createElement(b,null)))}}]),a}(c.a.Component));var de=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(_e,null))},pe=a(67),Ee=a.n(pe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Ee.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,t,a){e.exports=a.p+"static/media/homepageBgMusic.e175412e.mp3"},56:function(e,t,a){e.exports=a.p+"static/media/welshCorgiImg.eb8d645e.png"},57:function(e,t,a){e.exports=a.p+"static/media/bullDogImg.fbba2278.png"},58:function(e,t,a){e.exports=a.p+"static/media/bgSound.4af35b95.mp3"},59:function(e,t,a){e.exports=a.p+"static/media/successSound.cbcd6ccc.mp3"},60:function(e,t,a){e.exports=a.p+"static/media/failSound.853245ad.mp3"},61:function(e,t,a){e.exports=a.p+"static/media/winSound.e0c7c75e.mp3"},62:function(e,t,a){e.exports=a.p+"static/media/lossSound.d280923b.wav"},65:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(182),CalculatorComp=function(_React$Component){Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(CalculatorComp,_React$Component);var _super=Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__.a)(CalculatorComp);function CalculatorComp(props){var _this;return Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalculatorComp),_this=_super.call(this,props),_this.calc=function(e){!0===_this.state.flag?_this.setState({inputBox:""+e,flag:!1}):_this.setState({inputBox:_this.state.inputBox+e})},_this.clearCalc=function(){_this.setState({inputBox:"",flag:!1})},_this.finishCalc=function(){try{_this.setState({inputBox:eval(_this.state.inputBox),flag:!0})}catch(err){alert("\uc5d0\ub7ec \ub0b4\uc6a9 => "+err+"\n\ub2e4\uc2dc \uc801\uc5b4\uc8fc\uc138\uc694"),_this.clearCalc(),_this.props.history.push("/functions/calculator")}},_this.state={inputBox:"",flag:!1},_this}return Object(_Users_posungkim_Desktop_Portfolio_posungkim_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalculatorComp,[{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",null,"Calculator (React Only)"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.a,{responsive:!0,hover:!0,variant:"dark",bordered:!0,style:{textAlign:"center"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",{style:{height:"50px",backgroundColor:"black"}},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{colSpan:"4"},"",this.state.inputBox)),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(9)}},"9"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(8)}},"8"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(7)}},"7"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("*")}},"*")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(6)}},"6"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(5)}},"5"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(4)}},"4"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("+")}},"+")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(3)}},"3"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(2)}},"2"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(1)}},"1"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("-")}},"-")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(0)}},"0"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc(".")}},"."),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.finishCalc()}},"="),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{onClick:function(){e.calc("/")}},"/")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{colSpan:"4",onClick:this.clearCalc},"Clear")))))}}]),CalculatorComp}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=CalculatorComp},66:function(e,t,a){e.exports=a.p+"static/media/youTubeMotion.31b3d6fd.mp4"},68:function(e,t,a){e.exports=a(181)},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.cfd707ab.chunk.js.map