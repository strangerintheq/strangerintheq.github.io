import {poissonDiscSampler} from "./framework";
import {many, pick} from "../tools";
import {rnd} from "./framework";

function getColors(settings){
    return [
        pick(settings.colors[0]),
        pick(settings.colors[1]),
        pick(settings.colors[2]),
    ]
}

export function getPts(settings, size) {
    const sampler = poissonDiscSampler(size, size, size/20)
    return many(settings.count, (i) => {
        let pt = sampler();
        let x = pt ? pt[0] : rnd(size);
        let y = pt ? pt[1] : rnd(size);
        return {
            i, x, y,
            width: rnd(1) + 0.5,
            started: false,
            colors: getColors(settings),
            reset(){
                this.started = false;
                this.x = x;
                this.y = y;
            }
        }
    });
}