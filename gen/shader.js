
function program(canvas, fragmentShader) {

    const gl = canvas.getContext('webgl');

    const pid = gl.createProgram();

    shader(`

    attribute vec2 vertex;
    
    void main() {
        gl_Position = vec4(vertex, 0.0, 1.0);
    }

`, gl.VERTEX_SHADER);

    const head = 'precision highp float;\n\nuniform vec2 resolution;';
    console.log(head + fragmentShader);
    shader(head + fragmentShader, gl.FRAGMENT_SHADER);

    gl.linkProgram(pid)
    gl.useProgram(pid)

    const vertex = gl.getAttribLocation(pid, "vertex");
    const resolution = gl.getUniformLocation(pid, 'resolution')

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 3, -1, -1, 3, -1]), gl.STATIC_DRAW)
    gl.vertexAttribPointer(vertex, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(vertex)

    function shader(src,a) {
        let s = gl.createShader(a)
        gl.shaderSource(s,src)
        gl.compileShader(s)
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
            throw new Error(gl.getShaderInfoLog(s));
        gl.attachShader(pid,s)
    }

    const uniformsLocations = {};

    function ensureUniform(name) {
        if (!uniformsLocations[name])
            uniformsLocations[name] = gl.getUniformLocation(pid, name)
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

    let w, h;
    function resize(){
        if (innerWidth === w && innerHeight === h)
            return
        w = canvas.width = innerWidth;
        h = canvas.height = innerHeight;
        gl.viewport(0, 0, w, h);
        gl.uniform2f(resolution, w, h);
    }

    function draw(){
        resize();
        gl.drawArrays(gl.TRIANGLES,0,3)
    }

    return {uf1, uf2, uf3, resize, draw}
}




