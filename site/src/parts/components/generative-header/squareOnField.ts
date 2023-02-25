import {rnd} from "./framework";
import {many} from "../../tools";
import {NeuralInterfaceFlowField} from "./createField";
import {NeuralInterfaceSettings} from "./newSettings";


export function squareOnField(
    field: NeuralInterfaceFlowField[][],
    settings: NeuralInterfaceSettings
){
    let w = 5 + rnd(15)|0;
    let h = 5 + rnd(15)|0;
    let x = rnd(settings.cellCountX) | 0;
    let y = rnd(settings.cellCountY) | 0;
    addSquareOnField(x,y,w,h,field)
}

export function addSquareOnField(x,y,w,h,field: NeuralInterfaceFlowField[][]){
    many(w, i => {
        try {
            field[x+i][y][0] = 0
        } catch (e){}
    })
    many(h, i => {
        try {
            field[x+w][y+i][0] = -Math.PI/2
        } catch (e){}
    })
    many(w, i => {
        try {
            field[x+w-i][y+h][0] = Math.PI
        } catch (e){}
    })
    many(h, i => {
        try {
            field[x][y+h-i][0] = Math.PI/2
        } catch (e){}
    })
}