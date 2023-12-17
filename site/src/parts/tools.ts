export const sitePath =
    document.location.href.includes('localhost') ?
        "strangerintheq.github.io/" : "";

export function many(n, f) {
    return [...Array(n|0)].map((_,i) => f(i));
}

export function rnd(x=1){
    return Math.random() * x;
}


export function pick(arr){
    return arr[rnd(arr.length)|0];
}

export function rndb(x = 0.5){
    return rnd() > x
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

export function randomHash(type) {
    return type === "fx-hash" ? randomFxHash() : randomAbHash();
}

export function prepareFxHash(html, hash) {
    return html.split("\n").map(str => {
        if (str.includes("var fxhash ="))
            return "var fxhash = \"" + hash + "\";"
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

export function prepareAlba(html, hash) {
    return html.split("\n").map(str => {
        if (str.includes("let seed = "))
            return `let seed = "${hash}";`
        return str
    }).join("\n");
}

