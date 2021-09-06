function newArt() {
    const old = document.querySelector('canvas');
    old && old.remove();
    const palette = window.colors[Math.floor(Math.random()*window.colors.length)]
     // console.log(palette.map(hexToRgb));
    const canvas = document.createElement('canvas');
    document.body.append(canvas);
    const norm = c => c.map(i => (i/255).toFixed(6))
    const col = (c, i) => `COLORS[${i}] = vec3( ${c[0]}, ${c[1]}, ${c[2]} )`;
    const webglProgram = program(canvas, `
        void main() {
            vec3 COLORS[5];
            ${palette.map(hexToRgb).map(norm).map(col).join(';\n')};
        
            vec2 p = gl_FragCoord.xy/resolution-0.5;
            p.x *= resolution.x/resolution.y;
            gl_FragColor = vec4(COLORS[2], 1.0);
        }
    `);
    webglProgram.draw();
}

addEventListener('pointerdown', e => {
    (!e || e.button === 0) && newArt()
});

newArt();