const fs = require('fs');

fs.writeFileSync('fp.svg', `

<!-- author https://t.me/strangerintheq -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <foreignObject>
        <canvas id="canvas" xmlns="http://www.w3.org/1999/xhtml"></canvas>
    </foreignObject>
    <script type="text/javascript">
    <![CDATA[
    
        ${fs.readFileSync('controls.js')}
    
        const shaders = {
         fragment: \`${fs.readFileSync('frag1.glsl')}\`,
         vertex: \`${fs.readFileSync('vert.glsl')}\`  
        }
        
        ${fs.readFileSync('code.js')}
    ]]>
    </script>
</svg>

`)
