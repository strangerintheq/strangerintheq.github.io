import React, {useEffect, useState} from "react";
import {fetchCode, prepareArtBlocks, prepareFxHash, randomAbHash, randomFxHash, sitePath} from "../tools";

export function GeneratorAsBackground({type, id, hash = null}) {

    const [html, setHtml] = useState();
    const [code, setCode] = useState();

    useEffect(() => {
        let url = 'site/resources/art/' + type + '/' + id + '/generator.html';
        fetchCode(url).then(setCode);
        console.log(url)
    }, [id]);

    useEffect(() => {
        code && setHtml(type === "fx-hash" ?
            prepareFxHash(code, hash || randomAbHash()) :
            prepareArtBlocks(code, hash || randomFxHash())
        );
    }, [code, hash, type]);

    return <>
        {html ? <iframe
            src={"data:text/html," + encodeURIComponent(html)}
            style={{
                backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(`
                    <svg 
                        viewBox="${[-innerWidth/2,-innerHeight/2, innerWidth, innerHeight]}" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <text 
                            font-family="monospace" 
                            font-size="3em" 
                            text-anchor="middle" 
                            dominant-baseline="central"
                        >
                            L O A D I N G
                        </text>
                    </svg>
                `)})`,
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                border: 0,
                width: '100vw',
                height: '100vh'
            }}
        /> : null}
    </>
}

