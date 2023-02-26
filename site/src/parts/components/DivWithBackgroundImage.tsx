import React  from "react";

const placeholder = ``

export function DivWithBackgroundImage({img = null}) {
    return <div
        style={{
            backgroundImage: `url(${img || placeholder})`,
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            boxShadow: '0 0 3px 0 #9c9898'
        }}
    />
}