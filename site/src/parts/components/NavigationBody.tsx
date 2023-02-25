import React from "react";

export function NavigationBody({children=null}){
    return <div style={{
        margin: '0 -1rem'
    }}>
        <div
            className={"text-shadow"}
            style={{
                padding: "0.5rem 1rem",
                fontSize: "2.5rem",
                marginTop: '1rem',
                display: "flex",
                pointerEvents: "all",
                justifyContent: "space-between",
        }}>
            {children}
        </div>
    </div>;
}