"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[102],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},415:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Migrate from FlatList",p={unversionedId:"extras/migrate-flatlist",id:"extras/migrate-flatlist",title:"Migrate from FlatList",description:"Migration and then the replacement of a FlatList is very simple.",source:"@site/docs/extras/migrate-flatlist.md",sourceDirName:"extras",slug:"/extras/migrate-flatlist",permalink:"/react-native-big-list-docs/extras/migrate-flatlist",editUrl:"https://github.com/marcocesarato/react-native-big-list/edit/master/docs/docs/extras/migrate-flatlist.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/react-native-big-list-docs/basics/example"},next:{title:"Props",permalink:"/react-native-big-list-docs/props"}},m=[{value:"Getting started",id:"getting-started",children:[{value:"Example",id:"example",children:[{value:"Before:",id:"before",children:[],level:4},{value:"After:",id:"after",children:[],level:4}],level:3}],level:2},{value:'<small class="optional">Optional</small> Next steps',id:"optional-next-steps",children:[{value:"Replacing",id:"replacing",children:[],level:4},{value:"Removing",id:"removing",children:[],level:4},{value:"Final result",id:"final-result",children:[],level:3}],level:2}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrate-from-flatlist"},"Migrate from FlatList"),(0,i.kt)("p",null,"Migration and then the replacement of a FlatList is very simple."),(0,i.kt)("p",null,"BigList permit a fast way replacement of the FlatList component using some aliases of props that ",(0,i.kt)("strong",{parentName:"p"},"replace")," the default props.\nThe props compatibles are listed on ",(0,i.kt)("a",{parentName:"p",href:"/react-native-big-list-docs/props#flatlist"},"Props List"),".\nAll of them should be replaced with their related props of BigList ",(0,i.kt)("em",{parentName:"p"},"(recommended)"),"."),(0,i.kt)("p",null,"The main props of FlatList are compatible with BigList like ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," and its structure, ",(0,i.kt)("inlineCode",{parentName:"p"},"ListHeaderComponent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ListHeaderComponentStyle")," etc..."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"You just need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Import the component"),(0,i.kt)("li",{parentName:"ul"},"Replace the name of the component from ",(0,i.kt)("inlineCode",{parentName:"li"},"FlatList")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"BigList"),"."),(0,i.kt)("li",{parentName:"ul"},"Add the props for the heights")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"BigList need to define a static height of the items for maintain great performances.\nIf you use ",(0,i.kt)("inlineCode",{parentName:"p"},"getItemLayout")," you don't need to define ",(0,i.kt)("inlineCode",{parentName:"p"},"itemHeight"),(0,i.kt)("br",null)),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"itemHeight")," for items ",(0,i.kt)("em",{parentName:"li"},"(default 50)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headerHeight")," for the header ",(0,i.kt)("em",{parentName:"li"},"(default 0)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"footerHeight")," for the footer ",(0,i.kt)("em",{parentName:"li"},"(default 0)"))))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("h4",{id:"before"},"Before:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { FlatList } from "react-native";\n\nconst ITEM_HEIGHT = 50;\n\n/* ... */\n\n<FlatList\n  style={styles.list}\n  data={data}\n  ListHeaderComponent={renderHeader}\n  ListFooterComponent={renderFooter}\n  ListFooterComponentStyle={styles.footer}\n  ListEmptyComponent={renderEmpty}\n  getItemLayout={(data, index) => ({\n    length: ITEM_HEIGHT,\n    offset: ITEM_HEIGHT * index,\n    index,\n  })}\n  renderItem={renderItem}\n  keyExtractor={(item) => item.value}\n/>;\n')),(0,i.kt)("h4",{id:"after"},"After:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import BigList from "react-native-big-list";\n\nconst ITEM_HEIGHT = 50;\n\n/* ... */\n\n<BigList\n  style={styles.list}\n  data={data}\n  renderItem={renderItem}\n  keyExtractor={(item) => item.value}\n  ListHeaderComponent={renderHeader} // Replaceable with `renderHeader`\n  ListFooterComponent={renderFooter} // Replaceable with `renderFooter`\n  ListFooterComponentStyle={styles.footer} // This works only with `ListFooterComponent`\n  ListEmptyComponent={renderEmpty} // Replaceable with `renderEmpty`\n  getItemLayout={(data, index) => ({\n    length: ITEM_HEIGHT,\n    offset: ITEM_HEIGHT * index,\n    index,\n  })} // Replaceable with `itemHeight={ITEM_HEIGHT}`\n  keyExtractor={(item) => item.value}\n  //  New props\n  headerHeight={100} // Default 0, need to specify the header height\n  footerHeight={100} // Default 0, need to specify the foorer height\n/>;\n')),(0,i.kt)("h2",{id:"optional-next-steps"},(0,i.kt)("small",{class:"optional"},"Optional")," Next steps"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These steps are recommended but, if you want turn back to FlatList in anytime, you can keep only the first steps without any problems."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To have more details about props check the ",(0,i.kt)("a",{parentName:"p",href:"/react-native-big-list-docs/props"},"Props list")))),(0,i.kt)("h4",{id:"replacing"},"Replacing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"ListHeaderComponent")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"renderHeader")),(0,i.kt)("li",{parentName:"ul"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"ListFooterComponent")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"renderFooter")),(0,i.kt)("li",{parentName:"ul"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"ListEmptyComponent")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"renderEmpty")),(0,i.kt)("li",{parentName:"ul"},"Replace ",(0,i.kt)("inlineCode",{parentName:"li"},"getItemLayout")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"itemHeight"))),(0,i.kt)("h4",{id:"removing"},"Removing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"ListFooterComponentStyle")),(0,i.kt)("li",{parentName:"ul"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"ListHeaderComponentStyle"))),(0,i.kt)("h3",{id:"final-result"},"Final result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import BigList from "react-native-big-list";\n\nconst ITEM_HEIGHT = 50;\n\n/* ... */\n\n<BigList\n  style={styles.list}\n  data={data}\n  keyExtractor={(item) => item.value}\n  renderItem={renderItem}\n  renderHeader={renderHeader}\n  renderFooter={renderFooter}\n  renderEmpty={renderEmpty}\n  itemHeight={ITEM_HEIGHT}\n  headerHeight={100}\n  footerHeight={100}\n/>;\n')))}c.isMDXComponent=!0}}]);