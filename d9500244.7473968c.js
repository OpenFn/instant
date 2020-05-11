(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),c=(n(0),n(160)),o=n(162),i={id:"package-arch",title:"Packages",sidebar_label:"Packages",keywords:["Instant OpenHIE","Packages","Architecture"],description:"A description of the instant OpenHIE package architecture"},s={id:"concepts/package-arch",title:"Packages",description:"A description of the instant OpenHIE package architecture",source:"@site/docs/concepts/package-arch.mdx",permalink:"/instant/docs/concepts/package-arch",editUrl:"https://github.com/openhie/instant/tree/master/docs/docs/concepts/package-arch.mdx",sidebar_label:"Packages",sidebar:"docs",previous:{title:"Overview",permalink:"/instant/docs/concepts/overview"},next:{title:"How to create an Instant OpenHIE package",permalink:"/instant/docs/how-to/creating-packages"}},p=[],u={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The Instant OpenHIE architecture, codebase, and documentation are under active development and are subject to change. While we encourage adoption and extension of the Instant OpenHIE framework, we do not consider this ready for production use at this stage."))),Object(c.b)("p",null,"The fundamental concept of Instant OpenHIE is that it can be extended to support additional use cases and workflows. This is achieved through packages. A ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../packages/core"}),"core package")," has been produced from which all other packages will be derived. A package will either extend directly from the core package or from another existing package."),Object(c.b)("p",null,"A package is intended to encompass a set of functionality rather than just setup generic applications. Packages are expected to configure the applications so that they may enact a particular functional role with the HIE. This may include setting up test data and pre-configuring applications."),Object(c.b)("p",null,"Each package will contain the following types of technical artefacts:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Docker Compose scripts for setting up the applications required for this package\u2019s use cases and workflows"),Object(c.b)("li",{parentName:"ul"},"Kubernetes scripts for setting up the applications required for this package\u2019s use cases and workflows"),Object(c.b)("li",{parentName:"ul"},"Configuration scripts to setup required configuration metadata"),Object(c.b)("li",{parentName:"ul"},"Extensions to the test harness to test the added use cases with test data")),Object(c.b)("p",null,"The below diagram shows how packages will extend off of each other to add use cases of increasing complexity."),Object(c.b)("div",{class:"text--center"},Object(c.b)("img",{alt:"Package architecture",src:Object(o.a)("img/package-arch.png")})),Object(c.b)("p",null,"Several essential packages are bundled with Instant OpenHIE. However, it is designed to be extended for implementation-specific needs. See ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../how-to/creating-packages"}),"creating packages")," for more information on how to create your own packages to extend Instant OpenHIE."))}l.isMDXComponent=!0},159:function(e,t,n){"use strict";var a=n(0),r=n(54);t.a=function(){return Object(a.useContext)(r.a)}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=a,b=l["".concat(o,".").concat(f)]||l[f]||d[f]||c;return n?r.a.createElement(b,i({ref:t},p,{components:n})):r.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(163);var a=n(159);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},163:function(e,t,n){"use strict";var a=n(12),r=n(24),c=n(165),o="".startsWith;a(a.P+a.F*n(166)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return o?o.call(t,a,n):t.slice(n,n+a.length)===a}})},165:function(e,t,n){var a=n(78),r=n(26);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},166:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}}}]);