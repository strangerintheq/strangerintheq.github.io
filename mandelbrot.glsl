attribute vec2 xy;

void main(void) {
    gl_Position = vec4(xy, 0.0, 1.0);
}

precision highp float;

uniform int iterations;
uniform vec2 resolution;
uniform vec2 center;
uniform float time;
uniform float zoom;
uniform bool smoothing;

vec2 mul(vec2 a, vec2 b) {
    return vec2(a.x * b.x - a.y * b.y, 2.0 * a.x * b.y);
}

vec2 div(vec2 a, vec2 b) {
    return vec2(
        ((a.x*b.x + a.y*b.y)/(b.x*b.x + b.y*b.y)),
        ((a.y*b.x - a.x*b.y)/(b.x*b.x + b.y*b.y))
    );
}

vec2 product(vec2 a, vec2 b) {
    return vec2(a.x*b.x-a.y*b.y, a.x*b.y+a.y*b.x);
}

vec2 conjugate(vec2 a) {
    return vec2(a.x,-a.y);
}

vec3 color(int i, vec2 z) {
    float it = float(i);
//    if (smoothing) {
        float sl = it - log2(log2(dot(z,z))) + 4.0;
        float al = smoothstep(-0.1, 0.0, sin(0.5 * 6.2831));
        it = mix(it, sl, al);
//    }
    return 0.5 + 0.5 * cos(3.0 + it * 0.05  + vec3(0.0, 0.6, 1.0));
}

vec3 fractal(vec2 c) {
    vec2 z = c;
    vec2 t = vec2(sin(time), cos(time));
    for (int i = 0; i < 1024; i++) {
    	if (i == iterations)
    	    return vec3(0.0);
    	if (dot(z, z) > 4.)
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