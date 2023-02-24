import React from "react";

export function PageHeader({children = null}) {
    return <div style={{fontSize:'5rem', marginTop: '2rem'}}>
        {children}
    </div>
}