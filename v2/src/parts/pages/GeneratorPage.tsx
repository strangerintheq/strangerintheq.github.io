import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useSearchParams} from "react-router-dom";
import {sitePath} from "../Crutch";
import {fetchCode, prepareArtBlocks, prepareFxHash, randomFxHash} from "../tools";

export function GeneratorPage() {

    const { id, hash, type } = useParams();
    const [html, setHtml] = useState();
    const [code, setCode] = useState();

    useEffect(() => {
        let url = sitePath + '/v2/generators/' + id + '/index.html';
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
                fontSize: 30,
                position: 'fixed',
                left: 0,
                top: 0
            }}
            onClick={() => {
                let h = randomFxHash();

        }}>NEW</button>

        {html ? <iframe
            src={"data:text/html," + encodeURIComponent(html)}
            style={{
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

