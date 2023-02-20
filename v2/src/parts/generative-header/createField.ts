import {frameOnField} from "./frameOnField";
import {circleOnField} from "./circleOnField";
import {squareOnField} from "./squareOnField";
import {cos, rnd, sin} from "./framework";
import {many} from "../tools";


export type NeuralInterfaceFlowField = number[]


export function createField(noise, settings, seed) : NeuralInterfaceFlowField[][]{
    let {cellCount, noiseSize2, noiseSize1, side} = settings;
    let shape = 3 + rnd(4) | 0;
    let rotate = rnd(7);
    let field = many(cellCount, x => many(cellCount, y => {
        let d = Math.hypot(x - cellCount / 2, y - cellCount / 2)
        // if (d < 26) {
            let a = noise.noise(x / noiseSize1 + seed , y / noiseSize1 + seed );
            return side ? [a * Math.PI * 2, 0] : [Math.round(a * 4) / 4 * Math.PI, 2];
        // } else if (d > 34) {
        //     let a = noise.noise(x / noiseSize2 + seed , y / noiseSize2 + seed );
        //     return !side ? [a * Math.PI * 2, 0] : [Math.round(a * 4) / 4 * Math.PI, 2];
        // } else {
        //     let a = Math.atan2(y - cellCount / 2, x - cellCount / 2);
        //     return [
        //         a + Math.PI / 2 + sin(a * shape+rotate) * 0.3 + cos(a * shape * 0.7-rotate) * 0.5,
        //         1
        //     ]
        // }
    }));

    frameOnField(field);

    many(3 + rnd(7)|0, () => circleOnField(field));
    many(2 + rnd(3)|0, () => squareOnField(field));
    return field;
}