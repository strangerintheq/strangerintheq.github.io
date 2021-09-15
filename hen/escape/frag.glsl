precision highp float;

uniform float time;
uniform vec2 resolution;
uniform float count;
uniform float tiles;
uniform float colShift;
uniform float shift;
uniform float thickness;
uniform vec3 color;

void radialFold(inout vec2 p, float cant, float offset) {
    float d = 3.1416 / cant * 2.;
    float at = atan(p.y, p.x);
    float a = mod(at, d) - d * .5;
    p = vec2(cos(a), sin(a)) * length(p) - vec2(offset, 0.);
}

void main() {
    vec2 p = gl_FragCoord.xy/resolution-0.5;
    p.x *= resolution.x/resolution.y;



//    p *= tiles;
//    vec2 id = floor(p)+tiles;
//    id.x = id.y * id.x;
//    id.y = id.x - id.y;

//    p = fract(p) - 0.5 ;

//    if (id.x>0.) {
//        p *= 2.;
//        p = fract(p) - 0.5 + 0.2 * sin(id.x - id.y);
//    }
//    p.x += atan(p.x, p.y);
//    p.y += atan(p.y, p.x);
    float m = 1e9, s = 1.6,  d = 1.;
    vec3 col;
    for (float i = 0.; i < 9.; i++) {
        radialFold(p, count, shift+sin(id.x+id.y)*5.);
        p *= s;
        d *= s;
        float k = step(.5, fract(p.x * .01 - time * .1 + i * .05 + id.x*0.1+id.y*0.1));
        float v = (abs(p.y) + 2. *k) / d;
        if (m > v) {
            m = v;
            gl_FragColor = exp(-thickness * m) * vec4(
                sin(color.r + i/3.+ length(p*colShift) + id.x ),
                color.g,
                cos(color.b+i-atan(p.x,p.y)*colShift),
                1.
            );
        }
    }

}