class C3 {
    r;
    g;
    b;

    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    add(o) {
        return new C3(this.r + o.r, this.g + o.g, this.b + o.b);
    }

    clamp(c) {
        return Math.max(0, Math.min(255, c));
    }

    diff(o) {
        const Rdiff = o.r - this.r;
        const Gdiff = o.g - this.g;
        const Bdiff = o.b - this.b;
        const distanceSquared = Rdiff * Rdiff + Gdiff * Gdiff + Bdiff * Bdiff;
        return distanceSquared;
    }

    mul(d) {
        return new C3((d * this.r), (d * this.g), (d * this.b));
    }

    sub(o) {
        return new C3(this.r - o.r, this.g - o.g, this.b - o.b);
    }
}

function findClosestPaletteColor(c, palette) {
    let closest = palette[0];
    for (const n of palette) {
        if (n.diff(c) < closest.diff(c)) {
            closest = n;
        }
    }
    return closest;
}

function floydSteinbergDithering(img, w, h, setRGB) {

    function getRgb(x, y) {
        const offset = y * w * 4 + x * 4;
        return [img[offset], img[offset + 1], img[offset + 2]]
    }

    const palette = [
        new C3(0, 0, 0), // black
        new C3(0, 0, 255), // green
        new C3(0, 255, 0), // blue
        new C3(0, 255, 255), // cyan
        new C3(255, 0, 0), // red
        new C3(255, 0, 255), // purple
        new C3(255, 255, 0), // yellow
        new C3(255, 255, 255)  // white
    ]
    const d = [];
    for (let y = 0; y < h; y++) {
        if (!d[y])
            d[y] = []
        for (let x = 0; x < w; x++) {
            d[y][x] = new C3(...getRgb(x, y));
        }
    }

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const oldColor = d[y][x];
            const newColor = findClosestPaletteColor(oldColor, palette);
            setRGB(x, y, [newColor.r, newColor.g, newColor.b]);
            const err = oldColor.sub(newColor);
            if (x + 1 < w)
                d[y][x + 1] = d[y][x + 1].add(err.mul(7. / 16));
            if (x - 1 >= 0 && y + 1 < h)
                d[y + 1][x - 1] = d[y + 1][x - 1].add(err.mul(3. / 16));
            if (y + 1 < h)
                d[y + 1][x] = d[y + 1][x].add(err.mul(5. / 16));
            if (x + 1 < w && y + 1 < h)
                d[y + 1][x + 1] = d[y + 1][x + 1].add(err.mul(1. / 16));
        }
    }

}

