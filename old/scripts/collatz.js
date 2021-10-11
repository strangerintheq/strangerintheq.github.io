var info = UI.elem('div', 60);
var A = UI.slider('a', 100, 50);
var B = UI.slider('b', 100, 50);

GL.init();
Mouse.init();

GL.program('shaders/collatz.glsl', function (program) {
    program.link();
    program.bind();
    GL.buffer(GL.TWO_TRIANGLES).bind('xy', 2);
    animate();
});

function animate() {
    drawFrame();
    requestAnimationFrame(animate);
}

function drawFrame() {
    var shader = GL.currentProgram;
    shader.time();
    shader.resolution();
    shader.float("zoom", Mouse.zoom);
    shader.float("a", A.value / 10 - 1);
    shader.float("b", B.value / 10 - 1);
    shader.vec2("center", Mouse.center);
    GL.drawTriangleFan(4);

    A.update(A.value / 10 - 1, 2);
    B.update(B.value / 10 - 1, 2);

    var html = '' +
        'zoom: ' + Mouse.zoom + '<br>' +
        'x: ' + Mouse.center[0] + '<br>' +
        'y: ' + Mouse.center[1];

    info.innerHTML !== html && (info.innerHTML = html);
}
