(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",l),f}}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),o=n("vhPU"),i=/"/g,l=function(e,t,n,r){var a=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),l+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("q1tI"),a=n.n(r);n("xfY5"),n("+ZDr"),n("lw3w"),n("emEt").default.enqueue,a.a.createContext({});var o=n("boqk"),i=n.n(o);function l(e){return"undefined"!=typeof window&&n("SR+s")('a[href*="#"]'),a.a.createElement("div",{className:"nav"},a.a.createElement("h2",null,"Chelsea E."),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return i()("#top")}},"Back To Top")),a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return i()("#about")}},"About")),a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return i()("#portfolio")}},"Portfolio")),a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return i()("#stack")}},"Stack")),a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return i()("#career")}},"Career")),a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return i()("#contact")}},"Contact"))))}n("t+Ps");var c=n("qhky");function s(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement(c.a,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"Chelsea E."),a.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"}),a.a.createElement("script",{src:"https://kit.fontawesome.com/da6a700eef.js",crossorigin:"anonymous"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap",rel:"stylesheet"})),a.a.createElement("div",{id:"top"}),a.a.createElement(l,null),a.a.createElement("div",null,t))}function u(e){return a.a.createElement("div",{className:"header  animate__animated animate__slideInDown"},a.a.createElement("img",{className:"header-img",alt:"picture of chelsea",src:"https://res.cloudinary.com/dwbuqa4dx/image/upload/v1593677535/IMG_4555-5_rczbke.jpg"}),a.a.createElement("div",{className:"header-left"},a.a.createElement("h1",null,"Chelsea Ee"),a.a.createElement("p",{className:"title"},"Software Engineer, ex-television producer")))}function f(){return a.a.createElement(s,null,a.a.createElement(u,null),a.a.createElement("div",{className:"section",id:"about"},a.a.createElement("h1",null,"Who am I?"),a.a.createElement("p",null,a.a.createElement("span",{className:"text-lavender"},"Full stack developer")," with 2+ years experience in television production. The industry sparked a longing to create tools that simplify manual processes, freeing up time to think about the things that matter."),a.a.createElement("p",null," As a television producer, the ",a.a.createElement("span",{className:"text-lavender"},"glue")," of large collaborative teams, I have honed my skills in problem solving, time management and communication."),a.a.createElement("p",null,"The fast-paced nature of my role has also trained me to ",a.a.createElement("span",{className:"text-lavender"},"work well under pressure"),", and respond to unexpected changes or expectations from both clients and stakeholders.")),a.a.createElement("div",{className:"section",id:"portfolio"},a.a.createElement("h1",null,"Portfolio"),a.a.createElement("div",{className:"showcase"},a.a.createElement("img",{alt:"lifelines portfolio screenshot",src:"https://res.cloudinary.com/dwbuqa4dx/image/upload/v1593760885/Screenshot_2020-07-02_at_6.24.59_PM_qevypc.png"}),a.a.createElement("h3",null,"Lifelines"),a.a.createElement("div",{className:"showcase-stack"},a.a.createElement("ul",{className:"stack"},a.a.createElement("li",null,"JavaScript"),a.a.createElement("li",null,"React.js + Redux"),a.a.createElement("li",null,"Ruby on Rails"),a.a.createElement("li",null,"PostgreSQL"),a.a.createElement("li",null,"RESTful APIs"),a.a.createElement("li",null,"Bootstrap"))),a.a.createElement("p",null,"Inspired by a Facebook post about a dog passing away before a blood donor could be found, Lifelines was built as a platform for owners and vets to seek pet blood donors and maximise the reach of appeals, with email/Telegram (WIP) notifications and in-app chat. React front-end with Rails/PostgreSQL back-end."),a.a.createElement("p",null,a.a.createElement("a",{href:"https://lifelines.herokuapp.com/"},"Demo")," | ",a.a.createElement("a",{href:"https://github.com/chelsejw/lifelines"},"Github Repo"))),a.a.createElement("hr",null),a.a.createElement("div",{className:"showcase"},a.a.createElement("img",{alt:"javascript uno portfolio screenshot",src:"https://res.cloudinary.com/dwbuqa4dx/image/upload/v1593761023/Screenshot_2020-07-03_at_3.23.29_PM_je0hxe.png"}),a.a.createElement("h3",null,"Javascript Uno"),a.a.createElement("div",null,a.a.createElement("ul",{className:"stack"},a.a.createElement("li",null,"JavaScript"),a.a.createElement("li",null,"CSS / HTML"))),a.a.createElement("p",null,"A replica of Uno written in pure JavaScript, CSS and HTML. Cards rendered with CSS."),a.a.createElement("p",null,a.a.createElement("a",{href:"https://chelsejw.github.io/javascript-uno/"},"Demo")," | ",a.a.createElement("a",{href:"https://github.com/chelsejw/javascript-uno"},"Github Repo"))),a.a.createElement("hr",null),a.a.createElement("div",{className:"showcase"},a.a.createElement("img",{alt:"tattoo me portfolio screenshot",src:"https://res.cloudinary.com/dwbuqa4dx/image/upload/v1593761938/Screenshot_2020-07-03_at_3.38.39_PM_cqbk3s.png"}),a.a.createElement("h3",null,"tattoo.me"),a.a.createElement("div",null,a.a.createElement("ul",{className:"stack"},a.a.createElement("li",null,"JavaScript"),a.a.createElement("li",null,"Node.js"),a.a.createElement("li",null,"Express.js"),a.a.createElement("li",null,"Bootstrap"),a.a.createElement("li",null,"React.js"),a.a.createElement("li",null,"PostgreSQL"),a.a.createElement("li",null,"RESTful APIs"))),a.a.createElement("p",null,"A database for tattoo enthusiasts to seek tattoo artists by country and style, inspired by Instagram’s single hashtag search limit, preventing users from searching for a #finelinetattoo artist in #Singapore. React front-end, Node/Express/PostgreSQL back-end. "),a.a.createElement("p",null,a.a.createElement("a",{href:"https://stormy-chamber-08015.herokuapp.com/"},"Demo")," | ",a.a.createElement("a",{href:"https://github.com/chelsejw/tattoo-me"},"Github Repo")))),a.a.createElement("div",{className:"section",id:"stack"},a.a.createElement("h1",null,"Tech Stack"),a.a.createElement("ul",{className:"stack"},a.a.createElement("li",null,"Javascript"),a.a.createElement("li",null,"CSS / HTML"),a.a.createElement("li",null,"Bootstrap"),a.a.createElement("li",null,"React.js + Redux"),a.a.createElement("li",null,"Ruby on Rails"),a.a.createElement("li",null,"RESTful APIs"),a.a.createElement("li",null,"Express.js"),a.a.createElement("li",null,"Node.js"),a.a.createElement("li",null,"PostgreSQL"))),a.a.createElement("div",{className:"section",id:"career"},a.a.createElement("h1",null,"Career History"),a.a.createElement("div",{className:"job"},a.a.createElement("span",{className:"career-title"},"Assistant Producer | ",a.a.createElement("span",{className:"text-lavender"},"MTV & Comedy Central")),a.a.createElement("span",{className:"career-sub"},"Jan 2019 - Nov 2019"),a.a.createElement("ul",null,a.a.createElement("li",null,"Implemented a Google Sheets tracking system to help monitor milestones and schedules at a glance, improving workflow"),a.a.createElement("li",null,"Facilitated communications between all stakeholders, shortening project delivery times"),a.a.createElement("li",null,"Drafted delivery schedules and timelines, ensuring that project expectations across teams were met"))),a.a.createElement("hr",null),a.a.createElement("div",{className:"job"},a.a.createElement("span",{className:"career-title"},"Assistant Producer | ",a.a.createElement("span",{className:"text-lavender"},"Long Story Short")),a.a.createElement("span",{className:"career-sub"},"Jun 2018 - Sep 2018"),a.a.createElement("ul",null,a.a.createElement("li",null,"Planned and executed a week-long shoot in Japan for a halal food travel show"),a.a.createElement("li",null,"Wrote a base script for the head writer, including extensive fact-checking and research on requested topics"),a.a.createElement("li",null,"Drafted budgets, schedules and travel plans"))),a.a.createElement("hr",null),a.a.createElement("div",{className:"job"},a.a.createElement("span",{className:"career-title"},"Assistant Producer/Intern | ",a.a.createElement("span",{className:"text-lavender"},"IFA Media")),a.a.createElement("span",{className:"career-sub"},"Intern: Sep 2015 - Feb 2016"),a.a.createElement("span",{className:"career-sub"},"Full-time: Feb 2016 - June 2016"),a.a.createElement("ul",null,a.a.createElement("li",null,"Worked on shows for E! Entertainment, Channel 5 and National Geographic"),a.a.createElement("li",null,"Reached out to and secured majority of sponsors for shoots, saving on production costs"),a.a.createElement("li",null,"Searched online databases to identify academic sources for documentary material, passing rigorous fact-checking by clients")))),a.a.createElement("div",{className:"section",id:"contact"},a.a.createElement("h1",null,"Contact Me"),a.a.createElement("div",null,a.a.createElement("i",{className:"icon fas fa-phone"}),"(65) 9231 4672",a.a.createElement("br",null),a.a.createElement("i",{class:"fab icon fa-whatsapp"}),a.a.createElement("a",{href:"https://wa.me/6592314672"},"WhatsApp"),a.a.createElement("br",null),a.a.createElement("i",{className:"icon fas fa-envelope"}),"chelsejw@gmail.com",a.a.createElement("br",null),a.a.createElement("i",{class:"fab fa-github icon"}),a.a.createElement("a",{href:"https://github.com/chelsejw"},"chelsejw"),a.a.createElement("br",null),a.a.createElement("i",{class:"icon fab fa-linkedin"}),a.a.createElement("a",{href:"https://linkedin.com/in/chelsea-ee"},"chelsea-ee"))))}},"SR+s":function(e,t,n){(function(r){var a,o;n("hEkN"),n("a1Th"),n("h7Nl"),n("Btvt"),n("8+KV"),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),r=this;do{for(t=n.length;0<=--t&&n.item(t)!==r;);}while(t<0&&(r=r.parentElement));return r}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),a=Math.max(0,16-(r-e)),o=window.setTimeout((function(){t(r+a)}),a);return e=r+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),o=void 0!==r?r:"undefined"!=typeof window?window:this,void 0===(a=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),r=n.length,a=-1,o="",i=n.charCodeAt(0);++a<r;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=1<=t&&t<=31||127==t||0===a&&48<=t&&t<=57||1===a&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+o},a=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},o=function(t,n,r){0===t&&document.body.focus(),r||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},i=function(t,n,r,a){if(n.emitEvents&&"function"==typeof e.CustomEvent){var o=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:a}});document.dispatchEvent(o)}};return function(l,c){var s,u,f,m,d={cancelScroll:function(e){cancelAnimationFrame(m),m=null,e||i("scrollCancel",s)},animateScroll:function(r,l,c){d.cancelScroll();var u=n(s||t,c||{}),p="[object Number]"===Object.prototype.toString.call(r),h=p||!r.tagName?null:r;if(p||h){var E=e.pageYOffset;u.header&&!f&&(f=document.querySelector(u.header));var y,v,b,g,w,S,T,A,C=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(f),O=p?r:function(t,n,r,o){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-r,0),o&&(i=Math.min(i,a()-e.innerHeight)),i}(h,C,parseInt("function"==typeof u.offset?u.offset(r,l):u.offset,10),u.clip),N=O-E,k=a(),I=0,j=(y=N,b=(v=u).speedAsDuration?v.speed:Math.abs(y/1e3*v.speed),v.durationMax&&b>v.durationMax?v.durationMax:v.durationMin&&b<v.durationMin?v.durationMin:parseInt(b,10));0===e.pageYOffset&&e.scrollTo(0,0),T=r,A=u,p||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:T.id},document.title,T===document.documentElement?"#top":"#"+T.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?o(r,Math.floor(O),!1):(i("scrollStart",u,r,l),d.cancelScroll(!0),e.requestAnimationFrame((function t(n){var a,c,s;g||(g=n),I+=n-g,S=E+N*(c=w=1<(w=0===j?0:I/j)?1:w,"easeInQuad"===(a=u).easing&&(s=c*c),"easeOutQuad"===a.easing&&(s=c*(2-c)),"easeInOutQuad"===a.easing&&(s=c<.5?2*c*c:(4-2*c)*c-1),"easeInCubic"===a.easing&&(s=c*c*c),"easeOutCubic"===a.easing&&(s=--c*c*c+1),"easeInOutCubic"===a.easing&&(s=c<.5?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1),"easeInQuart"===a.easing&&(s=c*c*c*c),"easeOutQuart"===a.easing&&(s=1- --c*c*c*c),"easeInOutQuart"===a.easing&&(s=c<.5?8*c*c*c*c:1-8*--c*c*c*c),"easeInQuint"===a.easing&&(s=c*c*c*c*c),"easeOutQuint"===a.easing&&(s=1+--c*c*c*c*c),"easeInOutQuint"===a.easing&&(s=c<.5?16*c*c*c*c*c:1+16*--c*c*c*c*c),a.customEasing&&(s=a.customEasing(c)),s||c),e.scrollTo(0,Math.floor(S)),function(t,n){var a=e.pageYOffset;if(t==n||a==n||(E<n&&e.innerHeight+a)>=k)return d.cancelScroll(!0),o(r,n,p),i("scrollStop",u,r,l),!(m=g=null)}(S,O)||(m=e.requestAnimationFrame(t),g=n)})))}}},p=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(u=t.target.closest(l))&&"a"===u.tagName.toLowerCase()&&!t.target.closest(s.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var n,a;try{n=r(decodeURIComponent(u.hash))}catch(t){n=r(u.hash)}if("#"===n){if(!s.topOnEmptyHash)return;a=document.documentElement}else a=document.querySelector(n);(a=a||"#top"!==n?a:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(s),d.animateScroll(a,u))}},h=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||d.animateScroll(t,null,{updateURL:!1})}};return d.destroy=function(){s&&(document.removeEventListener("click",p,!1),e.removeEventListener("popstate",h,!1),d.cancelScroll(),m=f=u=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";d.destroy(),s=n(t,c||{}),f=s.header?document.querySelector(s.header):null,document.addEventListener("click",p,!1),s.updateURL&&s.popstate&&e.addEventListener("popstate",h,!1)}(),d}}(o)}.apply(t,[]))||(e.exports=a)}).call(this,n("yLpj"))},bmMU:function(e,t,n){n("SRfc"),n("RW0V"),n("a1Th"),n("h7Nl"),n("OEbY"),n("Oyvg"),n("LK8F"),n("T39b"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("9AAn");var r="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var l,c,s,u;if(Array.isArray(t)){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!n.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],n.get(c.value[0])))return!1;return!0}if(o&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!n.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(t[c]!==n[c])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((l=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(n,s[c]))return!1;if(r&&t instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],n[s[c]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},boqk:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=function(e){var t=document.querySelector(e);return!!t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),!0)};t.default=r},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},hEkN:function(e,t,n){"use strict";n("OGtf")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,l=n("17x9"),c=n.n(l),s=n("8+s/"),u=n.n(s),f=n("bmMU"),m=n.n(f),d=n("q1tI"),p=n.n(d),h=n("MgzW"),E=n.n(h),y="bodyAttributes",v="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),S="cssText",T="href",A="http-equiv",C="innerHTML",O="itemprop",N="name",k="property",I="rel",j="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",R="encodeSpecialCharacters",q="onChangeClientState",F="titleTemplate",_=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),H=[g.NOSCRIPT,g.SCRIPT,g.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Z(e,g.TITLE),n=Z(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,L);return t||r||void 0},Q=function(e){return Z(e,q)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},z=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],c=l.toLowerCase();-1===t.indexOf(c)||n===I&&"canonical"===e[n].toLowerCase()||c===I&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==C&&l!==S&&l!==O||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var l=o[i],c=E()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;ce(g.BODY,r),ce(g.HTML,a),le(f,m);var d={baseTag:se(g.BASE,n),linkTags:se(g.LINK,o),metaTags:se(g.META,i),noscriptTags:se(g.NOSCRIPT,l),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,u)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,p,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(g.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===S)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[p.a.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===S){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===S)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(g.BASE,t,r),bodyAttributes:me(y,n,r),htmlAttributes:me(v,a,r),link:me(g.LINK,o,r),meta:me(g.META,i,r),noscript:me(g.NOSCRIPT,l,r),script:me(g.SCRIPT,c,r),style:me(g.STYLE,s,r),title:me(g.TITLE,{title:f,titleAttributes:m},r)}},pe=u()((function(e){return{baseTag:z([T,x],e),bodyAttributes:W(y,e),defer:Z(e,M),encode:Z(e,R),htmlAttributes:W(v,e),linkTags:X(g.LINK,[I,T],e),metaTags:X(g.META,[N,w,A,k,O],e),noscriptTags:X(g.NOSCRIPT,[C],e),onChangeClientState:Q(e),scriptTags:X(g.SCRIPT,[j,C],e),styleTags:X(g.STYLE,[S],e),title:G(e),titleAttributes:W(b,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=pe,i=o=function(e){function t(){return U(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return J({},a,((t={})[r.type]=i,t.titleAttributes=J({},o),t));case g.BODY:return J({},a,{bodyAttributes:J({},o)});case g.HTML:return J({},a,{htmlAttributes:J({},o)})}return J({},a,((n={})[r.type]=J({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(K(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.a.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},qncB:function(e,t,n){var r=n("XKFU"),a=n("vhPU"),o=n("eeVq"),i=n("/e88"),l="["+i+"]",c=RegExp("^"+l+l+"*"),s=RegExp(l+l+"*$"),u=function(e,t,n){var a={},l=o((function(){return!!i[e]()||"​"!="​"[e]()})),c=a[e]=l?t(f):i[e];n&&(a[n]=c),r(r.P+r.F*l,"String",a)},f=u.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(s,"")),e};e.exports=u},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),a=n.n(r),o=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},"t+Ps":function(e,t,n){},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),o=n("LZWt"),i=n("Xbzi"),l=n("apmT"),c=n("eeVq"),s=n("kJMx").f,u=n("EemH").f,f=n("hswa").f,m=n("qncB").trim,d=r.Number,p=d,h=d.prototype,E="Number"==o(n("Kuth")(h)),y="trim"in String.prototype,v=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=y?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,c=t.slice(2),s=0,u=c.length;s<u;s++)if((i=c.charCodeAt(s))<48||i>a)return NaN;return parseInt(c,r)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(E?c((function(){h.valueOf.call(n)})):"Number"!=o(n))?i(new p(v(t)),n,d):v(t)};for(var b,g=n("nh4g")?s(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;g.length>w;w++)a(p,b=g[w])&&!a(d,b)&&f(d,b,u(p,b));d.prototype=h,h.constructor=d,n("KroJ")(r,"Number",d)}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-84aa40bc815bbe379dd8.js.map