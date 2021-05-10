const size = 1024;
//const halfSize = size/2;

const ctx = init();
//ctx.translate(halfSize, halfSize);

function clear() {
    ctx.clearRect(0, 0, size, size);
    //ctx.clearRect(-halfSize, -halfSize, halfSize, halfSize);
}

function init() {
    const canvas = document.querySelector('canvas');
    canvas.width = canvas.height = size;
    canvas.parentNode.setAttribute('width', size)
    canvas.parentNode.setAttribute('height', size)
    canvas.parentNode.parentNode.setAttribute('viewBox', [0, 0, size, size])
    return canvas.getContext('2d');
}

function random(spread = 1, shift = 0) {
    return Math.random()*spread - shift;
}

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function hsl(h, s, l) {
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}

function hsla(h, s, l, a) {
    return 'hsla(' + h + ', ' + s + '%, ' + l + '%,' + a + ')';
}

function len(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}

function cos(x) {
    return Math.cos(x)
}

function sin(x) {
    return Math.sin(x)
}

function pow(x,y) {
    return Math.pow(x,y)
}

function dir(x1, y1, x2, y2){
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.atan2(dy, dx);
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function many(n, f) {
    return [...Array(n)].map((_,i) => f(i));
}

function randomInt(spread) {
    return random(spread) | 0
}

function line(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2)
    ctx.stroke();
}