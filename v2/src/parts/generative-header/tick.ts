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
import {many} from "../tools";

export function tick(field, p, w, h,
                     settings:NeuralInterfaceSettings,
                     c:CanvasRenderingContext2D,
                     restrict
){
    many(10, ()=> {
        try {
            if (p.stoped)
                return;

            if (restrict(p.x, p.y)){
                p.stoped = true;
                drawCircle(c,p.x, p.y, rnd(2) + 1)
                if (rnd() > 0.7) {
                    c.fill()
                }
                return;
            }


            const ix = (p.x / w * settings.cellCountX) | 0;
            const iy = (p.y / h * settings.cellCountY) | 0;
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
            const step = 1;
            const x = p.x + cos(a) * step;
            const y = p.y + sin(a) * step;
            start(p, type, c);
            drawLineSeg(c, [{x,y}, p])
            p.x = x;
            p.y = y;
        } catch (e) {}
    })
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
