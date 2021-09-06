const fs = require('fs');
const name = 'hen05y';
const info = `${name} by strangerintheq`;
fs.writeFileSync(name + '.html', `

<!-- ${info} -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>${info}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:image" content="thumbnail.jpg" />
</head>
<body>
<style>
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
    }
</style>
<canvas id="canvas"></canvas>
<script type="text/javascript">
window.vertexShader = \`${fs.readFileSync('vert.glsl')}\`;

window.fragmentShader = \`${fs.readFileSync('frag.glsl')}\`;

${fs.readFileSync('shader.js')}

${fs.readFileSync('main.js')}

console.log('${info}')
    </script>
</body>
</html>

`);


