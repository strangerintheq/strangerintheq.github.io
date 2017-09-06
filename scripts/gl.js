var GL = (function () {

    var started = Date.now();
    var TWO_TRIANGLES = [-1, +1, -1, -1, +1, -1, +1, +1];
    var SHADER_SEPARATOR = 'precision';
    var canvas, gl, currentProgram;

    return {
        TWO_TRIANGLES: TWO_TRIANGLES,
        init: init,
        drawTriangleFan: drawTriangleFan,
        program: createProgram,
        buffer: createBuffer,
        resolution: resolution
    };

    function init(canv) {
        if (!canv) {
            canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            document.body.style.margin = 0;
            document.body.style.overflow = 'hidden';

            window.addEventListener('resize', autoResize);
            autoResize();
        } else {
            canvas = canv;
        }
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }

    function createShader(source, type) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            throw new Error(gl.getShaderInfoLog(shader))
        }
        return shader;
    }

    function createProgram(name, replace, replacement) {
        var program = gl.createProgram();
        var shaderSources = loadShaderSource(name);
        gl.attachShader(program, createShader(shaderSources.vertex.split(replace).join(replacement), gl.VERTEX_SHADER));
        gl.attachShader(program, createShader(shaderSources.fragment.split(replace).join(replacement), gl.FRAGMENT_SHADER));
        gl.linkProgram(program);
        program.float = loadUniform('1f');
        program.int = loadUniform('1i');
        program.vec2 = loadUniform('2fv');
        program.vec3 = loadUniform('3fv');
        program.resolution = function(uniformName) {
            program.vec2(uniformName || 'resolution', resolution());
        };
        program.time = function(uniformName) {
            program.float(uniformName || 'time', time());
        };
        program.bind = function () {
            currentProgram = program;
            gl.useProgram(program);
            return program;
        };
        return program;

        function loadUniform(type) {
            return function (name, value) {
                var location = gl.getUniformLocation(program, name);
                gl['uniform' + type](location, value);
            }
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

    function time(divider) {
        return (Date.now() - started) / (divider || 1000);
    }
})();