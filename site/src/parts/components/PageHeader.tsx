import React from "react";
import {useTitle} from "../hooks/useTitle";

export function PageHeader({children = null}) {
    useTitle(children)
    return <div style={{fontSize:'4rem', marginTop: '2rem'}}>
        {children}
    </div>
}