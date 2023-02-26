import React from "react";
import {MAX_WIDTH_980, useMediaQuery} from "../hooks/useMediaQuery";

export function Grid({children = null, ratio = 1, rows = null}) {
    const {matches: isMobile} = useMediaQuery(MAX_WIDTH_980);
    const gap = isMobile ? 0.02 : 0.01;
    const cellSize = (0.8 - gap * (isMobile ? 1 : 3)) / (isMobile ? 2 : 4);
    const w = fromBaseSize(cellSize);// `calc(var(--base-size) * ${cellSize})`;
    const h = fromBaseSize(cellSize * ratio);//`calc(var(--base-size) * ${cellSize*ratio})`;
    const row = rows || Math.ceil(children.length / (isMobile?2:4))
    return <div style={{
        margin: '2rem 0 6rem 0',
        display: "grid",
        gap: `calc(var(--base-size) * ${gap})`,
        gridTemplateColumns: isMobile ? `${w} ${w}` : `${w} ${w} ${w} ${w}`,
        gridTemplateRows: `repeat(${row}, ${h})`,
    }}>
        {children}
    </div>
}

function fromBaseSize(s) {
    return `calc(var(--base-size) * ${s})`;
}