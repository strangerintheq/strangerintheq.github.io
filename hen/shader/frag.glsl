precision highp float;

uniform float time;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy - resolution.xy * 0.5;
    uv /= resolution.x;
    gl_FragColor = vec4( uv, 0., 1. );
}