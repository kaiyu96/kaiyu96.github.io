import{u as U,f as se,g as te,h as Y,i as ae,P as le,j as re,k as ue,l as F,m as S,n as ie,w as M,p as t,q as oe,R as $,s as ne,v as ce,x as ve,C as pe,y as de,z as he,A as ye,B as me,D as ge,E as fe,F as He,G as j,H as I,I as Re,J as q,K as ke}from"./app-OmVW2Hg4.js";const we=["/","/posts/ourStory.html","/posts/productSelection.html","/posts/petBrand/petCare.html","/posts/petBrand/petFashion.html","/posts/petBrand/petHousing.html","/posts/petBrand/petSitTraining.html","/posts/petActivity/activity.html","/posts/petActivity/community.html","/404.html"],Qe="SEARCH_PRO_QUERY_HISTORY",g=U(Qe,[]),Se=()=>{const{queryHistoryCount:a}=q,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=q,f=U(qe,[]),xe=()=>{const a=_>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,_-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Ce=a=>{const l=pe(),r=Y(),x=de(),i=F(0),k=S(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:C}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:A=d=>d,splitWord:D,suggestionsFilter:T,...m}=l.value;R?(i.value+=1,y(c.join(" "),r.value,m).then(d=>A(d,R,r.value,x.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},q.searchDelay-q.suggestDelay);M([a,r],([c])=>H(c),{immediate:!0}),ge(()=>{C()})}),{isSearching:k,results:h}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),x=Y(),i=ae(le),{enabled:k,addQueryHistory:h,queryHistory:y,removeQueryHistory:C}=Se(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:A}=xe(),D=k||H,T=re(a,"queries"),{results:m,isSearching:d}=Ce(T),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),B=S(()=>D&&(y.value.length>0||c.value.length>0)),L=S(()=>m.value.length>0),b=S(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=b.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<b.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},E=e=>e.map(s=>ke(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,Q=""]=He(s)?s[x.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",E([o,...n,Q])))}return e.display.map(s=>t("div",E(s)))},w=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{w()}},()=>[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>E(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),A(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(L.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=b.value.contents[p.value];h(a.queries.join(" ")),R(s),r.push(P(s)),w()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),w())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!L.value:!B.value}],id:"search-pro-results"},a.queries.length?d.value?t(oe,{hint:i.value.searching}):L.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const Q=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:Q}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const O=Q&&p.value===ee;return t($,{to:P(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(a.queries.join(" ")),R(n),w()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:D?B.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{De as default};
