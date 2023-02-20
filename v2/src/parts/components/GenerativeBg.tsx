import React, {useCallback, useEffect, useRef, useState} from "react";
import {
    fillRect,
    prng2x,
    randomHash, rnd,
    setRandomGenerator, strokeRect
} from "../generative-header/framework";
import {NeuralInterfaceSettings, newSettings} from "../generative-header/newSettings";
import {createField, NeuralInterfaceFlowField} from "../generative-header/createField";
import {getPts} from "../generative-header/getPts";
import {tick} from "../generative-header/tick";
import {SimplexNoise} from "three/examples/jsm/math/SimplexNoise";

export function GenerativeBg() {

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
        restrictions: {width, height,right,bottom}[]
    }>({});


    useEffect(() => {

        setTimeout(() => {
            let s = stateRef.current;
            let canvas = canvasRef.current;
            s.w = canvas.width = document.body.clientWidth;
            s.h = canvas.height = document.body.clientHeight;
            s.ctx = canvas.getContext("2d")

            let hash = randomHash()
            setRandomGenerator(prng2x(hash))

            const noise = new SimplexNoise();

            let pal = ["#000", "#111", "#222", "#333", "#444"]
            s.settings = newSettings(pal, s.w, s.h);

            s.restrictions = [...document.querySelectorAll(".mask .project-thumbnail, h2 span")].map((mask:any) => {
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
        // fillRect(stateRef.current.ctx, 'black', -1e5,-1e5,2e5,2e5)

    }, [])


    const drawFrame = useCallback(() => {
        let s = stateRef.current;

        s.pts.forEach(p => {
            tick(s.field, p, s.w, s.h, s.settings, s.ctx, (x, y) => {
                return s.restrictions.find(box => inside(x, y, box))
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