import {PI, poissonDiscSampler, rndb, rndr45} from "./framework";
import {many, pick} from "../tools";
import {rnd} from "./framework";
import {NeuralInterfaceSettings} from "./newSettings";
import {addSquareOnField} from "./squareOnField";

function getColors(settings){
    return [
        pick(settings.colors[0]),
        pick(settings.colors[1]),
        pick(settings.colors[2]),
    ]
}

export function getPts(settings:NeuralInterfaceSettings, w,h) {


    const sampler = poissonDiscSampler(w, h, w/5);


    return many(settings.count, (i) => {
        let pt = sampler();
        let x = pt ? pt[0] : rnd(w);
        let y = pt ? pt[1] : rnd(h);

        let dir = rndb() ?0:PI

        return {
            i, x, y,
            dir,
            stopped: false,
            width: 0.1,
            started: false,
            colors: getColors(settings),
            reset() {
                this.started = false;
                this.x = rnd(w);
                this.y = rnd(h);
            }
        }
    });
}