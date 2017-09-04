var time = 0;
var theta = 0;
var phi = 0;
var mouse = {x: 0, y: 0};
var radius = 20;
var eye = [0, 0, radius];
var started = Date.now();
var dragStartMousePosition, dragStartPhi, dragStartTheta;

window.addEventListener('mousemove', mouseMove, false);
window.addEventListener('mouseup', mouseUp, false);
window.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mousewheel', mouseWheel, false);

GL.init();

var shaderProgram = GL.program('shaders/test.glsl').bind();

GL.buffer([-1, +1, -1, -1, +1, -1, +1, +1]).bind('xy', 2);

animate();

function drawFrame() {
    shaderProgram.loadFloatUniform("time", time);
    shaderProgram.loadVec2Uniform("mouse", [mouse.x, window.innerHeight - mouse.y]);
    shaderProgram.loadVec2Uniform("resolution", GL.resolution());
    shaderProgram.loadVec3Uniform("eye", eye);
    GL.drawTriangleFan(4);
}

function animate() {
    tick();
    drawFrame();
    requestAnimationFrame(animate);
}

function tick() {
    time = (Date.now() - started) / 1000;
}

function mouseMove(event) {
    mouse = event;
    if (dragStartMousePosition) {
        rotate()
    }
}

function updateCameraPosition() {
    eye[0] = radius * Math.cos(phi) * Math.sin(theta);
    eye[1] = radius * Math.sin(phi);
    eye[2] = radius * Math.cos(phi) * Math.cos(theta);
}

function rotate() {
    var amountX = dragStartMousePosition ? dragStartMousePosition.x - mouse.x : 0;
    var amountZ = mouse.y - dragStartMousePosition.y;
    theta = dragStartTheta + amountX/120;
    phi = dragStartPhi + amountZ/120;
    var limit = Math.PI / 2;
    phi = phi > limit ? limit : phi;
    phi = phi < -limit ? -limit : phi;
    updateCameraPosition();
}

function mouseDown(event) {
    dragStartPhi = phi;
    dragStartTheta = theta;
    dragStartMousePosition = event;
}

function mouseUp() {
    rotate();
    dragStartMousePosition = null;
    dragStartPhi = 0;
    dragStartTheta = 0;
}

function mouseWheel(e){
    radius *= e.wheelDelta > 0 ? 0.9 : 1.1;
    updateCameraPosition();
}