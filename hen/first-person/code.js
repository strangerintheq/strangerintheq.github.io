let w, h;
const c = document.getElementById('canvas'),
    fo = c.parentNode,
    gl = c.getContext('webgl'),
    program = gl.createProgram()

shader(shaders.vertex, gl.VERTEX_SHADER)
shader(shaders.fragment, gl.FRAGMENT_SHADER)

gl.linkProgram(program)
gl.useProgram(program)

const vertex = gl.getAttribLocation(program, "vertex"),
    resolution = gl.getUniformLocation(program, 'resolution'),
    time = gl.getUniformLocation(program, 'time'),
    eye = gl.getUniformLocation(program, 'eye'),
    dir = gl.getUniformLocation(program, 'dir');

gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 3, -1, -1, 3, -1]), gl.STATIC_DRAW)
gl.vertexAttribPointer(vertex, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(vertex)

const controls = new FirstPersonControls();

requestAnimationFrame(function draw(i) {
    if (w !== innerWidth || h !== innerHeight) {
        w = c.width = innerWidth
        h = c.height = innerHeight
        gl.viewport(0, 0, w, h)
        gl.uniform2f(resolution, w, h)
        fo.setAttribute('width', w)
        fo.setAttribute('height', h)
        fo.parentNode.setAttribute('viewBox', [0, 0, w, h])
    }
    gl.uniform1f(time, i / 1000)
    gl.uniform3fv(eye, controls.eye)
    gl.uniform3fv(dir, controls.forward)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    requestAnimationFrame(draw)
})

function shader(src, a) {
    const shader = gl.createShader(a)
    gl.shaderSource(shader, src)
    gl.compileShader(shader)
    gl.attachShader(program, shader)
}


