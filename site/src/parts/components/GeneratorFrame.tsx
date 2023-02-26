import React, {useEffect, useState} from "react";
import {fetchCode, prepareArtBlocks, prepareFxHash, randomAbHash, randomFxHash, sitePath} from "../tools";
import {ProjectsTypes} from "../pages/art/ProjectsTypes";



export function GeneratorFrame({id, hash = null}) {

    const [html, setHtml] = useState();
    const [code, setCode] = useState();
    const type = ProjectsTypes[id];

    useEffect(() => {
        let url = 'site/resources/art/' + type + '/' + id + '/generator.html';
        fetchCode(url).then(setCode);
        console.log(url)
    }, [id]);

    useEffect(() => {
        if (!code)
            return

        document.body.classList.remove("loaded");
        setTimeout(() => {
            setHtml(type === "fx-hash" ?
                prepareFxHash(code, hash || randomFxHash()) :
                prepareArtBlocks(code, hash || randomAbHash())
            );
        }, 100)
    }, [code, hash, type]);

    return <>
        {html ? <iframe
            onLoad={() => document.body.classList.add("loaded")}
            src={"data:text/html," + encodeURIComponent(html)}
            style={{
                backgroundColor: "black",
                pointerEvents: "all",
                // backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(svgLoadingText())})`,
                zIndex: -1,
                border: 0,
                width: '100vw',
                height: '100vh'
            }}
        /> : null}
    </>
}

function svgLoadingText() {
    return <svg
        viewBox="${[-innerWidth/2,-innerHeight/2, innerWidth, innerHeight]}"
        xmlns="http://www.w3.org/2000/svg"
    >
        <text
            font-family="monospace"
            font-size="3em"
            text-anchor="middle"
            fill="white"
            dominant-baseline="central"
        >
            L O A D I N G
        </text>
    </svg>;
}

