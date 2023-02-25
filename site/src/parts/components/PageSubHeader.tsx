import React from "react";
import {GenerativeIcon} from "./GenerativeIcon";

export function PageSubHeader({children = null}) {
    return <div style={{fontSize: '2rem', marginTop: '2rem', marginLeft:"-1rem"}}>
        <GenerativeIcon/>&nbsp;{children}
    </div>;
}