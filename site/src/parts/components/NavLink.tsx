import React from "react";

export function NavLink({to = "", children = null}) {
    return <span style={{
        textDecoration: "underline",
        cursor: "pointer"
    }} onPointerDown={() => {
        document.location.search = to;
    }}>{children}</span>
}

export function makeLink(o) {
    return Object.entries(o)
        .map(([key, value]) => key + "=" + value)
        .join("&");
}