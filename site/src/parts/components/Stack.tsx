
import React from "react";

export function Stack({children = null}) {
    let style = {display: "absolute", top:0, left: 0,
        lineHeight: 0, width:"100vw", height:'100vh'};
    return <>
        {children && [...children].map(node => {
            return <div style={style}>
                {node}
            </div>
        })}
    </>
}