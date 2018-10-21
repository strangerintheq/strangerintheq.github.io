#pragma import shaders/lib/2triangles.vertex.glsl

precision highp float;

uniform float time;

#pragma import shaders/lib/sdf/menger.glsl

vec2 sceneSDF(vec3 p) {
    return MengerSponge(p, 3.);
}

#pragma import shaders/lib/raymarch.glsl
//#pragma import shaders/lib/raymarch.enhanced.glsl
#pragma import shaders/lib/phong.glsl
#pragma import shaders/lib/common.glsl

vec3 col(float f) {
    if (f < 0.2) return vec3(1., 0., 0.);
    if (f < 0.3) return vec3(0., 1., 0.);
    if (f < 0.4) return vec3(0., 0., 1.);
    if (f < 0.5) return vec3(1., 1., 0.);
    if (f < 0.6) return vec3(0., 1., 1.);
    if (f < 0.7) return vec3(1., 0., 1.);

    return vec3(1., 1., 1.);
}

void main(void) {
	vec3 direction = rayDirection(60.0, resolution);
    mat4 viewToWorld = viewMatrix(eye, vec3(0.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0));
    vec3 worldDir = (viewToWorld * vec4(direction, 0.0)).xyz;
    vec3 d = trace(eye, worldDir);
    if (d.x > 50.) {
        gl_FragColor = vec4(0.1, 0.1, 0.1, 1.0);
    } else {
        vec3 p = eye + d.x * worldDir;
        vec3 K_a = vec3(col(d.z));
        vec3 K_d = vec3(col(d.z));
        vec3 K_s = vec3(0.4, 0.4, 0.4);
        float shininess = 10.0;
        vec3 color = phongIllumination(K_a, K_d, K_s, shininess, p, eye)*2.;
        gl_FragColor = vec4(color, 1.0);
    }
}
