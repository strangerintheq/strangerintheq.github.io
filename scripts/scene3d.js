function Scene3D(shaderSource) {
    Mouse3D.init();
    GL.init();
    GL.program(shaderSource, start);

    function start(program) {
        program.bind();
        GL.buffer(GL.TWO_TRIANGLES).bind('xy', 2);
        animate();
    }

    function drawFrame() {
        GL.currentProgram.resolution();
        GL.currentProgram.time();
        GL.currentProgram.vec3("eye", Mouse3D.eye);
        GL.drawTriangleFan(4);
    }

    function animate() {
        drawFrame();
        requestAnimationFrame(animate);
    }
}
