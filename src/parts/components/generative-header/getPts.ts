import {many} from "../tools";
import {rnd} from "./framework";
import {NeuralInterfaceSettings} from "./newSettings";

export function getPts(settings: NeuralInterfaceSettings, w, h) {
    return many(settings.count, (i) => {
        return {
            i,
            x: rnd(w),
            y: rnd(h),
            dir: 0,
            width: 0.1
        }
    });
}