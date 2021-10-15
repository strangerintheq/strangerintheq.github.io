let a = null, r = [Math.random()*7];

RGBA(`
        void main() {
            vec2 c = vec2(0.5, 0.505);
            vec2 uv = gl_FragCoord.xy/resolution - c;
            uv.x *= resolution.x/resolution.y;
            // if (length(uv) < 0.48)
            vec2 UV = uv * mat2(cos(r), sin(r), -sin(r), cos(r));
            float edge = 0.48; 
            float st = 0.0001;
            float value = smoothstep(edge+st, edge-st, length(uv));
            uv = mix(uv, UV, value);
            gl_FragColor = texture2D(tex[0], uv + c);
        }
`, {
    uniforms: {
        r: () => r,
    },
    textures: [
        `img.jpg`,
    ]
})

addEventListener('pointerdown', (e) => {
    a = Math.atan2(e.clientY - innerHeight/2, e.clientX - innerWidth/2) + r[0]
})

addEventListener('pointerup', () => a = null)

addEventListener('pointermove', (e) => {
    if (a === null)
        return
    let b = Math.atan2(e.clientY - innerHeight/2, e.clientX - innerWidth/2);
    r[0] = a-b;
})

