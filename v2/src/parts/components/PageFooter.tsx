import React, {useMemo} from "react";
import {sitePath} from "../Crutch";


export function PageFooter({img}) {

    const background = `
        radial-gradient(circle at 50% -170%, #ffffffff 65%, #ffffff00 72%), 
        url(${sitePath + img}) no-repeat 50% 50%
    `;

    return <div>
        <div
            style={{
                marginTop: '-15vw',
                width: '100vw',
                height: '30vw',
                overflow: 'hidden'
            }}
        >
            <div
                style={{
                    width: '100vw',
                    height: '100vw',
                    background,
                    backgroundSize: '100% 100%'
                }}
            />
        </div>
    </div>
}