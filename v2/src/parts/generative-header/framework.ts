import {many} from "../tools";

type C2d = CanvasRenderingContext2D;
type Color = string;

export const {
    PI, sqrt, abs, sin, cos, pow, max, min, atan2,
    sign, round, floor, ceil, hypot, asin
} = Math

const TAU = PI*2;

export const randomHash = (randomFunc = Math.random) => {
    return "0x" + many(64, () => ((randomFunc()*16)|0).toString(16)).join("")
}

export const parseHex = (hex, offset, len) =>
    parseInt(hex.substr(offset, len), 16)

export const PiterPasmaArtBlocksPrng = (hash, S?, s?, t?) => {
    S = new Uint32Array([0, 1, s = t = 2, 3]
        .map(i => parseHex(hash, i * 8, 8)));
    return (_?) => (
        t = S[3],
            S[3] = S[2],
            S[2] = S[1],
            S[1] = s = S[0],
            t ^= (t << 11),
            S[0] ^= t ^ t >>> 8 ^ s >>> 19,
        S[0] / 2 ** 32
    );
};

export const prng2x = (
    hash,
    i = 0,
    a = PiterPasmaArtBlocksPrng(hash.substr(2)),
    b = PiterPasmaArtBlocksPrng(hash.substr(34))
) => {
    return (_?) => ++i % 2 ? a() : b();
}

let random;

export const setRandomGenerator = (rg) => {
    return random = rg;
}

export const rnd = (x = 1, s = 0) => {
    return random() * x + s;
};

export const rndsign = (_?) => {
    return sign(rnds())
}

export const rndi = (x = 2, s = 0) => {
    return s + rnd(x | 0) | 0;
};

export const rndodd = (x:number) => {
    return rndi(x/2)*2+1;
};

export const rndb = (x = 0.5): boolean => {
    return rnd() > x;
};

export const rnds = (x = 1): number => {
    return rnd(x) - x / 2;
};

export const rndr90 = (_?: any): number => {
    return rndi(4) * PI / 2;
};

export const rndr45 = (_?: any): number => {
    return rndi(8) * PI / 4;
};

export const rndr = (_?: any): number => {
    return rnd(TAU);
};

export const pick = <T>(from: T[]): T => {
    return from[rndi(from.length)];
};

export const setFillStyle = (ctx: C2d, color: Color) => {
    return ctx.fillStyle = color;
};

export const setStrokeStyle = (ctx: C2d, color:Color) => {
    return ctx.strokeStyle = color;
};

export const setLineWidth = (ctx: C2d, width:number) => {
    return ctx.lineWidth = width;
};


export const fillRect = (ctx: C2d, color: Color, x, y, w, h) => {
    setFillStyle(ctx, color)
    ctx.fillRect(x, y, w, h)
};

export const clearCanvas = (ctx: C2d, color?: Color) => {
    if (color)
        setFillStyle(ctx, color)
    ctx[color ? 'fillRect' : 'clearRect'](-1e5, -1e5, 2e5, 2e5)
};

export const getCanvas = ctx => ctx.canvas;
export const getCanvasWidth = ctx => getCanvas(ctx).width;
export const getCanvasHeight = ctx => getCanvas(ctx).height;

export const translateCanvasToCenter = ctx => {
    return ctx.translate(getCanvasWidth(ctx) / 2, getCanvasHeight(ctx) / 2)
};

export const normalizeCanvasScale = ctx => {
    return ctx.scale(getCanvasWidth(ctx), getCanvasWidth(ctx))
}
export const scaleAndCenterContext = (ctx:C2d) => {
    translateCanvasToCenter(ctx)
    normalizeCanvasScale(ctx)
};

export const drawLine = (ctx: C2d, x, y, x1, y1) => {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x1, y1)
    ctx.stroke()
};

export const drawLineSeg = (ctx: C2d, [{x, y}, {x: x1, y: y1}]) => {
    return drawLine(ctx, x, y, x1, y1)
};

export const drawCircle = (ctx, x, y, r) => {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fill()
};

export const poissonDiscSampler = (width, height, radius) => {
    var k = 30, // maximum number of samples before rejection
        radius2 = radius * radius,
        R = 3 * radius2,
        cellSize = radius * Math.SQRT1_2,
        gridWidth = Math.ceil(width / cellSize),
        gridHeight = Math.ceil(height / cellSize),
        grid = new Array(gridWidth * gridHeight),
        queue = [],
        queueSize = 0,
        sampleSize = 0;

    return function() {
        if (!sampleSize) return sample(Math.random() * width, Math.random() * height);

        // Pick a random existing sample and remove it from the queue.
        while (queueSize) {
            var i = Math.random() * queueSize | 0,
                s = queue[i];

            // Make a new candidate between [radius, 2 * radius] from the existing sample.
            for (var j = 0; j < k; ++j) {
                var a = 2 * Math.PI * Math.random(),
                    r = Math.sqrt(Math.random() * R + radius2),
                    x = s[0] + r * Math.cos(a),
                    y = s[1] + r * Math.sin(a);

                // Reject candidates that are outside the allowed extent,
                // or closer than 2 * radius to any existing sample.
                if (0 <= x && x < width && 0 <= y && y < height && far(x, y)) return sample(x, y);
            }

            queue[i] = queue[--queueSize];
            queue.length = queueSize;
        }
    };

    function far(x, y) {
        var i = x / cellSize | 0,
            j = y / cellSize | 0,
            i0 = Math.max(i - 2, 0),
            j0 = Math.max(j - 2, 0),
            i1 = Math.min(i + 3, gridWidth),
            j1 = Math.min(j + 3, gridHeight);

        for (j = j0; j < j1; ++j) {
            var o = j * gridWidth;
            for (i = i0; i < i1; ++i) {
                if (s = grid[o + i]) {
                    var s,
                        dx = s[0] - x,
                        dy = s[1] - y;
                    if (dx * dx + dy * dy < radius2) return false;
                }
            }
        }

        return true;
    }

    function sample(x, y) {
        var s = [x, y];
        queue.push(s);
        grid[gridWidth * (y / cellSize | 0) + (x / cellSize | 0)] = s;
        ++sampleSize;
        ++queueSize;
        return s;
    }
};

export const appendCanvas = (canvas) => {
    return window.onload = () => document.body.append(canvas)
};

export const createCanvas = (
    ratio: number = 1,
    scale: number = 1
) => {
    const canvas = document.createElement('canvas');
    let iw = innerWidth;
    let ih = innerHeight;
    const fitByHeight = ratio < iw / ih;

    const st = canvas.style
    st.width = fitByHeight ? `calc(100vh*${ratio})` : '100vw'
    st.height = fitByHeight ? '100vh' : `calc(100vw/${ratio})`
    canvas.width = ((fitByHeight ? ih * ratio : iw) | 0) * scale;
    canvas.height = ((fitByHeight ? ih : iw / ratio) | 0) * scale;
    return  canvas
}

export const createCanvas2D = (
    ratio: number = 1,
    scale: number = 1
) => {
    return  createCanvas(ratio, scale).getContext('2d');
}
