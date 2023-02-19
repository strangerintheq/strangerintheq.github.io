import {cos, rnd, sin} from "./framework";
import {many} from "../tools";

export function cell(c:CanvasRenderingContext2D,x,y,r){
    if (rnd()>0.3)
        return
    let n = 6 + rnd(3)|0;
    let path = []
    many(n, i => {
        let a = i/(n-1)*Math.PI*2;
        let px = cos(a)*(r+rnd(3)) + x;
        let py = sin(a)*(r+rnd(3)) + y;
        if (!i) {
            path.push(['M', px, py].join(' '))
        } else {
            path.push(['Q', x+rnd(2)-1, y+rnd(2)-1, px, py].join(' '))
        }
    })
    path.push('z')
    const p = new Path2D(path.join(' '));
    c.fill(p);
}


