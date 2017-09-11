// Mini WebGL library
var GL = (function () {
    return {
        init: init,
        drawTriangleFan: drawTriangleFan,
        program: createProgram,
        buffer: createBuffer,
        TWO_TRIANGLES: [-1, +1, -1, -1, +1, -1, +1, +1],
        currentProgram: null,
        started: Date.now(),
        canvas: null,
        gl: null
    };

    function init(canvas) {
        GL.canvas = canvas || document.createElement('canvas');
        GL.gl = GL.canvas.getContext("webgl") || GL.canvas.getContext("experimental-webgl");
        if (canvas) return;
        document.body.appendChild(GL.canvas);
        document.body.style.margin = 0;
        document.body.style.overflow = 'hidden';
        window.addEventListener('resize', autoResize);
        autoResize();
    }

    function createShader(source, type) {
        var shader = GL.gl.createShader(type);
        GL.gl.shaderSource(shader, source);
        GL.gl.compileShader(shader);
        if (!GL.gl.getShaderParameter(shader, GL.gl.COMPILE_STATUS)) {
            throw new Error(GL.gl.getShaderInfoLog(shader))
        }
        return shader;
    }

    function createProgram(name, onReady) {
        var program = GL.gl.createProgram();
        program.float = loadUniform('1f');
        program.int = loadUniform('1i');
        program.vec2 = loadUniform('2fv');
        program.vec3 = loadUniform('3fv');
        program.resolution = function (name) {
            program.vec2(name || 'resolution', [GL.canvas.width, GL.canvas.height]);
        };
        program.time = function (name) {
            program.float(name || 'time', (Date.now() - GL.started) / 1000);
        };
        program.bind = function () {
            GL.gl.useProgram(GL.currentProgram = program);
        };
        program.replace = function (from, to) {
            program.shader = program.shader.split(from).join(to);
        };
        program.link = function () {
            var shaders = program.shader.split('precision');
            GL.gl.attachShader(program, createShader(shaders[0], GL.gl.VERTEX_SHADER));
            GL.gl.attachShader(program, createShader('precision' + shaders[1], GL.gl.FRAGMENT_SHADER));
            GL.gl.linkProgram(program);
            console.log(program.shader);
        };
        loadShaderSource(name, onShaderSourceReady);

        function onShaderSourceReady(shader) {
            program.shader = shader;
            onReady(program);
        }

        function loadUniform(type) {
            return function (name, value) {
                var location = GL.gl.getUniformLocation(program, name);
                GL.gl['uniform' + type](location, value);
            }
        }
    }

    function createBuffer(data) {
        var bufferIndex = GL.gl.createBuffer();
        glBindBuffer();
        GL.gl.bufferData(GL.gl.ARRAY_BUFFER, new Float32Array(data), GL.gl.STATIC_DRAW);
        return {
            bind: function (location, floatsPerVertex) {
                var attributeLocation = GL.gl.getAttribLocation(GL.currentProgram, location);
                GL.gl.enableVertexAttribArray(attributeLocation);
                glBindBuffer();
                GL.gl.vertexAttribPointer(attributeLocation, floatsPerVertex, GL.gl.FLOAT, false, 0, 0);
            }
        };

        function glBindBuffer() {
            GL.gl.bindBuffer(GL.gl.ARRAY_BUFFER, bufferIndex);
        }
    }

    function drawTriangleFan(count) {
        GL.gl.drawArrays(GL.gl.TRIANGLE_FAN, 0, count);
    }

    function loadShaderSource(src, onLoad) {
        req(src, function (response) {
            glueShader(response, onLoad);
        });
    }

    function req(url, onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = function () {
            xhr.readyState === 4 &&
            xhr.status === 200 &&
            onLoad(xhr.responseText);
        };
        xhr.send();
    }

    function autoResize() {
        GL.canvas.width !== window.innerWidth && (GL.canvas.width = window.innerWidth);
        GL.canvas.height !== window.innerHeight && (GL.canvas.height = window.innerHeight);
        GL.gl.viewport(0, 0, GL.canvas.width, GL.canvas.height);
    }

    function glueShader(source, onReady) {
        var loading = [];
        var TAG = '#pragma import ';
        if (source.indexOf(TAG) > -1) {
            source.split('\n').forEach(function (row) {
                row.indexOf(TAG) === 0 ?
                    shaderPartLoader(row.split(TAG).pop()):
                        loading.push({src: row});
            });
        } else onReady(source);

        function shaderPartLoader(url) {
            var loader = {src: null};
            req(url, function(response) {
                loader.src = response;
                loading.every(function (l) {
                    return l.src !== null;
                }) && onReady(loading.map(function(loader) {
                    return loader.src;
                }).join('\n'));
            });
            loading.push(loader);
        }
    }
})();