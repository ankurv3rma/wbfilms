webpackJsonp([58051322354175],{308:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(1),i=l(s),o=a(9),u=(l(o),a(32)),m=l(u),d=a(72),f=l(d),E=a(73),p=l(E),v=a(99),y=l(v),g=a(56),h=l(g),N=function(e){function t(){var a,l,c;n(this,t);for(var s=arguments.length,i=Array(s),o=0;o<s;o++)i[o]=arguments[o];return a=l=r(this,e.call.apply(e,[this].concat(i))),l.scrollPage=function(){var e=window.innerHeight;window.scrollBy({top:e,left:0,behavior:"smooth"})},c=a,r(l,c)}return c(t,e),t.prototype.render=function(){var e=p.default.chuskit;return i.default.createElement("div",{className:"home"},i.default.createElement("div",{id:"cover-section"},i.default.createElement("img",{className:"media",src:e.coverImage,alt:"cover"}),i.default.createElement("div",{className:"cover-text"},i.default.createElement("h2",null,e.title),i.default.createElement("div",{className:"details"},e.language," | ",e.runtime," mins")),i.default.createElement("div",{className:"learn-more-container",onClick:this.scrollPage},i.default.createElement("p",{className:"learn-more-text"},"See more"),i.default.createElement("img",{src:h.default,className:"learn-more-icon"}))),i.default.createElement(m.default,{title:"DIRECTOR"},i.default.createElement("div",{className:"director-section"},i.default.createElement("div",{className:"director-text"},i.default.createElement("h5",null,i.default.createElement("strong",null,e.director.name," "),e.director.text.split("\n").map(function(e,t){return i.default.createElement("span",{key:t},e,i.default.createElement("br",null))}))),i.default.createElement("div",{className:"director-image"},i.default.createElement("img",{src:e.director.image,alt:e.director.name})))),i.default.createElement(m.default,{title:"SYNOPSIS"},i.default.createElement("div",{className:"synopsis-section"},i.default.createElement("div",{className:"synopsis-text"},i.default.createElement("h5",null,e.synopsis.text),e.facebook&&i.default.createElement("a",{className:"synopsis-link",href:e.facebook,target:"_blank"},i.default.createElement("img",{src:y.default,alt:"link"}),i.default.createElement("p",null,"FACEBOOK")),e.website&&i.default.createElement("a",{className:"synopsis-link",href:e.website,target:"_blank"},i.default.createElement("img",{src:y.default,alt:"link"}),i.default.createElement("p",null,"WEBSITE"))),i.default.createElement("div",{className:"synopsis-image"},i.default.createElement("img",{src:e.synopsis.image,alt:"Synopsis"})))),e.cast&&i.default.createElement(m.default,{title:"CAST"},i.default.createElement("div",{className:"cast-container"},i.default.createElement("div",{className:"cast-list"},e.cast.map(function(e,t){return i.default.createElement("div",{key:t,className:"cast"},i.default.createElement("img",{src:e.image,alt:e.name}),i.default.createElement("h6",null,e.name))}),i.default.createElement("div",{className:"cast"})))),e.gallery&&i.default.createElement("div",{className:"photo-container"},i.default.createElement(f.default,{tiles:e.gallery,poster:e.poster})))},t}(i.default.PureComponent);t.default=N,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-film-chuskit-js-6e4adc1a67a365b66dd5.js.map