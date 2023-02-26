import React from "react";

export function PageSubHeader({children = null}) {
    return <div style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginTop: '2rem',
        marginLeft: "0rem"
    }}>
        {children}
    </div>;
}