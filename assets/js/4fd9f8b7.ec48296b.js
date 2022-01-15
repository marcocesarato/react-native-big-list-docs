"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[517],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6077:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},s="Standard list",c={unversionedId:"basics/standard-list",id:"basics/standard-list",title:"Standard list",description:"The prop data is required for a standard list. For simplicity, data is a plain array containing the items to render.",source:"@site/docs/basics/standard-list.md",sourceDirName:"basics",slug:"/basics/standard-list",permalink:"/react-native-big-list-docs/basics/standard-list",editUrl:"https://github.com/marcocesarato/react-native-big-list/edit/master/docs/docs/basics/standard-list.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/react-native-big-list-docs/getting-started"},next:{title:"Columns list",permalink:"/react-native-big-list-docs/basics/columns-list"}},d=[{value:"Data examples",id:"data-examples",children:[],level:3},{value:"Example",id:"example",children:[],level:2}],p={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"standard-list"},"Standard list"),(0,i.kt)("p",null,"The prop ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," is required for a standard list. For simplicity, ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," is a plain array containing the items to render."),(0,i.kt)("h3",{id:"data-examples"},"Data examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"[1, 2, 3, 4, 5, 6 /* ... */];\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'[\n  { label: "1", value: 1 /* ... */ },\n  { label: "2", value: 2 /* ... */ },\n  /* ... */\n];\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import BigList from "react-native-big-list";\n\n/* ... */\n\nconst data = [\n  { label: "1", value: 1 /* ... */ },\n  { label: "2", value: 2 /* ... */ },\n  { label: "3", value: 3 /* ... */ },\n  { label: "4", value: 4 /* ... */ },\n  { label: "5", value: 5 /* ... */ },\n  /* ... */\n];\n\nconst renderItem = ({ item, index }) => (\n  <MyListItem label={item.label} value={item.value} />\n);\nconst renderEmpty = () => <MyEmpty />;\nconst renderHeader = () => <MyHeader />;\nconst renderFooter = () => <MyFooter />;\n\nreturn (\n  <BigList\n    data={data}\n    renderItem={renderItem}\n    renderEmpty={renderEmpty}\n    renderHeader={renderHeader}\n    renderFooter={renderFooter}\n    itemHeight={50} // Required (default 0)\n    headerHeight={90} // Required to show header\n    footerHeight={100} // Required to show footer\n  />\n);\n')))}u.isMDXComponent=!0}}]);