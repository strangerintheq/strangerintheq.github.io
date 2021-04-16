
function createAudioTexture(srcUrl) {
    const audio = document.createElement("audio");
    audio.src = srcUrl;
   // audio.volume = 0.01
    audio.autoplay = true;
    const context = new AudioContext();
    const src = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 16384;
    // analyser.fftSize = 32768;
    const size = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(size);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')
    const data = ctx.createImageData(size, 1);
    canvas.width = size;
    canvas.height = 1;


    return {
        play() {
            audio.play().then(() => audio.play())
        },
        update() {
            analyser.getByteFrequencyData(dataArray);
            dataArray.forEach((el, i) => {
                data.data[i*4] = el;
                data.data[i*4+1] = el;
                data.data[i*4+2] = Math.random()*255;
                data.data[i*4+3] = 255;
            })
            ctx.putImageData(data,0,0);
        },
        canvas
    }
}

function createVisualizer(audioTexture) {

    let w, h,
        c = document.querySelector('canvas'),
        gl = c.getContext('webgl'),
        p = gl.createProgram()

    shader(`
            attribute vec2 v;
            void main() {
                gl_Position = vec4(v, 0.0, 1.0);
            }
        `, gl.VERTEX_SHADER);

    shader(`
            precision highp float;
            uniform float time;
            uniform vec2 resolution;
            uniform sampler2D audio;

            float map(in vec3 p) {
                float n = 33.;
                
                float a = abs(atan(p.z, p.x))/3.1415;
                float a1 = floor(a*n)/n;
                float a2 = a1+3.1415/n;
                
                float f1 = texture2D(audio, vec2(a1/1.5, 0.5)).r*0.1;
                float f2 = texture2D(audio, vec2(a2/1.5, 0.5)).r*0.1;
                
                float f = mix(f1, f2, (a-a1)/(3.1415/n));
                
                float v = length(p.xz)-0.5-f;
                
                return smoothstep(-0.1+f,.0, v)*0.5 - smoothstep(0.,0.1+f, v)*0.5;
            }
            
            void main() {
                vec2 uv = (gl_FragCoord.xy - resolution.xy*.5)*2.5;
                vec3 ro = vec3(0.0, time*4.0, 0.0 );
                vec3 rd = normalize(vec3(uv.y, resolution.y, uv.x));
                for( float i=0.0; i!=256.0; i++ ) {
                    gl_FragColor = .99 * gl_FragColor;
                    vec3 p = ro + i*rd*0.01;
                    float c = map(p);
                    float l = length(p);
                    gl_FragColor.rgb += vec3(
                        pow(c, 1.0 + sin(l-time)),
                        c,
                        pow(c, 1.0 + cos(time+l))
                    ) * 0.09;
                }
                gl_FragColor = vec4( clamp( gl_FragColor.rgb, 0.0, 1.0 ), 1. );
            }
        `, gl.FRAGMENT_SHADER);

    gl.linkProgram(p)
    gl.useProgram(p)

    const v = gl.getAttribLocation(p, "v"),
          r = gl.getUniformLocation(p, 'resolution'),
          t = gl.getUniformLocation(p, 'time')

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,3,-1,-1,3,-1]), gl.STATIC_DRAW)
    gl.vertexAttribPointer(v, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(v)

    gl.uniform1i(gl.getUniformLocation(p, 'audio'), 0);

    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)


    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);


    return {
        drawFrame(time) {
            resize();
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, audioTexture);
            // gl.texSubImage2D(
            //     gl.TEXTURE_2D, 0, 0, 0, gl.RGBA,
            //     gl.UNSIGNED_BYTE, audioTexture);

            gl.uniform1f(t, time/1000)
            gl.drawArrays(gl.TRIANGLES,0,3)
        }
    }

    function shader(src,a) {
        let s = gl.createShader(a)
        gl.shaderSource(s,src)
        gl.compileShader(s)
        gl.attachShader(p,s)
    }

    function resize(){
        if (w !== innerWidth || h !== innerHeight) {
            w = c.width = innerWidth
            h = c.height = innerHeight
            gl.viewport(0, 0, w, h)
            gl.uniform2f(r, w, h)
        }
    }
}

(function () {

    addEventListener('click', init);

    function init() {
        removeEventListener('click', init);

        const audioTexture = createAudioTexture('file_example_MP3_700KB.mp3')
        const visualizer = createVisualizer(audioTexture.canvas)
        audioTexture.play();
        requestAnimationFrame(animate);

        function animate(time) {
            audioTexture.update();
            visualizer.drawFrame(time);
            requestAnimationFrame(animate);
        }

        addEventListener('click', () => {
            audioTexture.play()
        });
    }


})();



