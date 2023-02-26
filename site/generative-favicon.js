(function () {

    const rnd = (x = 1) => Math.random() * x;

    const many = (n, fn = i => i) => [...Array(n|0)]
        .map((_, i) => fn(i));

    const asNodeParams = o => Object.entries(o)
        .map(([key, value]) => ` ${key}="${value}" `).join("\n");

    const node = (name, attrs, body= "") =>
        `<${name}\n${asNodeParams(attrs)}\n>${body}</${name}>`;

    const rect = (attrs) => node("rect", {...attrs, width: 1, height: 1});

    const mapToUv = (i, cellCount, cellFn) => {
        let x = i % cellCount, y = (i / cellCount) | 0;
        let u = x / cellCount - 0.5, v = y / cellCount - 0.5;
        return cellFn(x, y, u, v);
    };

    const svg = (cellCount, cellFn) => node("svg", {
        width: cellCount, height: cellCount, xmlns: "http://www.w3.org/2000/svg"
    }, many(cellCount**2, i => mapToUv(i, cellCount, cellFn)).join("\n"));

    const svgFavicon = svg => document.head.innerHTML +=
        `<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(svg)}">`;

    function generativeFavicon2() {

        const cells = 50;

        let x1 = rnd(0.5)
        let y1 = rnd(0.5)
        let x2 = rnd(0.5)
        let y2 = rnd(0.5)

        let palettes = [
            ['#fff', '#000'],
            ['#ffffff', '#ff0000'],
            ['#000', '#ffee00'],
        ]
        let sc = rnd(10) + 5
        let palette = palettes[rnd(palettes.length) | 0]

        function cell(x,y,u,v) {
            u = Math.abs(u)
            // v = Math.abs(v)
            let d = Math.min(
                Math.hypot(u - x1, v - y1),
                Math.hypot(u - x2, v - y2)
            ) * sc;
            return rect({
                fill: palette[d % 3 | 0],
                transform: `translate(${[x, y]})`
            })
        }

        svgFavicon(svg(cells, cell))
    }

    function generativeFavicon(darkTheme) {
        const cells = 4;
        const red = rnd(cells ** 2) | 0
        svgFavicon(svg(4, (x,y,u,v) => rect({
            fill: y*cells+x === red ? "#e32b2b" : rnd(1) > 0.3 ? (darkTheme? "#fff":"#000") : "#fff0",
            transform: `translate(${[x, y]})`
        })))
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    generativeFavicon(mediaQuery.matches);


    mediaQuery.addEventListener('change', ({matches: darkTheme}) => {
        generativeFavicon(darkTheme);
    })

    // setInterval(generativeFavicon, 1000);



})();