precision highp float;

uniform float time;
uniform vec2 resolution;
uniform vec3 eye;
uniform vec3 dir;


#define detail .00001
#define t time*.1

vec3 lightdir = normalize(vec3(0.5,-0.4,-1.));
float det = 0.0;

vec4 formula (vec4 p) {

    float z = fract(sin(floor(p.z)))/10.;
    float z1 = z + fract(cos(floor(p.z*2.)))/10.;
    p.xz = fract(p.xz)-0.5;

    for (int i=0; i<6; i++) {
        p.xyz = abs(p.xyz) - vec3(.0, z, .0);
        p = p*1.8/clamp(dot(p.xyz,p.xyz), z1, 1.1-z1)
        - vec4( 0.5, 2.4+z/3., 0.5, 0.0);
    }
    return p;
}

float texture2 (vec3 p) {
    if (abs(p.x)>0.99)
    return 0.;
    float z = p.z/2.;
    p=formula(vec4(p,0.)).xyz;
    return cos(z)*0.5+clamp(pow(max(0.,max(abs(p.x),abs(p.z))),1.6),.0,1.);
}

vec2 de(vec3 pos) {

    vec4 p = vec4(pos, 1.);
    p = formula(p);
    float fr=length(p.zx)/p.w-.0001;
    return vec2(fr,0.);
}

vec3 normal(vec3 p) {
    vec3 e = vec3(0.0,det,0.0);
    return normalize(vec3(
    de(p+e.yxx).x-de(p-e.yxx).x,
    de(p+e.xyx).x-de(p-e.xyx).x,
    de(p+e.xxy).x-de(p-e.xxy).x)
    );
}

vec3 light(in vec3 p, in vec3 dir, in vec3 n, in float hid) {
    float diff = max(0.,dot(lightdir,-n));
    vec3 amb = max(.6,dot(dir,-n))*.7*vec3(1.);
    float k=texture2(p);
    vec3 col=mix(vec3(k,k*k,k*k*k)*.8+.2, vec3(k)*.5, sin(p.z)*0.5+0.5);
    return col*(amb+diff);
}

vec3 raymarch(in vec3 from, in vec3 dir) {
    float totdist;
    vec2 d = vec2(1e5,0.);
    vec3 p, col;
    for (int i=0; i<99; i++) {
        if (d.x>det && totdist<16.0) {
            p=from+totdist*dir;
            d=de(p);
            det=detail*(1.+totdist*60.);
            totdist+=max(detail,d.x);
        }
    }
    p=from+dir*(totdist-detail);
    if (d.x<.001) {
        vec3 norm=normal(p);
        col=light(p-abs(d.x-det)*dir, dir, norm, d.y);
    }
    return col;
}

vec3 rayDirection(float fieldOfView, vec2 size) {
    vec2 xy = gl_FragCoord.xy - size / 2.0;
    float z = size.y / tan(radians(fieldOfView) / 2.0);
    return normalize(vec3(xy, -z));
}

mat4 viewMatrix(vec3 eye, vec3 center, vec3 up) {
    vec3 f = normalize(center - eye);
    vec3 s = normalize(cross(f, up));
    vec3 u = cross(s, f);
    return mat4(
    vec4(s, 0.0),
    vec4(u, 0.0),
    vec4(-f, 0.0),
    vec4(0.0, 0.0, 0.0, 1)
    );
}

void main() {
    vec3 direction = rayDirection(60.0, resolution);
    mat4 viewToWorld = viewMatrix(eye, dir, vec3(0.0, 1.0, 0.0));
    vec3 worldDir = (viewToWorld * vec4(direction, 0.0)).xyz;
    vec3 color=raymarch(eye,worldDir);
    gl_FragColor = vec4(color, 1.);
}