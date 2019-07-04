let mouse = {x:0, y:0},
    progress = 0;

setInterval(e => progress = (progress + Math.random()/100)%1, 100)
requestAnimationFrame(draw);
addEventListener('pointermove', e => {mouse.x = e.x, mouse.y = e.y})

function draw(t) {

    requestAnimationFrame(draw);

    // двигаем зрачок
    let dx = mouse.x - innerWidth/2,
        dy = mouse.y - innerHeight/2,
        len = Math.sqrt(dx*dx + dy*dy),
        ml = Math.min(len*10/innerHeight, 1),
        a = Math.atan2(dy, dx),
        x = Math.cos(a) * ml,
        y = Math.sin(a)/2 * ml;

    circle1.setAttribute('cx', x);
    circle1.setAttribute('cy', y);
    circle2.setAttribute('cx', x);
    circle2.setAttribute('cy', y);

    // процент загрузки
    let r = 1.8,
        p = progress *2 * Math.PI,
        px = r*Math.cos(p),
        py = r*Math.sin(p),
        arc = 1-Math.round(progress);

    load.setAttribute('d', `M${r},0 A${r},${r},0,${arc},0,${px},${py}L0,0z`)
    load.setAttribute('transform', `translate(${x}, ${y})`)

    // анимируем градиент
    let offset = Math.max(0.2, (0.5 - len/2/innerHeight))*100 + "%";
    grad1.setAttribute('offset', offset);
    grad2.setAttribute('offset', offset);

    // сглаживаем время по формуле easeInOutQuint
    t = Math.max(0, Math.sin(t/300));
    t = (t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t)*6-3;

    // кривая Безье в зависимости от сглаженного значения времени
    let d = `-7 0C-2 ${t} 2 ${t} 7 0`;
    mask.setAttribute('d', `M-7 -7${d}L7 -7z`);
    eyelid.setAttribute('d', `M${d}`);
}