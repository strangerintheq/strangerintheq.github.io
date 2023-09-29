let pal = pick(palettes)
//pal.pop()
//pal.pop()
//pal.pop()
palette(pal);
let c = createCanvasWebgl(ratio, 4);
appendCanvas();

const redraw = prog(`
#define ss smoothstep
out vec4 o;
void main() {

 vec2 uv = gl_FragCoord.xy/r.xy-0.5;
 uv.x *= r.x / r.y;
vec2 UV1 = uv;
 uv = uv * rot(RND*7.);
 vec2 UV = uv;
 uv *= 1.;
 uv = .99*vec2(

fbm(uv+RND*1111.)*(1.1+RND*.6)-0.5,
fbm(uv+RND*1111.)*(1.1+RND*.6)-0.5

);
//uv = abs(uv);

 float x = min(4.*sfract(3.*uv.y) , 4.*sfract(uv.x*19.))  + mix(uv.x*9.,uv.y*9., uv.y);
//x = 3.;

 float b = length(uv);
//if (UV1.x>0.)
x = mix(x,-x/3., ss(0.91,0.7,b));

 float th = 0.1;
 float o1 = 0.2;
 float o2 = 0.4;
 float frame = ss(o1,o1+th,abs(UV1.x));

frame = max(frame, ss(o2,o2+th,abs(UV1.y)));

float edge = UV.y+noise(RND*999.+UV+fbm(uv));

float offset = 0.05;
frame = max(frame, ss(offset+2.*th,offset,abs(edge)));

//frame = length(UV1)+abs(fbm2(RND*999.+UV1*1.)-0.5);
//frame = ss(0.6,0.9,frame);

//float x1 =mod((0.5+UV1.y)*1.,5.);




if (edge<0.)
 x = x/2.;

x=smod(x,5.);

//if(RND>.5)
x = mix(x, 3.-x/2., frame);





 vec3 c = mixColor(sfloor(x));
 //c.rgb = vec3(sin(x))/2.+.5;

 float s;
 s += -pow(1.-fract(x),9.);

 float l;
 l += pow(fract(x),9.);


if (mod(x,5.)<1.){
 //c -= 0.1*ss(0.5,0.99,sin((floor(x)+uv.x+UV.x)*(RND*8. +2.)*99.));
}

c += 0.1*(max(noise(UV1*333.+floor(UV.x*3333.)),sin(noise(uv)*55.+UV.x*3333.)));

   //c = pow(c,vec3(1.5));

 o = vec4(
  c, 1.0 );  
   
 
}`);




redraw();