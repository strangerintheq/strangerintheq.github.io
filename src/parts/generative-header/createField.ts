import {frameOnField} from "./frameOnField";
import {circleOnField} from "./circleOnField";
import {addSquareOnField, squareOnField} from "./squareOnField";
import {cos, fillRect, rnd, sin} from "./framework";
import {many} from "../tools";
import {NeuralInterfaceSettings} from "./newSettings";


export type NeuralInterfaceFlowField = number[]


export function createField(
    noise,
    settings: NeuralInterfaceSettings,
    seed
): NeuralInterfaceFlowField[][] {
    let {cellCountX, cellCountY, noiseSize2, noiseSize1, side} = settings;
    // let shape = 3 + rnd(4) | 0;
    // let rotate = rnd(7);
    let field = many(cellCountX, x => many(cellCountY, y => {
        // let d = Math.hypot(x - cellCount / 2, y - cellCount / 2)
        if (x > cellCountX / 2) {
            let a = noise.noise(x / noiseSize1 + seed, y / noiseSize1 + seed);
            return [Math.round(a * 4) / 4 * Math.PI, 2];
        } else {
            let a = noise.noise(x / noiseSize2 + seed, y / noiseSize2 + seed);
            return [Math.round(a * 4) / 4 * Math.PI, 2];
        }
        // else {
        //     let a = Math.atan2(y - cellCount / 2, x - cellCount / 2);
        //     return [
        //         a + Math.PI / 2 + sin(a * shape+rotate) * 0.3 + cos(a * shape * 0.7-rotate) * 0.5,
        //         1
        //     ]
        // }
    }));

    frameOnField(field);

    many(11, () => circleOnField(field, settings));
    many(11, () => squareOnField(field, settings));

    return field;
}