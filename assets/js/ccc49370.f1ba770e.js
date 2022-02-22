"use strict";(self.webpackChunkvirtualized_table_doc=self.webpackChunkvirtualized_table_doc||[]).push([[103],{3146:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),o=a(6742),c=a(9306),s=a(8623),m=a(1217),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",v="blogPostDetailsFull_3kfx";var f=function(e){var t,a,f,p=(a=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=e.children,h=e.frontMatter,b=e.metadata,_=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=b.date,y=b.formattedDate,w=b.permalink,C=b.tags,P=b.readingTime,T=b.title,R=b.editUrl,z=h.author,I=h.image,x=h.keywords,L=h.author_url||h.authorURL,O=h.author_title||h.authorTitle,B=h.author_image_url||h.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:x,image:I}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(f=Z?"h1":"h2",n.createElement("header",null,n.createElement(f,{className:d},Z?T:n.createElement(o.Z,{to:w},T)),n.createElement("div",{className:(0,r.default)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},y),P&&n.createElement(n.Fragment,null," \xb7 ",p(P))),n.createElement("div",{className:"avatar margin-vert--md"},B&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:L},n.createElement("img",{src:B,alt:z})),n.createElement("div",{className:"avatar__intro"},z&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:L},z)),n.createElement("small",{className:"avatar__subtitle"},O)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:s.Z},E)),(C.length>0||_)&&n.createElement("footer",{className:(0,r.default)("row docusaurus-mt-lg",(t={},t[v]=Z,t))},C.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),C.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&R&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:R})),!Z&&_&&n.createElement("div",{className:"col text--right"},n.createElement(o.Z,{to:b.permalink,"aria-label":"Read more about "+T},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4147:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(6016),l=a(3146),i=a(4973),o=a(6742);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=a(5601),m=a(571),u=a(9306);var d=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,o=t.metadata,d=o.title,g=o.description,v=o.nextItem,f=o.prevItem,p=i.hide_table_of_contents;return n.createElement(r.Z,{title:d,description:g,wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage},t&&n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(s.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement(l.Z,{frontMatter:i,metadata:o,isBlogPostPage:!0},n.createElement(t,null)),(v||f)&&n.createElement(c,{nextItem:v,prevItem:f})),!p&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:t.toc})))))}},5601:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),r=a(6010),l=a(6742),i="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",s="sidebarItem_2UVv",m="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",d=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.default)(i,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.default)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:s},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:u},e.title))}))))}},6146:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(4973),l=a(7462),i=a(3366),o=a(6010),c="iconEdit_2_ui",s=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.default)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,o=!1,c=document.getElementsByClassName(e);r<c.length&&!o;){var s=c[r],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),s.classList.add(t),i(s),o=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",o="table-of-contents__link";function c(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(c,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.default)(i,"thin-scrollbar")},n.createElement(c,{toc:t}))}},4235:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(7462),r=a(3366),l=a(7294),i=a(776),o=a(6010),c=a(4973),s=a(2263),m=a(3583),u="playgroundContainer_1E3C",d="playgroundHeader_ZeFq",g="playgroundHeaderUnfoldBtn_NuH_",v="playgroundEditor_2kyF",f="playgroundPreview_1zeG",p=["children","transformCode"];function E(e){var t=e.children;return l.createElement("div",{className:(0,o.default)(d)},t)}function h(){return l.createElement(l.Fragment,null,l.createElement(E,null,l.createElement(c.Z,{id:"theme.Playground.\u9884\u89c8",description:"The result label of the live codeblocks"},"\u9884\u89c8")),l.createElement("div",{className:f},l.createElement(i.i5,null),l.createElement(i.IF,null)))}function b(){var e=l.useState(!1),t=e[0],a=e[1];return l.createElement(l.Fragment,null,l.createElement(E,null,l.createElement("span",null,l.createElement(c.Z,{id:"theme.Playground.\u6e90\u7801",description:"The live editor label of the live codeblocks"},"\u6e90\u7801")),l.createElement("span",{className:g,onClick:function(){return a(!t)}},l.createElement(c.Z,{id:"theme.Playground.\u70b9\u51fb\u5c55\u5f00\u6216\u6536\u62e2",description:"The live editor label of the live codeblocks"},"\u70b9\u51fb\u5c55\u5f00\u6216\u6536\u62e2"))),t&&l.createElement(i.uz,{className:v}))}function _(e){var t=e.children,a=e.transformCode,o=(0,r.Z)(e,p),c=(0,s.Z)(),d=c.isClient,g=c.siteConfig.themeConfig.liveCodeBlock.playgroundPosition,v=(0,m.Z)();return l.createElement("div",{className:u},l.createElement(i.nu,(0,n.Z)({key:d,code:d?t.replace(/\n$/,""):"",transformCode:a||function(e){return e+";"},theme:v},o),"top"===g?l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(b,null)):l.createElement(l.Fragment,null,l.createElement(b,null),l.createElement(h,null))))}},5886:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(7294),l=a(1262),i="title",o=a(3366),c=a(1706),s=["onResize","width","className"],m=a(9862),u=a(8035),d=a(1342),g=["index","moveRow","className","style"],v="DraggableBodyRow",f=a(3864),p=a(7145),E=a.n(p);var h=Object.assign({React:r},r,{VTablePro:function(e){return r.createElement(l.Z,{fallback:r.createElement("div",null,"...")},(function(){var t=a(5386).VTablePro;return r.createElement(t,(0,n.Z)({rowOffsetCount:2},e))}))},generateColumns:function(e,t){void 0===e&&(e=1),void 0===t&&(t={columns:[],columnObj:function(){}});for(var a=t.columns||[],n=t.columnObj?t.columnObj:function(){},r=0;r<e;r++)a.push(Object.assign({key:i+r,title:"\u6807\u9898\u5217"+r,width:150},n(r),{render:function(e){return e}}));return a},generateData:function(e,t,a,n){void 0===e&&(e=1),void 0===t&&(t=25),void 0===a&&(a=function(e,t){return"\u5185\u5bb9"+e+":"+t}),void 0===n&&(n=function(e){return{id:e,rowKey:"rowKey"+e,mergeColumn:"\u5408\u5e76\u5217"}});for(var r=[],l=0;l<e;l++){for(var i=n(l),o=0;o<t;o++)i["title"+o]=a(l,o);r.push(i)}return r},ResizableCell:function(e){var t=e.onResize,a=e.width,l=void 0===a?150:a,i=e.className,m=(0,o.Z)(e,s),u=(0,r.useState)(l),d=u[0],g=u[1],v=(0,r.useState)(!1),f=v[0],p=v[1];return r.createElement(c.Resizable,{width:d,height:0,onResize:function(e,t){var a=t.size;e.stopPropagation(),e.preventDefault(),g(a.width)},onResizeStart:function(e){e.stopPropagation(),p(!0)},onResizeStop:function(e,a){var n=a.element,r=a.size;e.stopPropagation(),p(!1),t(e,{element:n,size:r})},resizeHandles:["e"],handle:r.createElement("span",{className:"custom-handle-e "+(f?"active":""),style:{left:d-5},onClick:function(e){e.stopPropagation()}})},r.createElement("div",(0,n.Z)({className:"my_cell "+i},m)))},DraggableBodyRow:function(e){var t=e.index,a=e.moveRow,l=e.className,i=e.style,c=(0,o.Z)(e,g),s=(0,r.useRef)(null),m=(0,u.L)({accept:v,collect:function(e){var a=(e.getItem()||{}).index;return a===t?{}:{isOver:e.isOver(),dropClassName:a<t?" drop-over-downward":" drop-over-upward"}},drop:function(e){a(e.index,t)}}),f=m[0],p=f.isOver,E=f.dropClassName,h=m[1],b=(0,d.c)({item:{type:v,index:t},collect:function(e){return{isDragging:!!e.isDragging()}}}),_=b[0].isDragging;return h((0,b[1])(s)),r.createElement("div",(0,n.Z)({ref:s,className:l+" draggable-body-row"+(p?E:""),style:Object.assign({opacity:_?.5:1,cursor:"move"},i)},c))},DndProvider:m.W,Backend:f.ZP,update:E()})}}]);