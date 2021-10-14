const view = () => {
    let k, a1, a2, far;
    return {
        init() {
            k = 400;
            a1 = rnd() * 17;
            a2 = rnd() * 17;
            far = 4;
        },
        project(p) {
            const x = p.x * cos(a1) + p.z * sin(a1);
            const z = p.z * cos(a1) - p.x * sin(a1);
            const y = p.y * cos(a2) + z * sin(a2);
            const d = z * cos(a2) - p.y * sin(a2) + far;
            return {
                x: (k / d) * x,
                y: (k / d) * y
            }
        }
    };
};