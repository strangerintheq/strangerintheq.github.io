palette(shuffle(pick(palettes)));

let c = createCanvasWebgl(ratio, devicePixelRatio);

appendCanvas();


const redraw = webglProgram(`

${lib}

bool frame0 = ${rndb(0.2)};
bool framey = ${rndb(0.8)};
bool framex = ${rndb(0.8)};
float frameCellsSize = floor(RND*4.) + 3.;




float pattern0(vec2 st){
  float x;

x += min(

  (2.+RND*2.)*fract(st.y*(RND*4. + 4.)) ,   
  (8.*RND + 2.)*fract(st.x*(RND*12. + 6.))

);

return x;
}

float body(float X, float br, float x){

if (mod(X, 4.)< .5)
 return 1.;

if (mod(X, 5.)< 1.0)
  return 0.;

 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 uv.x *= r.x / r.y;
 

vec2 b1 = 0.5*vec2(RND-.5, RND-.5);
vec2 b2 = 0.5*vec2(RND-.5, RND-.5);


float body;
body += smoothstep(
  br, br+.001, 0.5*fbm(3.2*uv)+length(uv-b1));

body = min(body, smoothstep(
  br, br+.001, 0.5*fbm(3.3*uv)+length(uv-b2)));


float b =  abs(fract(0.5*fbm(uv*5.)+uv*rot(RND-0.5)*(2.+RND*4.)).x*2.-1.);

//body = smoothstep(x, x+0.01, b);


return body;
}







float frame(vec2 UV){

float ratio = r.x / r.y;
 float framePad = 0.02;
 float edge = 0.5-framePad;

 float x = 0.;

if (!frame0){
 return x;
}

x = max(x,
   smoothstep(edge, edge+0.01, 
    abs(UV.y)));

  x = max(x,
   smoothstep(edge, edge+0.01, 
    abs(UV.x/ratio)));


vec2 cells = abs(fract(UV*frameCellsSize*2.)-0.5);

if (framex)
  x = max(x, 
smoothstep(0.4,0.45, cells.x));

if (framey)
x = max(x, 
smoothstep(0.1,0.05, cells.y));

return x;

}



float thing(vec2 uv, float x){
  
  float th = 1.;
  float a = max(x, 1.);
  float b = smoothstep(0.2,0.22, length(uv));

  return mix(th, x, b);
}




out vec4 o;
void main() {
float ratio = r.x / r.y;
 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 
 uv.x *= ratio;
 vec2 UV = uv;
 uv *= 1.;

//if (ptx.x<0.)
 uv = uv+ fbm(uv+RND)*1.5;
 float lines = 33.+RND*33.;

 float fl = floor(uv.y*lines);
 float fr = fract(uv.y*lines);
 //uv.x += fbm(vec2(fl, RND));
 //uv += fbm(uv)*0.1;

 float x = RND*5.+5.*uv.x*sin(fl);
  //x+= sin(fl*77.);;
 x += (.1+RND)*fbm(uv);


//x = thing(UV, x);



 float k = smoothstep(1.,.9,sin((UV.x+fbm(RND*66.+UV))*111.));

 if (RND>0.5)
  x = pattern0(uv);

        
 vec3 bg = mixColor(3.);
 bg = mix(bg, mixColor(3.)-RND, k);
 bg = vec3(246,238,227)/255.;


 


 x = mix(x, x+2., frame(UV));
       
 vec3 c = mixColor(floor(x));

 float s;
 s += -pow(1.-fract(x+fl*0.01),9.);
 s += -pow(1.-fr,9.);
        
        //
        
        
 float l;
  l += pow(fract(x),9.);
  l += pow(fr,9.);


 c = mix(c, bg, body(x,0.7,RND));

 
 s = mix(s, 0., body(x,0.7+length(uv)/15.,RND));

s = mix(s, 0., frame(UV));



 l = mix(l, 0., body(x,0.6,RND));
        
 o = vec4(l/2.+s+c, 1.0 );  
   
 
}`);



    
redraw();
