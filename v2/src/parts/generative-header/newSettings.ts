import {rnd} from "./framework";

export type NeuralInterfaceSettings = {
    cellCount;
    count;
    noiseSize1;
    noiseSize2;
    side;
    colors: String[][],
}
export function newSettings(pal, size):NeuralInterfaceSettings {
    return {
        cellCount: 90 + rnd(30)|0,
        count: (size*0.3 + rnd(size*2))|0,
        noiseSize1: rnd(50)+30,
        noiseSize2: rnd(50)+30,
        side: rnd() > 0.5,
        colors:[
            [pal[0], pal[1], pal[2]],
            pal,
            [pal[2], pal[3], pal[4]]
        ],
    }
}