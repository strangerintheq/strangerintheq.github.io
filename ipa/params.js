const params = new URLSearchParams(document.location.search);

function setUrl() {
    let newUrl = window.location.origin + window.location.pathname + '?' + params.toString();
    window.history.pushState({path: newUrl}, '', newUrl);
}

let hashParam = params.get("hash");
if (hashParam) {
    setRandomGenerator(PRNG(hashParam))
} else {
    const newHash = "0x" + many(64, () => rndi(16).toString(16)).join("")
    setRandomGenerator(PRNG(newHash))
    params.set("hash", newHash)
    setUrl();
}

const ratio = innerWidth / innerHeight;
let colors = pick(Object.values(palettes));


let paletteParam = params.get("palette");
if (paletteParam) {
    colors = paletteParam.split("-").map(hex => "#" + hex)
} else {
    params.set("palette", colors.join("-").split("#").join(""))
    setUrl();
}
palette(colors);
addEventListener("pointerdown", (e) => {
    if (e.button !== 0)
        return
    params.delete("hash");
    params.delete("palette");
    setUrl();
    document.location.reload()
})

const canvas = createCanvasWebgl(ratio, 4);
appendCanvas();