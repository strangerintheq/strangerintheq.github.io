attribute vec2 xy;

void main(void) {
    gl_Position = vec4(xy, 0.0, 1.0);
}

precision highp float;

uniform float zoom;
uniform vec2 resolution;
uniform vec2 center;
uniform float time;

vec2 MultiplyDouble( vec2 a, vec2 b ){
    vec2 c;
    // c = a*b
    // (c.y+c.x) = (a.x+a.y)*(b.x+b.y);
    c.y = a.y*b.y; // smallest part
    float l = a.x*b.x; // largest part
    float r = a.x*b.y + a.y*b.x; // part in-between.
    c.x = l;
    c.y += r;
	return c;
}

void main(void) {

	vec2 p = -resolution + 2.0*gl_FragCoord.xy;
    p *= zoom/resolution.y;
    p += center;
    float it = 0.;
    vec4 Z = vec4(0.0);
    vec4 C = vec4(0.0);
    C.zw = p;

    for (int i = 0 ; i < 2048; i++) {

		// complex number operations
		// Z = Z*Z + C
		vec4 Z2;
		//Z.x * Z.x - Z.y * Z.y,
		Z2.xz = MultiplyDouble(Z.xz,Z.xz) - MultiplyDouble(Z.yw,Z.yw);
		Z2.yw = 2.0*MultiplyDouble(Z.xz,Z.yw);
		Z = Z2 + C; // apply panning

		// stop immediately if the point is outside a radius of 2 from (0,0) (the bounds of the mandelbrot set)
		//if ( dot((DoubleMul(Z.xz,Z.xz) + DoubleMul(Z.yw,Z.yw)),vec2(1)) > 4.0 ) // smooth
		if ( max(abs(dot(Z.xz,vec2(1))),abs(dot(Z.yw,vec2(1)))) > 2.0 ){
		    it= float(i);
		    break;
		} // scallops

    }

    // coloring taken from Inigo Quilez's tutorials
//    float sl = it - log2(log2(dot(Z,Z))) + 4.0;
//    float al = smoothstep( -0.1, 0.0, sin(0.5*6.2831) );
//    it = mix( it, sl, al );

    vec3 col = 0.5 + 0.5*cos( 3.0 + it*0.05 + vec3(0.0,0.6,1.0));
	gl_FragColor = vec4(col,1.);

}