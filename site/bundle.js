(()=>{var Ze=Object.create;var ne=Object.defineProperty;var Oe=Object.getOwnPropertyDescriptor;var $e=Object.getOwnPropertyNames;var Re=Object.getPrototypeOf,er=Object.prototype.hasOwnProperty;var $=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var rr=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of $e(r))!er.call(e,o)&&o!==n&&ne(e,o,{get:()=>r[o],enumerable:!(t=Oe(r,o))||t.enumerable});return e};var a=(e,r,n)=>(n=e!=null?Ze(Re(e)):{},rr(r||!e||!e.__esModule?ne(n,"default",{value:e,enumerable:!0}):n,e));var s=$((fr,ae)=>{ae.exports=window.React});var me=$((dr,se)=>{se.exports=window.ReactDOM});var le=$(R=>{"use strict";var pe=me();R.createRoot=pe.createRoot,R.hydrateRoot=pe.hydrateRoot;var hr});var Ye=a(s()),Ke=a(le());var b=a(s());var W=a(s());var C=a(s());var cr=document.location.href.includes("localhost")?"strangerintheq.github.io/":"";function F(e,r){return[...Array(e|0)].map((n,t)=>r(t))}function X(e=1){return Math.random()*e}function Y(e){return e[X(e.length)|0]}function fe(e=.5){return X()>e}async function de(e){return await(await fetch(e)).text()}function ee(){return"oo"+F(50,()=>Y("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ")).join("")}function re(){return"0x"+F(64,()=>Y("0123456789abcdef")).join("")}function K(e){return e==="fx-hash"?ee():re()}function he(e,r){return e.split(`
`).map(n=>n.includes("var fxhash =")?'var fxhash = "'+r+'";':n).join(`
`)}function ge(e,r){return e.split(`
`).map(n=>n.includes("window.tokenData =")?`window.tokenData = {hash:"${r}"};`:n).join(`
`)}var tr=["slice","tentura"],or=["amulet","arachna","cellulae","foldoscope","generotique","gravitzappa","hidden-square","hyperspacers","let-it-snow","magic-ritual","mayan-carpet","mitosis","other-side-of-the-amulet","plexus","squatree","subdivisual"],ir=["artificial-eye","dancing-souls","inner-sight","mozaic-perception","needlework","neural-interface","nucle","re-tiler","simplicity","steam-cells","the-nest","warp-engine"],nr=["xeno"],q={};tr.forEach(e=>Object.assign(q,{[e]:"artblocks"}));or.forEach(e=>Object.assign(q,{[e]:"fx-hash"}));ir.forEach(e=>Object.assign(q,{[e]:"teia"}));nr.forEach(e=>Object.assign(q,{[e]:"alba"}));function U({id:e,hash:r=null}){let[n,t]=(0,C.useState)(),[o,y]=(0,C.useState)(),v=q[e];return(0,C.useEffect)(()=>{let z="site/resources/art/"+v+"/"+e+"/generator.html";de(z).then(y)},[e]),(0,C.useEffect)(()=>{o&&(document.body.classList.remove("loaded"),setTimeout(()=>{t(v==="fx-hash"?he(o,r||ee()):ge(o,r||re()))},200),document.title="Q - "+e)},[o,r,v]),n?C.default.createElement("iframe",{onLoad:()=>document.body.classList.add("loaded"),src:"data:text/html,"+encodeURIComponent(n),style:{backgroundColor:"black",pointerEvents:"all",zIndex:-2,border:0,width:"100vw",height:"100vh",display:"block",position:"fixed",top:0,left:0}}):null}var B=a(s());var te=a(s());function ce({children:e=null}){return te.default.createElement("div",{style:{margin:"0 -1rem"}},te.default.createElement("div",{className:"text-outline",style:{padding:"0.5rem 1rem",fontSize:"2.5rem",lineHeight:"2.5rem",marginTop:"1rem",display:"flex",justifyContent:"space-between"}},e))}var ue=a(s());function A({to:e=""+Date.now(),children:r=null}){return ue.default.createElement("span",{style:{textDecoration:"underline",cursor:"pointer",pointerEvents:"all"},onClick:()=>{history.pushState({},"","?"+e)}},r)}var T=a(s());function xe({size:e="1.5rem"}){let t=fe()?1:Y([.2,.1]),o=Math.random()*4**2|0,y=X(360),v=(k,Ve=1,Je=0)=>`translate(${[k%4-4/2+.5,(k/4|0)-4/2+.5]}) rotate(${Je}) scale(${Ve})`,z=F(4**2,k=>k).filter(()=>Math.random()>.5);return T.default.createElement(T.default.Fragment,null,T.default.createElement("svg",{overflow:"visible",viewBox:[-4/2-.1,-4/2-.1,4+.1*2,4+.1*2],style:{height:e,width:e,verticalAlign:"middle"}},z.map(k=>T.default.createElement("g",{transform:v(k,1.3)},T.default.createElement("rect",{rx:.2,width:1,height:1,fill:"#fff",x:-.5,y:-.5}))),z.map(k=>T.default.createElement("g",{transform:v(k,1.1)},T.default.createElement("rect",{rx:.1,width:1,height:1,fill:"#000",x:-.5,y:-.5}))),F(1,k=>T.default.createElement("g",{transform:v(o,X(.5)+1.5-.08*k,y+k*4)},T.default.createElement("rect",{rx:t,width:1,height:1,fill:`#${"fedcba9876543210"[k]}00`,x:-.5,y:-.5})))))}function N({dark:e=!1}){return B.default.createElement(ce,null,B.default.createElement("div",{style:{marginLeft:"0rem",userSelect:"none"}},B.default.createElement(A,null,B.default.createElement(xe,{size:"2.5rem"}))),B.default.createElement("div",null,B.default.createElement(A,{to:"art"},"art"),"\xA0",B.default.createElement(A,{to:"code"},"code"),"\xA0",B.default.createElement(A,{to:"about"},"about")))}var be=a(s());function M(e){return be.default.createElement("div",{style:{zIndex:10,width:"var(--base-size)",margin:"0 calc(50vw - calc(var(--base-size) * 0.5))",padding:"0 calc(var(--base-size) * 0.1)",overflow:"visible"}},e.children)}var oe=a(s());function ye({children:e=null}){return oe.default.createElement("div",{style:{margin:"0 -1rem 0.5rem -1rem"}},oe.default.createElement("div",{className:"text-outline",style:{padding:"0.5rem 1rem",fontSize:"2.5rem",margin:"1rem 0 ",display:"flex",justifyContent:"center"}},e))}var V=a(s());function J(){return V.default.createElement("div",{className:"backdrop"},V.default.createElement("svg",{viewBox:"-50 -50 100 100",width:"100vw",height:"100vh"},V.default.createElement("g",null)))}function ve({route:e}){let[,r,n]=e.split("/"),t="art/"+r+"/"+K(q[r]);return W.default.createElement(W.default.Fragment,null,W.default.createElement(U,{id:r,hash:n}),W.default.createElement(J,null),W.default.createElement(M,null,W.default.createElement("div",{style:{display:e.includes("xeno")?"none":"flex",justifyContent:"space-between",flexDirection:"column",height:"100vh",pointerEvents:"none"}},W.default.createElement(N,{dark:!0}),W.default.createElement(ye,null,W.default.createElement(A,{to:t},r)))))}var j=a(s());var Se=a(s());var ke=a(s());function we(e){(0,ke.useEffect)(()=>{document.title=e?"Q - "+e:"Stranger in the Q"})}function D({children:e=null}){return we(e),Se.default.createElement("div",{style:{fontSize:"4rem",marginTop:"2rem"}},e)}var P=a(s());var Z=a(s());var Pe=a(s()),ar="";function p({img:e=null}){return Pe.default.createElement("div",{style:{backgroundImage:`url(${e||ar})`,height:"100%",backgroundSize:"cover",backgroundPosition:"center center",boxShadow:"0 0 3px 0 #9c9898"}})}function i({name:e,type:r,img:n,hash:t=K(r),c:o=null,r:y=null,link:v=null}){let z=e.toLowerCase().replaceAll(" ","-");return Z.default.createElement("div",{style:{gridColumn:o,gridRow:y}},Z.default.createElement(A,{to:"art/"+z+"/"+t},Z.default.createElement(p,{img:n})))}var je=a(s());var I=a(s()),Q="(max-width: 980px)";function _(e){let r=(0,I.useRef)(window.matchMedia(e)),[n,t]=(0,I.useState)(r.current.matches);return(0,I.useEffect)(()=>{let o=y=>t(y.matches);return r.current.addEventListener("change",o),()=>{r.current.removeEventListener("change",o)}},[]),{matches:n}}function h({children:e=null,ratio:r=1,rows:n=null}){let{matches:t}=_(Q),o=t?.02:.01,y=(.8-o*(t?1:3))/(t?2:4),v=Ee(y),z=Ee(y*r),k=n||Math.ceil(e.length/(t?2:4));return je.default.createElement("div",{style:{margin:"2rem 0 6rem 0",display:"grid",gap:`calc(var(--base-size) * ${o})`,gridTemplateColumns:t?`${v} ${v}`:`${v} ${v} ${v} ${v}`,gridTemplateRows:`repeat(${k}, ${z})`}},e)}function Ee(e){return`calc(var(--base-size) * ${e})`}var Le=a(s());function d({children:e=null}){return Le.default.createElement("div",{style:{fontSize:"1.5rem",fontWeight:"bold",marginTop:"2rem",marginLeft:"0rem"}},e)}var O=a(s());var He=a(s());function Te(){return He.default.createElement("span",{dangerouslySetInnerHTML:{__html:`
        <svg style="vertical-align: middle" xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" 
        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
            <path d="M10 14l10 -10"></path>
            <path d="M15 4l5 0l0 5"></path>
        </svg>
    `}})}function m({href:e,children:r=null}){return O.default.createElement("span",null,O.default.createElement("a",{href:e},r),O.default.createElement(Te,null))}function Ne(){let{matches:e}=_(Q),r=640,n="https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_"+r+",q_auto/https://artblocks-mainnet.s3.amazonaws.com/",t="https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_"+r+",q_auto/https://art-blocks-artist-staging-goerli.s3.amazonaws.com/",o="https://www.artblocks.io/collections/presents/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/419/tokens/",y={type:"artblocks",name:"Slice"};return P.default.createElement(P.default.Fragment,null,P.default.createElement(d,null,P.default.createElement(m,{href:"https://www.artblocks.io/collections/presents/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/419"},"SL/CE @ ArtBlocks 2023")),P.default.createElement(h,{rows:e?4:2,ratio:1.618},P.default.createElement(i,{...y,c:e?"1/3":"2/4",r:"1/3",link:o+"419000000",hash:"0x61464f239e4a9706c864eaf3d8ccc966fe3ec89089752d803ee51adbea37e82c",img:n+"419000000.png"}),P.default.createElement(i,{...y,link:o+"419000000",hash:"0x7905f21577209c5fccc82170001218c7281e1991f6c42f7717adb819e2846805",img:t+"48000189.png"}),P.default.createElement(i,{...y,link:o+"419000000",hash:"0x0c8313ca762c7c8aa3b4c078435fd0a84aa17fb0872cc152103b8ff6f22f71a3",img:t+"48000161.png"}),P.default.createElement(i,{...y,link:o+"419000000",hash:"0xecfcfa98860f8fb143d54065186118cc2f429316982597494dc8cffd7f4e4283",img:t+"48000015.png"}),P.default.createElement(i,{...y,link:o+"419000000",hash:"0xfb031983bdfc22fb8e1c8956d6feb654dfef92b5a7f5de4b08e39681b0f68cd3",img:t+"48000055.png"})))}var E=a(s());function Me(){let{matches:e}=_(Q),n="https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_"+640+",q_auto/https://artblocks-mainnet.s3.amazonaws.com/",t="https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/265/tokens/",o={type:"artblocks",name:"Tentura"};return E.default.createElement(E.default.Fragment,null,E.default.createElement(d,null,E.default.createElement(m,{href:"https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/265"},"Tentura @ ArtBlocks 2022")),E.default.createElement(h,{ratio:1,rows:e?4:2},E.default.createElement(i,{...o,c:e?"1/3":"2/4",r:"1/3",link:t+"265000000",hash:"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930",img:n+"265000000.png"}),E.default.createElement(i,{...o,link:t+"265000031",hash:"0x8cf4266960518b81ae27bd417c0b68e4141a2d531dfc44460708e00b98dfb7f4",img:n+"265000031.png"}),E.default.createElement(i,{...o,link:t+"265000197",hash:"0xe359ebb5e9a5cc2f24b964fc2f33b4e3635b56c08cc77d4cc0290f28ef1656da",img:n+"265000197.png"}),E.default.createElement(i,{...o,link:t+"265000212",hash:"0xa23afc7294ee196ec119d6a55820b507c227821d4608899f8f1a7ddc06b7af4e",img:n+"265000212.png"}),E.default.createElement(i,{...o,link:t+"265000269",hash:"0xa7ececac02b48d8f78121349382d77a6134f5d0a6d6f8e7df7afca27d6369a52",img:n+"265000269.png"})))}var g=a(s());function We(){let e="https://www.fxhash.xyz/generative/",r="https://media.fxhash.xyz/w_768/";return g.default.createElement(g.default.Fragment,null,g.default.createElement(d,null,g.default.createElement(m,{href:"https://www.fxhash.xyz/u/StrangerintheQ"},"fx(hash) 2022-2023")),g.default.createElement(h,null,g.default.createElement(i,{type:"fx-hash",name:"Magic Ritual",link:e+"24704",hash:"ookiXAnGJw28AAv6JVLXiyZceTF9nJSRAxgytsUDV9Gu3na4zeN",img:r+"QmbABZquDop8bhVWb49HcU7t4vFgHU1s9ZFomPxeznmr4J"}),g.default.createElement(i,{type:"fx-hash",name:"Mayan Carpet",link:e+"24611",hash:"oo2WuxbvWm77MLimMCfrt54zXRHhe8HcFqPVPfGxF53Be85Rnhe",img:r+"QmScLVUE7HzUvSWy1hTVsqA2WCU6icED9BQbgVDHt4xJV2"}),g.default.createElement(i,{type:"fx-hash",name:"Other side of the Amulet",link:e+"15301",hash:"oo274c4kMq5xbm7CpvJ6rDHatuuZwhEACfgaQ4BXy9XX4eTu4q7",img:r+"QmWs8VMiyr5FTSSfjvf1g3bprS8JNxM8wzAbXFRvVnR3aG"}),g.default.createElement(i,{type:"fx-hash",name:"Hyperspacers",link:e+"14107",hash:"ooXtaB52GRHraEgQEnT7k9oJzWYPbYbiycXFGmUqNa34bwV53ZX",img:r+"QmP67iCt3gayuZGVLafGSYfXUgkJ35hbyiDxgNsGN6LZNQ"}),g.default.createElement(i,{type:"fx-hash",name:"Amulet",link:e+"13115",hash:"ooognYT3x6SRXbUCKcu34Z7ffDJDrR1KmZE4G4NMo15fZ3pMyuf",img:r+"QmNrMUYWUWMWjMyN6focKCBKMMqGcFofhvxMHBGNmUxYG6"}),g.default.createElement(i,{type:"fx-hash",name:"Mitosis",link:e+"4058",hash:"ooFeDgPwQRjiVXkupQn7wUBdbUjBQaAvFBPDpMN6iGqc5Wgv9N3",img:r+"QmeNYkvW72PY1FA14E3NP2fnHfuNvpQQhowFgJ7cZbGuXf"}),g.default.createElement(i,{type:"fx-hash",name:"Cellulae",link:e+"1393",hash:"oohTtY7QKgRpUDnvbrPdAgUgxgd7p1BpyKZK3BKZqfNmWGv5qrL",img:r+"QmTP2YDBnWNohuAD5mtvDsEMdPa6Edf4Tf8rCS5MyhKAzX"}),g.default.createElement(i,{type:"fx-hash",name:"Arachna",link:e+"959",hash:"ooZxg5naW6KQxijqjDQfFLtGDSBgG2HsMGPtymKfq7PxgRvRdB6",img:r+"QmXzaZC1CfSQBm9f7CoBjsBAM153HNYermqY8CPoSdkSYB"}),g.default.createElement(i,{type:"fx-hash",name:"Gravitzappa",link:e+"430",hash:"oo1WHxm95PJeziDbtPvqtZsEHyufnKZSiY8nJMMDCMxoTVEcLRk",img:r+"Qmd2NxZiw3kxWowXcu3ZBfCT633UVfstYDV3zJSaLAmcJn"}),g.default.createElement(i,{type:"fx-hash",name:"Plexus",link:e+"206",hash:"oopWDMeU2jwUksfUee8yjfU8EqN3Sh4osBbdymLya5xTmiGhoVg",img:r+"QmY81Ege4BLhYetp4JTH1Z7KMZmvKmy5vZmtjsSyr2YsH2"}),g.default.createElement(i,{type:"fx-hash",name:"Squatree",link:e+"45",hash:"oo1M8TxFJQ7T1vSHoUgMCA3zAxLHeNcjHQ45RoomKyCdc57ModH",img:r+"QmbBzpLyJAitVDn8hkv6JAF6kZRkk46Eba3UKfNXrTWGc8"}),g.default.createElement(i,{type:"fx-hash",name:"Hidden Square",link:e+"19",hash:"ooJgyLKPdBbW1YbNk8cXbHpDdWV9886cJyx934pKwoNUru3RNKD",img:r+"QmQ8TYQ8qb29BxTp8kASocMirfuGf5nMXpArEohpG9tzuX"})))}var c=a(s());function Ge(){let e="site/resources/art/teia/",r="https://objkt.com/asset/hicetnunc/";return c.default.createElement(c.default.Fragment,null,c.default.createElement(d,null,c.default.createElement(m,{href:"https://objkt.com/profile/tz2MHcnM7fEVtExELMPBZb5njDweqMGvbn8A/created?faContracts=KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton"},"teia (nicetnunc) 2021")),c.default.createElement(h,null,c.default.createElement(i,{type:"teia",name:"Needlework",link:r+"520033",img:e+"needlework/preview.jpeg"}),c.default.createElement(i,{type:"teia",name:"Warp Engine",link:r+"490373",img:e+"warp-engine/preview.jpeg"}),c.default.createElement(i,{type:"teia",name:"Re-Tiler",link:r+"468682",img:e+"re-tiler/preview.jpeg"}),c.default.createElement(i,{type:"teia",name:"Neural Interface",link:r+"447479",img:e+"neural-interface/preview.jpeg"}),c.default.createElement(i,{type:"teia",name:"Artificial Eye",link:r+"440706",img:e+"artificial-eye/preview.jpeg"}),c.default.createElement(i,{type:"teia",name:"The Nest",link:r+"404417",img:e+"the-nest/preview.jpeg"}),c.default.createElement(i,{type:"teia",name:"Mozaic Perception",link:r+"393547",img:e+"mozaic-perception/preview.jpeg"}),c.default.createElement(i,{type:"teia",name:"Dancing Souls",link:r+"384125",img:e+"dancing-souls/preview.jpeg"}),c.default.createElement(i,{type:"teia",name:"Nucle",link:r+"343072",img:e+"nucle/preview.png"}),c.default.createElement(i,{type:"teia",name:"Inner Sight",link:r+"324272",img:e+"inner-sight/preview.png"}),c.default.createElement(i,{type:"teia",name:"Simplicity",link:r+"279928",img:e+"simplicity/preview.png"}),c.default.createElement(i,{type:"teia",name:"Steam Cells",link:r+"274293",img:e+"steam-cells/preview.png"})))}var Ae=a(s());function u({children:e=null}){return Ae.default.createElement("div",{style:{fontSize:"1.5rem",marginTop:"2rem"}},e)}function Be(){return j.default.createElement(M,null,j.default.createElement(N,null),j.default.createElement(D,null,"Art"),j.default.createElement(u,null,"All of these projects are real-time pseudo-random image generators. The same image can never be generated. Clicking the link at the bottom of the page will generate a new image. Each generated image has its own hash and link. Every time you visit that link, you get the same result.",j.default.createElement("br",null),j.default.createElement("br",null),"Please enjoy!"),j.default.createElement(Ne,null),j.default.createElement(Me,null),j.default.createElement(We,null),j.default.createElement(Ge,null))}var L=a(s());var ze=[["fx-hash","mayan-carpet"],["fx-hash","cellulae"],["fx-hash","gravitzappa"],["fx-hash","hidden-square"],["fx-hash","magic-ritual"],["fx-hash","mitosis"],["teia","artificial-eye"],["teia","dancing-souls"],["teia","inner-sight"],["teia","mozaic-perception"],["teia","neural-interface"],["teia","nucle"],["teia","re-tiler"],["teia","simplicity"],["teia","steam-cells"],["teia","the-nest"],["teia","warp-engine"]];function ie({route:e=null}){let[r,n]=(0,L.useState)();return(0,L.useEffect)(()=>{let[t,o]=ze[Math.random()*ze.length|0];n({type:t,id:o}),document.title="Q - "+o},[e]),L.default.createElement(L.default.Fragment,null,r&&L.default.createElement(U,{id:r.id}),L.default.createElement(J,null),L.default.createElement(M,null,L.default.createElement(N,{dark:!0})))}var f=a(s());function qe(){return f.default.createElement(f.default.Fragment,null,f.default.createElement(M,null,f.default.createElement(N,{dark:!1}),f.default.createElement(D,null,"About"),f.default.createElement(d,null,"I'm Stranger in the Q and i'm making art with code"),f.default.createElement(u,null,"I have been working as a software developer for about 2 decades now. I develop various user interfaces and other things related to computer graphics. At one point I started creating images using code to teach myself math and algorithms. Over time, I learned more about it and became very interested in it. That's how I realized it was an art, a\xA0",f.default.createElement("span",{style:{fontWeight:"bold"}},"Generative Art"),"."),f.default.createElement(d,null,"Links"),f.default.createElement(u,null,f.default.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1em"}},f.default.createElement(m,{href:"https://www.artblocks.io/user/0xe0324d6981ccb5b62bdd235366dee6172e0ef116"},"Art Blocks"),f.default.createElement(m,{href:"https://www.fxhash.xyz/u/StrangerintheQ"},"Fx(hash)"),f.default.createElement(m,{href:"https://twitter.com/stranger_intheq"},"Twitter"),f.default.createElement(m,{href:"https://www.instagram.com/stranger_in_the_q/"},"Instagram"),f.default.createElement(m,{href:"https://t.me/s/mathimages"},"Telegram"),f.default.createElement(m,{href:"https://codepen.io/strangerintheq"},"Codepen"),f.default.createElement(m,{href:"https://github.com/strangerintheq/"},"Github"))),f.default.createElement("div",{className:"separator"}),f.default.createElement("div",{className:"separator"}),f.default.createElement("div",{className:"separator"}),f.default.createElement("div",{className:"separator"})))}var S=a(s());var l=a(s());function Ce(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(d,null,l.default.createElement(m,{href:"https://github.com/strangerintheq/rgba"},"RGBA.js")),l.default.createElement(u,null,"Yet another tiny (~250 lines of code) webgl/fragment shader tool.",l.default.createElement("br",null),"It focusing on hiding webgl/javascript code from you, not too performant, but giving ability to write fragment shader code only (in simple cases).",l.default.createElement("br",null),"Firstly created for using in my\xA0",l.default.createElement(m,{href:"https://codepen.io/collection/AWEWzK"},"codepen experiments")),l.default.createElement(h,null,l.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/xxRpowV"},l.default.createElement(p,{img:"site/resources/code/rgba-cat-spiral.jpg"})),l.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/dyOvmvo"},l.default.createElement(p,{img:"site/resources/code/rgba-superformula.jpg"})),l.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/xxEJygK"},l.default.createElement(p,{img:"site/resources/code/rgba-chlandi.jpg"})),l.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/QWKbRgV"},l.default.createElement(p,{img:"site/resources/code/rgba-core.jpg"})),l.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/abNvxrz"},l.default.createElement(p,{img:"site/resources/code/rgba-colorburst.jpg"})),l.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/MWexRBr"},l.default.createElement(p,{img:"site/resources/code/rgba-chlandi-fbm.jpg"})),l.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/ExWWxoO"},l.default.createElement(p,{img:"site/resources/code/rgba-photo-filter.jpg"})),l.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/VwmYLpR"},l.default.createElement(p,{img:"site/resources/code/rgba-chlandi-2.jpg"}))))}var w=a(s());function De(){return w.default.createElement(w.default.Fragment,null,w.default.createElement(d,null,w.default.createElement(m,{href:"https://rawcdn.githack.com/strangerintheq/hare-and-carrots/c5da3e8e16e666f697ccd176f705464dc7b86eec/build/index.html"},"Hare and Carrots")),w.default.createElement(u,null,"Funny experiment to create a game about small hare written in typescript. You can jump around, eat the carrots and... There are no game resources at all, everything is generated in run-time. Networked version currently is not deployed anywhere, but you can run it yourself locally.",w.default.createElement("br",null),w.default.createElement("br",null),"Source code:\xA0",w.default.createElement(m,{href:"https://github.com/strangerintheq/hare-and-carrots"},"single player"),"\xA0",w.default.createElement(m,{href:"https://github.com/strangerintheq/hare-networked"},"multiplayer"),w.default.createElement(h,null,w.default.createElement(p,{img:"site/resources/code/hare-0.jpg"}),w.default.createElement(p,{img:"site/resources/code/hare-1.jpg"}),w.default.createElement(p,{img:"site/resources/code/hare-2.jpg"}))))}var G=a(s());var sr=[["jOpyYaR","justlib-genuary-8.jpg"],["qByrdxY","justlib-genuary-9.jpg"],["vYaXVwL","justlib-genuary-4.jpg"],["yLqbjeE","justlib-genuary-11.jpg"],["NWBaeVj","justlib-genuary-18.jpg"],["MWBmqRd","justlib-truchet.jpg"]];function Ie(){return G.default.createElement(G.default.Fragment,null,G.default.createElement(d,null,G.default.createElement(m,{href:"https://github.com/strangerintheq/justlib"},"just-lib")),G.default.createElement(u,null,"Collection of javascript functions to faster create an generative artworks. Created to participate in\xA0",G.default.createElement(m,{href:"https://genuary.art/"},"genuary"),"2023 event. Gives ability to use normalized cartesian coordinates both in shaders and 2d canvas. Simplifies using of shader uniforms and providing random numbers in compile-time into shaders."),G.default.createElement(h,null,sr.map(e=>G.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/"+e[0]},G.default.createElement(p,{img:"site/resources/code/"+e[1]})))))}var H=a(s());function Qe(){return H.default.createElement(H.default.Fragment,null,H.default.createElement(d,null,H.default.createElement(m,{href:"https://raw.githack.com/strangerintheq/collect-the-dots/master/index.html"},"Collect the Dots")),H.default.createElement(u,null,"Experiment to create a simple cell based game building framework. Gives ability to create game level design as text based cells types descriptions. One cell is described by one symbol. There are several type of cells: Empty, Wall, Coin, Key, Door, Spike, Exit, Bot. Development is abandoned. Not finished yet but relatively playable.",H.default.createElement("div",{className:"separator"}),H.default.createElement(m,{href:"https://github.com/strangerintheq/collect-the-dots"},"Source code"),H.default.createElement(h,null,H.default.createElement(p,{img:"site/resources/code/dots-0.jpg"}),H.default.createElement(p,{img:"site/resources/code/dots-1.jpg"}))))}var x=a(s());function _e(){return x.default.createElement(x.default.Fragment,null,x.default.createElement(d,null,x.default.createElement(m,{href:"https://strangerintheq.art/mandelbrot.html"},"compleXplorer 0")),x.default.createElement(u,null,"Tool for exploring mandelbrot-like complex fractals. Yo can write a formula using glsl syntax and use several functions such as complex addition, subtraction, multiplication, division etc. While you exploring - you can copy a permanent link for the current view. Coloring taken from\xA0",x.default.createElement(m,{href:"https://iquilezles.org/articles/msetsmooth/"},"Inigo Quilez article"),"."),x.default.createElement(h,null,x.default.createElement("a",{href:"https://bit.ly/3cINX73"},x.default.createElement(p,{img:"site/resources/code/complexplorer0.jpg"})),x.default.createElement("a",{href:"https://bit.ly/3cnKEBG"},x.default.createElement(p,{img:"site/resources/code/complexplorer1.jpg"})),x.default.createElement("a",{href:"https://bit.ly/3tK59OT"},x.default.createElement(p,{img:"site/resources/code/complexplorer2.jpg"})),x.default.createElement("a",{href:"https://bit.ly/3vP4xt7"},x.default.createElement(p,{img:"site/resources/code/complexplorer3.jpg"})),x.default.createElement("a",{href:"https://bit.ly/3KEpyk8"},x.default.createElement(p,{img:"site/resources/code/complexplorer4.jpg"}))))}function Fe(){return S.default.createElement(S.default.Fragment,null,S.default.createElement(M,null,S.default.createElement(N,{dark:!1}),S.default.createElement(D,null,"Code"),S.default.createElement(u,null,"Here a collection of stuff made just for fun!"),S.default.createElement(Ie,null),S.default.createElement(De,null),S.default.createElement(Ce,null),S.default.createElement(_e,null),S.default.createElement(Qe,null),S.default.createElement(u,null,"\xA0")))}var mr=`<style>
* {
    margin: 0;
    font-weight: unset;
    box-sizing: border-box;
    --base-size: min(1600px, 100vw);
}
body {
    overflow-x: hidden;
    /*overscroll-behavior: none;*/
}
.separator {
    height: 1rem;
}
.codepen {
    height: 100%;
    width: 100%;
}
html {
    pointer-events: none;

}
@media (max-width: 980px) {
    html {
        font-size: 1.5em;
    }
}
a, a:visited, iframe {
    pointer-events: all;
}
a, a:visited {
    color: black;
}
.text-outline {
    text-shadow: 
        -1px -1px 0 #fff, 
        +1px -1px 0 #fff, 
        -1px +1px 0 #fff, 
        +1px +1px 0 #fff
}
.backdrop {
    z-index: -1;
    pointer-events: none;
    background: black;
    transition: 200ms;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}
.loaded .backdrop {
    background: transparent;
}
</style>`;function Xe(){return b.default.createElement(b.default.Fragment,null,b.default.createElement("div",{dangerouslySetInnerHTML:{__html:mr}}),b.default.createElement(pr,null))}function pr(){let[e,r]=(0,b.useState)(document.location.search),n=(0,b.useRef)({searchString:document.location.search,rafLoop:0});return(0,b.useEffect)(()=>{let t=n.current;t.rafLoop=requestAnimationFrame(o);function o(){t.searchString!==document.location.search&&(t.searchString=document.location.search,r(t.searchString)),t.rafLoop=requestAnimationFrame(o)}return()=>{cancelAnimationFrame(t.rafLoop)}},[]),e?e.startsWith("?about")?b.default.createElement(qe,null):e.startsWith("?art/")?b.default.createElement(ve,{route:e}):e.startsWith("?art")?b.default.createElement(Be,null):e.startsWith("?code")?b.default.createElement(Fe,null):b.default.createElement(ie,{route:e}):b.default.createElement(ie,null)}var Ue=document.createElement("div");document.body.append(Ue);(0,Ke.createRoot)(Ue).render(Ye.default.createElement(Xe,null));window.art=()=>{};window.art();})();
