const fs = require('fs');
const name = 'fractal';
const info = `${name}  by https://t.me/strangerintheq`;
const size = 1024;
fs.writeFileSync(name + '.svg', `<!-- ${info}  -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0,0,${size},${size}">
    <foreignObject width="${size}" height="${size}">
        <canvas id="canvas" xmlns="http://www.w3.org/1999/xhtml" width="${size}" height="${size}"></canvas>
    </foreignObject>
    <script type="text/javascript">
    <![CDATA[
        const size = ${size};
        window.vertexShader = \`${fs.readFileSync('vert.glsl')}\`;
        window.fragmentShader = \`${fs.readFileSync('frag.glsl')}\`;
        ${fs.readFileSync('shader.js')}
        regenerate()
        addEventListener('pointerdown', regenerate)
        function regenerate() {
            ${fs.readFileSync('main.js')}
        }
        console.log('${info}')
    ]]>
    </script>
</svg>`)


