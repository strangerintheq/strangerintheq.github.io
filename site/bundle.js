(()=>{var Ze=Object.create;var ae=Object.defineProperty;var $e=Object.getOwnPropertyDescriptor;var Oe=Object.getOwnPropertyNames;var Re=Object.getPrototypeOf,er=Object.prototype.hasOwnProperty;var $=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var rr=(e,r,i,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of Oe(r))!er.call(e,n)&&n!==i&&ae(e,n,{get:()=>r[n],enumerable:!(t=$e(r,n))||t.enumerable});return e};var a=(e,r,i)=>(i=e!=null?Ze(Re(e)):{},rr(r||!e||!e.__esModule?ae(i,"default",{value:e,enumerable:!0}):i,e));var s=$((pr,se)=>{se.exports=window.React});var pe=$((lr,me)=>{me.exports=window.ReactDOM});var fe=$(O=>{"use strict";var le=pe();O.createRoot=le.createRoot,O.hydrateRoot=le.hydrateRoot;var fr});var Ue=a(s()),Ye=a(fe());var c=a(s());var L=a(s());var T=a(s());var hr=document.location.href.includes("localhost")?"strangerintheq.github.io/":"";function _(e,r){return[...Array(e|0)].map((i,t)=>r(t))}function F(e=1){return Math.random()*e}function X(e){return e[F(e.length)|0]}function de(e=.5){return F()>e}async function he(e){return await(await fetch(e)).text()}function R(){return"oo"+_(50,()=>X("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ")).join("")}function ee(){return"0x"+_(64,()=>X("0123456789abcdef")).join("")}function U(e){return e==="fx-hash"?R():ee()}function ce(e,r){return e.split(`
`).map(i=>i.includes("var fxhash =")?'var fxhash = "'+r+'";':i).join(`
`)}function ge(e,r){return e.split(`
`).map(i=>i.includes("window.tokenData =")?`window.tokenData = {hash:"${r}"};`:i).join(`
`)}var tr=["slice","tentura"],or=["amulet","arachna","cellulae","foldoscope","generotique","gravitzappa","hidden-square","hyperspacers","let-it-snow","magic-ritual","mayan-carpet","mitosis","other-side-of-the-amulet","plexus","squatree","subdivisual"],ir=["artificial-eye","dancing-souls","inner-sight","mozaic-perception","needlework","neural-interface","nucle","re-tiler","simplicity","steam-cells","the-nest","warp-engine"],q={};tr.forEach(e=>Object.assign(q,{[e]:"artblocks"}));or.forEach(e=>Object.assign(q,{[e]:"fx-hash"}));ir.forEach(e=>Object.assign(q,{[e]:"teia"}));function Y({id:e,hash:r=null}){let[i,t]=(0,T.useState)(),[n,g]=(0,T.useState)(),b=q[e];return(0,T.useEffect)(()=>{let A="site/resources/art/"+b+"/"+e+"/generator.html";he(A).then(g),console.log(A)},[e]),(0,T.useEffect)(()=>{n&&(document.body.classList.remove("loaded"),setTimeout(()=>{t(b==="fx-hash"?ce(n,r||R()):ge(n,r||ee()))},100))},[n,r,b]),T.default.createElement(T.default.Fragment,null,i?T.default.createElement("iframe",{onLoad:()=>document.body.classList.add("loaded"),src:"data:text/html,"+encodeURIComponent(i),style:{backgroundColor:"black",pointerEvents:"all",zIndex:-1,border:0,width:"100vw",height:"100vh"}}):null)}var E=a(s());var re=a(s());function ue({children:e=null}){return re.default.createElement("div",{style:{margin:"0 -1rem"}},re.default.createElement("div",{className:"text-outline",style:{padding:"0.5rem 1rem",fontSize:"2.5rem",lineHeight:"2.5rem",marginTop:"1rem",display:"flex",justifyContent:"space-between"}},e))}var be=a(s());function z({to:e="",children:r=null}){return be.default.createElement("span",{style:{textDecoration:"underline",cursor:"pointer",pointerEvents:"all"},onClick:()=>{history.pushState({},"","?"+e)}},r)}var N=a(s());function xe({size:e="1.5rem"}){let t=de()?1:X([.2,.1]),n=Math.random()*4**2|0,g=F(360),b=(x,Ve=1,Je=0)=>`translate(${[x%4-4/2+.5,(x/4|0)-4/2+.5]}) rotate(${Je}) scale(${Ve})`,A=_(4**2,x=>x).filter(()=>Math.random()>.5);return N.default.createElement(N.default.Fragment,null,N.default.createElement("svg",{overflow:"visible",viewBox:[-4/2-.1,-4/2-.1,4+.1*2,4+.1*2],style:{height:e,width:e,verticalAlign:"middle"}},A.map(x=>N.default.createElement("g",{transform:b(x,1.3)},N.default.createElement("rect",{rx:.2,width:1,height:1,fill:"#fff",x:-.5,y:-.5}))),A.map(x=>N.default.createElement("g",{transform:b(x,1.1)},N.default.createElement("rect",{rx:.1,width:1,height:1,fill:"#000",x:-.5,y:-.5}))),_(1,x=>N.default.createElement("g",{transform:b(n,F(.5)+1.5-.08*x,g+x*4)},N.default.createElement("rect",{rx:t,width:1,height:1,fill:`#${"fedcba9876543210"[x]}00`,x:-.5,y:-.5})))))}function M({dark:e=!1}){return E.default.createElement(ue,null,E.default.createElement("div",{style:{marginLeft:"0rem"}},E.default.createElement(z,null,E.default.createElement(xe,{size:"2.5rem"}))),E.default.createElement("div",null,E.default.createElement(z,{to:"about"},"about"),"\xA0",E.default.createElement(z,{to:"code"},"code"),"\xA0",E.default.createElement(z,{to:"art"},"art")))}var ye=a(s());function G(e){return ye.default.createElement("div",{style:{width:"var(--base-size)",margin:"0 calc(50vw - calc(var(--base-size) * 0.5))",padding:"0 calc(var(--base-size) * 0.1)",overflow:"visible"}},e.children)}var te=a(s());function ve({children:e=null}){return te.default.createElement("div",{style:{margin:"0 -1rem 0.5rem -1rem"}},te.default.createElement("div",{className:"text-outline",style:{padding:"0.5rem 1rem",fontSize:"2.5rem",margin:"1rem 0 ",display:"flex",justifyContent:"center"}},e))}var oe=a(s());function K({children:e=null}){return oe.default.createElement("div",{style:{display:"grid",lineHeight:0}},e&&[...e].map(r=>oe.default.createElement("div",{style:{gridColumn:1,gridRow:1}},r)))}var V=a(s());function J(){return V.default.createElement("div",{className:"backdrop"},V.default.createElement("svg",{viewBox:"-50 -50 100 100",width:"100vw",height:"100vh"},V.default.createElement("g",null)))}function we({route:e}){let[,r,i]=e.split("/"),t="art/"+r+"/"+U(q[r]);return L.default.createElement(K,null,L.default.createElement(Y,{id:r,hash:i}),L.default.createElement(J,null),L.default.createElement(G,null,L.default.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"column",height:"100vh",pointerEvents:"none"}},L.default.createElement(M,{dark:!0}),L.default.createElement(ve,null,L.default.createElement(z,{to:t},r)))))}var H=a(s());var Pe=a(s());var ke=a(s());function Se(e){(0,ke.useEffect)(()=>{document.title=e?"Q - "+e:"Stranger in the Q"})}function I({children:e=null}){return Se(e),Pe.default.createElement("div",{style:{fontSize:"4rem",marginTop:"2rem"}},e)}var S=a(s());var Z=a(s());var He=a(s()),nr="";function w({img:e=null}){return He.default.createElement("div",{style:{backgroundImage:`url(${e||nr})`,height:"100%",backgroundSize:"cover",backgroundPosition:"center center",boxShadow:"0 0 3px 0 #9c9898"}})}function o({name:e,type:r,img:i,hash:t=U(r),c:n=null,r:g=null,link:b=null}){let A=e.toLowerCase().replaceAll(" ","-");return Z.default.createElement("div",{style:{gridColumn:n,gridRow:g}},Z.default.createElement(z,{to:"art/"+A+"/"+t},Z.default.createElement(w,{img:i})))}var Ne=a(s());var Q=a(s()),B="(max-width: 980px)";function D(e){let r=(0,Q.useRef)(window.matchMedia(e)),[i,t]=(0,Q.useState)(r.current.matches);return(0,Q.useEffect)(()=>{let n=g=>t(g.matches);return r.current.addEventListener("change",n),()=>{r.current.removeEventListener("change",n)}},[]),{matches:i}}function y({children:e=null,ratio:r=1,rows:i=null}){let{matches:t}=D(B),n=t?.02:.01,g=(.8-n*(t?1:3))/(t?2:4),b=Te(g),A=Te(g*r),x=i||Math.ceil(e.length/(t?2:4));return Ne.default.createElement("div",{style:{margin:"2rem 0 6rem 0",display:"grid",gap:`calc(var(--base-size) * ${n})`,gridTemplateColumns:t?`${b} ${b}`:`${b} ${b} ${b} ${b}`,gridTemplateRows:`repeat(${x}, ${A})`}},e)}function Te(e){return`calc(var(--base-size) * ${e})`}var Me=a(s());function p({children:e=null}){return Me.default.createElement("div",{style:{fontSize:"1.5rem",fontWeight:"bold",marginTop:"2rem",marginLeft:"0rem"}},e)}function Ge(){let{matches:e}=D(B),r=640,i="https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_"+r+",q_auto/https://artblocks-mainnet.s3.amazonaws.com/",t="https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_"+r+",q_auto/https://art-blocks-artist-staging-goerli.s3.amazonaws.com/",n="https://www.artblocks.io/collections/presents/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/419/tokens/",g={type:"artblocks",name:"Slice"};return S.default.createElement(S.default.Fragment,null,S.default.createElement(p,null,S.default.createElement("a",{href:"https://www.artblocks.io/collections/presents/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/419"},"SL/CE @ ArtBlocks 2023")),S.default.createElement(y,{rows:e?4:2,ratio:1.618},S.default.createElement(o,{...g,c:e?"1/3":"2/4",r:"1/3",link:n+"419000000",hash:"0x61464f239e4a9706c864eaf3d8ccc966fe3ec89089752d803ee51adbea37e82c",img:i+"419000000.png"}),S.default.createElement(o,{...g,link:n+"419000000",hash:"0x7905f21577209c5fccc82170001218c7281e1991f6c42f7717adb819e2846805",img:t+"48000189.png"}),S.default.createElement(o,{...g,link:n+"419000000",hash:"0x0c8313ca762c7c8aa3b4c078435fd0a84aa17fb0872cc152103b8ff6f22f71a3",img:t+"48000161.png"}),S.default.createElement(o,{...g,link:n+"419000000",hash:"0xecfcfa98860f8fb143d54065186118cc2f429316982597494dc8cffd7f4e4283",img:t+"48000015.png"}),S.default.createElement(o,{...g,link:n+"419000000",hash:"0xfb031983bdfc22fb8e1c8956d6feb654dfef92b5a7f5de4b08e39681b0f68cd3",img:t+"48000055.png"})))}var P=a(s());function je(){let{matches:e}=D(B),i="https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_"+640+",q_auto/https://artblocks-mainnet.s3.amazonaws.com/",t="https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/265/tokens/",n={type:"artblocks",name:"Tentura"};return P.default.createElement(P.default.Fragment,null,P.default.createElement(p,null,P.default.createElement("a",{href:"https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/265"},"Tentura @ ArtBlocks 2022")),P.default.createElement(y,{ratio:1,rows:e?4:2},P.default.createElement(o,{...n,c:e?"1/3":"2/4",r:"1/3",link:t+"265000000",hash:"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930",img:i+"265000000.png"}),P.default.createElement(o,{...n,link:t+"265000031",hash:"0x8cf4266960518b81ae27bd417c0b68e4141a2d531dfc44460708e00b98dfb7f4",img:i+"265000031.png"}),P.default.createElement(o,{...n,link:t+"265000197",hash:"0xe359ebb5e9a5cc2f24b964fc2f33b4e3635b56c08cc77d4cc0290f28ef1656da",img:i+"265000197.png"}),P.default.createElement(o,{...n,link:t+"265000212",hash:"0xa23afc7294ee196ec119d6a55820b507c227821d4608899f8f1a7ddc06b7af4e",img:i+"265000212.png"}),P.default.createElement(o,{...n,link:t+"265000269",hash:"0xa7ececac02b48d8f78121349382d77a6134f5d0a6d6f8e7df7afca27d6369a52",img:i+"265000269.png"})))}var l=a(s());function Ce(){let e="https://www.fxhash.xyz/generative/",r="https://media.fxhash.xyz/w_768/";return l.default.createElement(l.default.Fragment,null,l.default.createElement(p,null,l.default.createElement("a",{href:"https://www.fxhash.xyz/u/StrangerintheQ"},"fx(hash) 2022-2023")),l.default.createElement(y,null,l.default.createElement(o,{type:"fx-hash",name:"Magic Ritual",link:e+"24704",hash:"ookiXAnGJw28AAv6JVLXiyZceTF9nJSRAxgytsUDV9Gu3na4zeN",img:r+"QmbABZquDop8bhVWb49HcU7t4vFgHU1s9ZFomPxeznmr4J"}),l.default.createElement(o,{type:"fx-hash",name:"Mayan Carpet",link:e+"24611",hash:"oo2WuxbvWm77MLimMCfrt54zXRHhe8HcFqPVPfGxF53Be85Rnhe",img:r+"QmScLVUE7HzUvSWy1hTVsqA2WCU6icED9BQbgVDHt4xJV2"}),l.default.createElement(o,{type:"fx-hash",name:"Other side of the Amulet",link:e+"15301",hash:"oo274c4kMq5xbm7CpvJ6rDHatuuZwhEACfgaQ4BXy9XX4eTu4q7",img:r+"QmWs8VMiyr5FTSSfjvf1g3bprS8JNxM8wzAbXFRvVnR3aG"}),l.default.createElement(o,{type:"fx-hash",name:"Hyperspacers",link:e+"14107",hash:"ooXtaB52GRHraEgQEnT7k9oJzWYPbYbiycXFGmUqNa34bwV53ZX",img:r+"QmP67iCt3gayuZGVLafGSYfXUgkJ35hbyiDxgNsGN6LZNQ"}),l.default.createElement(o,{type:"fx-hash",name:"Amulet",link:e+"13115",hash:"ooognYT3x6SRXbUCKcu34Z7ffDJDrR1KmZE4G4NMo15fZ3pMyuf",img:r+"QmNrMUYWUWMWjMyN6focKCBKMMqGcFofhvxMHBGNmUxYG6"}),l.default.createElement(o,{type:"fx-hash",name:"Mitosis",link:e+"4058",hash:"ooFeDgPwQRjiVXkupQn7wUBdbUjBQaAvFBPDpMN6iGqc5Wgv9N3",img:r+"QmeNYkvW72PY1FA14E3NP2fnHfuNvpQQhowFgJ7cZbGuXf"}),l.default.createElement(o,{type:"fx-hash",name:"Cellulae",link:e+"1393",hash:"oohTtY7QKgRpUDnvbrPdAgUgxgd7p1BpyKZK3BKZqfNmWGv5qrL",img:r+"QmTP2YDBnWNohuAD5mtvDsEMdPa6Edf4Tf8rCS5MyhKAzX"}),l.default.createElement(o,{type:"fx-hash",name:"Arachna",link:e+"959",hash:"ooZxg5naW6KQxijqjDQfFLtGDSBgG2HsMGPtymKfq7PxgRvRdB6",img:r+"QmXzaZC1CfSQBm9f7CoBjsBAM153HNYermqY8CPoSdkSYB"}),l.default.createElement(o,{type:"fx-hash",name:"Gravitzappa",link:e+"430",hash:"oo1WHxm95PJeziDbtPvqtZsEHyufnKZSiY8nJMMDCMxoTVEcLRk",img:r+"Qmd2NxZiw3kxWowXcu3ZBfCT633UVfstYDV3zJSaLAmcJn"}),l.default.createElement(o,{type:"fx-hash",name:"Plexus",link:e+"206",hash:"oopWDMeU2jwUksfUee8yjfU8EqN3Sh4osBbdymLya5xTmiGhoVg",img:r+"QmY81Ege4BLhYetp4JTH1Z7KMZmvKmy5vZmtjsSyr2YsH2"}),l.default.createElement(o,{type:"fx-hash",name:"Squatree",link:e+"45",hash:"oo1M8TxFJQ7T1vSHoUgMCA3zAxLHeNcjHQ45RoomKyCdc57ModH",img:r+"QmbBzpLyJAitVDn8hkv6JAF6kZRkk46Eba3UKfNXrTWGc8"}),l.default.createElement(o,{type:"fx-hash",name:"Hidden Square",link:e+"19",hash:"ooJgyLKPdBbW1YbNk8cXbHpDdWV9886cJyx934pKwoNUru3RNKD",img:r+"QmQ8TYQ8qb29BxTp8kASocMirfuGf5nMXpArEohpG9tzuX"})))}var f=a(s());function We(){let e="site/resources/art/teia/",r="https://objkt.com/asset/hicetnunc/";return f.default.createElement(f.default.Fragment,null,f.default.createElement(p,null,f.default.createElement("a",{href:"https://objkt.com/profile/tz2MHcnM7fEVtExELMPBZb5njDweqMGvbn8A/created?faContracts=KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton"},"teia (nicetnunc) 2021")),f.default.createElement(y,null,f.default.createElement(o,{type:"teia",name:"Needlework",link:r+"520033",img:e+"needlework/preview.jpeg"}),f.default.createElement(o,{type:"teia",name:"Warp Engine",link:r+"490373",img:e+"warp-engine/preview.jpeg"}),f.default.createElement(o,{type:"teia",name:"Re-Tiler",link:r+"468682",img:e+"re-tiler/preview.jpeg"}),f.default.createElement(o,{type:"teia",name:"Neural Interface",link:r+"447479",img:e+"neural-interface/preview.jpeg"}),f.default.createElement(o,{type:"teia",name:"Artificial Eye",link:r+"440706",img:e+"artificial-eye/preview.jpeg"}),f.default.createElement(o,{type:"teia",name:"The Nest",link:r+"404417",img:e+"the-nest/preview.jpeg"}),f.default.createElement(o,{type:"teia",name:"Mozaic Perception",link:r+"393547",img:e+"mozaic-perception/preview.jpeg"}),f.default.createElement(o,{type:"teia",name:"Dancing Souls",link:r+"384125",img:e+"dancing-souls/preview.jpeg"}),f.default.createElement(o,{type:"teia",name:"Nucle",link:r+"343072",img:e+"nucle/preview.png"}),f.default.createElement(o,{type:"teia",name:"Inner Sight",link:r+"324272",img:e+"inner-sight/preview.png"}),f.default.createElement(o,{type:"teia",name:"Simplicity",link:r+"279928",img:e+"simplicity/preview.png"}),f.default.createElement(o,{type:"teia",name:"Steam Cells",link:r+"274293",img:e+"steam-cells/preview.png"})))}var Ae=a(s());function h({children:e=null}){return Ae.default.createElement("div",{style:{fontSize:"1.5rem",marginTop:"2rem"}},e)}function ze(){return H.default.createElement(G,null,H.default.createElement(M,null),H.default.createElement(I,null,"Art"),H.default.createElement(h,null,"All of these projects are real-time pseudo-random image generators. The same image can never be generated. Clicking the link at the bottom of the page will generate a new image. Each generated image has its own hash and link. Every time you visit that link, you get the same result.",H.default.createElement("br",null),H.default.createElement("br",null),"Please enjoy!"),H.default.createElement(Ge,null),H.default.createElement(je,null),H.default.createElement(Ce,null),H.default.createElement(We,null))}var j=a(s());var Ee=[["fx-hash","mayan-carpet"],["fx-hash","cellulae"],["fx-hash","gravitzappa"],["fx-hash","hidden-square"],["fx-hash","magic-ritual"],["fx-hash","mitosis"],["teia","artificial-eye"],["teia","dancing-souls"],["teia","inner-sight"],["teia","mozaic-perception"],["teia","neural-interface"],["teia","nucle"],["teia","re-tiler"],["teia","simplicity"],["teia","steam-cells"],["teia","the-nest"],["teia","warp-engine"]];function ie(){let[e,r]=(0,j.useState)();return(0,j.useEffect)(()=>{let[i,t]=Ee[Math.random()*Ee.length|0];r({type:i,id:t})},[]),j.default.createElement(K,null,e&&j.default.createElement(Y,{id:e.id}),j.default.createElement(J,null),j.default.createElement(G,null,j.default.createElement(M,{dark:!0})))}var m=a(s());function Le(){return m.default.createElement(m.default.Fragment,null,m.default.createElement(G,null,m.default.createElement(M,{dark:!1}),m.default.createElement(I,null,"About"),m.default.createElement(p,null,"I'm Stranger in the Q and i'm making art with code."),m.default.createElement(h,null,"I have been working as a software developer for about 2 decades now. I develop various user interfaces and other things related to computer graphics. At one point I started creating images using code to teach myself math and algorithms. Over time, I learned more about it and became very interested in it. That's how I realized it was an art, a\xA0",m.default.createElement("span",{style:{fontWeight:"bold"}},"Generative Art"),"."),m.default.createElement(p,null,"Links"),m.default.createElement(h,null,m.default.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1em"}},m.default.createElement("a",{href:"https://twitter.com/stranger_intheq"},"Twitter"),m.default.createElement("a",{href:"https://www.artblocks.io/user/0xe0324d6981ccb5b62bdd235366dee6172e0ef116"},"Art Blocks"),m.default.createElement("a",{href:"https://www.fxhash.xyz/u/StrangerintheQ"},"Fx(hash)"),m.default.createElement("a",{href:"https://t.me/s/mathimages"},"Telegram"),m.default.createElement("a",{href:"https://codepen.io/strangerintheq"},"Codepen"),m.default.createElement("a",{href:"https://github.com/strangerintheq/"},"Github"))),m.default.createElement("div",{className:"separator"}),m.default.createElement("div",{className:"separator"}),m.default.createElement("div",{className:"separator"}),m.default.createElement("div",{className:"separator"})))}var k=a(s());var v=a(s());function Be(){return v.default.createElement(v.default.Fragment,null,v.default.createElement(p,null,v.default.createElement("a",{href:"https://github.com/strangerintheq/rgba"},"RGBA.js")),v.default.createElement(h,null,"Yet another tiny (~250 lines of code) webgl/fragment shader tool.",v.default.createElement("br",null),"It focusing on hiding webgl/javascript code from you, not too performant, but giving ability to write fragment shader code only (in simple cases).",v.default.createElement("br",null),"Firstly created for using in my\xA0",v.default.createElement("a",{href:"https://codepen.io/collection/AWEWzK"},"codepen experiments"),"."),v.default.createElement(y,null,v.default.createElement(w,null),v.default.createElement(w,null),v.default.createElement(w,null),v.default.createElement(w,null)))}var C=a(s());function De(){return C.default.createElement(C.default.Fragment,null,C.default.createElement(p,null,C.default.createElement("a",{href:"https://rawcdn.githack.com/strangerintheq/hare-and-carrots/c5da3e8e16e666f697ccd176f705464dc7b86eec/build/index.html"},"Hare and Carrots")),C.default.createElement(h,null,"Funny experiment to create a game about small hare written in typescript. You can jump around, eat the carrots and... There are no game resources at all, everything is generated in run-time. Networked version currently is not deployed anywhere, but you can run it yourself locally.",C.default.createElement("br",null),C.default.createElement("br",null),"Source code:\xA0",C.default.createElement("a",{href:"https://github.com/strangerintheq/hare-and-carrots"},"single player"),"\xA0",C.default.createElement("a",{href:"https://github.com/strangerintheq/hare-networked"},"multiplayer")))}var u=a(s());function qe(){let{matches:e}=D(B);return u.default.createElement(u.default.Fragment,null,u.default.createElement(p,null,u.default.createElement("a",{href:"https://github.com/strangerintheq/justlib"},"just-lib")),u.default.createElement(h,null,"Collection of javascript functions to faster create an generative artworks. Created to participate in\xA0",u.default.createElement("a",{href:"https://genuary.art/"},"genuary"),"\xA02023 event. Gives ability to use normalized cartesian coordinates both in shaders and 2d canvas. Simplifies using of shader uniforms and providing random numbers in compile-time into shaders."),u.default.createElement(y,{ratio:.75,isMobile:e,rows:e?4:2},u.default.createElement("iframe",{className:"codepen",style:{gridColumn:"1/3",gridRow:"1/3"},scrolling:"no",title:"Genuary 4 - Intersections",src:"https://codepen.io/strangerintheq/embed/vYaXVwL?default-tab=result&editable=true",frameBorder:"no",loading:"lazy",allowTransparency:"true",allowFullScreen:"true"},"See the Pen ",u.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/vYaXVwL"},"Genuary 4 - Intersections")," by Stranger in the Q (",u.default.createElement("a",{href:"https://codepen.io/strangerintheq"},"@strangerintheq"),") on ",u.default.createElement("a",{href:"https://codepen.io"},"CodePen"),"."),u.default.createElement("iframe",{className:"codepen",style:{gridColumn:e?"1/3":"3/5",gridRow:e?"3/5":"1/3"},scrolling:"no",title:"Genuary 18 - Definitely not a grid",src:"https://codepen.io/strangerintheq/embed/NWBaeVj?default-tab=result&editable=true",frameBorder:"no",loading:"lazy",allowTransparency:"true",allowFullScreen:"true"},"See the Pen ",u.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/NWBaeVj"},"Genuary 18 - Definitely not a grid")," by Stranger in the Q (",u.default.createElement("a",{href:"https://codepen.io/strangerintheq"},"@strangerintheq"),") on ",u.default.createElement("a",{href:"https://codepen.io"},"CodePen"),".")))}var W=a(s());var Ie=a(s());function ne(){return Ie.default.createElement("span",{dangerouslySetInnerHTML:{__html:`
        <svg style="vertical-align: middle" xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" 
        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
            <path d="M10 14l10 -10"></path>
            <path d="M15 4l5 0l0 5"></path>
        </svg>
    `}})}function Qe(){return W.default.createElement(W.default.Fragment,null,W.default.createElement(p,null,W.default.createElement("a",{href:"https://raw.githack.com/strangerintheq/collect-the-dots/master/index.html"},"Collect the Dots"),W.default.createElement(ne,null)),W.default.createElement(h,null,"Experiment to create a simple cell based game building framework. Gives ability to create game level design as text based cells types descriptions. One cell is described by one symbol. There are several type of cells: Empty, Wall, Coin, Key, Door, Spike, Exit, Bot. Development is abandoned. Not finished yet but relatively playable.",W.default.createElement("div",{className:"separator"}),W.default.createElement("a",{href:"https://github.com/strangerintheq/collect-the-dots"},"Source code"),W.default.createElement(ne,null)))}var d=a(s());function _e(){return d.default.createElement(d.default.Fragment,null,d.default.createElement(p,null,d.default.createElement("a",{href:"https://strangerintheq.art/mandelbrot.html"},"compleXplorer 0")),d.default.createElement(h,null,"Tool for exploring mandelbrot-like complex fractals. Yo can write a formula using glsl syntax and use several functions such as complex addition, subtraction, multiplication, division etc. While you exploring - you can copy a permanent link for the current view. Coloring taken from\xA0",d.default.createElement("a",{href:"https://iquilezles.org/articles/msetsmooth/"},"Inigo Quilez article"),"."),d.default.createElement(y,null,d.default.createElement("a",{href:"https://bit.ly/3cINX73"},d.default.createElement(w,{img:"site/resources/code/complexplorer0.jpg"})),d.default.createElement("a",{href:"https://bit.ly/3cnKEBG"},d.default.createElement(w,{img:"site/resources/code/complexplorer1.jpg"})),d.default.createElement("a",{href:"https://bit.ly/3tK59OT"},d.default.createElement(w,{img:"site/resources/code/complexplorer2.jpg"})),d.default.createElement("a",{href:"https://bit.ly/3vP4xt7"},d.default.createElement(w,{img:"site/resources/code/complexplorer3.jpg"})),d.default.createElement("a",{href:"https://bit.ly/3KEpyk8"},d.default.createElement(w,{img:"site/resources/code/complexplorer4.jpg"}))))}function Fe(){return k.default.createElement(k.default.Fragment,null,k.default.createElement(G,null,k.default.createElement(M,{dark:!1}),k.default.createElement(I,null,"Code"),k.default.createElement(h,null,"Here a collection of stuff made just for fun!"),k.default.createElement(qe,null),k.default.createElement(De,null),k.default.createElement(Qe,null),k.default.createElement(_e,null),k.default.createElement(Be,null)))}var ar=`<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');
* {
  
    margin: 0;
    font-weight: unset;
    box-sizing: border-box;
    font-family: "Source Code Pro", monospace;
    --base-size: min(1600px, 100vw);
}
body {
    overflow-x: hidden;
    overscroll-behavior: none;
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
    /*z-index: 1;*/
    pointer-events: none;
    background: black;
    transition: 300ms;
}
.loaded .backdrop {
    background: transparent;
}
</style>`;function Xe(){return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{dangerouslySetInnerHTML:{__html:ar}}),c.default.createElement(sr,null))}function sr(){let[e,r]=(0,c.useState)(document.location.search),i=(0,c.useRef)({searchString:document.location.search,rafLoop:0});return(0,c.useEffect)(()=>{let t=i.current;t.rafLoop=requestAnimationFrame(n);function n(){t.searchString!==document.location.search&&(t.searchString=document.location.search,r(t.searchString)),t.rafLoop=requestAnimationFrame(n)}return()=>{cancelAnimationFrame(t.rafLoop)}},[]),e?e.startsWith("?about")?c.default.createElement(Le,null):e.startsWith("?art/")?c.default.createElement(we,{route:e}):e.startsWith("?art")?c.default.createElement(ze,null):e.startsWith("?code")?c.default.createElement(Fe,null):c.default.createElement(ie,null):c.default.createElement(ie,{ts:Date.now()})}var Ke=document.createElement("div");document.body.append(Ke);(0,Ye.createRoot)(Ke).render(Ue.default.createElement(Xe,null));window.art=()=>{console.log("XXXXX")};window.art();})();
