const many = (n, f) => [...Array(n)].forEach((_, i) => f(i));

const tileSize = 150;
const tileCount = 5;

const canvas = document.querySelector('canvas');
const s = canvas.width = canvas.height = tileSize * tileCount + tileSize;
canvas.parentNode.setAttribute('width', s)
canvas.parentNode.setAttribute('height', s)
canvas.parentNode.parentNode.setAttribute('viewBox', ''+[0,0,s,s ])

const ctx = canvas.getContext('2d');
ctx.translate(tileSize/2, tileSize/2)
function arc(size, mirror) {
    mirror&&ctx.rotate(Math.PI)
    mirror&&ctx.translate(-size,-size)
    ctx.beginPath();
    ctx.arc(0, 0, size/3, 0, Math.PI/2);
    ctx.arc(0, 0, 2*size/3,   Math.PI/2, 0, true);
    ctx.fill();
    mirror&&ctx.translate(size,size)
    mirror&&ctx.rotate(-Math.PI)
}

function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function base(s, color1, color2) {

    ctx.fillStyle = color1;

    const s3 = s/3;
    circle(0,0, s3)
    circle(s,0, s3)
    circle(0, s, s3)
    circle(s, s, s3)

    ctx.fillRect(0,0, s, s)

    ctx.fillStyle = color2;
    const s6 = s/6;
    circle(s/2,0, s6)
    circle(s/2, s, s6)
    circle(0, s/2, s6)
    circle(s, s/2, s6)
}

const tiles = [
    function () {
    },
    function (size) {
        arc(size)
    },
    function (size) {
        arc(size)
        arc(size, true)
    },
    function (size) {
        ctx.fillRect(0, size/3, size, size/3);
    },
    function (size) {
        ctx.fillRect(0, size/3, size, size/3);
        ctx.fillRect(size/3, 0, size/3, size);
    }
]

function layer(side, scale, color1, color2) {
    many(side * side, i => {

        if (Math.random()>0.6)
            return

        const size = tileSize * scale;
        const x = (i % side) * size;
        const y = ((i / side) | 0) * size;
        ctx.save();
        ctx.translate(x, y);
        const index = (Math.random()*tiles.length) | 0;
        base(size, color1, color2)
        ctx.fillStyle = color2;
        ctx.translate(size/2, size/2)
        const angle = Math.PI/2* ((Math.random()*4) | 0);
        ctx.rotate(angle)
        ctx.translate(-size/2, -size/2)
        tiles[index](size, color1, color2);
        ctx.restore()
    })
}

function draw() {
    const hue = Math.random()*360;
    const c1 = 'black';//`hsl(${hue}, 35%, ${50+Math.random()*10}%)`;
    const c2 = 'white';//`hsl(${hue}, 35%, ${70+Math.random()*10}%)`;
    const c3 = 'gray';//`hsl(${hue}, 35%, ${90+Math.random()*10}%)`;
    canvas.parentNode.parentNode.style.background = c3;
    ctx.clearRect(-1e5,-1e5,2e5,2e5)
    layer(5, 1, c1, c2);
    //layer(10, 0.5, c2, c1);
    //layer(20, 0.25, c1, c2);
}

addEventListener('pointerdown', draw)

draw();


