let i, skip, att, col, gs, gs2, max, edge, size,noize,skipRatio;

const createAttractor = () => {

    const fx = rnd() > 0.5 ? sin : cos;
    const fy = rnd() > 0.5 ? sin : cos;
    const fz = rnd() > 0.5 ? sin : cos;

    return () => {
        const b = rnd()
        const t = rnd()*0.01+0.01;
        return (p) => {
            const dx = fx(p.y) - b*p.x;
            const dy = fy(p.z) - b*p.y;
            const dz = fz(p.x) - b*p.z;

            p.x += t * dx;
            p.y += t * dy;
            p.z += t * dz
        }
    }
};

const attr = attractor();
const br = brush();
const p = palette();
const v = view();

addEventListener('pointerdown', newPainting);

newPainting();

function newPainting(e) {
    if (e && e.button !== 0)
        return
    init();
    reset();
    // clear(`hsl(210,44%,${rnd(11)}%)`);
    clear(p.b);
    rays()
    ctx.lineWidth = (rnd(1)+0.05);
    dust();
    bubbles();
    eraseFrame()
    frames();
    p.next()
    figure();
}

function init(){
    // newPrng()
    // ctx.globalCompositeOperation="lighter";
    // ctx.shadowColor = "rgba(255,255,255, 1)";
    // ctx.shadowOffsetX = 15;
    // ctx.shadowOffsetY = 15;
    size = 1024
    c.width = size;
    c.height = size;

    edge = size*0.2

    ctx.translate(size/2,size/2)
    // br.reset();
    p.next()


    att = createAttractor();
    i = 0;
    skipRatio = rnd()*0.4+0.2


    attr.set(rnd(6)-3,rnd(6)-3,rnd(6)-3);

    v.init()
}

function reset(){
    br.reset();
    col = p.pick();
    let c = 1+rnd(9)|0
    gs = `#${c}${c}${c}${2}`;
    gs2 = `#${c}${c}${c}${c}${c}${c}${'05'}`;
    attr.setFunction(att());
    skip = rnd() > skipRatio;
    if (rnd()>0.8)
        attr.set(rnd(6)-3,rnd(6)-3,rnd(6)-3);
    // br.randomize()



    max = 1000000*(rnd(1)*rnd()+1)
    if (rnd()>0.05)
        max = 30000*(rnd(1)*rnd()+1)
    noize = rnd()>0.0 ? 0 : rnd(0.1)
}

function rays(){
    ctx.strokeStyle = p.pick() +'15 '

    let sh = rnd(500)-250
    let nz = rnd(111)
    for (let j=0; j < 200000; j ++){

        ctx.lineWidth = Math.max(0.1, noise2d(j/200+nz,nz)-0.5)
        let x = j/20-500 + sh;
        if (rnd()>0.99)
            ctx.strokeStyle = p.pick() +'15'
        line({
            x: x,
            y:-600
        },{
            x:x*2+rnd(100)-50,
            y:Math.random()*1000-500
        })
    }
}

function eraseFrame(){
    let shift = 550;
    let plus = () => rnd(edge) + shift - edge;
    let minus = () => rnd(edge) - shift;
    ctx.strokeStyle = '#0001'
    ctx.lineWidth = 0.5
    for (let j=0; j < 5000; j ++){
        let p0 = {x: minus(), y: minus()};
        let p1 = {x: plus(), y: minus()};
        line(p0, {x: minus(), y: plus()})
        line(p1, {x: plus(), y: plus()});
        line(p0, p1);
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

function frames() {
    let step = size * (rnd(0.05) + 0.33)
    p.next()
    // console.log('frames')
    let c = 0
    while (step < size * 0.42 && c<2) {

        ctx.strokeStyle = nextLightColor() + '06';
        // console.log(ctx.strokeStyle, step)
        br.reset()
        frame(step, rnd(4)+1);
        step += rnd(0.04) * size
        c++;
    }
}

function frame(step, shift){
    for (let i=0; i < 1e4; i ++){
        let a = i/1e4*Math.PI*2;
        if (sin(a*shift+shift)>-0.5)
            continue
        let pow = 11+rnd(4)
        let r = step/(Math.abs(sin(a))**pow + Math.abs(cos(a))**pow)**(1/pow)
        r += noise2d(a*22+shift+shift, i/100)*21
        let pt = {
            x: sin(a)*r,
            y: cos(a)*r
        };
        br.nearest(pt)
    }
}

function tick(){
    attr.tick();
    if (skip)
        return
    let pt = v.project(attr.p);

    ctx.strokeStyle =
        Math.abs(pt.x ) < edge*.96 &&
        Math.abs(pt.y ) < edge*.96 ? col : gs
    if (Math.abs(pt.x ) > edge*1.2 || Math.abs(pt.y ) > edge*1.2)
        ctx.strokeStyle = gs2;
    br.nearest(pt);
}

function figure() {
    while (i++ < max) {
        tick();
        if (rnd()>0.99)
            ctx.strokeStyle = p.pick();
        if (i % 1000)
            continue
        reset();
    }
}

function bubbles() {
    p.next()
    const circ = 2 + rnd(6) | 0;
    for (let i = 0; i < circ; i++) {
        br.reset();
        ctx.strokeStyle = nextLightColor() + '10';
        let x = rand(size);
        let y = rand(size);
        let r = 11 + rnd(44)
        for (let a = 0; a < 7; a += 0.03) {
            br.nearest({
                x: x + Math.cos(a) * r,
                y: y + Math.sin(a) * r
            }, rnd() > 0.5 ? null : r * r * (1 + rnd()))
        }
        if (rnd() > 0.3)
            continue

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
           p.x += noise2d(i/151, i/331)*noize-noize/2
           p.y += noise2d(i/271, i/131)*noize-noize/2
           p.z += noise2d(i/261, i/171)*noize-noize/2
        },

        p
    }
}



