(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1732:function(e,a,t){"use strict";a.a={sidebar:"_83wtTb1BCQnnURdArrZur",sidebarNavTag:"_3q0FKiXw3tjV2YI3hN3w0p",sidebarButtons:"_4QkIGZ83i8IRb6mEdRXxw",contentWrapper:"_1_zVpFrTUP8ipTyVqpV74I",contentContainer:"_28ZvETZ3W2889Sii32q9ed",header:"_1S_VGzfL5ijS1K4fGDn1Ze",sidebarCollapsed:"_1ZTn2wNaIJI8YfjIEgquMp",sidebarOpen:"_2nnc_V4v3xTCQNn6Xxu3i9",tableContainer:"_2ku-2mH_FOhvs_3lRD_Dg3",noBorder:"v5b_JPuyMFQ369WcQ6kmn",tableContent:"_3SgRNJawta6UBIo_1unPUm",extendCardTableEdges:"_2k79IgNS9vV9bmtzjKc_Ga",sectionContainer:"_2JDpwuXCEVehe9kPfKj0zi",topSectionContainer:"_3RlVc37iGg61hd0nOeYIVO",cellWithIcon:"lvuyW1ZmUL_6dJUl2v1si",cardStyles:"I-57U7h3NEE2ggF5ohvSw",cellText:"_253LZak9ginUO60Mmh2ner",stacked:"_3lyRn1-WcVHGcQJKtYIMVf",time:"_1Aezso1l2Csa5iW9hTFt4V",percentChange:"ViZPqsEZa8PxfF1FvaJgA",linkOut:"Xoa7flB_S-AL-Y7mGgPIm",regularFont:"_3uUJfQ1loZVpQ8m-O0E5fZ",green:"_2IcFB3aw3_oJ8teMu_GM2p",red:"_2yLjAE6yCrbIHQrDPl7x2O",footer:"_1tJhPIje5dq3xgrFAddMVV",banxaSupportLink:"_1fpUWA-VYWe41CEF0xKtPu"}},1776:function(e,a,t){"use strict";t.d(a,"c",(function(){return p})),t.d(a,"a",(function(){return f})),t.d(a,"b",(function(){return P}));var n=t(0),l=t.n(n),r=t(2),i=t.n(r),o=t(10),c=t(9),s=t(15),d=t(111),b=t(372),m=t(17);const WithSidebar=({children:e,sidebar:a})=>{const t=Object(o.e)(),n=Object(o.f)(b.b);return l.a.createElement(u.MasterDetail,{isSidebarOpen:n},l.a.createElement(u.Master,{isSidebarOpen:n},a),l.a.createElement(u.MasterCollapsedDrawer,{isSidebarOpen:n,role:"button",tabIndex:0,onClick:()=>t(Object(d.f)(!0))},l.a.createElement(s.yb,null)),l.a.createElement(u.Detail,null,e))};WithSidebar.propTypes={children:i.a.node,sidebar:i.a.node};var p=WithSidebar;const u={};u.MasterDetail=c.c.div`
  --current-sidebar-width: ${({isSidebarOpen:e})=>e?"var(--sidebar-width)":"var(--collapsed-sidebar-width)"};

  --master-detail-leftover-width: calc(
    100vw - var(--current-sidebar-width) - var(--page-content-max-width)
  );

  display: grid;
  width: 100%;
  height: 100%;

  grid-template:
    'Sidebar Content' 100%
    / auto 1fr;

  @media ${m.a.tablet} {
    grid-template:
      'Content' 100%
      / 1fr;
  }

  background-color: var(--color-layer-base);
`,u.Master=c.c.div`
  grid-area: Sidebar;

  @media ${m.a.tablet} {
    display: none;
  }

  border-right: solid 1px var(--color-border-grey);
  width: var(--current-sidebar-width);
  height: 100%;
  overflow-y: auto;

  &:hover,
  &:hover ~ * {
    will-change: width;
  }

  transition: width 0.2s, opacity 0.2s, transform 0.2s;
  transform: perspective(1000px);
  transform-origin: left;

  ${({isSidebarOpen:e})=>!e&&c.b`
      opacity: 0;
      pointer-events: none;
      transform: perspective(1000px) translateZ(-200px);
    `}
`,u.MasterCollapsedDrawer=c.c.div`
  grid-area: Sidebar;
  z-index: 1;
  transition: opacity 0.2s;

  display: flex;
  border-right: solid 1px var(--color-border-grey);
  cursor: pointer;

  > svg {
    margin: auto;
  }

  &:hover {
    > svg * {
      stroke: var(--color-text-light);
    }
  }

  @media ${m.a.tablet} {
    display: none;
  }

  ${({isSidebarOpen:e})=>e&&c.b`
      opacity: 0;
      pointer-events: none;
    `}
`,u.Detail=c.c.div`
  display: grid;
  grid-template-columns: min(100%, var(--page-content-max-width));
  justify-content: center;
  overflow-y: auto;
`;var E=t(61),O=t(32),v=t(1),g="_32KCJs-A1zdzZU4IIzBgMa",h="_24oYVAe9Tb5EbauY6AEcLx";const SidebarHeader=({title:e,setIsSidebarOpen:a,showHide:t=!0,stringGetter:n})=>l.a.createElement("div",{className:g},l.a.createElement("span",null,e),t&&l.a.createElement("div",{role:"button",tabIndex:0,className:h,onClick:()=>a(!1)},n({key:v.a.HIDE})));SidebarHeader.propTypes={title:i.a.string,setIsSidebarOpen:i.a.func.isRequired,showHide:i.a.bool,stringGetter:i.a.func.isRequired};var f=Object(O.c)(Object(o.c)(null,e=>Object(E.b)({setIsSidebarOpen:d.f},e))(SidebarHeader)),I=t(72),y=t.n(I),S=t(96),k=t(16),T=t.n(k),_="_103NvBb3fIO7afwK3BWeGE",R="_3syQNM8U83a_SGNOLvgsKd",w="_1PKYM8jdHG-_kSMdPVfzHP",N="_7-EFAWv9XDlD1RqRbb9tf",j="_1RWOTXd0cSMI-Kdr_ekTy",F="_1Hbi4Ub-j7VlOoxPggVw7J",V="_2FLo1daTVtbhQqTHo2woLj",C="_38ZFgk2pvGLPCU_FvqtL5w",x="Ld0B8w1SVTsHxx6LfRgoY";const SidebarMenuItem=({className:e,detail:a,icon:t,iconRemoveBackground:n,iconUsesFill:r,iconUsesStroke:i,isTinyIcon:o,isButton:c,isExternalLink:s,label:d,labelClassName:b,linkTo:m,onClick:p=y.a,selected:u})=>{const E=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:T()(F,b)},l.a.createElement("div",{className:T()(V,{[x]:o,[j]:r,[N]:i,[C]:n})},t),d),a&&l.a.createElement("div",{className:w},a));return c?l.a.createElement("div",{role:"button",tabIndex:0,className:T()(_,e),onClick:p},E):s?l.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:T()(_,e),onClick:p},E):l.a.createElement(S.a,{to:m,className:T()(_,{[R]:u},e),onClick:p},E)};SidebarMenuItem.propTypes={className:i.a.string,detail:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]),icon:i.a.node,iconRemoveBackground:i.a.bool,iconUsesFill:i.a.bool,iconUsesStroke:i.a.bool,isButton:i.a.bool,isExternalLink:i.a.bool,isTinyIcon:i.a.bool,label:i.a.oneOfType([i.a.string,i.a.node,i.a.arrayOf(i.a.node)]).isRequired,labelClassName:i.a.string,linkTo:i.a.string.isRequired,onClick:i.a.func,selected:i.a.bool};var P=SidebarMenuItem},1805:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),i=t.n(r),o=t(25),c=t(10),s=t(16),d=t.n(s),b=t(32),m=t(15),p=t(1776),u=t(36),E=t(190),O=t(127),v=t(33),g=t(595),h=t(326),f=t(283),I=t(56),y=t(593),S=t(609),k=t(1),T=t(19),_=t(102),R=t(20),w=t(23),N=t(1732);const j=Object(n.lazy)(()=>Promise.all([t.e(0),t.e(9),t.e(20),t.e(19),t.e(64)]).then(t.bind(null,1883))),F=Object(n.lazy)(()=>Promise.all([t.e(23),t.e(81)]).then(t.bind(null,1876))),V=Object(n.lazy)(()=>Promise.all([t.e(23),t.e(92)]).then(t.bind(null,1899))),C=Object(n.lazy)(()=>Promise.all([t.e(21),t.e(105)]).then(t.bind(null,1891))),x=Object(n.lazy)(()=>Promise.all([t.e(23),t.e(71)]).then(t.bind(null,1886))),PortfolioPage=({location:e,stringGetter:a})=>{var t,r;const i=Object(c.e)(),s=Object(c.f)(y.a),b=null!==(t=Object(c.f)(f.a))&&void 0!==t?t:{},P=null!==(r=Object(c.f)(h.a))&&void 0!==r?r:[],D=Object(c.f)(I.q,c.d),L=Object(c.f)(g.a),W=e.pathname.includes(T.n.POSITIONS),U=e.pathname.includes(T.n.ORDERS),A=Object.values(b).filter(({status:e})=>e===_.b.OPEN).length,M=P.filter(({status:e})=>![R.c.CANCELED,R.c.FILLED].includes(e)).length,q=Object(c.f)(S.b);return l.a.createElement(p.c,{sidebar:(()=>{var t;return l.a.createElement("div",{className:N.a.sidebar},l.a.createElement("div",null,l.a.createElement(p.a,{title:a({key:k.a.VIEWS})}),l.a.createElement(p.b,{iconUsesStroke:!0,isTinyIcon:!0,icon:l.a.createElement(m.kb,null),label:a({key:k.a.OVERVIEW}),linkTo:T.n.OVERVIEW,selected:!(!Object(o.f)(e.pathname,{path:T.n.OVERVIEW})&&!Object(o.f)(e.pathname,{path:T.l.REFERRAL}))}),l.a.createElement(p.b,{className:d()(N.a.menuItemWithTag,{[N.a.selected]:W}),iconUsesFill:!0,icon:l.a.createElement(m.v,null),label:l.a.createElement(l.a.Fragment,null,a({key:k.a.POSITIONS}),A>0&&l.a.createElement(O.a,{muted:!0,className:N.a.sidebarNavTag},A)),linkTo:T.n.POSITIONS,selected:W}),l.a.createElement(p.b,{className:d()(N.a.menuItemWithTag,{[N.a.selected]:U}),iconUsesStroke:!0,icon:l.a.createElement(m.hb,null),label:l.a.createElement(l.a.Fragment,null,a({key:k.a.ORDERS}),M>0&&l.a.createElement(O.a,{muted:!0,className:N.a.sidebarNavTag},M)),linkTo:T.n.ORDERS,selected:U}),l.a.createElement(p.b,{iconUsesFill:!0,icon:l.a.createElement(m.k,null),label:l.a.createElement(l.a.Fragment,null,a({key:k.a.FEES}),"Free"===q&&l.a.createElement(O.a,{teal:!0,usePillStyles:!0},a({key:k.a.FREE}))),linkTo:T.n.FEES,selected:e.pathname.includes(T.n.FEES)}),l.a.createElement(p.b,{iconUsesFill:!0,icon:l.a.createElement(m.Q,null),label:a({key:k.a.HISTORY}),linkTo:T.n.HISTORY,selected:e.pathname.includes(T.n.HISTORY)})),s&&"boolean"===typeof(null===D||void 0===D?void 0:D.isRestricted)&&l.a.createElement("div",{className:N.a.sidebarButtons},l.a.createElement(u.a,{size:u.d.Large,onClick:()=>i(Object(v.c)({modalType:w.a.WITHDRAW}))},a({key:k.a.WITHDRAW})),l.a.createElement(u.a,{color:null!==s&&void 0!==s&&null!==(t=s.equity)&&void 0!==t&&t.isZero()?u.b.Purple:u.b.Lighter,disabled:!(null!==D&&void 0!==D&&D.canDeposit)||L,size:u.d.Large,onClick:()=>i(Object(v.c)({modalType:w.a.DEPOSIT}))},a({key:k.a.DEPOSIT}))))})()},l.a.createElement(n.Suspense,{fallback:l.a.createElement(E.a,{id:"portfolio-page"})},l.a.createElement(o.d,null,l.a.createElement(o.b,{path:T.n.OVERVIEW,component:j}),l.a.createElement(o.b,{path:T.n.POSITIONS,component:F}),l.a.createElement(o.b,{path:T.n.ORDERS,component:V}),l.a.createElement(o.b,{path:T.n.FEES,component:C}),l.a.createElement(o.b,{path:T.n.HISTORY,component:x}),l.a.createElement(o.b,{path:T.l.REFERRAL,component:j}),l.a.createElement(o.b,{path:T.l.MANAGE_NOTIFICATIONS,component:j}),l.a.createElement(o.a,{to:T.n.OVERVIEW}))))};PortfolioPage.propTypes={location:i.a.object.isRequired,stringGetter:i.a.func.isRequired},a.default=Object(b.c)(Object(o.i)(PortfolioPage))}}]);