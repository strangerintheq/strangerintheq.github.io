import React from "react";

export function PageWrapper(props) {
    return <div style={{
        zIndex: 10,
        width: `var(--base-size)`,
        margin: `0 calc(50vw - calc(var(--base-size) * 0.5))`,
        padding: `0 calc(var(--base-size) * 0.1)`,
        overflow: `visible`
    }}>
        {props.children}
    </div>
}