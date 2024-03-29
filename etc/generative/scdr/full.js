let dragStartRotation = null,
    prevTicksRotations = [0, 0],
    inertia = 0,
    lastMoveTimestamp = 0,
    rotation = [Math.random()*7];

RGBA(`
        vec2 c = vec2(0.5003, 0.504);
         
        vec4 sample(vec2 uv) {
            float d = length(uv);
            vec4 color1 = texture2D(tex[0], uv + c);
            float r = rotation;
            uv *= mat2(cos(r), sin(r), -sin(r), cos(r));
            vec4 color2 = texture2D(tex[0], uv + c);
            float edge = 0.48; 
            float st = 0.005;
            float value = smoothstep(edge+st, edge-st, length(uv));
            return mix(color1, color2, value);
        }


        void main() {
            vec2 c = vec2(0.5003, 0.504);
            vec2 uv = gl_FragCoord.xy/resolution - c;
            uv.x *= resolution.x/resolution.y;
            float aa = 0.25/resolution.x;
            gl_FragColor += sample(uv + vec2(aa, aa)) / 4.0;
            gl_FragColor += sample(uv + vec2(-aa, -aa)) / 4.0;
            gl_FragColor += sample(uv + vec2(aa, -aa)) / 4.0;
            gl_FragColor += sample(uv + vec2(-aa, aa)) / 4.0;
        }
`, {
    target: document.querySelector('canvas'),
    uniforms: {
        rotation: () => rotation,
    },
    textures: [
        `img.jpg`,
    ]
})

addEventListener('pointerdown', (e) => {
    const atan = Math.atan2(
        e.clientY - innerHeight/2,
        e.clientX - innerWidth/2
    );
    dragStartRotation = atan + rotation[0]
})

addEventListener('pointerup', () => {
    if (Date.now() - lastMoveTimestamp < 100)
        inertia = prevTicksRotations[0] - prevTicksRotations[1];
    dragStartRotation = null;
})

addEventListener('pointermove', (e) => {
    if (dragStartRotation === null)
        return
    let dragEndRotation = Math.atan2(e.clientY - innerHeight/2, e.clientX - innerWidth/2);
    prevTicksRotations.push(dragEndRotation)
    prevTicksRotations.shift();
    rotation[0] = dragStartRotation - dragEndRotation;
    lastMoveTimestamp = Date.now();
})

requestAnimationFrame(function handleInertia() {
    rotation[0] += inertia;
    inertia = inertia*0.9;
    requestAnimationFrame(handleInertia)
})

