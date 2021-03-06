precision lowp float;

uniform vec2 resolution;
uniform float time;

float rand(float n){return fract(sin(n) * 43758.5453123);}

float noise(float p){
    float fl = floor(p), fc = fract(p);
    return mix(rand(fl), rand(fl + 1.0), fc);
}

float superformula(float phi, float m, float n1, float n2, float n3, float a, float b){
    vec2 r = vec2(m) * phi / 4.;
    r = vec2(cos(r.x), sin(r.y));
    r = pow(abs(r/vec2(a, b)), vec2(n2, n3));
    return pow(r.x + r.y, -1. / n1);
}

float map(in vec3 p) {

    float m = 12.*noise(p.y);
    float n1 = 1.17;
    float n2 = sin(p.y)*noise(cos(time))*3.;
    float n3 = 1.87*noise(p.y+31.)+noise(sin(p.y));
    float a = sin(p.y)*noise(cos(time*.3))*3.;
    float b = 1.3;
    float phi = atan(p.z, p.x);

    float v = length(p.xz) - superformula(phi, m, n1, n2, n3, a, b);
    return smoothstep(-0.1,.0, v)*0.5 - smoothstep(0.,.1, v)*0.5;
}

void main() {
    vec2 uv = gl_FragCoord.xy;
    uv.x -= resolution.x/2.;
    float vp = 2.;

    vec3 ro = vec3(-vp, time*4.0, 0.);
    vec3 rd = normalize(vec3(uv.y, resolution.y, uv.x));

    for( float i=0.0; i<1024.0; i++ ) {
        gl_FragColor = .999 * gl_FragColor;
        vec3 p = ro + i*rd*0.01;
        float c = map(p);
        float l = length(p);
        gl_FragColor.rgb += vec3(
            pow(c, 1.0 + sin(l-time)),
            c,
            pow(c, 1.0 + cos(time+l))
        ) * 0.02;

    }

    gl_FragColor = vec4( clamp( gl_FragColor.rgb, 0.0, 1.0 ), 1. );
}
