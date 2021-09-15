precision highp float;

uniform float time;
uniform vec2 resolution;
uniform float count;
uniform float tiles;
uniform float tiles2;
uniform float colShift;
uniform float shift;
uniform float thickness;
uniform vec3 color;
uniform vec3 features;

void radialFold(inout vec2 p, float cant, float offset) {
    float d = 3.1416 / cant * 2.;
    float at = atan(p.x, p.y);
    float a = mod(at, d) - d * .5;
    p = vec2(cos(a), sin(a)) * length(p) - vec2(offset, 0.);
}

void main() {
    vec2 p = gl_FragCoord.xy/resolution-0.5;
    p.x *= resolution.x/resolution.y;

    float id = 0.;

//    if (features.x > 0.5) {
//        id += floor(length(p)*tiles + atan(p.x,p.y)/3.14*tiles);
//        id += floor(length(p)*tiles - atan(p.x,p.y)/3.14*tiles);
//    }
//
//    if (features.y>0.5){
//
//    }

//    if (features.z > 0.5)
        id += floor(3.*length(p-vec2(0.2, 0.))*tiles+time);
//    if (features.x < 0.5)
        id += floor(3.*length(p+vec2(0.2, 0.))*tiles-time);


    float m = 1e9, s = 1.6,  d = 1.;
    vec3 col;
    for (float i = 0.; i < 9.; i++) {
        radialFold(p, count, shift+id);
        p *= s;
        d *= s;
        float k = step(.5, fract(p.x * .01 - time * .1 + i * .05 ));
        float v = (abs(p.y) + 2. *k) / d;
        if (m > v) {
            m = v;
            gl_FragColor = exp(-thickness * m) * vec4(
                sin(color.r + i*3.),
                fract(color.g +id),
                cos(color.b+i),
                1.
            );
        }
    }

}