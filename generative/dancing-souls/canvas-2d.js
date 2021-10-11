

let ctx = c.getContext("2d");

let cos = Math.cos,
    sin = Math.sin;




function line(p0, p) {
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
}

function clear(color) {
    ctx.fillStyle = color;
    ctx.fillRect(-1e5, -1e5, 2e5, 2e5);
}