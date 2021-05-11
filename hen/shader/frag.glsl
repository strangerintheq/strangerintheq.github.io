precision highp float;

const int iterations = 256;

uniform vec2 resolution;
uniform vec2 center;
uniform float time;
uniform float zoom;
uniform vec2 ab;
uniform vec2 mn;
uniform vec3 color;

vec2 mul(vec2 A, vec2 B) {
    return vec2(A.x * B.x - A.y * B.y, 2.0 * A.x * B.y);
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

    for (int i = 0; i < 256; i++) {
        if (i == 256)
        return vec3(0.0);
        if (length(z) > 4.0)
        return calcColor(i, z);

        z = mul(z,z);
        z -= mn;
        z /= dot(-z, z) + ab*0.01;


    }
    return vec3(0.);
}

void main() {
    vec2 c = gl_FragCoord.xy;
    float k = 0.25;
    gl_FragColor = vec4(

        pow(fractal(c+vec2(-1.,-1.)*k)/4. +
        fractal(c+vec2(-1., 1.)*k)/4. +
        fractal(c+vec2( 1., 1.)*k)/4. +
        fractal(c+vec2( 1.,-1.)*k)/4., vec3(0.5))

        ,
        1.0
    );

}