const fo = document.querySelector('foreignObject')
const uniformsLocations = {};
const c = document.querySelector('canvas'),
    gl = c.getContext('webgl'),
    p = gl.createProgram();

shader(window.vertexShader, gl.VERTEX_SHADER);
shader(window.fragmentShader, gl.FRAGMENT_SHADER);

gl.linkProgram(p)
gl.useProgram(p)

const vertex = gl.getAttribLocation(p, "vertex");

gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,3,-1,-1,3,-1]), gl.STATIC_DRAW)
gl.vertexAttribPointer(vertex, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(vertex)

function shader(src,a) {
    let s = gl.createShader(a)
    gl.shaderSource(s,src)
    gl.compileShader(s)
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
        throw new Error(gl.getShaderInfoLog(s));
    gl.attachShader(p,s)
}

function ensureUniform(name) {
    if (uniformsLocations[name])
        return
    uniformsLocations[name] = gl.getUniformLocation(p, name);
}

function uf3(name, a, b, c) {
    ensureUniform(name);
    gl.uniform3f(uniformsLocations[name], a, b, c)
}

function uf2(name, a, b) {
    ensureUniform(name);
    gl.uniform2f(uniformsLocations[name], a, b)
}

function uf1(name, a){
    ensureUniform(name);
    gl.uniform1f(uniformsLocations[name], a);
}

function resize(w,h) {
    c.width = w;
    c.height = h;
    gl.viewport(0, 0, w, h)
    uf2('resolution', w, h)
    fo.setAttribute('width', w)
    fo.setAttribute('height', h)
    fo.parentNode.setAttribute('viewBox', [0, 0, w, h])
}