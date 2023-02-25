
import {NeuralInterfaceSettings} from "./newSettings";
import {
    drawCircle,
    drawLineSeg, PI, rndb, rndr, rndr45, rndr90, rnds,
    setFillStyle,
    setLineWidth,
    setStrokeStyle
} from "./framework";

import {cos, rnd, sin} from "./framework";
import {many} from "../../tools";

export function tick(field, p, w, h,
                     settings:NeuralInterfaceSettings,
                     c:CanvasRenderingContext2D,
                     restrict
){
    many(10, () => {
        try {
            // if (restrict(p.x, p.y)){
            //     if (rndb(0.9))
            //     p.dir = rndr()
            // } else {
            //     p.dir = PI
            // }
            const ix = (p.x / w * settings.cellCountX) | 0;
            const iy = (p.y / h * settings.cellCountY) | 0;
            let fix = field[ix];
            let fixiy = fix[iy];
            const a = fixiy[0] + p.dir;
            const type = fixiy[1];
            setLineWidth(c, p.width)
            setStrokeStyle(c, "#000")
            const step = 1;
            const x = p.x + cos(a) * step;
            const y = p.y + sin(a) * step;
            start(p, type, c);
            drawLineSeg(c, [{x,y}, p])
            p.x = x;
            p.y = y;
        } catch (e) {
            p.x = rnd(w)
            p.y = rnd(h)
        }
    })
}

function start(p, type, c:CanvasRenderingContext2D) {
    if (p.started)
        return
    // setFillStyle(c, p.colors[type])
    // if (type === 2) {
    //     drawCircle(c,p.x, p.y, rnd(2) + 1)
    //     if (rnd() > 0.7) {
    //         c.fill()
    //     }
    // }
    // if (type === 0) {
    //     cell(c, p.x, p.y, rnd(5) + 1)
    // }
    p.started = true;
}
