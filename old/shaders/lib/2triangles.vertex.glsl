attribute vec2 xy;

void main(void) {
    gl_Position = vec4(xy, 0.0, 1.0);
}