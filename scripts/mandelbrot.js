var mandelbrot = 'z = mul(z, z) + c;';
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
    temp.value += 'vec2(' + (c[0]/1).toFixed(6) + ',' + (c[1]/1).toFixed(6) + ')\n'
});

createButton('share', function() {
    prompt('', createLink());
});

GL.init();
var shader = recompileShader(equation);
GL.buffer(GL.TWO_TRIANGLES).bind('xy', 2);

animate();
function animate() {
    drawFrame();
    requestAnimationFrame(animate);
}

function drawFrame() {
    shader.time();
    shader.resolution();
    shader.float("zoom", Mouse.zoom);
    shader.float("a", A.value / 50 - 1);
    shader.float("b", B.value / 50 - 1);
    shader.float("T", T.value / 100);
    shader.float("smoothing", true);
    shader.int("iterations", I.value);
    shader.vec2("center", Mouse.center);
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
    return document.location.origin +
        document.location.pathname + '?' +
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
            shader = recompileShader(formula.value);
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
    return GL.program('shaders/mandelbrot.glsl', mandelbrot, equation || mandelbrot).bind();
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