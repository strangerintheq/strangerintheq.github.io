import {rnd, rndi} from "./framework";

export type NeuralInterfaceSettings = {
    cellCountX;
    cellCountY;
    count;
    noiseSize1;
    noiseSize2;
    side;
    colors: String[][],
}
export function newSettings(pal, w, h):NeuralInterfaceSettings {
    let cellCountX = 222;
    return {
        cellCountX: cellCountX,
        cellCountY: (cellCountX/w*h)|0,
        count: (w*0.3 + rnd(w*2))|0,
        noiseSize1: rnd(50, 30),
        noiseSize2: rnd(50, 30),
        side: rnd() > 0.5,
        colors:[
            [pal[0], pal[1], pal[2]],
            pal,
            [pal[2], pal[3], pal[4]]
        ],
    }
}