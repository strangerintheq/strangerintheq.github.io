import React, {useCallback, useEffect, useRef} from "react";
import {
    max,
    min,
    prng2x,
    randomHash, rnd,
    setRandomGenerator
} from "../generative-header/framework";
import {NeuralInterfaceSettings, newSettings} from "../generative-header/newSettings";
import {createField, NeuralInterfaceFlowField} from "../generative-header/createField";
import {getPts} from "../generative-header/getPts";
import {tick} from "../generative-header/tick";
import {SimplexNoise} from "three/examples/jsm/math/SimplexNoise";

export function GenerativeHeader() {

    const canvasRef = useRef<HTMLCanvasElement>();

    const stateRef = useRef<{
        ctx: CanvasRenderingContext2D;
        settings: NeuralInterfaceSettings;
        rafLoop: number;
        field: NeuralInterfaceFlowField[][];
        pts;
    }>({});


    useEffect(() => {
        let s = stateRef.current;
        canvasRef.current.width = innerWidth;
        canvasRef.current.height = innerWidth/3
        s.ctx = canvasRef.current.getContext("2d")

        let hash = randomHash()
        setRandomGenerator(prng2x(hash))


        const noise = new SimplexNoise();

        let pal = ["#000", "#111", "#222", "#333", "#444"]
        s.settings = newSettings(pal, innerWidth);
        s.field = createField(noise, s.settings, rnd(111));
        s.pts = getPts(s.settings, innerWidth);
        // fillRect(stateRef.current.ctx, 'black', -1e5,-1e5,2e5,2e5)

    }, [])


    const drawFrame = useCallback(() => {
        let s = stateRef.current;
        s.pts.forEach(p => {
            tick(s.field, p, innerWidth, s.settings, s.ctx);
        });
    });

    useEffect(() => {
        let s = stateRef.current;
        s.rafLoop = requestAnimationFrame(loop);

        function loop(t) {
            drawFrame()
            if (t<5000)
                s.rafLoop = requestAnimationFrame(loop)
        }

        return () => {
            s.rafLoop  && cancelAnimationFrame(s.rafLoop );
        }

    }, [])

    return <canvas ref={canvasRef}  style={{marginBottom: -innerWidth/3}}/>

}