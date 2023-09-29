palette(shuffle(pick(palettes)));

let c = createCanvasWebgl(ratio, 3);

appendCanvas();

const redraw = webglProgram(`

${lib}

float body(float X, float br, float x){

//if (mod(X, 4.)< .5)
 // return 1.;

if (mod(X, 5.)< 1.0)
  return 0.;

 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 uv.x *= r.x / r.y;

vec2 b1 = 0.5*vec2(RND-.5, RND-.5);
vec2 b2 = 0.5*vec2(RND-.5, RND-.5);


float body;
body += smoothstep(
  br, br+.001, fbm(9.2*uv)*length(uv-b1));

body = min(body, smoothstep(
  br, br+.001, fbm(9.3*uv)*length(uv-b2)));


return body;
}
out vec4 o;
void main() {

 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 uv.x *= r.x / r.y;
 vec2 UV = uv;
 uv *= 1.;

 uv = uv+ fbm(uv+RND)*1.5;
 float lines = 33.+RND*33.;

 float fl = floor(uv.y*lines);
 float fr = fract(uv.y*lines);
 uv.x += fbm(vec2(fl, RND));
 uv += fbm(uv)*0.1;

 float x = RND*5.+5.*uv.x*sin(fl);
  //x+= sin(fl*77.);;
 x += (.1+RND)*fbm(uv);

 float k = smoothstep(1.,.9,sin((UV.x+fbm(RND*66.+UV))*111.));
        
 vec3 bg = mixColor(3.);
 bg = mix(bg, mixColor(3.)-0.8, k);
 //bg += sin((UV.y*2222.);
       
 vec3 c = mixColor(floor(x));

 float s;
 s += -pow(1.-fract(x+fl*0.01),9.);
 s += -pow(1.-fr,9.);
        
        //
        
        
 float l;
  l += pow(fract(x),9.);
  l += pow(fr,9.);


 c = mix(c, bg, body(x,0.2,RND));

 
 //s = mix(s, 0., body(x,0.2,RND));

 //l = mix(l, 0., body(x,0.2,RND));
        
 o = vec4(l/2.+s+c, 1.0 );  
   
 
}`);



    
redraw();
