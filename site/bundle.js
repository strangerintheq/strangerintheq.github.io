(()=>{var We=Object.create;var Y=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var Ee=Object.getOwnPropertyNames;var ze=Object.getPrototypeOf,De=Object.prototype.hasOwnProperty;var Q=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Le=(e,r,t,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of Ee(r))!De.call(e,n)&&n!==t&&Y(e,n,{get:()=>r[n],enumerable:!(i=Be(r,n))||i.enumerable});return e};var a=(e,r,t)=>(t=e!=null?We(ze(e)):{},Le(r||!e||!e.__esModule?Y(t,"default",{value:e,enumerable:!0}):t,e));var m=Q((Fe,J)=>{J.exports=window.React});var K=Q((Ue,Z)=>{Z.exports=window.ReactDOM});var O=Q(_=>{"use strict";var $=K();_.createRoot=$.createRoot,_.hydrateRoot=$.hydrateRoot;var Xe});var Ce=a(m()),je=a(O());var g=a(m());var T=a(m());var x=a(m());var Ye=document.location.href.includes("localhost")?"strangerintheq.github.io/":"";function R(e,r){return[...Array(e|0)].map((t,i)=>r(i))}function ee(e){return e[Math.random()*e.length|0]}async function re(e){return await(await fetch(e)).text()}function q(){return"oo"+R(50,()=>ee("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ")).join("")}function I(){return"0x"+R(64,()=>ee("0123456789abcdef")).join("")}function F(e){return e==="fx-hash"?q():I()}function te(e,r){return e.split(`
`).map(t=>t.includes("var fxhash =")?'var fxhash = "'+r+'";':t).join(`
`)}function oe(e,r){return e.split(`
`).map(t=>t.includes("window.tokenData =")?`window.tokenData = {hash:"${r}"};`:t).join(`
`)}function z({type:e,id:r,hash:t=null}){let[i,n]=(0,x.useState)(),[f,M]=(0,x.useState)();return(0,x.useEffect)(()=>{let W="site/resources/art/"+e+"/"+r+"/generator.html";re(W).then(M),console.log(W)},[r]),(0,x.useEffect)(()=>{f&&n(e==="fx-hash"?te(f,t||q()):oe(f,t||I()))},[f,t,e]),x.default.createElement(x.default.Fragment,null,i?x.default.createElement("iframe",{src:"data:text/html,"+encodeURIComponent(i),style:{pointerEvents:"all",backgroundImage:`url(data:image/svg+xml,${encodeURIComponent(`
                    <svg 
                        viewBox="${[-innerWidth/2,-innerHeight/2,innerWidth,innerHeight]}" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <text 
                            font-family="monospace" 
                            font-size="3em" 
                            text-anchor="middle" 
                            dominant-baseline="central"
                        >
                            L O A D I N G
                        </text>
                    </svg>
                `)})`,position:"fixed",top:0,left:0,zIndex:-1,border:0,width:"100vw",height:"100vh"}}):null)}var j=a(m());var U=a(m());function ie({children:e=null}){return U.default.createElement("div",{style:{margin:"0 -1rem"}},U.default.createElement("div",{className:"text-outline",style:{padding:"0.5rem 1rem",fontSize:"2.5rem",marginTop:"1rem",display:"flex",justifyContent:"space-between"}},e))}var ne=a(m());function N({to:e="",children:r=null}){return ne.default.createElement("span",{style:{textDecoration:"underline",cursor:"pointer",pointerEvents:"all"},onClick:()=>{document.location.search=e}},r)}function D(e){return Object.entries(e).map(([r,t])=>r+"="+t).join("&")}function y({dark:e=!1}){return j.default.createElement(ie,null,j.default.createElement("div",null,j.default.createElement(N,null,"Q")),j.default.createElement("div",null,j.default.createElement(N,{to:"page=about"},"about"),"\xA0",j.default.createElement(N,{to:"page=code"},"code"),"\xA0",j.default.createElement(N,{to:"page=art"},"art")))}var ae=a(m());function v(e){return ae.default.createElement("div",{style:{width:"var(--base-size)",margin:"0 calc(50vw - calc(var(--base-size) * 0.5))",padding:"0 calc(var(--base-size) * 0.1)",overflow:"visible"}},e.children)}var X=a(m());function me({children:e=null}){return X.default.createElement("div",{style:{margin:"0 -1rem"}},X.default.createElement("div",{className:"text-outline",style:{padding:"0.5rem 1rem",fontSize:"2.5rem",margin:"1rem 0",display:"flex",justifyContent:"center"}},e))}function Qe(e){let r=F(e);return document.location.search+="&hash="+r,r}function se(){let e=new URLSearchParams(document.location.search),r=e.get("type"),t=e.get("hash")||Qe(r),i=e.get("id"),n=D({type:r,id:i,page:"generator",hash:F(r)});return T.default.createElement(T.default.Fragment,null,T.default.createElement(v,null,T.default.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"column",height:"100vh",pointerEvents:"none"}},T.default.createElement(y,{dark:!0}),T.default.createElement(me,null,T.default.createElement(N,{to:n},i)))),T.default.createElement(z,{id:i,type:r,hash:t}))}var b=a(m());var de=a(m());var pe=a(m());function fe(e){(0,pe.useEffect)(()=>{document.title=e?"Q - "+e:"Stranger in the Q"})}function B({children:e=null}){return fe(e),de.default.createElement("div",{style:{fontSize:"5rem",marginTop:"2rem"}},e)}var u=a(m());var L=a(m());var le=a(m());function ge({img:e}){return le.default.createElement("div",{style:{backgroundImage:`url(${e})`,height:"100%",backgroundSize:"cover",backgroundPosition:"center center",boxShadow:"0 0 3px 0 #9c9898"}})}function o({name:e,type:r,img:t,hash:i=null,c:n=null,r:f=null,link:M=null}){let W=e.toLowerCase().replaceAll(" ","-");return L.default.createElement("div",{style:{gridColumn:n,gridRow:f}},L.default.createElement(N,{to:D({type:r,id:W,hash:i,page:"generator"})},L.default.createElement(ge,{img:t})))}var ue=a(m());function c({children:e=null,ratio:r,isMobile:t,rows:i}){let n=t?.02:.01,f=(.8-n*(t?1:3))/(t?2:4),M=ce(f),W=ce(f*r);return ue.default.createElement("div",{style:{margin:"2rem 0 6rem 0",display:"grid",gap:`calc(var(--base-size) * ${n})`,gridTemplateColumns:t?`${M} ${M}`:`${M} ${M} ${M} ${M}`,gridTemplateRows:`repeat(${i}, ${W})`}},e)}function ce(e){return`calc(var(--base-size) * ${e})`}var he=a(m());function d({children:e=null}){return he.default.createElement("div",{style:{fontSize:"2rem",marginTop:"2rem"}},e)}var E=a(m()),w="(max-width: 980px)";function k(e){let r=(0,E.useRef)(window.matchMedia(e)),[t,i]=(0,E.useState)(r.current.matches);return(0,E.useEffect)(()=>{let n=f=>i(f.matches);return r.current.addEventListener("change",n),()=>{r.current.removeEventListener("change",n)}},[]),{matches:t}}function be(){let{matches:e}=k(w),r=640,t="https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_"+r+",q_auto/https://artblocks-mainnet.s3.amazonaws.com/",i="https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_"+r+",q_auto/https://art-blocks-artist-staging-goerli.s3.amazonaws.com/",n="https://www.artblocks.io/collections/presents/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/419/tokens/",f={type:"artblocks",name:"Slice"};return u.default.createElement(u.default.Fragment,null,u.default.createElement(d,null,u.default.createElement("a",{href:"https://www.artblocks.io/collections/presents/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/419"},"SL/CE @ ArtBlocks 2023")),u.default.createElement(c,{isMobile:e,rows:e?4:2,ratio:1.618},u.default.createElement(o,{...f,c:e?"1/3":"2/4",r:"1/3",link:n+"419000000",hash:"0x61464f239e4a9706c864eaf3d8ccc966fe3ec89089752d803ee51adbea37e82c",img:t+"419000000.png"}),u.default.createElement(o,{...f,link:n+"419000000",hash:"0x7905f21577209c5fccc82170001218c7281e1991f6c42f7717adb819e2846805",img:i+"48000189.png"}),u.default.createElement(o,{...f,link:n+"419000000",hash:"0x0c8313ca762c7c8aa3b4c078435fd0a84aa17fb0872cc152103b8ff6f22f71a3",img:i+"48000161.png"}),u.default.createElement(o,{...f,link:n+"419000000",hash:"0xecfcfa98860f8fb143d54065186118cc2f429316982597494dc8cffd7f4e4283",img:i+"48000015.png"}),u.default.createElement(o,{...f,link:n+"419000000",hash:"0xfb031983bdfc22fb8e1c8956d6feb654dfef92b5a7f5de4b08e39681b0f68cd3",img:i+"48000055.png"})))}var h=a(m());function xe(){let{matches:e}=k(w),t="https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_"+640+",q_auto/https://artblocks-mainnet.s3.amazonaws.com/",i="https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/265/tokens/",n={type:"artblocks",name:"Tentura"};return h.default.createElement(h.default.Fragment,null,h.default.createElement(d,null,h.default.createElement("a",{href:"https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/265"},"Tentura @ ArtBlocks 2022")),h.default.createElement(c,{ratio:1,isMobile:e,rows:e?4:2},h.default.createElement(o,{...n,c:e?"1/3":"2/4",r:"1/3",link:i+"265000000",hash:"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930",img:t+"265000000.png"}),h.default.createElement(o,{...n,link:i+"265000031",hash:"0x8cf4266960518b81ae27bd417c0b68e4141a2d531dfc44460708e00b98dfb7f4",img:t+"265000031.png"}),h.default.createElement(o,{...n,link:i+"265000197",hash:"0xe359ebb5e9a5cc2f24b964fc2f33b4e3635b56c08cc77d4cc0290f28ef1656da",img:t+"265000197.png"}),h.default.createElement(o,{...n,link:i+"265000212",hash:"0xa23afc7294ee196ec119d6a55820b507c227821d4608899f8f1a7ddc06b7af4e",img:t+"265000212.png"}),h.default.createElement(o,{...n,link:i+"265000269",hash:"0xa7ececac02b48d8f78121349382d77a6134f5d0a6d6f8e7df7afca27d6369a52",img:t+"265000269.png"})))}var s=a(m());function ye(){let{matches:e}=k(w),r="https://www.fxhash.xyz/generative/",t="https://media.fxhash.xyz/w_768/";return s.default.createElement(s.default.Fragment,null,s.default.createElement(d,null,s.default.createElement("a",{href:"https://www.fxhash.xyz/u/StrangerintheQ"},"fx(hash) 2022-2023")),s.default.createElement(c,{isMobile:e,ratio:1,rows:e?6:3},s.default.createElement(o,{type:"fx-hash",name:"Magic Ritual",link:r+"24704",hash:"ookiXAnGJw28AAv6JVLXiyZceTF9nJSRAxgytsUDV9Gu3na4zeN",img:t+"QmbABZquDop8bhVWb49HcU7t4vFgHU1s9ZFomPxeznmr4J"}),s.default.createElement(o,{type:"fx-hash",name:"Mayan Carpet",link:r+"24611",hash:"oo2WuxbvWm77MLimMCfrt54zXRHhe8HcFqPVPfGxF53Be85Rnhe",img:t+"QmScLVUE7HzUvSWy1hTVsqA2WCU6icED9BQbgVDHt4xJV2"}),s.default.createElement(o,{type:"fx-hash",name:"Other side of the Amulet",link:r+"15301",hash:"oo274c4kMq5xbm7CpvJ6rDHatuuZwhEACfgaQ4BXy9XX4eTu4q7",img:t+"QmWs8VMiyr5FTSSfjvf1g3bprS8JNxM8wzAbXFRvVnR3aG"}),s.default.createElement(o,{type:"fx-hash",name:"Hyperspacers",link:r+"14107",hash:"ooXtaB52GRHraEgQEnT7k9oJzWYPbYbiycXFGmUqNa34bwV53ZX",img:t+"QmP67iCt3gayuZGVLafGSYfXUgkJ35hbyiDxgNsGN6LZNQ"}),s.default.createElement(o,{type:"fx-hash",name:"Amulet",link:r+"13115",hash:"ooognYT3x6SRXbUCKcu34Z7ffDJDrR1KmZE4G4NMo15fZ3pMyuf",img:t+"QmNrMUYWUWMWjMyN6focKCBKMMqGcFofhvxMHBGNmUxYG6"}),s.default.createElement(o,{type:"fx-hash",name:"Mitosis",link:r+"4058",hash:"ooFeDgPwQRjiVXkupQn7wUBdbUjBQaAvFBPDpMN6iGqc5Wgv9N3",img:t+"QmeNYkvW72PY1FA14E3NP2fnHfuNvpQQhowFgJ7cZbGuXf"}),s.default.createElement(o,{type:"fx-hash",name:"Cellulae",link:r+"1393",hash:"oohTtY7QKgRpUDnvbrPdAgUgxgd7p1BpyKZK3BKZqfNmWGv5qrL",img:t+"QmTP2YDBnWNohuAD5mtvDsEMdPa6Edf4Tf8rCS5MyhKAzX"}),s.default.createElement(o,{type:"fx-hash",name:"Arachna",link:r+"959",hash:"ooZxg5naW6KQxijqjDQfFLtGDSBgG2HsMGPtymKfq7PxgRvRdB6",img:t+"QmXzaZC1CfSQBm9f7CoBjsBAM153HNYermqY8CPoSdkSYB"}),s.default.createElement(o,{type:"fx-hash",name:"Gravitzappa",link:r+"430",hash:"oo1WHxm95PJeziDbtPvqtZsEHyufnKZSiY8nJMMDCMxoTVEcLRk",img:t+"Qmd2NxZiw3kxWowXcu3ZBfCT633UVfstYDV3zJSaLAmcJn"}),s.default.createElement(o,{type:"fx-hash",name:"Plexus",link:r+"206",hash:"oopWDMeU2jwUksfUee8yjfU8EqN3Sh4osBbdymLya5xTmiGhoVg",img:t+"QmY81Ege4BLhYetp4JTH1Z7KMZmvKmy5vZmtjsSyr2YsH2"}),s.default.createElement(o,{type:"fx-hash",name:"Squatree",link:r+"45",hash:"oo1M8TxFJQ7T1vSHoUgMCA3zAxLHeNcjHQ45RoomKyCdc57ModH",img:t+"QmbBzpLyJAitVDn8hkv6JAF6kZRkk46Eba3UKfNXrTWGc8"}),s.default.createElement(o,{type:"fx-hash",name:"Hidden Square",link:r+"19",hash:"ooJgyLKPdBbW1YbNk8cXbHpDdWV9886cJyx934pKwoNUru3RNKD",img:t+"QmQ8TYQ8qb29BxTp8kASocMirfuGf5nMXpArEohpG9tzuX"})))}var p=a(m());function ve(){let{matches:e}=k(w),r="site/resources/art/teia/",t="https://objkt.com/asset/hicetnunc/";return p.default.createElement(p.default.Fragment,null,p.default.createElement(d,null,p.default.createElement("a",{href:"https://objkt.com/profile/tz2MHcnM7fEVtExELMPBZb5njDweqMGvbn8A/created?faContracts=KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton"},"teia.art (ex Hic Et Nunc) 2021")),p.default.createElement(c,{isMobile:e,ratio:1,rows:e?6:3},p.default.createElement(o,{type:"teia",name:"Needlework",link:t+"520033",img:r+"needlework/preview.jpeg"}),p.default.createElement(o,{type:"teia",name:"Warp Engine",link:t+"490373",img:r+"warp-engine/preview.jpeg"}),p.default.createElement(o,{type:"teia",name:"Re-Tiler",link:t+"468682",img:r+"re-tiler/preview.jpeg"}),p.default.createElement(o,{type:"teia",name:"Neural Interface",link:t+"447479",img:r+"neural-interface/preview.jpeg"}),p.default.createElement(o,{type:"teia",name:"Artificial Eye",link:t+"440706",img:r+"artificial-eye/preview.jpeg"}),p.default.createElement(o,{type:"teia",name:"The Nest",link:t+"404417",img:r+"the-nest/preview.jpeg"}),p.default.createElement(o,{type:"teia",name:"Mozaic Perception",link:t+"393547",img:r+"mozaic-perception/preview.jpeg"}),p.default.createElement(o,{type:"teia",name:"Dancing Souls",link:t+"384125",img:r+"dancing-souls/preview.jpeg"}),p.default.createElement(o,{type:"teia",name:"Nucle",link:t+"343072",img:r+"nucle/preview.png"}),p.default.createElement(o,{type:"teia",name:"Inner Sight",link:t+"324272",img:r+"inner-sight/preview.png"}),p.default.createElement(o,{type:"teia",name:"Simplicity",link:t+"279928",img:r+"simplicity/preview.png"}),p.default.createElement(o,{type:"teia",name:"Steam Cells",link:t+"274293",img:r+"steam-cells/preview.png"})))}var we=a(m());function P({children:e=null}){return we.default.createElement("div",{style:{fontSize:"1.5rem",marginTop:"2rem"}},e)}function V(){return b.default.createElement(v,null,b.default.createElement(y,null),b.default.createElement(B,null,"Art"),b.default.createElement(P,null,"All of these projects are real-time pseudo-random image generators. The same image can never be generated. Clicking the link at the bottom of the page will generate a new image. Each generated image has its own hash and link. Every time you visit that link, you get the same result.",b.default.createElement("br",null),b.default.createElement("br",null),"Please enjoy!"),b.default.createElement(be,null),b.default.createElement(xe,null),b.default.createElement(ye,null),b.default.createElement(ve,null))}var S=a(m());var ke=[["teia","re-tiler"]];function Pe(){let[e,r]=(0,S.useState)();return(0,S.useEffect)(()=>{let[t,i]=ke[Math.random()*ke.length|0];r({type:t,id:i})},[]),S.default.createElement(S.default.Fragment,null,e&&S.default.createElement(z,{type:e.type,id:e.id}),S.default.createElement(v,null,S.default.createElement(y,{dark:!0})))}var A=a(m());function Se(){return A.default.createElement(A.default.Fragment,null,A.default.createElement(v,null,A.default.createElement(y,{dark:!1}),A.default.createElement(B,null,"About"),A.default.createElement(d,null,"Hello there! I'm Stranger in the Q and i'm making art with code."),A.default.createElement(P,null,"I have been working as a software developer for about 2 decades now. I develop various user interfaces and other things related to computer graphics. At one point I started creating images using code to teach myself math and algorithms. Over time, I learned more about it and became very interested in it. That's how I realized it was an art, a\xA0",A.default.createElement("span",{style:{fontWeight:"bold"}},"Generative Art"),".")))}var C=a(m());var H=a(m());function He(){return H.default.createElement(H.default.Fragment,null,H.default.createElement(d,null,H.default.createElement("a",{href:"https://github.com/strangerintheq/rgba"},"RGBA.js")),H.default.createElement(P,null,"Yet another tiny (~250 lines of code) webgl/fragment shader tool.",H.default.createElement("br",null),"It focusing on hiding webgl/javascript code from you, not too performant, but giving ability to write fragment shader code only (in simple cases).",H.default.createElement("br",null),"Firstly created for using in my\xA0",H.default.createElement("a",{href:"https://codepen.io/collection/AWEWzK"},"codepen experiments"),"."),H.default.createElement(c,{ratio:1,isMobile:!1,rows:1}))}var G=a(m());function Me(){return G.default.createElement(G.default.Fragment,null,G.default.createElement(d,null,G.default.createElement("a",{href:"https://github.com/strangerintheq/hare-and-carrots"},"Hare and Carrots")),G.default.createElement(P,null,"Funny experiment to create a game about hare. ",G.default.createElement("br",null),"You can jump around, eat the carrots and..."))}var l=a(m());function Ne(){let{matches:e}=k(w);return l.default.createElement(l.default.Fragment,null,l.default.createElement(d,null,l.default.createElement("a",{href:"https://github.com/strangerintheq/justlib"},"just-lib")),l.default.createElement(P,null,"Collection of javascript functions to faster create an generative artworks. Created to participate in\xA0",l.default.createElement("a",{href:"https://genuary.art/"},"genuary"),"\xA02023 event"),l.default.createElement(c,{ratio:.75,isMobile:e,rows:e?4:2},l.default.createElement("iframe",{className:"codepen",style:{gridColumn:"1/3",gridRow:"1/3"},scrolling:"no",title:"Genuary 4 - Intersections",src:"https://codepen.io/strangerintheq/embed/vYaXVwL?default-tab=result&editable=true",frameBorder:"no",loading:"lazy",allowTransparency:"true",allowFullScreen:"true"},"See the Pen ",l.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/vYaXVwL"},"Genuary 4 - Intersections")," by Stranger in the Q (",l.default.createElement("a",{href:"https://codepen.io/strangerintheq"},"@strangerintheq"),") on ",l.default.createElement("a",{href:"https://codepen.io"},"CodePen"),"."),l.default.createElement("iframe",{className:"codepen",style:{gridColumn:e?"1/3":"3/5",gridRow:e?"3/5":"1/3"},scrolling:"no",title:"Genuary 18 - Definitely not a grid",src:"https://codepen.io/strangerintheq/embed/NWBaeVj?default-tab=result&editable=true",frameBorder:"no",loading:"lazy",allowTransparency:"true",allowFullScreen:"true"},"See the Pen ",l.default.createElement("a",{href:"https://codepen.io/strangerintheq/pen/NWBaeVj"},"Genuary 18 - Definitely not a grid")," by Stranger in the Q (",l.default.createElement("a",{href:"https://codepen.io/strangerintheq"},"@strangerintheq"),") on ",l.default.createElement("a",{href:"https://codepen.io"},"CodePen"),".")))}function Te(){return C.default.createElement(C.default.Fragment,null,C.default.createElement(v,null,C.default.createElement(y,{dark:!1}),C.default.createElement(B,null,"Code"),C.default.createElement(Ne,null),C.default.createElement(Me,null),C.default.createElement(He,null)))}var _e=`<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');
* {
    margin: 0;
    font-weight: unset;
    box-sizing: border-box;
    font-family: "Source Code Pro", monospace;
    overflow-x: hidden;
    --base-size: min(1600px, 100vw);
}
.codepen {
    height: 100%;
    width: 100%;
}
body {
    pointer-events: none;
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
</style>`;function Ae(){return g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{dangerouslySetInnerHTML:{__html:_e}}),g.default.createElement(qe,null))}function qe(){let[e,r]=(0,g.useState)();return(0,g.useEffect)(()=>{let t=new URLSearchParams(document.location.search);r(t.get("page"))},[document.location.search]),e==="art"?g.default.createElement(V,null):e==="about"?g.default.createElement(Se,null):e==="generator"?g.default.createElement(se,null):e==="art"?g.default.createElement(V,null):e==="code"?g.default.createElement(Te,null):g.default.createElement(Pe,null)}var Ge=document.createElement("div");document.body.append(Ge);(0,je.createRoot)(Ge).render(Ce.default.createElement(Ae,null));})();
