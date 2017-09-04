var mandelbrot = 'z = mul(z, z) + c;';
var started = Date.now();
var info = UI.new('div', 60);
var I = createSlider('i', 256, 96);
var A = createSlider('a', 100, 50);
var B = createSlider('b', 100, 50);
var T = createSlider('t', 100, 10);



var equation = init();

var formula = createFormula(equation);
var temp = createTextArea();

createButton('pick point', function () {
    var c = Mouse.center;
    temp.value += 'vec2(' + (c[0]/1).toFixed(6) + ',' + (c[1]/1).toFixed(6) + ');\n'
});

createButton('share', function() {
    prompt('', createLink());
});

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
    shaderProgram.loadFloatUniform("zoom", Mouse.zoom);
    shaderProgram.loadFloatUniform("time", time);
    shaderProgram.loadFloatUniform("a", A.value / 50 - 1);
    shaderProgram.loadFloatUniform("b", B.value / 50 - 1);
    shaderProgram.loadFloatUniform("T", T.value / 100);
    shaderProgram.loadFloatUniform("smoothing", true);
    shaderProgram.loadIntUniform("iterations", I.value);
    shaderProgram.loadVec2Uniform("center", Mouse.center);
    shaderProgram.loadVec2Uniform("resolution", GL.resolution());
    GL.drawTriangleFan(4);

    I.update(I.value);
    A.update(A.value / 50 - 1, 2);
    B.update(B.value / 50 - 1, 2);
    T.update(T.value / 100, 2);

    var html = '' +
        'zoom: ' + Mouse.zoom + '<br>' +
        'x: ' + Mouse.center[0] + '<br>' +
        'y: ' + Mouse.center[1];

    info.innerHTML !== html && (info.innerHTML = html);
}

function createLink() {
    return document.location.origin + '?' +
        btoa(JSON.stringify({
            x: Mouse.center[0],
            y: Mouse.center[1],
            i: I.value,
            a: A.value,
            b: B.value,
            t: T.value,
            z: Mouse.zoom,
            formula: btoa(formula.value)
        }));
}

function createButton(text, func) {
    var button = UI.new('input', 25);
    button.setAttribute('type', 'button');
    button.setAttribute('value', text);
    button.style.color = 'black';
    button.onclick = func;
    return button;
}

function createSlider(name, max, value) {
    var slider = UI.new('input', 25, name);
    slider.setAttribute('type', 'range');
    slider.setAttribute('min', '0');
    slider.setAttribute('max', max);
    slider.setAttribute('value', value);
    return slider;
}

function createTextArea() {
    var textarea = UI.new('textarea', 110);
    textarea.style.width = '220px';
    textarea.style.height = '100px';
    textarea.style.backgroundColor = 'rgba(0,0,0,0.5)';
    return textarea;
}

function createFormula(equation) {
    var formula = createTextArea();
    formula.value = equation;
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
        formula.style.backgroundColor = 'rgba(' + red + ',0,0,0.5)';
    }
}

function recompileShader(equation){
    return GL.program('mandelbrot.glsl', mandelbrot, equation || mandelbrot).bind();
}

function init() {
    try {
        var encodedData = document.location.search.substring(1);
        var jsonString = atob(encodedData);
        var cfg = JSON.parse(jsonString);
        equation = atob(cfg.formula);
        Mouse.init([cfg.x, cfg.y], cfg.z);
        I.value = cfg.i;
        A.value = cfg.a;
        B.value = cfg.b;
        T.value = cfg.t;
    } catch (e) {
        equation = mandelbrot;
        Mouse.init();
    }
    return equation;
}