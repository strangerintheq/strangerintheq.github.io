(()=>{var bo="133";var Df=0,xo=1,Ff=2;var yo=1,Ps=2,Ti=3,Ei=0,je=1,Dn=2,vo=1;var $t=0,Ai=1,cr=2,_o=3,Mo=4,Bf=5,Fn=100,zf=101,Nf=102,wo=103,So=104,Uf=200,Of=201,Hf=202,Gf=203,To=204,Eo=205,kf=206,Vf=207,Wf=208,qf=209,Xf=210,Yf=0,Jf=1,Zf=2,Is=3,$f=4,jf=5,Qf=6,Kf=7,lr=0,ed=1,td=2,_n=0,nd=1,id=2,rd=3,sd=4,ad=5,Ao=300,fr=301,dr=302,Li=303,Ds=304,hr=306,Fs=307,Bs=1e3,vt=1001,zs=1002,et=1003,Lo=1004;var Ro=1005;var tt=1006,od=1007;var ur=1008;var jt=1009,cd=1010,ld=1011,pr=1012,fd=1013,mr=1014,Qt=1015,Bn=1016,dd=1017,hd=1018,ud=1019,Ri=1020,pd=1021,zn=1022,Qe=1023,md=1024,gd=1025,bd=Qe,Nn=1026,Ci=1027,xd=1028,yd=1029,vd=1030,_d=1031,Md=1032,wd=1033,Co=33776,Po=33777,Io=33778,Do=33779,Fo=35840,Bo=35841,zo=35842,No=35843,Sd=36196,Uo=37492,Oo=37496,Td=37808,Ed=37809,Ad=37810,Ld=37811,Rd=37812,Cd=37813,Pd=37814,Id=37815,Dd=37816,Fd=37817,Bd=37818,zd=37819,Nd=37820,Ud=37821,Od=36492,Hd=37840,Gd=37841,kd=37842,Vd=37843,Wd=37844,qd=37845,Xd=37846,Yd=37847,Jd=37848,Zd=37849,$d=37850,jd=37851,Qd=37852,Kd=37853,eh=2200,th=2201,nh=2202,gr=2300,br=2301,Ns=2302,Un=2400,On=2401,xr=2402,Us=2500,Ho=2501,ih=0;var ht=3e3,Mn=3001,Os=3007,Hs=3002,rh=3003,Go=3004,ko=3005,Vo=3006,sh=3200,ah=3201,Hn=0,oh=1;var Gs=7680;var ch=519,Pi=35044,yr=35048;var Wo="300 es",Kt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}};var ks=Math.PI/180,Vs=180/Math.PI,st=[];for(let s=0;s<256;s++)st[s]=(s<16?"0":"")+s.toString(16);var lh=typeof crypto!="undefined"&&"randomUUID"in crypto;function At(){if(lh)return crypto.randomUUID().toUpperCase();let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(st[s&255]+st[s>>8&255]+st[s>>16&255]+st[s>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[t&63|128]+st[t>>8&255]+"-"+st[t>>16&255]+st[t>>24&255]+st[n&255]+st[n>>8&255]+st[n>>16&255]+st[n>>24&255]).toUpperCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function fh(s,e){return(s%e+e)%e}function Ws(s,e,t){return(1-t)*s+t*e}function qo(s){return(s&s-1)==0&&s!==0}function dh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}var V=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};V.prototype.isVector2=!0;var nt=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,c,l){let f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],h=n[7],d=n[2],u=n[5],m=n[8],b=i[0],x=i[3],p=i[6],g=i[1],T=i[4],y=i[7],E=i[2],L=i[5],_=i[8];return r[0]=a*b+o*g+c*E,r[3]=a*x+o*T+c*L,r[6]=a*p+o*y+c*_,r[1]=l*b+f*g+h*E,r[4]=l*x+f*T+h*L,r[7]=l*p+f*y+h*_,r[2]=d*b+u*g+m*E,r[5]=d*x+u*T+m*L,r[8]=d*p+u*y+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*r*f+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=f*a-o*l,d=o*c-f*r,u=l*r-a*c,m=t*h+n*d+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=h*b,e[1]=(i*l-f*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(f*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=u*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],c=i[1],l=i[4],f=i[7];return i[0]=t*r+n*c,i[3]=t*a+n*l,i[6]=t*o+n*f,i[1]=-n*r+t*c,i[4]=-n*a+t*l,i[7]=-n*o+t*f,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nt.prototype.isMatrix3=!0;function Xo(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}function vr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var Gn,wn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=vr("canvas")),Gn.width=e.width,Gn.height=e.height;let n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},hh=0,it=class extends Kt{constructor(e=it.DEFAULT_IMAGE,t=it.DEFAULT_MAPPING,n=vt,i=vt,r=tt,a=ur,o=Qe,c=jt,l=1,f=ht){super();Object.defineProperty(this,"id",{value:hh++}),this.uuid=At(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=At()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(qs(i[a].image)):r.push(qs(i[a]))}else r=qs(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ao)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case vt:e.x=e.x<0?0:1;break;case zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case vt:e.y=e.y<0?0:1;break;case zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};it.DEFAULT_IMAGE=void 0;it.DEFAULT_MAPPING=Ao;it.prototype.isTexture=!0;function qs(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?wn.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Oe=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,a=.01,o=.1,c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],u=c[5],m=c[9],b=c[2],x=c[6],p=c[10];if(Math.abs(f-d)<a&&Math.abs(h-b)<a&&Math.abs(m-x)<a){if(Math.abs(f+d)<o&&Math.abs(h+b)<o&&Math.abs(m+x)<o&&Math.abs(l+u+p-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,y=(u+1)/2,E=(p+1)/2,L=(f+d)/4,_=(h+b)/4,P=(m+x)/4;return T>y&&T>E?T<a?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=L/n,r=_/n):y>E?y<a?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=L/i,r=P/i):E<a?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=_/r,i=P/r),this.set(n,i,r,t),this}let g=Math.sqrt((x-m)*(x-m)+(h-b)*(h-b)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(h-b)/g,this.z=(d-f)/g,this.w=Math.acos((l+u+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oe.prototype.isVector4=!0;var at=class extends Kt{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t),this.texture=new it(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:tt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};at.prototype.isWebGLRenderTarget=!0;var Yo=class extends at{constructor(e,t,n){super(e,t);let i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}};Yo.prototype.isWebGLMultipleRenderTargets=!0;var Xs=class extends at{constructor(e,t,n){super(e,t,n);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};Xs.prototype.isWebGLMultisampleRenderTarget=!0;var gt=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],f=n[i+2],h=n[i+3],d=r[a+0],u=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=u,e[t+2]=m,e[t+3]=b;return}if(h!==b||c!==d||l!==u||f!==m){let x=1-o,p=c*d+l*u+f*m+h*b,g=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){let E=Math.sqrt(T),L=Math.atan2(E,p*g);x=Math.sin(x*L)/E,o=Math.sin(o*L)/E}let y=o*g;if(c=c*x+d*y,l=l*x+u*y,f=f*x+m*y,h=h*x+b*y,x===1-o){let E=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=E,l*=E,f*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],f=n[i+3],h=r[a],d=r[a+1],u=r[a+2],m=r[a+3];return e[t]=o*m+f*h+c*u-l*d,e[t+1]=c*m+f*d+l*h-o*u,e[t+2]=l*m+f*u+o*d-c*h,e[t+3]=f*m-o*h-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(i/2),h=o(r/2),d=c(n/2),u=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=d*f*h+l*u*m,this._y=l*u*h-d*f*m,this._z=l*f*m+d*u*h,this._w=l*f*h-d*u*m;break;case"YXZ":this._x=d*f*h+l*u*m,this._y=l*u*h-d*f*m,this._z=l*f*m-d*u*h,this._w=l*f*h+d*u*m;break;case"ZXY":this._x=d*f*h-l*u*m,this._y=l*u*h+d*f*m,this._z=l*f*m+d*u*h,this._w=l*f*h-d*u*m;break;case"ZYX":this._x=d*f*h-l*u*m,this._y=l*u*h+d*f*m,this._z=l*f*m-d*u*h,this._w=l*f*h+d*u*m;break;case"YZX":this._x=d*f*h+l*u*m,this._y=l*u*h+d*f*m,this._z=l*f*m-d*u*h,this._w=l*f*h-d*u*m;break;case"XZY":this._x=d*f*h-l*u*m,this._y=l*u*h-d*f*m,this._z=l*f*m+d*u*h,this._w=l*f*h+d*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-c)*u,this._y=(r-l)*u,this._z=(a-i)*u}else if(n>o&&n>h){let u=2*Math.sqrt(1+n-o-h);this._w=(f-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+l)/u}else if(o>h){let u=2*Math.sqrt(1+o-n-h);this._w=(r-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+f)/u}else{let u=2*Math.sqrt(1+h-n-o);this._w=(a-i)/u,this._x=(r+l)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+i*l-r*c,this._y=i*f+a*c+r*o-n*l,this._z=r*f+a*l+n*c-i*o,this._w=a*f-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*r+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),f=Math.atan2(l,o),h=Math.sin((1-t)*f)/l,d=Math.sin(t*f)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};gt.prototype.isQuaternion=!0;var S=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Jo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,f=c*n+o*t-r*i,h=c*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=l*c+d*-r+f*-o-h*-a,this.y=f*c+d*-a+h*-r-l*-o,this.z=h*c+d*-o+l*-a-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};S.prototype.isVector3=!0;var Ys=new S,Jo=new gt,St=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){let f=e[c],h=e[c+1],d=e[c+2];f<t&&(t=f),h<n&&(n=h),d<i&&(i=d),f>r&&(r=f),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){let f=e.getX(c),h=e.getY(c),d=e.getZ(c);f<t&&(t=f),h<n&&(n=h),d<i&&(i=d),f>r&&(r=f),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox),Js.applyMatrix4(e.matrixWorld),this.union(Js));let n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),_r.subVectors(this.max,Di),kn.subVectors(e.a,Di),Vn.subVectors(e.b,Di),Wn.subVectors(e.c,Di),en.subVectors(Vn,kn),tn.subVectors(Wn,Vn),Sn.subVectors(kn,Wn);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-Sn.z,Sn.y,en.z,0,-en.x,tn.z,0,-tn.x,Sn.z,0,-Sn.x,-en.y,en.x,0,-tn.y,tn.x,0,-Sn.y,Sn.x,0];return!Zs(t,kn,Vn,Wn,_r)||(t=[1,0,0,0,1,0,0,0,1],!Zs(t,kn,Vn,Wn,_r))?!1:(Mr.crossVectors(en,tn),t=[Mr.x,Mr.y,Mr.z],Zs(t,kn,Vn,Wn,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ii.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ht),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};St.prototype.isBox3=!0;var Ht=[new S,new S,new S,new S,new S,new S,new S,new S],Ii=new S,Js=new St,kn=new S,Vn=new S,Wn=new S,en=new S,tn=new S,Sn=new S,Di=new S,_r=new S,Mr=new S,Tn=new S;function Zs(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Tn.fromArray(s,r);let o=i.x*Math.abs(Tn.x)+i.y*Math.abs(Tn.y)+i.z*Math.abs(Tn.z),c=e.dot(Tn),l=t.dot(Tn),f=n.dot(Tn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}var uh=new St,Zo=new S,$s=new S,js=new S,En=class{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):uh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){js.subVectors(e,this.center);let t=js.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(js.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return $s.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Zo.copy(e.center).add($s)),this.expandByPoint(Zo.copy(e.center).sub($s)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gt=new S,Qs=new S,wr=new S,nn=new S,Ks=new S,Sr=new S,ea=new S,An=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gt.copy(this.direction).multiplyScalar(t).add(this.origin),Gt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qs.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),nn.copy(this.origin).sub(Qs);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wr),o=nn.dot(this.direction),c=-nn.dot(wr),l=nn.lengthSq(),f=Math.abs(1-a*a),h,d,u,m;if(f>0)if(h=a*c-o,d=a*o-c,m=r*f,h>=0)if(d>=-m)if(d<=m){let b=1/f;h*=b,d*=b,u=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),u=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),u=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),u=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),u=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),u=-h*h+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(wr).multiplyScalar(d).add(Qs),u}intersectSphere(e,t){Gt.subVectors(e.center,this.origin);let n=Gt.dot(this.direction),i=Gt.dot(Gt)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),f>=0?(r=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(r=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gt)!==null}intersectTriangle(e,t,n,i,r){Ks.subVectors(t,e),Sr.subVectors(n,e),ea.crossVectors(Ks,Sr);let a=this.direction.dot(ea),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nn.subVectors(this.origin,e);let c=o*this.direction.dot(Sr.crossVectors(nn,Sr));if(c<0)return null;let l=o*this.direction.dot(Ks.cross(nn));if(l<0||c+l>a)return null;let f=-o*nn.dot(ea);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,c,l,f,h,d,u,m,b,x){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=f,p[10]=h,p[14]=d,p[3]=u,p[7]=m,p[11]=b,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/qn.setFromMatrixColumn(e,0).length(),r=1/qn.setFromMatrixColumn(e,1).length(),a=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*f,u=a*h,m=o*f,b=o*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=u+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+u*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*f,u=c*h,m=l*f,b=l*h;t[0]=d+b*o,t[4]=m*o-u,t[8]=a*l,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=u*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*f,u=c*h,m=l*f,b=l*h;t[0]=d-b*o,t[4]=-a*h,t[8]=m+u*o,t[1]=u+m*o,t[5]=a*f,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*f,u=a*h,m=o*f,b=o*h;t[0]=c*f,t[4]=m*l-u,t[8]=d*l+b,t[1]=c*h,t[5]=b*l+d,t[9]=u*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*l,m=o*c,b=o*l;t[0]=c*f,t[4]=b-d*h,t[8]=m*h+u,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=u*h+m,t[10]=d-b*h}else if(e.order==="XZY"){let d=a*c,u=a*l,m=o*c,b=o*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=d*h+b,t[5]=a*f,t[9]=u*h-m,t[2]=m*h-u,t[6]=o*f,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ph,e,mh)}lookAt(e,t,n){let i=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),rn.crossVectors(n,_t),rn.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),rn.crossVectors(n,_t)),rn.normalize(),Tr.crossVectors(_t,rn),i[0]=rn.x,i[4]=Tr.x,i[8]=_t.x,i[1]=rn.y,i[5]=Tr.y,i[9]=_t.y,i[2]=rn.z,i[6]=Tr.z,i[10]=_t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],h=n[5],d=n[9],u=n[13],m=n[2],b=n[6],x=n[10],p=n[14],g=n[3],T=n[7],y=n[11],E=n[15],L=i[0],_=i[4],P=i[8],X=i[12],N=i[1],A=i[5],Z=i[9],B=i[13],D=i[2],O=i[6],z=i[10],H=i[14],K=i[3],le=i[7],ge=i[11],re=i[15];return r[0]=a*L+o*N+c*D+l*K,r[4]=a*_+o*A+c*O+l*le,r[8]=a*P+o*Z+c*z+l*ge,r[12]=a*X+o*B+c*H+l*re,r[1]=f*L+h*N+d*D+u*K,r[5]=f*_+h*A+d*O+u*le,r[9]=f*P+h*Z+d*z+u*ge,r[13]=f*X+h*B+d*H+u*re,r[2]=m*L+b*N+x*D+p*K,r[6]=m*_+b*A+x*O+p*le,r[10]=m*P+b*Z+x*z+p*ge,r[14]=m*X+b*B+x*H+p*re,r[3]=g*L+T*N+y*D+E*K,r[7]=g*_+T*A+y*O+E*le,r[11]=g*P+T*Z+y*z+E*ge,r[15]=g*X+T*B+y*H+E*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],u=e[14],m=e[3],b=e[7],x=e[11],p=e[15];return m*(+r*c*h-i*l*h-r*o*d+n*l*d+i*o*u-n*c*u)+b*(+t*c*u-t*l*d+r*a*d-i*a*u+i*l*f-r*c*f)+x*(+t*l*h-t*o*u-r*a*h+n*a*u+r*o*f-n*l*f)+p*(-i*o*f-t*c*h+t*o*d+i*a*h-n*a*d+n*c*f)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],u=e[11],m=e[12],b=e[13],x=e[14],p=e[15],g=h*x*l-b*d*l+b*c*u-o*x*u-h*c*p+o*d*p,T=m*d*l-f*x*l-m*c*u+a*x*u+f*c*p-a*d*p,y=f*b*l-m*h*l+m*o*u-a*b*u-f*o*p+a*h*p,E=m*h*c-f*b*c-m*o*d+a*b*d+f*o*x-a*h*x,L=t*g+n*T+i*y+r*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/L;return e[0]=g*_,e[1]=(b*d*r-h*x*r-b*i*u+n*x*u+h*i*p-n*d*p)*_,e[2]=(o*x*r-b*c*r+b*i*l-n*x*l-o*i*p+n*c*p)*_,e[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*u-n*c*u)*_,e[4]=T*_,e[5]=(f*x*r-m*d*r+m*i*u-t*x*u-f*i*p+t*d*p)*_,e[6]=(m*c*r-a*x*r-m*i*l+t*x*l+a*i*p-t*c*p)*_,e[7]=(a*d*r-f*c*r+f*i*l-t*d*l-a*i*u+t*c*u)*_,e[8]=y*_,e[9]=(m*h*r-f*b*r-m*n*u+t*b*u+f*n*p-t*h*p)*_,e[10]=(a*b*r-m*o*r+m*n*l-t*b*l-a*n*p+t*o*p)*_,e[11]=(f*o*r-a*h*r-f*n*l+t*h*l+a*n*u-t*o*u)*_,e[12]=E*_,e[13]=(f*b*i-m*h*i+m*n*d-t*b*d-f*n*x+t*h*x)*_,e[14]=(m*o*i-a*b*i-m*n*c+t*b*c+a*n*x-t*o*x)*_,e[15]=(a*h*i-f*o*i+f*n*c-t*h*c-a*n*d+t*o*d)*_,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,f=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,f*o+n,f*c-i*a,0,l*c-i*o,f*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,f=a+a,h=o+o,d=r*l,u=r*f,m=r*h,b=a*f,x=a*h,p=o*h,g=c*l,T=c*f,y=c*h,E=n.x,L=n.y,_=n.z;return i[0]=(1-(b+p))*E,i[1]=(u+y)*E,i[2]=(m-T)*E,i[3]=0,i[4]=(u-y)*L,i[5]=(1-(d+p))*L,i[6]=(x+g)*L,i[7]=0,i[8]=(m+T)*_,i[9]=(x-g)*_,i[10]=(1-(d+b))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=qn.set(i[0],i[1],i[2]).length(),a=qn.set(i[4],i[5],i[6]).length(),o=qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Lt.copy(this);let l=1/r,f=1/a,h=1/o;return Lt.elements[0]*=l,Lt.elements[1]*=l,Lt.elements[2]*=l,Lt.elements[4]*=f,Lt.elements[5]*=f,Lt.elements[6]*=f,Lt.elements[8]*=h,Lt.elements[9]*=h,Lt.elements[10]*=h,t.setFromRotationMatrix(Lt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let o=this.elements,c=2*r/(t-e),l=2*r/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+r)/(a-r),u=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=u,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){let o=this.elements,c=1/(t-e),l=1/(n-i),f=1/(a-r),h=(t+e)*c,d=(n+i)*l,u=(a+r)*f;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*f,o[14]=-u,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xe.prototype.isMatrix4=!0;var qn=new S,Lt=new xe,ph=new S(0,0,0),mh=new S(1,1,1),rn=new S,Tr=new S,_t=new S,$o=new xe,jo=new gt,Ln=class{constructor(e=0,t=0,n=0,i=Ln.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],f=i[9],h=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $o.makeRotationFromQuaternion(e),this.setFromRotationMatrix($o,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jo.setFromEuler(this),this.setFromQuaternion(jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new S(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};Ln.prototype.isEuler=!0;Ln.DefaultOrder="XYZ";Ln.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Qo=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},gh=0,Ko=new S,Xn=new gt,kt=new xe,Er=new S,Fi=new S,bh=new S,xh=new gt,ec=new S(1,0,0),tc=new S(0,1,0),nc=new S(0,0,1),yh={type:"added"},ic={type:"removed"},Le=class extends Kt{constructor(){super();Object.defineProperty(this,"id",{value:gh++}),this.uuid=At(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DefaultUp.clone();let e=new S,t=new Ln,n=new gt,i=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new nt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Le.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return Ko.copy(e).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kt.lookAt(Fi,Er,this.up):kt.lookAt(Er,Fi,this.up),this.quaternion.setFromRotationMatrix(kt),i&&(kt.extractRotation(i.matrixWorld),Xn.setFromRotationMatrix(kt),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ic)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(ic)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),u=a(e.animations);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u)}return n.object=i,n;function a(o){let c=[];for(let l in o){let f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Le.DefaultUp=new S(0,1,0);Le.DefaultMatrixAutoUpdate=!0;Le.prototype.isObject3D=!0;var Rt=new S,Vt=new S,ta=new S,Wt=new S,Yn=new S,Jn=new S,rc=new S,na=new S,ia=new S,ra=new S,Ye=class{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rt.subVectors(e,t),i.cross(Rt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Rt.subVectors(i,t),Vt.subVectors(n,t),ta.subVectors(e,t);let a=Rt.dot(Rt),o=Rt.dot(Vt),c=Rt.dot(ta),l=Vt.dot(Vt),f=Vt.dot(ta),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);let d=1/h,u=(l*c-o*f)*d,m=(a*f-o*c)*d;return r.set(1-u-m,m,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wt),Wt.x>=0&&Wt.y>=0&&Wt.x+Wt.y<=1}static getUV(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Wt),c.set(0,0),c.addScaledVector(r,Wt.x),c.addScaledVector(a,Wt.y),c.addScaledVector(o,Wt.z),c}static isFrontFacing(e,t,n,i){return Rt.subVectors(n,t),Vt.subVectors(e,t),Rt.cross(Vt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rt.subVectors(this.c,this.b),Vt.subVectors(this.a,this.b),Rt.cross(Vt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ye.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ye.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ye.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ye.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ye.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Yn.subVectors(i,n),Jn.subVectors(r,n),na.subVectors(e,n);let c=Yn.dot(na),l=Jn.dot(na);if(c<=0&&l<=0)return t.copy(n);ia.subVectors(e,i);let f=Yn.dot(ia),h=Jn.dot(ia);if(f>=0&&h<=f)return t.copy(i);let d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(Yn,a);ra.subVectors(e,r);let u=Yn.dot(ra),m=Jn.dot(ra);if(m>=0&&u<=m)return t.copy(r);let b=u*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Jn,o);let x=f*m-u*h;if(x<=0&&h-f>=0&&u-m>=0)return rc.subVectors(r,i),o=(h-f)/(h-f+(u-m)),t.copy(i).addScaledVector(rc,o);let p=1/(x+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Yn,a).addScaledVector(Jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vh=0,ot=class extends Kt{constructor(){super();Object.defineProperty(this,"id",{value:vh++}),this.uuid=At(),this.name="",this.type="Material",this.fog=!0,this.blending=Ai,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.format=Qe,this.transparent=!1,this.blendSrc=To,this.blendDst=Eo,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===vo;continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenTint&&this.sheenTint.isColor&&(n.sheenTint=this.sheenTint.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(n.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(n.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(n.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==Qe&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};ot.prototype.isMaterial=!0;var sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ct={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function sa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function aa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var se=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=fh(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=sa(r,i,e+1/3),this.g=sa(r,i,e),this.b=sa(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let o=parseFloat(i[1])/360,c=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=sc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){let t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),a=Math.min(t,n,i),o,c,l=(a+r)/2;if(a===r)o=0,c=0;else{let f=r-a;switch(c=l<=.5?f/(r+a):f/(2-r-a),r){case t:o=(n-i)/f+(n<i?6:0);break;case n:o=(i-t)/f+2;break;case i:o=(t-n)/f+4;break}o/=6}return e.h=o,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Ct),Ct.h+=e,Ct.s+=t,Ct.l+=n,this.setHSL(Ct.h,Ct.s,Ct.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ct),e.getHSL(Ar);let n=Ws(Ct.h,Ar.h,t),i=Ws(Ct.s,Ar.s,t),r=Ws(Ct.l,Ar.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};se.NAMES=sc;se.prototype.isColor=!0;se.prototype.r=1;se.prototype.g=1;se.prototype.b=1;var Zn=class extends ot{constructor(e){super();this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Zn.prototype.isMeshBasicMaterial=!0;var He=new S,Lr=new V,$e=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Pi,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new se),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new V),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new S),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Oe),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pi&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};$e.prototype.isBufferAttribute=!0;var ca=class extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var la=class extends $e{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ac=class extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}};ac.prototype.isFloat16BufferAttribute=!0;var Be=class extends $e{constructor(e,t,n){super(new Float32Array(e),t,n)}};var _h=0,Tt=new xe,fa=new Le,$n=new S,Mt=new St,Bi=new St,rt=new S,ze=class extends Kt{constructor(){super();Object.defineProperty(this,"id",{value:_h++}),this.uuid=At(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xo(e)>65535?la:ca)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tt.makeRotationFromQuaternion(e),this.applyMatrix4(Tt),this}rotateX(e){return Tt.makeRotationX(e),this.applyMatrix4(Tt),this}rotateY(e){return Tt.makeRotationY(e),this.applyMatrix4(Tt),this}rotateZ(e){return Tt.makeRotationZ(e),this.applyMatrix4(Tt),this}translate(e,t,n){return Tt.makeTranslation(e,t,n),this.applyMatrix4(Tt),this}scale(e,t,n){return Tt.makeScale(e,t,n),this.applyMatrix4(Tt),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Be(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new St);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Mt.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(Mt.min,Bi.min),Mt.expandByPoint(rt),rt.addVectors(Mt.max,Bi.max),Mt.expandByPoint(rt)):(Mt.expandByPoint(Bi.min),Mt.expandByPoint(Bi.max))}Mt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(rt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)rt.fromBufferAttribute(o,l),c&&($n.fromBufferAttribute(e,l),rt.add($n)),i=Math.max(i,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new $e(new Float32Array(4*o),4));let c=t.tangent.array,l=[],f=[];for(let N=0;N<o;N++)l[N]=new S,f[N]=new S;let h=new S,d=new S,u=new S,m=new V,b=new V,x=new V,p=new S,g=new S;function T(N,A,Z){h.fromArray(i,N*3),d.fromArray(i,A*3),u.fromArray(i,Z*3),m.fromArray(a,N*2),b.fromArray(a,A*2),x.fromArray(a,Z*2),d.sub(h),u.sub(h),b.sub(m),x.sub(m);let B=1/(b.x*x.y-x.x*b.y);!isFinite(B)||(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-b.y).multiplyScalar(B),g.copy(u).multiplyScalar(b.x).addScaledVector(d,-x.x).multiplyScalar(B),l[N].add(p),l[A].add(p),l[Z].add(p),f[N].add(g),f[A].add(g),f[Z].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let N=0,A=y.length;N<A;++N){let Z=y[N],B=Z.start,D=Z.count;for(let O=B,z=B+D;O<z;O+=3)T(n[O+0],n[O+1],n[O+2])}let E=new S,L=new S,_=new S,P=new S;function X(N){_.fromArray(r,N*3),P.copy(_);let A=l[N];E.copy(A),E.sub(_.multiplyScalar(_.dot(A))).normalize(),L.crossVectors(P,A);let B=L.dot(f[N])<0?-1:1;c[N*4]=E.x,c[N*4+1]=E.y,c[N*4+2]=E.z,c[N*4+3]=B}for(let N=0,A=y.length;N<A;++N){let Z=y[N],B=Z.start,D=Z.count;for(let O=B,z=B+D;O<z;O+=3)X(n[O+0]),X(n[O+1]),X(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new S,r=new S,a=new S,o=new S,c=new S,l=new S,f=new S,h=new S;if(e)for(let d=0,u=e.count;d<u;d+=3){let m=e.getX(d+0),b=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,x),f.subVectors(a,r),h.subVectors(i,r),f.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,x),o.add(f),c.add(f),l.add(f),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,r),h.subVectors(i,r),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let a=n[i].array,o=e.attributes[i],c=o.array,l=o.itemSize*t,f=Math.min(c.length,a.length-l);for(let h=0,d=l;h<f;h++,d++)a[d]=c[h]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,c){let l=o.array,f=o.itemSize,h=o.normalized,d=new l.constructor(c.length*f),u=0,m=0;for(let b=0,x=c.length;b<x;b++){o.isInterleavedBufferAttribute?u=c[b]*o.data.stride+o.offset:u=c[b]*f;for(let p=0;p<f;p++)d[m++]=l[u++]}return new $e(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new ze,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let f=0,h=l.length;f<h;f++){let d=l[f],u=e(d,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];f.push(u.toJSON(e.data))}f.length>0&&(i[c]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let f=i[l];this.setAttribute(l,f.clone(t))}let r=e.morphAttributes;for(let l in r){let f=[],h=r[l];for(let d=0,u=h.length;d<u;d++)f.push(h[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,f=a.length;l<f;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.prototype.isBufferGeometry=!0;var oc=new xe,jn=new An,da=new En,sn=new S,an=new S,on=new S,ha=new S,ua=new S,pa=new S,Rr=new S,Cr=new S,Pr=new S,Ir=new V,Dr=new V,Fr=new V,ma=new S,Br=new S,Je=class extends Le{constructor(e=new ze,t=new Zn){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),e.ray.intersectsSphere(da)===!1)||(oc.copy(r).invert(),jn.copy(e.ray).applyMatrix4(oc),n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){let o=n.index,c=n.attributes.position,l=n.morphAttributes.position,f=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,u=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(i))for(let b=0,x=u.length;b<x;b++){let p=u[b],g=i[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,L=y;E<L;E+=3){let _=o.getX(E),P=o.getX(E+1),X=o.getX(E+2);a=zr(this,g,e,jn,c,l,f,h,d,_,P,X),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{let b=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=b,g=x;p<g;p+=3){let T=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);a=zr(this,i,e,jn,c,l,f,h,d,T,y,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let b=0,x=u.length;b<x;b++){let p=u[b],g=i[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,L=y;E<L;E+=3){let _=E,P=E+1,X=E+2;a=zr(this,g,e,jn,c,l,f,h,d,_,P,X),a&&(a.faceIndex=Math.floor(E/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{let b=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=b,g=x;p<g;p+=3){let T=p,y=p+1,E=p+2;a=zr(this,i,e,jn,c,l,f,h,d,T,y,E),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};Je.prototype.isMesh=!0;function Mh(s,e,t,n,i,r,a,o){let c;if(e.side===je?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side!==Dn,o),c===null)return null;Br.copy(o),Br.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Br);return l<t.near||l>t.far?null:{distance:l,point:Br.clone(),object:s}}function zr(s,e,t,n,i,r,a,o,c,l,f,h){sn.fromBufferAttribute(i,l),an.fromBufferAttribute(i,f),on.fromBufferAttribute(i,h);let d=s.morphTargetInfluences;if(r&&d){Rr.set(0,0,0),Cr.set(0,0,0),Pr.set(0,0,0);for(let m=0,b=r.length;m<b;m++){let x=d[m],p=r[m];x!==0&&(ha.fromBufferAttribute(p,l),ua.fromBufferAttribute(p,f),pa.fromBufferAttribute(p,h),a?(Rr.addScaledVector(ha,x),Cr.addScaledVector(ua,x),Pr.addScaledVector(pa,x)):(Rr.addScaledVector(ha.sub(sn),x),Cr.addScaledVector(ua.sub(an),x),Pr.addScaledVector(pa.sub(on),x)))}sn.add(Rr),an.add(Cr),on.add(Pr)}s.isSkinnedMesh&&(s.boneTransform(l,sn),s.boneTransform(f,an),s.boneTransform(h,on));let u=Mh(s,e,t,n,sn,an,on,ma);if(u){o&&(Ir.fromBufferAttribute(o,l),Dr.fromBufferAttribute(o,f),Fr.fromBufferAttribute(o,h),u.uv=Ye.getUV(ma,sn,an,on,Ir,Dr,Fr,new V)),c&&(Ir.fromBufferAttribute(c,l),Dr.fromBufferAttribute(c,f),Fr.fromBufferAttribute(c,h),u.uv2=Ye.getUV(ma,sn,an,on,Ir,Dr,Fr,new V));let m={a:l,b:f,c:h,normal:new S,materialIndex:0};Ye.getNormal(sn,an,on,m.normal),u.face=m}return u}var cn=class extends ze{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],f=[],h=[],d=0,u=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(h,2));function m(b,x,p,g,T,y,E,L,_,P,X){let N=y/_,A=E/P,Z=y/2,B=E/2,D=L/2,O=_+1,z=P+1,H=0,K=0,le=new S;for(let ge=0;ge<z;ge++){let re=ge*A-B;for(let we=0;we<O;we++){let Y=we*N-Z;le[b]=Y*g,le[x]=re*T,le[p]=D,l.push(le.x,le.y,le.z),le[b]=0,le[x]=0,le[p]=L>0?1:-1,f.push(le.x,le.y,le.z),h.push(we/_),h.push(1-ge/P),H+=1}}for(let ge=0;ge<P;ge++)for(let re=0;re<_;re++){let we=d+re+O*ge,Y=d+re+O*(ge+1),Q=d+(re+1)+O*(ge+1),he=d+(re+1)+O*ge;c.push(we,Y,he),c.push(Y,Q,he),K+=6}o.addGroup(u,K,X),u+=K,d+=H}}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qn(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ut(s){let e={};for(let t=0;t<s.length;t++){let n=Qn(s[t]);for(let i in n)e[i]=n[i]}return e}var Kn={clone:Qn,merge:ut},wh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pt=class extends ot{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=wh,this.fragmentShader=Sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};pt.prototype.isShaderMaterial=!0;var Nr=class extends Le{constructor(){super();this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};Nr.prototype.isCamera=!0;var ct=class extends Nr{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};ct.prototype.isPerspectiveCamera=!0;var ei=90,ti=1,Ur=class extends Le{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new ct(ei,ti,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);let r=new ct(ei,ti,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new S(-1,0,0)),this.add(r);let a=new ct(ei,ti,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new S(0,1,0)),this.add(a);let o=new ct(ei,ti,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new S(0,-1,0)),this.add(o);let c=new ct(ei,ti,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,1)),this.add(c);let l=new ct(ei,ti,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,r,a,o,c,l]=this.children,f=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.xr.enabled=f}},zi=class extends it{constructor(e,t,n,i,r,a,o,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:fr;super(e,t,n,i,r,a,o,c,l,f);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};zi.prototype.isCubeTexture=!0;var ga=class extends at{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n);super(e,e,t);t=t||{},this.texture=new zi(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Qe,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cn(5,5,5),r=new pt({name:"CubemapFromEquirect",uniforms:Qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:$t});r.uniforms.tEquirect.value=t;let a=new Je(i,r),o=t.minFilter;return t.minFilter===ur&&(t.minFilter=tt),new Ur(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};ga.prototype.isWebGLCubeRenderTarget=!0;var ba=new S,Th=new S,Eh=new nt,Ft=class{constructor(e=new S(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ba.subVectors(n,t).cross(Th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Eh.getNormalMatrix(e),i=this.coplanarPoint(ba).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Ft.prototype.isPlane=!0;var ni=new En,Or=new S,Ni=class{constructor(e=new Ft,t=new Ft,n=new Ft,i=new Ft,r=new Ft,a=new Ft){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],c=n[4],l=n[5],f=n[6],h=n[7],d=n[8],u=n[9],m=n[10],b=n[11],x=n[12],p=n[13],g=n[14],T=n[15];return t[0].setComponents(o-i,h-c,b-d,T-x).normalize(),t[1].setComponents(o+i,h+c,b+d,T+x).normalize(),t[2].setComponents(o+r,h+l,b+u,T+p).normalize(),t[3].setComponents(o-r,h-l,b-u,T-p).normalize(),t[4].setComponents(o-a,h-f,b-m,T-g).normalize(),t[5].setComponents(o+a,h+f,b+m,T+g).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Or.x=i.normal.x>0?e.max.x:e.min.x,Or.y=i.normal.y>0?e.max.y:e.min.y,Or.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ah(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,f){let h=l.array,d=l.usage,u=s.createBuffer();s.bindBuffer(f,u),s.bufferData(f,h,d),l.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(m=5121),{buffer:u,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,f,h){let d=f.array,u=f.updateRange;s.bindBuffer(h,l),u.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count):s.bufferSubData(h,u.offset*d.BYTES_PER_ELEMENT,d.subarray(u.offset,u.offset+u.count)),u.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);f&&(s.deleteBuffer(f.buffer),n.delete(l))}function c(l,f){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h===void 0?n.set(l,i(l,f)):h.version<l.version&&(r(h.buffer,l,f),h.version=l.version)}return{get:a,remove:o,update:c}}var Hr=class extends ze{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,f=c+1,h=e/o,d=t/c,u=[],m=[],b=[],x=[];for(let p=0;p<f;p++){let g=p*d-a;for(let T=0;T<l;T++){let y=T*h-r;m.push(y,-g,0),b.push(0,0,1),x.push(T/o),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let g=0;g<o;g++){let T=g+l*p,y=g+l*(p+1),E=g+1+l*(p+1),L=g+1+l*p;u.push(T,y,L),u.push(y,E,L)}this.setIndex(u),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(b,3)),this.setAttribute("uv",new Be(x,2))}static fromJSON(e){return new Hr(e.width,e.height,e.widthSegments,e.heightSegments)}},Lh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fh="vec3 transformed = vec3( position );",Bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenTint, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenTint * ( D * V );
}
#endif`,Nh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,du=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uu=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mu=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,vu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
#endif`,_u=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenTint;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenTint, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ru=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ou=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ju=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,np=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ip=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,rp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,pp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,mp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,gp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,vp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ep=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ip=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
	uniform float sheenRoughness;
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$p=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:Lh,alphamap_pars_fragment:Rh,alphatest_fragment:Ch,alphatest_pars_fragment:Ph,aomap_fragment:Ih,aomap_pars_fragment:Dh,begin_vertex:Fh,beginnormal_vertex:Bh,bsdfs:zh,bumpmap_pars_fragment:Nh,clipping_planes_fragment:Uh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Gh,color_fragment:kh,color_pars_fragment:Vh,color_pars_vertex:Wh,color_vertex:qh,common:Xh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:Jh,displacementmap_pars_vertex:Zh,displacementmap_vertex:$h,emissivemap_fragment:jh,emissivemap_pars_fragment:Qh,encodings_fragment:Kh,encodings_pars_fragment:eu,envmap_fragment:tu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:ru,envmap_physical_pars_fragment:mu,envmap_vertex:su,fog_vertex:au,fog_pars_vertex:ou,fog_fragment:cu,fog_pars_fragment:lu,gradientmap_pars_fragment:fu,lightmap_fragment:du,lightmap_pars_fragment:hu,lights_lambert_vertex:uu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:bu,lights_phong_fragment:xu,lights_phong_pars_fragment:yu,lights_physical_fragment:vu,lights_physical_pars_fragment:_u,lights_fragment_begin:Mu,lights_fragment_maps:wu,lights_fragment_end:Su,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Eu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Lu,map_fragment:Ru,map_pars_fragment:Cu,map_particle_fragment:Pu,map_particle_pars_fragment:Iu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Fu,morphnormal_vertex:Bu,morphtarget_pars_vertex:zu,morphtarget_vertex:Nu,normal_fragment_begin:Uu,normal_fragment_maps:Ou,normal_pars_fragment:Hu,normal_pars_vertex:Gu,normal_vertex:ku,normalmap_pars_fragment:Vu,clearcoat_normal_fragment_begin:Wu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:Xu,output_fragment:Yu,packing:Ju,premultiplied_alpha_fragment:Zu,project_vertex:$u,dithering_fragment:ju,dithering_pars_fragment:Qu,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:rp,skinbase_vertex:sp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:cp,specularmap_fragment:lp,specularmap_pars_fragment:fp,tonemapping_fragment:dp,tonemapping_pars_fragment:hp,transmission_fragment:up,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:bp,uv2_pars_fragment:xp,uv2_pars_vertex:yp,uv2_vertex:vp,worldpos_vertex:_p,background_vert:Mp,background_frag:wp,cube_vert:Sp,cube_frag:Tp,depth_vert:Ep,depth_frag:Ap,distanceRGBA_vert:Lp,distanceRGBA_frag:Rp,equirect_vert:Cp,equirect_frag:Pp,linedashed_vert:Ip,linedashed_frag:Dp,meshbasic_vert:Fp,meshbasic_frag:Bp,meshlambert_vert:zp,meshlambert_frag:Np,meshmatcap_vert:Up,meshmatcap_frag:Op,meshnormal_vert:Hp,meshnormal_frag:Gp,meshphong_vert:kp,meshphong_frag:Vp,meshphysical_vert:Wp,meshphysical_frag:qp,meshtoon_vert:Xp,meshtoon_frag:Yp,points_vert:Jp,points_frag:Zp,shadow_vert:$p,shadow_frag:jp,sprite_vert:Qp,sprite_frag:Kp},te={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new nt},uv2Transform:{value:new nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nt}}},Bt={basic:{uniforms:ut([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ut([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new se(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ut([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ut([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ut([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new se(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ut([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ut([te.points,te.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ut([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ut([te.common,te.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ut([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:ut([te.sprite,te.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:ut([te.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:ut([te.common,te.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:ut([te.lights,te.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Bt.physical={uniforms:ut([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new V(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenTint:{value:new se(0)},sheenRoughness:{value:0},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new se(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new se(1,1,1)},specularTintMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function em(s,e,t,n,i){let r=new se(0),a=0,o,c,l=null,f=0,h=null;function d(m,b){let x=!1,p=b.isScene===!0?b.background:null;p&&p.isTexture&&(p=e.get(p));let g=s.xr,T=g.getSession&&g.getSession();T&&T.environmentBlendMode==="additive"&&(p=null),p===null?u(r,a):p&&p.isColor&&(u(p,1),x=!0),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),p&&(p.isCubeTexture||p.mapping===hr)?(c===void 0&&(c=new Je(new cn(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:Qn(Bt.cube.uniforms),vertexShader:Bt.cube.vertexShader,fragmentShader:Bt.cube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(l!==p||f!==p.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,l=p,f=p.version,h=s.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(o===void 0&&(o=new Je(new Hr(2,2),new pt({name:"BackgroundMaterial",uniforms:Qn(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),o.material.uniforms.uvTransform.value.copy(p.matrix),(l!==p||f!==p.version||h!==s.toneMapping)&&(o.material.needsUpdate=!0,l=p,f=p.version,h=s.toneMapping),m.unshift(o,o.geometry,o.material,0,0,null))}function u(m,b){t.buffers.color.setClear(m.r,m.g,m.b,b,i)}return{getClearColor:function(){return r},setClearColor:function(m,b=1){r.set(m),a=b,u(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,u(r,a)},render:d}}function tm(s,e,t,n){let i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=b(null),l=c;function f(B,D,O,z,H){let K=!1;if(a){let le=m(z,O,D);l!==le&&(l=le,d(l.object)),K=x(z,H),K&&p(z,H)}else{let le=D.wireframe===!0;(l.geometry!==z.id||l.program!==O.id||l.wireframe!==le)&&(l.geometry=z.id,l.program=O.id,l.wireframe=le,K=!0)}B.isInstancedMesh===!0&&(K=!0),H!==null&&t.update(H,34963),K&&(_(B,D,O,z),H!==null&&s.bindBuffer(34963,t.get(H).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(B){return n.isWebGL2?s.bindVertexArray(B):r.bindVertexArrayOES(B)}function u(B){return n.isWebGL2?s.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function m(B,D,O){let z=O.wireframe===!0,H=o[B.id];H===void 0&&(H={},o[B.id]=H);let K=H[D.id];K===void 0&&(K={},H[D.id]=K);let le=K[z];return le===void 0&&(le=b(h()),K[z]=le),le}function b(B){let D=[],O=[],z=[];for(let H=0;H<i;H++)D[H]=0,O[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:z,object:B,attributes:{},index:null}}function x(B,D){let O=l.attributes,z=B.attributes,H=0;for(let K in z){let le=O[K],ge=z[K];if(le===void 0||le.attribute!==ge||le.data!==ge.data)return!0;H++}return l.attributesNum!==H||l.index!==D}function p(B,D){let O={},z=B.attributes,H=0;for(let K in z){let le=z[K],ge={};ge.attribute=le,le.data&&(ge.data=le.data),O[K]=ge,H++}l.attributes=O,l.attributesNum=H,l.index=D}function g(){let B=l.newAttributes;for(let D=0,O=B.length;D<O;D++)B[D]=0}function T(B){y(B,0)}function y(B,D){let O=l.newAttributes,z=l.enabledAttributes,H=l.attributeDivisors;O[B]=1,z[B]===0&&(s.enableVertexAttribArray(B),z[B]=1),H[B]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,D),H[B]=D)}function E(){let B=l.newAttributes,D=l.enabledAttributes;for(let O=0,z=D.length;O<z;O++)D[O]!==B[O]&&(s.disableVertexAttribArray(O),D[O]=0)}function L(B,D,O,z,H,K){n.isWebGL2===!0&&(O===5124||O===5125)?s.vertexAttribIPointer(B,D,O,H,K):s.vertexAttribPointer(B,D,O,z,H,K)}function _(B,D,O,z){if(n.isWebGL2===!1&&(B.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let H=z.attributes,K=O.getAttributes(),le=D.defaultAttributeValues;for(let ge in K){let re=K[ge];if(re.location>=0){let we=H[ge];if(we===void 0&&(ge==="instanceMatrix"&&B.instanceMatrix&&(we=B.instanceMatrix),ge==="instanceColor"&&B.instanceColor&&(we=B.instanceColor)),we!==void 0){let Y=we.normalized,Q=we.itemSize,he=t.get(we);if(he===void 0)continue;let U=he.buffer,be=he.type,Me=he.bytesPerElement;if(we.isInterleavedBufferAttribute){let ae=we.data,fe=ae.stride,Ee=we.offset;if(ae&&ae.isInstancedInterleavedBuffer){for(let k=0;k<re.locationSize;k++)y(re.location+k,ae.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let k=0;k<re.locationSize;k++)T(re.location+k);s.bindBuffer(34962,U);for(let k=0;k<re.locationSize;k++)L(re.location+k,Q/re.locationSize,be,Y,fe*Me,(Ee+Q/re.locationSize*k)*Me)}else{if(we.isInstancedBufferAttribute){for(let ae=0;ae<re.locationSize;ae++)y(re.location+ae,we.meshPerAttribute);B.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ae=0;ae<re.locationSize;ae++)T(re.location+ae);s.bindBuffer(34962,U);for(let ae=0;ae<re.locationSize;ae++)L(re.location+ae,Q/re.locationSize,be,Y,Q*Me,Q/re.locationSize*ae*Me)}}else if(le!==void 0){let Y=le[ge];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(re.location,Y);break;case 3:s.vertexAttrib3fv(re.location,Y);break;case 4:s.vertexAttrib4fv(re.location,Y);break;default:s.vertexAttrib1fv(re.location,Y)}}}}E()}function P(){A();for(let B in o){let D=o[B];for(let O in D){let z=D[O];for(let H in z)u(z[H].object),delete z[H];delete D[O]}delete o[B]}}function X(B){if(o[B.id]===void 0)return;let D=o[B.id];for(let O in D){let z=D[O];for(let H in z)u(z[H].object),delete z[H];delete D[O]}delete o[B.id]}function N(B){for(let D in o){let O=o[D];if(O[B.id]===void 0)continue;let z=O[B.id];for(let H in z)u(z[H].object),delete z[H];delete O[B.id]}}function A(){Z(),l!==c&&(l=c,d(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:A,resetDefaultState:Z,dispose:P,releaseStatesOfGeometry:X,releaseStatesOfProgram:N,initAttributes:g,enableAttribute:T,disableUnusedAttributes:E}}function nm(s,e,t,n){let i=n.isWebGL2,r;function a(l){r=l}function o(l,f){s.drawArrays(r,l,f),t.update(f,r,1)}function c(l,f,h){if(h===0)return;let d,u;if(i)d=s,u="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](r,l,f,h),t.update(f,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function im(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext,o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),d=s.getParameter(35660),u=s.getParameter(3379),m=s.getParameter(34076),b=s.getParameter(34921),x=s.getParameter(36347),p=s.getParameter(36348),g=s.getParameter(36349),T=d>0,y=a||e.has("OES_texture_float"),E=T&&y,L=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:m,maxAttributes:b,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:g,vertexTextures:T,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:L}}function rm(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Ft,o=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,u){let m=h.length!==0||d||n!==0||i;return i=d,t=f(h,u,0),n=h.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,d,u){let m=h.clippingPlanes,b=h.clipIntersection,x=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!x)r?f(null):l();else{let g=r?0:n,T=g*4,y=p.clippingState||null;c.value=y,y=f(m,d,T,u);for(let E=0;E!==T;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,u,m){let b=h!==null?h.length:0,x=null;if(b!==0){if(x=c.value,m!==!0||x===null){let p=u+b*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<p)&&(x=new Float32Array(p));for(let T=0,y=u;T!==b;++T,y+=4)a.copy(h[T]).applyMatrix4(g,o),a.normal.toArray(x,y),x[y+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function sm(s){let e=new WeakMap;function t(a,o){return o===Li?a.mapping=fr:o===Ds&&(a.mapping=dr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===Li||o===Ds)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=s.getRenderTarget(),f=new ga(c.height/2);return f.fromEquirectangularTexture(s,a),e.set(a,f),s.setRenderTarget(l),a.addEventListener("dispose",i),t(f.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ln=class extends Nr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};ln.prototype.isOrthographicCamera=!0;var Ui=class extends pt{constructor(e){super(e);this.type="RawShaderMaterial"}};Ui.prototype.isRawShaderMaterial=!0;var ii=4,fn=8,zt=Math.pow(2,fn),lc=[.125,.215,.35,.446,.526,.582],fc=fn-ii+1+lc.length,ri=20,dn={[ht]:0,[Mn]:1,[Hs]:2,[Go]:3,[ko]:4,[Vo]:5,[Os]:6},xa=new ln,{_lodPlanes:Oi,_sizeLods:dc,_sigmas:Gr}=om(),hc=new se,ya=null,Rn=(1+Math.sqrt(5))/2,si=1/Rn,uc=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Rn,si),new S(0,Rn,-si),new S(si,0,Rn),new S(-si,0,Rn),new S(Rn,si,0),new S(-Rn,si,0)],pc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=cm(ri),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ya=this._renderer.getRenderTarget();let r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=bc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=gc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Oi.length;e++)Oi[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(ya),e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e){ya=this._renderer.getRenderTarget();let t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){let t={magFilter:et,minFilter:et,generateMipmaps:!1,type:jt,format:bd,encoding:am(e)?e.encoding:Hs,depthBuffer:!1},n=mc(t);return n.depthBuffer=!e,this._pingPongRenderTarget=mc(t),n}_compileMaterial(e){let t=new Je(Oi[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,n,i){let r=90,a=1,o=new ct(r,a,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.outputEncoding,u=f.toneMapping;f.getClearColor(hc),f.toneMapping=_n,f.outputEncoding=ht,f.autoClear=!1;let m=new Zn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),b=new Je(new cn,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(hc),x=!0);for(let g=0;g<6;g++){let T=g%3;T==0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):T==1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g])),kr(i,T*zt,g>2?zt:0,zt,zt),f.setRenderTarget(i),x&&f.render(b,o),f.render(e,o)}b.geometry.dispose(),b.material.dispose(),f.toneMapping=u,f.outputEncoding=d,f.autoClear=h,e.background=p}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===Qe&&t.type===jt&&t.encoding===Mn?e.value=dn[ht]:e.value=dn[t.encoding]}_textureToCubeUV(e,t){let n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=bc()):this._equirectShader==null&&(this._equirectShader=gc());let i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new Je(Oi[0],i),a=i.uniforms;a.envMap.value=e,e.isCubeTexture||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),this._setEncoding(a.outputEncoding,t.texture),kr(t,0,0,3*zt,2*zt),n.setRenderTarget(t),n.render(r,xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<fc;i++){let r=Math.sqrt(Gr[i]*Gr[i]-Gr[i-1]*Gr[i-1]),a=uc[(i-1)%uc.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new Je(Oi[i],l),d=l.uniforms,u=dc[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ri-1),b=r/m,x=isFinite(r)?1+Math.floor(f*b):ri;x>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ri}`);let p=[],g=0;for(let L=0;L<ri;++L){let _=L/b,P=Math.exp(-_*_/2);p.push(P),L==0?g+=P:L<x&&(g+=2*P)}for(let L=0;L<p.length;L++)p[L]=p[L]/g;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o),d.dTheta.value=m,d.mipInt.value=fn-n,this._setEncoding(d.inputEncoding,e.texture),this._setEncoding(d.outputEncoding,e.texture);let T=dc[i],y=3*Math.max(0,zt-2*T),E=(i===0?0:2*zt)+2*T*(i>fn-ii?i-fn+ii:0);kr(t,y,E,3*T,2*T),c.setRenderTarget(t),c.render(h,xa)}};function am(s){return s===void 0||s.type!==jt?!1:s.encoding===ht||s.encoding===Mn||s.encoding===Os}function om(){let s=[],e=[],t=[],n=fn;for(let i=0;i<fc;i++){let r=Math.pow(2,n);e.push(r);let a=1/r;i>fn-ii?a=lc[i-fn+ii-1]:i==0&&(a=0),t.push(a);let o=1/(r-1),c=-o/2,l=1+o/2,f=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,u=3,m=2,b=1,x=new Float32Array(u*d*h),p=new Float32Array(m*d*h),g=new Float32Array(b*d*h);for(let y=0;y<h;y++){let E=y%3*2/3-1,L=y>2?0:-1,_=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];x.set(_,u*d*y),p.set(f,m*d*y);let P=[y,y,y,y,y,y];g.set(P,b*d*y)}let T=new ze;T.setAttribute("position",new $e(x,u)),T.setAttribute("uv",new $e(p,m)),T.setAttribute("faceIndex",new $e(g,b)),s.push(T),n>ii&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function mc(s){let e=new at(3*zt,3*zt,s);return e.texture.mapping=hr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function kr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function cm(s){let e=new Float32Array(s),t=new S(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:dn[ht]},outputEncoding:{value:dn[ht]}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${_a()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function gc(){let s=new V(1,1);return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:dn[ht]},outputEncoding:{value:dn[ht]}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${_a()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function bc(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:dn[ht]},outputEncoding:{value:dn[ht]}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${_a()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _a(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function lm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let c=o.mapping,l=c===Li||c===Ds,f=c===fr||c===dr;if(l||f){if(e.has(o))return e.get(o).texture;{let h=o.image;if(l&&h&&h.height>0||f&&h&&i(h)){let d=s.getRenderTarget();t===null&&(t=new pc(s));let u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),s.setRenderTarget(d),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fm(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dm(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let m in d)e.update(d[m],34962);let u=h.morphAttributes;for(let m in u){let b=u[m];for(let x=0,p=b.length;x<p;x++)e.update(b[x],34962)}}function l(h){let d=[],u=h.index,m=h.attributes.position,b=0;if(u!==null){let g=u.array;b=u.version;for(let T=0,y=g.length;T<y;T+=3){let E=g[T+0],L=g[T+1],_=g[T+2];d.push(E,L,L,_,_,E)}}else{let g=m.array;b=m.version;for(let T=0,y=g.length/3-1;T<y;T+=3){let E=T+0,L=T+1,_=T+2;d.push(E,L,L,_,_,E)}}let x=new(Xo(d)>65535?la:ca)(d,1);x.version=b;let p=r.get(h);p&&e.remove(p),r.set(h,x)}function f(h){let d=r.get(h);if(d){let u=h.index;u!==null&&d.version<u.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function hm(s,e,t,n){let i=n.isWebGL2,r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function f(d,u){s.drawElements(r,u,o,d*c),t.update(u,r,1)}function h(d,u,m){if(m===0)return;let b,x;if(i)b=s,x="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[x](r,u,o,d*c,m),t.update(u,r,m)}this.setMode=a,this.setIndex=l,this.render=f,this.renderInstances=h}function um(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}var Vr=class extends it{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Vr.prototype.isDataTexture2DArray=!0;function pm(s,e){return s[0]-e[0]}function mm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function xc(s,e){let t=1,n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function gm(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,a=new S,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,f,h,d){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let m=f.morphAttributes.position.length,b=r.get(f);if(b===void 0||b.count!==m){b!==void 0&&b.texture.dispose();let g=f.morphAttributes.normal!==void 0,T=f.morphAttributes.position,y=f.morphAttributes.normal||[],E=f.attributes.position.count,L=g===!0?2:1,_=E*L,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let X=new Float32Array(_*P*4*m),N=new Vr(X,_,P,m);N.format=Qe,N.type=Qt;let A=L*4;for(let Z=0;Z<m;Z++){let B=T[Z],D=y[Z],O=_*P*4*Z;for(let z=0;z<B.count;z++){a.fromBufferAttribute(B,z),B.normalized===!0&&xc(a,B);let H=z*A;X[O+H+0]=a.x,X[O+H+1]=a.y,X[O+H+2]=a.z,X[O+H+3]=0,g===!0&&(a.fromBufferAttribute(D,z),D.normalized===!0&&xc(a,D),X[O+H+4]=a.x,X[O+H+5]=a.y,X[O+H+6]=a.z,X[O+H+7]=0)}}b={count:m,texture:N,size:new V(_,P)},r.set(f,b)}let x=0;for(let g=0;g<u.length;g++)x+=u[g];let p=f.morphTargetsRelative?1:1-x;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let m=u===void 0?0:u.length,b=n[f.id];if(b===void 0||b.length!==m){b=[];for(let y=0;y<m;y++)b[y]=[y,0];n[f.id]=b}for(let y=0;y<m;y++){let E=b[y];E[0]=y,E[1]=u[y]}b.sort(mm);for(let y=0;y<8;y++)y<m&&b[y][1]?(o[y][0]=b[y][0],o[y][1]=b[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(pm);let x=f.morphAttributes.position,p=f.morphAttributes.normal,g=0;for(let y=0;y<8;y++){let E=o[y],L=E[0],_=E[1];L!==Number.MAX_SAFE_INTEGER&&_?(x&&f.getAttribute("morphTarget"+y)!==x[L]&&f.setAttribute("morphTarget"+y,x[L]),p&&f.getAttribute("morphNormal"+y)!==p[L]&&f.setAttribute("morphNormal"+y,p[L]),i[y]=_,g+=_):(x&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),p&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),i[y]=0)}let T=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function bm(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,f=c.geometry,h=e.get(c,f);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Ma=class extends it{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Ma.prototype.isDataTexture3D=!0;var yc=new it,xm=new Vr,ym=new Ma,vc=new zi,_c=[],Mc=[],wc=new Float32Array(16),Sc=new Float32Array(9),Tc=new Float32Array(4);function ai(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=_c[i];if(r===void 0&&(r=new Float32Array(i),_c[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ec(s,e){let t=Mc[e];t===void 0&&(t=new Int32Array(e),Mc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _m(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),mt(t,e)}}function Mm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),mt(t,e)}}function wm(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),mt(t,e)}}function Sm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(bt(t,n))return;Tc.set(n),s.uniformMatrix2fv(this.addr,!1,Tc),mt(t,n)}}function Tm(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(bt(t,n))return;Sc.set(n),s.uniformMatrix3fv(this.addr,!1,Sc),mt(t,n)}}function Em(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(bt(t,n))return;wc.set(n),s.uniformMatrix4fv(this.addr,!1,wc),mt(t,n)}}function Am(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Lm(s,e){let t=this.cache;bt(t,e)||(s.uniform2iv(this.addr,e),mt(t,e))}function Rm(s,e){let t=this.cache;bt(t,e)||(s.uniform3iv(this.addr,e),mt(t,e))}function Cm(s,e){let t=this.cache;bt(t,e)||(s.uniform4iv(this.addr,e),mt(t,e))}function Pm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Im(s,e){let t=this.cache;bt(t,e)||(s.uniform2uiv(this.addr,e),mt(t,e))}function Dm(s,e){let t=this.cache;bt(t,e)||(s.uniform3uiv(this.addr,e),mt(t,e))}function Fm(s,e){let t=this.cache;bt(t,e)||(s.uniform4uiv(this.addr,e),mt(t,e))}function Bm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||yc,i)}function zm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ym,i)}function Nm(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||vc,i)}function Um(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xm,i)}function Om(s){switch(s){case 5126:return vm;case 35664:return _m;case 35665:return Mm;case 35666:return wm;case 35674:return Sm;case 35675:return Tm;case 35676:return Em;case 5124:case 35670:return Am;case 35667:case 35671:return Lm;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Im;case 36295:return Dm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Um}}function Hm(s,e){s.uniform1fv(this.addr,e)}function Gm(s,e){let t=ai(e,this.size,2);s.uniform2fv(this.addr,t)}function km(s,e){let t=ai(e,this.size,3);s.uniform3fv(this.addr,t)}function Vm(s,e){let t=ai(e,this.size,4);s.uniform4fv(this.addr,t)}function Wm(s,e){let t=ai(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qm(s,e){let t=ai(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xm(s,e){let t=ai(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ym(s,e){s.uniform1iv(this.addr,e)}function Jm(s,e){s.uniform2iv(this.addr,e)}function Zm(s,e){s.uniform3iv(this.addr,e)}function $m(s,e){s.uniform4iv(this.addr,e)}function jm(s,e){s.uniform1uiv(this.addr,e)}function Qm(s,e){s.uniform2uiv(this.addr,e)}function Km(s,e){s.uniform3uiv(this.addr,e)}function e0(s,e){s.uniform4uiv(this.addr,e)}function t0(s,e,t){let n=e.length,i=Ec(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||yc,i[r])}function n0(s,e,t){let n=e.length,i=Ec(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||vc,i[r])}function i0(s){switch(s){case 5126:return Hm;case 35664:return Gm;case 35665:return km;case 35666:return Vm;case 35674:return Wm;case 35675:return qm;case 35676:return Xm;case 5124:case 35670:return Ym;case 35667:case 35671:return Jm;case 35668:case 35672:return Zm;case 35669:case 35673:return $m;case 5125:return jm;case 36294:return Qm;case 36295:return Km;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35680:case 36300:case 36308:case 36293:return n0}}function r0(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=Om(e.type)}function Ac(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=i0(e.type)}Ac.prototype.updateCache=function(s){let e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),mt(e,s)};function Lc(s){this.id=s,this.seq=[],this.map={}}Lc.prototype.setValue=function(s,e,t){let n=this.seq;for(let i=0,r=n.length;i!==r;++i){let a=n[i];a.setValue(s,e[a.id],t)}};var wa=/(\w+)(\])?(\[|\.)?/g;function Rc(s,e){s.seq.push(e),s.map[e.id]=e}function s0(s,e,t){let n=s.name,i=n.length;for(wa.lastIndex=0;;){let r=wa.exec(n),a=wa.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Rc(t,l===void 0?new r0(o,s,e):new Ac(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Lc(o),Rc(t,h)),t=h}}}function hn(s,e){this.seq=[],this.map={};let t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);s0(i,r,this)}}hn.prototype.setValue=function(s,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(s,t,n)};hn.prototype.setOptional=function(s,e,t){let n=e[t];n!==void 0&&this.setValue(s,t,n)};hn.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){let a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(s,o.value,n)}};hn.seqWithValue=function(s,e){let t=[];for(let n=0,i=s.length;n!==i;++n){let r=s[n];r.id in e&&t.push(r)}return t};function Cc(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var a0=0;function o0(s){let e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Pc(s){switch(s){case ht:return["Linear","( value )"];case Mn:return["sRGB","( value )"];case Hs:return["RGBE","( value )"];case Go:return["RGBM","( value, 7.0 )"];case ko:return["RGBM","( value, 16.0 )"];case Vo:return["RGBD","( value, 256.0 )"];case Os:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case rh:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ic(s,e,t){let n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+o0(s.getShaderSource(e))}function oi(s,e){let t=Pc(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function c0(s,e){let t=Pc(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function l0(s,e){let t;switch(e){case nd:t="Linear";break;case id:t="Reinhard";break;case rd:t="OptimizedCineon";break;case sd:t="ACESFilmic";break;case ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function f0(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hi).join(`
`)}function d0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function h0(s,e){let t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Hi(s){return s!==""}function Dc(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var u0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(s){return s.replace(u0,p0)}function p0(s,e){let t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sa(t)}var m0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(s){return s.replace(g0,zc).replace(m0,b0)}function b0(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),zc(s,e,t,n)}function zc(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function x0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ps?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function y0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fr:case dr:e="ENVMAP_TYPE_CUBE";break;case hr:case Fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case dr:case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function _0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lr:e="ENVMAP_BLENDING_MULTIPLY";break;case ed:e="ENVMAP_BLENDING_MIX";break;case td:e="ENVMAP_BLENDING_ADD";break}return e}function M0(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=x0(t),l=y0(t),f=v0(t),h=_0(t),d=s.gammaFactor>0?s.gammaFactor:1,u=t.isWebGL2?"":f0(t),m=d0(r),b=i.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[m].filter(Hi).join(`
`),x.length>0&&(x+=`
`),p=[u,m].filter(Hi).join(`
`),p.length>0&&(p+=`
`)):(x=[Nc(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),p=[u,Nc(t),"#define SHADER_NAME "+t.shaderName,m,"#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Re.tonemapping_pars_fragment:"",t.toneMapping!==_n?l0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===zn?"#define OPAQUE":"",Re.encodings_pars_fragment,t.map?oi("mapTexelToLinear",t.mapEncoding):"",t.matcap?oi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?oi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?oi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?oi("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?oi("lightMapTexelToLinear",t.lightMapEncoding):"",c0("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=Sa(a),a=Dc(a,t),a=Fc(a,t),o=Sa(o),o=Dc(o,t),o=Fc(o,t),a=Bc(a),o=Bc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Wo?"":"out highp vec4 pc_fragColor;",t.glslVersion===Wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=g+x+a,y=g+p+o,E=Cc(i,35633,T),L=Cc(i,35632,y);if(i.attachShader(b,E),i.attachShader(b,L),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b),s.debug.checkShaderErrors){let X=i.getProgramInfoLog(b).trim(),N=i.getShaderInfoLog(E).trim(),A=i.getShaderInfoLog(L).trim(),Z=!0,B=!0;if(i.getProgramParameter(b,35714)===!1){Z=!1;let D=Ic(i,E,"vertex"),O=Ic(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,35715)+`

Program Info Log: `+X+`
`+D+`
`+O)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(N===""||A==="")&&(B=!1);B&&(this.diagnostics={runnable:Z,programLog:X,vertexShader:{log:N,prefix:x},fragmentShader:{log:A,prefix:p}})}i.deleteShader(E),i.deleteShader(L);let _;this.getUniforms=function(){return _===void 0&&(_=new hn(i,b)),_};let P;return this.getAttributes=function(){return P===void 0&&(P=h0(i,b)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.name=t.shaderName,this.id=a0++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=L,this}function w0(s,e,t,n,i,r,a){let o=[],c=i.isWebGL2,l=i.logarithmicDepthBuffer,f=i.floatVertexTextures,h=i.maxVertexUniforms,d=i.vertexTextures,u=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},b=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheen","transmission","transmissionMap","thicknessMap"];function x(_){let X=_.skeleton.bones;if(f)return 1024;{let A=Math.floor((h-20)/4),Z=Math.min(A,X.length);return Z<X.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+X.length+" bones. This GPU supports "+Z+"."),0):Z}}function p(_){let P;return _&&_.isTexture?P=_.encoding:_&&_.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),P=_.texture.encoding):P=ht,c&&_&&_.isTexture&&_.format===Qe&&_.type===jt&&_.encoding===Mn&&(P=ht),P}function g(_,P,X,N,A){let Z=N.fog,B=_.isMeshStandardMaterial?N.environment:null,D=(_.isMeshStandardMaterial?t:e).get(_.envMap||B),O=m[_.type],z=A.isSkinnedMesh?x(A):0;_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let H,K;if(O){let Y=Bt[O];H=Y.vertexShader,K=Y.fragmentShader}else H=_.vertexShader,K=_.fragmentShader;let le=s.getRenderTarget(),ge=_.alphaTest>0,re=_.clearcoat>0;return{isWebGL2:c,shaderID:O,shaderName:_.type,vertexShader:H,fragmentShader:K,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,instancing:A.isInstancedMesh===!0,instancingColor:A.isInstancedMesh===!0&&A.instanceColor!==null,supportsVertexTextures:d,outputEncoding:le!==null?p(le.texture):s.outputEncoding,map:!!_.map,mapEncoding:p(_.map),matcap:!!_.matcap,matcapEncoding:p(_.matcap),envMap:!!D,envMapMode:D&&D.mapping,envMapEncoding:p(D),envMapCubeUV:!!D&&(D.mapping===hr||D.mapping===Fs),lightMap:!!_.lightMap,lightMapEncoding:p(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:p(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===oh,tangentSpaceNormalMap:_.normalMapType===Hn,clearcoat:re,clearcoatMap:re&&!!_.clearcoatMap,clearcoatRoughnessMap:re&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:re&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularTintMap:!!_.specularTintMap,specularTintMapEncoding:p(_.specularTintMap),alphaMap:!!_.alphaMap,alphaTest:ge,gradientMap:!!_.gradientMap,sheen:_.sheen>0,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!A.geometry&&!!A.geometry.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!A.geometry&&!!A.geometry.attributes.color&&A.geometry.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularTintMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularTintMap)&&!!_.displacementMap,fog:!!Z,useFog:_.fog,fogExp2:Z&&Z.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:l,skinning:A.isSkinnedMesh===!0&&z>0,maxBones:z,useVertexTexture:f,morphTargets:!!A.geometry&&!!A.geometry.morphAttributes.position,morphNormals:!!A.geometry&&!!A.geometry.morphAttributes.normal,morphTargetsCount:!!A.geometry&&!!A.geometry.morphAttributes.position?A.geometry.morphAttributes.position.length:0,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:_.format,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:_.toneMapped?s.toneMapping:_n,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===je,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function T(_){let P=[];if(_.shaderID?P.push(_.shaderID):(P.push(_.fragmentShader),P.push(_.vertexShader)),_.defines!==void 0)for(let X in _.defines)P.push(X),P.push(_.defines[X]);if(_.isRawShaderMaterial===!1){for(let X=0;X<b.length;X++)P.push(_[b[X]]);P.push(s.outputEncoding),P.push(s.gammaFactor)}return P.push(_.customProgramCacheKey),P.join()}function y(_){let P=m[_.type],X;if(P){let N=Bt[P];X=Kn.clone(N.uniforms)}else X=_.uniforms;return X}function E(_,P){let X;for(let N=0,A=o.length;N<A;N++){let Z=o[N];if(Z.cacheKey===P){X=Z,++X.usedTimes;break}}return X===void 0&&(X=new M0(s,P,_,r),o.push(X)),X}function L(_){if(--_.usedTimes==0){let P=o.indexOf(_);o[P]=o[o.length-1],o.pop(),_.destroy()}}return{getParameters:g,getProgramCacheKey:T,getUniforms:y,acquireProgram:E,releaseProgram:L,programs:o}}function S0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function T0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Uc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Oc(s){let e=[],t=0,n=[],i=[],r=[],a={id:-1};function o(){t=0,n.length=0,i.length=0,r.length=0}function c(u,m,b,x,p,g){let T=e[t],y=s.get(b);return T===void 0?(T={id:u.id,object:u,geometry:m,material:b,program:y.program||a,groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},e[t]=T):(T.id=u.id,T.object=u,T.geometry=m,T.material=b,T.program=y.program||a,T.groupOrder=x,T.renderOrder=u.renderOrder,T.z=p,T.group=g),t++,T}function l(u,m,b,x,p,g){let T=c(u,m,b,x,p,g);b.transmission>0?i.push(T):b.transparent===!0?r.push(T):n.push(T)}function f(u,m,b,x,p,g){let T=c(u,m,b,x,p,g);b.transmission>0?i.unshift(T):b.transparent===!0?r.unshift(T):n.unshift(T)}function h(u,m){n.length>1&&n.sort(u||T0),i.length>1&&i.sort(m||Uc),r.length>1&&r.sort(m||Uc)}function d(){for(let u=t,m=e.length;u<m;u++){let b=e[u];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.program=null,b.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:f,finish:d,sort:h}}function E0(s){let e=new WeakMap;function t(i,r){let a;return e.has(i)===!1?(a=new Oc(s),e.set(i,[a])):r>=e.get(i).length?(a=new Oc(s),e.get(i).push(a)):a=e.get(i)[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function A0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new se};break;case"SpotLight":t={position:new S,direction:new S,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function L0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var R0=0;function C0(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function P0(s,e){let t=new A0,n=L0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let f=0;f<9;f++)i.probe.push(new S);let r=new S,a=new xe,o=new xe;function c(f,h){let d=0,u=0,m=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let b=0,x=0,p=0,g=0,T=0,y=0,E=0,L=0;f.sort(C0);let _=h!==!0?Math.PI:1;for(let X=0,N=f.length;X<N;X++){let A=f[X],Z=A.color,B=A.intensity,D=A.distance,O=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=Z.r*B*_,u+=Z.g*B*_,m+=Z.b*B*_;else if(A.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(A.sh.coefficients[z],B);else if(A.isDirectionalLight){let z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity*_),A.castShadow){let H=A.shadow,K=n.get(A);K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,i.directionalShadow[b]=K,i.directionalShadowMap[b]=O,i.directionalShadowMatrix[b]=A.shadow.matrix,y++}i.directional[b]=z,b++}else if(A.isSpotLight){let z=t.get(A);if(z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(Z).multiplyScalar(B*_),z.distance=D,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,A.castShadow){let H=A.shadow,K=n.get(A);K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=O,i.spotShadowMatrix[p]=A.shadow.matrix,L++}i.spot[p]=z,p++}else if(A.isRectAreaLight){let z=t.get(A);z.color.copy(Z).multiplyScalar(B),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=z,g++}else if(A.isPointLight){let z=t.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity*_),z.distance=A.distance,z.decay=A.decay,A.castShadow){let H=A.shadow,K=n.get(A);K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,i.pointShadow[x]=K,i.pointShadowMap[x]=O,i.pointShadowMatrix[x]=A.shadow.matrix,E++}i.point[x]=z,x++}else if(A.isHemisphereLight){let z=t.get(A);z.skyColor.copy(A.color).multiplyScalar(B*_),z.groundColor.copy(A.groundColor).multiplyScalar(B*_),i.hemi[T]=z,T++}}g>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=m;let P=i.hash;(P.directionalLength!==b||P.pointLength!==x||P.spotLength!==p||P.rectAreaLength!==g||P.hemiLength!==T||P.numDirectionalShadows!==y||P.numPointShadows!==E||P.numSpotShadows!==L)&&(i.directional.length=b,i.spot.length=p,i.rectArea.length=g,i.point.length=x,i.hemi.length=T,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotShadowMatrix.length=L,P.directionalLength=b,P.pointLength=x,P.spotLength=p,P.rectAreaLength=g,P.hemiLength=T,P.numDirectionalShadows=y,P.numPointShadows=E,P.numSpotShadows=L,i.version=R0++)}function l(f,h){let d=0,u=0,m=0,b=0,x=0,p=h.matrixWorldInverse;for(let g=0,T=f.length;g<T;g++){let y=f[g];if(y.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(y.isSpotLight){let E=i.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let E=i.rectArea[b];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),b++}else if(y.isPointLight){let E=i.point[u];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){let E=i.hemi[x];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),E.direction.normalize(),x++}}}return{setup:c,setupView:l,state:i}}function Hc(s,e){let t=new P0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function I0(s,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new Hc(s,e),t.set(r,[o])):a>=t.get(r).length?(o=new Hc(s,e),t.get(r).push(o)):o=t.get(r)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var Ta=class extends ot{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Ta.prototype.isMeshDepthMaterial=!0;var Ea=class extends ot{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ea.prototype.isMeshDistanceMaterial=!0;var D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gc(s,e,t){let n=new Ni,i=new V,r=new V,a=new Oe,o=new Ta({depthPacking:ah}),c=new Ea,l={},f=t.maxTextureSize,h={0:je,1:Ei,2:Dn},d=new pt({uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4},samples:{value:8}},vertexShader:D0,fragmentShader:F0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let m=new ze;m.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Je(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo,this.render=function(y,E,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;let _=s.getRenderTarget(),P=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),N=s.state;N.setBlending($t),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let A=0,Z=y.length;A<Z;A++){let B=y[A],D=B.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no dirLight.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);let O=D.getFrameExtents();if(i.multiply(O),r.copy(D.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/O.x),i.x=r.x*O.x,D.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/O.y),i.y=r.y*O.y,D.mapSize.y=r.y)),D.map===null&&!D.isPointLightShadow&&this.type===Ti){let H={minFilter:tt,magFilter:tt,format:Qe};D.map=new at(i.x,i.y,H),D.map.texture.name=B.name+".shadowMap",D.mapPass=new at(i.x,i.y,H),D.camera.updateProjectionMatrix()}if(D.map===null){let H={minFilter:et,magFilter:et,format:Qe};D.map=new at(i.x,i.y,H),D.map.texture.name=B.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();let z=D.getViewportCount();for(let H=0;H<z;H++){let K=D.getViewport(H);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),N.viewport(a),D.updateMatrices(B,H),n=D.getFrustum(),T(E,L,D.camera,B,this.type)}!D.isPointLightShadow&&this.type===Ti&&p(D,L),D.needsUpdate=!1}x.needsUpdate=!1,s.setRenderTarget(_,P,X)};function p(y,E){let L=e.update(b);d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,d.uniforms.samples.value=y.blurSamples,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(E,null,L,d,b,null),u.uniforms.shadow_pass.value=y.mapPass.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,u.uniforms.samples.value=y.blurSamples,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(E,null,L,u,b,null)}function g(y,E,L,_,P,X,N){let A=null,Z=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Z!==void 0?A=Z:A=_.isPointLight===!0?c:o,s.localClippingEnabled&&L.clipShadows===!0&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){let B=A.uuid,D=L.uuid,O=l[B];O===void 0&&(O={},l[B]=O);let z=O[D];z===void 0&&(z=A.clone(),O[D]=z),A=z}return A.visible=L.visible,A.wireframe=L.wireframe,N===Ti?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:h[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaTest,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(_.matrixWorld),A.nearDistance=P,A.farDistance=X),A}function T(y,E,L,_,P){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===Ti)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);let A=e.update(y),Z=y.material;if(Array.isArray(Z)){let B=A.groups;for(let D=0,O=B.length;D<O;D++){let z=B[D],H=Z[z.materialIndex];if(H&&H.visible){let K=g(y,A,H,_,L.near,L.far,P);s.renderBufferDirect(L,null,A,K,y,z)}}}else if(Z.visible){let B=g(y,A,Z,_,L.near,L.far,P);s.renderBufferDirect(L,null,A,B,y,null)}}let N=y.children;for(let A=0,Z=N.length;A<Z;A++)T(N[A],E,L,_,P)}}function B0(s,e,t){let n=t.isWebGL2;function i(){let R=!1,ie=new Oe,q=null,ce=new Oe(0,0,0,0);return{setMask:function(de){q!==de&&!R&&(s.colorMask(de,de,de,de),q=de)},setLocked:function(de){R=de},setClear:function(de,Ce,ft,dt,Jt){Jt===!0&&(de*=dt,Ce*=dt,ft*=dt),ie.set(de,Ce,ft,dt),ce.equals(ie)===!1&&(s.clearColor(de,Ce,ft,dt),ce.copy(ie))},reset:function(){R=!1,q=null,ce.set(-1,0,0,0)}}}function r(){let R=!1,ie=null,q=null,ce=null;return{setTest:function(de){de?Q(2929):he(2929)},setMask:function(de){ie!==de&&!R&&(s.depthMask(de),ie=de)},setFunc:function(de){if(q!==de){if(de)switch(de){case Yf:s.depthFunc(512);break;case Jf:s.depthFunc(519);break;case Zf:s.depthFunc(513);break;case Is:s.depthFunc(515);break;case $f:s.depthFunc(514);break;case jf:s.depthFunc(518);break;case Qf:s.depthFunc(516);break;case Kf:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);q=de}},setLocked:function(de){R=de},setClear:function(de){ce!==de&&(s.clearDepth(de),ce=de)},reset:function(){R=!1,ie=null,q=null,ce=null}}}function a(){let R=!1,ie=null,q=null,ce=null,de=null,Ce=null,ft=null,dt=null,Jt=null;return{setTest:function(Xe){R||(Xe?Q(2960):he(2960))},setMask:function(Xe){ie!==Xe&&!R&&(s.stencilMask(Xe),ie=Xe)},setFunc:function(Xe,Ut,Ot){(q!==Xe||ce!==Ut||de!==Ot)&&(s.stencilFunc(Xe,Ut,Ot),q=Xe,ce=Ut,de=Ot)},setOp:function(Xe,Ut,Ot){(Ce!==Xe||ft!==Ut||dt!==Ot)&&(s.stencilOp(Xe,Ut,Ot),Ce=Xe,ft=Ut,dt=Ot)},setLocked:function(Xe){R=Xe},setClear:function(Xe){Jt!==Xe&&(s.clearStencil(Xe),Jt=Xe)},reset:function(){R=!1,ie=null,q=null,ce=null,de=null,Ce=null,ft=null,dt=null,Jt=null}}}let o=new i,c=new r,l=new a,f={},h=null,d={},u=null,m=!1,b=null,x=null,p=null,g=null,T=null,y=null,E=null,L=!1,_=null,P=null,X=null,N=null,A=null,Z=s.getParameter(35661),B=!1,D=0,O=s.getParameter(7938);O.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=D>=1):O.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=D>=2);let z=null,H={},K=s.getParameter(3088),le=s.getParameter(2978),ge=new Oe().fromArray(K),re=new Oe().fromArray(le);function we(R,ie,q){let ce=new Uint8Array(4),de=s.createTexture();s.bindTexture(R,de),s.texParameteri(R,10241,9728),s.texParameteri(R,10240,9728);for(let Ce=0;Ce<q;Ce++)s.texImage2D(ie+Ce,0,6408,1,1,0,6408,5121,ce);return de}let Y={};Y[3553]=we(3553,3553,1),Y[34067]=we(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Q(2929),c.setFunc(Is),J(!1),ee(xo),Q(2884),Ee($t);function Q(R){f[R]!==!0&&(s.enable(R),f[R]=!0)}function he(R){f[R]!==!1&&(s.disable(R),f[R]=!1)}function U(R){R!==h&&(s.bindFramebuffer(36160,R),h=R)}function be(R,ie){return ie===null&&h!==null&&(ie=h),d[R]!==ie?(s.bindFramebuffer(R,ie),d[R]=ie,n&&(R===36009&&(d[36160]=ie),R===36160&&(d[36009]=ie)),!0):!1}function Me(R){return u!==R?(s.useProgram(R),u=R,!0):!1}let ae={[Fn]:32774,[zf]:32778,[Nf]:32779};if(n)ae[wo]=32775,ae[So]=32776;else{let R=e.get("EXT_blend_minmax");R!==null&&(ae[wo]=R.MIN_EXT,ae[So]=R.MAX_EXT)}let fe={[Uf]:0,[Of]:1,[Hf]:768,[To]:770,[Xf]:776,[Wf]:774,[kf]:772,[Gf]:769,[Eo]:771,[qf]:775,[Vf]:773};function Ee(R,ie,q,ce,de,Ce,ft,dt){if(R===$t){m===!0&&(he(3042),m=!1);return}if(m===!1&&(Q(3042),m=!0),R!==Bf){if(R!==b||dt!==L){if((x!==Fn||T!==Fn)&&(s.blendEquation(32774),x=Fn,T=Fn),dt)switch(R){case Ai:s.blendFuncSeparate(1,771,1,771);break;case cr:s.blendFunc(1,1);break;case _o:s.blendFuncSeparate(0,0,769,771);break;case Mo:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ai:s.blendFuncSeparate(770,771,1,771);break;case cr:s.blendFunc(770,1);break;case _o:s.blendFunc(0,769);break;case Mo:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}p=null,g=null,y=null,E=null,b=R,L=dt}return}de=de||ie,Ce=Ce||q,ft=ft||ce,(ie!==x||de!==T)&&(s.blendEquationSeparate(ae[ie],ae[de]),x=ie,T=de),(q!==p||ce!==g||Ce!==y||ft!==E)&&(s.blendFuncSeparate(fe[q],fe[ce],fe[Ce],fe[ft]),p=q,g=ce,y=Ce,E=ft),b=R,L=null}function k(R,ie){R.side===Dn?he(2884):Q(2884);let q=R.side===je;ie&&(q=!q),J(q),R.blending===Ai&&R.transparent===!1?Ee($t):Ee(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),o.setMask(R.colorWrite);let ce=R.stencilWrite;l.setTest(ce),ce&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Q(32926):he(32926)}function J(R){_!==R&&(R?s.frontFace(2304):s.frontFace(2305),_=R)}function ee(R){R!==Df?(Q(2884),R!==P&&(R===xo?s.cullFace(1029):R===Ff?s.cullFace(1028):s.cullFace(1032))):he(2884),P=R}function ue(R){R!==X&&(B&&s.lineWidth(R),X=R)}function ne(R,ie,q){R?(Q(32823),(N!==ie||A!==q)&&(s.polygonOffset(ie,q),N=ie,A=q)):he(32823)}function w(R){R?Q(3089):he(3089)}function M(R){R===void 0&&(R=33984+Z-1),z!==R&&(s.activeTexture(R),z=R)}function G(R,ie){z===null&&M();let q=H[z];q===void 0&&(q={type:void 0,texture:void 0},H[z]=q),(q.type!==R||q.texture!==ie)&&(s.bindTexture(R,ie||Y[R]),q.type=R,q.texture=ie)}function $(){let R=H[z];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(R){ge.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),ge.copy(R))}function Se(R){re.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),re.copy(R))}function pe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},z=null,H={},h=null,d={},u=null,m=!1,b=null,x=null,p=null,g=null,T=null,y=null,E=null,L=!1,_=null,P=null,X=null,N=null,A=null,ge.set(0,0,s.canvas.width,s.canvas.height),re.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Q,disable:he,bindFramebuffer:be,bindXRFramebuffer:U,useProgram:Me,setBlending:Ee,setMaterial:k,setFlipSided:J,setCullFace:ee,setLineWidth:ue,setPolygonOffset:ne,setScissorTest:w,activeTexture:M,bindTexture:G,unbindTexture:$,compressedTexImage2D:j,texImage2D:oe,texImage3D:_e,scissor:me,viewport:Se,reset:pe}}function z0(s,e,t,n,i,r,a){let o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,f=i.maxTextureSize,h=i.maxSamples,d=new WeakMap,u,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function b(w,M){return m?new OffscreenCanvas(w,M):vr("canvas")}function x(w,M,G,$){let j=1;if((w.width>$||w.height>$)&&(j=$/Math.max(w.width,w.height)),j<1||M===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){let oe=M?dh:Math.floor,_e=oe(j*w.width),me=oe(j*w.height);u===void 0&&(u=b(_e,me));let Se=G?b(_e,me):u;return Se.width=_e,Se.height=me,Se.getContext("2d").drawImage(w,0,0,_e,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+me+")."),Se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return qo(w.width)&&qo(w.height)}function g(w){return o?!1:w.wrapS!==vt||w.wrapT!==vt||w.minFilter!==et&&w.minFilter!==tt}function T(w,M){return w.generateMipmaps&&M&&w.minFilter!==et&&w.minFilter!==tt}function y(w,M,G,$,j=1){s.generateMipmap(w);let oe=n.get(M);oe.__maxMipLevel=Math.log2(Math.max(G,$,j))}function E(w,M,G,$){if(o===!1)return M;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=M;return M===6403&&(G===5126&&(j=33326),G===5131&&(j=33325),G===5121&&(j=33321)),M===6407&&(G===5126&&(j=34837),G===5131&&(j=34843),G===5121&&(j=32849)),M===6408&&(G===5126&&(j=34836),G===5131&&(j=34842),G===5121&&(j=$===Mn?35907:32856)),(j===33325||j===33326||j===34842||j===34836)&&e.get("EXT_color_buffer_float"),j}function L(w){return w===et||w===Lo||w===Ro?9728:9729}function _(w){let M=w.target;M.removeEventListener("dispose",_),X(M),M.isVideoTexture&&d.delete(M),a.memory.textures--}function P(w){let M=w.target;M.removeEventListener("dispose",P),N(M)}function X(w){let M=n.get(w);M.__webglInit!==void 0&&(s.deleteTexture(M.__webglTexture),n.remove(w))}function N(w){let M=w.texture,G=n.get(w),$=n.get(M);if(!!w){if($.__webglTexture!==void 0&&(s.deleteTexture($.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++)s.deleteFramebuffer(G.__webglFramebuffer[j]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[j]);else s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer&&s.deleteRenderbuffer(G.__webglColorRenderbuffer),G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer);if(w.isWebGLMultipleRenderTargets)for(let j=0,oe=M.length;j<oe;j++){let _e=n.get(M[j]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(M[j])}n.remove(M),n.remove(w)}}let A=0;function Z(){A=0}function B(){let w=A;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),A+=1,w}function D(w,M){let G=n.get(w);if(w.isVideoTexture&&k(w),w.version>0&&G.__version!==w.version){let $=w.image;if($===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(G,w,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,G.__webglTexture)}function O(w,M){let G=n.get(w);if(w.version>0&&G.__version!==w.version){we(G,w,M);return}t.activeTexture(33984+M),t.bindTexture(35866,G.__webglTexture)}function z(w,M){let G=n.get(w);if(w.version>0&&G.__version!==w.version){we(G,w,M);return}t.activeTexture(33984+M),t.bindTexture(32879,G.__webglTexture)}function H(w,M){let G=n.get(w);if(w.version>0&&G.__version!==w.version){Y(G,w,M);return}t.activeTexture(33984+M),t.bindTexture(34067,G.__webglTexture)}let K={[Bs]:10497,[vt]:33071,[zs]:33648},le={[et]:9728,[Lo]:9984,[Ro]:9986,[tt]:9729,[od]:9985,[ur]:9987};function ge(w,M,G){if(G?(s.texParameteri(w,10242,K[M.wrapS]),s.texParameteri(w,10243,K[M.wrapT]),(w===32879||w===35866)&&s.texParameteri(w,32882,K[M.wrapR]),s.texParameteri(w,10240,le[M.magFilter]),s.texParameteri(w,10241,le[M.minFilter])):(s.texParameteri(w,10242,33071),s.texParameteri(w,10243,33071),(w===32879||w===35866)&&s.texParameteri(w,32882,33071),(M.wrapS!==vt||M.wrapT!==vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,10240,L(M.magFilter)),s.texParameteri(w,10241,L(M.minFilter)),M.minFilter!==et&&M.minFilter!==tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let $=e.get("EXT_texture_filter_anisotropic");if(M.type===Qt&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Bn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(w,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function re(w,M){w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",_),w.__webglTexture=s.createTexture(),a.memory.textures++)}function we(w,M,G){let $=3553;M.isDataTexture2DArray&&($=35866),M.isDataTexture3D&&($=32879),re(w,M),t.activeTexture(33984+G),t.bindTexture($,w.__webglTexture),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);let j=g(M)&&p(M.image)===!1,oe=x(M.image,j,!1,f),_e=p(oe)||o,me=r.convert(M.format),Se=r.convert(M.type),pe=E(M.internalFormat,me,Se,M.encoding);ge($,M,_e);let R,ie=M.mipmaps;if(M.isDepthTexture)pe=6402,o?M.type===Qt?pe=36012:M.type===mr?pe=33190:M.type===Ri?pe=35056:pe=33189:M.type===Qt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Nn&&pe===6402&&M.type!==pr&&M.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=pr,Se=r.convert(M.type)),M.format===Ci&&pe===6402&&(pe=34041,M.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ri,Se=r.convert(M.type))),t.texImage2D(3553,0,pe,oe.width,oe.height,0,me,Se,null);else if(M.isDataTexture)if(ie.length>0&&_e){for(let q=0,ce=ie.length;q<ce;q++)R=ie[q],t.texImage2D(3553,q,pe,R.width,R.height,0,me,Se,R.data);M.generateMipmaps=!1,w.__maxMipLevel=ie.length-1}else t.texImage2D(3553,0,pe,oe.width,oe.height,0,me,Se,oe.data),w.__maxMipLevel=0;else if(M.isCompressedTexture){for(let q=0,ce=ie.length;q<ce;q++)R=ie[q],M.format!==Qe&&M.format!==zn?me!==null?t.compressedTexImage2D(3553,q,pe,R.width,R.height,0,R.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,pe,R.width,R.height,0,me,Se,R.data);w.__maxMipLevel=ie.length-1}else if(M.isDataTexture2DArray)t.texImage3D(35866,0,pe,oe.width,oe.height,oe.depth,0,me,Se,oe.data),w.__maxMipLevel=0;else if(M.isDataTexture3D)t.texImage3D(32879,0,pe,oe.width,oe.height,oe.depth,0,me,Se,oe.data),w.__maxMipLevel=0;else if(ie.length>0&&_e){for(let q=0,ce=ie.length;q<ce;q++)R=ie[q],t.texImage2D(3553,q,pe,me,Se,R);M.generateMipmaps=!1,w.__maxMipLevel=ie.length-1}else t.texImage2D(3553,0,pe,me,Se,oe),w.__maxMipLevel=0;T(M,_e)&&y($,M,oe.width,oe.height),w.__version=M.version,M.onUpdate&&M.onUpdate(M)}function Y(w,M,G){if(M.image.length!==6)return;re(w,M),t.activeTexture(33984+G),t.bindTexture(34067,w.__webglTexture),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);let $=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),j=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let q=0;q<6;q++)!$&&!j?oe[q]=x(M.image[q],!1,!0,l):oe[q]=j?M.image[q].image:M.image[q];let _e=oe[0],me=p(_e)||o,Se=r.convert(M.format),pe=r.convert(M.type),R=E(M.internalFormat,Se,pe,M.encoding);ge(34067,M,me);let ie;if($){for(let q=0;q<6;q++){ie=oe[q].mipmaps;for(let ce=0;ce<ie.length;ce++){let de=ie[ce];M.format!==Qe&&M.format!==zn?Se!==null?t.compressedTexImage2D(34069+q,ce,R,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,ce,R,de.width,de.height,0,Se,pe,de.data)}}w.__maxMipLevel=ie.length-1}else{ie=M.mipmaps;for(let q=0;q<6;q++)if(j){t.texImage2D(34069+q,0,R,oe[q].width,oe[q].height,0,Se,pe,oe[q].data);for(let ce=0;ce<ie.length;ce++){let Ce=ie[ce].image[q].image;t.texImage2D(34069+q,ce+1,R,Ce.width,Ce.height,0,Se,pe,Ce.data)}}else{t.texImage2D(34069+q,0,R,Se,pe,oe[q]);for(let ce=0;ce<ie.length;ce++){let de=ie[ce];t.texImage2D(34069+q,ce+1,R,Se,pe,de.image[q])}}w.__maxMipLevel=ie.length}T(M,me)&&y(34067,M,_e.width,_e.height),w.__version=M.version,M.onUpdate&&M.onUpdate(M)}function Q(w,M,G,$,j){let oe=r.convert(G.format),_e=r.convert(G.type),me=E(G.internalFormat,oe,_e,G.encoding);j===32879||j===35866?t.texImage3D(j,0,me,M.width,M.height,M.depth,0,oe,_e,null):t.texImage2D(j,0,me,M.width,M.height,0,oe,_e,null),t.bindFramebuffer(36160,w),s.framebufferTexture2D(36160,$,j,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function he(w,M,G){if(s.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let $=33189;if(G){let j=M.depthTexture;j&&j.isDepthTexture&&(j.type===Qt?$=36012:j.type===mr&&($=33190));let oe=Ee(M);s.renderbufferStorageMultisample(36161,oe,$,M.width,M.height)}else s.renderbufferStorage(36161,$,M.width,M.height);s.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){if(G){let $=Ee(M);s.renderbufferStorageMultisample(36161,$,35056,M.width,M.height)}else s.renderbufferStorage(36161,34041,M.width,M.height);s.framebufferRenderbuffer(36160,33306,36161,w)}else{let $=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,j=r.convert($.format),oe=r.convert($.type),_e=E($.internalFormat,j,oe,$.encoding);if(G){let me=Ee(M);s.renderbufferStorageMultisample(36161,me,_e,M.width,M.height)}else s.renderbufferStorage(36161,_e,M.width,M.height)}s.bindRenderbuffer(36161,null)}function U(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);let $=n.get(M.depthTexture).__webglTexture;if(M.depthTexture.format===Nn)s.framebufferTexture2D(36160,36096,3553,$,0);else if(M.depthTexture.format===Ci)s.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function be(w){let M=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture){if(G)throw new Error("target.depthTexture not supported in Cube render targets");U(M.__webglFramebuffer,w)}else if(G){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=s.createRenderbuffer(),he(M.__webglDepthbuffer[$],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),he(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function Me(w){let M=w.texture,G=n.get(w),$=n.get(M);w.addEventListener("dispose",P),w.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture=s.createTexture(),$.__version=M.version,a.memory.textures++);let j=w.isWebGLCubeRenderTarget===!0,oe=w.isWebGLMultipleRenderTargets===!0,_e=w.isWebGLMultisampleRenderTarget===!0,me=M.isDataTexture3D||M.isDataTexture2DArray,Se=p(w)||o;if(o&&M.format===zn&&(M.type===Qt||M.type===Bn)&&(M.format=Qe,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),j){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)G.__webglFramebuffer[pe]=s.createFramebuffer()}else if(G.__webglFramebuffer=s.createFramebuffer(),oe)if(i.drawBuffers){let pe=w.texture;for(let R=0,ie=pe.length;R<ie;R++){let q=n.get(pe[R]);q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(_e)if(o){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer);let pe=r.convert(M.format),R=r.convert(M.type),ie=E(M.internalFormat,pe,R,M.encoding),q=Ee(w);s.renderbufferStorageMultisample(36161,q,ie,w.width,w.height),t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,G.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),he(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(j){t.bindTexture(34067,$.__webglTexture),ge(34067,M,Se);for(let pe=0;pe<6;pe++)Q(G.__webglFramebuffer[pe],w,M,36064,34069+pe);T(M,Se)&&y(34067,M,w.width,w.height),t.unbindTexture()}else if(oe){let pe=w.texture;for(let R=0,ie=pe.length;R<ie;R++){let q=pe[R],ce=n.get(q);t.bindTexture(3553,ce.__webglTexture),ge(3553,q,Se),Q(G.__webglFramebuffer,w,q,36064+R,3553),T(q,Se)&&y(3553,q,w.width,w.height)}t.unbindTexture()}else{let pe=3553;me&&(o?pe=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(pe,$.__webglTexture),ge(pe,M,Se),Q(G.__webglFramebuffer,w,M,36064,pe),T(M,Se)&&y(pe,M,w.width,w.height,w.depth),t.unbindTexture()}w.depthBuffer&&be(w)}function ae(w){let M=p(w)||o,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0,j=G.length;$<j;$++){let oe=G[$];if(T(oe,M)){let _e=w.isWebGLCubeRenderTarget?34067:3553,me=n.get(oe).__webglTexture;t.bindTexture(_e,me),y(_e,oe,w.width,w.height),t.unbindTexture()}}}function fe(w){if(w.isWebGLMultisampleRenderTarget)if(o){let M=w.width,G=w.height,$=16384;w.depthBuffer&&($|=256),w.stencilBuffer&&($|=1024);let j=n.get(w);t.bindFramebuffer(36008,j.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,j.__webglFramebuffer),s.blitFramebuffer(0,0,M,G,0,0,M,G,$,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,j.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ee(w){return o&&w.isWebGLMultisampleRenderTarget?Math.min(h,w.samples):0}function k(w){let M=a.render.frame;d.get(w)!==M&&(d.set(w,M),w.update())}let J=!1,ee=!1;function ue(w,M){w&&w.isWebGLRenderTarget&&(J===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),J=!0),w=w.texture),D(w,M)}function ne(w,M){w&&w.isWebGLCubeRenderTarget&&(ee===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ee=!0),w=w.texture),H(w,M)}this.allocateTextureUnit=B,this.resetTextureUnits=Z,this.setTexture2D=D,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=H,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=fe,this.safeSetTexture2D=ue,this.safeSetTextureCube=ne}function N0(s,e,t){let n=t.isWebGL2;function i(r){let a;if(r===jt)return 5121;if(r===dd)return 32819;if(r===hd)return 32820;if(r===ud)return 33635;if(r===cd)return 5120;if(r===ld)return 5122;if(r===pr)return 5123;if(r===fd)return 5124;if(r===mr)return 5125;if(r===Qt)return 5126;if(r===Bn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===pd)return 6406;if(r===zn)return 6407;if(r===Qe)return 6408;if(r===md)return 6409;if(r===gd)return 6410;if(r===Nn)return 6402;if(r===Ci)return 34041;if(r===xd)return 6403;if(r===yd)return 36244;if(r===vd)return 33319;if(r===_d)return 33320;if(r===Md)return 36248;if(r===wd)return 36249;if(r===Co||r===Po||r===Io||r===Do)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Co)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Po)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Io)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Do)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fo||r===Bo||r===zo||r===No)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Fo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===No)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===Uo||r===Oo)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(r===Uo)return a.COMPRESSED_RGB8_ETC2;if(r===Oo)return a.COMPRESSED_RGBA8_ETC2_EAC}if(r===Td||r===Ed||r===Ad||r===Ld||r===Rd||r===Cd||r===Pd||r===Id||r===Dd||r===Fd||r===Bd||r===zd||r===Nd||r===Ud||r===Hd||r===Gd||r===kd||r===Vd||r===Wd||r===qd||r===Xd||r===Yd||r===Jd||r===Zd||r===$d||r===jd||r===Qd||r===Kd)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?r:null;if(r===Od)return a=e.get("EXT_texture_compression_bptc"),a!==null?r:null;if(r===Ri)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var Aa=class extends ct{constructor(e=[]){super();this.cameras=e}};Aa.prototype.isArrayCamera=!0;var ci=class extends Le{constructor(){super();this.type="Group"}};ci.prototype.isGroup=!0;var U0={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U0))),l&&e.hand){a=!0;for(let b of e.hand.values()){let x=t.getJointPose(b,n);if(l.joints[b.jointName]===void 0){let g=new ci;g.matrixAutoUpdate=!1,g.visible=!1,l.joints[b.jointName]=g,l.add(g)}let p=l.joints[b.jointName];x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=x.radius),p.visible=x!==null}let f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=f.position.distanceTo(h.position),u=.02,m=.005;l.inputState.pinching&&d>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}},kc=class extends Kt{constructor(e,t){super();let n=this,i=e.state,r=null,a=1,o=null,c="local-floor",l=null,f=null,h=null,d=null,u=null,m=!1,b=null,x=null,p=null,g=null,T=null,y=null,E=[],L=new Map,_=new ct;_.layers.enable(1),_.viewport=new Oe;let P=new ct;P.layers.enable(2),P.viewport=new Oe;let X=[_,P],N=new Aa;N.layers.enable(1),N.layers.enable(2);let A=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=E[Y];return Q===void 0&&(Q=new Wr,E[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=E[Y];return Q===void 0&&(Q=new Wr,E[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=E[Y];return Q===void 0&&(Q=new Wr,E[Y]=Q),Q.getHandSpace()};function B(Y){let Q=L.get(Y.inputSource);Q&&Q.dispatchEvent({type:Y.type,data:Y.inputSource})}function D(){L.forEach(function(Y,Q){Y.disconnect(Q)}),L.clear(),A=null,Z=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),h&&t.deleteFramebuffer(h),b&&t.deleteFramebuffer(b),x&&t.deleteRenderbuffer(x),p&&t.deleteRenderbuffer(p),h=null,b=null,x=null,p=null,u=null,d=null,f=null,r=null,we.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",D),r.addEventListener("inputsourceschange",O);let Q=t.getContextAttributes();if(Q.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0){let he={antialias:Q.antialias,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:u})}else if(t instanceof WebGLRenderingContext){let he={antialias:!0,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,he),r.updateRenderState({layers:[u]})}else{m=Q.antialias;let he=null;Q.depth&&(y=256,Q.stencil&&(y|=1024),T=Q.stencil?33306:36096,he=Q.stencil?35056:33190);let U={colorFormat:Q.alpha?32856:32849,depthFormat:he,scaleFactor:a};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(U),h=t.createFramebuffer(),r.updateRenderState({layers:[d]}),m&&(b=t.createFramebuffer(),x=t.createRenderbuffer(),t.bindRenderbuffer(36161,x),t.renderbufferStorageMultisample(36161,4,32856,d.textureWidth,d.textureHeight),i.bindFramebuffer(36160,b),t.framebufferRenderbuffer(36160,36064,36161,x),t.bindRenderbuffer(36161,null),he!==null&&(p=t.createRenderbuffer(),t.bindRenderbuffer(36161,p),t.renderbufferStorageMultisample(36161,4,he,d.textureWidth,d.textureHeight),t.framebufferRenderbuffer(36160,T,36161,p),t.bindRenderbuffer(36161,null)),i.bindFramebuffer(36160,null))}o=await r.requestReferenceSpace(c),we.setContext(r),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(Y){let Q=r.inputSources;for(let he=0;he<E.length;he++)L.set(Q[he],E[he]);for(let he=0;he<Y.removed.length;he++){let U=Y.removed[he],be=L.get(U);be&&(be.dispatchEvent({type:"disconnected",data:U}),L.delete(U))}for(let he=0;he<Y.added.length;he++){let U=Y.added[he],be=L.get(U);be&&be.dispatchEvent({type:"connected",data:U})}}let z=new S,H=new S;function K(Y,Q,he){z.setFromMatrixPosition(Q.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);let U=z.distanceTo(H),be=Q.projectionMatrix.elements,Me=he.projectionMatrix.elements,ae=be[14]/(be[10]-1),fe=be[14]/(be[10]+1),Ee=(be[9]+1)/be[5],k=(be[9]-1)/be[5],J=(be[8]-1)/be[0],ee=(Me[8]+1)/Me[0],ue=ae*J,ne=ae*ee,w=U/(-J+ee),M=w*-J;Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(M),Y.translateZ(w),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let G=ae+w,$=fe+w,j=ue-M,oe=ne+(U-M),_e=Ee*fe/$*G,me=k*fe/$*G;Y.projectionMatrix.makePerspective(j,oe,_e,me,G,$)}function le(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;N.near=P.near=_.near=Y.near,N.far=P.far=_.far=Y.far,(A!==N.near||Z!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),A=N.near,Z=N.far);let Q=Y.parent,he=N.cameras;le(N,Q);for(let be=0;be<he.length;be++)le(he[be],Q);N.matrixWorld.decompose(N.position,N.quaternion,N.scale),Y.position.copy(N.position),Y.quaternion.copy(N.quaternion),Y.scale.copy(N.scale),Y.matrix.copy(N.matrix),Y.matrixWorld.copy(N.matrixWorld);let U=Y.children;for(let be=0,Me=U.length;be<Me;be++)U[be].updateMatrixWorld(!0);he.length===2?K(N,_,P):N.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(Y){d!==null&&(d.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)};let ge=null;function re(Y,Q){if(l=Q.getViewerPose(o),g=Q,l!==null){let U=l.views;u!==null&&i.bindXRFramebuffer(u.framebuffer);let be=!1;U.length!==N.cameras.length&&(N.cameras.length=0,be=!0);for(let Me=0;Me<U.length;Me++){let ae=U[Me],fe=null;if(u!==null)fe=u.getViewport(ae);else{let k=f.getViewSubImage(d,ae);i.bindXRFramebuffer(h),k.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,T,3553,k.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,k.colorTexture,0),fe=k.viewport}let Ee=X[Me];Ee.matrix.fromArray(ae.transform.matrix),Ee.projectionMatrix.fromArray(ae.projectionMatrix),Ee.viewport.set(fe.x,fe.y,fe.width,fe.height),Me===0&&N.matrix.copy(Ee.matrix),be===!0&&N.cameras.push(Ee)}m&&(i.bindXRFramebuffer(b),y!==null&&t.clear(y))}let he=r.inputSources;for(let U=0;U<E.length;U++){let be=E[U],Me=he[U];be.update(Me,Q,o)}if(ge&&ge(Y,Q),m){let U=d.textureWidth,be=d.textureHeight;i.bindFramebuffer(36008,b),i.bindFramebuffer(36009,h),t.invalidateFramebuffer(36008,[T]),t.invalidateFramebuffer(36009,[T]),t.blitFramebuffer(0,0,U,be,0,0,U,be,16384,9728),t.invalidateFramebuffer(36008,[36064]),i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),i.bindFramebuffer(36160,b)}g=null}let we=new cc;we.setAnimationLoop(re),this.setAnimationLoop=function(Y){ge=Y},this.dispose=function(){}}};function O0(s){function e(p,g){p.fogColor.value.copy(g.color),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function t(p,g,T,y,E){g.isMeshBasicMaterial?n(p,g):g.isMeshLambertMaterial?(n(p,g),c(p,g)):g.isMeshToonMaterial?(n(p,g),f(p,g)):g.isMeshPhongMaterial?(n(p,g),l(p,g)):g.isMeshStandardMaterial?(n(p,g),g.isMeshPhysicalMaterial?d(p,g,E):h(p,g)):g.isMeshMatcapMaterial?(n(p,g),u(p,g)):g.isMeshDepthMaterial?(n(p,g),m(p,g)):g.isMeshDistanceMaterial?(n(p,g),b(p,g)):g.isMeshNormalMaterial?(n(p,g),x(p,g)):g.isLineBasicMaterial?(i(p,g),g.isLineDashedMaterial&&r(p,g)):g.isPointsMaterial?a(p,g,T,y):g.isSpriteMaterial?o(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.specularMap&&(p.specularMap.value=g.specularMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let T=s.get(g).envMap;if(T){p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio;let L=s.get(T).__maxMipLevel;L!==void 0&&(p.maxMipLevel.value=L)}g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity);let y;g.map?y=g.map:g.specularMap?y=g.specularMap:g.displacementMap?y=g.displacementMap:g.normalMap?y=g.normalMap:g.bumpMap?y=g.bumpMap:g.roughnessMap?y=g.roughnessMap:g.metalnessMap?y=g.metalnessMap:g.alphaMap?y=g.alphaMap:g.emissiveMap?y=g.emissiveMap:g.clearcoatMap?y=g.clearcoatMap:g.clearcoatNormalMap?y=g.clearcoatNormalMap:g.clearcoatRoughnessMap?y=g.clearcoatRoughnessMap:g.specularIntensityMap?y=g.specularIntensityMap:g.specularTintMap?y=g.specularTintMap:g.transmissionMap?y=g.transmissionMap:g.thicknessMap&&(y=g.thicknessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let E;g.aoMap?E=g.aoMap:g.lightMap&&(E=g.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function i(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity}function r(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function a(p,g,T,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*T,p.scale.value=y*.5,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let E;g.map?E=g.map:g.alphaMap&&(E=g.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let T;g.map?T=g.map:g.alphaMap&&(T=g.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix))}function c(p,g){g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap)}function l(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===je&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===je&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===je&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===je&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function h(p,g){p.roughness.value=g.roughness,p.metalness.value=g.metalness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===je&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===je&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),s.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,T){h(p,g),p.ior.value=g.ior,g.sheen>0&&(p.sheenTint.value.copy(g.sheenTint).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),p.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===je&&p.clearcoatNormalScale.value.negate())),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap),p.attenuationDistance.value=g.attenuationDistance,p.attenuationTint.value.copy(g.attenuationTint)),p.specularIntensity.value=g.specularIntensity,p.specularTint.value.copy(g.specularTint),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap),g.specularTintMap&&(p.specularTintMap.value=g.specularTintMap)}function u(p,g){g.matcap&&(p.matcap.value=g.matcap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===je&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===je&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function m(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function b(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),p.referencePosition.value.copy(g.referencePosition),p.nearDistance.value=g.nearDistance,p.farDistance.value=g.farDistance}function x(p,g){g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===je&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===je&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function H0(){let s=vr("canvas");return s.style.display="block",s}function Ue(s={}){let e=s.canvas!==void 0?s.canvas:H0(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,a=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,c=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",f=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1,h=null,d=null,u=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ht,this.physicallyCorrectLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;let b=this,x=!1,p=0,g=0,T=null,y=-1,E=null,L=new Oe,_=new Oe,P=null,X=e.width,N=e.height,A=1,Z=null,B=null,D=new Oe(0,0,X,N),O=new Oe(0,0,X,N),z=!1,H=[],K=new Ni,le=!1,ge=!1,re=null,we=new xe,Y=new S,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return T===null?A:1}let U=t;function be(v,C){for(let F=0;F<v.length;F++){let I=v[F],W=e.getContext(I,C);if(W!==null)return W}return null}try{let v={alpha:n,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",dt,!1),U===null){let C=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&C.shift(),U=be(C,v),U===null)throw be(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Me,ae,fe,Ee,k,J,ee,ue,ne,w,M,G,$,j,oe,_e,me,Se,pe,R,ie,q,ce;function de(){Me=new fm(U),ae=new im(U,Me,s),Me.init(ae),q=new N0(U,Me,ae),fe=new B0(U,Me,ae),H[0]=1029,Ee=new um(U),k=new S0,J=new z0(U,Me,fe,k,ae,q,Ee),ee=new sm(b),ue=new lm(b),ne=new Ah(U,ae),ce=new tm(U,Me,ne,ae),w=new dm(U,ne,Ee,ce),M=new bm(U,w,ne,Ee),pe=new gm(U,ae,J),_e=new rm(k),G=new w0(b,ee,ue,Me,ae,ce,_e),$=new O0(k),j=new E0(k),oe=new I0(Me,ae),Se=new em(b,ee,fe,M,o),me=new Gc(b,M,ae),R=new nm(U,Me,Ee,ae),ie=new hm(U,Me,Ee,ae),Ee.programs=G.programs,b.capabilities=ae,b.extensions=Me,b.properties=k,b.renderLists=j,b.shadowMap=me,b.state=fe,b.info=Ee}de();let Ce=new kc(b,U);this.xr=Ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=Me.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Me.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(v){v!==void 0&&(A=v,this.setSize(X,N,!1))},this.getSize=function(v){return v.set(X,N)},this.setSize=function(v,C,F){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,N=C,e.width=Math.floor(v*A),e.height=Math.floor(C*A),F!==!1&&(e.style.width=v+"px",e.style.height=C+"px"),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(X*A,N*A).floor()},this.setDrawingBufferSize=function(v,C,F){X=v,N=C,A=F,e.width=Math.floor(v*F),e.height=Math.floor(C*F),this.setViewport(0,0,v,C)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(D)},this.setViewport=function(v,C,F,I){v.isVector4?D.set(v.x,v.y,v.z,v.w):D.set(v,C,F,I),fe.viewport(L.copy(D).multiplyScalar(A).floor())},this.getScissor=function(v){return v.copy(O)},this.setScissor=function(v,C,F,I){v.isVector4?O.set(v.x,v.y,v.z,v.w):O.set(v,C,F,I),fe.scissor(_.copy(O).multiplyScalar(A).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(v){fe.setScissorTest(z=v)},this.setOpaqueSort=function(v){Z=v},this.setTransparentSort=function(v){B=v},this.getClearColor=function(v){return v.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(v,C,F){let I=0;(v===void 0||v)&&(I|=16384),(C===void 0||C)&&(I|=256),(F===void 0||F)&&(I|=1024),U.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",dt,!1),j.dispose(),oe.dispose(),k.dispose(),ee.dispose(),ue.dispose(),M.dispose(),ce.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",fo),Ce.removeEventListener("sessionend",ho),re&&(re.dispose(),re=null),gn.stop()};function ft(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let v=Ee.autoReset,C=me.enabled,F=me.autoUpdate,I=me.needsUpdate,W=me.type;de(),Ee.autoReset=v,me.enabled=C,me.autoUpdate=F,me.needsUpdate=I,me.type=W}function Jt(v){let C=v.target;C.removeEventListener("dispose",Jt),Xe(C)}function Xe(v){Ut(v),k.remove(v)}function Ut(v){let C=k.get(v).programs;C!==void 0&&C.forEach(function(F){G.releaseProgram(F)})}function Ot(v,C){v.render(function(F){b.renderBufferImmediate(F,C)})}this.renderBufferImmediate=function(v,C){ce.initAttributes();let F=k.get(v);v.hasPositions&&!F.position&&(F.position=U.createBuffer()),v.hasNormals&&!F.normal&&(F.normal=U.createBuffer()),v.hasUvs&&!F.uv&&(F.uv=U.createBuffer()),v.hasColors&&!F.color&&(F.color=U.createBuffer());let I=C.getAttributes();v.hasPositions&&(U.bindBuffer(34962,F.position),U.bufferData(34962,v.positionArray,35048),ce.enableAttribute(I.position.location),U.vertexAttribPointer(I.position.location,3,5126,!1,0,0)),v.hasNormals&&(U.bindBuffer(34962,F.normal),U.bufferData(34962,v.normalArray,35048),ce.enableAttribute(I.normal.location),U.vertexAttribPointer(I.normal.location,3,5126,!1,0,0)),v.hasUvs&&(U.bindBuffer(34962,F.uv),U.bufferData(34962,v.uvArray,35048),ce.enableAttribute(I.uv.location),U.vertexAttribPointer(I.uv.location,2,5126,!1,0,0)),v.hasColors&&(U.bindBuffer(34962,F.color),U.bufferData(34962,v.colorArray,35048),ce.enableAttribute(I.color.location),U.vertexAttribPointer(I.color.location,3,5126,!1,0,0)),ce.disableUnusedAttributes(),U.drawArrays(4,0,v.count),v.count=0},this.renderBufferDirect=function(v,C,F,I,W,Te){C===null&&(C=Q);let ye=W.isMesh&&W.matrixWorld.determinant()<0,ve=go(v,C,F,I,W);fe.setMaterial(I,ye);let Ae=F.index,Ne=F.attributes.position;if(Ae===null){if(Ne===void 0||Ne.count===0)return}else if(Ae.count===0)return;let Pe=1;I.wireframe===!0&&(Ae=w.getWireframeAttribute(F),Pe=2),ce.setup(W,I,ve,F,Ae);let De,We=R;Ae!==null&&(De=ne.get(Ae),We=ie,We.setIndex(De));let bn=Ae!==null?Ae.count:Ne.count,Fe=F.drawRange.start*Pe,wi=F.drawRange.count*Pe,Ge=Te!==null?Te.start*Pe:0,xn=Te!==null?Te.count*Pe:1/0,yn=Math.max(Fe,Ge),vn=Math.min(bn,Fe+wi,Ge+xn)-1,Zt=Math.max(0,vn-yn+1);if(Zt!==0){if(W.isMesh)I.wireframe===!0?(fe.setLineWidth(I.wireframeLinewidth*he()),We.setMode(1)):We.setMode(4);else if(W.isLine){let qe=I.linewidth;qe===void 0&&(qe=1),fe.setLineWidth(qe*he()),W.isLineSegments?We.setMode(1):W.isLineLoop?We.setMode(2):We.setMode(3)}else W.isPoints?We.setMode(0):W.isSprite&&We.setMode(4);if(W.isInstancedMesh)We.renderInstances(yn,Zt,W.count);else if(F.isInstancedBufferGeometry){let qe=Math.min(F.instanceCount,F._maxInstanceCount);We.renderInstances(yn,Zt,qe)}else We.render(yn,Zt)}},this.compile=function(v,C){d=oe.get(v),d.init(),m.push(d),v.traverseVisible(function(F){F.isLight&&F.layers.test(C.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(b.physicallyCorrectLights),v.traverse(function(F){let I=F.material;if(I)if(Array.isArray(I))for(let W=0;W<I.length;W++){let Te=I[W];Cs(Te,v,F)}else Cs(I,v,F)}),m.pop(),d=null};let Rs=null;function Lf(v){Rs&&Rs(v)}function fo(){gn.stop()}function ho(){gn.start()}let gn=new cc;gn.setAnimationLoop(Lf),typeof window!="undefined"&&gn.setContext(window),this.setAnimationLoop=function(v){Rs=v,Ce.setAnimationLoop(v),v===null?gn.stop():gn.start()},Ce.addEventListener("sessionstart",fo),Ce.addEventListener("sessionend",ho),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;v.autoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(C),C=Ce.getCamera()),v.isScene===!0&&v.onBeforeRender(b,v,C,T),d=oe.get(v,m.length),d.init(),m.push(d),we.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),K.setFromProjectionMatrix(we),ge=this.localClippingEnabled,le=_e.init(this.clippingPlanes,ge,C),h=j.get(v,u.length),h.init(),u.push(h),uo(v,C,0,b.sortObjects),h.finish(),b.sortObjects===!0&&h.sort(Z,B),le===!0&&_e.beginShadows();let F=d.state.shadowsArray;if(me.render(F,v,C),le===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(h,v),d.setupLights(b.physicallyCorrectLights),C.isArrayCamera){let I=C.cameras;for(let W=0,Te=I.length;W<Te;W++){let ye=I[W];po(h,v,ye,ye.viewport)}}else po(h,v,C);T!==null&&(J.updateMultisampleRenderTarget(T),J.updateRenderTargetMipmap(T)),v.isScene===!0&&v.onAfterRender(b,v,C),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1),ce.resetDefaultState(),y=-1,E=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,u.pop(),u.length>0?h=u[u.length-1]:h=null};function uo(v,C,F,I){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||K.intersectsSprite(v)){I&&Y.setFromMatrixPosition(v.matrixWorld).applyMatrix4(we);let ye=M.update(v),ve=v.material;ve.visible&&h.push(v,ye,ve,F,Y.z,null)}}else if(v.isImmediateRenderObject)I&&Y.setFromMatrixPosition(v.matrixWorld).applyMatrix4(we),h.push(v,null,v.material,F,Y.z,null);else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==Ee.render.frame&&(v.skeleton.update(),v.skeleton.frame=Ee.render.frame),!v.frustumCulled||K.intersectsObject(v))){I&&Y.setFromMatrixPosition(v.matrixWorld).applyMatrix4(we);let ye=M.update(v),ve=v.material;if(Array.isArray(ve)){let Ae=ye.groups;for(let Ne=0,Pe=Ae.length;Ne<Pe;Ne++){let De=Ae[Ne],We=ve[De.materialIndex];We&&We.visible&&h.push(v,ye,We,F,Y.z,De)}}else ve.visible&&h.push(v,ye,ve,F,Y.z,null)}}let Te=v.children;for(let ye=0,ve=Te.length;ye<ve;ye++)uo(Te[ye],C,F,I)}function po(v,C,F,I){let W=v.opaque,Te=v.transmissive,ye=v.transparent;d.setupLightsView(F),Te.length>0&&Rf(W,C,F),I&&fe.viewport(L.copy(I)),W.length>0&&or(W,C,F),Te.length>0&&or(Te,C,F),ye.length>0&&or(ye,C,F)}function Rf(v,C,F){if(re===null){let ye=a===!0&&ae.isWebGL2===!0?Xs:at;re=new ye(1024,1024,{generateMipmaps:!0,type:q.convert(Bn)!==null?Bn:jt,minFilter:ur,magFilter:et,wrapS:vt,wrapT:vt})}let I=b.getRenderTarget();b.setRenderTarget(re),b.clear();let W=b.toneMapping;b.toneMapping=_n,or(v,C,F),b.toneMapping=W,J.updateMultisampleRenderTarget(re),J.updateRenderTargetMipmap(re),b.setRenderTarget(I)}function or(v,C,F){let I=C.isScene===!0?C.overrideMaterial:null;for(let W=0,Te=v.length;W<Te;W++){let ye=v[W],ve=ye.object,Ae=ye.geometry,Ne=I===null?ye.material:I,Pe=ye.group;ve.layers.test(F.layers)&&Cf(ve,C,F,Ae,Ne,Pe)}}function Cf(v,C,F,I,W,Te){if(v.onBeforeRender(b,C,F,I,W,Te),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(b,C,F,I,v,Te),v.isImmediateRenderObject){let ye=go(F,C,I,W,v);fe.setMaterial(W),ce.reset(),Ot(v,ye)}else W.transparent===!0&&W.side===Dn?(W.side=je,W.needsUpdate=!0,b.renderBufferDirect(F,C,I,W,v,Te),W.side=Ei,W.needsUpdate=!0,b.renderBufferDirect(F,C,I,W,v,Te),W.side=Dn):b.renderBufferDirect(F,C,I,W,v,Te);v.onAfterRender(b,C,F,I,W,Te)}function Cs(v,C,F){C.isScene!==!0&&(C=Q);let I=k.get(v),W=d.state.lights,Te=d.state.shadowsArray,ye=W.state.version,ve=G.getParameters(v,W.state,Te,C,F),Ae=G.getProgramCacheKey(ve),Ne=I.programs;I.environment=v.isMeshStandardMaterial?C.environment:null,I.fog=C.fog,I.envMap=(v.isMeshStandardMaterial?ue:ee).get(v.envMap||I.environment),Ne===void 0&&(v.addEventListener("dispose",Jt),Ne=new Map,I.programs=Ne);let Pe=Ne.get(Ae);if(Pe!==void 0){if(I.currentProgram===Pe&&I.lightsStateVersion===ye)return mo(v,ve),Pe}else ve.uniforms=G.getUniforms(v),v.onBuild(ve,b),v.onBeforeCompile(ve,b),Pe=G.acquireProgram(ve,Ae),Ne.set(Ae,Pe),I.uniforms=ve.uniforms;let De=I.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(De.clippingPlanes=_e.uniform),mo(v,ve),I.needsLights=If(v),I.lightsStateVersion=ye,I.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.directionalShadowMap.value=W.state.directionalShadowMap,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotShadowMap.value=W.state.spotShadowMap,De.spotShadowMatrix.value=W.state.spotShadowMatrix,De.pointShadowMap.value=W.state.pointShadowMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix);let We=Pe.getUniforms(),bn=hn.seqWithValue(We.seq,De);return I.currentProgram=Pe,I.uniformsList=bn,Pe}function mo(v,C){let F=k.get(v);F.outputEncoding=C.outputEncoding,F.instancing=C.instancing,F.skinning=C.skinning,F.morphTargets=C.morphTargets,F.morphNormals=C.morphNormals,F.morphTargetsCount=C.morphTargetsCount,F.numClippingPlanes=C.numClippingPlanes,F.numIntersection=C.numClipIntersection,F.vertexAlphas=C.vertexAlphas,F.vertexTangents=C.vertexTangents}function go(v,C,F,I,W){C.isScene!==!0&&(C=Q),J.resetTextureUnits();let Te=C.fog,ye=I.isMeshStandardMaterial?C.environment:null,ve=T===null?b.outputEncoding:T.texture.encoding,Ae=(I.isMeshStandardMaterial?ue:ee).get(I.envMap||ye),Ne=I.vertexColors===!0&&!!F&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!I.normalMap&&!!F&&!!F.attributes.tangent,De=!!F&&!!F.morphAttributes.position,We=!!F&&!!F.morphAttributes.normal,bn=!!F&&!!F.morphAttributes.position?F.morphAttributes.position.length:0,Fe=k.get(I),wi=d.state.lights;if(le===!0&&(ge===!0||v!==E)){let Et=v===E&&I.id===y;_e.setState(I,v,Et)}let Ge=!1;I.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==wi.state.version||Fe.outputEncoding!==ve||W.isInstancedMesh&&Fe.instancing===!1||!W.isInstancedMesh&&Fe.instancing===!0||W.isSkinnedMesh&&Fe.skinning===!1||!W.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Ae||I.fog&&Fe.fog!==Te||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==_e.numPlanes||Fe.numIntersection!==_e.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==Pe||Fe.morphTargets!==De||Fe.morphNormals!==We||ae.isWebGL2===!0&&Fe.morphTargetsCount!==bn)&&(Ge=!0):(Ge=!0,Fe.__version=I.version);let xn=Fe.currentProgram;Ge===!0&&(xn=Cs(I,C,W));let yn=!1,vn=!1,Zt=!1,qe=xn.getUniforms(),Si=Fe.uniforms;if(fe.useProgram(xn.program)&&(yn=!0,vn=!0,Zt=!0),I.id!==y&&(y=I.id,vn=!0),yn||E!==v){if(qe.setValue(U,"projectionMatrix",v.projectionMatrix),ae.logarithmicDepthBuffer&&qe.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),E!==v&&(E=v,vn=!0,Zt=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){let Et=qe.map.cameraPosition;Et!==void 0&&Et.setValue(U,Y.setFromMatrixPosition(v.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&qe.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&qe.setValue(U,"viewMatrix",v.matrixWorldInverse)}if(W.isSkinnedMesh){qe.setOptional(U,W,"bindMatrix"),qe.setOptional(U,W,"bindMatrixInverse");let Et=W.skeleton;Et&&(ae.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),qe.setValue(U,"boneTexture",Et.boneTexture,J),qe.setValue(U,"boneTextureSize",Et.boneTextureSize)):qe.setOptional(U,Et,"boneMatrices"))}return!!F&&(F.morphAttributes.position!==void 0||F.morphAttributes.normal!==void 0)&&pe.update(W,F,I,xn),(vn||Fe.receiveShadow!==W.receiveShadow)&&(Fe.receiveShadow=W.receiveShadow,qe.setValue(U,"receiveShadow",W.receiveShadow)),vn&&(qe.setValue(U,"toneMappingExposure",b.toneMappingExposure),Fe.needsLights&&Pf(Si,Zt),Te&&I.fog&&$.refreshFogUniforms(Si,Te),$.refreshMaterialUniforms(Si,I,A,N,re),hn.upload(U,Fe.uniformsList,Si,J)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(hn.upload(U,Fe.uniformsList,Si,J),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&qe.setValue(U,"center",W.center),qe.setValue(U,"modelViewMatrix",W.modelViewMatrix),qe.setValue(U,"normalMatrix",W.normalMatrix),qe.setValue(U,"modelMatrix",W.matrixWorld),xn}function Pf(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function If(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return T},this.setRenderTarget=function(v,C=0,F=0){T=v,p=C,g=F,v&&k.get(v).__webglFramebuffer===void 0&&J.setupRenderTarget(v);let I=null,W=!1,Te=!1;if(v){let ve=v.texture;(ve.isDataTexture3D||ve.isDataTexture2DArray)&&(Te=!0);let Ae=k.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(I=Ae[C],W=!0):v.isWebGLMultisampleRenderTarget?I=k.get(v).__webglMultisampledFramebuffer:I=Ae,L.copy(v.viewport),_.copy(v.scissor),P=v.scissorTest}else L.copy(D).multiplyScalar(A).floor(),_.copy(O).multiplyScalar(A).floor(),P=z;if(fe.bindFramebuffer(36160,I)&&ae.drawBuffers){let ve=!1;if(v)if(v.isWebGLMultipleRenderTargets){let Ae=v.texture;if(H.length!==Ae.length||H[0]!==36064){for(let Ne=0,Pe=Ae.length;Ne<Pe;Ne++)H[Ne]=36064+Ne;H.length=Ae.length,ve=!0}}else(H.length!==1||H[0]!==36064)&&(H[0]=36064,H.length=1,ve=!0);else(H.length!==1||H[0]!==1029)&&(H[0]=1029,H.length=1,ve=!0);ve&&(ae.isWebGL2?U.drawBuffers(H):Me.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}if(fe.viewport(L),fe.scissor(_),fe.setScissorTest(P),W){let ve=k.get(v.texture);U.framebufferTexture2D(36160,36064,34069+C,ve.__webglTexture,F)}else if(Te){let ve=k.get(v.texture),Ae=C||0;U.framebufferTextureLayer(36160,36064,ve.__webglTexture,F||0,Ae)}y=-1},this.readRenderTargetPixels=function(v,C,F,I,W,Te,ye){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ye!==void 0&&(ve=ve[ye]),ve){fe.bindFramebuffer(36160,ve);try{let Ae=v.texture,Ne=Ae.format,Pe=Ae.type;if(Ne!==Qe&&q.convert(Ne)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let De=Pe===Bn&&(Me.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Pe!==jt&&q.convert(Pe)!==U.getParameter(35738)&&!(Pe===Qt&&(ae.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U.checkFramebufferStatus(36160)===36053?C>=0&&C<=v.width-I&&F>=0&&F<=v.height-W&&U.readPixels(C,F,I,W,q.convert(Ne),q.convert(Pe),Te):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Ae=T!==null?k.get(T).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(v,C,F=0){let I=Math.pow(2,-F),W=Math.floor(C.image.width*I),Te=Math.floor(C.image.height*I),ye=q.convert(C.format);ae.isWebGL2&&(ye===6407&&(ye=32849),ye===6408&&(ye=32856)),J.setTexture2D(C,0),U.copyTexImage2D(3553,F,ye,v.x,v.y,W,Te,0),fe.unbindTexture()},this.copyTextureToTexture=function(v,C,F,I=0){let W=C.image.width,Te=C.image.height,ye=q.convert(F.format),ve=q.convert(F.type);J.setTexture2D(F,0),U.pixelStorei(37440,F.flipY),U.pixelStorei(37441,F.premultiplyAlpha),U.pixelStorei(3317,F.unpackAlignment),C.isDataTexture?U.texSubImage2D(3553,I,v.x,v.y,W,Te,ye,ve,C.image.data):C.isCompressedTexture?U.compressedTexSubImage2D(3553,I,v.x,v.y,C.mipmaps[0].width,C.mipmaps[0].height,ye,C.mipmaps[0].data):U.texSubImage2D(3553,I,v.x,v.y,ye,ve,C.image),I===0&&F.generateMipmaps&&U.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(v,C,F,I,W=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Te=v.max.x-v.min.x+1,ye=v.max.y-v.min.y+1,ve=v.max.z-v.min.z+1,Ae=q.convert(I.format),Ne=q.convert(I.type),Pe;if(I.isDataTexture3D)J.setTexture3D(I,0),Pe=32879;else if(I.isDataTexture2DArray)J.setTexture2DArray(I,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,I.flipY),U.pixelStorei(37441,I.premultiplyAlpha),U.pixelStorei(3317,I.unpackAlignment);let De=U.getParameter(3314),We=U.getParameter(32878),bn=U.getParameter(3316),Fe=U.getParameter(3315),wi=U.getParameter(32877),Ge=F.isCompressedTexture?F.mipmaps[0]:F.image;U.pixelStorei(3314,Ge.width),U.pixelStorei(32878,Ge.height),U.pixelStorei(3316,v.min.x),U.pixelStorei(3315,v.min.y),U.pixelStorei(32877,v.min.z),F.isDataTexture||F.isDataTexture3D?U.texSubImage3D(Pe,W,C.x,C.y,C.z,Te,ye,ve,Ae,Ne,Ge.data):F.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Pe,W,C.x,C.y,C.z,Te,ye,ve,Ae,Ge.data)):U.texSubImage3D(Pe,W,C.x,C.y,C.z,Te,ye,ve,Ae,Ne,Ge),U.pixelStorei(3314,De),U.pixelStorei(32878,We),U.pixelStorei(3316,bn),U.pixelStorei(3315,Fe),U.pixelStorei(32877,wi),W===0&&I.generateMipmaps&&U.generateMipmap(Pe),fe.unbindTexture()},this.initTexture=function(v){J.setTexture2D(v,0),fe.unbindTexture()},this.resetState=function(){p=0,g=0,T=null,fe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Vc=class extends Ue{};Vc.prototype.isWebGL1Renderer=!0;var qr=class{constructor(e,t=25e-5){this.name="",this.color=new se(e),this.density=t}clone(){return new qr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};qr.prototype.isFogExp2=!0;var Xr=class{constructor(e,t=1,n=1e3){this.name="",this.color=new se(e),this.near=t,this.far=n}clone(){return new Xr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Xr.prototype.isFog=!0;var Gi=class extends Le{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Gi.prototype.isScene=!0;var li=class{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=At()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=At()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=At()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};li.prototype.isInterleavedBuffer=!0;var Ze=new S,fi=class{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};fi.prototype.isInterleavedBufferAttribute=!0;var La=class extends ot{constructor(e){super();this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};La.prototype.isSpriteMaterial=!0;var di,ki=new S,hi=new S,ui=new S,pi=new V,Vi=new V,Wc=new xe,Yr=new S,Wi=new S,Jr=new S,qc=new V,Ra=new V,Xc=new V,Yc=class extends Le{constructor(e){super();if(this.type="Sprite",di===void 0){di=new ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new li(t,5);di.setIndex([0,1,2,0,2,3]),di.setAttribute("position",new fi(n,3,0,!1)),di.setAttribute("uv",new fi(n,2,3,!1))}this.geometry=di,this.material=e!==void 0?e:new La,this.center=new V(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hi.setFromMatrixScale(this.matrixWorld),Wc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ui.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hi.multiplyScalar(-ui.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Zr(Yr.set(-.5,-.5,0),ui,a,hi,i,r),Zr(Wi.set(.5,-.5,0),ui,a,hi,i,r),Zr(Jr.set(.5,.5,0),ui,a,hi,i,r),qc.set(0,0),Ra.set(1,0),Xc.set(1,1);let o=e.ray.intersectTriangle(Yr,Wi,Jr,!1,ki);if(o===null&&(Zr(Wi.set(-.5,.5,0),ui,a,hi,i,r),Ra.set(0,1),o=e.ray.intersectTriangle(Yr,Jr,Wi,!1,ki),o===null))return;let c=e.ray.origin.distanceTo(ki);c<e.near||c>e.far||t.push({distance:c,point:ki.clone(),uv:Ye.getUV(ki,Yr,Wi,Jr,qc,Ra,Xc,new V),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Yc.prototype.isSprite=!0;function Zr(s,e,t,n,i,r){pi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Vi.x=r*pi.x-i*pi.y,Vi.y=i*pi.x+r*pi.y):Vi.copy(pi),s.copy(e),s.x+=Vi.x,s.y+=Vi.y,s.applyMatrix4(Wc)}var Jc=new S,Zc=new Oe,$c=new Oe,G0=new S,jc=new xe,Ca=class extends Je{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new xe,this.bindMatrixInverse=new xe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Oe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;Zc.fromBufferAttribute(i.attributes.skinIndex,e),$c.fromBufferAttribute(i.attributes.skinWeight,e),Jc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=$c.getComponent(r);if(a!==0){let o=Zc.getComponent(r);jc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(G0.copy(Jc).applyMatrix4(jc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}};Ca.prototype.isSkinnedMesh=!0;var Qc=class extends Le{constructor(){super();this.type="Bone"}};Qc.prototype.isBone=!0;var Kc=class extends it{constructor(e=null,t=1,n=1,i,r,a,o,c,l=et,f=et,h,d){super(null,a,o,c,l,f,i,r,h,d);this.image={data:e,width:t,height:n},this.magFilter=l,this.minFilter=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Kc.prototype.isDataTexture=!0;var $r=class extends $e{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};$r.prototype.isInstancedBufferAttribute=!0;var el=new xe,tl=new xe,jr=[],qi=new Je,nl=class extends Je{constructor(e,t,n){super(e,t);this.instanceMatrix=new $r(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,el),tl.multiplyMatrices(n,el),qi.matrixWorld=tl,qi.raycast(e,jr);for(let a=0,o=jr.length;a<o;a++){let c=jr[a];c.instanceId=r,c.object=this,t.push(c)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $r(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};nl.prototype.isInstancedMesh=!0;var mi=class extends ot{constructor(e){super();this.type="LineBasicMaterial",this.color=new se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}};mi.prototype.isLineBasicMaterial=!0;var il=new S,rl=new S,sl=new xe,Pa=new An,Qr=new En,Kr=class extends Le{constructor(e=new ze,t=new mi){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)il.fromBufferAttribute(t,i-1),rl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=il.distanceTo(rl);e.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;sl.copy(i).invert(),Pa.copy(e.ray).applyMatrix4(sl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new S,f=new S,h=new S,d=new S,u=this.isLineSegments?2:1;if(n.isBufferGeometry){let m=n.index,x=n.attributes.position;if(m!==null){let p=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let T=p,y=g-1;T<y;T+=u){let E=m.getX(T),L=m.getX(T+1);if(l.fromBufferAttribute(x,E),f.fromBufferAttribute(x,L),Pa.distanceSqToSegment(l,f,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),g=Math.min(x.count,a.start+a.count);for(let T=p,y=g-1;T<y;T+=u){if(l.fromBufferAttribute(x,T),f.fromBufferAttribute(x,T+1),Pa.distanceSqToSegment(l,f,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Kr.prototype.isLine=!0;var al=new S,ol=new S,es=class extends Kr{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)al.fromBufferAttribute(t,i),ol.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+al.distanceTo(ol);e.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};es.prototype.isLineSegments=!0;var cl=class extends Kr{constructor(e,t){super(e,t);this.type="LineLoop"}};cl.prototype.isLineLoop=!0;var Ia=class extends ot{constructor(e){super();this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}};Ia.prototype.isPointsMaterial=!0;var ll=new xe,Da=new An,ts=new En,ns=new S,fl=class extends Le{constructor(e=new ze,t=new Ia){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(i),ts.radius+=r,e.ray.intersectsSphere(ts)===!1)return;ll.copy(i).invert(),Da.copy(e.ray).applyMatrix4(ll);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o;if(n.isBufferGeometry){let l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let m=d,b=u;m<b;m++){let x=l.getX(m);ns.fromBufferAttribute(h,x),dl(ns,x,c,i,e,t,this)}}else{let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let m=d,b=u;m<b;m++)ns.fromBufferAttribute(h,m),dl(ns,m,c,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};fl.prototype.isPoints=!0;function dl(s,e,t,n,i,r,a){let o=Da.distanceSqToPoint(s);if(o<t){let c=new S;Da.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var hl=class extends it{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l);this.format=o!==void 0?o:zn,this.minFilter=a!==void 0?a:tt,this.magFilter=r!==void 0?r:tt,this.generateMipmaps=!1;let f=this;function h(){f.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};hl.prototype.isVideoTexture=!0;var ul=class extends it{constructor(e,t,n,i,r,a,o,c,l,f,h,d){super(null,a,o,c,l,f,i,r,h,d);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};ul.prototype.isCompressedTexture=!0;var is=class extends it{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l);this.needsUpdate=!0}};is.prototype.isCanvasTexture=!0;var pl=class extends it{constructor(e,t,n,i,r,a,o,c,l,f){if(f=f!==void 0?f:Nn,f!==Nn&&f!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Nn&&(n=pr),n===void 0&&f===Ci&&(n=Ri);super(null,i,r,a,o,c,f,n,l);this.image={width:e,height:t},this.magFilter=o!==void 0?o:et,this.minFilter=c!==void 0?c:et,this.flipY=!1,this.generateMipmaps=!1}};pl.prototype.isDepthTexture=!0;var Xi=class extends ze{constructor(e=1,t=1,n=1,i=8,r=1,a=!1,o=0,c=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let f=[],h=[],d=[],u=[],m=0,b=[],x=n/2,p=0;g(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(f),this.setAttribute("position",new Be(h,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(u,2));function g(){let y=new S,E=new S,L=0,_=(t-e)/n;for(let P=0;P<=r;P++){let X=[],N=P/r,A=N*(t-e)+e;for(let Z=0;Z<=i;Z++){let B=Z/i,D=B*c+o,O=Math.sin(D),z=Math.cos(D);E.x=A*O,E.y=-N*n+x,E.z=A*z,h.push(E.x,E.y,E.z),y.set(O,_,z).normalize(),d.push(y.x,y.y,y.z),u.push(B,1-N),X.push(m++)}b.push(X)}for(let P=0;P<i;P++)for(let X=0;X<r;X++){let N=b[X][P],A=b[X+1][P],Z=b[X+1][P+1],B=b[X][P+1];f.push(N,A,B),f.push(A,Z,B),L+=6}l.addGroup(p,L,0),p+=L}function T(y){let E=m,L=new V,_=new S,P=0,X=y===!0?e:t,N=y===!0?1:-1;for(let Z=1;Z<=i;Z++)h.push(0,x*N,0),d.push(0,N,0),u.push(.5,.5),m++;let A=m;for(let Z=0;Z<=i;Z++){let D=Z/i*c+o,O=Math.cos(D),z=Math.sin(D);_.x=X*z,_.y=x*N,_.z=X*O,h.push(_.x,_.y,_.z),d.push(0,N,0),L.x=O*.5+.5,L.y=z*.5*N+.5,u.push(L.x,L.y),m++}for(let Z=0;Z<i;Z++){let B=E+Z,D=A+Z;y===!0?f.push(D,D+1,B):f.push(D+1,D,B),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}static fromJSON(e){return new Xi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Hg=new S,Gg=new S,kg=new S,Vg=new Ye;var wt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let f=n[i],d=n[i+1]-f,u=(a-f)/d;return(i+u)/(r-1)}getTangent(e,t){let n=1e-4,i=e-n,r=e+n;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new V:new S);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,i=[],r=[],a=[],o=new S,c=new xe;for(let u=0;u<=e;u++){let m=u/e;i[u]=this.getTangentAt(m,new S)}r[0]=new S,a[0]=new S;let l=Number.MAX_VALUE,f=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);f<=l&&(l=f,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(yt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,m))}a[u].crossVectors(i[u],r[u])}if(t===!0){let u=Math.acos(yt(r[0].dot(r[e]),-1,1));u/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],u*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Yi=class extends wt{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new V,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*f-u*h+this.aX,l=d*h+u*f+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};Yi.prototype.isEllipseCurve=!0;var Fa=class extends Yi{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a);this.type="ArcCurve"}};Fa.prototype.isArcCurve=!0;function Ba(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,f,h){let d=(a-r)/l-(o-r)/(l+f)+(o-a)/f,u=(o-a)/f-(c-a)/(f+h)+(c-o)/h;d*=f,u*=f,i(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var rs=new S,za=new Ba,Na=new Ba,Ua=new Ba,Oa=class extends wt{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,f;this.closed||o>0?l=i[(o-1)%r]:(rs.subVectors(i[0],i[1]).add(i[0]),l=rs);let h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?f=i[(o+2)%r]:(rs.subVectors(i[r-1],i[r-2]).add(i[r-1]),f=rs),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),u),b=Math.pow(h.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u);b<1e-4&&(b=1),m<1e-4&&(m=b),x<1e-4&&(x=b),za.initNonuniformCatmullRom(l.x,h.x,d.x,f.x,m,b,x),Na.initNonuniformCatmullRom(l.y,h.y,d.y,f.y,m,b,x),Ua.initNonuniformCatmullRom(l.z,h.z,d.z,f.z,m,b,x)}else this.curveType==="catmullrom"&&(za.initCatmullRom(l.x,h.x,d.x,f.x,this.tension),Na.initCatmullRom(l.y,h.y,d.y,f.y,this.tension),Ua.initCatmullRom(l.z,h.z,d.z,f.z,this.tension));return n.set(za.calc(c),Na.calc(c),Ua.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Oa.prototype.isCatmullRomCurve3=!0;function ml(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function k0(s,e){let t=1-s;return t*t*e}function V0(s,e){return 2*(1-s)*s*e}function W0(s,e){return s*s*e}function Ji(s,e,t,n){return k0(s,e)+V0(s,t)+W0(s,n)}function q0(s,e){let t=1-s;return t*t*t*e}function X0(s,e){let t=1-s;return 3*t*t*s*e}function Y0(s,e){return 3*(1-s)*s*s*e}function J0(s,e){return s*s*s*e}function Zi(s,e,t,n,i){return q0(s,e)+X0(s,t)+Y0(s,n)+J0(s,i)}var ss=class extends wt{constructor(e=new V,t=new V,n=new V,i=new V){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new V){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zi(e,i.x,r.x,a.x,o.x),Zi(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};ss.prototype.isCubicBezierCurve=!0;var Ha=class extends wt{constructor(e=new S,t=new S,n=new S,i=new S){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zi(e,i.x,r.x,a.x,o.x),Zi(e,i.y,r.y,a.y,o.y),Zi(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Ha.prototype.isCubicBezierCurve3=!0;var $i=class extends wt{constructor(e=new V,t=new V){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new V;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};$i.prototype.isLineCurve=!0;var gl=class extends wt{constructor(e=new S,t=new S){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},as=class extends wt{constructor(e=new V,t=new V,n=new V){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ji(e,i.x,r.x,a.x),Ji(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};as.prototype.isQuadraticBezierCurve=!0;var Ga=class extends wt{constructor(e=new S,t=new S,n=new S){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ji(e,i.x,r.x,a.x),Ji(e,i.y,r.y,a.y),Ji(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Ga.prototype.isQuadraticBezierCurve3=!0;var os=class extends wt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new V){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],f=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(ml(o,c.x,l.x,f.x,h.x),ml(o,c.y,l.y,f.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new V().fromArray(i))}return this}};os.prototype.isSplineCurve=!0;var bl=Object.freeze({__proto__:null,ArcCurve:Fa,CatmullRomCurve3:Oa,CubicBezierCurve:ss,CubicBezierCurve3:Ha,EllipseCurve:Yi,LineCurve:$i,LineCurve3:gl,QuadraticBezierCurve:as,QuadraticBezierCurve3:Ga,SplineCurve:os}),xl=class extends wt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new $i(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let f=c[l];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new bl[i.type]().fromJSON(i))}return this}},cs=class extends xl{constructor(e){super();this.type="Path",this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $i(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new as(this.currentPoint.clone(),new V(e,t),new V(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new ss(this.currentPoint.clone(),new V(e,t),new V(n,i),new V(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new os(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+l,t+f,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let l=new Yi(e,t,n,i,r,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gi=class extends cs{constructor(e){super(e);this.uuid=At(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new cs().fromJSON(i))}return this}},Z0={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=yl(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,f,h,d,u;if(n&&(r=eg(s,e,r,t)),s.length>80*t){o=l=s[0],c=f=s[1];for(let m=t;m<i;m+=t)h=s[m],d=s[m+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>f&&(f=d);u=Math.max(l-o,f-c),u=u!==0?1/u:0}return ji(r,a,t,o,c,u),a}};function yl(s,e,t,n,i){let r,a;if(i===dg(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Ml(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Ml(r,s[r],s[r+1],a);return a&&ls(a,a.next)&&(Ki(a),a=a.next),a}function un(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ls(t,t.next)||Ve(t.prev,t,t.next)===0)){if(Ki(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ji(s,e,t,n,i,r,a){if(!s)return;!a&&r&&sg(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?j0(s,n,i,r):$0(s)){e.push(c.i/t),e.push(s.i/t),e.push(l.i/t),Ki(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Q0(un(s),e,t),ji(s,e,t,n,i,r,2)):a===2&&K0(s,e,t,n,i,r):ji(un(s),e,t,n,i,r,1);break}}}function $0(s){let e=s.prev,t=s,n=s.next;if(Ve(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(bi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Ve(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function j0(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Ve(i,r,a)>=0)return!1;let o=i.x<r.x?i.x<a.x?i.x:a.x:r.x<a.x?r.x:a.x,c=i.y<r.y?i.y<a.y?i.y:a.y:r.y<a.y?r.y:a.y,l=i.x>r.x?i.x>a.x?i.x:a.x:r.x>a.x?r.x:a.x,f=i.y>r.y?i.y>a.y?i.y:a.y:r.y>a.y?r.y:a.y,h=ka(o,c,e,t,n),d=ka(l,f,e,t,n),u=s.prevZ,m=s.nextZ;for(;u&&u.z>=h&&m&&m.z<=d;){if(u!==s.prev&&u!==s.next&&bi(i.x,i.y,r.x,r.y,a.x,a.y,u.x,u.y)&&Ve(u.prev,u,u.next)>=0||(u=u.prevZ,m!==s.prev&&m!==s.next&&bi(i.x,i.y,r.x,r.y,a.x,a.y,m.x,m.y)&&Ve(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;u&&u.z>=h;){if(u!==s.prev&&u!==s.next&&bi(i.x,i.y,r.x,r.y,a.x,a.y,u.x,u.y)&&Ve(u.prev,u,u.next)>=0)return!1;u=u.prevZ}for(;m&&m.z<=d;){if(m!==s.prev&&m!==s.next&&bi(i.x,i.y,r.x,r.y,a.x,a.y,m.x,m.y)&&Ve(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Q0(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!ls(i,r)&&vl(i,n,n.next,r)&&Qi(i,r)&&Qi(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),Ki(n),Ki(n.next),n=s=r),n=n.next}while(n!==s);return un(n)}function K0(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cg(a,o)){let c=_l(a,o);a=un(a,a.next),c=un(c,c.next),ji(a,e,t,n,i,r),ji(c,e,t,n,i,r);return}o=o.next}a=a.next}while(a!==s)}function eg(s,e,t,n){let i=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=yl(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(og(l));for(i.sort(tg),r=0;r<i.length;r++)ng(i[r],t),t=un(t,t.next);return t}function tg(s,e){return s.x-e.x}function ng(s,e){if(e=ig(s,e),e){let t=_l(e,s);un(e,e.next),un(t,t.next)}}function ig(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===r)return a;let o=a,c=a.x,l=a.y,f=1/0,h;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&bi(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),Qi(t,s)&&(h<f||h===f&&(t.x>a.x||t.x===a.x&&rg(a,t)))&&(a=t,f=h)),t=t.next;while(t!==o);return a}function rg(s,e){return Ve(s.prev,s,e.prev)<0&&Ve(e.next,s,s.next)<0}function sg(s,e,t,n){let i=s;do i.z===null&&(i.z=ka(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ag(i)}function ag(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function ka(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function og(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function bi(s,e,t,n,i,r,a,o){return(i-a)*(e-o)-(s-a)*(r-o)>=0&&(s-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(r-o)-(i-a)*(n-o)>=0}function cg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!lg(s,e)&&(Qi(s,e)&&Qi(e,s)&&fg(s,e)&&(Ve(s.prev,s,e.prev)||Ve(s,e.prev,e))||ls(s,e)&&Ve(s.prev,s,s.next)>0&&Ve(e.prev,e,e.next)>0)}function Ve(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ls(s,e){return s.x===e.x&&s.y===e.y}function vl(s,e,t,n){let i=ds(Ve(s,e,t)),r=ds(Ve(s,e,n)),a=ds(Ve(t,n,s)),o=ds(Ve(t,n,e));return!!(i!==r&&a!==o||i===0&&fs(s,t,e)||r===0&&fs(s,n,e)||a===0&&fs(t,s,n)||o===0&&fs(t,e,n))}function fs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ds(s){return s>0?1:s<0?-1:0}function lg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&vl(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Qi(s,e){return Ve(s.prev,s,s.next)<0?Ve(s,e,s.next)>=0&&Ve(s,s.prev,e)>=0:Ve(s,e,s.prev)<0||Ve(s,s.next,e)<0}function fg(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function _l(s,e){let t=new Va(s.i,s.x,s.y),n=new Va(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ml(s,e,t,n){let i=new Va(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ki(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Va(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dg(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var qt=class{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return qt.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];wl(e),Sl(n,e);let a=e.length;t.forEach(wl);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Sl(n,t[c]);let o=Z0.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function wl(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Sl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Cn=class extends ze{constructor(e=new gi([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Be(i,3)),this.setAttribute("uv",new Be(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:u-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:hg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let T,y=!1,E,L,_,P;p&&(T=p.getSpacedPoints(f),y=!0,d=!1,E=p.computeFrenetFrames(f,!1),L=new S,_=new S,P=new S),d||(x=0,u=0,m=0,b=0);let X=o.extractPoints(l),N=X.shape,A=X.holes;if(!qt.isClockWise(N)){N=N.reverse();for(let k=0,J=A.length;k<J;k++){let ee=A[k];qt.isClockWise(ee)&&(A[k]=ee.reverse())}}let B=qt.triangulateShape(N,A),D=N;for(let k=0,J=A.length;k<J;k++){let ee=A[k];N=N.concat(ee)}function O(k,J,ee){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().multiplyScalar(ee).add(k)}let z=N.length,H=B.length;function K(k,J,ee){let ue,ne,w,M=k.x-J.x,G=k.y-J.y,$=ee.x-k.x,j=ee.y-k.y,oe=M*M+G*G,_e=M*j-G*$;if(Math.abs(_e)>Number.EPSILON){let me=Math.sqrt(oe),Se=Math.sqrt($*$+j*j),pe=J.x-G/me,R=J.y+M/me,ie=ee.x-j/Se,q=ee.y+$/Se,ce=((ie-pe)*j-(q-R)*$)/(M*j-G*$);ue=pe+M*ce-k.x,ne=R+G*ce-k.y;let de=ue*ue+ne*ne;if(de<=2)return new V(ue,ne);w=Math.sqrt(de/2)}else{let me=!1;M>Number.EPSILON?$>Number.EPSILON&&(me=!0):M<-Number.EPSILON?$<-Number.EPSILON&&(me=!0):Math.sign(G)===Math.sign(j)&&(me=!0),me?(ue=-G,ne=M,w=Math.sqrt(oe)):(ue=M,ne=G,w=Math.sqrt(oe/2))}return new V(ue/w,ne/w)}let le=[];for(let k=0,J=D.length,ee=J-1,ue=k+1;k<J;k++,ee++,ue++)ee===J&&(ee=0),ue===J&&(ue=0),le[k]=K(D[k],D[ee],D[ue]);let ge=[],re,we=le.concat();for(let k=0,J=A.length;k<J;k++){let ee=A[k];re=[];for(let ue=0,ne=ee.length,w=ne-1,M=ue+1;ue<ne;ue++,w++,M++)w===ne&&(w=0),M===ne&&(M=0),re[ue]=K(ee[ue],ee[w],ee[M]);ge.push(re),we=we.concat(re)}for(let k=0;k<x;k++){let J=k/x,ee=u*Math.cos(J*Math.PI/2),ue=m*Math.sin(J*Math.PI/2)+b;for(let ne=0,w=D.length;ne<w;ne++){let M=O(D[ne],le[ne],ue);be(M.x,M.y,-ee)}for(let ne=0,w=A.length;ne<w;ne++){let M=A[ne];re=ge[ne];for(let G=0,$=M.length;G<$;G++){let j=O(M[G],re[G],ue);be(j.x,j.y,-ee)}}}let Y=m+b;for(let k=0;k<z;k++){let J=d?O(N[k],we[k],Y):N[k];y?(_.copy(E.normals[0]).multiplyScalar(J.x),L.copy(E.binormals[0]).multiplyScalar(J.y),P.copy(T[0]).add(_).add(L),be(P.x,P.y,P.z)):be(J.x,J.y,0)}for(let k=1;k<=f;k++)for(let J=0;J<z;J++){let ee=d?O(N[J],we[J],Y):N[J];y?(_.copy(E.normals[k]).multiplyScalar(ee.x),L.copy(E.binormals[k]).multiplyScalar(ee.y),P.copy(T[k]).add(_).add(L),be(P.x,P.y,P.z)):be(ee.x,ee.y,h/f*k)}for(let k=x-1;k>=0;k--){let J=k/x,ee=u*Math.cos(J*Math.PI/2),ue=m*Math.sin(J*Math.PI/2)+b;for(let ne=0,w=D.length;ne<w;ne++){let M=O(D[ne],le[ne],ue);be(M.x,M.y,h+ee)}for(let ne=0,w=A.length;ne<w;ne++){let M=A[ne];re=ge[ne];for(let G=0,$=M.length;G<$;G++){let j=O(M[G],re[G],ue);y?be(j.x,j.y+T[f-1].y,T[f-1].x+ee):be(j.x,j.y,h+ee)}}}Q(),he();function Q(){let k=i.length/3;if(d){let J=0,ee=z*J;for(let ue=0;ue<H;ue++){let ne=B[ue];Me(ne[2]+ee,ne[1]+ee,ne[0]+ee)}J=f+x*2,ee=z*J;for(let ue=0;ue<H;ue++){let ne=B[ue];Me(ne[0]+ee,ne[1]+ee,ne[2]+ee)}}else{for(let J=0;J<H;J++){let ee=B[J];Me(ee[2],ee[1],ee[0])}for(let J=0;J<H;J++){let ee=B[J];Me(ee[0]+z*f,ee[1]+z*f,ee[2]+z*f)}}n.addGroup(k,i.length/3-k,0)}function he(){let k=i.length/3,J=0;U(D,J),J+=D.length;for(let ee=0,ue=A.length;ee<ue;ee++){let ne=A[ee];U(ne,J),J+=ne.length}n.addGroup(k,i.length/3-k,1)}function U(k,J){let ee=k.length;for(;--ee>=0;){let ue=ee,ne=ee-1;ne<0&&(ne=k.length-1);for(let w=0,M=f+x*2;w<M;w++){let G=z*w,$=z*(w+1),j=J+ue+G,oe=J+ne+G,_e=J+ne+$,me=J+ue+$;ae(j,oe,_e,me)}}}function be(k,J,ee){c.push(k),c.push(J),c.push(ee)}function Me(k,J,ee){fe(k),fe(J),fe(ee);let ue=i.length/3,ne=g.generateTopUV(n,i,ue-3,ue-2,ue-1);Ee(ne[0]),Ee(ne[1]),Ee(ne[2])}function ae(k,J,ee,ue){fe(k),fe(J),fe(ue),fe(J),fe(ee),fe(ue);let ne=i.length/3,w=g.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);Ee(w[0]),Ee(w[1]),Ee(w[3]),Ee(w[1]),Ee(w[2]),Ee(w[3])}function fe(k){i.push(c[k*3+0]),i.push(c[k*3+1]),i.push(c[k*3+2])}function Ee(k){r.push(k.x),r.push(k.y)}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ug(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new bl[i.type]().fromJSON(i)),new Cn(n,e.options)}},hg={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],f=e[i*3+1];return[new V(r,a),new V(o,c),new V(l,f)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],f=e[n*3+1],h=e[n*3+2],d=e[i*3],u=e[i*3+1],m=e[i*3+2],b=e[r*3],x=e[r*3+1],p=e[r*3+2];return Math.abs(o-f)<Math.abs(a-l)?[new V(a,1-c),new V(l,1-h),new V(d,1-m),new V(b,1-p)]:[new V(o,1-c),new V(f,1-h),new V(u,1-m),new V(x,1-p)]}};function ug(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var hs=class extends ze{constructor(e=new gi([new V(0,.5),new V(-.5,-.5),new V(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let f=0;f<e.length;f++)l(e[f]),this.addGroup(o,c,f),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Be(i,3)),this.setAttribute("normal",new Be(r,3)),this.setAttribute("uv",new Be(a,2));function l(f){let h=i.length/3,d=f.extractPoints(t),u=d.shape,m=d.holes;qt.isClockWise(u)===!1&&(u=u.reverse());for(let x=0,p=m.length;x<p;x++){let g=m[x];qt.isClockWise(g)===!0&&(m[x]=g.reverse())}let b=qt.triangulateShape(u,m);for(let x=0,p=m.length;x<p;x++){let g=m[x];u=u.concat(g)}for(let x=0,p=u.length;x<p;x++){let g=u[x];i.push(g.x,g.y,0),r.push(0,0,1),a.push(g.x,g.y)}for(let x=0,p=b.length;x<p;x++){let g=b[x],T=g[0]+h,y=g[1]+h,E=g[2]+h;n.push(T,y,E),c+=3}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return pg(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new hs(n,e.curveSegments)}};function pg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var er=class extends ze{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,f=[],h=new S,d=new S,u=[],m=[],b=[],x=[];for(let p=0;p<=n;p++){let g=[],T=p/n,y=0;p==0&&a==0?y=.5/t:p==n&&c==Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){let L=E/t;h.x=-e*Math.cos(i+L*r)*Math.sin(a+T*o),h.y=e*Math.cos(a+T*o),h.z=e*Math.sin(i+L*r)*Math.sin(a+T*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),b.push(d.x,d.y,d.z),x.push(L+y,1-T),g.push(l++)}f.push(g)}for(let p=0;p<n;p++)for(let g=0;g<t;g++){let T=f[p][g+1],y=f[p][g],E=f[p+1][g],L=f[p+1][g+1];(p!==0||a>0)&&u.push(T,y,L),(p!==n-1||c<Math.PI)&&u.push(y,E,L)}this.setIndex(u),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(b,3)),this.setAttribute("uv",new Be(x,2))}static fromJSON(e){return new er(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tl=class extends ot{constructor(e){super();this.type="ShadowMaterial",this.color=new se(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};Tl.prototype.isShadowMaterial=!0;var tr=class extends ot{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};tr.prototype.isMeshStandardMaterial=!0;var El=class extends tr{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenTint=new se(0),this.sheenRoughness=1,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new se(1,1,1),this.specularTintMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenTint.copy(e.sheenTint),this.sheenRoughness=e.sheenRoughness,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationTint.copy(e.attenuationTint),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularTint.copy(e.specularTint),this.specularTintMap=e.specularTintMap,this}};El.prototype.isMeshPhysicalMaterial=!0;var Al=class extends ot{constructor(e){super();this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}};Al.prototype.isMeshPhongMaterial=!0;var Ll=class extends ot{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Ll.prototype.isMeshToonMaterial=!0;var Rl=class extends ot{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};Rl.prototype.isMeshNormalMaterial=!0;var Cl=class extends ot{constructor(e){super();this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}};Cl.prototype.isMeshLambertMaterial=!0;var Pl=class extends ot{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}};Pl.prototype.isMeshMatcapMaterial=!0;var Il=class extends mi{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};Il.prototype.isLineDashedMaterial=!0;var ke={arraySlice:function(s,e,t){return ke.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){let r=s.clone();r.name=e;let a=[];for(let c=0;c<r.tracks.length;++c){let l=r.tracks[c],f=l.getValueSize(),h=[],d=[];for(let u=0;u<l.times.length;++u){let m=l.times[u]*i;if(!(m<t||m>=n)){h.push(l.times[u]);for(let b=0;b<f;++b)d.push(l.values[u*f+b])}}h.length!==0&&(l.times=ke.convertArray(h,l.times.constructor),l.values=ke.convertArray(d,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){let o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;let l=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===c});if(l===void 0)continue;let f=0,h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=h/3);let d=0,u=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=u/3);let m=o.times.length-1,b;if(r<=o.times[0]){let p=f,g=h-f;b=ke.arraySlice(o.values,p,g)}else if(r>=o.times[m]){let p=m*h+f,g=p+h-f;b=ke.arraySlice(o.values,p,g)}else{let p=o.createInterpolant(),g=f,T=h-f;p.evaluate(r),b=ke.arraySlice(p.resultBuffer,g,T)}c==="quaternion"&&new gt().fromArray(b).normalize().conjugate().toArray(b);let x=l.times.length;for(let p=0;p<x;++p){let g=p*u+d;if(c==="quaternion")gt.multiplyQuaternionsFlat(l.values,g,b,0,l.values,g);else{let T=u-d*2;for(let y=0;y<T;++y)l.values[g+y]-=b[y]}}}return s.blendMode=Ho,s}},Xt=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};Xt.prototype.beforeStart_=Xt.prototype.copySampleValue_;Xt.prototype.afterEnd_=Xt.prototype.copySampleValue_;var Dl=class extends Xt{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Un,endingEnd:Un}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case On:r=e,o=2*t-n;break;case xr:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case On:a=e,c=2*n-t;break;case xr:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,f=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,f=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,m=(n-t)/(i-t),b=m*m,x=b*m,p=-d*x+2*d*b-d*m,g=(1+d)*x+(-1.5-2*d)*b+(-.5+d)*m+1,T=(-1-u)*x+(1.5+u)*b+.5*m,y=u*x-u*b;for(let E=0;E!==o;++E)r[E]=p*a[f+E]+g*a[l+E]+T*a[c+E]+y*a[h+E];return r}},Wa=class extends Xt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,f=(n-t)/(i-t),h=1-f;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*f;return r}},Fl=class extends Xt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Pt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ke.convertArray(t,this.TimeBufferType),this.values=ke.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ke.convertArray(e.times,Array),values:ke.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case br:t=this.InterpolantFactoryMethodLinear;break;case Ns:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return Ns}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=ke.arraySlice(n,r,a),this.values=ke.arraySlice(this.values,r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&ke.isTypedArray(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=ke.arraySlice(this.times),t=ke.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ns,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],f=e[o+1];if(l!==f&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,d=h-n,u=h+n;for(let m=0;m!==n;++m){let b=t[h+m];if(b!==t[d+m]||b!==t[u+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=ke.arraySlice(e,0,a),this.values=ke.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=ke.arraySlice(this.times,0),t=ke.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Pt.prototype.TimeBufferType=Float32Array;Pt.prototype.ValueBufferType=Float32Array;Pt.prototype.DefaultInterpolation=br;var Pn=class extends Pt{};Pn.prototype.ValueTypeName="bool";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=gr;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends Pt{};qa.prototype.ValueTypeName="color";var nr=class extends Pt{};nr.prototype.ValueTypeName="number";var Bl=class extends Xt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let f=l+o;l!==f;l+=4)gt.slerpFlat(r,0,a,l-o,a,l,c);return r}},xi=class extends Pt{InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}};xi.prototype.ValueTypeName="quaternion";xi.prototype.DefaultInterpolation=br;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends Pt{};In.prototype.ValueTypeName="string";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=gr;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends Pt{};ir.prototype.ValueTypeName="vector";var Xa=class{constructor(e,t=-1,n,i=Us){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=At(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(gg(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Pt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let f=ke.getKeyframeOrder(c);c=ke.sortedArray(c,1,f),l=ke.sortedArray(l,1,f),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new nr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],f=l.name.match(r);if(f&&f.length>1){let h=f[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,u,m,b){if(u.length!==0){let x=[],p=[];ke.flattenJSON(u,x,p,m),x.length!==0&&b.push(new h(d,x,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let u={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)u[d[m].morphTargets[b]]=-1;for(let b in u){let x=[],p=[];for(let g=0;g!==d[m].morphTargets.length;++g){let T=d[m];x.push(T.time),p.push(T.morphTarget===b?1:0)}i.push(new nr(".morphTargetInfluence["+b+"]",x,p))}c=u.length*(a||1)}else{let u=".bones["+t[h].name+"]";n(ir,u+".position",d,"pos",i),n(xi,u+".quaternion",d,"rot",i),n(ir,u+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function mg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nr;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return qa;case"quaternion":return xi;case"bool":case"boolean":return Pn;case"string":return In}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function gg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=mg(s.type);if(s.times===void 0){let t=[],n=[];ke.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var yi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},zl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,r===!1&&i.onStart!==void 0&&i.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){let h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],m=l[h+1];if(u.global&&(u.lastIndex=0),u.test(f))return m}return null}}},bg=new zl,Yt=class{constructor(e){this.manager=e!==void 0?e:bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},It={},Nl=class extends Yt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;if(It[e]!==void 0){It[e].push({onLoad:t,onProgress:n,onError:i});return}let o=/^data:(.*?)(;base64)?,(.*)$/,c=e.match(o),l;if(c){let f=c[1],h=!!c[2],d=c[3];d=decodeURIComponent(d),h&&(d=atob(d));try{let u,m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":let b=new Uint8Array(d.length);for(let p=0;p<d.length;p++)b[p]=d.charCodeAt(p);m==="blob"?u=new Blob([b.buffer],{type:f}):u=b.buffer;break;case"document":u=new DOMParser().parseFromString(d,f);break;case"json":u=JSON.parse(d);break;default:u=d;break}setTimeout(function(){t&&t(u),r.manager.itemEnd(e)},0)}catch(u){setTimeout(function(){i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{It[e]=[],It[e].push({onLoad:t,onProgress:n,onError:i}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(f){let h=this.response,d=It[e];if(delete It[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),yi.add(e,h);for(let u=0,m=d.length;u<m;u++){let b=d[u];b.onLoad&&b.onLoad(h)}r.manager.itemEnd(e)}else{for(let u=0,m=d.length;u<m;u++){let b=d[u];b.onError&&b.onError(f)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(f){let h=It[e];for(let d=0,u=h.length;d<u;d++){let m=h[d];m.onProgress&&m.onProgress(f)}},!1),l.addEventListener("error",function(f){let h=It[e];delete It[e];for(let d=0,u=h.length;d<u;d++){let m=h[d];m.onError&&m.onError(f)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),l.addEventListener("abort",function(f){let h=It[e];delete It[e];for(let d=0,u=h.length;d<u;d++){let m=h[d];m.onError&&m.onError(f)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let f in this.requestHeader)l.setRequestHeader(f,this.requestHeader[f]);l.send(null)}return r.manager.itemStart(e),l}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ya=class extends Yt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=vr("img");function c(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1),yi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},Ul=class extends Yt{constructor(e){super(e)}load(e,t,n,i){let r=new zi,a=new Ya(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(f){r.images[l]=f,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}};var Ol=class extends Yt{constructor(e){super(e)}load(e,t,n,i){let r=new it,a=new Ya(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Dt=class extends Le{constructor(e,t=1){super();this.type="Light",this.color=new se(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};Dt.prototype.isLight=!0;var Hl=class extends Dt{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(Le.DefaultUp),this.updateMatrix(),this.groundColor=new se(t)}copy(e){return Dt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};Hl.prototype.isHemisphereLight=!0;var Gl=new xe,kl=new S,Vl=new S,us=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(kl),Vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vl),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ja=class extends us{constructor(){super(new ct(50,1,.5,500));this.focus=1}updateMatrices(e){let t=this.camera,n=Vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};Ja.prototype.isSpotLightShadow=!0;var Wl=class extends Dt{constructor(e,t,n=0,i=Math.PI/3,r=0,a=1){super(e,t);this.type="SpotLight",this.position.copy(Le.DefaultUp),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.shadow=new Ja}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};Wl.prototype.isSpotLight=!0;var ql=new xe,rr=new S,Za=new S,$a=class extends us{constructor(){super(new ct(90,1,.5,500));this._frameExtents=new V(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(rr),Za.copy(n.position),Za.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Za),n.updateMatrixWorld(),i.makeTranslation(-rr.x,-rr.y,-rr.z),ql.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ql)}};$a.prototype.isPointLightShadow=!0;var Xl=class extends Dt{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $a}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};Xl.prototype.isPointLight=!0;var ja=class extends us{constructor(){super(new ln(-5,5,5,-5,.5,500))}};ja.prototype.isDirectionalLightShadow=!0;var ps=class extends Dt{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(Le.DefaultUp),this.updateMatrix(),this.target=new Le,this.shadow=new ja}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ps.prototype.isDirectionalLight=!0;var ms=class extends Dt{constructor(e,t){super(e,t);this.type="AmbientLight"}};ms.prototype.isAmbientLight=!0;var Yl=class extends Dt{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};Yl.prototype.isRectAreaLight=!0;var Qa=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}};Qa.prototype.isSphericalHarmonics3=!0;var gs=class extends Dt{constructor(e=new Qa,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};gs.prototype.isLightProbe=!0;var Jl=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},Zl=class extends ze{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};Zl.prototype.isInstancedBufferGeometry=!0;var $l=class extends Yt{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=yi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){yi.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}};$l.prototype.isImageBitmapLoader=!0;var bs,xg={getContext:function(){return bs===void 0&&(bs=new(window.AudioContext||window.webkitAudioContext)),bs},setContext:function(s){bs=s}},jl=class extends Yt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new Nl(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{let c=o.slice(0);xg.getContext().decodeAudioData(c,function(f){t(f)})}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}},Ql=class extends gs{constructor(e,t,n=1){super(void 0,n);let i=new se().set(e),r=new se().set(t),a=new S(i.r,i.g,i.b),o=new S(r.r,r.g,r.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(c),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l)}};Ql.prototype.isHemisphereLightProbe=!0;var Kl=class extends gs{constructor(e,t=1){super(void 0,t);let n=new se().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}};Kl.prototype.isAmbientLightProbe=!0;var Ka=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ef();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ef(){return(typeof performance=="undefined"?Date:performance).now()}var tf=class extends Le{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var nf=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},rf=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){gt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;gt.multiplyQuaternionsFlat(e,a,e,t,e,n),gt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},eo="\\[\\]\\.:\\/",yg=new RegExp("["+eo+"]","g"),to="[^"+eo+"]",vg="[^"+eo.replace("\\.","")+"]",_g=/((?:WC+[\/:])*)/.source.replace("WC",to),Mg=/(WCOD+)?/.source.replace("WCOD",vg),wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",to),Sg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",to),Tg=new RegExp("^"+_g+Mg+wg+Sg+"$"),Eg=["material","materials","bones"],sf=class{constructor(e,t,n){let i=n||Ie.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ie=class{constructor(e,t,n){this.path=t,this.parsedPath=n||Ie.parseTrackName(t),this.node=Ie.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ie.Composite(e,t,n):new Ie(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yg,"")}static parseTrackName(e){let t=Tg.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Eg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=Ie.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=sf;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var af=class{constructor(){this.uuid=At(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o,c=e.length,l=this.nCachedObjects_;for(let f=0,h=arguments.length;f!==h;++f){let d=arguments[f],u=d.uuid,m=t[u];if(m===void 0){m=c++,t[u]=m,e.push(d);for(let b=0,x=a;b!==x;++b)r[b].push(new Ie(d,n[b],i[b]))}else if(m<l){o=e[m];let b=--l,x=e[b];t[x.uuid]=m,e[m]=x,t[u]=b,e[b]=d;for(let p=0,g=a;p!==g;++p){let T=r[p],y=T[b],E=T[m];T[m]=y,E===void 0&&(E=new Ie(d,n[p],i[p])),T[b]=E}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let c=arguments[a],l=c.uuid,f=t[l];if(f!==void 0&&f>=r){let h=r++,d=e[h];t[d.uuid]=f,e[f]=d,t[l]=h,e[h]=c;for(let u=0,m=i;u!==m;++u){let b=n[u],x=b[h],p=b[f];b[f]=x,b[h]=p}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){let l=arguments[o],f=l.uuid,h=t[f];if(h!==void 0)if(delete t[f],h<r){let d=--r,u=e[d],m=--a,b=e[m];t[u.uuid]=h,e[h]=u,t[b.uuid]=d,e[d]=b,e.pop();for(let x=0,p=i;x!==p;++x){let g=n[x],T=g[d],y=g[m];g[h]=T,g[d]=y,g.pop()}}else{let d=--a,u=e[d];d>0&&(t[u.uuid]=h),e[h]=u,e.pop();for(let m=0,b=i;m!==b;++m){let x=n[m];x[h]=x[d],x.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,f=this.nCachedObjects_,h=new Array(l);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(h);for(let d=f,u=c.length;d!==u;++d){let m=c[d];h[d]=new Ie(m,e,t)}return h}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}};af.prototype.isAnimationObjectGroup=!0;var of=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Un,endingEnd:Un};for(let l=0;l!==a;++l){let f=r[l].createInterpolant(null);o[l]=f,f.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=th,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;if(c<0||n===0)return;this._startTime=null,t=n*c}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ho:for(let f=0,h=c.length;f!==h;++f)c[f].evaluate(a),l[f].accumulateAdditive(o);break;case Us:default:for(let f=0,h=c.length;f!==h;++f)c[f].evaluate(a),l[f].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===nh;if(e===0)return r===-1?i:a&&(r&1)==1?t-i:i;if(n===eh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)==1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=On,i.endingEnd=On):(e?i.endingStart=this.zeroSlopeAtStart?On:Un:i.endingStart=xr,t?i.endingEnd=this.zeroSlopeAtEnd?On:Un:i.endingEnd=xr)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},cf=class extends Kt{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,f=l[c];f===void 0&&(f={},l[c]=f);for(let h=0;h!==r;++h){let d=i[h],u=d.name,m=f[u];if(m!==void 0)a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,u));continue}let b=t&&t._propertyBindings[h].binding.parsedPath;m=new rf(Ie.create(n,u,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,u),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],f=e._byClipCacheIndex;l._byClipCacheIndex=f,c[f]=l,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Wa(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Xa.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Us),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let f=new of(this,a,t,n);return this._bindAction(f,l),this._addInactiveAction(f,o,r),f}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Xa.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let f=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=f,t[f]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};cf.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var xs=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new xs(this.value.clone===void 0?this.value:this.value.clone())}},lf=class extends li{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};lf.prototype.isInstancedInterleavedBuffer=!0;var ff=class{constructor(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};ff.prototype.isGLBufferAttribute=!0;var df=new V,vi=class{constructor(e=new V(1/0,1/0),t=new V(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=df.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return df.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};vi.prototype.isBox2=!0;var hf=new S,ys=new S,uf=class{constructor(e=new S,t=new S){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){hf.subVectors(e,this.start),ys.subVectors(this.end,this.start);let n=ys.dot(ys),r=ys.dot(hf)/n;return t&&(r=yt(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},pf=class extends Le{constructor(e){super();this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}};pf.prototype.isImmediateRenderObject=!0;var pn=new S,vs=new xe,no=new xe,mf=class extends es{constructor(e){let t=gf(e),n=new ze,i=[],r=[],a=new se(0,0,1),o=new se(0,1,0);for(let l=0;l<t.length;l++){let f=t[l];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Be(i,3)),n.setAttribute("color",new Be(r,3));let c=new mi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");no.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let o=t[r];o.parent&&o.parent.isBone&&(vs.multiplyMatrices(no,o.matrixWorld),pn.setFromMatrixPosition(vs),i.setXYZ(a,pn.x,pn.y,pn.z),vs.multiplyMatrices(no,o.parent.matrixWorld),pn.setFromMatrixPosition(vs),i.setXYZ(a+1,pn.x,pn.y,pn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function gf(s){let e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,gf(s.children[t]));return e}var bf=class extends es{constructor(e=10,t=10,n=4473924,i=8947848){n=new se(n),i=new se(i);let r=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,u=0,m=-o;d<=t;d++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);let b=d===r?n:i;b.toArray(l,u),u+=3,b.toArray(l,u),u+=3,b.toArray(l,u),u+=3,b.toArray(l,u),u+=3}let f=new ze;f.setAttribute("position",new Be(c,3)),f.setAttribute("color",new Be(l,3));let h=new mi({vertexColors:!0,toneMapped:!1});super(f,h);this.type="GridHelper"}};var Ag=new Float32Array(1),Wg=new Int32Array(Ag.buffer);wt.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(wt.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};cs.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};bf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};mf.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Yt.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Jl.extractUrlBase(s)};Yt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};vi.prototype.center=function(s){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(s)};vi.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};vi.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};vi.prototype.size=function(s){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(s)};St.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};St.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};St.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};St.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};St.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};En.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ni.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};uf.prototype.center=function(s){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s)};nt.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};nt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};nt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};nt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};nt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};nt.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};xe.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};xe.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};xe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)};xe.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};xe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};xe.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};xe.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};xe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};xe.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};xe.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};xe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};xe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};xe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};xe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};xe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};xe.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};xe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};xe.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};xe.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Ft.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};gt.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};gt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};An.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};An.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};An.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Ye.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Ye.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};Ye.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};Ye.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};Ye.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};Ye.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Ye.getBarycoord(s,e,t,n,i)};Ye.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Ye.getNormal(s,e,t,n)};gi.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};gi.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Cn(this,s)};gi.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new hs(this,s)};V.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};V.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};V.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};S.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};S.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};S.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};S.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};S.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};S.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};S.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};S.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};S.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Oe.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Oe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Le.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Le.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Le.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};Le.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Le.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Le.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Je.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Je.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),ih},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Ca.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ct.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(Dt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .dirLight.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .dirLight.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .dirLight.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .dirLight.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .dirLight.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .dirLight.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .dirLight.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.dirLight.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .dirLight.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .dirLight.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .dirLight.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties($e.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===yr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(yr)}}});$e.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?yr:Pi),this};$e.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},$e.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ze.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};ze.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new $e(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};ze.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};ze.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};ze.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};ze.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};ze.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(ze.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});li.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?yr:Pi),this};li.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Cn.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Cn.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Cn.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Gi.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};xs.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(ot.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new se}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===vo}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(pt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Ue.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};Ue.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Ue.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ue.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ue.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ue.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ue.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ue.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ue.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ue.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ue.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ue.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ue.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ue.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ue.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Ue.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ue.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ue.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ue.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ue.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ue.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ue.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ue.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ue.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ue.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ue.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Mn:ht}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Gc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(at.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});tf.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new jl().load(s,function(n){e.setBuffer(n)}),this};nf.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Ur.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};Ur.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};wn.crossOrigin=void 0;wn.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new Ol;i.setCrossOrigin(this.crossOrigin);let r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};wn.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new Ul;i.setCrossOrigin(this.crossOrigin);let r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};wn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};wn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);var xf='[["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"],["#ecd078","#d95b43","#c02942","#542437","#53777a"],["#556270","#4ecdc4","#c7f464","#ff6b6b","#c44d58"],["#774f38","#e08e79","#f1d4af","#ece5ce","#c5e0dc"],["#e8ddcb","#cdb380","#036564","#033649","#031634"],["#490a3d","#bd1550","#e97f02","#f8ca00","#8a9b0f"],["#594f4f","#547980","#45ada8","#9de0ad","#e5fcc2"],["#00a0b0","#6a4a3c","#cc333f","#eb6841","#edc951"],["#e94e77","#d68189","#c6a49a","#c6e5d9","#f4ead5"],["#3fb8af","#7fc7af","#dad8a7","#ff9e9d","#ff3d7f"],["#d9ceb2","#948c75","#d5ded9","#7a6a53","#99b2b7"],["#ffffff","#cbe86b","#f2e9e1","#1c140d","#cbe86b"],["#efffcd","#dce9be","#555152","#2e2633","#99173c"],["#343838","#005f6b","#008c9e","#00b4cc","#00dffc"],["#413e4a","#73626e","#b38184","#f0b49e","#f7e4be"],["#ff4e50","#fc913a","#f9d423","#ede574","#e1f5c4"],["#99b898","#fecea8","#ff847c","#e84a5f","#2a363b"],["#655643","#80bca3","#f6f7bd","#e6ac27","#bf4d28"],["#00a8c6","#40c0cb","#f9f2e7","#aee239","#8fbe00"],["#351330","#424254","#64908a","#e8caa4","#cc2a41"],["#554236","#f77825","#d3ce3d","#f1efa5","#60b99a"],["#5d4157","#838689","#a8caba","#cad7b2","#ebe3aa"],["#8c2318","#5e8c6a","#88a65e","#bfb35a","#f2c45a"],["#fad089","#ff9c5b","#f5634a","#ed303c","#3b8183"],["#ff4242","#f4fad2","#d4ee5e","#e1edb9","#f0f2eb"],["#f8b195","#f67280","#c06c84","#6c5b7b","#355c7d"],["#d1e751","#ffffff","#000000","#4dbce9","#26ade4"],["#1b676b","#519548","#88c425","#bef202","#eafde6"],["#5e412f","#fcebb6","#78c0a8","#f07818","#f0a830"],["#bcbdac","#cfbe27","#f27435","#f02475","#3b2d38"],["#452632","#91204d","#e4844a","#e8bf56","#e2f7ce"],["#eee6ab","#c5bc8e","#696758","#45484b","#36393b"],["#f0d8a8","#3d1c00","#86b8b1","#f2d694","#fa2a00"],["#2a044a","#0b2e59","#0d6759","#7ab317","#a0c55f"],["#f04155","#ff823a","#f2f26f","#fff7bd","#95cfb7"],["#b9d7d9","#668284","#2a2829","#493736","#7b3b3b"],["#bbbb88","#ccc68d","#eedd99","#eec290","#eeaa88"],["#b3cc57","#ecf081","#ffbe40","#ef746f","#ab3e5b"],["#a3a948","#edb92e","#f85931","#ce1836","#009989"],["#300030","#480048","#601848","#c04848","#f07241"],["#67917a","#170409","#b8af03","#ccbf82","#e33258"],["#aab3ab","#c4cbb7","#ebefc9","#eee0b7","#e8caaf"],["#e8d5b7","#0e2430","#fc3a51","#f5b349","#e8d5b9"],["#ab526b","#bca297","#c5ceae","#f0e2a4","#f4ebc3"],["#607848","#789048","#c0d860","#f0f0d8","#604848"],["#b6d8c0","#c8d9bf","#dadabd","#ecdbbc","#fedcba"],["#a8e6ce","#dcedc2","#ffd3b5","#ffaaa6","#ff8c94"],["#3e4147","#fffedf","#dfba69","#5a2e2e","#2a2c31"],["#fc354c","#29221f","#13747d","#0abfbc","#fcf7c5"],["#cc0c39","#e6781e","#c8cf02","#f8fcc1","#1693a7"],["#1c2130","#028f76","#b3e099","#ffeaad","#d14334"],["#a7c5bd","#e5ddcb","#eb7b59","#cf4647","#524656"],["#dad6ca","#1bb0ce","#4f8699","#6a5e72","#563444"],["#5c323e","#a82743","#e15e32","#c0d23e","#e5f04c"],["#edebe6","#d6e1c7","#94c7b6","#403b33","#d3643b"],["#fdf1cc","#c6d6b8","#987f69","#e3ad40","#fcd036"],["#230f2b","#f21d41","#ebebbc","#bce3c5","#82b3ae"],["#b9d3b0","#81bda4","#b28774","#f88f79","#f6aa93"],["#3a111c","#574951","#83988e","#bcdea5","#e6f9bc"],["#5e3929","#cd8c52","#b7d1a3","#dee8be","#fcf7d3"],["#1c0113","#6b0103","#a30006","#c21a01","#f03c02"],["#000000","#9f111b","#b11623","#292c37","#cccccc"],["#382f32","#ffeaf2","#fcd9e5","#fbc5d8","#f1396d"],["#e3dfba","#c8d6bf","#93ccc6","#6cbdb5","#1a1f1e"],["#f6f6f6","#e8e8e8","#333333","#990100","#b90504"],["#1b325f","#9cc4e4","#e9f2f9","#3a89c9","#f26c4f"],["#a1dbb2","#fee5ad","#faca66","#f7a541","#f45d4c"],["#c1b398","#605951","#fbeec2","#61a6ab","#accec0"],["#5e9fa3","#dcd1b4","#fab87f","#f87e7b","#b05574"],["#951f2b","#f5f4d7","#e0dfb1","#a5a36c","#535233"],["#8dccad","#988864","#fea6a2","#f9d6ac","#ffe9af"],["#2d2d29","#215a6d","#3ca2a2","#92c7a3","#dfece6"],["#413d3d","#040004","#c8ff00","#fa023c","#4b000f"],["#eff3cd","#b2d5ba","#61ada0","#248f8d","#605063"],["#ffefd3","#fffee4","#d0ecea","#9fd6d2","#8b7a5e"],["#cfffdd","#b4dec1","#5c5863","#a85163","#ff1f4c"],["#9dc9ac","#fffec7","#f56218","#ff9d2e","#919167"],["#4e395d","#827085","#8ebe94","#ccfc8e","#dc5b3e"],["#a8a7a7","#cc527a","#e8175d","#474747","#363636"],["#f8edd1","#d88a8a","#474843","#9d9d93","#c5cfc6"],["#046d8b","#309292","#2fb8ac","#93a42a","#ecbe13"],["#f38a8a","#55443d","#a0cab5","#cde9ca","#f1edd0"],["#a70267","#f10c49","#fb6b41","#f6d86b","#339194"],["#ff003c","#ff8a00","#fabe28","#88c100","#00c176"],["#ffedbf","#f7803c","#f54828","#2e0d23","#f8e4c1"],["#4e4d4a","#353432","#94ba65","#2790b0","#2b4e72"],["#0ca5b0","#4e3f30","#fefeeb","#f8f4e4","#a5b3aa"],["#4d3b3b","#de6262","#ffb88c","#ffd0b3","#f5e0d3"],["#fffbb7","#a6f6af","#66b6ab","#5b7c8d","#4f2958"],["#edf6ee","#d1c089","#b3204d","#412e28","#151101"],["#9d7e79","#ccac95","#9a947c","#748b83","#5b756c"],["#fcfef5","#e9ffe1","#cdcfb7","#d6e6c3","#fafbe3"],["#9cddc8","#bfd8ad","#ddd9ab","#f7af63","#633d2e"],["#30261c","#403831","#36544f","#1f5f61","#0b8185"],["#aaff00","#ffaa00","#ff00aa","#aa00ff","#00aaff"],["#d1313d","#e5625c","#f9bf76","#8eb2c5","#615375"],["#ffe181","#eee9e5","#fad3b2","#ffba7f","#ff9c97"],["#73c8a9","#dee1b6","#e1b866","#bd5532","#373b44"],["#805841","#dcf7f3","#fffcdd","#ffd8d8","#f5a2a2"],["#379f7a","#78ae62","#bbb749","#e0fbac","#1f1c0d"],["#caff42","#ebf7f8","#d0e0eb","#88abc2","#49708a"],["#c2412d","#d1aa34","#a7a844","#a46583","#5a1e4a"],["#75616b","#bfcff7","#dce4f7","#f8f3bf","#d34017"],["#111625","#341931","#571b3c","#7a1e48","#9d2053"],["#82837e","#94b053","#bdeb07","#bffa37","#e0e0e0"],["#7e5686","#a5aad9","#e8f9a2","#f8a13f","#ba3c3d"],["#312736","#d4838f","#d6abb1","#d9d9d9","#c4ffeb"],["#395a4f","#432330","#853c43","#f25c5e","#ffa566"],["#fde6bd","#a1c5ab","#f4dd51","#d11e48","#632f53"],["#84b295","#eccf8d","#bb8138","#ac2005","#2c1507"],["#058789","#503d2e","#d54b1a","#e3a72f","#f0ecc9"],["#6da67a","#77b885","#86c28b","#859987","#4a4857"],["#bed6c7","#adc0b4","#8a7e66","#a79b83","#bbb2a1"],["#261c21","#6e1e62","#b0254f","#de4126","#eb9605"],["#efd9b4","#d6a692","#a39081","#4d6160","#292522"],["#e21b5a","#9e0c39","#333333","#fbffe3","#83a300"],["#f2e3c6","#ffc6a5","#e6324b","#2b2b2b","#353634"],["#c75233","#c78933","#d6ceaa","#79b5ac","#5e2f46"],["#793a57","#4d3339","#8c873e","#d1c5a5","#a38a5f"],["#512b52","#635274","#7bb0a8","#a7dbab","#e4f5b1"],["#11644d","#a0b046","#f2c94e","#f78145","#f24e4e"],["#59b390","#f0ddaa","#e47c5d","#e32d40","#152b3c"],["#fdffd9","#fff0b8","#ffd6a3","#faad8e","#142f30"],["#b5ac01","#ecba09","#e86e1c","#d41e45","#1b1521"],["#c7fcd7","#d9d5a7","#d9ab91","#e6867a","#ed4a6a"],["#11766d","#410936","#a40b54","#e46f0a","#f0b300"],["#595643","#4e6b66","#ed834e","#ebcc6e","#ebe1c5"],["#f1396d","#fd6081","#f3ffeb","#acc95f","#8f9924"],["#331327","#991766","#d90f5a","#f34739","#ff6e27"],["#efeecc","#fe8b05","#fe0557","#400403","#0aabba"],["#bf496a","#b39c82","#b8c99d","#f0d399","#595151"],["#b7cbbf","#8c886f","#f9a799","#f4bfad","#f5dabd"],["#ffb884","#f5df98","#fff8d4","#c0d1c2","#2e4347"],["#e5eaa4","#a8c4a2","#69a5a4","#616382","#66245b"],["#e0eff1","#7db4b5","#ffffff","#680148","#000000"],["#b1e6d1","#77b1a9","#3d7b80","#270a33","#451a3e"],["#e4ded0","#abccbd","#7dbeb8","#181619","#e32f21"],["#e9e0d1","#91a398","#33605a","#070001","#68462b"],["#fc284f","#ff824a","#fea887","#f6e7f7","#d1d0d7"],["#ffab07","#e9d558","#72ad75","#0e8d94","#434d53"],["#6da67a","#99a66d","#a9bd68","#b5cc6a","#c0de5d"],["#311d39","#67434f","#9b8e7e","#c3ccaf","#a51a41"],["#cfb590","#9e9a41","#758918","#564334","#49281f"],["#5cacc4","#8cd19d","#cee879","#fcb653","#ff5254"],["#44749d","#c6d4e1","#ffffff","#ebe7e0","#bdb8ad"],["#807462","#a69785","#b8faff","#e8fdff","#665c49"],["#e7edea","#ffc52c","#fb0c06","#030d4f","#ceecef"],["#ccf390","#e0e05a","#f7c41f","#fc930a","#ff003d"],["#2b222c","#5e4352","#965d62","#c7956d","#f2d974"],["#cc5d4c","#fffec6","#c7d1af","#96b49c","#5b5847"],["#e4e4c5","#b9d48b","#8d2036","#ce0a31","#d3e4c5"],["#e3e8cd","#bcd8bf","#d3b9a3","#ee9c92","#fe857e"],["#360745","#d61c59","#e7d84b","#efeac5","#1b8798"],["#ec4401","#cc9b25","#13cd4a","#7b6ed6","#5e525c"],["#eb9c4d","#f2d680","#f3ffcf","#bac9a9","#697060"],["#f2e8c4","#98d9b6","#3ec9a7","#2b879e","#616668"],["#f5dd9d","#bcc499","#92a68a","#7b8f8a","#506266"],["#fff3db","#e7e4d5","#d3c8b4","#c84648","#703e3b"],["#041122","#259073","#7fda89","#c8e98e","#e6f99d"],["#8d7966","#a8a39d","#d8c8b8","#e2ddd9","#f8f1e9"],["#c6cca5","#8ab8a8","#6b9997","#54787d","#615145"],["#1d1313","#24b694","#d22042","#a3b808","#30c4c9"],["#4b1139","#3b4058","#2a6e78","#7a907c","#c9b180"],["#2d1b33","#f36a71","#ee887a","#e4e391","#9abc8a"],["#f0ffc9","#a9da88","#62997a","#72243d","#3b0819"],["#429398","#6b5d4d","#b0a18f","#dfcdb4","#fbeed3"],["#9d9e94","#c99e93","#f59d92","#e5b8ad","#d5d2c8"],["#95a131","#c8cd3b","#f6f1de","#f5b9ae","#ee0b5b"],["#322938","#89a194","#cfc89a","#cc883a","#a14016"],["#540045","#c60052","#ff714b","#eaff87","#acffe9"],["#79254a","#795c64","#79927d","#aeb18e","#e3cf9e"],["#452e3c","#ff3d5a","#ffb969","#eaf27e","#3b8c88"],["#2b2726","#0a516d","#018790","#7dad93","#bacca4"],["#027b7f","#ffa588","#d62957","#bf1e62","#572e4f"],["#fa6a64","#7a4e48","#4a4031","#f6e2bb","#9ec6b8"],["#fb6900","#f63700","#004853","#007e80","#00b9bd"],["#f06d61","#da825f","#c4975c","#a8ab7b","#8cbf99"],["#23192d","#fd0a54","#f57576","#febf97","#f5ecb7"],["#f6d76b","#ff9036","#d6254d","#ff5475","#fdeba9"],["#a3c68c","#879676","#6e6662","#4f364a","#340735"],["#a32c28","#1c090b","#384030","#7b8055","#bca875"],["#80a8a8","#909d9e","#a88c8c","#ff0d51","#7a8c89"],["#6d9788","#1e2528","#7e1c13","#bf0a0d","#e6e1c2"],["#373737","#8db986","#acce91","#badb73","#efeae4"],["#e6b39a","#e6cba5","#ede3b4","#8b9e9b","#6d7578"],["#280904","#680e34","#9a151a","#c21b12","#fc4b2a"],["#4b3e4d","#1e8c93","#dbd8a2","#c4ac30","#d74f33"],["#161616","#c94d65","#e7c049","#92b35a","#1f6764"],["#234d20","#36802d","#77ab59","#c9df8a","#f0f7da"],["#a69e80","#e0ba9b","#e7a97e","#d28574","#3b1922"],["#641f5e","#676077","#65ac92","#c2c092","#edd48e"],["#e6eba9","#abbb9f","#6f8b94","#706482","#703d6f"],["#26251c","#eb0a44","#f2643d","#f2a73d","#a0e8b7"],["#fdcfbf","#feb89f","#e23d75","#5f0d3b","#742365"],["#ff7474","#f59b71","#c7c77f","#e0e0a8","#f1f1c1"],["#4f364c","#5e405f","#6b6b6b","#8f9e6f","#b1cf72"],["#230b00","#a29d7f","#d4cfa5","#f8ecd4","#aabe9b"],["#d4f7dc","#dbe7b4","#dbc092","#e0846d","#f51441"],["#62a07b","#4f8b89","#536c8d","#5c4f79","#613860"],["#6f5846","#a95a52","#e35b5d","#f18052","#ffa446"],["#85847e","#ab6a6e","#f7345b","#353130","#cbcfb4"],["#ff3366","#c74066","#8f4d65","#575a65","#1f6764"],["#d3d5b0","#b5cea4","#9dc19d","#8c7c62","#71443f"],["#ffff99","#d9cc8c","#b39980","#8c6673","#663366"],["#ed6464","#bf6370","#87586c","#574759","#1a1b1c"],["#d24858","#ea8676","#eab05e","#fdeecd","#493831"],["#f0f0d8","#b4debe","#77cca4","#666666","#b4df37"],["#f3e7d7","#f7d7cd","#f8c7c9","#e0c0c7","#c7b9c5"],["#ccb24c","#f7d683","#fffdc0","#fffffd","#457d97"],["#1a081f","#4d1d4d","#05676e","#489c79","#ebc288"],["#c46564","#f0e999","#b8c99d","#9b726f","#eeb15b"],["#7a5b3e","#fafafa","#fa4b00","#cdbdae","#1f1f1f"],["#eeda95","#b7c27e","#9a927b","#8a6a6b","#805566"],["#d31900","#ff6600","#fff2af","#7cb490","#000000"],["#e8c382","#b39d69","#a86b4c","#7d1a0c","#340a0b"],["#ebeaa9","#ebc588","#7d2948","#3b0032","#0e0b29"],["#566965","#948a71","#cc9476","#f2a176","#ff7373"],["#595b5a","#14c3a2","#0de5a8","#7cf49a","#b8fd99"],["#063940","#195e63","#3e838c","#8ebdb6","#ece1c3"],["#411f2d","#ac4147","#f88863","#ffc27f","#ffe29a"],["#9dbcbc","#f0f0af","#ff370f","#332717","#6bacbf"],["#e7e79d","#c0d890","#78a890","#606078","#d8a878"],["#94654c","#f89fa1","#fabdbd","#fad6d6","#fefcd0"],["#cddbc2","#f7e4c6","#fb9274","#f5565b","#875346"],["#f0ddbd","#ba3622","#851e25","#520c30","#1c997f"],["#312c20","#494d4b","#7c7052","#b3a176","#e2cb92"],["#029daf","#e5d599","#ffc219","#f07c19","#e32551"],["#3f2c26","#dd423e","#a2a384","#eac388","#c5ad4b"],["#0a0310","#49007e","#ff005b","#ff7d10","#ffb238"],["#ecbe13","#738c79","#6a6b5f","#2c2b26","#a43955"],["#fff5de","#b8d9c8","#917081","#750e49","#4d002b"],["#1f1f20","#2b4c7e","#567ebb","#606d80","#dce0e6"],["#e7dd96","#e16639","#ad860a","#b7023f","#55024a"],["#cdeccc","#edd269","#e88460","#f23460","#321d2e"],["#574c41","#e36b6b","#e3a56b","#e3c77b","#96875a"],["#dde0cf","#c6be9a","#ad8b32","#937460","#8c5b7b"],["#213435","#46685b","#648a64","#a6b985","#e1e3ac"],["#181419","#4a073c","#9e0b41","#cc3e18","#f0971c"],["#413040","#6c6368","#b9a173","#eaa353","#ffefa9"],["#4d3b36","#eb613b","#f98f6f","#c1d9cd","#f7eadc"],["#ffcdb8","#fdeecf","#c8c696","#97bea9","#37260c"],["#e8d3a9","#e39b7d","#6e6460","#89b399","#bcbfa3"],["#ffffff","#fffaeb","#f0f0d8","#cfcfcf","#967c52"],["#001449","#012677","#005bc5","#00b4fc","#17f9ff"],["#ed5672","#160e32","#9eae8a","#cdbb93","#fbc599"],["#130912","#3e1c33","#602749","#b14623","#f6921d"],["#ffff00","#ccd91a","#99b333","#668c4d","#336666"],["#4dab8c","#542638","#8f244d","#c9306b","#e86f9e"],["#2b1719","#02483e","#057c46","#9bb61b","#f8be00"],["#ffabab","#ffdaab","#ddffab","#abe4ff","#d9abff"],["#e6a06f","#9e9c71","#5e8271","#33454e","#242739"],["#67be9b","#95d0b8","#fcfcd7","#f1db42","#f04158"],["#1693a5","#45b5c4","#7ececa","#a0ded6","#c7ede8"],["#cc2649","#992c4b","#66324c","#33384e","#003e4f"],["#e7eed0","#cad1c3","#948e99","#51425f","#2e1437"],["#785d56","#be4c54","#c6b299","#e6d5c1","#fff4e3"],["#f7f3d5","#ffdabf","#fa9b9b","#e88087","#635063"],["#e25858","#e9d6af","#ffffdd","#c0efd2","#384252"],["#acdeb2","#e1eab5","#edad9e","#fe4b74","#390d2d"],["#42282c","#6ca19e","#84abaa","#ded1b6","#6d997a"],["#a7cd2c","#bada5f","#cee891","#e1f5c4","#50c8c6"],["#b2cba3","#e0df9f","#e7a83e","#9a736e","#ea525f"],["#fc580c","#fc6b0a","#f8872e","#ffa927","#fdca49"],["#fdffd9","#73185e","#36bba6","#0c0d02","#8b911a"],["#9f0a28","#d55c2b","#f6e7d3","#89a46f","#55203c"],["#8a8780","#e6e5c4","#d6d1af","#e47267","#d7d8c5"],["#418e8e","#5a4e3c","#c4d428","#d8e472","#e9ebbf"],["#a69a90","#4a403d","#fff1c1","#facf7d","#ea804c"],["#faf6d0","#c7d8ab","#909a92","#744f78","#30091e"],["#aadead","#bbdead","#ccdead","#dddead","#eedead"],["#f0371a","#000000","#f7e6a6","#3e6b48","#b5b479"],["#a7321c","#ffdc68","#cc982a","#928941","#352504"],["#fa2e59","#ff703f","#f7bc05","#ecf6bb","#76bcad"],["#f1e8b4","#b2bb91","#d7bf5e","#d16344","#83555e"],["#afc7b9","#ffe1c9","#fac7b4","#fca89d","#998b82"],["#f6c7b7","#f7a398","#fa7f77","#b42529","#000000"],["#c9d1d3","#f7f7f7","#9dd3df","#3b3737","#991818"],["#000000","#001f36","#1c5560","#79ae92","#fbffcd"],["#e0dc8b","#f6aa3d","#ed4c57","#574435","#6cc4b9"],["#42393b","#75c9a3","#bac99a","#ffc897","#f7efa2"],["#f4f4f4","#9ba657","#f0e5c9","#a68c69","#594433"],["#f2cc67","#f38264","#f40034","#5f051f","#75baa8"],["#fbfee5","#c91842","#98173d","#25232d","#a8e7ca"],["#dbd9b7","#c1c9c8","#a5b5ab","#949a8e","#615566"],["#f3e6bc","#f1c972","#f5886b","#72ae95","#5a3226"],["#674f23","#e48b69","#e1b365","#e5db84","#ffeeac"],["#ff0092","#ffca1b","#b6ff00","#228dff","#ba01ff"],["#d9d4a8","#d15c57","#cc3747","#5c374b","#4a5f67"],["#998496","#f7e0ae","#fa748f","#2d2c26","#c3b457"],["#fa8cb1","#fdc5c9","#fffee1","#cfb699","#9e6d4e"],["#84c1b1","#ad849a","#d64783","#fd135a","#40202a"],["#00ccbe","#09a6a3","#9dbfaf","#edebc9","#fcf9d8"],["#020304","#541f14","#938172","#cc9e61","#626266"],["#71dbd2","#eeffdb","#ade4b5","#d0eaa3","#fff18c"],["#b88000","#d56f00","#f15500","#ff2654","#ff0c71"],["#bf2a23","#a6ad3c","#f0ce4e","#cf872e","#8a211d"],["#ffc870","#f7f7c6","#c8e3c5","#9cad9a","#755858"],["#002c2b","#ff3d00","#ffbc11","#0a837f","#076461"],["#244242","#51bd9c","#a3e3b1","#ffe8b3","#ff2121"],["#4eb3de","#8de0a6","#fcf09f","#f27c7c","#de528c"],["#001848","#301860","#483078","#604878","#906090"],["#1f0310","#442433","#a3d95b","#aae3ab","#f6f0bc"],["#b31237","#f03813","#ff8826","#ffb914","#2c9fa3"],["#fffdc0","#b9d7a1","#fead26","#ca221f","#590f0c"],["#4c3d31","#f18273","#f2bd76","#f4f5de","#c4ceb0"],["#84bfc3","#fff5d6","#ffb870","#d96153","#000511"],["#e2df9a","#ebe54d","#757449","#4b490b","#ff0051"],["#b2b39f","#c8c9b5","#dedfc5","#f5f7bd","#3d423c"],["#2f2bad","#ad2bad","#e42692","#f71568","#f7db15"],["#651366","#a71a5b","#e7204e","#f76e2a","#f0c505"],["#241811","#d4a979","#e3c88f","#c2c995","#a8bd95"],["#2197a3","#f71e6c","#f07868","#ebb970","#e7d3b0"],["#85a29e","#ffebbf","#f0d442","#f59330","#b22148"],["#15212a","#99c9bd","#d7b89c","#feab8d","#f4c9a3"],["#fe6c2b","#d43b2d","#9f102c","#340016","#020001"],["#f88f89","#eec276","#fbf6d0","#79c3aa","#1f0e1a"],["#ffffff","#a1c1be","#59554e","#f3f4e5","#e2e3d9"],["#ccded2","#fffbd4","#f5ddbb","#e3b8b2","#a18093"],["#79a687","#718063","#67594d","#4f2b38","#1d1016"],["#45aab8","#e1d772","#faf4b1","#394240","#f06b50"],["#e6e1cd","#c6d8c0","#d6b3b1","#f97992","#231b42"],["#69d0b3","#9bdab3","#b4dfb3","#cde4b3","#d9cf85"],["#332c26","#db1414","#e8591c","#7fb8b0","#c5e65c"],["#75372d","#928854","#96a782","#d4ce9e","#d8523d"],["#d1b68d","#87555c","#492d49","#51445f","#5a5c75"],["#8e407a","#fe6962","#f9ba84","#eee097","#ffffe5"],["#ffe4aa","#fca699","#e2869b","#c9729f","#583b7e"],["#9e1e4c","#ff1168","#25020f","#8f8f8f","#ececec"],["#272d4d","#b83564","#ff6a5a","#ffb350","#83b8aa"],["#b5f4bc","#fff19e","#ffdc8a","#ffba6b","#ff6543"],["#539fa2","#72b1a4","#abccb1","#c4dbb4","#d4e2b6"],["#80d3bb","#bafdc2","#e5f3ba","#5c493d","#3a352f"],["#5adb94","#0ba18c","#368986","#8a034d","#2e0331"],["#101942","#80043a","#f60c49","#f09580","#fdf2b4"],["#c9b849","#c96823","#be3100","#6f0b00","#241714"],["#ff4746","#e8da5e","#92b55f","#487d76","#4b4452"],["#a8bcbd","#fcdcb3","#f88d87","#d65981","#823772"],["#002e34","#004443","#00755c","#00c16c","#90ff17"],["#1f0a1d","#334f53","#45936c","#9acc77","#e5ead4"],["#444444","#fcf7d1","#a9a17a","#b52c00","#8c0005"],["#0fc3e8","#0194be","#e2d397","#f07e13","#481800"],["#d8d8d8","#e2d9d8","#ecdad8","#f5dbd8","#ffdcd8"],["#4b538b","#15191d","#f7a21b","#e45635","#d60257"],["#c4ddd6","#d4ddd6","#e4ddd6","#e4e3cd","#ececdd"],["#4d4a4b","#f60069","#ff41a1","#ff90ab","#ffccd1"],["#899aa1","#bda2a2","#fbbe9a","#fad889","#faf5c8"],["#000000","#ff8830","#d1b8a0","#aeced2","#cbdcdf"],["#36173d","#ff4845","#ff745f","#ffc55f","#ffec5e"],["#f8f8ec","#aedd2b","#066699","#0a5483","#02416d"],["#184848","#006060","#007878","#a8c030","#f0f0d8"],["#706767","#e87474","#e6a37a","#d9c777","#c0dbab"],["#dacdbd","#f2b8a0","#ef97a3","#df5c7e","#d4486f"],["#170132","#361542","#573e54","#85ae72","#bce1ab"],["#e9dfcc","#f3a36b","#cd5b51","#554865","#352630"],["#db5643","#1c0f0e","#70aa87","#9fb38f","#c5bd99"],["#c8d197","#d89845","#c54b2c","#473430","#11baac"],["#aab69b","#9e906e","#9684a3","#8870ff","#000000"],["#000706","#00272d","#134647","#0c7e7e","#bfac8b"],["#f1ecdf","#d4c9ad","#c7ba99","#000000","#f58723"],["#565175","#538a95","#67b79e","#ffb727","#e4491c"],["#fcfdeb","#e3cebd","#c1a2a0","#725b75","#322030"],["#d7e8d5","#e6f0af","#e8ed76","#ffcd57","#4a3a47"],["#288d85","#b9d9b4","#d18e8f","#b05574","#f0a991"],["#260729","#2a2344","#495168","#ccbd9e","#d8ccb2"],["#aef055","#e0ffc3","#25e4bc","#3f8978","#514442"],["#affbff","#d2fdfe","#fefac2","#febf97","#fe6960"],["#f7f799","#e0d124","#f0823f","#bd374c","#443a37"],["#dbda97","#efae54","#ef6771","#4b1d37","#977e77"],["#c8ce13","#f8f5c1","#349e97","#2c0d1a","#de1a72"],["#b9113f","#a8636e","#97b59d","#cfcca8","#ffe3b3"],["#ed7b83","#ec8a90","#eba2a4","#e6d1ca","#eee9c7"],["#002930","#ffffff","#f8f0af","#ac4a00","#000000"],["#913f33","#ff705f","#ffaa67","#ffdfab","#9fb9c2"],["#edeccf","#f1c694","#dc6378","#207178","#101652"],["#fee9a6","#fec0ab","#fa5894","#660860","#9380b7"],["#d3c8b4","#d4f1db","#eecab1","#fe6c63","#240910"],["#edd58f","#c2bf92","#66ac92","#686077","#641f5e"],["#e04891","#e1b7ed","#f5e1e2","#d1e389","#b9de51"],["#43777a","#442432","#c02948","#d95b45","#ecd079"],["#4180ab","#ffffff","#8ab3cf","#bdd1de","#e4ebf0"],["#f9d423","#ede574","#e1f5c4","#add6bc","#79b7b4"],["#f4f8e6","#f2e9e6","#4a3d3d","#ff6161","#d8dec3"],["#f9f6ec","#88a1a8","#502940","#790614","#0d0c0c"],["#ffab03","#fc7f03","#fc3903","#d1024e","#a6026c"],["#50232e","#f77c3e","#faba66","#fce185","#a2cca5"],["#f9ebf2","#f3e2e8","#fcd7da","#f58f9a","#3c363b"],["#ffffff","#a1ac88","#757575","#464d70","#000000"],["#736558","#fd65a0","#fef5c6","#aaf2e4","#31d5de"],["#f7f6e4","#e2d5c1","#5f3711","#f6f6e2","#d4c098"],["#95de90","#cef781","#f7c081","#ff7857","#6b6b6b"],["#f2502c","#cad17a","#fcf59b","#91c494","#c42311"],["#b2d9f7","#487aa1","#3d3c3b","#7c8071","#dde3ca"],["#f7dece","#eed7c5","#ccccbb","#9ec4bb","#2d2e2c"],["#e3ba6a","#bfa374","#6d756a","#4d686f","#364461"],["#686466","#839cb5","#96d7eb","#b1e1e9","#f2e4f9"],["#f7f1e1","#ffdbd7","#ffb2c1","#ce7095","#855e6e"],["#2e1e45","#612a52","#ba3259","#ff695c","#ccbca1"],["#8dc9b5","#f6f4c2","#ffc391","#ff695c","#8c315d"],["#0db2ac","#f5dd7e","#fc8d4d","#fc694d","#faba32"],["#fffab3","#a2e5d2","#63b397","#9dab34","#2c2321"],["#ebf2f2","#d0f2e7","#bcebdf","#ade0db","#d9dbdb"],["#e4e6c3","#88baa3","#ba1e4a","#63203d","#361f2d"],["#204b5e","#426b65","#baab6a","#fbea80","#fdfac7"],["#dadad8","#fe6196","#ff2c69","#1ea49d","#cbe65b"],["#910142","#6c043c","#210123","#fef7d5","#0ec0c1"],["#ab505e","#d9a071","#cfc88f","#a5b090","#607873"],["#43204a","#7f1e47","#422343","#c22047","#ea284b"],["#482c21","#a73e2b","#d07e0e","#e9deb0","#2f615e"],["#042608","#2a5c0b","#808f12","#faedd9","#ea2a15"],["#ff275e","#e6bc56","#7f440a","#6a9277","#f8d9bd"],["#3f324d","#93c2b1","#ffeacc","#ff995e","#de1d6a"],["#ffc2ce","#80b3ff","#fd6e8a","#a2122f","#693726"],["#f3d915","#e9e4bb","#bfd4b7","#a89907","#1a1c27"],["#9c8680","#eb5e7f","#f98f6f","#dbbf6b","#c8eb6a"],["#917f6e","#efbc98","#efd2be","#efe1d1","#d9ddcd"],["#c72546","#66424c","#768a4f","#b3c262","#d5ca98"],["#e6e8e3","#d7dacf","#bec3bc","#8f9a9c","#65727a"],["#2f3559","#9a5071","#e394a7","#f1bbbb","#e6d8cb"],["#63594d","#b18272","#c2b291","#d6e4c3","#eae3d1"],["#e8de92","#810e0b","#febea3","#fce5b1","#f6f5da"],["#f8f69f","#bab986","#7c7b6c","#3e3e53","#000039"],["#c3dfd7","#c8dfd2","#cddfcd","#d2dfc8","#d7dfc3"],["#172c3c","#274862","#995052","#d96831","#e6b33d"],["#678d6c","#fc7d23","#fa3c08","#bd0a41","#772a53"],["#dae2cb","#96c3a6","#6cb6a5","#221d34","#90425c"],["#8c0e48","#80ab99","#e8dbad","#b39e58","#99822d"],["#dbf73b","#c0cc39","#eb0258","#a6033f","#2b2628"],["#f1ebeb","#eee8e8","#cacaca","#24c0eb","#5cceee"],["#454545","#743455","#a22365","#d11174","#ff0084"],["#796c86","#74aa9b","#91c68d","#ece488","#f6f5cd"],["#7375a5","#21a3a3","#13c8b5","#6cf3d5","#2b364a"],["#efac41","#de8531","#b32900","#6c1305","#330a04"],["#fffbf0","#968f4b","#7a6248","#ab9597","#030506"],["#31827c","#95c68f","#f7e9aa","#fc8a80","#fd4e6d"],["#615050","#776a6a","#ad9a6f","#f5f1e8","#fcfcfc"],["#f26b7a","#f0f2dc","#d9eb52","#8ac7de","#87796f"],["#b877a8","#b8008a","#ff3366","#ffcc33","#ccff33"],["#b9340b","#cea45c","#c5be8b","#498379","#3f261c"],["#f4e196","#a6bf91","#5f9982","#78576b","#400428"],["#72bca5","#f4ddb4","#f1ae2b","#bc0b27","#4a2512"],["#ddcaa2","#aebea3","#b97479","#d83957","#4e5c69"],["#141827","#62455b","#736681","#c1d9d0","#fffae3"],["#2b9eb3","#85cc9c","#bcd9a0","#edf79e","#fafad7"],["#cfb698","#ff5d57","#dd0b64","#6f0550","#401c2a"],["#a8c078","#a89048","#a84818","#61290e","#330c0c"],["#171133","#581e44","#c5485a","#d4be99","#e0ffcc"],["#ebe5b2","#f6f3c2","#f7c69f","#f89b7e","#b5a28b"],["#ff0f35","#f86254","#fea189","#f3d5a5","#bab997"],["#20130a","#142026","#123142","#3b657a","#e9f0c9"],["#bdbf90","#35352b","#e7e9c4","#ec6c2b","#feae4b"],["#eeccbb","#f1731f","#e03e36","#bd0d59","#730662"],["#ffcfad","#ffe4b8","#e6d1b1","#b8aa95","#5e5a54"],["#ff9934","#ffc018","#f8fef4","#cde54e","#b3c631"],["#d1dbc8","#b8c2a0","#c97c7a","#da3754","#1f1106"],["#bda0a2","#ffe6db","#d1eaee","#cbc8b5","#efb0a9"],["#4d433d","#525c5a","#56877d","#8ccc81","#bade57"],["#262525","#525252","#e6ddbc","#822626","#690202"],["#9d9f89","#84af97","#8bc59b","#b2de93","#ccee8d"],["#52423c","#ad5c70","#d3ad98","#edd4be","#b9c3c4"],["#353437","#53576b","#7a7b7c","#a39b7e","#e2c99f"],["#a22c27","#4f2621","#9f8241","#ebd592","#929867"],["#839074","#939e78","#a8a878","#061013","#cdcd76"],["#eb9d8d","#93865a","#a8bb9a","#c5cba6","#efd8a9"],["#6a3d5a","#66666e","#6d8d76","#b0c65a","#ebf74f"],["#ff9966","#d99973","#b39980","#8c998c","#669999"],["#d1dab9","#92bea5","#6f646c","#671045","#31233e"],["#f9ded3","#fdd1b6","#fab4b6","#c7b6be","#89abb4"],["#4b4b55","#f4324a","#ff516c","#fb9c5a","#fcc755"],["#820081","#fe59c2","#fe40b9","#fe1cac","#390039"],["#000000","#ed0b65","#b2a700","#fcae11","#770493"],["#941f1f","#ce6b5d","#ffefb9","#7b9971","#34502b"],["#482344","#2b5166","#429867","#fab243","#e02130"],["#031c30","#5a3546","#b5485f","#fc6747","#fa8d3b"],["#a9b79e","#e8ddbd","#dba887","#c25848","#9d1d36"],["#666666","#abdb25","#999999","#ffffff","#cccccc"],["#27081d","#47232c","#66997b","#a4ca8b","#d2e7aa"],["#8fc9b9","#d8d9c0","#d18e8f","#ab5c72","#91334f"],["#8ba6ac","#d7d7b8","#e5e6c9","#f8f8ec","#bdcdd0"],["#ffe7bf","#ffc978","#c9c987","#d1a664","#c27b57"],["#0c0636","#095169","#059b9a","#53ba83","#9fd86b"],["#f3dcb2","#facb97","#f59982","#ed616f","#f2116c"],["#ff3366","#e64066","#cc4d66","#b35966","#996666"],["#fdf4b0","#a4dcb9","#5bcebf","#32b9be","#2e97b7"],["#302727","#ba2d2d","#f2511b","#f2861b","#c7c730"],["#fdbf5c","#f69a0b","#d43a00","#9b0800","#1d2440"],["#dfd0af","#e8acac","#a45785","#85586c","#a1c0a1"],["#f3214e","#cf023b","#000000","#f4a854","#fff8bc"],["#ec4b59","#9a2848","#130716","#fc8c77","#f8dfbd"],["#1f0b0c","#e7fccf","#d6c396","#b3544f","#300511"],["#6e9167","#ffdd8c","#ff8030","#cc4e00","#700808"],["#332e1d","#5ac7aa","#9adcb9","#fafcd3","#efeba9"],["#adeada","#bdeadb","#cdeadc","#ddeadd","#edeade"],["#ffad08","#edd75a","#73b06f","#0c8f8f","#405059"],["#295264","#fad9a6","#bd2f28","#89373d","#142433"],["#331436","#7a1745","#cb4f57","#eb9961","#fcf4b6"],["#fef0a5","#f8d28b","#e3b18b","#a78d9e","#74819d"],["#f7ead9","#e1d2a9","#88b499","#619885","#67594e"],["#210518","#3d1c33","#5e4b55","#7c917f","#93bd9a"],["#ecf8d4","#e0deab","#cb8e5f","#85685a","#0d0502"],["#a2c7bb","#dde29f","#ac8d49","#ac0d0d","#320606"],["#fce7d2","#e0dbbd","#c0ceaa","#fd8086","#eb5874"],["#ff667c","#fbbaa4","#f9e5c0","#2c171c","#b6d0a0"],["#fcf3e3","#ed4c87","#63526e","#6cbaa4","#f2ad5e"],["#a8ab84","#000000","#c6c99d","#0c0d05","#e7ebb0"],["#940533","#c0012a","#f5061d","#ff8800","#ffb300"],["#d45e80","#c6838c","#cfbf9e","#f7dea8","#f6be5f"],["#d6d578","#b1bf63","#9dad42","#258a60","#0a3740"],["#a6988a","#88a19f","#6aabb5","#4bb4ca","#1ec3ea"],["#470d3b","#7e2f56","#c0576f","#e48679","#febd84"],["#99cccc","#a8bdc2","#b8aeb8","#c79ead","#d78fa3"],["#d1f7ba","#dbdea6","#d1bd95","#8c686b","#391b4a"],["#3f264d","#5d2747","#9f3647","#db4648","#fb9553"],["#ffffff","#ff97ca","#ff348e","#be0049","#770021"],["#e1e6e3","#bfd6c7","#c7bd93","#ff7876","#574b45"],["#abece4","#c4d004","#ff9f15","#fb7991","#926d40"],["#1c0b2b","#301c41","#413b6b","#5c65c0","#6f95ff"],["#0ccaba","#e3f5b7","#e6ae00","#d46700","#9e3f00"],["#b7aea5","#f77014","#e33c08","#433d3d","#221d21"],["#fb6f24","#8ca315","#5191c1","#1e6495","#0a4b75"],["#2c2b4b","#a75293","#9c7a9d","#9ddacb","#f8dcb4"],["#de4c45","#d9764d","#cc9e8a","#c1c5c7","#ebdfc6"],["#d24d6c","#ad8484","#d9d5bb","#c1858f","#b05574"],["#060212","#fe5412","#fc1a1a","#795c06","#4f504f"],["#d9d9db","#b7ae8f","#978f84","#4a362f","#121210"],["#e9d7a9","#d2d09f","#d5a57f","#b56a65","#4b3132"],["#ff7a24","#ff6d54","#f76d75","#e8728f","#c97ba5"],["#7f135f","#a0667a","#c2b895","#c4cab0","#c7dcca"],["#5d917d","#fff9de","#cdd071","#b81c48","#632739"],["#ffe6bd","#ffcc7a","#e68a6c","#8a2f62","#260016"],["#fcd8af","#fec49b","#fe9b91","#fd6084","#045071"],["#f4fce2","#d3ebc7","#aabfaa","#bf9692","#fc0284"],["#3c515d","#3d6868","#40957f","#a7c686","#fcee8c"],["#d46419","#b34212","#341405","#166665","#83870e"],["#f19601","#f21f26","#251819","#ebc83a","#73b295"],["#27191c","#2d3839","#114d4d","#6e9987","#e0e4ce"],["#c3b68c","#6e5b54","#b94866","#afb7a0","#f4eed4"],["#f6eddc","#e3e5d7","#bdd6d2","#a5c8ca","#586875"],["#88d1ca","#ded6c9","#e68a2e","#c90a00","#452b34"],["#edf3c5","#f2cc49","#b7be5f","#24b399","#2d1c28"],["#200e38","#6a0e47","#b50d57","#ff0d66","#dec790"],["#ebebab","#78bd91","#4d8f81","#9b4b54","#f22b56"],["#efece2","#81d7cd","#ff0048","#b13756","#5b1023"],["#95aa61","#121310","#f6f8ee","#d6e68a","#899752"],["#0d0210","#4d3147","#866a80","#c9b7c7","#fffbff"],["#fffff7","#e9fccf","#d8fcb3","#b1fcb3","#89fcb3"],["#1a2b2b","#332222","#4d1a1a","#661111","#800909"],["#f7f0ba","#e0dba4","#a9cba6","#7ebea3","#53a08e"],["#fcf9ce","#c4e0a6","#dea37a","#bd3737","#d54c4a"],["#f8db7e","#ec6349","#ce2340","#6f1b2c","#310a26"],["#689195","#050000","#ab8288","#cea4a6","#ffcdc5"],["#b6d9c3","#c6a9ac","#d48299","#e64e81","#fd0a60"],["#551bb3","#268fbe","#2cb8b2","#3ddb8f","#a9f04d"],["#7e949e","#aec2ab","#ebcea0","#fc7765","#ff335f"],["#fcf6d2","#fcf6d2","#fbe2b9","#c6c39a","#281f20"],["#f5c8bf","#e0d2c5","#cad9ca","#a7e3c1","#495453"],["#8d1042","#a25d47","#a08447","#97aa66","#b8b884"],["#f9f9e7","#505045","#161613","#c0a1ae","#c1e0e0"],["#cad5ad","#f9df94","#f6a570","#e77a77","#54343f"],["#73c5aa","#c6c085","#f9a177","#f76157","#4c1b05"],["#cf3a69","#8f4254","#7caa96","#b6c474","#d4d489"],["#f5ea95","#fc8e5b","#fc5956","#c93e4f","#3d1734"],["#16c1c8","#49cccc","#7cd7cf","#aee1d3","#e1ecd6"],["#807070","#9a8fc8","#8dbdeb","#a5e6c8","#d9f5b5"],["#1f2f3a","#98092b","#df931b","#e0daa3","#9fb982"],["#020202","#493d3f","#bdb495","#f8f2ce","#d8d989"],["#d8f5d1","#9ddbca","#92b395","#726c81","#565164"],["#0f132e","#19274e","#536d88","#b49b85","#eac195"],["#e85a50","#feffd6","#5bb7b6","#010002","#fdf37a"],["#939473","#4f784e","#2d5e4c","#13444d","#252326"],["#bfe4cd","#ddb37d","#fa8331","#fb4848","#fd0a60"],["#f0f0d8","#d8d8c0","#7a8370","#df8615","#f84600"],["#ef4335","#f68b36","#f2cd4f","#cae081","#88eed0"],["#04394e","#00875e","#a7cc15","#f5cc17","#f56217"],["#5a3938","#847b6d","#a3ab98","#d2d5af","#dfa49b"],["#75727a","#997f87","#b88c87","#d39679","#f3a76d"],["#b68810","#301406","#7f9473","#d3c795","#c02c20"],["#423431","#f70b17","#050000","#9a8c29","#e7cba4"],["#f6b149","#f8572d","#df2a33","#a22543","#6b312d"],["#404467","#5c627a","#a3b6a2","#b2ccaf","#fffaac"],["#4a3333","#e1473f","#9a9088","#80b0ab","#dbd1b3"],["#9e9e9e","#5ecde0","#00fff2","#c4ffc9","#e0e0e0"],["#2f1335","#620e5d","#9d007a","#ce3762","#ff6e49"],["#ff8591","#efaaa3","#8caaa2","#5a9b95","#44878f"],["#524e4e","#ff2b73","#ff5a6a","#ff9563","#ffcd37"],["#0f7d7e","#76b5a0","#fffdd1","#ff7575","#d33649"],["#3e3742","#825e65","#cc8383","#ebc4a9","#e6e0c5"],["#eec77a","#e77155","#c71755","#7b3336","#5b9b9a"],["#d0dccb","#d7c7be","#b3c5ba","#88c3b5","#6d6168"],["#f7f4e8","#daf3ea","#85e6c0","#6bb39b","#0b0b0d"],["#541e35","#df5d2e","#ffb43e","#a4c972","#6bb38e"],["#c39738","#ffff96","#7f4311","#5e4318","#361f00"],["#d94052","#ee7e4c","#ead56c","#94c5a5","#898b75"],["#741952","#fe3174","#f1c15d","#94bb68","#09a3ad"],["#ffffff","#000000","#ff006f","#ffb300","#fff538"],["#516d7d","#2a728e","#9d870c","#f93f03","#f9eee2"],["#220114","#811628","#bd3038","#ff7e57","#f8b068"],["#33242b","#e30842","#fc4630","#ff9317","#c4ff0d"],["#f1ffd5","#d6e6b7","#a35481","#b8136f","#ea0063"],["#58534c","#f1d3ab","#dbce79","#f95842","#0eaeab"],["#fb545c","#99662d","#b7e1a1","#cdeda1","#fdf5a4"],["#ffeec2","#fe9e8e","#f80174","#c4037a","#322c8e"],["#fe9600","#ffc501","#ffee4a","#77477e","#03001c"],["#cb6f84","#291d21","#5d544d","#cfccbb","#e1daca"],["#ff8d7b","#c88984","#947280","#d6b58c","#dcd392"],["#22806b","#a89f1d","#facb4b","#fcaf14","#ed7615"],["#e0dcb8","#c4bc16","#918f61","#c21f40","#302c25"],["#79aba2","#b4b943","#b7833a","#a04b26","#301e1a"],["#3b3e37","#e19563","#9fb39b","#d39088","#f0ddb5"],["#cbdad5","#89a7b1","#566981","#3a415a","#34344e"],["#281b24","#d02941","#f57e67","#d9c9a5","#8cab94"],["#ebe7a7","#a7ebc9","#78b395","#917c67","#5e5953"],["#582770","#773d94","#943d8a","#c22760","#e81764"],["#b19676","#766862","#92bf9f","#e3d49c","#f9f0b7"],["#fef1e0","#f6e6ce","#3b2e2a","#3f0632","#a47f1a"],["#670d0f","#f01945","#f36444","#ffce6f","#ffe3c9"],["#555231","#9c8c51","#bcac71","#e9db9c","#79927d"],["#d3dbd9","#a4bdbc","#ffdabf","#ffbf91","#ff9a52"],["#d2d2d2","#58afb8","#269199","#ec225e","#020305"],["#f5d393","#f39772","#eb6765","#261329","#1a0b2a"],["#af0745","#fa4069","#fe9c6b","#fcda90","#c8b080"],["#fe958f","#f3d7c2","#8bb6a3","#17a7a8","#122f51"],["#2a1e1e","#503850","#aa6581","#f99fa9","#ffc5c1"],["#281916","#e86786","#f4a1b5","#ffd2cb","#96b5ad"],["#e4f3d8","#afcacc","#ffa02e","#e80560","#331d4a"],["#fff4ce","#d0deb8","#ffa492","#ff7f81","#ff5c71"],["#8e3f65","#73738d","#72a5ae","#98e9d0","#d8ffcc"],["#d2fae2","#e6f8b1","#f6d5ad","#f6b794","#e59da0"],["#ad2003","#e0e6ae","#bdd3b6","#836868","#5f0609"],["#942222","#bd3737","#d4cdad","#98c3a1","#25857d"],["#3d2304","#7f6000","#deb069","#c41026","#3d0604"],["#001f21","#029b99","#ebe7b7","#de4f15","#ecc039"],["#fb6a3d","#fbe5ac","#361d20","#a2bc97","#f7cd67"],["#81749c","#4d3e6b","#8daec3","#c5dfe0","#fcfce2"],["#8e978d","#97c4ad","#bfedbe","#e6fcd9","#cdf2d6"],["#5e3848","#666163","#a7b381","#cad197","#cde0bf"],["#817a8a","#cdbbbb","#fcddc8","#fffeea","#efcaba"],["#160d18","#23145b","#09456c","#026f6e","#1ca39e"],["#907071","#7bbda1","#a4d9a3","#c6d7a0","#fbdcb0"],["#420b58","#fc036c","#f1a20b","#8d9c09","#08807b"],["#cc8f60","#b7a075","#9eb48e","#8cc2a0","#77d4b6"],["#3a3232","#d83018","#f07848","#fdfcce","#c0d8d8"],["#cf0638","#fa6632","#fecd23","#0a996f","#0a6789"],["#ff4000","#ffefb5","#319190","#ffc803","#260d0d"],["#4acabb","#cbe5c0","#fcf9c2","#edc5bd","#84407b"],["#c75f77","#fefab6","#77a493","#836177","#654b49"],["#d1dc5a","#e0f7e0","#77f2de","#6ac5cb","#45444e"],["#400e28","#992f4d","#f25872","#f08e73","#e8b787"],["#6c788e","#a6aec1","#cfd5e1","#ededf2","#fcfdff"],["#96b5a6","#fce1cb","#febeac","#4e383d","#d9434f"],["#d6496c","#7db8a2","#d6dd90","#fffad3","#7e638c"],["#a2825c","#88d3ab","#f9fad2","#f5da7a","#ff985e"],["#ec6363","#ec7963","#ecb163","#dfd487","#bdebca"],["#282832","#77181e","#a92727","#c6d6d6","#dee7e7"],["#1c31a5","#101f78","#020f59","#010937","#000524"],["#2f2e30","#e84b2c","#e6d839","#7cd164","#2eb8ac"],["#becec4","#688a7c","#9d7c5b","#e35241","#e49183"],["#cdb27b","#de7c04","#e4211b","#c00353","#5e2025"],["#2a0308","#924f1b","#e2ac3f","#f8ebbe","#7ba58d"],["#966c80","#96bda8","#bfd4ad","#f7d3a3","#eca36c"],["#9aedb5","#ab9a89","#a3606d","#4f2d4b","#291e40"],["#636363","#85827e","#d1b39f","#ffecd1","#ffd1b3"],["#4d4d4d","#637566","#a39c67","#d69e60","#ff704d"],["#efd8a4","#e8ae96","#e49d89","#e47f83","#a8c99e"],["#281a1a","#4e2d28","#70454e","#ae736f","#dda8b0"],["#f2f2f2","#348e91","#1c5052","#213635","#0a0c0d"],["#c9ad9b","#ffbda1","#e05576","#703951","#452a37"],["#e0be7e","#e89d10","#db4b23","#382924","#136066"],["#40122c","#656273","#59baa9","#d8f171","#fcffd9"],["#1a110e","#4e051c","#f7114b","#c4b432","#bcb7ab"],["#f0debb","#59a87d","#16453f","#091c1a","#541734"],["#8d9c9d","#e00b5b","#f5b04b","#fcdfbd","#45373e"],["#eeaeaa","#daaeaa","#c6aeaa","#b2aeaa","#9eaeaa"],["#f67968","#f67968","#f68c68","#f68c68","#f6a168"],["#ef7270","#ee9f80","#f3ecbe","#cdaf7b","#59291b"],["#2a8b8b","#75c58e","#bfff91","#dfe9a8","#ffd2bf"],["#b0da09","#f99400","#f00a5e","#b80090","#544f51"],["#f5e1a4","#d9d593","#ee7f27","#bc162a","#302325"],["#93ba85","#bda372","#f49859","#ff494b","#5e363f"],["#eda08c","#876f55","#a19153","#b1b080","#b1ceaf"],["#fb7968","#f9c593","#fafad4","#b0d1b2","#89b2a2"],["#c0b19e","#ffb48f","#f68b7b","#f6464a","#911440"],["#ffffe5","#dffda7","#6ecf42","#31a252","#6b456c"],["#c92c2c","#cf6123","#f3c363","#f1e9bb","#5c483a"],["#ffffc2","#f0ffc2","#e0ffc2","#d1ffc2","#c2ffc2"],["#ffffff","#5e9188","#3e5954","#253342","#232226"],["#110303","#c3062c","#ff194b","#8fa080","#708066"],["#96958a","#76877d","#88b8a9","#b2cbae","#dbddb4"],["#fff7bc","#fee78a","#f8a348","#e15244","#3a7b50"],["#faf4e0","#d2ff1f","#ffc300","#ff6a00","#3b0c2c"],["#2b2318","#524835","#56704b","#5d9e7e","#78b3a4"],["#615c5c","#e30075","#ff4a4a","#ffb319","#ebe8e8"],["#f46472","#f2ecc3","#fff9d8","#bed6ab","#999175"],["#3b5274","#9c667d","#ce938b","#e8cc9c","#e3e1b1"],["#092b5a","#09738a","#78a890","#9ed1b7","#e7d9b4"],["#cde9ca","#ced89d","#dfba74","#e8a249","#575e55"],["#2f2c2b","#413726","#79451d","#d7621a","#fd8d32"],["#b7b09e","#493443","#eb6077","#f0b49e","#f0e2be"],["#d0d167","#fffcff","#e6dddc","#ff0c66","#969ba2"],["#010d23","#03223f","#038bbb","#fccb6f","#e19f41"],["#30182b","#f0f1bc","#60f0c0","#ff360e","#191f04"],["#d8c358","#6d0839","#d0e799","#25271e","#fbeff4"],["#f28a49","#f7e3b2","#e3967d","#57342d","#9dbfa4"],["#2f003f","#be0001","#ff8006","#f3c75f","#e9cfaa"],["#504375","#39324d","#ffe8ef","#c22557","#ed5887"],["#beed80","#59d999","#31ada1","#51647a","#453c5c"],["#d8d3ab","#b0b19f","#784d5f","#ba456a","#d04969"],["#548c82","#d1ce95","#fcfade","#d55d63","#452d3d"],["#becb7c","#84967e","#962c4c","#f05d67","#faa191"],["#89666d","#d2c29f","#e3a868","#f76f6d","#f2306d"],["#07f9a2","#09c184","#0a8967","#0c5149","#0d192b"],["#c3aaa5","#d76483","#ef9ca4","#ffc2bb","#f6e5cb"],["#c3d297","#ffffff","#c3b199","#3a2d19","#e8373e"],["#f7e6be","#e89a80","#a93545","#4d4143","#485755"],["#fdf2c5","#efe8b2","#c6d1a6","#82bfa0","#7a6f5d"],["#f00065","#fa9f43","#f9fad2","#262324","#b3dbc8"],["#dfcccc","#ffd3d3","#ffa4a4","#d17878","#965959"],["#a1a6aa","#bd928b","#de7571","#ff4e44","#282634"],["#fdec6f","#f2e9b0","#ecdfdb","#ede3fb","#fedfae"],["#4aedd7","#705647","#ed6d4a","#ffca64","#3fd97f"],["#352640","#92394b","#a9767a","#d1b4a2","#f1f2ce"],["#330708","#e84624","#e87624","#e8a726","#e8d826"],["#fb6066","#ffefc1","#fdd86e","#ffa463","#f66b40"],["#62462a","#01ffac","#8ff638","#a2fa1b","#855d46"],["#f7c097","#829d74","#de3c2f","#eb5f07","#f18809"],["#aaaa91","#848478","#5e5e5e","#383845","#12122b"],["#3b0503","#f67704","#f85313","#fedc57","#9ecfbc"],["#140d1a","#42142a","#ff2e5f","#ffd452","#faeeca"],["#7ebeb2","#d1f3db","#da9c3c","#bc1953","#7d144c"],["#678c99","#b8c7cc","#fff1cf","#d6c292","#b59e67"],["#21203f","#fff1ce","#e7bfa5","#c5a898","#4b3c5d"],["#81657e","#3ea3af","#9fd9b3","#f0f6b9","#ff1d44"],["#368986","#e79a32","#f84339","#d40f60","#005c81"],["#fcf7d7","#fea667","#ffe461","#c4c776","#f4d092"],["#e8608c","#71cbc4","#fff9f4","#cdd56e","#ffbd68"],["#ff5252","#ff7752","#ff9a52","#ffb752","#5e405b"],["#d5d8c7","#d4d6ce","#d3d5d5","#d1d3dc","#d0d2e3"],["#829b86","#96b7a2","#a6aa56","#b4b969","#dfdb9c"],["#050003","#496940","#93842f","#ffa739","#fce07f"],["#382a2a","#ff3d3d","#ff9d7d","#e5ebbc","#8dc4b7"],["#3d0a49","#5015bd","#027fe9","#00caf8","#e0daf7"],["#edffb3","#99928e","#bfe3c3","#dbedc2","#fff2d4"],["#471754","#991d5d","#f2445e","#f07951","#dec87a"],["#f2ecdc","#574345","#e3dacb","#c5ffe5","#f5eed4"],["#d4cdc5","#5b88a5","#f4f4f2","#191013","#243a69"],["#a6e094","#e8e490","#f07360","#bf2a7f","#5c3d5b"],["#622824","#2f0618","#412a9c","#1b66ff","#00cef5"],["#10100f","#26503c","#849112","#9d4e0f","#840943"],["#fffec7","#e1f5c4","#9dc9ac","#919167","#ff4e50"],["#dacdac","#f39708","#f85741","#0e9094","#1e1801"],["#46294a","#ad4c6b","#e07767","#e0ae67","#d4e067"],["#ff9b8f","#ef7689","#9e6a90","#766788","#71556b"],["#5e0324","#692764","#7b7893","#7fb1a8","#94f9bf"],["#2b2c30","#35313b","#453745","#613c4c","#ff1457"],["#f8dac2","#f2a297","#f4436f","#ca1444","#142738"],["#92b2a7","#6e7b8c","#b69198","#efa09b","#e7c7b0"],["#e1edd1","#aab69b","#9e906e","#b47941","#cf391d"],["#e5e6b8","#c6d4b8","#6ca6a3","#856a6a","#9c325c"],["#e81e4a","#0b1d21","#078a85","#68baab","#edd5c5"],["#6ea49b","#d9d0ac","#6b8f0b","#7d3f60","#372b2e"],["#333237","#fb8351","#ffad64","#e9e2da","#add4d3"],["#e4ffd4","#ebe7a7","#edc68e","#a49e7e","#6e8f85"],["#f2e7d2","#f79eb1","#ae8fba","#4c5e91","#473469"],["#fe495f","#fe9d97","#fffec8","#d8fd94","#bded7e"],["#240f03","#4b2409","#bd7a22","#e79022","#df621c"],["#f5f5f5","#e9e9e9","#006666","#008584","#cccccc"],["#fa7785","#24211a","#d5d87d","#b1d4b6","#53cbbf"],["#37ab98","#80bc96","#a6c88c","#e1ce8a","#37053b"],["#3b331f","#ed6362","#ff8e65","#dceb5b","#58ce74"],["#db3026","#e88a25","#f9e14b","#efed89","#7abf66"],["#24434b","#fc325b","#fa7f4b","#bfbc84","#63997a"],["#06d9b6","#a4f479","#d4d323","#d13775","#9c3c86"],["#260d33","#003f69","#106b87","#157a8c","#b3aca4"],["#d6ce8b","#8fd053","#02907d","#03453d","#2c1001"],["#402b30","#faddb4","#f4c790","#f2977e","#ba6868"],["#f5e3ae","#fff5d6","#e1e6d3","#b1ccc4","#4e5861"],["#3b4344","#51615b","#bbbd91","#f06f6b","#f12f5d"],["#85b394","#a7ba59","#f0f0d8","#f0d890","#ae2f27"],["#af162a","#95003a","#830024","#5a0e3d","#44021e"],["#b9030f","#9e0004","#70160e","#161917","#e1e3db"],["#070705","#3e4b51","#6f737e","#89a09a","#c1c0ae"],["#e4a691","#f7efd8","#c8c8a9","#556270","#273142"],["#9cd6c8","#f1ffcf","#f8df82","#fac055","#e57c3a"],["#fbe4ae","#dacb8a","#897632","#392e0e","#6bb88a"],["#c1ddc7","#f5e8c6","#bbcd77","#dc8051","#f4d279"],["#a7848b","#b88f93","#f5d5c6","#f9efd4","#b8cabe"],["#585d5d","#e06f72","#e7a17a","#e4b17d","#d1cbc0"],["#4e3150","#c7777f","#b6dec1","#d6ecdf","#fbf6b5"],["#259b9b","#6fbcaa","#b8d6b0","#feedbf","#ff1964"],["#e6626f","#efae78","#f5e19c","#a2ca8e","#66af91"],["#efe2bf","#f5a489","#ef8184","#a76378","#a8c896"],["#17181f","#314d4a","#0b8770","#a6c288","#ebe68d"],["#02fcf3","#a9e4cf","#cae0c8","#deddc4","#e8e7d2"],["#801245","#f4f4dd","#dcdbaf","#5d5c49","#3d3d34"],["#878286","#88b6a3","#bdba9e","#e2c18d","#e2bb64"],["#e5e5e5","#f1dbda","#fcd0cf","#cfbdbf","#a2a9af"],["#e7ddd3","#c0c2bd","#9c9994","#29251c","#e6aa9f"],["#000000","#7890a8","#304878","#181848","#f0a818"],["#fab96b","#f19474","#ea777b","#94919a","#69a2a8"],["#2eb3a1","#4fb37c","#79b36b","#a2ab5e","#bca95b"],["#72bab0","#f0c69c","#d1284f","#9e0e30","#301a1a"],["#6d165a","#a0346e","#ec5c8d","#ff8c91","#ffc4a6"],["#d0dcb3","#dabd90","#df7670","#f4065e","#837d72"],["#f7f3cf","#c2e4cb","#36cecc","#27b1bf","#176585"],["#61d4b0","#8ee696","#baf77c","#e8ff65","#ecedd5"],["#322f3e","#e63c6d","#f5b494","#ede7a5","#abdecb"],["#c0b698","#647e37","#300013","#6e9a81","#d2c8a7"],["#594747","#6743a5","#7345d6","#2e2e2e","#bfab93"],["#4e031e","#5d2d4e","#5a4c6e","#447390","#05a1ad"],["#f9ebc4","#ffb391","#fc2f68","#472f5f","#08295e"],["#d3c6cc","#e2c3c6","#eecfc4","#f8e6c6","#ffffcc"],["#02031a","#021b2b","#b10c43","#ff0841","#ebdfcc"],["#463a2a","#5c4b37","#dddd92","#57c5c7","#00b5b9"],["#e72313","#fffcf7","#67b588","#65a675","#141325"],["#648285","#b4a68e","#080d0d","#f3daaa","#a3c4c2"],["#3a3132","#0f4571","#386dbd","#009ddd","#05d3f8"],["#010300","#314c53","#5a7f78","#bbdec6","#f7f8fc"],["#66ffff","#8cbfe6","#b380cc","#d940b3","#ff0099"],["#63072c","#910f43","#a65d53","#d59500","#f7f7a1"],["#a69a81","#e0d3b8","#eb9e6e","#eb6e6e","#706f6b"],["#edd8bb","#e2aa87","#fef7e1","#a2d3c7","#ef8e7d"],["#070743","#169d99","#b9cc01","#fae894","#ab0768"],["#edb886","#f1c691","#ffe498","#f9f9f1","#b9a58d"],["#87b091","#c4d4ab","#e0e0b6","#171430","#eff0d5"],["#ff7c70","#f2dfb1","#b7c9a9","#674d69","#2e292e"],["#1f0441","#fc1068","#fcab10","#f9ce07","#0ce3e8"],["#2a091c","#87758f","#85aab0","#a3c3b8","#e3edd2"],["#211c33","#2b818c","#ffc994","#ed2860","#990069"],["#f75e50","#eac761","#e8df9c","#91c09e","#7d7769"],["#fff7e5","#fecdd0","#f8afb8","#f5a3af","#59483e"],["#11091a","#2f2f4d","#626970","#bab195","#e8d18e"],["#68b2f8","#506ee5","#7037cd","#651f71","#1d0c20"],["#c9031a","#9d1722","#4a2723","#07a2a6","#ffeccb"],["#fa3419","#f3e1b6","#7cbc9a","#23998e","#1d5e69"],["#000000","#a69682","#7e9991","#737373","#d8770c"],["#cc063e","#e83535","#fd9407","#e2d9c2","#10898b"],["#cbe4ea","#ead1cb","#af9c98","#657275","#000000"],["#a9baae","#e6d0b1","#deb297","#c98d7b","#8a6662"],["#fb573b","#4f393c","#8ea88d","#9cd0ac","#f4eb9e"],["#9d9382","#ffc1b2","#ffdbc8","#fff6c7","#dcd7c2"],["#a89d87","#bab100","#f91659","#b31d6a","#2e2444"],["#decba0","#a0ab94","#6b9795","#594461","#6e1538"],["#fef7d5","#abee93","#2d938e","#0b4462","#f7a48b"],["#4b1623","#75233d","#c4594b","#f0b96b","#fdf57e"],["#00686c","#32c2b9","#edecb3","#fad928","#ff9915"],["#f3ffd2","#bff1ce","#82bda7","#6e837c","#2e0527"],["#e0eebd","#dae98a","#e17572","#ce1446","#2b0b16"],["#40223c","#42988f","#b1c592","#f1ddba","#fb718a"],["#8fbfb9","#649ea7","#bddb88","#e0f3b2","#eefaa8"],["#3b1a01","#a5cc7a","#dcffb6","#633b1c","#db3c6e"],["#865a19","#c4b282","#85005b","#520647","#0e002f"],["#0e0036","#4c264b","#a04f62","#d2a391","#e6d7b8"],["#b9f8f0","#b6d3a5","#ee9b57","#ef2b41","#11130e"],["#a4f7d4","#9ae07d","#ada241","#a13866","#381c30"],["#320139","#331b3b","#333e50","#5c6e6e","#f1debd"],["#e5fec5","#c5fec6","#a3fec7","#29ffc9","#392a35"],["#e3604d","#d1c8a3","#acba9d","#7b5d5e","#c6ad71"],["#300d28","#70615c","#8ca38b","#f7eeaa","#edb552"],["#1f192f","#2d6073","#65b8a6","#b5e8c3","#f0f7da"],["#ebe5ce","#ced1c0","#bad1c9","#8c162a","#660022"],["#1a0c12","#f70a71","#ffdaa6","#ffb145","#74ab90"],["#bbaa9a","#849b95","#90856f","#b6554c","#d83a31"],["#e4e2af","#ffa590","#e5cbb4","#fff1d7","#56413e"],["#7e6762","#cf5a60","#f85a69","#f0b593","#e3dfbc"],["#484450","#466067","#459a96","#34baab","#c4c8c5"],["#f2ecb0","#ebb667","#d65c56","#823c3c","#1b1c26"],["#fbffcc","#caf2be","#ddc996","#f67975","#f13565"],["#574d4f","#ffffff","#969091","#ffe999","#ffd952"],["#caf729","#79dd7e","#2ecbaa","#21b6b6","#888dda"],["#ffe3b3","#ff9a52","#ff5252","#c91e5a","#3d2922"],["#99db49","#069e8c","#211d19","#575048","#9e064a"],["#e2e2b2","#49fecf","#370128","#e42355","#fe7945"],["#f3b578","#f78376","#da4c66","#8f3c68","#3f3557"],["#eed47f","#f2e0a0","#d8d8b2","#8cb0b0","#432332"],["#5c1b35","#d43f5d","#f2a772","#e8d890","#e2edb7"],["#79d6b7","#ccd6bd","#d7c3ab","#f0afab","#f58696"],["#cdb28a","#f9f4e3","#d4ddb1","#b1ba8e","#7a6448"],["#f1f7cd","#d3f7cd","#b5f7cd","#403a26","#81876c"],["#c7003f","#f90050","#f96a00","#faab00","#daf204"],["#412973","#753979","#b1476d","#eb9064","#bed9c8"],["#8f9044","#f8a523","#fc8020","#cf1500","#352f3d"],["#48586f","#ffffc0","#d6c496","#d62e2e","#283d3e"],["#7d677e","#4f2c4d","#360b41","#ccc9aa","#fafdea"],["#f8f8d6","#b3c67f","#5d7e62","#50595c","#fa3e3e"],["#f4fcb8","#dae681","#95a868","#452c18","#cc7254"],["#5e5473","#19b5a5","#ede89d","#ff6933","#ff0048"],["#723e4e","#b03851","#ef3353","#f17144","#f4b036"],["#f3ddb6","#d6bf93","#532728","#ced0ba","#f2efce"],["#663333","#994d4d","#cc6666","#e6b280","#ffff99"],["#fea304","#909320","#125a44","#37192c","#220315"],["#52baa7","#718f85","#ba5252","#fc0f52","#fc3d73"],["#edab8b","#f5ebb0","#dad061","#acc59d","#776c5a"],["#f8f4c4","#d5e0b5","#a5c3a7","#6d8b89","#47667b"],["#c8cfae","#96b397","#525574","#5c3e62","#9b5f7b"],["#e4b302","#158fa2","#de4f3a","#722731","#bd1b43"],["#0b110d","#2c4d56","#c3aa72","#dc7612","#bd3200"],["#52493a","#7c8569","#a4ab80","#e8e0ae","#de733e"],["#665c52","#74b3a7","#a3ccaf","#e6e1cf","#cc5b14"],["#53ac59","#3b8952","#0f684b","#03484c","#1c232e"],["#111113","#d18681","#acbfb7","#f6ebdd","#8e6d86"],["#745e50","#ff948b","#fdaf8a","#fcd487","#f79585"],["#090f13","#171f25","#752e2b","#c90a02","#f2eab7"],["#d3b390","#b8a38b","#a78b83","#c76b79","#f1416b"],["#210210","#ee2853","#2b0215","#8f2f45","#d24d6c"],["#ceebd1","#b6deb9","#b1ccb4","#aebfaf","#a6ada7"],["#545454","#7b8a84","#8cbfaf","#ede7d5","#b7cc18"],["#e6546b","#da8f72","#ffe792","#c9daa4","#8acbb5"],["#ffffea","#a795a5","#7a959e","#424e5e","#3b2b46"],["#addfd3","#eae3d0","#dbc4b6","#ffa5aa","#efd5c4"],["#c5f7f0","#a9c2c9","#8e8ca3","#72577c","#562155"],["#394736","#696b46","#b99555","#a8462d","#5c584c"],["#5a372c","#8b8b70","#98c7b0","#f0f0d8","#c94b0c"],["#ff548f","#9061c2","#be80ff","#63d3ff","#02779e"],["#9ed99e","#f0dda6","#eb6427","#eb214e","#1a1623"],["#000000","#1693a5","#d8d8c0","#f0f0d8","#ffffff"],["#383939","#149c68","#38c958","#aee637","#fffedb"],["#ffdeb3","#73bc91","#342220","#fc370c","#ff8716"],["#cce4d1","#d2e1a7","#d8de7d","#dedb53","#e4d829"],["#3b234a","#523961","#baafc4","#c3bbc9","#d4c7bf"],["#4d4250","#b66e6f","#cf8884","#e6a972","#f6d169"],["#f0c0a8","#f0d8a8","#a8c090","#789090","#787878"],["#5f545c","#eb7072","#f5ba90","#f5e2b8","#a2caa5"],["#cccc66","#a6bf73","#80b380","#59a68c","#339999"],["#fdefb0","#e7a8b1","#b998b3","#77779d","#4771a3"],["#473334","#b3c8a7","#ffebb9","#e3536c","#da1a29"],["#dae5ab","#e9a385","#fa154b","#87313f","#604e48"],["#e6e6e6","#aae6d9","#c8cbc1","#e6b0aa","#a1a1a1"],["#3b3f49","#fdfaeb","#faeddf","#f3c6b9","#f7a29e"],["#f23e02","#fef5c8","#00988d","#2c6b74","#013750"],["#332d27","#8a0015","#e30224","#85725f","#fae1c0"],["#bfe0c0","#160921","#f06e75","#f2af60","#d0d26f"],["#eddbc4","#a3c9a7","#ffb353","#ff6e4a","#5c5259"],["#fbb498","#f8c681","#bec47e","#9bb78f","#98908d"],["#cb7ca2","#ed9da1","#c9e5af","#dceeb1","#fef9f6"],["#c95c7a","#de9153","#d6d644","#dcebaf","#14888b"],["#f2d786","#ff9784","#c09491","#a4c09a","#d4d9a1"],["#f2eabc","#54736e","#194756","#080000","#ff3b58"],["#ae0c3e","#afcca8","#f5eec3","#c7b299","#33211c"],["#000000","#8f1414","#e50e0e","#f3450f","#fcac03"],["#a88914","#91a566","#bed084","#e9e199","#faedca"],["#37193b","#e75a7a","#f59275","#f5c273","#aeb395"],["#bad3c6","#f9d9ac","#fca483","#f18886","#7b7066"],["#e8d7a9","#8eaa94","#6b666d","#6c3751","#52223c"],["#f0f0f0","#d8d8d8","#c0c0a8","#604848","#484848"],["#f05c54","#a17457","#5c735e","#3d615b","#434247"],["#ff1d44","#fbebaf","#74bf9d","#56a292","#1c8080"],["#fcbf6b","#a9ad94","#42302e","#f6daab","#dabd7b"],["#ff8482","#ffb294","#f8d8a5","#91be95","#635a49"],["#484848","#006465","#0f928c","#00c9d2","#beee3b"],["#680a1d","#3f1719","#fcef9c","#e8b666","#ba2339"],["#413249","#ccc591","#e2b24c","#eb783f","#ff426a"],["#880606","#d53d0c","#ff8207","#231d1e","#fcfcfc"],["#c5b89f","#feffd4","#9e2d4a","#450b1e","#21000f"],["#f7fd91","#d09e1e","#fa7a32","#f42a55","#261323"],["#5b1d99","#0074b4","#00b34c","#ffd41f","#fc6e3d"],["#079ea6","#1e0c42","#f0077b","#f5be58","#e3e0b3"],["#fcbf6b","#e58634","#657a38","#afab50","#a9ccb9"],["#cee1d8","#f6eee0","#fda664","#f04842","#83563f"],["#e0da96","#badda3","#94e0b0","#a6b5ae","#b88bad"],["#2b2823","#8fa691","#d4ceaa","#f9fadc","#cc3917"],["#c0d88c","#f7a472","#f07877","#fa2a3a","#0a5c5a"],["#343635","#d90057","#e88700","#77b8a6","#ffe2ba"],["#3e3433","#f07f83","#b29a78","#9eaf83","#75a480"],["#ffbd87","#ffd791","#f7e8a6","#d9e8ae","#bfe3c0"],["#c3e6d4","#f4f0e5","#e0c4ae","#e1918e","#e15e6e"],["#bd2a33","#d6aa26","#93a31c","#408156","#30374f"],["#243757","#3a5f6f","#dad5b7","#c2b79b","#665e52"],["#e1c78c","#eda011","#db6516","#7a6949","#adad8e"],["#eb445b","#f5938b","#f0cdab","#f1e7c5","#b6d4bb"],["#d0cf75","#f8764e","#da2644","#90044a","#440a2a"],["#185b63","#c0261c","#ba460d","#c59538","#404040"],["#40ffdc","#00a9d4","#1c3166","#240047","#1c0021"],["#5e1f28","#8a2f2e","#ae5543","#f7bb75","#83764c"],["#f1d989","#3e3932","#0fbab7","#000c0c","#e2e3a9"],["#e46d29","#ba4c57","#4e3a3b","#a59571","#d0bc87"],["#eb7f7f","#eb9a7f","#ebb57f","#ebd07f","#ebeb7f"],["#e2d9db","#f2e5f9","#d9e1df","#ff8a84","#fe6763"],["#f3d597","#b6d89c","#92ccb6","#f87887","#9e6b7c"],["#e0d1ed","#f0b9cf","#e63c80","#c70452","#4b004c"],["#e84d5b","#eae2cf","#b4ccb9","#26979f","#3b3b3b"],["#13141a","#a90448","#fb3640","#fda543","#17c69b"],["#5a5239","#190a12","#b3c9c1","#cec7b6","#eee9c7"],["#0d0f36","#294380","#69d2cd","#b9f1d6","#f1f6ce"],["#e4e6c9","#e6dac6","#d6c3b9","#c2b48a","#b37883"],["#c9b8a8","#f8af8c","#a24d52","#5a3044","#391d34"],["#58706d","#4b5757","#7c8a6e","#b0b087","#e3e3d1"],["#faefc2","#a4ac9d","#a27879","#a4626c","#f05d77"],["#e6ac84","#ad9978","#619177","#161618","#594c2a"],["#855f30","#9ec89a","#eaba68","#ff5248","#f6ffb3"],["#5c4152","#b4585d","#d97f76","#f7d0a9","#a1c0ae"],["#bf9f88","#e8c8a1","#fce4be","#f6a68d","#f96153"],["#a8ab9b","#172a38","#ec4b5d","#f48773","#e0c590"]]';function xt(s=1){return Math.random()*s}var yf=JSON.parse(xf),io=class{constructor(e=[]){this.excluded=e}nextPalette(){let e;do e=xt(yf.length)|0;while(this.excluded.indexOf(e)!==-1);this.current=yf[e]}nextColor(){let e=this.current;return e[xt(e.length)|0]}};var _i={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};var Nt=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}},Rg=new ln(-1,1,1,-1,0,1),ro=new ze;ro.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3));ro.setAttribute("uv",new Be([0,2,0,0,2,0],2));var sr=class{constructor(e){this._mesh=new Je(ro,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _s=class extends Nt{constructor(e,t){super();this.textureID=t!==void 0?t:"tDiffuse",e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Kn.clone(e.uniforms),this.material=new pt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new sr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}};var Ms=class extends Nt{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},so=class extends Nt{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ao=class{constructor(e,t){if(this.renderer=e,t===void 0){let n={minFilter:tt,magFilter:tt,format:Qe},i=e.getSize(new V);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new at(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],_i===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),_s===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new _s(_i),this.clock=new Ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ms!==void 0&&(a instanceof Ms?n=!0:a instanceof so&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}};var fb=new ln(-1,1,1,-1,0,1),vf=new ze;vf.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3));vf.setAttribute("uv",new Be([0,2,0,0,2,0],2));var oo=class extends Nt{constructor(e,t,n,i,r){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}};var co={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var mn=class extends Nt{constructor(e,t,n,i){super();this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new V(e.x,e.y):new V(256,256),this.clearColor=new se(0,0,0);let r={minFilter:tt,magFilter:tt,format:Qe};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new at(a,o,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new at(a,o,r);u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let m=new at(a,o,r);m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),o=Math.round(o/2)}co===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");let c=co;this.highPassUniforms=Kn.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new V(a,o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,_i===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");let h=_i;this.copyUniforms=Kn.clone(h.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new pt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:cr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new Zn,this.fsQuad=new sr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new V(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=mn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=mn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new pt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};mn.BlurDirectionX=new V(1,0);mn.BlurDirectionY=new V(0,1);function _f(s){let e=new Ue({antialias:!0});e.shadowMap.enabled=!0,e.shadowMap.type=Ps,e.physicallyCorrectLights=!0,document.body.appendChild(e.domElement);let t=new ct;t.near=.2,t.far=5;let n=new ps("white",.7);n.position.set(1,2,1),n.castShadow=!0;let i=.4;n.shadow.camera.top=i,n.shadow.camera.bottom=-i,n.shadow.camera.left=-i,n.shadow.camera.right=i,n.shadow.camera.near=.01,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,s.add(n),s.add(new ms("white",.3));let r=new oo(s,t),a=new mn(new V(window.innerWidth,window.innerHeight),2.5,.4,.95),o=new ao(e);return o.addPass(r),o.addPass(a),function(l){if((e.width!==innerWidth||e.height!==innerHeight)&&(e.setSize(innerWidth,innerHeight),o.setSize(innerWidth*2,innerHeight*2),t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix()),l){let f=xt(7),h=xt(.3)+.4,d=Math.cos(f)*h,u=Math.sin(f)*h;t.position.set(d,h,u),t.lookAt(s.position)}o.render()}}function Mf(s){let e=document.createElement("canvas"),t=e.width=e.height=1024,n=e.getContext("2d"),i=(u=1)=>Math.random()*u,r=i(2)|0,a=0,o=1+t*.8*i(.01);return f({x:t/2,y:t/2,s:t}),e;function c(u,m){if(i()>.7)return s.nextColor()+"80";let{x:b,y:x}=u,p=n.createRadialGradient(b-i(m)+m/2,x-i(m)+m/2,0,b-i(m)+m/2,x-i(m)+m/2,m);return i()>.5&&(p=n.createLinearGradient(b+i(m),x+i(m),b+i(m),x+i(m))),p.addColorStop(0,s.nextColor()),p.addColorStop(i(1),s.nextColor()),p.addColorStop(1,s.nextColor()),p}function l(u,m,b){n.translate(u.x,u.y),n.rotate(b),n.fillStyle=n.strokeStyle=c(u,m),i()>.1?n.fillRect(-m/2,-m/2,m,m):n.strokeRect(-m/2,-m/2,m,m),n.rotate(-b),n.translate(-u.x,-u.y)}function f(u){let m=u.s;if(u.s<0)return;if(i()>.9&&m<t/2)return h(u,u.s,i()>.5?i(.1)-.05:0);l(u,u.s,(i()-.5)*d(m,o)),m=m/2-o*1.5;let b=m/2+o*.5,x=()=>i(a)-a/2;i()>.2&&f({s:m,x:u.x-b+x(),y:u.y-b+x()}),i()>.2&&f({s:m,x:u.x+b+x(),y:u.y-b+x()}),i()>.2&&f({s:m,x:u.x-b+x(),y:u.y+b+x()}),i()>.2&&f({s:m,x:u.x+b+x(),y:u.y+b+x()})}function h(u,m,b){m+=2;let x=i(2)|0;for(;m>0;)l(u,m,b),m-=o*3+2,x&&(b+=(i()-.5)*d(m,o))}function d(u,m){if(r)return 0;let b=(u/2-m)*Math.sqrt(2);return Math.asin(u/2/b)-Math.PI/4}}var wf,ws=[];function Sf(){wf=xt()>.95,ws=[]}function Ss(s){let e=Math.random()*9|0;if(!ws[e]){wf&&s.nextPalette();let t=new is(Mf(s));t.mapping=Li,ws[e]=t}return ws[e]}function Ts(s,e,t,n){let i={};s==="wall"&&(i.color=new se(e.nextColor())),s==="roof"&&(i.map=Ss(e)),Math.random()>.5&&(i.metalnessMap=Ss(e),i.metalness=Math.random()*.9,i.envMap=Ss(e)),i.roughnessMap=Ss(e),i.roughness=Math.random();let r=new tr(i);if(s==="wall"){let a=["#include <common>"];a.push(`
            uniform float s;
            uniform float h;
            uniform float rnd;
            
            float noise1d(float x){
                return fract(sin(x*1234.56)*177.44);
            }
            
            float hue2rgb(float f1, float f2, float hue) {
                if (hue < 0.0)
                    hue += 1.0;
                else if (hue > 1.0)
                    hue -= 1.0;
                float res;
                if ((6.0 * hue) < 1.0)
                    res = f1 + (f2 - f1) * 6.0 * hue;
                else if ((2.0 * hue) < 1.0)
                    res = f2;
                else if ((3.0 * hue) < 2.0)
                    res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
                else
                    res = f1;
                return res;
            }

            
            vec3 hsl2rgb(vec3 hsl) {
                vec3 rgb;
                
                if (hsl.y == 0.0) {
                    rgb = vec3(hsl.z); // Luminance
                } else {
                    float f2;
                    
                    if (hsl.z < 0.5)
                        f2 = hsl.z * (1.0 + hsl.y);
                    else
                        f2 = hsl.z + hsl.y - hsl.y * hsl.z;
                        
                    float f1 = 2.0 * hsl.z - f2;
                    
                    rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));
                    rgb.g = hue2rgb(f1, f2, hsl.x);
                    rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));
                }   
                return rgb;
            }
            
            vec3 hsl2rgb(float h, float s, float l) {
                return hsl2rgb(vec3(h, s, l));
            }

            
        `);let o=["#include <dithering_fragment>"];o.push(`
            vec2 uv = vUv;
            
            if (rnd>0.5)
                uv *= 2.;
            
            uv.x *= s/h;
            float id = floor(uv.x) + floor(uv.y)*777.77;
            
            uv = fract(uv) - 0.5;
            
            vec3 windowColor;
            float nz = noise1d(id*rnd + rnd);
            windowColor = vec3(nz < 0.7 ? 0.0 : 1.0);
            
            
            nz = noise1d(id*rnd - rnd*3.3);
            if (nz < 0.1)
                windowColor = hsl2rgb(noise1d(id*rnd - rnd*7.7), 1.0, 0.9);
               
                
            float windowSdf = rnd < 5. ? 
                length(uv) + noise1d(id*rnd)*0.1 :
                sqrt(length(uv*uv))
                ;   
                        
            gl_FragColor.rgb = mix(
                gl_FragColor.rgb,
                windowColor,
                smoothstep( 0.2, 0.1, windowSdf )
            );
            
            
        `),r.onBeforeCompile=c=>{c.uniforms.s={value:t},c.uniforms.h={value:n},c.uniforms.rnd={value:Math.random()*10},c.fragmentShader=c.fragmentShader.split(a[0]).join(a.join(`
`)).split(o[0]).join(o.join(`
`))}}return r}var Es=new io,As,Mi,ar,Ls,Tf,lo=new Gi,Ef=_f(lo),Cg=new cn(1,1,1),Pg=new Xi(1.8,1.8,.01,64);function Ig(s,e,t){Ls++;let n=Ts("roof",Es),i=Ts("wall",Es,e,t),r=new Je(Cg,[i,i,n,null,i,i]);r.scale.set(e,t,e),r.castShadow=!0,r.receiveShadow=!0,s.add(r)}function Af(){Es.nextPalette(),Sf(),Mi=.005*(Math.random()+1),Tf=Math.random()>.5,ar&&lo.remove(ar),ar=new Le,lo.add(ar);for(let s=-1;s<2;s++)for(let e=-1;e<2;e++){let t=new Le;t.position.set(s,0,e),ar.add(t),Dg(t,s===0&&Pg===0?600:100)}Ef(!0)}function Dg(s,e){Ls=0;let t;for(;Ls<e;)Ls=0,t&&s.remove(t),t=new Le,s.add(t),Ke(t,1)}function Ke(s,e){if(e<0)return;let t=Math.random()*.03+.005;Ig(s,e,t);let n=Math.random();n>.6?Fg(s,e,t):n>.1?Ng(s,e,t):Ug(s,e/2)}function lt(s,e,t,n){let i=new Le;return i.position.set(e,n,t),s.add(i),i}function Fg(s,e,t){As=0,Math.random()>.7?zg(s,e,t):Bg(s,e,t)}function Bg(s,e,t){e=(e-Mi*3)/2;let n=e/2+Mi/2,i=.1;xt(1)>i&&(i+=.2,Ke(lt(s,+n,+n,t),e)),xt(1)>i&&(i+=.2,Ke(lt(s,-n,+n,t),e)),xt(1)>i&&(i+=.2,Ke(lt(s,+n,-n,t),e)),xt(1)>i&&Ke(lt(s,-n,-n,t),e)}function zg(s,e,t){e=e-Mi*4,Ke(lt(s,0,0,t),e/2);let n=e/2-e/8+Mi,i=e/8+Mi/2;e/=4,Ke(lt(s,-n,-n,t),e),Ke(lt(s,-n,+n,t),e),Ke(lt(s,+n,-n,t),e),Ke(lt(s,+n,+n,t),e),Ke(lt(s,-i,-n,t),e),Ke(lt(s,-i,+n,t),e),Ke(lt(s,+i,-n,t),e),Ke(lt(s,+i,+n,t),e),Ke(lt(s,-n,-i,t),e),Ke(lt(s,-n,+i,t),e),Ke(lt(s,+n,-i,t),e),Ke(lt(s,+n,+i,t),e)}function Ng(s,e,t){As||(As=Math.sign(Math.random()-.5)*.1);let n=new Le;Tf&&Math.random()>.7&&(n.rotation.y=As),n.position.y=t,s.add(n),Ke(n,e*.9)}function Ug(s,e){if(Math.random()>.8)return;let t=new Je(new er(1,xt(1)>.7?3+xt(3)|0:64,6),Ts("roof",Es));t.scale.set(e,.02,e),s.add(t)}Af();addEventListener("pointerdown",s=>s.button===0&&Af());addEventListener("resize",Og(()=>Ef(!1),100,!1));function Og(s,e,t){let n;return function(){let r=this,a=arguments,o=function(){n=null,t||s.apply(r,a)},c=t&&!n;clearTimeout(n),n=setTimeout(o,e),c&&s.apply(r,a)}}})();
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
