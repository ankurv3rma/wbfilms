webpackJsonp([0x7d68cd6e0978],{311:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(1),i=l(s),u=a(9),d=(l(u),a(24)),o=l(d),m=a(28),f=l(m),E=a(74),p=l(E),v=a(75),g=l(v),y=a(101),N=l(y),h=a(57),b=l(h),k=a(56),w=l(k),S=function(e){function t(){var a,l,c;r(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return a=l=n(this,e.call.apply(e,[this].concat(i))),l.scrollPage=function(){var e=window.innerHeight;window.scrollBy({top:e,left:0,behavior:"smooth"})},l.createMarkup=function(e){return{__html:e}},c=a,n(l,c)}return c(t,e),t.prototype.render=function(){var e=g.default.zollywood;return i.default.createElement("div",null,i.default.createElement(o.default,null),i.default.createElement("div",{className:"home"},i.default.createElement("div",{id:"cover-section"},i.default.createElement("img",{className:"media",src:e.coverImage,alt:"cover"}),i.default.createElement("div",{className:"cover-text"},i.default.createElement("h2",null,e.title),i.default.createElement("div",{className:"status"},e.status),i.default.createElement("div",{className:"details"},e.runtime&&i.default.createElement("span",null,e.runtime," minutes | "),e.language," | ",e.category)),i.default.createElement("div",{className:"learn-more-container",onClick:this.scrollPage},i.default.createElement("p",{className:"learn-more-text"},"See more"),i.default.createElement("img",{src:b.default,className:"learn-more-icon"}))),i.default.createElement(f.default,{title:"DIRECTOR"},i.default.createElement("div",{className:"director-section"},i.default.createElement("div",{className:"director-text"},i.default.createElement("h5",{dangerouslySetInnerHTML:this.createMarkup(e.director.text)})),i.default.createElement("div",{className:"director-image"},i.default.createElement("img",{src:e.director.image,alt:e.director.name})))),e.producer&&i.default.createElement(f.default,{title:e.producer.title},i.default.createElement("div",{className:"director-section"},i.default.createElement("div",{className:"director-text"},i.default.createElement("h5",{dangerouslySetInnerHTML:this.createMarkup(e.producer.text)})),i.default.createElement("div",{className:"director-image"},i.default.createElement("img",{src:e.producer.image,alt:e.producer.name})))),i.default.createElement(f.default,{title:"SYNOPSIS"},i.default.createElement("div",{className:"synopsis-section"},i.default.createElement("div",{className:"synopsis-text"},i.default.createElement("h5",{dangerouslySetInnerHTML:this.createMarkup(e.synopsis.text)}),e.facebook&&i.default.createElement("a",{className:"synopsis-link",href:e.facebook,target:"_blank"},i.default.createElement("img",{src:N.default,alt:"link"}),i.default.createElement("p",null,"FACEBOOK")),e.website&&i.default.createElement("a",{className:"synopsis-link",href:e.website,target:"_blank"},i.default.createElement("img",{src:N.default,alt:"link"}),i.default.createElement("p",null,"WEBSITE"))),e.festivals&&i.default.createElement("div",{className:"synopsis-image"},e.festivals.map(function(e,t){return i.default.createElement("img",{key:t,src:e,alt:"Synopsis"})})))),e.cast?i.default.createElement(f.default,{title:"CAST"},i.default.createElement("div",{className:"cast-container"},i.default.createElement("div",{className:"cast-list"},e.cast.map(function(e,t){return i.default.createElement("div",{key:t,className:"cast"},i.default.createElement("img",{src:e.image,alt:e.name}),i.default.createElement("div",{className:"cast-gradient"}),i.default.createElement("h6",null,e.name))}),i.default.createElement("div",{className:"cast"})))):i.default.createElement(f.default,{title:"CAST"},i.default.createElement("div",{className:"cast-container"},i.default.createElement("div",{className:"cast-list"},i.default.createElement("div",{className:"cast no-radius"},i.default.createElement("img",{src:w.default,alt:"Coming Soon"})),i.default.createElement("div",{className:"cast"})))),e.gallery&&i.default.createElement("div",{className:"photo-container"},i.default.createElement(p.default,{tiles:e.gallery,poster:e.poster}))))},t}(i.default.PureComponent);t.default=S,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-film-zollywood-js-015b8052cdb261fba343.js.map