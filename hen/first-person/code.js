let w, h,
    c = document.getElementById('canvas'),
    gl = c.getContext('webgl'),
    p = gl.createProgram()

shader(`attribute vec2 vertex;void main() {gl_Position = vec4(vertex,0.0,1.0);}`, gl.VERTEX_SHADER)
shader(window.fragmentShader, gl.FRAGMENT_SHADER)

gl.linkProgram(p)
gl.useProgram(p)

let vertex = gl.getAttribLocation(p, "vertex"),
    resolution = gl.getUniformLocation(p, 'resolution'),
    time = gl.getUniformLocation(p, 'time');

random = gl.getUniformLocation(p, 'random');

gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,3,-1,-1,3,-1]), gl.STATIC_DRAW)
gl.vertexAttribPointer(vertex, 2, gl.FLOAT, 0, 0, 0)
gl.enableVertexAttribArray(vertex)
let fo = c.parentNode;

addEventListener('click', randomize);

randomize();

function randomize(){
    gl.uniform4f(random, Math.random(), Math.random(), Math.random(), Math.random())
}

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
    gl.uniform1f(time, i/1000)
    gl.drawArrays(gl.TRIANGLES,0,3)
    requestAnimationFrame(draw)
})

function shader(src,a) {
    let s = gl.createShader(a)
    gl.shaderSource(s,src)
    gl.compileShader(s)
    gl.attachShader(p,s)
}