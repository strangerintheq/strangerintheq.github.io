import React from "react";

export function Button(props) {

    let s = 100;

    const svg = `
        <svg 
            xmlns='http://www.w3.org/2000/svg' 
            viewBox='${[0, 0, s, s]}'>
            <rect r="50"></rect>
        </svg>
    `

    return <button
        style={{
            fontSize: "2em",
            border: 0,
            background: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
        }}
    >
        {props.children}
    </button>
}