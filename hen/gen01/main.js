let play = 1;
function randomize(e) {
    if (e && e.button === 2)
        return
    c.style.background = 'black'
    uf1('count', 3 + Math.floor(Math.random()*9));
    uf1('tiles', 1 + Math.floor(Math.random()*3));
    uf1('tiles2', 1 + Math.floor(Math.random()*3));
    uf1('thickness', 130 + Math.floor(Math.random()*333));
    uf1('shift', 5 + Math.floor(Math.random()*10));
    uf3('color', Math.random(),Math.random(),Math.random());
    uf3('features', Math.random(),Math.random(),Math.random());
}

randomize(null);

addEventListener('pointerdown', randomize);
let time = 0, t0 = 0;
requestAnimationFrame(function loop(t){
    resize();
    let dt = t - t0
    if (play)
        time += dt/1000;
    t0 = t;
    uf1('time', time);
    uf1('colShift', Math.sin(time));
    gl.drawArrays(gl.TRIANGLES,0,3)
    requestAnimationFrame(loop);
})

addEventListener('keyup', function (e){
    if (e.code === 'Space')
        play = !play
})