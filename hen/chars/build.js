const fs = require('fs');

fs.writeFileSync('ancientletter.svg', `
<!--
    ancient letter
    by https://t.me/strangerintheq
-->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-510,-510,1020,1020" fill="none" stroke="black"
                    stroke-linecap="round" stroke-linejoin="round">
                    
    <script type="text/javascript">
    <![CDATA[
        ${fs.readFileSync('code.js')}
    ]]>
    </script>
</svg>


`)
