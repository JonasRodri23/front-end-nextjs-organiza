(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1075:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(1465)}])},1465:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return es}});var s={};n.r(s),n.d(s,{z:function(){return N}});var i=n(5893),t=n(7294),o=n(948),a=n(1265),l=n(2430),c=n(5296),d=n(2837),x=n(7357),h=n(2293),p=n(155),j=n(8462),u=n(5861),Z=n(1519),f=n(3946),m=n(4948),g=n(3156),y=n(6886),b=n(629),v=n(326),w=n(9572),k=n(5817),C=n(6113),S=n(796),P=n(9953),M=n(5709),D=n(5498),_=n(2403),I=n(6857),R=n(9123);let N=(0,i.jsxs)(t.Fragment,{children:[(0,i.jsxs)(C.Z,{to:"/dashboard",children:[(0,i.jsx)(S.Z,{children:(0,i.jsx)(M.Z,{})}),(0,i.jsx)(P.Z,{primary:"Dashboard"})]}),(0,i.jsxs)(C.Z,{to:"/transacoes",children:[(0,i.jsx)(S.Z,{children:(0,i.jsx)(_.Z,{})}),(0,i.jsx)(P.Z,{primary:"Transa\xe7\xf5es"})]}),(0,i.jsxs)(C.Z,{to:"/orcamentos",children:[(0,i.jsx)(S.Z,{children:(0,i.jsx)(I.Z,{})}),(0,i.jsx)(P.Z,{primary:"Or\xe7amentos"})]}),(0,i.jsxs)(C.Z,{to:"/investimentos",children:[(0,i.jsx)(S.Z,{children:(0,i.jsx)(D.Z,{})}),(0,i.jsx)(P.Z,{primary:"Investimentos"})]}),(0,i.jsxs)(C.Z,{to:"/notificacoes",children:[(0,i.jsx)(S.Z,{children:(0,i.jsx)(k.Z,{})}),(0,i.jsx)(P.Z,{primary:"Notifica\xe7\xf5es"})]}),(0,i.jsxs)(C.Z,{to:"/",children:[(0,i.jsx)(S.Z,{children:(0,i.jsx)(R.Z,{})}),(0,i.jsx)(P.Z,{primary:"Sair"})]})]});var T=n(3795),E=n(5697),B=n.n(E);function A(e){return(0,i.jsx)(u.Z,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function z(e){e.preventDefault()}function F(){return(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)(A,{children:"Recent Deposits"}),(0,i.jsx)(u.Z,{component:"p",variant:"h4",children:"$3,024.00"}),(0,i.jsx)(u.Z,{color:"text.secondary",sx:{flex:1},children:"on 15 March, 2019"}),(0,i.jsx)("div",{children:(0,i.jsx)(T.Z,{color:"primary",href:"#",onClick:z,children:"View balance"})})]})}A.propTypes={children:B().node};var O=n(7906),V=n(295),L=n(3252),W=n(3184),X=n(3816);function G(e,r,n,s,i,t){return{id:e,date:r,name:n,shipTo:s,paymentMethod:i,amount:t}}let J=[G(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA ⠀•••• 3719",312.44),G(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA ⠀•••• 2574",866.99),G(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC ⠀•••• 1253",100.81),G(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX ⠀•••• 2000",654.39),G(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA ⠀•••• 5919",212.79)];function H(e){e.preventDefault()}function $(){return(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)(A,{children:"Recent Orders"}),(0,i.jsxs)(O.Z,{size:"small",children:[(0,i.jsx)(W.Z,{children:(0,i.jsxs)(X.Z,{children:[(0,i.jsx)(L.Z,{children:"Date"}),(0,i.jsx)(L.Z,{children:"Name"}),(0,i.jsx)(L.Z,{children:"Ship To"}),(0,i.jsx)(L.Z,{children:"Payment Method"}),(0,i.jsx)(L.Z,{align:"right",children:"Sale Amount"})]})}),(0,i.jsx)(V.Z,{children:J.map(e=>(0,i.jsxs)(X.Z,{children:[(0,i.jsx)(L.Z,{children:e.date}),(0,i.jsx)(L.Z,{children:e.name}),(0,i.jsx)(L.Z,{children:e.shipTo}),(0,i.jsx)(L.Z,{children:e.paymentMethod}),(0,i.jsx)(L.Z,{align:"right",children:"$".concat(e.amount)})]},e.id))})]}),(0,i.jsx)(T.Z,{color:"primary",href:"#",onClick:H,sx:{mt:3},children:"See more orders"})]})}var K=n(9085),U=e=>{let{transacoes:r}=e,n=(0,t.useRef)(null),s=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let e=n.current;s.current&&s.current.destroy();let i=r.reduce((e,r)=>{let n=r.date,s=r.valor;return e[n]||(e[n]={receitas:0,despesas:0}),"Receita"===r.tipo?e[n].receitas+=s:e[n].despesas-=s,e},{}),t=Object.keys(i),o=t.map(e=>i[e].receitas),a=t.map(e=>i[e].despesas);s.current=new K.ZP(e,{type:"line",data:{labels:t,datasets:[{label:"Receitas",data:o,barThickness:40,borderColor:"#00ff00",borderWidth:2,pointBackgroundColor:"#00ff00",pointBorderColor:"#00ff00",pointRadius:3,pointHoverRadius:5,tension:.4,backgroundColor:"#00ff00"},{label:"Despesas",data:a,barThickness:40,borderColor:"#ff0000",borderWidth:2,pointBackgroundColor:"#ff0000",pointBorderColor:"#ff0000",pointRadius:3,pointHoverRadius:5,tension:.4,backgroundColor:"#ff0000"}]},options:{scales:{x:{title:{display:!0,text:"Data",color:"#000000"},grid:{color:"rgba(255, 255, 255, 0.1)"}},y:{beginAtZero:!0,title:{display:!0,text:"Valor",color:"#000000"},grid:{color:"rgba(255, 255, 255, 0.1)"},ticks:{color:"#000000"}}},plugins:{legend:{labels:{color:"#000000"}}}}})},[r]),(0,i.jsx)("canvas",{ref:n,width:400,height:200})};let q=(0,o.ZP)(h.Z,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:r,open:n}=e;return{zIndex:r.zIndex.drawer+1,transition:r.transitions.create(["width","margin"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen}),backgroundColor:"#272545",color:"#ffffff",fontFamily:"'Inter', sans-serif",...n&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:r.transitions.create(["width","margin"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen})}}}),Q=(0,o.ZP)(d.ZP,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:r,open:n}=e;return{"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:240,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen}),boxSizing:"border-box",...!n&&{overflowX:"hidden",transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen}),width:r.spacing(7),[r.breakpoints.up("sm")]:{width:r.spacing(9)}}}}}),Y=(0,a.Z)();function ee(){let[e,r]=t.useState(!0),n=()=>{r(!e)},[o,a]=(0,t.useState)([]);return(0,t.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("transacoes"))||[];a(e)},[]),(0,i.jsx)(l.Z,{theme:Y,children:(0,i.jsxs)(x.Z,{sx:{display:"flex"},children:[(0,i.jsx)(c.ZP,{}),(0,i.jsx)(q,{position:"absolute",open:e,children:(0,i.jsxs)(p.Z,{sx:{pr:"24px"},children:[(0,i.jsx)(f.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:n,sx:{marginRight:"36px",...e&&{display:"none"}},children:(0,i.jsx)(v.Z,{})}),(0,i.jsx)(u.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Dashboard"}),(0,i.jsx)(f.Z,{color:"inherit",children:(0,i.jsx)(m.Z,{badgeContent:4,color:"secondary",children:(0,i.jsx)(k.Z,{})})})]})}),(0,i.jsxs)(Q,{variant:"permanent",open:e,children:[(0,i.jsx)(p.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:(0,i.jsx)(f.Z,{onClick:n,children:(0,i.jsx)(w.Z,{})})}),(0,i.jsx)(Z.Z,{}),(0,i.jsxs)(j.Z,{component:"nav",children:[N,(0,i.jsx)(Z.Z,{sx:{my:1}}),s.secondaryListItems]})]}),(0,i.jsxs)(x.Z,{component:"main",sx:{backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,i.jsx)(p.Z,{}),(0,i.jsx)(g.Z,{maxWidth:"lg",sx:{mt:4,mb:4},children:(0,i.jsxs)(y.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(y.ZP,{item:!0,xs:12,md:7,lg:7,children:(0,i.jsx)(b.Z,{sx:{p:2,display:"flex",flexDirection:"column",height:350},children:(0,i.jsx)(U,{transacoes:o})})}),(0,i.jsx)(y.ZP,{item:!0,xs:12,md:4,lg:3,children:(0,i.jsx)(b.Z,{sx:{p:2,display:"flex",flexDirection:"column",height:240},children:(0,i.jsx)(F,{})})}),(0,i.jsx)(y.ZP,{item:!0,xs:12,children:(0,i.jsx)(b.Z,{sx:{p:2,display:"flex",flexDirection:"column"},children:(0,i.jsx)($,{})})})]})})]})]})})}var er=n(9008),en=n.n(er);function es(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(en(),{children:(0,i.jsx)("title",{children:"Dashboard"})}),(0,i.jsx)(ee,{})]})}}},function(e){e.O(0,[196,113,797,774,888,179],function(){return e(e.s=1075)}),_N_E=e.O()}]);