webpackJsonp([0x5b6113b5ef72],{308:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(1),i=l(s),u=a(9),m=(l(u),a(27)),d=l(m),o=a(73),f=l(o),E=a(74),p=l(E),v=a(100),g=l(v),N=a(57),y=l(N),h=a(56),b=l(h),k=function(e){function t(){var a,l,c;r(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return a=l=n(this,e.call.apply(e,[this].concat(i))),l.scrollPage=function(){var e=window.innerHeight;window.scrollBy({top:e,left:0,behavior:"smooth"})},c=a,n(l,c)}return c(t,e),t.prototype.render=function(){var e=p.default.chippa;return i.default.createElement("div",{className:"home"},i.default.createElement("div",{id:"cover-section"},i.default.createElement("img",{className:"media",src:e.coverImage,alt:"cover"}),i.default.createElement("div",{className:"cover-text"},i.default.createElement("h2",null,e.title),i.default.createElement("div",{className:"status"},e.status),i.default.createElement("div",{className:"details"},e.runtime&&i.default.createElement("span",null,e.runtime," minutes | "),e.language," | ",e.category)),i.default.createElement("div",{className:"learn-more-container",onClick:this.scrollPage},i.default.createElement("p",{className:"learn-more-text"},"See more"),i.default.createElement("img",{src:y.default,className:"learn-more-icon"}))),i.default.createElement(d.default,{title:"DIRECTOR"},i.default.createElement("div",{className:"director-section"},i.default.createElement("div",{className:"director-text"},i.default.createElement("h5",null,i.default.createElement("strong",null,e.director.name," "),e.director.text.split("\n").map(function(e,t){return i.default.createElement("span",{key:t},e,i.default.createElement("br",null))}))),i.default.createElement("div",{className:"director-image"},i.default.createElement("img",{src:e.director.image,alt:e.director.name})))),e.producer&&i.default.createElement(d.default,{title:e.producer.title},i.default.createElement("div",{className:"director-section"},i.default.createElement("div",{className:"director-text"},i.default.createElement("h5",null,i.default.createElement("strong",null,e.producer.name," "),e.producer.text.split("\n").map(function(e,t){return i.default.createElement("span",{key:t},e,i.default.createElement("br",null))}))),i.default.createElement("div",{className:"director-image"},i.default.createElement("img",{src:e.producer.image,alt:e.producer.name})))),i.default.createElement(d.default,{title:"SYNOPSIS"},i.default.createElement("div",{className:"synopsis-section"},i.default.createElement("div",{className:"synopsis-text"},i.default.createElement("h5",null,e.synopsis.text),e.facebook&&i.default.createElement("a",{className:"synopsis-link",href:e.facebook,target:"_blank"},i.default.createElement("img",{src:g.default,alt:"link"}),i.default.createElement("p",null,"FACEBOOK")),e.website&&i.default.createElement("a",{className:"synopsis-link",href:e.website,target:"_blank"},i.default.createElement("img",{src:g.default,alt:"link"}),i.default.createElement("p",null,"WEBSITE"))),e.festivals&&i.default.createElement("div",{className:"synopsis-image"},e.festivals.map(function(e,t){return i.default.createElement("img",{key:t,src:e,alt:"Synopsis"})})))),e.cast?i.default.createElement(d.default,{title:"CAST"},i.default.createElement("div",{className:"cast-container"},i.default.createElement("div",{className:"cast-list"},e.cast.map(function(e,t){return i.default.createElement("div",{key:t,className:"cast"},i.default.createElement("img",{src:e.image,alt:e.name}),i.default.createElement("div",{className:"cast-gradient"}),i.default.createElement("h6",null,e.name))}),i.default.createElement("div",{className:"cast"})))):i.default.createElement(d.default,{title:"CAST"},i.default.createElement("div",{className:"cast-container"},i.default.createElement("div",{className:"cast-list"},i.default.createElement("div",{className:"cast no-radius"},i.default.createElement("img",{src:b.default,alt:"Coming Soon"})),i.default.createElement("div",{className:"cast"})))),e.gallery&&i.default.createElement("div",{className:"photo-container"},i.default.createElement(f.default,{tiles:e.gallery,poster:e.poster})))},t}(i.default.PureComponent);t.default=k,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-film-chippa-js-0c323a426de48b48f589.js.map