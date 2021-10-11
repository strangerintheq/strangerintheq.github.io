Mouse3D.init();
GL.init();

var shader = GL.program('shaders/mandelbulb.glsl').bind();

GL.buffer(GL.TWO_TRIANGLES).bind('xy', 2);

animate();

function drawFrame() {
    shader.resolution();
    shader.time();
    shader.vec3("eye", Mouse3D.eye);
    GL.drawTriangleFan(4);
}

function animate() {
    drawFrame();
    requestAnimationFrame(animate);
}
