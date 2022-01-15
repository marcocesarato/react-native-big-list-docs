"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[218],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5828:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},c="Sections List",l={unversionedId:"basics/sections-list",id:"basics/sections-list",title:"Sections List",description:"To create a section list you need to specify the sections prop. For simplicity, sections is a plain array containing another plain array with the items (section items) to render. If specified data prop will be ignored and so it'll replace the data prop.",source:"@site/docs/basics/sections-list.md",sourceDirName:"basics",slug:"/basics/sections-list",permalink:"/react-native-big-list-docs/basics/sections-list",editUrl:"https://github.com/marcocesarato/react-native-big-list/edit/master/docs/docs/basics/sections-list.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Columns list",permalink:"/react-native-big-list-docs/basics/columns-list"},next:{title:"Example",permalink:"/react-native-big-list-docs/basics/example"}},p=[{value:"Data examples",id:"data-examples",children:[],level:3},{value:"Example",id:"example",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sections-list"},"Sections List"),(0,a.kt)("p",null,"To create a section list you need to specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"sections")," prop. For simplicity, ",(0,a.kt)("inlineCode",{parentName:"p"},"sections")," is a plain array containing another plain array with the items (section items) to render. If specified ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," prop will be ignored and so it'll replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," prop."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It's required if no data is specified or if you want to use sticky headers (look at ",(0,a.kt)("strong",{parentName:"p"},"renderSectionHeader")," prop) with sections.",(0,a.kt)("br",null),"\nIt enables also the ",(0,a.kt)("strong",{parentName:"p"},"renderSectionHeader")," and ",(0,a.kt)("strong",{parentName:"p"},"renderSectionFooter")," props."))),(0,a.kt)("h3",{id:"data-examples"},"Data examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"[\n  // Section 1\n  [1, 2],\n  // Section 2\n  [3, 4],\n  /* ... */\n];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n  [\n    // Section 1\n    { label: "1", value: 1 /* ... */ },\n    { label: "2", value: 2 /* ... */ },\n  ],\n  [\n    // Section 2\n    { label: "3", value: 3 /* ... */ },\n    { label: "4", value: 4 /* ... */ },\n  ],\n  /* ... */\n];\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import BigList from "react-native-big-list";\n\n/* ... */\n\nconst sections = [\n  [\n    // Section 0\n    { label: "1", value: 1 /* ... */ },\n    { label: "2", value: 2 /* ... */ },\n  ],\n  [\n    // Section 1\n    { label: "3", value: 3 /* ... */ },\n    { label: "4", value: 4 /* ... */ },\n  ],\n  [\n    // Section 2\n    { label: "6", value: 6 /* ... */ },\n    { label: "6", value: 6 /* ... */ },\n  ],\n  /* ... */\n];\n\nconst renderItem = ({ item, index }) => (\n  <MyListItem label={item.label} value={item.value} />\n);\nconst renderHeader = () => <MyHeader />;\nconst renderFooter = () => <MyFooter />;\nconst renderSectionHeader = () => <MySectionHeader />;\nconst renderSectionFooter = () => <MySectionFooter />;\n\nreturn (\n  <BigList\n    sections={sections}\n    renderItem={renderItem}\n    renderHeader={renderHeader}\n    renderFooter={renderFooter}\n    renderSectionHeader={renderSectionHeader}\n    renderSectionFooter={renderSectionFooter}\n    itemHeight={50}\n    headerHeight={90}\n    footerHeight={100}\n    sectionHeaderHeight={90} // Required to show section header\n    sectionFooterHeight={100} // Required to show section footer\n  />\n);\n')))}u.isMDXComponent=!0}}]);