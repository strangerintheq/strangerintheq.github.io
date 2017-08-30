attribute vec2 xy;

void main(void) {
    gl_Position = vec4(xy, 0.0, 1.0);
}

precision highp float;

uniform float zoom;
uniform vec2 resolution;
uniform vec2 center;
uniform float time;

vec2 mul(vec2 a, vec2 b) {
    return vec2(a.x * b.x - a.y * b.y, 2.0 * a.x * b.y);
}

vec3 mandelbrot(vec2 c) {
	c = -resolution + 2.0*c;
    c *= zoom/resolution.y;
    c += center;
    vec2 z = vec2(0.);
    float it = 0.;

    for (int i = 0 ; i < 256; i++) {
        z = mul(z, z) + c;
    	if (dot(z, z) > 4.0) {
    	    it = float(i);
    	    break;
    	}
    }

    // coloring taken from Inigo Quilez's tutorials
    float sl = it - log2(log2(dot(z,z))) + 4.0;
    float al = smoothstep( -0.1, 0.0, sin(0.5*6.2831) );
    it = mix( it, sl, al );

    return 0.5 + 0.5*cos( 3.0 + it*0.05 + vec3(0.0,0.6,1.0));
}



void main(void) {
    vec2 c = gl_FragCoord.xy;
    vec3 col;
    col += mandelbrot(c + vec2(0.0, 0.0));
    col += mandelbrot(c + vec2(0.0, 0.5));
    col += mandelbrot(c + vec2(0.5, 0.0));
    col += mandelbrot(c + vec2(0.5, 0.5));
    col /= 4.;
	gl_FragColor = vec4(col  ,1.);

}