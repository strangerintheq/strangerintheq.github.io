import React, {useEffect, useState} from "react";
import {PageHeader} from "../components/PageHeader";
import {useParams} from "react-router";
import {sitePath} from "../Crutch";

export function GeneratorPage() {
    const { id, hash } = useParams();

    const [html, setHtml] = useState();

    useEffect(() => {
        fetchCode(sitePath + '/generative/' + id + '/index.html').then(setHtml)
        // const html = makeHtml(code, hash || randomHash());
    }, [])

    return html ? <iframe
        src={"data:text/html," + encodeURIComponent(html)}
        style={{
            border: 0,
            width: '100vw',
            height: '100vh'
        }}
    /> : null
}

async function fetchCode(url) {
    return await (await fetch(url)).text();
}

function randomHash() {
    return ""
}

function makeHtml(code, hash){
    return "data:text/html," + encodeURIComponent(`<!DOCTYPE html>
<html lang="en">
<head>
<style>
    html {height: 100%;}
    body {min-height: 100%;margin: 0;padding: 0;}
    canvas {padding: 0;margin: auto;display: block;position: absolute;top: 0;bottom: 0;left: 0;right: 0;}
</style>
<script>window.tokenData = ${JSON.stringify({hash})}</script>
<script>${code}</script>
</head>
</html>`);
}