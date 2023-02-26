
import React from "react";

export function Stack({children = null}) {
    return <div style={{display: "grid", lineHeight: 0}}>
        {children && [...children].map(node => {
            return <div style={{gridColumn: 1, gridRow: 1}}>
                {node}
            </div>
        })}
    </div>
}