import {many} from "../tools";

type C2d = CanvasRenderingContext2D;
type Color = string;

export const {
    PI, SQRT1_2, sqrt, abs, sin, cos, pow, max, min, atan2,
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
export const strokeRect = (ctx: C2d, color: Color, x, y, w, h) => {
    setStrokeStyle(ctx, color)
    ctx.strokeRect(x, y, w, h)
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
    ctx.arc(x, y, r, 0, 2 * PI)
    ctx.fill()
};
