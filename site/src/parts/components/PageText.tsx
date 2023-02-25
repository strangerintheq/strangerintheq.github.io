import React from "react";

export function PageText({children = null}) {
    return <div style={{fontSize:'1.5rem', marginTop: '2rem'}}>
        {children}
    </div>
}