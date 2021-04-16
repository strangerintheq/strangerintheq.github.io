
const fs = `

precision highp float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D audio;

float channel(vec2 p, float t) {
  float a = atan(p.x, -p.y);
  float u = abs(a)/4.88;
  float fr = texture2D(audio, vec2(u, 0.5)).r;
  
  float w = sin(a*8.0 + t*2.0)*sin(t+a) ;  
  
  float d = length(p) 
    - w*0.013 
    + fr*0.1;
  d = abs(d - 0.25);
  return smoothstep(0.005, 0.0005, d);
}

void main() {
  vec2 p = gl_FragCoord.xy/resolution-0.5;
  p.x *= resolution.x/resolution.y;
  gl_FragColor = vec4(
    channel(p, time),
    channel(p, time+0.2),
    channel(p, time+0.4),
    1.0);
}

`;

function createAudioTexture(srcUrl, fft) {
    const audio = document.createElement("audio");
    audio.src = srcUrl;
   // audio.volume = 0.01
    audio.autoplay = true;
    const context = new AudioContext();
    const src = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = Math.pow(2, fft|0);

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

    let log, w, h,
        c = document.querySelector('canvas'),
        gl = c.getContext('webgl'),
        p = gl.createProgram()

    shader(`
            attribute vec2 v;
            void main() {
                gl_Position = vec4(v, 0.0, 1.0);
            }
        `, gl.VERTEX_SHADER);

    shader(fs, gl.FRAGMENT_SHADER);

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
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    return {
        drawFrame(time) {
            resize();
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, audioTexture);
            gl.uniform1f(t, time/1000)
            gl.drawArrays(gl.TRIANGLES,0,3)
        }
    }

    function shader(src,a) {
        let s = gl.createShader(a)
        gl.shaderSource(s,src)
        gl.compileShader(s)
        let message = gl.getShaderInfoLog(s);
        if (message)
            src.split('\n').map((line,i) => print(line, i, message))
        if (message)
            throw message;
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

    function print(str, i, message) {
        if (!log) {
            log = document.createElement('div');
            log.style.fontFamily = 'Courier New, monospace';
            document.body.append(log);
            canvas.remove();
        }
        let line = 1 + i;
        let currentLine = line === +message.split(':')[2];
        let msg = ("" + line).padStart(4, "0") + ': ' + str.split(' ').join('&nbsp;');
        if (currentLine) msg = '<br>' + message + '<br>' + msg + '<br><br>';
        log.innerHTML += `<div ${`style="${currentLine ? 'background:#900' : ''};color:#fff"`}>${msg}</div>`
    }
}

(function () {

    addEventListener('click', init);

    function init() {
        removeEventListener('click', init);

        const audioTexture = createAudioTexture('file_example_MP3_700KB.mp3', 9)
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
