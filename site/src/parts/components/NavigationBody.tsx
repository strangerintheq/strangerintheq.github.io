import React from "react";

export function NavigationBody({children=null}){
    return <div style={{
        margin: '0 -1rem'
    }}>
        <div
            className={"text-outline"}
            style={{
                padding: "0.5rem 1rem",
                fontSize: "2.5rem",
                lineHeight: "2.5rem",
                marginTop: '1rem',
                display: "flex",
                justifyContent: "space-between",
        }}>
            {children}
        </div>
    </div>;
}