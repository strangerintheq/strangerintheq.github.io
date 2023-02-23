import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {fetchCode, prepareArtBlocks, prepareFxHash, randomAbHash, randomFxHash} from "../tools";
import {sitePath} from "../vars";

export function GeneratorPage() {
    const navigate = useNavigate();
    const { id, hash, type } = useParams();
    const [html, setHtml] = useState();
    const [code, setCode] = useState();

    useEffect(() => {
        let url = sitePath + '/v2/generators/' + type + '/' + id + '/index.html';
        fetchCode(url).then(setCode)
    }, [id])

    useEffect(() => {
        if (!code)
            return
        let newHtml = type === "artblocks" ?
            prepareArtBlocks(code, hash) :
            prepareFxHash(code, hash);
        setHtml(newHtml)
    }, [code, hash, type])

    return <>

        <button
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                lineHeight: 0,
                padding: 0,
                margin: 5
            }}
            onClick={() => {
                let newHash = type === "artblocks" ? randomAbHash() : randomFxHash();
                navigate("/generator/" + type + "/" + id + "/" + newHash);
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wand"
                 width="48" height="48"
                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round"
                 strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="6 21 21 6 18 3 3 18 6 21"/>
                <line x1="15" y1="6" x2="18" y2="9"/>
                <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
                <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
            </svg>
        </button>

        {html ? <iframe
            src={"data:text/html," + encodeURIComponent(html)}
            style={{
                backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="${[-innerWidth/2,-innerHeight/2, innerWidth, innerHeight]}" 
                        xmlns="http://www.w3.org/2000/svg">
                        <text font-family="monospace" font-size="3em" text-anchor="middle" dominant-baseline="central">L O A D I N G</text>
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

