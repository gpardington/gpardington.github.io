(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{16:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),i=s(9),n=s.n(i),r=(s(16),s(2)),l=s(3),o=s(5),j=s(4),d=s(8),h=s(10),b=s.n(h),m=(s(19),function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=this.props.data.description,a=(this.props.data.address.city,this.props.data.social.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.className})})},e.name)})));return Object(c.jsxs)("header",{id:"home",children:[Object(c.jsxs)("nav",{id:"nav-wrap",children:[Object(c.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(c.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(c.jsxs)("ul",{id:"nav",className:"nav",children:[Object(c.jsx)("li",{className:"current",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Work"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(c.jsx)("div",{className:"row banner",children:Object(c.jsxs)("div",{className:"banner-text",children:[Object(c.jsx)("h1",{className:"responsive-headline",children:e}),Object(c.jsxs)("h3",{children:["I'm a Denver based ",Object(c.jsx)("span",{children:t}),". ",s,"."]}),Object(c.jsx)("hr",{}),Object(c.jsx)("ul",{className:"social",children:a})]})}),Object(c.jsx)("p",{className:"scrolldown",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(c.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component)),O=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.className})})},e.name)}));return Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"twelve columns",children:[Object(c.jsx)("ul",{className:"social-links",children:e}),Object(c.jsxs)("ul",{className:"copyright",children:[Object(c.jsx)("li",{children:"\xa9 Copyright 2020 Grant Pardington"}),Object(c.jsxs)("li",{children:["Design by ",Object(c.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(c.jsx)("div",{id:"go-top",children:Object(c.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(c.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(a.Component),u=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,a=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,o=this.props.data.resumedownload;return Object(c.jsx)("section",{id:"about",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"three columns",children:Object(c.jsx)("img",{className:"profile-pic",src:t,alt:"Grant Pardington Profile Pic"})}),Object(c.jsxs)("div",{className:"nine columns main-col",children:[Object(c.jsx)("h2",{children:"About Me"}),Object(c.jsx)("p",{children:s}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"columns contact-details",children:[Object(c.jsx)("h2",{children:"Contact Details"}),Object(c.jsxs)("p",{className:"address",children:[Object(c.jsx)("span",{children:e}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:[a," ",i,", ",n,Object(c.jsx)("br",{})]}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:r}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:l})]})]}),Object(c.jsx)("div",{className:"columns download",children:Object(c.jsx)("p",{children:Object(c.jsxs)("a",{target:"_blank",href:"https://github.com/gpardington/gpardington.github.io/blob/main/public/images/GPardResumeOct2020.pdf",className:"button",children:[Object(c.jsx)("i",{className:"fa fa-download"}),o,"Download Resume"]})})})]})]})]})})}}]),s}(a.Component),p=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.school}),Object(c.jsxs)("p",{className:"info",children:[e.degree," ",Object(c.jsx)("span",{children:"\u2022"}),Object(c.jsx)("em",{className:"date",children:e.graduated})]}),Object(c.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.company}),Object(c.jsxs)("p",{className:"info",children:[e.title,Object(c.jsx)("span",{children:"\u2022"})," ",Object(c.jsx)("em",{className:"date",children:e.years})]}),Object(c.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{width:e.level},className:t}),Object(c.jsx)("em",{children:e.name})]},e.name)}));return Object(c.jsxs)("section",{id:"resume",children:[Object(c.jsxs)("div",{className:"row education",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Education"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:Object(c.jsx)("div",{className:"row item",children:Object(c.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(c.jsxs)("div",{className:"row work",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Work"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(c.jsxs)("div",{className:"row skill",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Skills"})})}),Object(c.jsxs)("div",{className:"nine columns main-col",children:[Object(c.jsx)("p",{children:e}),Object(c.jsx)("div",{className:"bars",children:Object(c.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),s}(a.Component),x=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.address.city,s=this.props.data.address.state,a=this.props.data.address.zip,i=this.props.data.phone,n=(this.props.data.email,this.props.data.contactmessage);return Object(c.jsxs)("section",{id:"contact",children:[Object(c.jsxs)("div",{className:"row section-head",children:[Object(c.jsx)("div",{className:"two columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Get In Touch."})})}),Object(c.jsx)("div",{className:"ten columns",children:Object(c.jsx)("p",{className:"lead",children:n})})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"eight columns",children:[Object(c.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(c.jsxs)("fieldset",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(c.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"submit",children:"Submit"}),Object(c.jsx)("span",{id:"image-loader",children:Object(c.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(c.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(c.jsxs)("div",{id:"message-success",children:[Object(c.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(c.jsx)("br",{})]})]}),Object(c.jsx)("aside",{className:"four columns footer-widgets",children:Object(c.jsxs)("div",{className:"widget widget_contact",children:[Object(c.jsx)("h4",{children:"Address and Phone"}),Object(c.jsxs)("p",{className:"address",children:[e,Object(c.jsx)("br",{}),t,", ",s," ",a,Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:i})]})]})})]})]})}}]),s}(a.Component),f=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("blockquote",{children:[Object(c.jsx)("p",{children:e.text}),Object(c.jsx)("cite",{children:e.user})]})},e.user)}));return Object(c.jsx)("section",{id:"testimonials",children:Object(c.jsx)("div",{className:"text-container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"two columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Client Testimonials"})})}),Object(c.jsx)("div",{className:"ten columns flex-container",children:Object(c.jsx)("ul",{className:"slides",children:e})})]})})})}}]),s}(a.Component),v=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(c.jsx)("div",{className:"columns portfolio-item",children:Object(c.jsx)("div",{className:"item-wrap",children:Object(c.jsxs)("a",{target:"_blank",href:e.url,title:e.title,children:[Object(c.jsx)("img",{alt:e.title,src:t}),Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)("div",{className:"portfolio-item-meta",children:[Object(c.jsx)("h5",{children:e.title}),Object(c.jsx)("p",{children:e.category})]})}),Object(c.jsx)("div",{className:"link-icon",children:Object(c.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(c.jsx)("section",{id:"portfolio",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"twelve columns collapsed",children:[Object(c.jsx)("h1",{children:"Check Out Some of My Best Work."}),Object(c.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),N=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(l.a)(s,[{key:"getResumeData",value:function(){b.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(m,{data:this.state.resumeData.main}),Object(c.jsx)(u,{data:this.state.resumeData.main}),Object(c.jsx)(p,{data:this.state.resumeData.resume}),Object(c.jsx)(v,{data:this.state.resumeData.portfolio}),Object(c.jsx)(f,{data:this.state.resumeData.testimonials}),Object(c.jsx)(x,{data:this.state.resumeData.main}),Object(c.jsx)(O,{data:this.state.resumeData.main})]})}}]),s}(a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n.a.render(Object(c.jsx)(N,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/React-Portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/React-Portfolio","/service-worker.js");g?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.7e1520e3.chunk.js.map