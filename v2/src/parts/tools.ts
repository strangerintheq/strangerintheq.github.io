export function many(x, f) {
    return [...Array(x)].map((_,i) => f(i));
}

export function pick(arr){
    return arr[(Math.random()*arr.length)|0];
}

export async function fetchCode(url) {
    return await (await fetch(url)).text();
}

export function randomFxHash() {
    return "oo" + many(50, () => pick("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ")).join("")
}

export function randomAbHash() {
    return "0x" + many(64, () => pick("0123456789abcdef")).join("")
}

export function prepareFxHash(html, hash) {
    return html.split("\n").map(str => {
        if (str.includes("var fxhash = "))
            return "var fxhash = " + hash + ";"
        return str
    }).join("\n");
}

export function prepareArtBlocks(html, hash) {
    return html.split("\n").map(str => {
        if (str.includes("window.tokenData ="))
            return `window.tokenData = {hash:"${hash}"};`
        return str
    }).join("\n");
}

export function makeHtml(code, hash){
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