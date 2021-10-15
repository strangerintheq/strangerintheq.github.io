const maxDeltaPos = 0.25;
const rndPos = () => Math.random()*maxDeltaPos - maxDeltaPos/2;
const rndAngle = () => Math.random()*Math.PI*2;
let nextSlideRequested;
let maxShift = [0.02]
let rotation1 = [rndAngle()];
let rotation2 = [rndAngle()];
let translate1 = [rndPos(), rndPos()];
let translate2 = [rndPos(), rndPos()];
let transitionValue = [0]
let xy = [0.5, 0.5];

RGBA(`

        vec3 sample(vec2 uv, float rotation, vec2 translate) {
            
            float sn = sin(rotation);
            float cs = cos(rotation);
            uv *= mat2(cs,sn,-sn,cs);
            uv *= 0.35;
            uv += 0.5 + translate;

            vec4 noise = texture2D(tex[0], uv);
            vec2 k = xy*maxShift;
            vec3 col = vec3(
                texture2D(tex[0], uv+(noise.r-0.5)*k).r,
                texture2D(tex[0], uv+(noise.g-0.5)*k).g,
                texture2D(tex[0], uv+(noise.b-0.5)*k).b
            );

            // col = vec3(
            //     texture2D(tex[0], uv+(col.r-0.5)*k).r,
            //     texture2D(tex[0], uv+(col.g-0.5)*k).g,
            //     texture2D(tex[0], uv+(col.b-0.5)*k).b
            // );

            col = vec3(
                texture2D(tex[1], uv+(col.r-0.5)*k).r,
                texture2D(tex[1], uv+(col.g-0.5)*k).g,
                texture2D(tex[1], uv+(col.b-0.5)*k).b
            );
            return col;
        }

        vec3 transition(vec2 uv){
            vec4 noise = texture2D(tex[0], uv/4.+0.5+translate1);
            float val = clamp(noise.a + transitionValue - 0.5, 0.0, 1.0) - 0.5;
            if (abs(val) < 0.01 + 0.02*noise.r) {
                return noise.rgb;
            } else {
                uv = abs(uv) ;
                vec3 slide1 = sample(uv, rotation1, translate1);
                vec3 slide2 = sample(uv, rotation2, translate2);
                return mix(slide1, slide2, sign(val)/2.0 + 0.5);
            }
        }

        void main() {
            vec2 uv = gl_FragCoord.xy/resolution-0.5;
            uv.x *= resolution.x/resolution.y;
            gl_FragColor = vec4(transition(uv), 1.);
        }
`, {
    uniforms: {
        xy: () => xy,
        rotation1: () => rotation1,
        rotation2: () => rotation2,
        translate1: () => translate1,
        translate2: () => translate2,
        maxShift: () => maxShift,
        transitionValue: () => transitionValue
    },
    textures: [
        `<svg width="${2048}px" height="${2048}px">
                <filter id="n">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" />
                </filter>
                <circle r="5000" filter="url(#n)"></circle>
            </svg>`,
        `img.jpg`,
    ]
})

addEventListener('pointermove', (e) => {
    xy[0] = e.clientX/innerWidth-0.5;
    xy[1] = -e.clientY/innerHeight+0.5;
})

addEventListener('pointerdown', () => nextSlideRequested = true);

let prevTime = 0;
requestAnimationFrame(function upd(t) {
    let dt = t - prevTime;
    prevTime = t;
    if (nextSlideRequested) {
        transitionValue[0] = Math.min(1, transitionValue[0] + dt/1000);
        if (transitionValue[0] === 1) {
            nextSlideRequested = false
            transitionValue[0] = 0;
            rotation1[0] = rotation2[0];
            rotation2[0] = rndAngle();
            translate1[0] = translate2[0];
            translate1[1] = translate2[1];
            translate2[0] = rndPos();
            translate2[1] = rndPos();
            maxShift[0] = Math.random()*0.01 + 0.01;
        }
    }
    requestAnimationFrame(upd)
})