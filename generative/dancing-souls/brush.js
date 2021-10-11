function brush() {
    let points;
    let max = 1000;
    let len = 1001;
    let edg = .99;
    return {
        reset() {
            points = []
        },
        randomize(){
            edg = rnd(0.009) + 0.99;
            len = 100 + rnd(800);
            max = 2000 + rnd(4000)
        },
        nearest(pt, maxDist) {
            maxDist = maxDist || max;
            points.forEach(p => {
                let dx = p.x - pt.x;
                let dy = p.y - pt.y;
                let d = dx ** 2 + dy ** 2;
                if (d < maxDist && rnd() > edg) {
                    line(p, pt);
                }
            });

            points.push(pt);

            if (points.length > len)
                points.shift();
        }
    }
}