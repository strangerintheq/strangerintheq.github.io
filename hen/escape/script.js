const creator = new URLSearchParams(window.location.search).get('creator')
const viewer = new URLSearchParams(window.location.search).get('viewer')
const rnd = n => Math.random() * n;
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext("2d");

let s,w,h,shape;

window.addEventListener('resize', resize);
window.addEventListener('click', regenerate)

resize();
regenerate();

function resize ()  {
    s = Math.min(innerWidth,innerHeight)
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
}

function regenerate(){
    ctx.clearRect(0,0,innerWidth,innerHeight)
    shape = rnd(7)
    bg();
    bg();
    triangles();
    frame();

    shapes(
        innerWidth/2,
        innerHeight/2,
        s/3,
        5);

}

function shapes(x,y,r,depth){

    if (rnd()>0.7)
        shape = rnd(7)

    ctx.lineWidth = 0.2;
    ctx.strokeStyle = "#0001";
    ctx.fillStyle = `#fff`;

    if(Math.random()>0.5 && r<s/33) {
        for (let i = 0; i < 222; i++) {
            circle(
                rnd(10)+x,
                rnd(10)+y,
                rnd(10)+r,
                i
            );
        }
    }


    if(!depth)
        return

    //r-=5

    let cc = (rnd(2)|0) + 2;
    for (let i =0; i<cc; i++){

        let a = 6.283*i/cc + rnd(6.283)
        let x1 = Math.cos(a)*r+x
        let y1 = Math.sin(a)*r+y
        let r1 = r/2
        shapes(x1,y1,r1, depth-1)

    }
}

function circle(x,y,r, i){

    ctx.beginPath();

    const pts = 3*r|0
    const denom = (2+rnd(4))
    const shift =  rnd(6.283)
    for (let i = 0; i < pts; i++){

        const a = 6.283 * i/pts +shift

        const rr = r + Math.sin(a*shape)*r/denom- Math.cos(i)*r/denom

        const xx = x + Math.cos(a)*rr
        const yy = y + Math.sin(a)*rr

        i?ctx.lineTo(xx,yy):
            ctx.moveTo(xx,yy+rnd(111));


    }



    if(!i){
        ctx.closePath()
        ctx.fill();
    }
    ctx.stroke();


}

function bg(){
    ctx.strokeStyle = `hsla(${rnd(360)},${rnd(100)}%,55%,0.15)`
    const a = rnd(123)
    const px = Math.cos(a)*s*2 + w/2
    const py = Math.sin(a)*s*2 + h/2
    for (let i=0;i<10000;i++) {
        ctx.beginPath();
        ctx.moveTo(
            rnd(w)-px,
            rnd(h)-py,
        )
        ctx.lineTo(
            rnd(w),
            rnd(h)
        )
        ctx.stroke();
    }
}

function triangles(){
    for (let i=0;i<33;i++){

        ctx.fillStyle='#fff3'
        ctx.beginPath()
        ctx.moveTo(rnd(w),rnd(h))
        ctx.lineTo(rnd(w),rnd(h))
        ctx.lineTo(rnd(w),rnd(h))
        ctx.fill()
    }
}

function frame(){
    // ctx.fillStyle=`hsla(${rnd(360)},97%,95%,0.1)`
    const sss = s/15
    for (let i=0;i<11;i++){


        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.lineTo(rnd(sss),0)
        ctx.lineTo(rnd(sss),h)
        ctx.lineTo(0,h)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(w,0)
        ctx.lineTo(w-rnd(sss),0)
        ctx.lineTo(w-rnd(sss),h)
        ctx.lineTo(w,h)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(0,h)
        ctx.lineTo(0,h-rnd(sss))
        ctx.lineTo(w,h-rnd(sss))
        ctx.lineTo(w,h)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.lineTo(0,rnd(sss))
        ctx.lineTo(w,rnd(sss))
        ctx.lineTo(w,0)
        ctx.fill()
    }
}
