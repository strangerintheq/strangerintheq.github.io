palette(shuffle(pick(palettes)));

let c = createCanvasWebgl(ratio, 1);

appendCanvas();

const patterns = `
pattern3
pattern0 
pattern1 
pattern2
patternRings
`.trim().split("\n");

const redraw = webglProgram(`


${lib}

bool frame0 = ${rndb()};
bool framey = ${rndb()};
bool framex = ${rndb()};
bool xshift = false;//${rndb()};
float frameCellsSize = floor(RND*4.) + 3.;








float pattern1(vec2 uv){

float x = 3.*length(sfract(25.*(uv.x))-RND);
float y = sfract(uv.y*10.);
x = mix(x, y, uv.y);
  x = smod(x,5.);

 return x;

}






float pattern3(vec2 uv){

uv = abs(uv*5.)-0.5;

float x = sin(uv.x*2./3.14)*uv.y*2.;

float y = sin(uv.y*3./3.14)*uv.x*5.;

 return smod(x+y,5.);

}






float patternRings(vec2 uv){

float scale = 10. + RND*5.;

vec2 id = sfloor(uv*scale);

 float x = 2.*length(sfract(scale*uv)) ;

x = smod(x,5.);

return x;
}






float pattern0(vec2 st){
  float x;

x += min(

  (2.+RND*2.)*sfract(st.y*(RND*4. + 4.)) ,   
  (8.*RND + 2.)*sfract(st.x*(RND*12. + 6.))

);

x += mix(st.x*9.,st.y*9., st.y);

x = smod(x,5.);

  return x;
}









float pattern2(vec2 st){
  float x;

x += min(

  (2.+RND*2.)*sfract(st.y*(RND*4. + 4.)) ,   
  (8.*RND + 2.)*sfract(st.x*(RND*12. + 6.))

);

return x;
}








float body(float X, float br, float x){

//if (smod(X, 4.)< .5)
 // return 1.;

//if (smod(X, 5.)< 1.0)
  //return 0.;

 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 uv.x *= r.x / r.y;
 

vec2 b1 = 0.5*vec2(RND-.5, RND-.5);
vec2 b2 = 0.5*vec2(RND-.5, RND-.5);


float body;
body += smoothstep(
  br, br+.001, 0.5*fbm(3.2*uv)+length(uv-b1));

body = min(body, smoothstep(
  br, br+.001, 0.5*fbm(3.3*uv)+length(uv-b2)));

if (RND>0.5)
 return body;

float b =  abs(sfract(

0.5*fbm(uv*5.)+
(uv*rot(RND*6.283)*(2.+RND*4.)).x

)*2.-1.);

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


vec2 cells = abs(sfract(UV*frameCellsSize*2.)-0.5);

if (framex)
  x = max(x, 
smoothstep(0.4,0.45, cells.x));

if (framey)
x = max(x, 
smoothstep(0.1,0.05, cells.y));

return x;

}






out vec4 o;
void main() {
float ratio = r.x / r.y;
 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 
 uv.x *= ratio;
 vec2 UV = uv;
 //uv *= 0.3;

//if (UV.x>0.)
 uv = uv+ fbm(uv+RND)*1.5;
 float lines = 33.+RND*33.;

 float fl = sfloor(uv.y*lines);
 float fr = smod(uv.y*lines,1.);
 if(xshift)
 uv.x += fbm(vec2(fl, RND));
 //uv += fbm(uv)*0.1;

 float x = RND*5.+5.*uv.x*sin(fl);
  //x+= sin(fl*77.);;
 //x += (.1+RND)*fbm(uv);

 float k = smoothstep(1.,.9,sin((UV.x+fbm(RND*66.+UV))*111.));

 if (RND>0.5)
  x = ${pick(patterns)}(uv);

        
 vec3 bg = mixColor(3.);
 bg = mix(bg, mixColor(3.)-RND, k);
 bg = vec3(246,238,227)/255.;




 x = mix(x, x+2., frame(UV));

       
 vec3 c = mixColor(sfloor(x));

 float s;
  s += -pow(1.-sfract(x+fl*0.01),9.);
 s += -pow(1.-fr,9.);
        
        //
        
        
 float l;
  l += pow(sfract(x),9.);
  l += pow(fr,9.);


 c = mix(c, bg, body(x,0.7,RND));

 
 s = mix(s, 0., body(x,0.7+length(uv)/15.,RND));

s = mix(s, 0., frame(UV));



 l = mix(l, 0., body(x,0.6,RND));
        
 o = vec4(l/2.+s+c, 1.0 );  
   
 
}`);



    
redraw();
