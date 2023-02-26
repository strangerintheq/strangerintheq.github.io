import React from "react";

export function NavLink({to = ""+Date.now(), children = null}) {
    return <span style={{
        textDecoration: "underline",
        cursor: "pointer",
        pointerEvents: "all",
    }} onClick={() => {
        history.pushState({}, "", '?' + to)
    }}>{children}</span>
}

