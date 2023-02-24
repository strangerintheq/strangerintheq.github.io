import React from "react";
import {sidePadding} from "../vars";

export function PageWrapper(props) {
    return <div style={{
        width: `var(--base-size)`,
        margin: `0 calc(50vw - calc(var(--base-size) * 0.5))`,
        padding: `0 calc(var(--base-size) * ${sidePadding})`,
        overflow: `visible`,
        paddingBottom: 100
    }}>
        {props.children}
    </div>
}