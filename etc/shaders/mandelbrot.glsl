#pragma import etc/shaders/lib/2triangles.vertex.glsl

precision highp float;

uniform int iterations;
uniform vec2 resolution;
uniform vec2 center;
uniform float time;
uniform float zoom;
uniform float a;
uniform float b;
uniform float m;
uniform float n;
uniform float T;
uniform float smoothing;
uniform vec3 color;

vec2 cadd( vec2 a, float s ) { return vec2( a.x+s, a.y ); }
vec2 cmul( vec2 a, vec2 b )  { return vec2( a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x ); }
vec2 cdiv( vec2 a, vec2 b )  { float d = dot(b,b); return vec2( dot(a,b), a.y*b.x - a.x*b.y ) / d; }
vec2 cmulj( vec2 z ) { return vec2(-z.y,z.x); }
vec3 cexp( vec2 z ) { return vec3( exp(z.x), vec2( cos(z.y), sin(z.y) ) ); }
vec3 cexpj( vec2 z ) { return vec3( exp(-z.y), vec2( cos(z.x), sin(z.x) ) ); }


vec2 mul(vec2 A, vec2 B) {
    return vec2(A.x * B.x - A.y * B.y, 2.0 * A.x * B.y);
}

vec2 div(vec2 A, vec2 B) {
    return vec2(
        ((A.x*B.x + A.y*B.y)/(B.x*B.x + B.y*B.y)),
        ((A.y*B.x - A.x*B.y)/(B.x*B.x + B.y*B.y))
    );
}

vec3 calcColor(int i, vec2 z) {
    float it = float(i);
    float sl = it - log2(log2(dot(z,z))) + 4.0;
    float al = smoothstep(-0.1, 0.0, sin(0.5 * 6.2831));
    it = mix(it, sl, al);
    return 0.5 + 0.5 * cos(3.0 + it * 0.05  + color);
}

vec3 fractal(vec2 c) {
    c = -resolution + 2.0 * c;
    c *= zoom/resolution.y;
    c += center;
    vec2 z = c;
    vec2 t = vec2(sin(time*T), cos(time*T));
    vec2 ab = vec2(a,b);
    vec2 mn = vec2(m,n);
    for (int i = 0; i < 1024; i++) {
    	if (i == iterations)
    	    return vec3(0.0);
    	if (length(z) > 4.0)
    	    return calcColor(i, z);
    	// fractal formula
        z = mul(z, z) + c*m*0.1 + t*n*0.1 + ab*0.5 - 0.5;
    	//
    }
    return vec3(0.);
}

void main(void) {
    vec2 c = gl_FragCoord.xy;
    if (smoothing > 0.0) {
        float k = 0.25;
        gl_FragColor = vec4(
            fractal(c+vec2(-1.,-1.)*k)/4.+
            fractal(c+vec2(-1., 1.)*k)/4.+
            fractal(c+vec2( 1., 1.)*k)/4.+
            fractal(c+vec2( 1.,-1.)*k)/4.,
            1.0
        );
    } else {
        gl_FragColor = vec4(fractal(c), 1.0);
    }
}