"use strict";(self.webpackChunkkatscan=self.webpackChunkkatscan||[]).push([[225],{628:(e,a,c)=>{c.d(a,{A:()=>o});var t=c(5043),s=c(3536),r=c(3156),n=c(7812),l=c(579);const o=e=>{let{data:a,hasSearch:c,onSelect:o,placeholder:i}=e;const d=(0,t.useRef)(null),[p,h]=(0,t.useState)(""),[m,u]=(0,t.useState)(!1),x=(0,t.useRef)(null),k=(0,s.debounce)((e=>h(e)),10),j=e=>{var a;e.stopPropagation(),e.preventDefault(),u(!1),null===(a=x.current)||void 0===a||a.close()},y=(0,t.useMemo)((()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{type:"text",className:"search-input",placeholder:i,onChange:c?e=>k(e.currentTarget.value):void 0,value:p}),(0,l.jsxs)("div",{className:"search-icon-wrapper",children:[""!==p&&(0,l.jsx)("div",{className:"search-reset-wrapper",onClick:()=>h(""),children:(0,l.jsx)(r.GWt,{size:15})}),(0,l.jsx)("div",{className:"search-arrow-wrapper",onClick:m?j:void 0,children:(0,l.jsx)(r.Vr3,{className:"search-arrow",size:15})})]})]})),[m,k,c,i,p]),g=(0,t.useMemo)((()=>c&&""!==p?a.filter((e=>e.label.toUpperCase().includes(p.toUpperCase()))):a),[a,c,p]),N=(0,t.useCallback)((()=>u(!0)),[]);return(0,l.jsx)("div",{ref:d,className:"custom-search-select",children:(0,l.jsxs)(n.bs,{title:y,stayOpen:!0,fitHeader:!0,onOpen:N,className:"select-custom-dropdown",ref:x,children:[g.map(((e,a)=>(0,l.jsx)(n.OW,{onClick:a=>((e,a)=>{var c;e.preventDefault(),e.stopPropagation(),h(a.label),o(a),null===(c=x.current)||void 0===c||c.close(),console.log(a)})(a,e),children:e.label},a))),0===g.length&&(0,l.jsx)("div",{className:"no-data",children:"No Data"})]})})}},2225:(e,a,c)=>{c.r(a),c.d(a,{default:()=>w});var t=c(9379),s=c(5043),r=c(3519),n=c(1072),l=c(8602),o=c(3722),i=c(8628),d=c(4282),p=c(3216),h=c(7200),m=c(3910),u=c(7929),x=c(9308),k=c(7812);const j="https://api.coingecko.com/api/v3",y={accept:"application/json","x-cg-demo-api-key":"CG-f8E4yaD4zQYKtqHawS59TAnY"};var g=c(3202),N=c(4179),f=c(6502),C=c(591),S=c(628),A=c(579);const b={"@context":"https://schema.org","@type":"WebApplication",name:"KatScan Market Cap Calculator",description:"Calculate and compare market caps of KRC-20 tokens on the Kaspa network.",url:"https://katscan.xyz/marketcap-calc"},w=()=>{const[e,a]=(0,s.useState)([]),[c,w]=(0,s.useState)(null),[v,T]=(0,s.useState)(null),[K,E]=(0,s.useState)(null),[G,R]=(0,s.useState)(!1),[D,M]=(0,s.useState)(null),{data:P}=(0,C.s)({url:"/token/tickers"}),I=(0,p.Zp)();(0,s.useEffect)((()=>{P&&0!==P.length&&a(P.map((e=>({value:e,label:(0,g.x)(e),tick:e}))))}),[P]);(0,s.useEffect)((()=>{if(!c)return;(async e=>{try{const a=await(0,x.IT)(e);M(a)}catch(a){console.error("Error fetching detailed token info:",a)}})(c.value)}),[c]),(0,s.useEffect)((()=>{if(c&&v&&D){R(!0);(async()=>{try{const e=await(async e=>{try{return(0,k.W5)({method:"GET",url:"".concat(j,"/coins/").concat(e),params:void 0,headers:y})}catch(a){throw console.error("Error fetching cryptocurrency data:",a),a}})(v.value),a=D.max/Math.pow(10,D.dec),c=e.market_data.market_cap.usd,s=c/a;E({krc20Token:(0,t.A)((0,t.A)({},D),{},{holderTotal:D.holderTotal}),crypto:(0,t.A)((0,t.A)((0,t.A)({},v),e),{},{maxSupply:e.market_data.max_supply,marketCap:c,currentPrice:e.market_data.current_price.usd}),calculatedPrice:s,krc20Supply:a,cryptoMarketCap:c})}catch(e){console.error("Error calculating market cap:",e),(0,f.I)("error","Failed to calculate market cap. Please try again.")}finally{R(!1)}})()}}),[D,v,c]);return(0,A.jsx)(k.YW,{header:"MarketCap Calculator",children:(0,A.jsxs)(r.A,{fluid:!0,className:"market-cap-calculator",children:[(0,A.jsx)(k.kW,{title:"Market Cap Calculator",description:"Calculate and compare market caps of KRC-20 tokens on the Kaspa network.",keywords:"KRC-20, Kaspa, market cap, calculator, cryptocurrency"}),(0,A.jsx)(k.Zn,{data:b}),(0,A.jsx)(n.A,{className:"justify-content-center",children:(0,A.jsxs)(l.A,{md:10,lg:8,children:[(0,A.jsxs)(n.A,{className:"mb-4",children:[(0,A.jsx)(l.A,{md:6,children:(0,A.jsxs)(o.A.Group,{children:[(0,A.jsx)(o.A.Label,{children:"Select KRC20 Token"}),(0,A.jsx)(S.A,{placeholder:"Select KRC20 Token",data:e,hasSearch:!0,onSelect:w})]})}),(0,A.jsx)(l.A,{md:6,children:(0,A.jsxs)(o.A.Group,{children:[(0,A.jsx)(o.A.Label,{children:"Select Cryptocurrency"}),(0,A.jsx)(h.A,{cacheOptions:!0,loadOptions:async e=>{if(e.length>1)try{return await(async e=>{try{return(await(0,k.W5)({method:"GET",url:"".concat(j,"/search"),params:{query:e},headers:y})).coins.map((e=>(0,t.A)({value:e.id,label:"".concat(e.name," (").concat(e.symbol.toUpperCase(),")")},e)))}catch(a){throw console.error("Error searching cryptocurrencies:",a),a}})(e)}catch(a){return console.error("Error searching cryptocurrencies:",a),[]}return[]},onChange:T,placeholder:"Start typing a cryptocurrency on CoinGecko"})]})})]}),G&&(0,A.jsx)(k.kt,{}),K&&(0,A.jsxs)("div",{className:"calculation-result",children:[(0,A.jsx)("h4",{className:"text-center mb-4",children:"Calculation Result"}),(0,A.jsxs)(n.A,{children:[(0,A.jsx)(l.A,{md:6,className:"mb-4",children:(0,A.jsx)(i.A,{className:"h-100 token-card krc20-card",children:(0,A.jsxs)(i.A.Body,{children:[(0,A.jsxs)("h5",{className:"text-center",children:[(0,g.x)(K.krc20Token.tick)," (KRC20 Token)"]}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsxs)("li",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,A.jsxs)("span",{children:[(0,A.jsx)(m.g,{icon:u.wq_,className:"me-2 text-primary"})," Max Supply:"]}),(0,A.jsx)("strong",{children:(0,N.ZV)(K.krc20Supply)})]}),(0,A.jsxs)("li",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,A.jsxs)("span",{children:[(0,A.jsx)(m.g,{icon:u.gdJ,className:"me-2 text-primary"})," Total Holders:"]}),(0,A.jsx)("strong",{children:(0,N.Sm)(K.krc20Token.holderTotal)})]}),(0,A.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,A.jsxs)("span",{children:[(0,A.jsx)(m.g,{icon:u.gK3,className:"me-2 text-primary"})," Total Minted:"]}),(0,A.jsx)("strong",{children:(0,N.ZV)(K.krc20Token.minted/Math.pow(10,K.krc20Token.dec||0))})]})]}),(0,A.jsx)("div",{className:"text-center mt-3",children:(0,A.jsxs)(d.A,{variant:"primary",onClick:()=>{K&&K.krc20Token&&I("/tokens/".concat(K.krc20Token.tick))},className:"details-button",children:[(0,A.jsx)(m.g,{icon:u.AaJ,className:"me-2"}),(0,g.x)(K.krc20Token.tick)," Details"]})})]})})}),(0,A.jsx)(l.A,{md:6,className:"mb-4",children:(0,A.jsx)(i.A,{className:"h-100 token-card coingecko-card",children:(0,A.jsxs)(i.A.Body,{children:[(0,A.jsxs)("h5",{className:"text-center",children:[K.crypto.symbol.toUpperCase()," (CoinGecko)"]}),(0,A.jsxs)("ul",{className:"list-unstyled",children:[(0,A.jsxs)("li",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,A.jsxs)("span",{children:[(0,A.jsx)(m.g,{icon:u.wq_,className:"me-2 text-success"})," Max Supply:"]}),(0,A.jsx)("strong",{children:K.crypto.maxSupply?(0,N.ZV)(K.crypto.maxSupply):"N/A"})]}),(0,A.jsxs)("li",{className:"d-flex justify-content-between align-items-center mb-2",children:[(0,A.jsxs)("span",{children:[(0,A.jsx)(m.g,{icon:u.Vpi,className:"me-2 text-success"})," Current Price:"]}),(0,A.jsxs)("strong",{children:["$",(0,N.ZV)(K.crypto.currentPrice,6)]})]}),(0,A.jsxs)("li",{className:"d-flex justify-content-between align-items-center",children:[(0,A.jsxs)("span",{children:[(0,A.jsx)(m.g,{icon:u.gK3,className:"me-2 text-success"})," Market Cap:"]}),(0,A.jsxs)("strong",{children:["$",(0,N.ZV)(K.crypto.marketCap)]})]})]}),(0,A.jsx)("div",{className:"text-center mt-3",children:(0,A.jsxs)(d.A,{variant:"success",onClick:()=>{K&&K.crypto&&window.open("https://www.coingecko.com/en/coins/".concat(K.crypto.id),"_blank")},className:"details-button",children:[(0,A.jsx)(m.g,{icon:u.AaJ,className:"me-2"}),K.crypto.symbol.toUpperCase()," Details"]})})]})})})]}),(0,A.jsx)(k.gJ,{title:"Hypothetical ".concat((0,g.x)(K.krc20Token.tick)," Price"),titleProps:{className:"mt-4 text-center fw-bold"},children:(0,A.jsxs)(i.A.Body,{className:"text-center",children:[(0,A.jsx)("h5",{}),(0,A.jsx)("p",{className:"lead mb-3",children:"If ".concat((0,g.x)(K.krc20Token.tick)," had ").concat(K.crypto.symbol.toUpperCase(),"'s\n                                        market cap:")}),(0,A.jsxs)("h3",{className:"text-success price-highlight mb-3",children:[(0,A.jsx)(m.g,{icon:u.Vpi,className:"me-2"}),(0,N.ZV)(K.calculatedPrice,6)]}),(0,A.jsxs)("p",{className:"text-muted disclaimer mb-0",children:[(0,A.jsx)(m.g,{icon:u.iW_,className:"me-2"}),"This is a hypothetical price based on current market conditions and should not be considered as financial advice."]})]})})]})]})})]})})}},9308:(e,a,c)=>{c.d(a,{CV:()=>l,IT:()=>o,mJ:()=>n});var t=c(7812),s=c(4399);const r="https://api.kasplex.org/v1",n=async e=>{try{return await(0,t.M$)("".concat(s.$Q,"/token/detail/").concat(e))}catch(a){throw console.error("Error fetching token details:",a),a}},l=async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;try{const s={tick:e,limit:a.toString()};return c&&(s.next=c),(0,t.w$)({method:"GET",url:"".concat(r,"/krc20/oplist"),params:s})}catch(s){throw console.error("Error fetching token operations:",s),s}},o=async e=>{try{return(await(0,t.M$)("".concat(s.$Q,"/token/detail/").concat(e))).result}catch(a){throw console.error("Error fetching detailed token information:",a),a}}},3202:(e,a,c)=>{c.d(a,{x:()=>t});const t=e=>({NIGGA:"N***A",NIGGAS:"N****S",NIGGER:"N****R",RETARD:"R****D",FAG:"F**",FAGS:"F**S",FAGGOT:"F****T",DYKE:"D**E",DYKES:"D**ES",TRANNY:"T****Y",SPIC:"S**C",SPICS:"S**CS",KIKE:"K**E",KIKES:"K***S",CHINK:"C***K",CHINKS:"C***KS",GOOK:"G**K",GOOKS:"G**KS",WOP:"W**",WOPS:"W**S",TARD:"T**D"}[e]||e)}}]);
//# sourceMappingURL=225.6e6d06cf.chunk.js.map