var H,a,L,t,i,u,e,r,f,S,x=(e,a)=>({x:e,y:a}),{abs:U,sin:W,cos:n,max:Z,min:q,atan2:z,sign:G,hypot:J}=c=Math,l=c.PI,o=l/2,K=2*l,p=(e,t)=>[...Array(0|e)].map((e,a)=>t(a)),O=(a,t,r=1)=>p(a,e=>t(e/(a-1)*r)),Q=(H=tokenData.hash,a=new Uint32Array([1,3,2,4].map(e=>parseInt(H.substr(8*e,8),16))),e=>(t=a[3],a[3]=a[2],a[2]=a[1],a[1]=L=a[0],a[0]^=(t^=t<<11)^t>>>8^L>>>19,a[0]/2**32)),v=(e=1,a=0)=>Q()*e+a,b=(e=2,a=0)=>a+v(0|e)|0,g=(e=.5)=>v()>e,F=(e=1)=>v(e)-e/2,T=e=>b(4)*l/2,V=e=>b(8)*l/4,d=e=>e[b(e.length)],c="F2F1DFF2BD1DD94711591812181212#e8d5b9c07a38df3146f5b3490e2430#f3efeff7b32b0c6291b80c09091e05#f1faeee63946a8ccdc457b9d1d3557#dff3e4bca2cd7d73c6684da2171738#dccfa39f8f6544443bc6110f12130b#fff7f4ffc6c6ff2f4ec60a5f820a5f#ccc9a1f0ffcea53f2b60290e280004#ecf39e90a9554f772d31572c132a13#e0fbfc98c1d9ee6c4d3d5a80293241#fffcf2ccc5b9503d39252422eb5e28#8ecae6219ebc023047ffb703fb8500#000000FFFFFFdddddd444444888888#f4ca55284862d6644a3a8acafffeef#C20F002374C6FFDD22ffffff000000#fbfffe96031a1b1b1e6d676efaa916#ffffff375ba9000000d6d6d6fca311".split("#").map(e=>e.match(/.{6}/g).map(e=>"#"+e)),h=.618,y=.5/h,X=V()+(g()?0:F(.2)),s=b(17),m=b(4),w=[0,v(.04,.01),v(.04,.01),v(.1,.05)][m],Y=(g(),g()),_=b(2),ee=(m=d([0,1,1,1,2])<2&&g(),g()),ae=(e,a,t)=>e+(a-e)*t,D=(e,a)=>{var t=n(a);return a=W(a),x(e.x*t+e.y*a,-e.x*a+e.y*t)},C=(e,a,t=1)=>(e.x+=a.x*t,e.y+=a.y*t,e),te=(e,a)=>x(n(e)*a,W(e)*a),re=(e,a)=>J(e.x-a.x,e.y-a.y),fe=(e,a)=>z(a.y-e.y,a.x-e.x),I=(e,a,t)=>x(ae(e.x,a.x,t),ae(e.y,a.y,t)),ne=[e=>p(d([1,2]),()=>{var e=G(F());return[x(-9,-9*e),x(9,9*e)]}),e=>{let t=T();return p(d([1,2,3]),e=>{var a=F(1);return[D(x(-9,a),t),D(x(9,a),t)]})}],le=(a,t,e,r)=>e.map(e=>C(te(e,r(e)),{x:a,y:t})),pe=(a,t,r,f)=>{let n=[];for(let e=a;e<t;e+=v(f,r))n.push(e);return n.push(t),n},A=(e,a,t)=>le(e,a,pe(0,K,.05,.1),e=>t),M=(e,a,t)=>D(x(e,a),t),ce=(e,a,t)=>e.map(e=>C(e,{x:a,y:t})),he=(e,a,t,r,f=0)=>ce([M(-t,-r,-f),M(t,-r,-f),M(t,r,-f),M(-t,r,-f)],e,a).map(e=>Y?{x:e.x+F(.02),y:e.y+F(.02)}:e),ie=(e,a,t,r)=>{let f=[],n=g(),l=r||b(4,2),p=v(1,.5),c=v(1.5,1.5);for(let e=0;e<l;e++){var h=e/l*t-t/2,i=F(p)*t,u=t/l/2*c*(n?v(.5,.5):1),d=v(p/3*2,p/3)*t;f.push(he(h,i,u,d*(g(.2)?1:4)))}let y=x(e,a),s=T()+X,m=b(2);return f.map(e=>{let a=m&&b(2)*o,t=s+a;return a&&m--,e.map(e=>D(e,t)).map(e=>C(e,y))})},ue=(e,a,t)=>[...A(e,a,t),...A(e,a,t*v(.22,.55)).reverse()],de=(e,a,t,r,f=0)=>{var n=t/2,l=r/2;return ce([M(-t,-r,f=-f),M(t,-r,f),M(t,r,f),M(-t,r,f),M(-t,-r,f),M(-n,-l,f),M(-n,l,f),M(n,l,f),M(n,-l,f),M(-n,-l,f)],e,a)},ye=(e,a,t)=>{let r=o+F(.2);return le(e,a,pe(0,K,.05,.1),e=>t*(n(e+r)**2+n(e+r)+3.5)*.2)},N=r=>r.reduce((e,a,t)=>e+a.x*(t=r[t+1]||r[0]).y-a.y*t.x,0)/2,P=(e,a)=>({p:e,a:N(e)}),R=t=>t.map((e,a)=>[e,t[(a+1)%t.length]]),se=(e,a,t)=>I(e,a,q(.5,t/re(e,a))),$=(e,a,t)=>!(e-1e-7<=a&&a<=t+1e-7),me=(e,a,t,r)=>{r&&e.push({...t},{...r}),a.push({...r||t})},j=(n,l,a,p,c)=>{for(let f=0;f<l.length;f++){let t=[],e=fe(...l[f]),r=te(e,.025*b(3));n.map(e=>{if(g(1-p)&&1<n.length||9<n.length)return t.push(e);let a=((e,t)=>{let r=[],f=[],n=0;return R(e).map(e=>{var a=(([e,a],[t,r])=>{var f=e.x,n=a.x,l=t.x,p=r.x,c=f*(a=a.y)-(e=e.y)*n,h=l*(r=r.y)-(t=t.y)*p,i=e-a,u=t-r,d=(s=f-n)*u-i*(y=l-p),y=(c*y-s*h)/d,s=(c*u-i*h)/d;if(isNaN(y+s))return!1;if(n<=f){if($(n,y,f))return!1}else if($(f,y,n))return!1;if(a<=e){if($(a,s,e))return!1}else if($(e,s,a))return!1;if(p<=l){if($(p,y,l))return!1}else if($(l,y,p))return!1;if(r<=t){if($(r,s,t))return!1}else if($(t,s,r))return!1;return{x:y,y:s}})(t,e);a&&n++,n%2?me(r,f,e[0],a):me(f,r,e[0],a)}),n<2?[e]:[r,f]})(e,l[f]);g(1-c)&&a[0].map(e=>C(e,r)),t.push(...a)}),g(1-a)&&(h=t)[1]&&h.sort((e,a)=>N(a)-N(e)).pop(),n=t}var h;return n},xe=[[x(-.5+w,-9),x(-.5+w,9)],[x(.5-w,-9),x(.5-w,9)],[x(-9,-y+w),x(9,-y+w)],[x(-9,y-w),x(9,y-w)]],oe=e=>!e.some(e=>(e=>U(e.x)>.5-w||U(e.y)>y-w)(e)),ve=v(10,10),be=e=>e.map(e=>ee&&g()&&e.length<5?(()=>R(R(e)).map(([[e],[a,t]])=>{var r,f=h/ve,n=se(a,e,f),l=se(r=a,t,f);return O(33,e=>I(I(n,r,e),I(r,l,e),e))}).flat())():e),ge=(e,a)=>e.fillStyle=a,Fe=(e,a,t)=>{ge(e,t),e.fill(new Path2D("M"+a.map(e=>[e.x,e.y]).join("L")+"Z"))},we=e=>e.canvas,k=e=>we(e).width,De=e=>e.map(e=>[e,v()]).sort((e,a)=>e[1]-a[1]).map(e=>e[0]),B=De(c[s]),E=(e=>{let a=document.createElement("canvas");var t=a;window.onload=()=>document.body.append(t);let r=innerWidth,f=innerHeight,n=e<r/f,l=a.style;return l.width=n?`calc(100vh*${e})`:"100vw",l.height=n?"100vh":`calc(100vw/${e})`,a.width=2*(0|(n?f*e:r)),a.height=2*(0|(n?f:r/e)),a})(c=h).getContext("2d");for((c=s=E).translate(k(c)/2,we(c).height/2),(c=s).scale(k(c),k(c)),s=p=>{if((c=u.map((e,a)=>[e.a,a]).sort((e,a)=>a[0]-e[0])).length){var c=c[c.length/2|0][1],h=u[c];u.splice(c,1);let a=fe(...i[0])+p,e=g()?b(33,44):b(11,22),t=O(2*e,e=>[D(x(2,2*e-1),a),D(x(-2,2*e-1),a)]),r=d([0,0,.1,.5]),f=d([0,0,.1,.5]),n=d([0,0,.1,.5]),l=j([h.p],t,n,r,f);u.push(...l.map(P))}},k=B.pop();i=ne[_](),e=v(.1,.4),r=F(h),f=F(.4),S=V(),u=g(.7)?ie(f,r,e,e):[d([ue,ue,A,A,ye,ye,de,he])(f,r,e,e,S)],u=j(be(u),i,d([0,.1,.5]),0,.5),(()=>{for(let e=0;e<99;e++){let a=v(.3,.2),t=F(.7-a),r=F(1-a),f=!0;for(let e=0;e<u.length&&f;e++){var n=u[e];for(let e=0;e<n.length&&f;e++)((f,n,e,a,t)=>{let l={x:e,y:a},r=(()=>{var[e,a]=[f,n],t=a.x-e.x,r=q(1,Z(((l.x-e.x)*t+(l.y-e.y)*(a=a.y-e.y))/(t*t+a*a),0));return x(e.x+r*t,e.y+r*a)})();return re(r,l)<t})(n[e],n[(e+1)%n.length],t,r,+a)&&(f=!1)}var l,p,c;if(!f)return c=j(be(ie(l=t,p=r,a)),i.map(([e,a])=>[C({...e},{x:l,y:p}),C({...a},{x:l,y:p})]),d([0,.1]),.1,.5),u.push(...c)}})(),u=(u=j(u,xe,0,0,0)).filter(oe).map(P),(()=>{if(u.filter(e=>.1<e.a).length<4)return!0;E.clearRect(-4,-4,8,8),u.map(e=>Fe(E,e.p,"#f0f"));let{width:r,height:f}=E.canvas,n=E.getImageData(0,0,r,f).data,l=0;p(999,e=>{var a=(t=w*r)+v(r-2*t)|0,t=t+v(f-2*t)|0;2<n[4*(a+t*r)]&&l++});var e=l/999;return e<.3||.8<e})(););s(o),s(0),m&&u.push(...De([(a,t,r)=>p(2,e=>(e=[a,t+e*F(r),r/(e+1)],A(...e)))]).pop()(F(.7),F(h),v(.1,.1)).map(P)),ge(E,k),E.fillRect(-4,-4,8,8),u.sort((e,a)=>a.a-e.a).map((e,a)=>{Fe(E,e.p,B[a%B.length])})