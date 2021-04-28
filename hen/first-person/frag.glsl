

precision highp float;
uniform float time;
uniform vec2 resolution;
uniform vec4 random;

vec2 mirror(vec2 uv) {
    float count = 2.0 + floor(random.w*3.);
    float a = 3.1415/count/2.;
    float cs = cos(a), sn = sin(a);
    mat2 rot = mat2(cs, -sn, sn, cs);
    for (float i = 0.0; i<10.; i++) {
        if (i > count)
        break;
        uv = abs(uv*rot) - 0.01;
    }
    return uv;
}

void main() {
    vec2 uv = gl_FragCoord.xy/resolution-0.5;
    uv.x *= resolution.x/resolution.y;
    float a = time*0.03 + random.x*1000.;
    float cs = cos(a);
    float sn = sin(a);
    uv *= mat2(cs, -sn, sn, cs);
    for (float i=1.; i<31.; i++) {
        if (i>10.+random.z*20.)
        break;
        uv = mirror(uv);

        uv -= i*0.1 + random.w*0.1;
    }
    uv *= 5. + 25.*random.x;
    vec2 index = floor(uv);

    float t = time + random.y*100.;
    uv = fract(uv);

    vec4 r = (random-0.5)*0.1;
    float f = fract(uv.x+t*0.2)-0.5;

    float y = smoothstep(0.15, 0.2, abs(sin(uv.y+time/2.)));



    vec3 c = vec3(

        smoothstep(0.1, 0.05, abs(f+r.x))*y,
        smoothstep(0.1, 0.05, abs(f+r.y))*y,
        smoothstep(0.1, 0.05, abs(f+r.z))*y

    );
    gl_FragColor = vec4(vec3(c), 1.0);
}