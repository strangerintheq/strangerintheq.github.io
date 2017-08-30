var GL = (function () {

    var SHADER_SEPARATOR = 'precision';
    var canvas, gl, currentProgram;

    var GL = {
        init: init,
        drawTriangleFan: drawTriangleFan,
        program: createProgram,
        buffer: createBuffer,
        resolution: resolution
    };

    return GL;

    function init() {
        canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        gl = canvas.getContext('webgl');
        window.addEventListener('resize', autoResize);
        autoResize();
        return GL;
    }

    function createShader(source, type) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.log('shader failure');
            throw new Error(gl.getShaderInfoLog(shader))
        }
        return shader;
    }

    function createProgram(name) {
        var program = gl.createProgram();
        var shaderSources = loadShaderSource(name);
        gl.attachShader(program, createShader(shaderSources.vertex, gl.VERTEX_SHADER));
        gl.attachShader(program, createShader(shaderSources.fragment, gl.FRAGMENT_SHADER));
        gl.linkProgram(program);

        program.loadFloatUniform = function (name, value) {
            gl.uniform1f(uniformLocation(name), value);
        };

        program.loadVec2Uniform = function (name, value) {
            gl.uniform2fv(uniformLocation(name), value);
        };

        program.loadVec3Uniform = function (name, value) {
            gl.uniform3fv(uniformLocation(name), value);
        };

        program.bind = function () {
            currentProgram = program;
            gl.useProgram(program);
            return program;
        };

        return program;

        function uniformLocation(name) {
            return gl.getUniformLocation(program, name);
        }
    }

    function createBuffer(data) {
        var bufferIndex = gl.createBuffer();
        glBindBuffer();
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

        return {
            bind: bind
        };

        function bind(location, floatsPerVertex) {
            var attributeLocation = gl.getAttribLocation(currentProgram, location);
            gl.enableVertexAttribArray(attributeLocation);
            glBindBuffer();
            gl.vertexAttribPointer(attributeLocation, floatsPerVertex, gl.FLOAT, false, 0, 0);
        }

        function glBindBuffer() {
            gl.bindBuffer(gl.ARRAY_BUFFER, bufferIndex);
        }
    }

    function drawTriangleFan(count) {
        gl.drawArrays(gl.TRIANGLE_FAN, 0, count);
    }

    function loadShaderSource(src) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', src, false);
        xhr.send();
        var shaders = xhr.responseText.split(SHADER_SEPARATOR);
        return {
            vertex: shaders[0], fragment: SHADER_SEPARATOR + shaders[1]
        };
    }

    function autoResize() {
        canvas.width !== window.innerWidth && (canvas.width = window.innerWidth);
        canvas.height !== window.innerHeight && (canvas.height = window.innerHeight);
        gl.viewport(0, 0, canvas.width, canvas.height);
    }

    function resolution() {
        return [canvas.width, canvas.height];
    }
})();

