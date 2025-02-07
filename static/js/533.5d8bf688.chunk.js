"use strict";(self.webpackChunkkatscan=self.webpackChunkkatscan||[]).push([[533],{9533:(e,a,t)=>{t.r(a),t.d(a,{default:()=>$});var s=t(5043),l=t(3216),n=t(9379),o=t(45),r=t(8139),i=t.n(r),c=t(7121),d=t(1456),h=t(7852),m=t(4488),x=t(579);const p=["className","bsPrefix","as"],j=(0,m.A)("h4");j.displayName="DivStyledAsH4";const u=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:l=j}=e,r=(0,o.A)(e,p);return s=(0,h.oU)(s,"alert-heading"),(0,x.jsx)(l,(0,n.A)({ref:a,className:i()(t,s)},r))}));u.displayName="AlertHeading";const k=u;var b=t(9243);const f=["className","bsPrefix","as"],v=s.forwardRef(((e,a)=>{let{className:t,bsPrefix:s,as:l=b.A}=e,r=(0,o.A)(e,f);return s=(0,h.oU)(s,"alert-link"),(0,x.jsx)(l,(0,n.A)({ref:a,className:i()(t,s)},r))}));v.displayName="AlertLink";const N=v;var g=t(8072),w=t(5632);const A=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],T=s.forwardRef(((e,a)=>{const t=(0,c.Zw)(e,{show:"onClose"}),{bsPrefix:s,show:l=!0,closeLabel:r="Close alert",closeVariant:m,className:p,children:j,variant:u="primary",onClose:k,dismissible:b,transition:f=g.A}=t,v=(0,o.A)(t,A),N=(0,h.oU)(s,"alert"),T=(0,d.A)((e=>{k&&k(!1,e)})),D=!0===f?g.A:f,S=(0,x.jsxs)("div",(0,n.A)((0,n.A)({role:"alert"},D?void 0:v),{},{ref:a,className:i()(p,N,u&&"".concat(N,"-").concat(u),b&&"".concat(N,"-dismissible")),children:[b&&(0,x.jsx)(w.A,{onClick:T,"aria-label":r,variant:m}),j]}));return D?(0,x.jsx)(D,(0,n.A)((0,n.A)({unmountOnExit:!0},v),{},{ref:void 0,in:l,children:S})):l?S:null}));T.displayName="Alert";const D=Object.assign(T,{Link:N,Heading:k});var S=t(3202),y=t(4179),C=t(7812);const I=e=>{let{tokenData:a,tokenHolder:t}=e;const l=(0,s.useMemo)((()=>{if(null===a)return[];if(0===t.length)return[{label:"Other Holders",percentage:100}];const e=t,s=a.dec,l=a.max,n=[{label:"Top 1-10 Holders",total:0},{label:"Top 11-20 Holders",total:0},{label:"Top 21-30 Holders",total:0},{label:"Top 31-40 Holders",total:0},{label:"Top 41-50 Holders",total:0}];e.slice(0,50).forEach(((e,a)=>{const t=Math.floor(a/10);n[t].total+=(0,y.p9)(e.balance,s)}));const o=n.reduce(((e,a)=>e+a.total),0),r=(0,y.p9)(l.toString(),s)-o;return[...n.map((e=>({label:e.label,percentage:e.total/(0,y.p9)(l.toString(),s)*100}))),{label:"Other Holders",percentage:r/(0,y.p9)(l.toString(),s)*100}]}),[a,t]);return(0,x.jsx)("div",{className:"holder-distribution",children:(0,x.jsx)(C.CU,{data:l,groupLabel:"Holder Group"})})};t(3341);const E=e=>{let{data:a,tokenData:t}=e;return(0,x.jsx)("div",{className:"mobile-table",children:a.map(((e,a)=>(0,x.jsxs)("div",{className:"mobile-table-row",children:[(0,x.jsxs)("div",{className:"mobile-table-cell",children:[(0,x.jsx)("strong",{children:"Type:"})," ",e.op]}),(0,x.jsxs)("div",{className:"mobile-table-cell",children:[(0,x.jsx)("strong",{children:"Transaction ID:"}),(0,x.jsx)(C.ii,{to:"/transaction-lookup/".concat(e.hashRev),tooltip:"View transaction details",className:"clickable-address",children:(0,y.l1)(e.hashRev)})]}),(0,x.jsxs)("div",{className:"mobile-table-cell",children:[(0,x.jsx)("strong",{children:"Address:"}),(0,x.jsx)(C.ii,{to:"/wallet/".concat("mint"===e.op?e.to:e.from),tooltip:"View wallet details",className:"clickable-address",children:(0,y.l1)("mint"===e.op?e.to:e.from)})]}),(0,x.jsxs)("div",{className:"mobile-table-cell",children:[(0,x.jsx)("strong",{children:"Amount:"})," ",(0,y.ZV)((0,y.p9)(e.amt,t.dec),t.dec)]}),(0,x.jsxs)("div",{className:"mobile-table-cell",children:[(0,x.jsx)("strong",{children:"Timestamp:"})," ",(0,y.r6)(e.mtsAdd)]})]},a)))})};var H=t(4196),V=t(9308),K=t(6502);const O=e=>{let{tokenData:a,tokenId:t,operations:l,setOperations:n,operationsCursor:o,setOperationsCursor:r}=e;const{isMobile:i}=(0,C.Iu)(),[c,d]=(0,s.useState)(!1),h=(0,s.useRef)();(0,s.useEffect)((()=>{null!==t&&void 0!==t&&0===l.length&&(0,V.CV)(t,50).then((e=>{n(e.result),r(e.next)})).catch((e=>{console.error("Failed to fetch operations:",e),(0,K.I)("error","Failed to fetch operation details")}))}),[l.length,n,r,t]);const m=(0,s.useCallback)((async()=>{if(!c&&o&&void 0!==t)try{d(!0);const e=await(0,V.CV)(t,50,o);n((a=>[...a,...e.result])),r(e.next)}catch(e){console.error("Failed to fetch operations:",e),(0,K.I)("error","Failed to load more operations. Please try again.")}finally{d(!1)}}),[c,o,t,n,r]),p=(0,s.useCallback)((e=>{var a;c||(h.current&&h.current.disconnect(),h.current=new IntersectionObserver((e=>{e[0].isIntersecting&&o&&m()})),e&&(null===(a=h.current)||void 0===a||a.observe(e)))}),[c,o,m]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"detail-table-container",style:{height:"100%"},children:i?(0,x.jsx)(E,{data:l,tokenData:a}):(0,x.jsxs)(H.A,{striped:!0,bordered:!0,hover:!0,children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Type"}),(0,x.jsx)("th",{children:"Transaction ID"}),(0,x.jsx)("th",{children:"Address"}),(0,x.jsx)("th",{children:"Amount"}),(0,x.jsx)("th",{children:"Timestamp"})]})}),(0,x.jsx)("tbody",{children:l.map(((e,t)=>(0,x.jsxs)("tr",{ref:t===l.length-1?p:null,children:[(0,x.jsx)("td",{children:e.op}),(0,x.jsx)("td",{children:(0,x.jsx)(C.ii,{to:"/transaction-lookup/".concat(e.hashRev),tooltip:"View transaction details",className:"clickable-address",children:e.hashRev})}),(0,x.jsx)("td",{children:(0,x.jsx)(C.ii,{to:"/wallet/".concat("mint"===e.op?e.to:e.from),tooltip:"View wallet details",className:"clickable-address",children:"mint"===e.op?e.to:e.from})}),(0,x.jsx)("td",{children:(0,y.ZV)((0,y.p9)(e.amt,a.dec),a.dec)}),(0,x.jsx)("td",{children:(0,y.r6)(e.mtsAdd)})]},t)))})]})}),c&&(0,x.jsx)("div",{children:"Loading more operations..."}),!o&&!c&&(0,x.jsx)("div",{children:"No more operations to load."})]})},R=e=>{let{data:a,tokenData:t}=e;return(0,x.jsx)("div",{className:"mobile-table",children:a.map(((e,a)=>(0,x.jsx)("div",{className:"mobile-table-row",children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"mobile-table-cell",children:[(0,x.jsx)("strong",{children:"Rank:"})," ",a+1]}),(0,x.jsxs)("div",{className:"mobile-table-cell",children:[(0,x.jsx)("strong",{children:"Address:"}),(0,x.jsx)(C.ii,{to:"/wallet/".concat(e.address),tooltip:"View wallet details",className:"clickable-address",children:(0,y.l1)(e.address)})]}),(0,x.jsxs)("div",{className:"mobile-table-cell",children:[(0,x.jsx)("strong",{children:"Amount:"})," ",(0,y.ZV)((0,y.p9)(e.balance,t.dec),t.dec)]}),(0,x.jsxs)("div",{className:"mobile-table-cell",children:[(0,x.jsx)("strong",{children:"% of Total Supply:"}),((0,y.p9)(e.balance,t.dec)/(0,y.p9)(t.max,t.dec)*100).toFixed(2),"%"]})]})},a)))})};var F=t(591);const G=e=>{let{tokenData:a,holderData:t,setHolderData:l}=e;const{isMobile:n}=(0,C.Iu)(),{data:o,loading:r}=(0,F.s)({url:"/token/holder/".concat(a.tick),avoidLoading:0!==(null===t||void 0===t?void 0:t.length),defaultValue:t});(0,s.useEffect)((()=>{0!==o.length&&l(o)}),[o,l]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"detail-table-container",children:n?(0,x.jsx)(R,{data:t,tokenData:a}):(0,x.jsx)(C.B8,{isLoading:r,headerElements:["rank","address","balance","% of Total Supply"],gridTemplate:"0.5fr 4fr 2fr 1fr",getHeader:e=>"balance"===e?(0,x.jsx)("div",{children:"AMOUNT"}):(0,x.jsx)("div",{children:e.toUpperCase()}),minItemHeight:30,getElement:(e,t,s)=>{switch(e){case"rank":return(0,x.jsx)("div",{children:s+1});case"address":return(0,x.jsx)(C.ii,{to:"/wallet/".concat(t.address),tooltip:"View wallet details",className:"clickable-address",children:t.address});case"balance":return(0,x.jsx)("div",{children:(0,y.ZV)((0,y.p9)(t.balance,a.dec),a.dec)});case"% of Total Supply":return(0,x.jsxs)("div",{children:[((0,y.p9)(t.balance,a.dec)/(0,y.p9)(a.max,a.dec)*100).toFixed(2),"%"]});default:return(0,x.jsx)("div",{children:t[e]})}},items:o})}),(0,x.jsxs)("p",{className:"mt-3 text-muted",children:["Note: Only top holders are displayed. The total number of holders is ",(0,y.ZV)(a.holderTotal,0),"."]})]})};var P=t(8628),M=t(4399),Z=t(5475),L=t(3156);const Q=e=>{let{tokenData:a,socials:t}=e;const s=e=>{switch(e){case"twitter":return(0,x.jsx)(C.k1,{src:"".concat(M.vt,"/twitter.svg"),alt:"twitter"});case"discord":return(0,x.jsx)(C.k1,{src:"".concat(M.vt,"/discord.svg"),alt:"discord"});case"telegram":return(0,x.jsx)(C.k1,{src:"".concat(M.vt,"/telegram.svg"),alt:"telegram"});default:return null===a.logo?(0,x.jsx)(L.kQE,{className:"small-thumbnail-image"}):(0,x.jsx)(C.k1,{src:"".concat(M.vt,"/thumbnails").concat(a.logo),alt:"website"})}};return(0,x.jsx)(P.A,{className:"token-info-card",children:(0,x.jsx)(P.A.Body,{children:(0,x.jsxs)("div",{className:"token-info-grid",children:[(0,x.jsx)("div",{className:"token-info-item-image",children:a.logo?(0,x.jsx)(C.Vz,{src:"".concat(M.vt,"/logos").concat(a.logo),alt:"".concat(a.tick,".jpg")}):(0,x.jsx)(L.kQE,{className:"thumbnail-image",style:{height:"fit-content",borderRadius:"unset"}})}),(0,x.jsxs)("div",{className:"token-info-item",children:[(0,x.jsx)("span",{className:"token-info-label",children:"Max Supply"}),(0,x.jsx)("span",{className:"token-info-value",children:(0,y.ZV)((0,y.p9)(a.max,a.dec),a.dec)})]}),(0,x.jsxs)("div",{className:"token-info-item",children:[(0,x.jsx)("span",{className:"token-info-label",children:"Total Minted"}),(0,x.jsx)("span",{className:"token-info-value",children:(0,y.ZV)((0,y.p9)(a.minted,a.dec),a.dec)})]}),(0,x.jsxs)("div",{className:"token-info-item",children:[(0,x.jsx)("span",{className:"token-info-label",children:"Limit per Mint"}),(0,x.jsx)("span",{className:"token-info-value",children:(0,y.ZV)((0,y.p9)(a.lim,a.dec),a.dec)})]}),(0,x.jsxs)("div",{className:"token-info-item",children:[(0,x.jsx)("span",{className:"token-info-label",children:"Total Mints"}),(0,x.jsx)("span",{className:"token-info-value",children:(0,y.ZV)(a.mintTotal,0)})]}),(0,x.jsxs)("div",{className:"token-info-item",children:[(0,x.jsx)("span",{className:"token-info-label",children:"Total Holders"}),(0,x.jsx)("span",{className:"token-info-value",children:(0,y.ZV)(a.holderTotal,0)})]}),(0,x.jsxs)("div",{className:"token-info-item",children:[(0,x.jsx)("span",{className:"token-info-label",children:"Total Transfers"}),(0,x.jsx)("span",{className:"token-info-value",children:(0,y.ZV)(a.transferTotal,0)})]}),(0,x.jsxs)("div",{className:"token-info-socials",children:[(0,x.jsx)("span",{className:"token-info-label",children:"Socials"}),(0,x.jsx)("div",{className:"token-info-socials-wrapper",children:Object.entries(t).map((e=>{let[a,t]=e;return(0,x.jsx)(Z.N_,{to:t,target:"_blank",referrerPolicy:"no-referrer",title:t,children:s(a)},a)}))})]})]})})})},W=["Top Holders","Recent Operations","Holder Distribution"],U=["General Info","Additional Info"],$=()=>{const{tokenId:e}=(0,l.g)(),[a,t]=(0,s.useState)([]),{isMobile:n}=(0,C.Iu)(),[o,r]=(0,s.useState)([]),[i,c]=(0,s.useState)(null),[d,h]=(0,s.useState)({}),{data:m,loading:p}=(0,F.s)({url:"".concat(M.$Q,"/token/detail/").concat(null!==e&&void 0!==e?e:""),avoidLoading:!e,defaultValue:null,errorMessage:"Failed to fetch token details, is the TICK correct?"});if((0,s.useEffect)((()=>{if(m&&e){if(!m)throw new Error("No data returned from API");h(m.socials?JSON.parse(m.socials):{})}}),[m,e]),p)return(0,x.jsx)(C.kt,{});if(!m)return(0,x.jsx)(D,{variant:"warning",children:"No data available"});const j={"@context":"https://schema.org","@type":"WebPage",name:"".concat(m.tick," Token Details | KatScan"),description:"Detailed information about the KRC-20 token ".concat(m.tick," on the Kaspa blockchain."),url:"https://katscan.xyz/tokens/".concat(null!==e&&void 0!==e?e:"")};return(0,x.jsx)(C.YW,{header:"Token Details: ".concat((0,S.x)(m.tick)),additionalHeaderComponent:(0,x.jsxs)("span",{className:"creation-date",children:["Deployed on ",(0,y.r6)(m.mtsAdd)]}),children:(0,x.jsxs)("div",{className:"token-detail",children:[(0,x.jsx)(C.Zn,{data:j}),(0,x.jsx)(C.kW,{title:"Token Details",description:"Explore detailed information about a specific KRC-20 token on the Kaspa blockchain.",keywords:"KRC-20, Kaspa, token details, blockchain explorer, token information"}),n?(0,x.jsxs)(C.QE,{titles:U,children:[(0,x.jsx)(Q,{tokenData:m,socials:d}),(0,x.jsxs)(C.QE,{titles:W,children:[(0,x.jsx)(G,{tokenData:m,holderData:a,setHolderData:t}),(0,x.jsx)(O,{tokenData:m,tokenId:e,setOperations:r,operations:o,operationsCursor:i,setOperationsCursor:c}),(0,x.jsx)(I,{tokenData:m,tokenHolder:a})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Q,{tokenData:m,socials:d}),(0,x.jsxs)(C.QE,{titles:W,children:[(0,x.jsx)(G,{tokenData:m,holderData:a,setHolderData:t}),(0,x.jsx)(O,{tokenData:m,tokenId:e,setOperations:r,operations:o,operationsCursor:i,setOperationsCursor:c}),(0,x.jsx)(I,{tokenData:m,tokenHolder:a})]})]})]})})}},9308:(e,a,t)=>{t.d(a,{CV:()=>r,IT:()=>i,mJ:()=>o});var s=t(7812),l=t(4399);const n="https://api.kasplex.org/v1",o=async e=>{try{return await(0,s.M$)("".concat(l.$Q,"/token/detail/").concat(e))}catch(a){throw console.error("Error fetching token details:",a),a}},r=async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;try{const l={tick:e,limit:a.toString()};return t&&(l.next=t),(0,s.w$)({method:"GET",url:"".concat(n,"/krc20/oplist"),params:l})}catch(l){throw console.error("Error fetching token operations:",l),l}},i=async e=>{try{return(await(0,s.M$)("".concat(l.$Q,"/token/detail/").concat(e))).result}catch(a){throw console.error("Error fetching detailed token information:",a),a}}},3202:(e,a,t)=>{t.d(a,{x:()=>s});const s=e=>({NIGGA:"N***A",NIGGAS:"N****S",NIGGER:"N****R",RETARD:"R****D",FAG:"F**",FAGS:"F**S",FAGGOT:"F****T",DYKE:"D**E",DYKES:"D**ES",TRANNY:"T****Y",SPIC:"S**C",SPICS:"S**CS",KIKE:"K**E",KIKES:"K***S",CHINK:"C***K",CHINKS:"C***KS",GOOK:"G**K",GOOKS:"G**KS",WOP:"W**",WOPS:"W**S",TARD:"T**D"}[e]||e)},3341:()=>{}}]);
//# sourceMappingURL=533.5d8bf688.chunk.js.map