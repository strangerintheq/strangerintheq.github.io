import React, {useCallback, useEffect, useRef, useState} from "react";
import {
    prng2x,
    rnd, setLineWidth,
    setRandomGenerator, strokeRect
} from "./framework";
import {NeuralInterfaceSettings, newSettings} from "./newSettings";
import {createField, NeuralInterfaceFlowField} from "./createField";
import {getPts} from "./getPts";
import {tick} from "./tick";
import {SimplexNoise} from "three/examples/jsm/math/SimplexNoise";
import {randomHash} from "../../tools";

export function GenerativeHeader() {

    const canvasRef = useRef<HTMLCanvasElement>();
    const [initialized, setIsInitialized] = useState<boolean>();

    const stateRef = useRef<{
        ctx: CanvasRenderingContext2D;
        settings: NeuralInterfaceSettings;
        rafLoop: number;
        field: NeuralInterfaceFlowField[][];
        pts;
        h: number;
        w: number;
        mask:ImageData;
        restrictions: {width, height,right,bottom}[]
    }>({});

    useEffect(() => {
        setTimeout(() => {
            let s = stateRef.current;
            let canvas = canvasRef.current;

            s.w = canvas.width = innerWidth;
            s.h = canvas.height = innerHeight;
            s.ctx = canvas.getContext("2d");

            let mask = document.createElement("canvas");
            mask.width = s.w;
            mask.height = s.h;
            let maskCtx = mask.getContext("2d");
            maskCtx.font = "170px Arial, sans-serif";
            maskCtx.fillText("I'm Stranger in the Q", 50, 200);
            s.mask = maskCtx.getImageData(0,0,s.w, s.h);
            setLineWidth(s.ctx,0.1)

            let hash = randomHash("")
            setRandomGenerator(prng2x(hash))

            const noise = new SimplexNoise();

            let pal = ["#000", "#000", "#000", "#000", "#000"]
            s.settings = newSettings(pal, s.w, s.h);

            s.restrictions = [...document.querySelectorAll("span")]
                .map((mask:any) => {
                    let pad = 5;
                    let rect = {
                        top: mask.offsetTop - pad,
                        left: mask.offsetLeft - pad,
                        right: mask.offsetLeft + mask.offsetWidth + pad,
                        bottom: mask.offsetTop + mask.offsetHeight + pad
                    };
                    // console.log(rect)
                    strokeRect(s.ctx, "#000", rect.left,  rect.top,  rect.right-rect.left, rect.bottom-rect.top)
                    return rect
                })

            s.field = createField(noise, s.settings, rnd(111));

            s.pts = getPts(s.settings, s.w, s.h).filter(p => {
                return !s.restrictions.find(box => inside(p.x, p.y, box))
            });

            setIsInitialized(true)

        }, 111)
    }, [])


    const drawFrame = useCallback(() => {
        let s = stateRef.current;

        s.pts.forEach(p => {
            tick(s.field, p, s.w, s.h, s.settings, s.ctx, (x, y) => {
                let index = (y|0)*s.w*4 + (x|0)*4
                let masked = s.mask.data[index+3] > 100;
                return masked;// || s.restrictions.find(box => inside(x, y, box))
            });
        });
    });

    useEffect(() => {

        let s = stateRef.current;

        if (initialized)
            s.rafLoop = requestAnimationFrame(loop);

        function loop(t) {
            drawFrame()
            s.rafLoop = requestAnimationFrame(loop)
        }

        return () => {
            s.rafLoop && cancelAnimationFrame(s.rafLoop);
        }

    }, [initialized])

    return <div style={{height: 0, overflow: "visible"}}>
        <canvas ref={canvasRef}/>
    </div>
}

function inside(x, y, box: DOMRect) {
    return x > box.left && x < box.right && y > box.top && y < box.bottom
}