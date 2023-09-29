function shuffle(arr){
    return arr.sort(()=> Math.random()-0.5)
}

const ratio = innerWidth/innerHeight;

const lib = `


float sfract(float x){

float w = .1;
  
  return min( fract(x)/(1.-(w)), fract(-x)/(w) );
}

float smod(float x, float n) {
    
    return (sfract((x)/(n))*(n));
}





vec2 sfract(vec2 x){
  x.x = sfract(x.x);
  x.y = sfract(x.y);
  return x;
}


float sfloor(float x) {
    float c = 5.;
    float a = fract(x);
    float b = floor(x);
    return ((pow(a,c)-pow(1.-a,c))/2.)+b;
}

vec2 sfloor(vec2 x){
  x.x = sfloor(x.x);
  x.y = sfloor(x.y);
  return x;
}

vec3 permute(vec3 x) { 
    return mod(((x*34.0)+1.0)*x, 289.0); 
}

float noise(vec2 v){
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
   

float fbm(vec2 x) {
	float v = 0.0;
	float a = 0.5;
	for (int i = 0; i < 7; ++i) {
		v += a * cos(noise(x + a));
		x =  x *(2.) + float(i);
		a *= 0.5;
	}
	return v;
}


mat2 rot(float a){
  return mat2(
    cos(a), sin(a),
   -sin(a), cos(a)
  );
}

uniform vec2 r = [c.width,c.height];

`;


function prog(code){

    if(code.includes('##')){
        let parts = code.split('##');
        let lines = parts[1].split('\n');
        let count = +lines.shift();
        let expr = lines.shift();
        let cycle = many(count,
            () => expr).join('\n')
        code = parts[0] + cycle
            + lines.join('\n');
    }




    return webglProgram(lib + code);
}


let palettes = "F2F1DFF2BD1DD94711591812181212#e8d5b9c07a38df3146f5b3490e2430#f3efeff7b32b0c6291b80c09091e05#f1faeee63946a8ccdc457b9d1d3557#dff3e4bca2cd7d73c6684da2171738#dccfa39f8f6544443bc6110f12130b#fff7f4ffc6c6ff2f4ec60a5f820a5f#faf1dcff871fb8000041764b29293d#ccc9a1f0ffcea53f2b60290e280004#ecf39e90a9554f772d31572c132a13#fdf0d5669bbcc1121f780000003049#e0fbfc98c1d9ee6c4d3d5a80293241#fbfffe96031a1b1b1e6d676efaa916#fffcf2ccc5b9503d39252422eb5e28#8ecae6219ebc023047ffb703fb8500#000000FFFFFFdddddd444444888888#25232370798cf5f1eddad2bca99985#ffffff375ba9000000d6d6d6fca311#f4ca55284862d6644a3a8acafffeef#C20F00FFDD22ffffff2374C6000000#e4e1dbD96B0BBF13048C13084465A6#f4ebc5F29F05233479569cc7F20505#001427708d81f4d58dbf06038d0801#8c1c13bf4342e7d7c1a78a7f735751".split("#").map(e=>e.match(/.{6}/g).map(e=>"#"+e))
