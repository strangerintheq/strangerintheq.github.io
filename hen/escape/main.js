
function randomize(e) {
    if (e && e.button === 2)
        return
    c.style.background = Math.random() > 0.5 ?'white':'black'
    uf1('count', 3 + Math.floor(Math.random()*15));
    uf1('tiles', 1 + Math.floor(Math.random()*3));
    uf1('thickness', 30 + Math.floor(Math.random()*222));
    uf1('shift', 1 + Math.floor(Math.random()*5));
    uf3('color', Math.random(),Math.random(),Math.random());
}

randomize();

addEventListener('pointerdown', randomize);

requestAnimationFrame(function loop(t){
    resize();
    uf1('time', t/1000);
    uf1('colShift', Math.sin(t/1000));
    gl.drawArrays(gl.TRIANGLES,0,3)
    requestAnimationFrame(loop);
})

