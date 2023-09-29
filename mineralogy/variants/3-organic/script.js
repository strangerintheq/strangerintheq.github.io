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
 uv *= 1.;
 uv += .7*vec2(

fbm(uv+RND*1111.)*(1.1+RND*.6)-0.5,
fbm(uv+RND*1111.)*(1.1+RND*.6)-0.5

);
//uv = abs(uv);

 float x = min(4.*fract(3.*uv.y) , 4.*fract(uv.x*19.))  + mix(uv.x*9.,uv.y*9., uv.y);

 vec3 c = mixColor(floor(x));

 float s;
 s += -pow(1.-fract(x),9.);

 float l;
 l += pow(fract(x),9.);
        
 o = vec4(
  l/2.+s+c, 1.0 );  
   
 
}`);



    
redraw();
