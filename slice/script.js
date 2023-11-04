
let {ctx: enlargeCtx} = createCanvas(innerHeight)
let enlargeContainer = document.querySelector(".enlarge");
let gridContainer = document.querySelector(".grid");
enlargeContainer.append(enlargeCtx.canvas);
let link = document.createElement("a");
link.classList.add("link")
link.innerText = "link"
link.setAttribute("target", "_blank")
enlargeContainer.append(link);
enlargeContainer.onclick = () => {
    let mobile = window.innerWidth < 800
    enlargeContainer.classList.add("hidden");
    mobile && gridContainer.classList.remove("hidden")
}

function enlargeImage(hash) {
    let mobile = window.innerWidth < 800
    window.newHash(hash, enlargeCtx)
    let url = "https://strangerintheq.art/?art/slice/" + hash;
    link.setAttribute("href", url)
    enlargeContainer.classList.remove("hidden")
    mobile && gridContainer.classList.add("hidden")
}

function createCanvas(w) {
    let canvas = document.createElement("canvas")
    canvas.width = w
    let h = canvas.height = 1.618 * w | 0
    let ctx = canvas.getContext("2d")
    ctx.translate(w / 2, h / 2)
    ctx.scale(w, w)
    return {canvas, ctx};
}

function image(hash) {
    let {canvas, ctx} = createCanvas(innerWidth/5 | 0);
    canvas.onclick = () => enlargeImage(hash);
    document.getElementById(hash).append(canvas)
    window.newHash(hash, ctx)
}

function placeholder(hash) {
    const container = document.createElement('div');
    container.style.background = getColorByHash(hash);
    document.querySelector(".grid").append(container);
    container.id = hash;
}

(async function (){
    const count = innerWidth > 980 ? 175 : 108;
    let hashesList = Object.values(hashes)
    hashesList = [...Array(count)].map(() => "0x" + [...Array(64)].map(() => ((Math.random()*16)|0).toString(16)).join(""));
    hashesList.forEach(placeholder)
    let progress = document.querySelector(".loading-progress");
    for (let i = 0; i < count; i++) {
        image(hashesList[i]);
        await new Promise((resolve) => setTimeout(resolve, 1))
        progress && (progress.style.left = "-" + 100 * (1-i/(count-1)) + "%")
    }
    progress && (progress.style.display = "none")
})()


function setExternalScript(src) {
    return new Promise((resolve, reject) => {
        const scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.src = src;
        scriptTag.onload = () => resolve();
        document.body.appendChild(scriptTag);
        scriptTag.remove()
    });
}

function getColorByHash(hash) {
    const parseHex = (hex, offset, len) =>
        parseInt(hex.substr(offset, len), 16);
    const prng2x = (h, i = 0,
                    a = prng(h.substr(2)),
                    b = prng(h.substr(34))
    ) => {
        return () => ++i % 2 ? a() : b();
    }
    const prng = (hash, S, s, t) => {
        S = new Uint32Array([0, 1, s = t = 2, 3]
            .map(i => parseHex(hash, i * 8, 8)));
        return () => (
            t = S[3],
                S[3] = S[2], S[2] = S[1],
                S[1] = s = S[0],
                t ^= (t << 11),
                S[0] ^= t ^ t >>> 8 ^ s >>> 19,
            S[0] / 2 ** 32
        );
    };
    const N = "F2F1DFF2BD1DD94711591812181212#e8d5b9c07a38df3146f5b3490e2430#f3efeff7b32b0c6291b80c09091e05#f1faeee63946a8ccdc457b9d1d3557#dff3e4bca2cd7d73c6684da2171738#dccfa39f8f6544443bc6110f12130b#fff7f4ffc6c6ff2f4ec60a5f820a5f#faf1dcff871fb8000041764b29293d#ccc9a1f0ffcea53f2b60290e280004#ecf39e90a9554f772d31572c132a13#fdf0d5669bbcc1121f780000003049#e0fbfc98c1d9ee6c4d3d5a80293241#fbfffe96031a1b1b1e6d676efaa916#fffcf2ccc5b9503d39252422eb5e28#8ecae6219ebc023047ffb703fb8500#000000FFFFFFdddddd444444888888#25232370798cf5f1eddad2bca99985#ffffff375ba9000000d6d6d6fca311#f4ca55284862d6644a3a8acafffeef#C20F00FFDD22ffffff2374C6000000#e4e1dbD96B0BBF13048C13084465A6#f4ebc5F29F05233479569cc7F20505#001427708d81f4d58dbf06038d0801#8c1c13bf4342e7d7c1a78a7f735751"
        .split("#").map(e => e.match(/.{6}/g).map(e => "#" + e));
    const f = prng2x(hash);
    const shuffle = arr => arr
        .map(value => [value, f()])
        .sort((a, b) => a[1] - b[1])
        .map(arr => arr[0]);
    for (let i=0;i<419;i++) f();
    const pi = (f()*N.length) | 0;
    for (let i=0;i<(4);i++) f();
    return shuffle(N[pi]).pop();
}