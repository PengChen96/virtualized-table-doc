"use strict";(self.webpackChunkvirtualized_table_doc=self.webpackChunkvirtualized_table_doc||[]).push([[941],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3530:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],u={sidebar_position:8},c="\u8868\u5934\u5206\u7ec4",l={unversionedId:"tutorial-extras/grouping-columns",id:"tutorial-extras/grouping-columns",isDocsHomePage:!1,title:"\u8868\u5934\u5206\u7ec4",description:"`jsx live",source:"@site/docs/tutorial-extras/grouping-columns.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/grouping-columns",permalink:"/virtualized-table-doc/docs/tutorial-extras/grouping-columns",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-extras/grouping-columns.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u884c/\u5217\u5408\u5e76utils",permalink:"/virtualized-table-doc/docs/tutorial-extras/colspan-rowspan-use-utils"},next:{title:"\u603b\u7ed3\u680f",permalink:"/virtualized-table-doc/docs/tutorial-extras/summary"}},s=[],d={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8868\u5934\u5206\u7ec4"},"\u8868\u5934\u5206\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function MyComponent() {\n\n  const columns = [\n      {\n      title: 'Name',\n      dataIndex: 'name',\n      key: 'name',\n      width: 100,\n      },\n      {\n        title: 'Other',\n        children: [\n          {\n            title: 'Age',\n            dataIndex: 'age',\n            key: 'age',\n            width: 150,\n          },\n          {\n            title: 'Address',\n            children: [\n              {\n                title: 'Street',\n                dataIndex: 'street',\n                key: 'street',\n                width: 150,\n              },\n              {\n                title: 'Block',\n                children: [\n                  {\n                    title: 'Building',\n                    dataIndex: 'building',\n                    key: 'building',\n                    width: 100,\n                  },\n                  {\n                    title: 'Door No.',\n                    dataIndex: 'number',\n                    key: 'number',\n                    width: 100,\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n      },\n      {\n        title: 'Company',\n        children: [\n          {\n            title: 'Company Address',\n            dataIndex: 'companyAddress',\n            key: 'companyAddress',\n            width: 200,\n          },\n          {\n            title: 'Company Name',\n            dataIndex: 'companyName',\n            key: 'companyName',\n          },\n        ],\n      },\n      {\n        title: 'Gender',\n        dataIndex: 'gender',\n        key: 'gender',\n        width: 80,\n      },\n    ];\n      \n    const dataSource = [];\n    for (let i = 0; i < 500; i++) {\n      dataSource.push({\n        key: i,\n        name: 'John Brown',\n        age: i + 1,\n        street: 'Lake Park',\n        building: 'C',\n        number: 2035,\n        companyAddress: 'Lake Street 42',\n        companyName: 'SoftLake Co',\n        gender: 'M',\n      });\n    }\n    \n    return (\n        <VTablePro\n          bordered\n          fixedRowHeight\n          columns={columns}\n          dataSource={dataSource}\n        />\n    );\n\n}\n")))}p.isMDXComponent=!0}}]);