const fs = require('fs');

fs.writeFileSync('fp.svg', `

<!-- author https://t.me/strangerintheq -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <foreignObject>
        <canvas id="canvas" xmlns="http://www.w3.org/1999/xhtml"></canvas>
    </foreignObject>
    <script type="text/javascript">
    <![CDATA[
        window.fragmentShader = \`${fs.readFileSync('frag.glsl')}\`;  
        ${fs.readFileSync('code.js')}
    ]]>
    </script>
</svg>

`)
