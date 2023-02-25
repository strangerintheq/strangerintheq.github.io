import React from "react";
import {many} from "../tools";

export function GenerativeIcon({size = "1.5rem"}) {
    const s = 4;
    const pad = 0.1
    const red = (Math.random() * 4 ** 2) | 0;
    const pos = i => `translate(${[
        i % s - s / 2 + 0.5, 
        ((i / s) | 0) - s / 2 + 0.5
    ]})`;

    const elements = many(s ** 2, i => i)
        .filter(() => Math.random()>0.5);

    return <>
        <svg
            overflow={"visible"}
            viewBox={[-s / 2 - pad, -s / 2 - pad, s + pad * 2, s + pad * 2]}
            style={{height: size, width: size, verticalAlign: "middle"}}
        >
            {elements.map(i => {
                return <g transform={pos(i) + 'scale(1.2)'}>
                    <rect
                        width={1} height={1}
                        fill={'#fff'} x={-0.5} y={-0.5}/>
                </g>
            })}
            {elements.map(i => {
                return <g transform={pos(i)}>
                    <rect
                        width={1} height={1}
                        fill={'#000'} x={-0.5} y={-0.5}/>
                </g>
            })}
            <g transform={pos(red)+ `rotate(${Math.random() * 360})scale(1.5)`}>
                <rect
                    width={1} height={1}
                    fill={'#f00'} x={-0.5} y={-0.5}/>
            </g>
        </svg>
    </>
}
