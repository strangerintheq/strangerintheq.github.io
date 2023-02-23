function setFavicon(svg) {
    document.getElementById("favicon")
        .setAttribute("href",
            `data:image/svg+xml,${encodeURIComponent(svg)}`);
}

(function (){
    const rnd = (x=1) => Math.random()*x


    const s = 150;
    const cells = 50;
    const cs = s / cells;
    let x1 = rnd(0.5)
    let y1 = rnd(0.5)
    let x2 = rnd(0.5)
    let y2 = rnd(0.5)

    let palettes = [
        ['#fff', '#000'],
        [ '#ffffff', '#ff0000'],
        ['#000', '#ffee00'],
    ]
    let sc = rnd(10)+5
    let palette = palettes[rnd(palettes.length)|0]
    function cell(i) {
        let x = i % cells, y = (i / cells) | 0;
        let u = x/cells - 0.5, v = y/cells - 0.5;
        u = Math.abs(u)
        // v = Math.abs(v)
        let d = Math.min(
            Math.hypot(u-x1, v-y1),
            Math.hypot(u-x2, v-y2)
        )*sc;
        let fill = palette[d%3|0];
        return `<rect
            transform="translate(${[x*cs,y*cs]})"
            fill="${fill}"
            
            width="${cs}"
            height="${cs}"
        ></rect>`;
    }

    const generativeFavicon2 = () => {
        setFavicon(`<svg width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
            ${[...Array(cells ** 2)].map((_,i) => cell(i)).join("")}
        </svg>`)
    }

    const generativeFavicon = () => {
        const rnd = x => Math.random() * x;
        let s = 1000;
        let cells = 3 + rnd(3) | 0;
        let red = rnd(cells ** 2) | 0
        let cs = s / cells;
        setFavicon(`
                <svg width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
                    ${[...Array(cells ** 2)].map((_, i) => {
            let row = i % cells;
            let col = (i / cells) | 0;
            let fill = i === red ? "#e32b2b" : rnd(1) > 0.3 ? "#000" : "#fff0";
            return `<rect
                            transform="translate(${[row * cs, col * cs]})rotate(${i === red ? 0 : 0})"
                            fill="${fill}"
                            width="${cs}"
                            height="${cs}"
                        ></rect>`;
        }).join("")}
                </svg>
            `);
    }

    generativeFavicon();
    // setInterval(generativeFavicon, 1000);
})();