
  // palettes_generated.ts
  var palettes = "Lacaille 9352;888888FFFFFFdddddd444444000000,Procyon;fffcf2ccc5b9eb5e28503d39252422,Proxima Centauri;F2F1DFF2BD1DD94711591812181212,Rigil Kentaurus;dff3e4bca2cd7d73c6684da2171738,Toliman;001427708d81f4d58dbf06038d0801,Wolf 359;faf1dcff871fb800008609091c1c2a,Lalande 21185;ccc9a1f0ffcea53f2b60290e280004,Gliese 65;fdf0d5669bbcc1121f780000003049,Ross 154;fbfffe96031a1b1b1e000000248dcb,DX Cancri;dbdbdbefb12aa400002585b1000000,Epsilon Indi;C20F00FFDD22ffffff2374C6000000;f,Kruger 60;fdf0d5003049669bbc780000c1121f;F,EZ Aquarii;e63946f1faeea8dadc457b9d1d3557;f,Eta Cassiopeiae;000814001d3d003566ffc300ffd60a,WISE 0855-0714;03045e0077b600b4d890e0efcaf0f8,82 G. Eridani;00000014213dfca311e5e5e5ffffff;F,Epsilon Eridani;0a1128001f540340781282a2fefcfb,Luhman 16;fff7f4ffc6c6ff2f4ec60a5f820a5f,Groombridge 34;25232370798cf5f1eddad2bca99985;F".split(",").map((x) => x.split(";"));

  // frag.glsl
  var frag_default = "#define F float\n#define F2 vec2\n#define F3 vec3\n#define F4 vec4\n\n// smooth fract\nF sF(F x){ return min( fract(x)/.9, fract(-x)/.1 ); }\n\nF3 pM(F3 x) { return mod((x*34.+1.)*x, 289.); }\n\nF nz(F2 v){\n    F4 C = F4(.211324865405187, .366025403784439, -.577350269189626, .024390243902439);\n    F2\n        i  = floor(v + dot(v, C.yy)),\n        x0 = v -   i + dot(i, C.xx),\n        i1 = (x0.x > x0.y) ? F2(1, 0) : F2(0, 1);\n    F4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n    i = mod(i, 289.);\n    F3\n        p = pM(pM(i.y + F3(0, i1.y, 1)) + i.x + F3(0, i1.x, 1)),\n        m = max(.5 - F3(dT(x0), dT(x12.xy), dT(x12.zw)), .0),\n        x = 2. * fract(p * C.www) - 1.,\n        h = abs(x) - .5,\n        a0 = x - floor(x + .5);\n    m = m*m*m*m;\n    m *= 1.79284291400159 - .85373472095314 * (a0*a0 + h*h);\n    return 130. * dot(m, F3(a0.x  * x0.x  + h.x  * x0.y, a0.yz * x12.xz + h.yz * x12.yw));\n}\n\nF G(F2 x) {\n    F v = .0;\n    F a = .5;\n    for (int i = 0; i < 7; ++i) {\n        v += a * cos(nz(x + a));\n        x =  x * 2. + F(i);\n        a *= .5;\n    }\n    return v;\n}\n\nmat2 A(F a){\n    F c = cos(a), s = sin(a);\n    return mat2(c, s, -s, c);\n}\n\n///\n\nF sm(s2 t, F n) {\n    return texture2D(t, gc + n).x;\n}\n\n// lines texture\nF lT(F2 a, F2 b){\n    return .1* (max(nz(a*333.+floor(a.x*2222.)), sin(nz(b)*55.+a.x*2222.)));\n}\n\n// grid texture\nF gT(F2 a, F2 b){ return lT(a, b)-lT(a.yx, b.yx); }\n\n// empty texture\n\nF SP(F2 c){\n    c = c * A(R * 4.);\n    if (NS)\n        c += nz(c*11.*R)*.01;\n    return sP;\n}\n\nF MP(F2 c) {\n    return mP;\n}\n\nF2 CF(F2 a, F2 b, F2 c) {\n\n    F f = sm(MK, (Nf?.2:.02)*nz(c+R*999.+T*4.));\n\n    // noised divider\n    F r = R*999., e = a.y+nz(r+a+G(c+r+9.+T)); // edge\n    f = max(f, ss(.07, .05, abs(e)));\n\n    // noised border\n    f = min(f, L(b) + abs(G(R*999.+b*1.+T)-.5));\n\n    return F2(f, e);\n}\n\n\nvoid main() {\n\n    F2 P = gc-.5;\n//    P /= MS;\n    P.x *= r.x / r.y;\n\n    F2 O = P, I = P;\n    if (S1) P.x = sB(P.x);\n    P = P * A(R*7.);\n\n    P += F2(\n        G(P+R*1111.)*(1.1+R*.6)-.5,\n        G(P+R*1111.)*(1.1+R*.6)-.5\n    );\n\n    F t = tX(I, P);\n    P += t*nz(I)*.02;\n\n    F x = MP(P), b = L(P), aa = SP(I);\n    x = mix(x, aa, ss(.8, .79, b));\n\n    F2 fr = CF(I, O, P);\n\n    if (fr.y<0.)\n        x = 1.-x*.3;\n\n    x = smod(x, 5.);\n\n    F zz = 1. + R*2. + I.x;\n    x = mix(x, x>zz-.5&&x<zz+.5?x/2.:x/5., x>4.5?fr.x/12.:fr.x);\n    x = mix(x, x*.1, sm(OL,.0));\n\n    if (fC) x -= sF(x);\n\n    F3 c = mC(x+t);\n\n    c += tX(I*A(floor(x+I.x)*17.), P);\n\n    // light\n    F fv = G(I);\n    if (lt) c += pow(sF(x - .2 + fv), 9.) * .3;\n\n    // shadow\n    if (sD) c -= pow(1. - sF(x + .2 + fv), 9.) * .7;\n\n    gl_FragColor = F4(clamp(c, 0. , 1.), 1);\n}";

  // index.ts
  var alba = window.alba;
  var { PI, min, max, sin, pow, abs } = Math;
  var PRNG = (hash) => {
    let t2, x = new Uint32Array([0, 1, 2, 3].map((i) => parseInt(hash.substr(i * 8, 8), 16)));
    return (_) => {
      t2 = x[3], x[3] = x[2], x[2] = x[1], x[1] = x[0], t2 ^= t2 << 11, t2 ^= t2 >>> 8, x[0] = t2 ^ x[0] ^ x[0] >>> 19;
      return x[0] / 4294967296;
    };
  };
  var PRNGx2 = (hash) => {
    let prng1 = PRNG(hash.substring(2));
    let prng2 = PRNG(hash.substring(34));
    let current = prng1;
    return (_) => (current === prng1 ? prng2 : prng1)();
  };
  var r = PRNGx2(alba.params.seed);
  var rnd = (x = 1, y = 0) => y + r() * x;
  var rndi = (x) => rnd(x) | 0;
  var rnds = (x = 1) => rnd(x) - x / 2;
  var rndb = (x = 0.5) => rnd() > x;
  var pick = (arr) => arr[rndi(arr.length)];
  var many = (x, fn) => [...Array(x | 0)].map((_, i) => fn(i));
  var c22 = "(1.+R)*11.";
  var sdfShapes = [
    // cells
    "min(4.*sF(3.*c.y),(R*3.+1.)*sF(c.x*(R*7.+7.)))+mix(c.x*(R*5.+4.),c.y*(R*5.+4.),c.y)",
    // spiral
    `L(c-R2+.5)*floor(${c22})+atan(c.y-R+.5,c.x-R+.5)*(sign(R-.5)*11.)`,
    // circles
    `L(c-R2+.5)*${c22}`,
    // lines
    `sin(c.y)*${c22}`,
    // rays
    `sin(atan(c.y-R+.5,c.x-R+.5))*${c22}`,
    // arcs
    `L(c+F2(0,1))*${c22}`
  ];
  var rr = rnd();
  var rot = (ctx2) => ctx2.rotate(2 * PI * [0, 0.5, stencilRotation][rr * 3 | 0]);
  var stencils = [
    (_) => fillCircle(0, 0, 0.3 + rr * 0.1),
    (_) => {
      rot(_);
      _.fill(new Path2D(`M-.5,1L0,-1L.5,1`));
    },
    (_) => {
      let s = rr * 0.3 + 0.3;
      rot(_);
      fillRect(-s / 2, -1, s, 2);
    },
    (_) => fillCircle(rr - 0.5, -1.5, 1.5)
  ];
  var palette = getParameter("palette", palettes, rnd());
  var setup = palette[2] || "";
  var bool = (key, chance) => {
    if (setup.includes(key))
      return 0;
    if (setup.includes(key.toUpperCase()))
      return 1;
    return rndb(chance);
  };
  function getParameter(name, orElse, rndValue) {
    if (+localStorage.getItem(name)) {
      return orElse[+localStorage.getItem(name) - 1];
    }
    return rndValue ? orElse[rndValue * orElse.length | 0] : orElse;
  }
  var flipPalette = getParameter("flipPalette", [false, true], bool("f", 0.5) ? 0.1 : 0.9);
  var frameTextureSize = getParameter("frameTextureSize", pick([33, 99, 333]));
  var noisyStraightLines = getParameter("noisyStraightLines", rndb(0.7));
  var abstractStencil = getParameter("abstractStencil", [false, true], rnd(0.7));
  var stencilRotation = getParameter("stencilRotation", rnd());
  var light = getParameter("light", [false, true], rnd(0.6));
  var shade = getParameter("shade", [false, true], rnd(0.4));
  var flatColor = getParameter("flatColor", [false, true], rnd(0.9));
  var split = getParameter("split", rndb(0.9));
  var symmetry = getParameter("symmetry", rndb(0.95));
  var textureMode = getParameter("textureMode", rndi(7));
  var stencil = getParameter("stencil", stencils, rnd());
  var secondaryPattern = getParameter("secondaryPattern", sdfShapes, rnd());
  var ratio = 5 / 7;
  var defines = `ss smoothstep
s2 sampler2D
dT(x) dot(x,x)
gc gl_FragCoord.xy/r.xy 
L length
sB(x) sqrt(x*x+3e-6)
mC(x) mix(cL(x),cL(x+1.),fract(x))
smod(x,n) sF(x/n)*n
eT(x,y) 0.
F float
F2 vec2
F3 vec3
F4 vec4
NS ${noisyStraightLines}
Nf ${abstractStencil}
sD ${shade}
lt ${light}
tX ${"glglgle"[textureMode]}T
sP ${secondaryPattern}
mP ${sdfShapes[0]}
fC ${flatColor}
S1 ${symmetry}`.split("\n").map((d) => "#define " + d).join("\n");
  var ctx;
  var initCanvas2d = (c) => {
    const ct = c.getContext("2d");
    const { width: w2, height: h2 } = c;
    let sc = min(w2, h2);
    ct.translate(w2 / 2, h2 / 2);
    ct.scale(sc, sc);
    ctx = ct;
  };
  var fillStyle = (style) => ctx.fillStyle = style;
  var fillRect = (x, y, w2, h2) => ctx.fillRect(x, y, w2, h2);
  var fillCircle = (x, y, r2) => (ctx.beginPath(), ctx.ellipse(x, y, r2, r2, 0, 0, PI * 2), ctx.fill());
  var fitSize = (c, ratio2, k) => {
    const w2 = innerWidth;
    const h2 = innerHeight;
    const wider = w2 / h2 < ratio2;
    const s = c.style;
    c.width = !wider ? h2 * ratio2 : w2;
    c.height = wider ? w2 / ratio2 : h2;
    s.width = c.width + "px";
    s.height = c.height + "px";
    c.width *= k;
    c.height *= k;
  };
  var createCanvas = (_) => {
    return document.createElement("canvas");
  };
  var makeTexture = (targetWidth) => {
    const canvas2 = createCanvas();
    canvas2.width = targetWidth;
    canvas2.height = targetWidth / ratio;
    initCanvas2d(canvas2);
    fillStyle("#fff");
    fillRect(-1, -1, 2, 2);
    fillStyle("#000");
  };
  makeTexture(999);
  stencil(ctx);
  var t1 = ctx;
  var [ss, w, h] = pick([[0.08, 0.92, 1.32], [0.16, 0.84, 1.24], [0.16, 0.84, 0.84], [0.16, 0.84, 1.1]]);
  makeTexture(frameTextureSize);
  fillRect(-w / 2, -h / 2, w, h);
  fillStyle("#fff");
  if (split) {
    let vv = (x) => (_) => fillRect(x - ss / 4, -1, ss / 2, 2);
    let hh = (y) => (_) => fillRect(-1, y - ss / 4, 2, ss / 2);
    let dx = (1 - ss / 4) / 6;
    let dy = h / 6;
    pick([
      [hh(0)],
      [vv(0)],
      [hh(-dy), hh(dy)],
      [vv(-dx), vv(dx)]
    ]).map((el) => el());
  }
  var canvas = createCanvas();
  fitSize(canvas, ratio, alba.params.isRenderer ? devicePixelRatio : 4);
  document.body.append(canvas);
  var gl = canvas.getContext("webgl", {
    preserveDrawingBuffer: true
  });
  var p = palette[1].split(/(.{6})/).filter((x) => x);
  var paletteShaderPart = (palette2) => {
    const c = (s, i) => parseInt(s.substr(i, 2), 16) / 255;
    const v = (x) => `F3(${c(x, 0)},${c(x, 2)},${c(x, 4)});`;
    return `F3 cL(F x){
x=mod(x,5.);${many(palette2.length, (i) => `if(x<${i + 1}.)return ${v(palette2[i])}`).join("")}}`;
  };
  var code = `${defines}
uniform F T;
uniform s2 MK;
uniform s2 OL;
vec2 r = F2(${[canvas.width, canvas.height]});
${paletteShaderPart(flipPalette ? p : p.reverse())}
${frag_default}`;
  var patch = (what, on) => {
    return code = code.split(what).map((c, i, a) => {
      return c + (i + 1 < a.length ? on() : "");
    }).join("");
  };
  patch("R2", (_) => `F2(${many(2, (_2) => rnd())})`);
  patch("R", rnd);
  var shader = (src, type) => {
    const id = gl.createShader(type);
    gl.shaderSource(id, "precision highp float;\n" + src);
    gl.compileShader(id);
    gl.attachShader(pid, id);
  };
  var pid = gl.createProgram();
  shader(`attribute vec2 p;
void main(){gl_Position=vec4(p,0,1);}`, gl.VERTEX_SHADER);
  shader(code, gl.FRAGMENT_SHADER);
  gl.linkProgram(pid);
  gl.useProgram(pid);
  var bufferId = gl.createBuffer();
  var ab = gl.ARRAY_BUFFER;
  gl.bindBuffer(ab, bufferId);
  var loc = gl.getAttribLocation(pid, "p");
  gl.enableVertexAttribArray(loc);
  gl.bufferData(ab, new Float32Array([-1, 3, -1, -1, 3, -1]), gl.STATIC_DRAW);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  var getUniformLocation = (name) => gl.getUniformLocation(pid, name);
  var texture = (gl2, src, name, index) => {
    const texture2 = gl2.createTexture();
    gl2.activeTexture(gl2.TEXTURE0 + index);
    let t2d = gl2.TEXTURE_2D;
    gl2.bindTexture(t2d, texture2);
    const texParam = (key, value) => {
      return gl2.texParameteri(t2d, key, value);
    };
    texParam(gl2.TEXTURE_MIN_FILTER, gl2.LINEAR);
    texParam(gl2.TEXTURE_MAG_FILTER, gl2.LINEAR);
    let cl = gl2.CLAMP_TO_EDGE;
    texParam(gl2.TEXTURE_WRAP_S, cl);
    texParam(gl2.TEXTURE_WRAP_T, cl);
    let loc2 = getUniformLocation(name);
    gl2.uniform1i(loc2, index);
    gl2.texImage2D(
      t2d,
      0,
      gl2.RGBA,
      gl2.RGBA,
      gl2.UNSIGNED_BYTE,
      src.canvas
    );
  };
  texture(gl, t1, "MK", 1);
  texture(gl, ctx, "OL", 0);
  var animation;
  var t = 0;
  var pt = 0;
  canvas.onpointerdown = (_) => animation = !animation;
  var raf = requestAnimationFrame;
  var draw = (_) => {
    if (!_ || animation) {
      let dt = _ - pt;
      if (dt > 199) {
        animation = false;
      }
      t += dt / 2e5;
      gl.uniform1f(getUniformLocation("T"), t);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    pt = _;
    raf(draw);
  };
  draw(0);
  var boo = (x) => x ? "Yes" : "No";
  var grid = "Grid";
  var lines = "Lines";
  let textureModeName = [grid, lines, grid, lines, grid, lines, "No"];
  alba.setMetadata({
    Star: palette[0],
    Texture: textureModeName[textureMode],
    Mirror: boo(symmetry),
    Flat: boo(flatColor),
    Light: boo(light),
    Shade: boo(shade)
  });
  alba.setComplete(true);