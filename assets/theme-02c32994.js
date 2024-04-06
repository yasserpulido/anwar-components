import{s as f,w as b,T as m,i as g,j as h}from"./workshop-72f77a44.js";import{r as d}from"./index-c6dae603.js";import{u}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4c0f5cae.js";var p=b(function(a,e){var o=a.styles,n=f([o],void 0,d.useContext(m)),l=d.useRef();return u(function(){var r=e.key+"-global",t=new e.sheet.constructor({key:r,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),i=!1,s=document.querySelector('style[data-emotion="'+r+" "+n.name+'"]');return e.sheet.tags.length&&(t.before=e.sheet.tags[0]),s!==null&&(i=!0,s.setAttribute("data-emotion",r),t.hydrate([s])),l.current=[t,i],function(){t.flush()}},[e]),u(function(){var r=l.current,t=r[0],i=r[1];if(i){r[1]=!1;return}if(n.next!==void 0&&g(e,n.next,!0),t.tags.length){var s=t.tags[t.tags.length-1].nextElementSibling;t.before=s,t.flush()}e.insert("",n,t,!1)},[e,n.name]),null});function c(){for(var a=arguments.length,e=new Array(a),o=0;o<a;o++)e[o]=arguments[o];return f(e)}const y=c`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #root *,
  #root *::before,
  #root *::after,
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  #root {
    font-size: 16px;
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
`,v=()=>h.jsx(p,{styles:y});v.__docgenInfo={description:"",methods:[],displayName:"Provider"};export{v as P};
