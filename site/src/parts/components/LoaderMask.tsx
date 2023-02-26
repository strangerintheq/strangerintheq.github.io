import React  from "react";

export function LoaderMask() {
    return <div className="backdrop">
        <svg viewBox="-50 -50 100 100" width="100vw" height="100vh">
            <g></g>
        </svg>
    </div>
}