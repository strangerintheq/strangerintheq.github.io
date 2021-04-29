
precision highp float;

uniform float time;
uniform vec2 resolution;
uniform vec4 random;

float rand(vec2 xy) {
    return fract(sin(133.+xy.x*13.+xy.y*45.) * 43758.5453123);
}

float dist(float d) {
    float size = 0.01;
    vec2 s = vec2(0.5 + size, 0.5 - size);
    return 1. - min( smoothstep(d, s.x, s.y), smoothstep(d, s.y, s.x) );
}

float ring(vec2 uv) {
    return dist(length(uv));
}


float truchet(vec2 uv, float seed) {
    float cellRand = rand(floor(uv) + seed*100.0);
    vec2 cellUv = fract(uv) - 0.5;
    if (cellRand < 0.9) {
        float a = floor(cellRand*4.)*1.57075;
        vec2 sc = vec2(sin(a), cos(a));
        cellUv = mat2(sc.y, -sc.x, sc.x, sc.y) * cellUv;
        float shift = random.x*0.15 + 0.05;
        return
            ring(cellUv - 0.5 - shift) +
            ring(cellUv - 0.5 + shift) +
            ring(cellUv + 0.5 - shift) +
            ring(cellUv + 0.5 + shift);
    }
    return min(1., dist(cellUv.x + 0.5) + dist(cellUv.y + 0.5));
}

void main() {
    vec2 uv = gl_FragCoord.xy/resolution - 0.5;
    uv.x *= resolution.x/resolution.y;
    float c;

    c += truchet(uv * 3.+floor(random.w*7.), random.w);
    c += truchet(uv * 3.+floor(random.z*7.), random.z);

    gl_FragColor = vec4(vec3(c), 1.0);
}