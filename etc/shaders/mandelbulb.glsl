#pragma import shaders/lib/2triangles.vertex.glsl

precision highp float;

uniform float time;
uniform float x;
uniform float y;
uniform float z;
uniform bool julia;
uniform float a;
uniform float b;
uniform float c;
uniform float power;

#pragma import shaders/lib/sdf/mandelbulb.glsl

float sceneSDF(vec3 p) {
    float pow = 4.0 + power;
    vec3 loc = vec3(x, y, z);
    if (julia)
        return JuliaBulb(p - loc, pow, vec3(a, b, c));
    else
        return MandelBulb(p - loc, pow);
}

//#pragma import shaders/lib/raymarch.glsl
#pragma import shaders/lib/raymarch.enhanced.glsl
#pragma import shaders/lib/phong.glsl
#pragma import shaders/lib/common.glsl

void main(void) {
	vec3 direction = rayDirection(60.0, resolution);
    mat4 viewToWorld = viewMatrix(eye, vec3(0.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0));
    vec3 worldDir = (viewToWorld * vec4(direction, 0.0)).xyz;
    float distance = trace(eye, worldDir).x;
    if (distance > 50.) {
        gl_FragColor = vec4(0.1, 0.1, 0.1, 1.0);
    } else {
        vec3 p = eye + distance * worldDir;
        vec3 K_a = vec3(0.3, 0.2, 0.2);
        vec3 K_d = vec3(0.2, 0.4, 0.7);
        vec3 K_s = vec3(1.0, 1.0, 1.0);
        float shininess = 10.0;
        vec3 color = phongIllumination(K_a, K_d, K_s, shininess, p, eye)*2.;
        gl_FragColor = vec4(color, 1.0);
    }
}
