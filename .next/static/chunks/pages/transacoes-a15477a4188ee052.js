(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{6422:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transacoes",function(){return t(2804)}])},2804:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var s=t(5893),n=t(7294),r=t(8159),c=t.n(r),o=a=>{let{onAddTransacao:e}=a,[t,r]=(0,n.useState)(""),[o,l]=(0,n.useState)(""),[i,d]=(0,n.useState)(""),[u,_]=(0,n.useState)("");return(0,s.jsxs)("div",{className:c().formCard,children:[(0,s.jsx)("h3",{className:c().cardHeader,children:"Adicionar transa\xe7\xe3o"}),(0,s.jsxs)("div",{className:c().tipoButtons,children:[(0,s.jsx)("button",{type:"button",onClick:()=>d("Receita"),className:"Receita"===i?c().active:"",children:"Receita"}),(0,s.jsx)("button",{type:"button",onClick:()=>d("Despesa"),className:"Despesa"===i?c().active:"",children:"Despesa"})]}),(0,s.jsxs)("label",{className:c().cardLabel,children:["Descri\xe7\xe3o:",(0,s.jsx)("input",{type:"text",value:t,onChange:a=>r(a.target.value),className:c().cardInput})]}),(0,s.jsxs)("label",{className:c().cardLabel,children:["Valor:",(0,s.jsx)("input",{type:"number",value:o,onChange:a=>l(a.target.value),className:c().cardInput})]}),(0,s.jsxs)("label",{className:c().cardLabel,children:["Data:",(0,s.jsx)("input",{type:"date",value:u,onChange:a=>_(a.target.value),className:c().cardInput})]}),(0,s.jsx)("button",{type:"submit",onClick:a=>{if(a.preventDefault(),!t||!o||!i||!u)return;let s={descricao:t,valor:parseFloat(o),tipo:i,date:u};e(s),r(""),l(""),d(""),_("")},className:c().cardButton,children:"+ Adicionar"})]})},l=t(8944),i=t.n(l),d=a=>{let{transacoes:e,onExcluirTransacao:t}=a;return(0,s.jsxs)("div",{className:i().listTrasancao,children:[(0,s.jsx)("h2",{className:i().title,children:"Extrato"}),(0,s.jsx)("div",{className:i().tableContainer,children:(0,s.jsxs)("table",{className:"".concat(i().transacaoTable," ").concat(i().tableStyles),children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Descri\xe7\xe3o"}),(0,s.jsx)("th",{children:"Tipo"}),(0,s.jsx)("th",{children:"Data"}),(0,s.jsx)("th",{children:"Valor"}),(0,s.jsx)("th",{})]})}),(0,s.jsx)("tbody",{children:e.map((a,e)=>(0,s.jsxs)("tr",{className:"Receita"===a.tipo?i().rowReceita:i().rowDespesa,children:[(0,s.jsx)("td",{children:a.descricao}),(0,s.jsx)("td",{children:a.tipo}),(0,s.jsx)("td",{children:a.date}),(0,s.jsx)("td",{children:"Despesa"===a.tipo?"-R$".concat(Math.abs(a.valor)):"R$".concat(a.valor)}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{onClick:()=>t(e),className:i().buttonDelete})})]},e))})]})})]})},u=t(1203),_=t.n(u),h=t(9008),x=t.n(h),m=t(1664),j=t.n(m),p=()=>{let[a,e]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let a=JSON.parse(localStorage.getItem("transacoes"))||[];e(a)},[]),(0,s.jsxs)("div",{className:_().container,children:[(0,s.jsxs)(x(),{children:[(0,s.jsx)("title",{children:"Transa\xe7\xf5es"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,s.jsx)(j(),{href:"/dashboard",children:(0,s.jsx)("button",{className:_().backButton,children:"Voltar ao Dashboard"})}),(0,s.jsxs)("div",{className:_().content,children:[(0,s.jsx)(o,{onAddTransacao:t=>{let s=[...a,t];e(s),localStorage.setItem("transacoes",JSON.stringify(s))}}),(0,s.jsx)(d,{transacoes:a,onExcluirTransacao:t=>{let s=a.filter((a,e)=>e!==t);e(s),localStorage.setItem("transacoes",JSON.stringify(s))}})]})]})}},8159:function(a){a.exports={formCard:"FormularioTransacoes_formCard__WDhfW",cardHeader:"FormularioTransacoes_cardHeader__ULg1f",cardLabel:"FormularioTransacoes_cardLabel__kmmNr",cardInput:"FormularioTransacoes_cardInput__S7Y3L",cardButton:"FormularioTransacoes_cardButton__tjGJk",tipoButtons:"FormularioTransacoes_tipoButtons__kPueR",active:"FormularioTransacoes_active__sM3H5"}},8944:function(a){a.exports={title:"ListaTransacoes_title___zYgo",tableContainer:"ListaTransacoes_tableContainer__8kz6T",transacaoTable:"ListaTransacoes_transacaoTable__s2NiP",rowReceita:"ListaTransacoes_rowReceita__i_vIv",rowDespesa:"ListaTransacoes_rowDespesa__m71vD",buttonDelete:"ListaTransacoes_buttonDelete__5iXw3"}},1203:function(a){a.exports={container:"Transacoes_container__C1QLS",content:"Transacoes_content__f0h28",backButton:"Transacoes_backButton__wCzXc"}}},function(a){a.O(0,[996,774,888,179],function(){return a(a.s=6422)}),_N_E=a.O()}]);