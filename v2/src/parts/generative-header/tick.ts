import {cell} from "./cell";
import {NeuralInterfaceSettings} from "./newSettings";
import {
    drawCircle,
    drawLineSeg,
    setFillStyle,
    setLineWidth,
    setStrokeStyle
} from "./framework";

import {cos, rnd, sin} from "./framework";

export function tick(field, p, size,
                     settings:NeuralInterfaceSettings,
                     c:CanvasRenderingContext2D
){
    try {
        const ix = (p.x / size * settings.cellCount) | 0;
        const iy = (p.y / size * settings.cellCount) | 0;
        let fix = field[ix];
        if (!fix)
            return
        let fixiy = fix[iy];
        if (!fixiy)
            return
        const a = fixiy[0];
        const type = fixiy[1];
        setLineWidth(c, p.width)
        setStrokeStyle(c, p.colors[type])
        const step = 3;
        const x = p.x + cos(a) * step;
        const y = p.y + sin(a) * step;
        start(p, type, c);
        drawLineSeg(c, [{x,y}, p])
        p.x = x;
        p.y = y;
    } catch (e) {

    }
}

function start(p, type, c:CanvasRenderingContext2D) {
    if (p.started)
        return
    setFillStyle(c, p.colors[type])
    if (type === 2) {
        drawCircle(c,p.x, p.y, rnd(2) + 1)
        if (rnd() > 0.7) {
            c.fill()
        }
    }
    if (type === 0) {
        cell(c, p.x, p.y, rnd(5) + 1)
    }
    p.started = true;
}
