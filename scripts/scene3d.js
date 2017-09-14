function Scene3D(shaderSource, variables) {
    variables = variables || [];
    Mouse3D.init();
    GL.init();
    GL.program(shaderSource, start);
    variables = variables.map(function (v) {
        var slider = UI.slider(v.name, v.max, v.val);
        slider.k = v.k;
        return slider;
    });

    function start(program) {
        program.link();
        program.bind();
        GL.buffer(GL.TWO_TRIANGLES).bind('xy', 2);
        animate();
    }

    function drawFrame() {
        GL.currentProgram.resolution();
        GL.currentProgram.time();
        variables.forEach(function (v) {
             GL.currentProgram.float(v.name, v.value * v.k);
        });
        GL.currentProgram.vec3("eye", Mouse3D.eye);
        GL.drawTriangleFan(4);
    }

    function animate() {
        drawFrame();
        requestAnimationFrame(animate);
    }
}
