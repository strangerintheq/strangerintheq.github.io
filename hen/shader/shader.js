
const c = document.querySelector('canvas'),
    gl = c.getContext('webgl'),
    p = gl.createProgram();

shader(window.vertexShader, gl.VERTEX_SHADER);

shader(window.fragmentShader, gl.FRAGMENT_SHADER);

gl.linkProgram(p)
gl.useProgram(p)

const vertex = gl.getAttribLocation(p, "vertex"),
    resolution = gl.getUniformLocation(p, 'resolution'),
    time = gl.getUniformLocation(p, 'time')

gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,3,-1,-1,3,-1]), gl.STATIC_DRAW)
gl.vertexAttribPointer(vertex, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(vertex)

gl.viewport(0, 0, size, size)
gl.uniform2f(resolution, size, size)

function shader(src,a) {
    let s = gl.createShader(a)
    gl.shaderSource(s,src)
    gl.compileShader(s)
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
        throw new Error(gl.getShaderInfoLog(s));
    gl.attachShader(p,s)
}
