import {rnd} from "./framework";
import {NeuralInterfaceSettings} from "./newSettings";
import {NeuralInterfaceFlowField} from "./createField";

export function circleOnField(
    field: NeuralInterfaceFlowField[][],
    settings: NeuralInterfaceSettings
) {
    let
        n = 100,
        r = rnd(4) + 2,
        cx = rnd(settings.cellCountX),
        cy = rnd(settings.cellCountY);

    for (let i = 0; i < n; i++) {
        // r -= 0.05
        try {
            let a = i / n * Math.PI * 2;
            let x = cx + (Math.cos(a) * r) | 0;
            let y = cy + (Math.sin(a) * r) | 0;
            field[x][y][0] =  (rnd()>rnd(7) ? 0.3 : a + Math.PI/2);
        } catch (e) {}
    }
}