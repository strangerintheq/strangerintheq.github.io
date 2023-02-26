import React from "react";

export function NavLink({to = "", children = null}) {
    return <span style={{
        textDecoration: "underline",
        cursor: "pointer",
        pointerEvents: "all",
    }} onClick={() => {
        history.pushState({}, "", '?' + to)
    }}>{children}</span>
}

