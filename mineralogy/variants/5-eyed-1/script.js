let pal = shuffle(pick(palettes))
//pal.pop()
palette(pal);
let c = createCanvasWebgl(ratio, 4);
appendCanvas();



let centers = many(1, ()=> [rnds(0.5),rnds(0.5)])


let holes = centers.map(c => {
  return [
 c[0]+rnds(0.1),
 c[1]+rnds(0.1),
]
})

const patterns = `
pattern0 
pattern1 
patternRings
`.trim().split(" ");



const redraw = prog(`

float pattern1(vec2 uv){

return 3.*length(fract(10.*(uv))-RND);
  

}

float patternRings(vec2 uv){
 return 2.*length(fract(15.*(uv-RND))) ;
}


float pattern0(vec2 st){
  float x;

x += min(

  (2.+RND*2.)*fract(st.y*(RND*4. + 4.)) ,   
  (8.*RND + 2.)*fract(st.x*(RND*12. + 6.))

);

x += mix(st.x*9.,st.y*9., st.y);

  return x;
}




float centers(float id, vec2 uv) {

  float x;

  //x = log(3.*length(uv-0.1))+1.*log(length(uv  -vec2(${c})));

 ${centers.map(c => ` 
  x += log(length(uv  -vec2(${c})));
  `).join("\n")}



  x = mod(x, 5.);

  float d = 9.;

  ${holes.map(c => ` 
  d = min(d, length(uv-vec2(${c})));
  `).join("\n")}


  float edge = smoothstep(0.1,0.05, d);

  id = mix(id, x, edge);

  return id;
}



float body(float id,vec2 uv,vec2 UV){

float x = pattern0(uv);


float body = smoothstep(0.58,0.6,fbm(UV)*0.5+length(UV)*0.5);


x = mix(mod(x,5.), mod(id,5.), body);


  return x;
}











float shadow(float x, vec2 uv){
 float s;
 s += -pow(1.-fract(x),9.);
 s -= sin(uv.y*139.) * 0.1 + 0.1;
 return s;
}





float light(float x){
 float l;
 l += pow(fract(x),9.);
 return l/2.;
}





vec2 fbmuv(vec2 uv){
 uv *= .5 + RND*0.5;
 
vec2 nuv =  (0.5+RND) * vec2(
 fbm(uv+RND*1111.)*(1.1+RND*.6)-0.5,
 fbm(uv+RND*1111.)*(1.1+RND*.6)-0.5
);

 return uv + nuv;
}


out vec4 o;
void main() {
 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 uv.x *= r.x / r.y;
 
//uv.x = abs(uv.x);

 vec2 UV = uv;
uv = uv * rot(RND*7.);
 uv = fbmuv(uv);
 float x;
 x = ${pick(patterns)}(uv);
 x = body(x, uv, UV);
 x = centers(x, UV);
 vec3 c = mixColor(floor(x));
 c += shadow(x, uv);
 c += light(x);
 o = vec4(c, 1.0);  
}`);




redraw();
