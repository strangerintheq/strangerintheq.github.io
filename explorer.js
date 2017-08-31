var mandelbrot = 'z = mul(z, z) + c;';
var started = Date.now();
var info = UI.new('div', 60);
var iterations = createSlider('iterations', 256, 64);
var save = createSaveButton();


var equation;
try {
    var encodedData = document.location.search.substring(1);
    var jsonString = atob(encodedData);
    var cfg = JSON.parse(jsonString);
    equation = atob(cfg.formula);
    Mouse.init([cfg.x,cfg.y], cfg.z);
} catch (e) {
    equation = mandelbrot;
    Mouse.init();
}

var formula = createFormula(equation);
GL.init();
var shaderProgram = recompileShader(equation);
GL.buffer([-1, 1, -1, -1, 1, -1, 1, 1]).bind('xy', 2);

animate();
function animate() {
    drawFrame();
    requestAnimationFrame(animate);
}

function drawFrame() {
    var time = (Date.now()-started)/1000;
    var it = iterations.value;
    shaderProgram.loadFloatUniform("zoom", Mouse.zoom);
    shaderProgram.loadFloatUniform("time", time);
    shaderProgram.loadFloatUniform("smoothing", true);
    shaderProgram.loadIntUniform("iterations", it);
    shaderProgram.loadVec2Uniform("center", Mouse.center);
    shaderProgram.loadVec2Uniform("resolution", GL.resolution());
    GL.drawTriangleFan(4);

    iterations.update(it * 1);
    info.innerHTML = '' +
        'zoom: ' + Mouse.zoom + '<br>' +
        'x: ' + Mouse.center[0] + '<br>' +
        'y: ' + Mouse.center[1];
}

function createLink() {
    return document.location.origin + '?' +
        btoa(JSON.stringify({
            x: Mouse.center[0],
            y: Mouse.center[1],
            i: iterations.value,
            z: Mouse.zoom,
            formula: btoa(formula.value)
        }));
}

function createSaveButton() {
    var save = UI.new('input', 25);
    save.setAttribute('type', 'button');
    save.setAttribute('value', 'share');
    save.style.color = 'black';
    save.onclick = function(){
        prompt('',createLink());
    };
    return save;
}

function createSlider(name, max, value) {
    var slider = UI.new('input', 25, name);
    slider.setAttribute('type', 'range');
    slider.setAttribute('min', '0');
    slider.setAttribute('max', max);
    slider.setAttribute('value', value);
    return slider;
}

function createFormula(equation) {
    var formula = UI.new('textarea', 100);
    formula.value = equation;
    formula.style.width = '220px';
    bg(0);
    formula.addEventListener('keyup', function() {
        try {
            shaderProgram = recompileShader(formula.value);
            bg(0);
        } catch (e) {
            bg(255);
        }
    });
    return formula;

    function bg(red){
        formula.style.backgroundColor = 'rgba('+red+',0,0,0.5)';
    }
}

function recompileShader(equation){
    return GL.program('mandelbrot.glsl', mandelbrot, equation || mandelbrot).bind();
}

