#pragma import shaders/lib/2triangles.vertex.glsl
precision highp float;

uniform int iterations;
uniform vec2 resolution;
uniform vec2 center;
uniform float time;
uniform float zoom;
uniform float a;
uniform float b;
uniform float T;
uniform bool smoothing;

vec2 mul(vec2 A, vec2 B) {
    return vec2(A.x * B.x - A.y * B.y, 2.0 * A.x * B.y);
}

vec2 div(vec2 A, vec2 B) {
    return vec2(
        ((A.x*B.x + A.y*B.y)/(B.x*B.x + B.y*B.y)),
        ((A.y*B.x - A.x*B.y)/(B.x*B.x + B.y*B.y))
    );
}

vec3 color(int i, vec2 z) {
    float it = float(i);
    float sl = it - log2(log2(dot(z,z))) + 4.0;
    float al = smoothstep(-0.1, 0.0, sin(0.5 * 6.2831));
    it = mix(it, sl, al);
    return 0.5 + 0.5 * cos(3.0 + it * 0.05  + vec3(0.0, 0.6, 1.0));
}

vec3 fractal(vec2 c) {
    vec2 z = c;
    vec2 t = vec2(sin(time*T), cos(time*T));
    vec2 ab = vec2(a,b);
    for (int i = 0; i < 1024; i++) {
    	if (i == iterations)
    	    return vec3(0.0);
    	if (dot(z, z) > 10.)
    	    return color(i, z);
    	// fractal formula
    	z = mul(z, z) + c;
    	//
    }
    return vec3(0.);
}

void main(void) {
    vec2 c = gl_FragCoord.xy;
	c = -resolution + 2.0 * c;
    c *= zoom/resolution.y;
    c += center;
	gl_FragColor = vec4(fractal(c), 1.0);
}