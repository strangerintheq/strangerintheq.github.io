precision lowp float;

uniform vec2 resolution;
uniform float time;
uniform float aa;
uniform float bb;
uniform float nn;

float rand(float n){return fract(sin(n) * 43758.5453123);}

float noise(float p){
    float fl = floor(p), fc = fract(p);
    return mix(rand(fl), rand(fl + 1.0), fc);
}

float map(in vec3 p) {

    float n = noise(p.z*nn*4.)*nn;
    float v = abs(p.x+n) + abs(p.z-n) -3. ;
    v += noise(p.x+p.y) + noise(p.z-p.y);
    return smoothstep(-0.1,.0, v)*0.5 - smoothstep(0.,.1, v)*0.5;
}

void main() {
    vec2 uv = gl_FragCoord.xy;
    uv -= resolution*(0.3+bb*0.4);

    uv = uv*mat2(cos(time*7.), sin(time*7.), -sin(time*7.), cos(time*7.));

    float vp = sin(time)*aa;

    vec3 ro = vec3(-vp, time*4.0, vp);
    vec3 rd = normalize(vec3(uv.y, resolution.y, uv.x));

    for( float i=0.0; i<1024.0; i++ ) {
        gl_FragColor = gl_FragColor;
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
