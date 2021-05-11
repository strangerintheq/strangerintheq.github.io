const fs = require('fs');
const name = 'brush';

const info = `${name}  by https://t.me/strangerintheq`;
fs.writeFileSync(name + '.svg', `<!-- ${info}  -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <foreignObject>
        <canvas id="canvas" xmlns="http://www.w3.org/1999/xhtml"></canvas>
    </foreignObject>
    <script type="text/javascript">
    <![CDATA[
        ${fs.readFileSync('canvas2d.js')}
        regenerate()
        addEventListener('pointerdown', regenerate)
        function regenerate() {
            ${fs.readFileSync('main.js')}
        }
        console.log('${info}')
    ]]>
    </script>
</svg>`)

