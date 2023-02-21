import React from "react";

export function ProjectsGrid({children=null, title, ratio, isMobile, rows}){

    const gap = isMobile ? 0.02 : 0.01;
    const cellSize = (0.8 - gap * (isMobile ? 1 : 3)) / (isMobile ? 2 : 4);
    const w = fromBaseSize(cellSize);// `calc(var(--base-size) * ${cellSize})`;
    const h = fromBaseSize(cellSize*ratio);//`calc(var(--base-size) * ${cellSize*ratio})`;

    return <div style={{marginTop: 80}}>

        <div style={{fontSize: '2em'}}>
            <span>{title}</span>
        </div>

        <div style={{
            marginTop: 40,
            display: "grid",
            gap: `calc(var(--base-size) * ${gap})`,
            gridTemplateColumns: isMobile ? `${w} ${w}` : `${w} ${w} ${w} ${w}`,
            gridTemplateRows: `repeat(${rows}, ${h})`,
        }}>

            {children}

        </div>
    </div>
}

function fromBaseSize(s) {
    return `calc(var(--base-size) * ${s})`;
}