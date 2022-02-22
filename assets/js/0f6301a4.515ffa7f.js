"use strict";(self.webpackChunkvirtualized_table_doc=self.webpackChunkvirtualized_table_doc||[]).push([[242],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5983:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:11},u="\u53ef\u62d6\u62fd\u884c",s={unversionedId:"tutorial-extras/drag-sorting",id:"tutorial-extras/drag-sorting",isDocsHomePage:!1,title:"\u53ef\u62d6\u62fd\u884c",description:"`jsx live",source:"@site/docs/tutorial-extras/drag-sorting.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/drag-sorting",permalink:"/virtualized-table-doc/docs/tutorial-extras/drag-sorting",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-extras/drag-sorting.md",version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u53ef\u4f38\u7f29\u5217",permalink:"/virtualized-table-doc/docs/tutorial-extras/column-resize"}},d=[],l={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53ef\u62d6\u62fd\u884c"},"\u53ef\u62d6\u62fd\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"class MyComponent extends React.Component{\n  constructor() {\n    super();\n    this.state = {\n      columns: [],\n      dataSource: []\n    };\n  }\n  componentDidMount() {\n    const colNum = 10;\n    const dataNum = 500;\n    const columns = generateColumns(colNum);\n    const dataSource = generateData(dataNum, colNum);\n    this.setState({\n      columns,\n      dataSource\n    });\n  } \n  \n  moveRow(dragIndex, hoverIndex) {\n      console.log(dragIndex, '=>', hoverIndex);\n      const {dataSource} = this.state;\n      const dragRow = dataSource[dragIndex];\n      this.setState(\n        update(this.state, {\n          dataSource: {\n            $splice: [\n              [dragIndex, 1],\n              [hoverIndex, 0, dragRow],\n            ],\n          },\n        }),\n        () => {\n          console.log(this.state.dataSource);\n        }\n      );\n    }\n  render() {\n    const {columns, dataSource} = this.state;\n    return <div>\n      <DndProvider backend={Backend}>\n        <VTablePro\n          bordered\n          columns={columns}\n          dataSource={dataSource}\n          // \u91cd\u5199body row\n          components={{\n            body: {\n              row: DraggableBodyRow\n            }\n          }}\n          // \u8bbe\u7f6e\u884c\u5c5e\u6027\n          onRow={(record, index) => {\n            return ({\n              index,\n              moveRow: this.moveRow.bind(this),\n            });\n          }}\n        />\n      </DndProvider>\n    </div>\n  }\n}\n")))}p.isMDXComponent=!0}}]);