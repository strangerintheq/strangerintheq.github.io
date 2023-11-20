const {PI, sin, cos, atan2, sign, hypot, min, sqrt, random, floor, abs} = Math, TAU = PI * 2;

let r = random();

function rnd(x = 1, y = 0) {
    return r() * x + y;
}

function rndb(x = 0.5) {
    return rnd() > x
}

function rnds(x = 1) {
    return rnd(x) - x / 2;
}

function rndi(x, y = 0) {
    return rnd(x, y) | 0;
}

function rndr() {
    return rnd(TAU);
}

function many(x, f) {
    return [...Array(x | 0)].map((_, i) => f(i))
}

function prng(hash) {
    // console.log(hash)
    let t, x = new Uint32Array([1, 2, 3, 4].map(i =>
        parseInt(hash.substr(i * 8, 8), 16)));
    return () => {
        t = x[3], x[3] = x[2], x[2] = x[1], x[1] = x[0],
            t ^= t << 11, t ^= t >>> 8, x[0] = t ^ x[0] ^ x[0] >>> 19;
        return x[0] / 0x100000000;
    }
}

function initRandom(a, b) {
    const str = (999 + (a ** 9) + (b ** 9) + (a ** 11) + (b ** 11) + a * b + a + b).toString(16);
    r = prng(many(22, () => str).join(""));
    const hash = many(32, () => rndi(16).toString(16)).join("");
    console.log("hash: ", hash);
    r = prng(hash)
}

function vec2(a, r) {
    return [cos(a)*r , sin(a )*r];
}

function copy(v) {
    return [...v];
}

function sub(v1, v2) {
    v1[0] -= v2[0];
    v1[1] -= v2[1];
}

function add(v1, v2) {
    v1[0] += v2[0];
    v1[1] += v2[1];
}

function normalize(v) {
    mult(v, 1 / len(v));
}

function len(v) {
    return hypot(...v);
}

function mult(v, k) {
    v[0] *= k;
    v[1] *= k;
}

function smoothstep(x) {
    return 3 * x * x - 2 * x * x * x;
}

function pick(arr) {
    return arr[rndi(arr.length)];
}

function lerp(a,b,t) {
    return a + (b-a)*t
}