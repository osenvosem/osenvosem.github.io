/*! For license information please see component---src-templates-category-template-tsx-8360962f5c2c9fbb3a7d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1xLx":function(e,t,a){e.exports={feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===r)for(var o in n)a.call(n,o)&&n[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},WKca:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),r=a("UbMB"),o=a.n(r),l=a("Wbzz"),m=a("YZd8"),d=a("U4DU"),s=a.n(d),_=o.a.bind(s.a),c=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,r=e.hasPrevPage,o=_({"pagination__prev-link":!0,"pagination__prev-link--disable":!r}),d=_({"pagination__next-link":!0,"pagination__next-link--disable":!n});return i.a.createElement("div",{className:s.a.pagination},i.a.createElement("div",{className:s.a.pagination__prev},i.a.createElement(l.Link,{rel:"prev",to:r?t:"/",className:o},m.b.PREV_PAGE)),i.a.createElement("div",{className:s.a.pagination__next},i.a.createElement(l.Link,{rel:"next",to:n?a:"/",className:d},m.b.NEXT_PAGE)))}},"i+MQ":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),o=a("1xLx"),l=a.n(o),m=function(e){var t=e.edges;return i.a.createElement("div",{className:l.a.feed},t.map((function(e){return i.a.createElement("div",{className:l.a.feed__item,key:e.node.fields.slug},i.a.createElement("div",{className:l.a["feed__item-meta"]},i.a.createElement("time",{className:l.a["feed__item-meta-time"],dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),i.a.createElement("span",{className:l.a["feed__item-meta-divider"]}),i.a.createElement("span",{className:l.a["feed__item-meta-category"]},i.a.createElement(r.Link,{to:e.node.fields.categorySlug,className:l.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),i.a.createElement("h2",{className:l.a["feed__item-title"]},i.a.createElement(r.Link,{className:l.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),i.a.createElement("p",{className:l.a["feed__item-description"]},e.node.frontmatter.description),i.a.createElement(r.Link,{className:l.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))})))}},iVBU:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("VXBa"),o=a("BN90"),l=a("i+MQ"),m=a("Nlcv"),d=a("WKca"),s=a("09jD");t.default=function(e){var t=e.data,a=e.pageContext,n=Object(s.b)(),_=n.title,c=n.subtitle,g=a.category,p=a.currentPage,f=a.prevPagePath,u=a.nextPagePath,v=a.hasPrevPage,P=a.hasNextPage,k=t.allMarkdownRemark.edges,h=p>0?g+" - Page "+p+" - "+_:g+" - "+_;return i.a.createElement(r.a,{title:h,description:c},i.a.createElement(o.a,null),i.a.createElement(m.a,{title:g},i.a.createElement(l.a,{edges:k}),i.a.createElement(d.a,{prevPagePath:f,nextPagePath:u,hasPrevPage:v,hasNextPage:P})))}}}]);
//# sourceMappingURL=component---src-templates-category-template-tsx-8360962f5c2c9fbb3a7d.js.map