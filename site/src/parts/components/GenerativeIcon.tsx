import React from "react";
import {many, pick, rnd, rndb} from "../tools";

export function GenerativeIcon({size = "1.5rem"}) {
    const s = 4;
    const pad = 0.1;
    const rx = rndb() ? 1 : pick([0.2, 0.1]);
    const red = (Math.random() * 4 ** 2) | 0;
    const rot = rnd(360);
    const pos = (ind, scl = 1, rot = 0) => `translate(${[
        ind % s - s / 2 + 0.5,
        ((ind / s) | 0) - s / 2 + 0.5
    ]}) rotate(${rot}) scale(${scl})`;

    const elements = many(s ** 2, i => i)
        .filter(() => Math.random() > 0.5);

    return <>
        {/*<div dangerouslySetInnerHTML={{__html:`<style>*/}
        {/*        @keyframes rotate {*/}
        {/*            0% {transform: rotate(0)}*/}
        {/*            100% {transform: rotate(360deg)}*/}
        {/*        }*/}
        {/*    </style>`}}/>*/}
        <svg
            overflow={"visible"}
            viewBox={[-s / 2 - pad, -s / 2 - pad, s + pad * 2, s + pad * 2]}
            style={{height: size, width: size, verticalAlign: "middle"}}
        >

            {elements.map(i => {
                return <g transform={pos(i, 1.3)}>
                    <rect rx={0.2}
                          width={1} height={1}
                          fill={'#fff'} x={-0.5} y={-0.5}/>
                </g>
            })}
            {elements.map(i => {
                return <g transform={pos(i, 1.1)}>
                    <rect rx={0.1}
                          width={1} height={1}
                          fill={'#000'} x={-0.5} y={-0.5}/>
                </g>
            })}

            {many(1, i => {
                return <g transform={pos(red, rnd(0.5) + 1.5-0.08*i, rot+i*4)}>
                    <rect
                        // style={{animation: "rotate 10s infinite"}}
                        rx={rx}
                        width={1} height={1}
                        fill={`#${"fedcba9876543210"[i]}00`} x={-0.5} y={-0.5}/>
                </g>
            })}

        </svg>
    </>
}
