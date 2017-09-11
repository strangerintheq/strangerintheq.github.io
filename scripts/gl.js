var GL = (function () {
    var GL = {
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
    return GL;

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
        program.resolution = function (uniformName) {
            program.vec2(uniformName || 'resolution', [GL.canvas.width, GL.canvas.height]);
        };
        program.time = function (uniformName) {
            program.float(uniformName || 'time', (Date.now() - GL.started) / 1000);
        };
        program.bind = function () {
            GL.currentProgram = program;
            GL.gl.useProgram(program);
        };

        loadShaderSource(name, onShaderSourceReady);

        function onShaderSourceReady(shaderSources) {
            GL.gl.attachShader(program, createShader(shaderSources.vertex, GL.gl.VERTEX_SHADER));
            GL.gl.attachShader(program, createShader(shaderSources.fragment, GL.gl.FRAGMENT_SHADER));
            GL.gl.linkProgram(program);
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
            bind: bind
        };

        function bind(location, floatsPerVertex) {
            var attributeLocation = GL.gl.getAttribLocation(GL.currentProgram, location);
            GL.gl.enableVertexAttribArray(attributeLocation);
            glBindBuffer();
            GL.gl.vertexAttribPointer(attributeLocation, floatsPerVertex, GL.gl.FLOAT, false, 0, 0);
        }

        function glBindBuffer() {
            GL.gl.bindBuffer(GL.gl.ARRAY_BUFFER, bufferIndex);
        }
    }

    function drawTriangleFan(count) {
        GL.gl.drawArrays(GL.gl.TRIANGLE_FAN, 0, count);
    }

    function loadShaderSource(src, onLoad) {
        req(src, function (response) {
            glueShader(response, function (shader) {
                console.log(shader);
                var shaders = shader.split('precision');
                onLoad({
                    vertex: shaders[0],
                    fragment: 'precision' + shaders[1]
                });
            });
        });
    }

    function req(url, onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                onLoad(xhr.responseText);
            }
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
                if (row.indexOf(TAG) === 0) {
                    var partSrc = row.split(TAG).pop();
                    shaderPartLoader(partSrc);
                } else {
                    loading.push({src: row});
                }
            });
        } else onReady(source);

        function shaderPartLoader(url) {
            var loader = {src: null};
            req(url, function(response) {
                loader.src = response;
                finishLoading();
            });
            loading.push(loader);
        }

        function finishLoading() {
            var ready = true;
            loading.forEach(function(loader) {
                ready &= loader.src !== null;
            });
            if (!ready) return;
            onReady(loading.map(function(loader){
                return loader.src;
            }).join('\n'));
        }
    }
})();