import React  from "react";

export function DivWithBackgroundImage({img}) {
    return <div
        style={{
            backgroundImage: `url(${img})`,
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            boxShadow: '0 0 3px 0 #9c9898'
        }}
    />
}