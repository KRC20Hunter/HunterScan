"use strict";(self.webpackChunkkatscan=self.webpackChunkkatscan||[]).push([[856],{2856:(e,a,t)=>{t.r(a),t.d(a,{Home:()=>h,default:()=>x});var s=t(5043),c=t(3519),o=t(1072),n=t(8602),l=t(8628),r=t(5475),i=t(184),m=t(7812),d=t(579);const k={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"http://localhost:9000",REACT_APP_BASE_API_URL:"http://localhost:9000/api"}.REACT_APP_API_BASE_URL||"https://api.kasplex.org/v1",p={"@context":"https://schema.org","@type":"WebPage",name:"KatScan Home",description:"Explore KRC-20 tokens on the Kaspa blockchain",url:"https://katscan.xyz"},h=()=>{const[e,a]=(0,s.useState)({opTotal:"0",tokenTotal:"0",feeTotal:"0"}),[t,h]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(0,m.M$)("".concat(k,"/info")).then((e=>{const{opTotal:t,tokenTotal:s,feeTotal:c}=e.result;a({opTotal:new Intl.NumberFormat("en-US").format(t),tokenTotal:new Intl.NumberFormat("en-US").format(s),feeTotal:new Intl.NumberFormat("en-US").format(parseFloat((c/1e8).toFixed(0)))})})).catch((e=>console.error("Error fetching network stats:",e))),(0,m.M$)("".concat(k,"/krc20/tokenlist")).then((e=>{const a=e.result.sort(((e,a)=>Number(a.mtsAdd)-Number(e.mtsAdd)));h(a.slice(0,6))})).catch((e=>console.error("Error fetching recent tokens:",e)))}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.Zn,{data:p}),(0,d.jsxs)(c.A,{fluid:!0,className:"home-container d-flex flex-column vh-100",children:[(0,d.jsx)(m.kW,{title:"Home",description:"Explore, analyze, and compare KRC-20 tokens on the Kaspa blockchain with KatScan. Real-time data and insights for crypto enthusiasts and investors.",keywords:"KRC-20, KRC20, KatScan, Kaspa, blockdag, kaspa explorer, krc20 explorer, kasplex explorer, kaspa blockchain, krc20 blockchain, kaspa tokens, krc20 tokens, kaspa transactions, krc20 transactions, kaspa statistics, krc20 statistics, kaspa network, krc20 network, kaspa development, krc20 development, kaspa statistics, krc20 statistics, kaspa network, krc20 network, kaspa development, krc20 development"}),(0,d.jsx)(o.A,{className:"header-section py-2",children:(0,d.jsxs)(n.A,{children:[(0,d.jsx)("h1",{className:"text-center mb-0",children:"KatScan"}),(0,d.jsx)("p",{className:"text-center small mb-0",children:"Explore, Analyze, and Compare KRC-20 Token Data"})]})}),(0,d.jsx)(o.A,{className:"mb-3",children:(0,d.jsxs)(n.A,{children:[(0,d.jsx)("h5",{className:"section-title mb-2",children:"Key Features"}),(0,d.jsxs)(o.A,{className:"mb-2",children:[(0,d.jsx)(m.dd,{title:"All Tokens",icon:(0,d.jsx)(i.cEG,{className:"feature-icon"}),link:"/tokens"}),(0,d.jsx)(m.dd,{title:"Address Lookup",icon:(0,d.jsx)(i.lcY,{className:"feature-icon"}),link:"/wallet"}),(0,d.jsx)(m.dd,{title:"Token Comparison",icon:(0,d.jsx)(i.yk7,{className:"feature-icon"}),link:"/compare"})]}),(0,d.jsxs)(o.A,{className:"mb-3",children:[(0,d.jsx)(m.dd,{title:"Top Holders",icon:(0,d.jsx)(i.YXz,{className:"feature-icon"}),link:"/top-holders"}),(0,d.jsx)(m.dd,{title:"Mint Heatmap",icon:(0,d.jsx)(i.v$b,{className:"feature-icon"}),link:"/mint-heatmap"}),(0,d.jsx)(m.dd,{title:"MarketCap Calculator",icon:(0,d.jsx)(i.Ani,{className:"feature-icon"}),link:"/marketcap-calc"})]}),(0,d.jsx)("h5",{className:"section-title mb-2",children:"Kasplex Statistics"}),(0,d.jsxs)(o.A,{className:"mb-4",children:[(0,d.jsx)(m.hI,{title:"Total KRC20 Transactions",value:e.opTotal,icon:(0,d.jsx)(i.yk7,{className:"stat-icon"})}),(0,d.jsx)(m.hI,{title:"Total KRC20 Tokens Deployed",value:e.tokenTotal,icon:(0,d.jsx)(i.cEG,{className:"stat-icon"})}),(0,d.jsx)(m.hI,{title:"Total Fees Paid (KAS)",value:e.feeTotal,icon:(0,d.jsx)(i.lcY,{className:"stat-icon"})})]}),(0,d.jsx)("h5",{className:"section-title mb-2",children:"Recently Deployed Tokens"}),(0,d.jsx)(o.A,{children:t.map((e=>(0,d.jsx)(n.A,{xs:4,className:"mb-4",children:(0,d.jsx)(l.A,{className:"token-card h-100",as:r.N_,to:"/tokens/".concat(e.tick),children:(0,d.jsxs)(l.A.Body,{className:"p-2",children:[(0,d.jsx)(l.A.Title,{className:"small mb-1",children:e.tick}),(0,d.jsxs)(l.A.Text,{className:"small mb-0",children:["Max: ",new Intl.NumberFormat("en-US",{notation:"compact"}).format(e.max/Math.pow(10,e.dec))]}),(0,d.jsxs)(l.A.Text,{className:"small mb-0",children:["Minted: ",new Intl.NumberFormat("en-US",{notation:"compact"}).format(e.minted/Math.pow(10,e.dec))]})]})})},e.hashRev)))})]})})]})]})},x=h},1072:(e,a,t)=>{t.d(a,{A:()=>k});var s=t(9379),c=t(45),o=t(8139),n=t.n(o),l=t(5043),r=t(7852),i=t(579);const m=["bsPrefix","className","as"],d=l.forwardRef(((e,a)=>{let{bsPrefix:t,className:o,as:l="div"}=e,d=(0,c.A)(e,m);const k=(0,r.oU)(t,"row"),p=(0,r.gy)(),h=(0,r.Jm)(),x="".concat(k,"-cols"),j=[];return p.forEach((e=>{const a=d[e];let t;delete d[e],null!=a&&"object"===typeof a?({cols:t}=a):t=a;const s=e!==h?"-".concat(e):"";null!=t&&j.push("".concat(x).concat(s,"-").concat(t))})),(0,i.jsx)(l,(0,s.A)((0,s.A)({ref:a},d),{},{className:n()(o,k,...j)}))}));d.displayName="Row";const k=d}}]);
//# sourceMappingURL=856.11a0578f.chunk.js.map