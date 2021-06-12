(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[704],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4236:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},s={unversionedId:"basics/columns-list",id:"basics/columns-list",isDocsHomePage:!1,title:"Columns list",description:"`javascript",source:"@site/docs/basics/columns-list.md",sourceDirName:"basics",slug:"/basics/columns-list",permalink:"/react-native-big-list-docs/basics/columns-list",editUrl:"https://github.com/marcocesarato/react-native-big-list/edit/master/docs/docs/basics/columns-list.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Standard list",permalink:"/react-native-big-list-docs/basics/standard-list"},next:{title:"Sections List",permalink:"/react-native-big-list-docs/basics/sections-list"}},l=[],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import BigList from "react-native-big-list";\n\n/* ... */\n\nconst data = [\n  { label: "1", value: 1 /* ... */ },\n  { label: "2", value: 2 /* ... */ },\n  { label: "3", value: 3 /* ... */ },\n  { label: "4", value: 4 /* ... */ },\n  { label: "5", value: 5 /* ... */ },\n  /* ... */\n];\n\nconst renderItem = ({ item, index }) => (\n  <MyListItem label={item.label} value={item.value} />\n);\nconst renderEmpty = () => <MyEmpty />;\nconst renderHeader = () => <MyHeader />;\nconst renderFooter = () => <MyFooter />;\n\nreturn (\n  <BigList\n    data={data}\n    numColumns={5} // Set the number of columns\n    renderItem={renderItem}\n    renderEmpty={renderEmpty}\n    renderHeader={renderHeader}\n    renderFooter={renderFooter}\n    itemHeight={50}\n    headerHeight={90}\n    footerHeight={100}\n  />\n);\n')))}p.isMDXComponent=!0}}]);