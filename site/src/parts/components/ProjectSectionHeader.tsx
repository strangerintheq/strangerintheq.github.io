import React from "react";

export function ProjectSectionHeader({children = null}) {
    return <div style={{fontSize: '2rem', marginTop: '2rem'}}>
        {children}
    </div>;
}