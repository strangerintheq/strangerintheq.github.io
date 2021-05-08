const size = 1024;

const ctx = init()

const tiles = [
    function () {
    },
    function (size) {
        arc(size)
    },
    function (size) {
        arc(size)
        arc(size, Math.PI)
    },
    function (size) {
        arc(size)
        arc(size, Math.PI/2)
    },
    function (size) {
        ctx.fillRect(-size/2, size/3-size/2, size, size/3);
    },
    function (size) {
        ctx.fillRect(-size/2, size/3-size/2, size, size/3);
        ctx.fillRect(size/3-size/2, -size/2, size/3, size);
    }
]

let result, color1, color2;

addEventListener('pointerdown', draw)

draw();

function draw() {
    color1 = 'white'
    color2 = 'black'
    ctx.fillStyle = color1
    ctx.fillRect(-1e5,-1e5,2e5,2e5)
    result = {};
    subdivide(size/8,size/8,size-size/4);
    Object.values(result).sort().forEach(drawLayer)

    // // debug
    // ctx.fillStyle = color1
    // ctx.fillRect(-1e5,-1e5,2e5,2e5)
    // ctx.save()
    // ctx.translate(size/2, size/2)
    // drawTile(size/2)
    // ctx.restore()
}

function drawLayer(layer) {
    const tmp = color2;
    color2 = color1;
    color1 = tmp;

    layer.forEach(tile => {
        ctx.save();
        const s = tile.s/2;
        ctx.translate(tile.x + s, tile.y + s);
        ctx.rotate(((Math.random()*4)|0)*Math.PI/2)
        drawTile(tile.s);
        ctx.restore();
    })
}

function subdivide(x, y, s) {
    if (s < 20 || s < size/4 && Math.random() < 0.5)
        return;
    if (!result[s])
        result[s] = [];
    s<size/2 && result[s].push({x,y,s})
    s /= 2;
    subdivide(x+0, y+0, s);
    subdivide(x+s, y+0, s);
    subdivide(x+0, y+s, s);
    subdivide(x+s, y+s, s);
}

function drawTile(s) {

    const s2 = s/2, s3 = s/3, s6 = s/6;

    ctx.fillStyle = color1;

    circle(-s2, -s2, s3)
    circle(+s2, -s2, s3)
    circle(-s2, +s2, s3)
    circle(+s2, +s2, s3)

    ctx.fillRect(-s2,-s2, s, s)

    ctx.fillStyle = color2;

    circle(-s2, 0, s6)
    circle(0, -s2, s6)
    circle(+s2, 0, s6)
    circle(0, +s2, s6)

    tiles[(Math.random()*tiles.length) | 0](s)
}

function arc(size, rotate) {
    ctx.save()
    ctx.rotate(rotate)
    ctx.beginPath();
    ctx.arc(-size/2, -size/2, size/3, 0, Math.PI/2);
    ctx.arc(-size/2, -size/2, 2*size/3,   Math.PI/2, 0, true);
    ctx.fill();
    ctx.restore()
}

function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function init(){
    const canvas = document.querySelector('canvas');
    canvas.width = canvas.height = size;
    canvas.parentNode.setAttribute('width', size)
    canvas.parentNode.setAttribute('height', size)
    canvas.parentNode.parentNode.setAttribute('viewBox', [0,0,size,size])
    return canvas.getContext('2d');
}