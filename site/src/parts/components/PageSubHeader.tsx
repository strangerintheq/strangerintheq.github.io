import React from "react";

export function PageSubHeader({children = null}) {
    return <div style={{fontSize: '2rem', marginTop: '2rem'}}>
        {children}
    </div>;
}