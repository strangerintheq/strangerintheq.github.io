const fs = require('fs');
const name = 'spiritual_body';
const info = `${name}  by https://t.me/strangerintheq`;

fs.writeFileSync(name + '.svg', `<!-- ${info}  -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" >
    <foreignObject>
        <canvas id="canvas" xmlns="http://www.w3.org/1999/xhtml" ></canvas>
    </foreignObject>
    <script type="text/javascript">
    <![CDATA[
        window.vertexShader = \`${fs.readFileSync('src/vert.glsl')}\`;
        window.fragmentShader = \`${fs.readFileSync('src/frag.glsl')}\`;
        ${fs.readFileSync('shader.js')}
        regenerate()
        addEventListener('pointerdown', regenerate)
        function regenerate() {${fs.readFileSync('src/main.js')}}
        console.log('${info}')
    ]]>
    </script>
</svg>`)


