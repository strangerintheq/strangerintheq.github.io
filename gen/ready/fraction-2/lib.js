
let log;
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
    // console.log(head + fragmentShader);
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
        let message = gl.getShaderInfoLog(s);
        if (message)
            src.split('\n').map((line,i) => print(line, i, message))
        if (message)
            throw message;
        gl.attachShader(pid,s)
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
        log.innerHTML += `<div ${currentLine && 'style="background:#900;color:#fff"'}>${msg}</div>`
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

function hexToRgbArray(hex) {
    const i = parseInt(hex.substring(1), 16);
    return [i >> 16, i >> 8, i].map(x => x & 255);
}

function randomPalette() {
    let index = Math.floor(Math.random() * colors.length);
    // console.log('palette', index)
    return colors[index];
}

function normalizeColorArray(c) {
    return c.map(i => (i / 255).toFixed(8));
}

function colorArrayAsVec3(c) {
    return `vec3( ${c[0]}, ${c[1]}, ${c[2]} )`;
}

function glslVignetteFunction(){
    return `
float vignette(float power) {
    vec2 uv = gl_FragCoord.xy / resolution;
    uv *= 1.0 - uv.yx;
    float vig = uv.x*uv.y * 15.0;
    return pow(vig, power );
}
`;
}

function glslHsl2rgbFunction(){
    return `
vec3 hsl2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0);
    return c.z + c.y * (rgb-0.5)*(1.0-abs(2.0*c.z-1.0));
}
    `
}

function glslRgb2hslFunction(){
    return `
vec3 rgb2hsl(vec3 c) {
    float cMin = min(min(c.r, c.g), c.b),
          cMax = max(max(c.r, c.g), c.b),
          delta = cMax - cMin;
    vec3 hsl = vec3(0.0, 0.0, (cMax + cMin)/2.);
    if (delta == 0.0) // color is gray.
        return hsl; 
    if (hsl.z < 0.5)
        hsl.y = delta/(cMax + cMin); //Saturation.
    else
        hsl.y = delta/(2.0 - cMax - cMin); //Saturation.
    vec3 deltaColor = (((cMax-c)/6.)+(delta/2.))/delta;
    if (c.r == cMax)
        hsl.x = deltaColor.b - deltaColor.g;
    else if(c.g == cMax) 
        hsl.x = 1./3. + deltaColor.r - deltaColor.b;
    else 
        hsl.x = 2./3. + deltaColor.g - deltaColor.r;
    hsl.x = fract(hsl.x);
    return hsl;
}
    `
}


function glslGetColorFunction(){
    const cols = randomPalette()
        .map(hexToRgbArray)
        .map(normalizeColorArray)
        .map(colorArrayAsVec3);
    return `
    
vec3 getColor(float i) {
    i = abs(mod(i, 5.0));
    if (i < 1.0 ) return ${cols[0]};
    if (i < 2.0 ) return ${cols[1]};
    if (i < 3.0 ) return ${cols[2]};
    if (i < 4.0 ) return ${cols[3]};
    return ${cols[4]};
}

    `

}

function glslNoise2dFunction(){
    return `
vec3 permute(vec3 x) { 
    return mod(((x*34.0)+1.0)*x, 289.0); 
}

float noise2d(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
    `
}

function rndVec2fromPolar(r, a = rnd(Math.PI*2)) {
    return `vec2(cos(${a})*${r}, sin(${a})*${r})`;
}

function rndVec2(x,y,dx=0,dy=dx){
    return `vec2(${rnd(x)+dx},${rnd(y)+dy})`
}

function rnd(x) {
    return Math.random() * x;
}

function rndInt(x) {
    return Math.floor( rnd(x) );
}

function rotate2d(x){
    return `mat2(cos(${x}),sin(${x}),-sin(${x}),cos(${x}))`
}

function recreateCanvas(){
    const old = document.querySelector('canvas');
    old && old.remove();
    const canvas = document.createElement('canvas');
    document.body.append(canvas);
    return canvas
}

(function (){
    const style = document.createElement('style');
    style.innerHTML = `
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
    }
`;
    document.body.append(style)
})();