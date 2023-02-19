import {getPts} from "./getPts";
import {createField} from "./createField";
import {tick} from "./tick";
import {newSettings} from "./newSettings";
import {appendCanvas, createCanvas2D} from "./framework";
import { min } from './framework';
import {pick, prng2x, randomHash, rnd, setRandomGenerator} from "./framework";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise";
import {fillRect, setFillStyle} from "./framework";

let settings, field, pts;
let hash = randomHash()
console.log(hash)
setRandomGenerator(prng2x(hash))
let size = min(innerHeight, innerWidth);
const c = createCanvas2D(1, 1);
appendCanvas(c.canvas)
const noise = new SimplexNoise();

let pal = ["#000", "#111", "#222", "#333", "#444"]
settings = newSettings(pal, size);
field = createField(noise, settings, rnd(111));
pts = getPts(settings, size);
fillRect(c, 'black', -1e5,-1e5,2e5,2e5)
requestAnimationFrame(animate)

function animate(t) {
    pts.forEach(p => tick(field, p, size, settings, c));
    t<10000&&requestAnimationFrame(animate);
}


