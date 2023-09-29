let pal = shuffle(pick(palettes))
//pal.pop()
//pal.pop()
//pal.pop()
palette(pal);
let c = createCanvasWebgl(ratio, 4);
appendCanvas();

const redraw = prog(`
out vec4 o;
void main() {

 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 uv.x *= r.x / r.y;

 uv = uv * rot(RND*7.);
 vec2 UV = uv;
 uv *= .5 + RND*0.5;
 
vec2 nuv =  (0.5+RND) * vec2(
 fbm(uv+RND*1111.)*(1.1+RND*.6)-0.5,
 fbm(uv+RND*1111.)*(1.1+RND*.6)-0.5
);


;
uv = uv + nuv;

 float x = min(

  (2.+RND*2.)*fract(uv.y*(RND*4. + 4.)) ,   
  (4.*RND + 2.)*fract(uv.x*(RND*12. + 6.))

) + mix(uv.x*9.,uv.y*9., uv.y);


//x = mix(x, 0., uv.x);

float x1 = 5.*length(fract(15.*(uv-RND))) - floor(15.*uv.x);

 vec3 c = mixColor(floor(x));

 float s;
 s += -pow(1.-fract(x),9.);
 s -= sin(uv.y*139.) * 0.1 + 0.1;

 float l;
 l += pow(fract(x),9.);
        
 o = vec4(
  l/2.+s+c, 1.0 );  
   
 
}`);



    
redraw();
