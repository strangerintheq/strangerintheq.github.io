var mouse, centerAtDragStart;
var center = [0, 0];
var zoom =  2.5;
var started = Date.now();

var iterations = createSlider('iterations', 256, 92);
createFormula();
var info = UI.new('div');

var shaderProgram = GL.init().program('mandelbrot.glsl').bind();
GL.buffer([-1, 1, -1, -1, 1, -1, 1, 1]).bind('xy', 2);
addListeners();
animate();

function animate() {
    drawFrame();
    requestAnimationFrame(animate);
}

function drawFrame() {
    var time = (Date.now()-started)/1000;
    var it = iterations.value;

    shaderProgram.loadFloatUniform("zoom", zoom);
    shaderProgram.loadFloatUniform("time", time);
    shaderProgram.loadFloatUniform("smoothing", true);
    shaderProgram.loadIntUniform("iterations", it);
    shaderProgram.loadVec2Uniform("center", center);
    shaderProgram.loadVec2Uniform("resolution", GL.resolution());
    GL.drawTriangleFan(4);

    iterations.update(it * 1);
    info.innerHTML = '' +
        'zoom: ' + zoom + '<br>' +
        'x: ' + center[0] + '<br>' +
        'y: ' + center[1];
}

function wheel(e) {
    zoom *= e.wheelDelta > 0 ? 0.9 : 1.1;
}

function down(e) {
    mouse = e;
    centerAtDragStart = [center[0], center[1]];
}

function up() {
    centerAtDragStart = mouse = null;
}

function move(e) {
    if (!mouse || e.target.tagName !== 'CANVAS') return;
    var r = GL.resolution();
    var x = 4 * zoom * (mouse.x - e.x) / r[0];
    var y = 4 * zoom * (mouse.y - e.y) / r[0];
    center = [centerAtDragStart[0] + x, centerAtDragStart[1] - y];
}

function addListeners() {
    window.addEventListener('mousewheel', wheel, false);
    window.addEventListener('mousedown', down, false);
    window.addEventListener('mouseup', up, false);
    window.addEventListener('mousemove', move, false);
}

function createSlider(name, max, value) {
    var slider = UI.new('input', name);
    slider.setAttribute('type', 'range');
    slider.setAttribute('min', '0');
    slider.setAttribute('max', max);
    slider.setAttribute('value', value);
    return slider;
}

function createFormula(){
    var formula = UI.new('input');
    formula.value = 'z = mul(z, z) + c';
    formula.addEventListener('keyup', function() {
        try {
            shaderProgram = GL.program('mandelbrot.glsl', 'z=mul(z,z)+c', formula.value).bind();
            formula.style.backgroundColor = 'white';
        } catch (e) {
            formula.style.backgroundColor = 'red';
        }
    });
    return formula;
}

