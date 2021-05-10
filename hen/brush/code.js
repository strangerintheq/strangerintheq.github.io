const debug = 0;

clear();

const pointsCount = 2*(2 + randomInt(3));
const points = many(pointsCount, () => [124 + random(size-248), random(size-248)]);



for (let i = 0; i < points.length; i += 2) {

    const colorsCount = 2 + randomInt(30);
    const alpha = 0.4*Math.random()*Math.random() + 0.1;
    const colors = many(colorsCount, () => hsla(random(360), 55, 55, alpha));

    const total = len(...points[i], ...points[i + 1]);
    const k = random(total/4)-total/8

    colors.forEach((color, index) => {
        ctx.fillStyle = color;
        randomArc(...points[i], ...points[i + 1], index/30, k,colors)
    })

    if (debug) {
        const a = dir(...points[i], ...points[i + 1]) + Math.PI/2;
        const cs = cos(a)
        const sn = sin(a)
        const p = 0.5*colors.length*5;
        line(...points[i], ...points[i + 1]);

        [points[i], points[i+1]].forEach(pt =>
            line(-p*cs+pt[0], -p*sn+pt[1], p*cs+pt[0], p*sn+pt[1]))
    }
}

function randomArc(x1, y1, x2, y2, t, k, colors) {

    const a = dir(x1, y1, x2, y2) + Math.PI/2;
    const cs = cos(a)
    const sn = sin(a)

    const p = (t - 0.5)*colors.length*5;

    const dx = random(30, 15) + p*cs
    const dy = random(30, 15) + p*sn

    x1 += dx;
    y1 += dy;
    x2 += dx;
    y2 += dy;

    const total = len(x1, y1, x2, y2);

    let current = 0;

    while (current < total) {
        const t = current / total;
        const r = random(5) + 2;
        const f = sin(t*Math.PI)*k;
        const x = lerp(x1, x2, t) + random(4) + cs * f;
        const y = lerp(y1, y2, t) + random(4) + sn * f;
        circle(x, y, r);
        current += r;
    }
}

