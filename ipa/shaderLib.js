const shaderLib = `

#define ss smoothstep
#define F float
#define F2 vec2
#define F3 vec3
#define PI 3.1415

mat2 rot(float a) {
    F cs = cos(a), sn = sin(a);
    return mat2(cs,sn,-sn,cs);
}

F3 permute(F3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

F strangeNoise(vec2 xx) {
  vec3 p = vec3(xx, 0.);
  vec3 ip=floor(p),s=vec3(7,157,113); p-=ip;
  vec4 h=vec4(0,s.yz,s.y+s.z)+dot(ip,s);
  h=mix(fract(sin(h)*43758.5), fract(sin(h+s.x)*43758.5),p.x*float(${pick([1, 0.5, 1])}));
  h.xy=mix(h.xz,h.yw,p.y);
  return mix(h.x,h.y,p.z);
}

F snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

F fbm(vec2 x) {
  F v = 0.0;
  F a = 0.5;
  F2 shift = vec2(100.);
  mat2 rt = rot(.5);
  for (int i = 0; i < 7; ++i) {
    v += a * snoise(x);
    x =  rt*x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

`