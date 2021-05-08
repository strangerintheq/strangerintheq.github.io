const fs = require('fs');

fs.writeFileSync('mst.svg', `

<!-- 
    multi scale truchet
    by https://t.me/strangerintheq -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <foreignObject>
        <canvas id="canvas" xmlns="http://www.w3.org/1999/xhtml"></canvas>
    </foreignObject>
    <script type="text/javascript">
    <![CDATA[
        ${fs.readFileSync('code.js')}
    ]]>
    </script>
</svg>

`)
