import React  from "react";

export function FooterBody({children=null}){
    return <div style={{
        margin: '0 -1rem 0.5rem -1rem'
    }}>
        <div
            className={"text-outline"}
            style={{
                padding: "0.5rem 1rem",
                fontSize: "2.5rem",
                margin: '1rem 0 ',
                display: "flex",
                justifyContent: "center",
        }}>
            {children}
        </div>
    </div>;
}