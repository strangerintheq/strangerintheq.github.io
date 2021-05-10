const debug = 1;

clear();

const pointsCount = 2*(2 + randomInt(5));
const points = many(pointsCount, () => [124 + random(size-248), 124 + random(size-248)]);

for (let i = 0; i < points.length; i += 2) {

    const colorsCount = 2 + randomInt(30);
    const alpha = 0.4*Math.random()*Math.random() + 0.1  + random(0.4);;
    const colors = many(colorsCount, () => hsla(random(360), 55, 55, alpha));

    const total = len(...points[i], ...points[i + 1]);
    const k = random(total/4)-total/8
    const spr = 10 + random(20)
    colors.forEach((color, index) => {
        ctx.fillStyle = color;
        arc(...points[i], ...points[i + 1], index/30, k, colors, spr)
    })

    if (debug) {
        debugArc(...points[i], ...points[i + 1], colors.length*5)
    }
}

function ellipse(x,y,r){

}

function arc(x1, y1, x2, y2, t, k, colors, spr) {

    const a = dir(x1, y1, x2, y2) + Math.PI/2;
    const cs = cos(a)
    const sn = sin(a)

    const p = (t - 0.5)*colors.length*5;

    const dx = random(spr, spr/2) + p*cs
    const dy = random(spr, spr/2) + p*sn

    x1 += dx;
    y1 += dy;
    x2 += dx;
    y2 += dy;

    const total = len(x1, y1, x2, y2);

    let current = 0;

    while (current < total) {
        const t = current / total;
        const r = random(1) + 1;
        const f = sin(t*Math.PI)*k;
        const x = lerp(x1, x2, t) + random(4) + cs * f;
        const y = lerp(y1, y2, t) + random(4) + sn * f;
        circle(x, y, r);
        current += r*2;
    }
}

function debugArc(x1, y1, x2, y2, s){
    const a = dir(x1, y1, x2, y2) + Math.PI/2;
    line(x1, y1, x2, y2);
    const x = 0.5*s*cos(a);
    const y = 0.5*s*sin(a);
    [[x1, y1], [x2, y2]].forEach(pt => line(-x+pt[0], -y+pt[1], x+pt[0], y+pt[1]))
}