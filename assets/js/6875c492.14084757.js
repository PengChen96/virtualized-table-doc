"use strict";(self.webpackChunkvirtualized_table_doc=self.webpackChunkvirtualized_table_doc||[]).push([[610],{3146:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(7294),n=a(6010),l=a(3905),i=a(4973),o=a(6742),s=a(9306),c=a(8623),m=a(1217),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx";var f=function(e){var t,a,f,h=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=e.children,E=e.frontMatter,b=e.metadata,N=e.truncated,_=e.isBlogPostPage,Z=void 0!==_&&_,k=b.date,w=b.formattedDate,y=b.permalink,P=b.tags,T=b.readingTime,C=b.title,z=b.editUrl,R=E.author,x=E.image,I=E.keywords,D=E.author_url||E.authorURL,M=E.author_title||E.authorTitle,O=E.author_image_url||E.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(m.Z,{keywords:I,image:x}),r.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(f=Z?"h1":"h2",r.createElement("header",null,r.createElement(f,{className:d},Z?C:r.createElement(o.Z,{to:y},C)),r.createElement("div",{className:(0,n.default)(g,"margin-vert--md")},r.createElement("time",{dateTime:k},w),T&&r.createElement(r.Fragment,null," \xb7 ",h(T))),r.createElement("div",{className:"avatar margin-vert--md"},O&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:D},r.createElement("img",{src:O,alt:R})),r.createElement("div",{className:"avatar__intro"},R&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:D},R)),r.createElement("small",{className:"avatar__subtitle"},M)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:c.Z},v)),(P.length>0||N)&&r.createElement("footer",{className:(0,n.default)("row docusaurus-mt-lg",(t={},t[p]=Z,t))},P.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var t=e.label,a=e.permalink;return r.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&z&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:z})),!Z&&N&&r.createElement("div",{className:"col text--right"},r.createElement(o.Z,{to:b.permalink,"aria-label":"Read more about "+C},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7294),n=a(6010),l=a(6742),i="sidebar_2ahu",o="sidebarItemTitle_2hhb",s="sidebarItemList_2xAf",c="sidebarItem_2UVv",m="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",d=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.default)(i,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.default)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:s},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:u},e.title))}))))}},9404:function(e,t,a){a.r(t);var r=a(7294),n=a(6016),l=a(3146),i=a(6742),o=a(5601),s=a(4973),c=a(9306);t.default=function(e){var t,a=e.metadata,m=e.items,u=e.sidebar,d=a.allTagsPath,g=a.name,p=a.count,f=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(p),tagName:g});return r.createElement(n.Z,{title:h,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(o.Z,{sidebar:u})),r.createElement("main",{className:"col col--7"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(i.Z,{href:d},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),m.map((function(e){var t=e.content;return r.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))}))))))}},6146:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7294),n=a(4973),l=a(7462),i=a(3366),o=a(6010),s="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,c);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.default)(s,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},4235:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(7462),n=a(3366),l=a(7294),i=a(776),o=a(6010),s=a(4973),c=a(2263),m=a(3583),u="playgroundContainer_1E3C",d="playgroundHeader_ZeFq",g="playgroundHeaderUnfoldBtn_NuH_",p="playgroundEditor_2kyF",f="playgroundPreview_1zeG",h=["children","transformCode"];function v(e){var t=e.children;return l.createElement("div",{className:(0,o.default)(d)},t)}function E(){return l.createElement(l.Fragment,null,l.createElement(v,null,l.createElement(s.Z,{id:"theme.Playground.\u9884\u89c8",description:"The result label of the live codeblocks"},"\u9884\u89c8")),l.createElement("div",{className:f},l.createElement(i.i5,null),l.createElement(i.IF,null)))}function b(){var e=l.useState(!1),t=e[0],a=e[1];return l.createElement(l.Fragment,null,l.createElement(v,null,l.createElement("span",null,l.createElement(s.Z,{id:"theme.Playground.\u6e90\u7801",description:"The live editor label of the live codeblocks"},"\u6e90\u7801")),l.createElement("span",{className:g,onClick:function(){return a(!t)}},l.createElement(s.Z,{id:"theme.Playground.\u70b9\u51fb\u5c55\u5f00\u6216\u6536\u62e2",description:"The live editor label of the live codeblocks"},"\u70b9\u51fb\u5c55\u5f00\u6216\u6536\u62e2"))),t&&l.createElement(i.uz,{className:p}))}function N(e){var t=e.children,a=e.transformCode,o=(0,n.Z)(e,h),s=(0,c.Z)(),d=s.isClient,g=s.siteConfig.themeConfig.liveCodeBlock.playgroundPosition,p=(0,m.Z)();return l.createElement("div",{className:u},l.createElement(i.nu,(0,r.Z)({key:d,code:d?t.replace(/\n$/,""):"",transformCode:a||function(e){return e+";"},theme:p},o),"top"===g?l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(b,null)):l.createElement(l.Fragment,null,l.createElement(b,null),l.createElement(E,null))))}},5886:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(7462),n=a(7294),l=a(1262),i="title",o=a(3366),s=a(1706),c=["onResize","width","className"],m=a(9862),u=a(8035),d=a(1342),g=["index","moveRow","className","style"],p="DraggableBodyRow",f=a(3864),h=a(7145),v=a.n(h);var E=Object.assign({React:n},n,{VTablePro:function(e){return n.createElement(l.Z,{fallback:n.createElement("div",null,"...")},(function(){var t=a(5386).VTablePro;return n.createElement(t,(0,r.Z)({rowOffsetCount:5},e))}))},generateColumns:function(e,t){void 0===e&&(e=1),void 0===t&&(t={columns:[],columnObj:function(){}});for(var a=t.columns||[],r=t.columnObj?t.columnObj:function(){},n=0;n<e;n++)a.push(Object.assign({key:i+n,title:"\u6807\u9898\u5217"+n,width:150},r(n),{render:function(e){return e}}));return a},generateData:function(e,t,a,r){void 0===e&&(e=1),void 0===t&&(t=25),void 0===a&&(a=function(e,t){return"\u5185\u5bb9"+e+":"+t}),void 0===r&&(r=function(e){return{id:e,rowKey:"rowKey"+e,mergeColumn:"\u5408\u5e76\u5217"}});for(var n=[],l=0;l<e;l++){for(var i=r(l),o=0;o<t;o++)i["title"+o]=a(l,o);n.push(i)}return n},ResizableCell:function(e){var t=e.onResize,a=e.width,l=void 0===a?150:a,i=e.className,m=(0,o.Z)(e,c),u=(0,n.useState)(l),d=u[0],g=u[1],p=(0,n.useState)(!1),f=p[0],h=p[1];return n.createElement(s.Resizable,{width:d,height:0,onResize:function(e,t){var a=t.size;e.stopPropagation(),e.preventDefault(),g(a.width)},onResizeStart:function(e){e.stopPropagation(),h(!0)},onResizeStop:function(e,a){var r=a.element,n=a.size;e.stopPropagation(),h(!1),t(e,{element:r,size:n})},resizeHandles:["e"],handle:n.createElement("span",{className:"custom-handle-e "+(f?"active":""),style:{left:d-5},onClick:function(e){e.stopPropagation()}})},n.createElement("div",(0,r.Z)({className:"my_cell "+i},m)))},DraggableBodyRow:function(e){var t=e.index,a=e.moveRow,l=e.className,i=e.style,s=(0,o.Z)(e,g),c=(0,n.useRef)(null),m=(0,u.L)({accept:p,collect:function(e){var a=(e.getItem()||{}).index;return a===t?{}:{isOver:e.isOver(),dropClassName:a<t?" drop-over-downward":" drop-over-upward"}},drop:function(e){a(e.index,t)}}),f=m[0],h=f.isOver,v=f.dropClassName,E=m[1],b=(0,d.c)({item:{type:p,index:t},collect:function(e){return{isDragging:!!e.isDragging()}}}),N=b[0].isDragging;return E((0,b[1])(c)),n.createElement("div",(0,r.Z)({ref:c,className:l+" draggable-body-row"+(h?v:""),style:Object.assign({opacity:N?.5:1,cursor:"move"},i)},s))},DndProvider:m.W,Backend:f.ZP,update:v()})}}]);