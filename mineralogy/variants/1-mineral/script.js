palette(pick(palettes));

let c = createCanvasWebgl(ratio, 3);

appendCanvas();

const redraw = webglProgram(`

${lib}

float body(float br, float x){
 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 uv.x *= r.x / r.y;

float body;
body += smoothstep(
  br, br+.001, length(uv-0.1)+0.5*fbm(5.*uv+x));

body = min(body, smoothstep(
  br, br+.001, length(uv+0.1)+0.3*fbm(5.*uv+x)));


return body/2.;
}
out vec4 o;
void main() {

 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 uv.x *= r.x / r.y;
 vec2 UV = uv;
 uv *= 1.;

uv = uv+ fbm(uv+RND)*1.5;
 float lines = 55.;

 float fl = floor(uv.y*lines);
 float fr = fract(uv.y*lines);
 uv.x += fbm(vec2(fl, RND));
 uv += fbm(uv)*0.1;

 float x = RND*5.+5.*uv.x*sin(fl);//*fbm(vec2(fl, RND));
  
 x += (1.+RND)*fbm(uv);
        
       
 vec3 c = mixColor(floor(x));

 float s;
 s += -pow(1.-fract(x+fl*0.01),9.);
 s += -pow(1.-fr,9.);
        
        //
        
        
 float l;
  l += pow(fract(x),9.);
  l += pow(fr,9.);


 //c = mix(c, mixColor(0.), body(0.45,RND));

 
 //s = mix(s, 0., body(0.5,RND));

 //l = mix(l, 0., body(0.5,RND));
        
 o = vec4(l/2.+s+c, 1.0 );  
   
 
}`);

    
redraw();
