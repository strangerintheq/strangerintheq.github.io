(function () {

    const rnd = (x = 1) => Math.random() * x;
    const rndb = (x = 0.5) => rnd() > x;
    const many = (n, fn = i => i) => [...Array(n | 0)]
        .map((_, i) => fn(i));
    const asNodeParams = o => Object.entries(o)
        .map(([key, value]) => ` ${key}="${value}" `).join("\n");
    const node = (name, attrs, body = "") =>
        `<${name}\n${asNodeParams(attrs)}\n>${body}</${name}>`;
    const svgFavicon = svg => document.head.innerHTML +=
        `<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(svg)}">`;

    svgFavicon(generativeSvgIcon())

    function generativeSvgIcon() {
        const s = 4;
        const pad = 0.7;
        const rx = rndb() ? 1 : rndb() ? 0.2 : 0.1;
        const red = (Math.random() * 4 ** 2) | 0;
        const rot = rnd(360);
        const pos = (ind, scl = 1, rot = 0) => `translate(${[
            ind % s - s / 2 + 0.5,
            ((ind / s) | 0) - s / 2 + 0.5
        ]}) rotate(${rot}) scale(${scl})`;

        const elements = many(s ** 2, i => i)
            .filter(() => Math.random() > 0.5);

        const rect = (rx,fill) => ({width: 1, height: 1, x: -0.5, y: -0.5, rx, fill});

        let content = "";

        content += elements.map(i => {
            return node('g', {
                transform: pos(i, 1.3)
            }, node("rect", rect(0.2,'#fff')))
        }).join("");

        content += elements.map(i => {
            return node('g', {
                transform: pos(i, 1.1)
            }, node("rect", rect(0.1,'#000')))
        }).join("");

        content += many(1, i => {
            return node("g", {
                transform: pos(red, rnd(0.5) + 1.5 - 0.08 * i, rot + i * 4)
            }, node("rect", rect(rx, `#${"fedcba9876543210"[i]}00`)))
        }).join("")

        return node("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: [-s / 2 - pad, -s / 2 - pad, s + pad * 2, s + pad * 2],
            overflow: "visible"
        }, content);
    }



})();



