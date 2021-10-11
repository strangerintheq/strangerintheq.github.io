let att, col, size;

const attr = attractor();
const br = brush();
const p = palette();
const v = view();

newPrng()

addEventListener('pointerdown', newPainting);

newPainting();

function creature(seed){
    prng._seed = seed
    newPainting()
}

function newPainting(e) {
    if (e && e.button !== 0)
        return
    init();
    clear(`hsl(210,44%,${rnd(11)}%)`);
    rays()
    ctx.lineWidth = (rnd(0.5)+0.5);
    dust();
    bubbles();
    p.next()
    let n = 2;
    if (rnd()>0.95)
        n--
    else if (rnd()>0.95)
        n++
    for (let j = 0; j <2; j++) {
        oneCreature()
    }

    for (let j = 0; j <2; j++){
        ctx.strokeStyle = p.pick() + '90';
        ctx.strokeRect(
            -490 + rnd(8)-4,
            -490+ rnd(8)-4,
            980+ rnd(8)-4,
            980+ rnd(8)-4
        )
    }

}

function oneCreature(){
    let start = [rnd(4)-2,rnd(4)-2,rnd(4)-2]
    const shift= rnd(0.1)
    for (let n=0; n<444; n++){
        // ctx.strokeStyle = (baseColor+rnd(10)|0) + '0';
        br.reset()
        att = createAttractor()
        attr.setFunction(att());
        attr.set(...start)
        ctx.strokeStyle = p.pick() + "20";
        if (n%5 === 0) {
            let pt = v.project(attr.p);
            bubble(pt.x, pt.y, rnd(33)+21);
        }
        let len = rnd(200)+200
        attr.set(
            start[0]+shift,
             start[1]+shift,
             start[2]+shift,
        )

        for (let j=0;j<len;j++){
            attr.tick();
            let pt = v.project(attr.p);
            br.nearest(pt);
        }
        if (n%50 === 0) {
            let pt = v.project(attr.p);
            bubble(pt.x, pt.y, rnd(5)+5);
        }
    }
}

function init(){
    size = 1024
    c.width = size;
    c.height = size;
    ctx.translate(size/2,size/2)
    p.next()
    v.init()
}

function rays(){
    ctx.strokeStyle = p.pick() +'10 '

    let sh = rnd(500)-250
    let nz = rnd(111)
    for (let j=0; j < 200000; j ++){

        ctx.lineWidth = Math.max(0.1, noise2d(j/200+nz,nz)-0.5)
        let x = j/20-500 + sh;
        if (rnd()>0.99)
            ctx.strokeStyle = p.pick() +'10'
        line({
            x: x,
            y:-600
        },{
            x:x*2+rnd(100)-50,
            y:  rnd(1000)-500
        })
    }
}

function dust(){
    const shift = rnd(33333)
    const sc = rnd(500)+300

    for (let i=0;i<2222;i++) {
        let x = rand(size)
        let y = rand(size)
        ctx.fillStyle = nextLightColor();
        let s = noise2d(x/sc+shift, y/sc+shift)
        if (rnd() < s)
            ctx.fillRect(x, y, s*1.4,s*1.4)
    }
}

function bubbles() {
    p.next()
    const circ = 3 + rnd(11) | 0;
    for (let i = 0; i < circ; i++) {
        br.reset();
        ctx.strokeStyle = nextLightColor() + '10';
        let x = rand(size);
        let y = rand(size);
        let r = 11 + rnd(44)
        bubble(x, y, r)
    }
}

function bubble(x,y,r){
    for (let a = 0; a < 7; a += 0.03) {
        br.nearest({
            x: x + Math.cos(a) * r+rnd(5),
            y: y + Math.sin(a) * r+rnd(5)
        }, rnd() > 0.5 ? null : r * r * (1 + rnd()))
    }
    if (rnd() > 0.5)
        return
    x += r * 0.4 * (rnd() - 0.5);
    y -= r * 0.4 * (rnd() - 0.5);
    r *= rnd(0.4) + 0.2
    for (let a = 0; a < 7; a += 0.03) {
        br.nearest({
            x: x + Math.cos(a) * r,
            y: y + Math.sin(a) * r
        })
    }
}

function attractor() {
    let fn;
    const p = {x: 0, y: 0, z: 0}
    return {
        setFunction(f) {
            fn = f;
        },
        set(x= 0, y= 0, z= 0) {
            p.x = x;
            p.y = y;
            p.z = z;
        },
        tick() {
           fn(p)
        },

        p
    }
}

function createAttractor () {

    const fx = rnd() > 0.5 ? sin : cos;
    const fy = rnd() > 0.5 ? sin : cos;
    const fz = rnd() > 0.5 ? sin : cos;

    return () => {
        const b = rnd(0.15)+0.15
        const t = rnd()*0.01+0.005;
        return (p) => {
            const dx = fx(p.y) - b*p.x;
            const dy = fy(p.z) - b*p.y;
            const dz = fz(p.x) - b*p.z;

            p.x += t * dx;
            p.y += t * dy;
            p.z += t * dz
        }
    }
}