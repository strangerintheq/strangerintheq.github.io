const svg = document.querySelector('svg');
const primes = [3, 5, 7, 11, 13, 17]

let left, topOffset, k, s,total;

addEventListener('pointerdown', update)

update();

function update() {
    svg.innerHTML = ''
    k = Math.random() - 0.5;
    s = Math.random() - 0.5;
    topOffset = -470;
    total = 10;
    while (total > 0) {
        const size = 1+Math.random()*2;
        total -= size;
        row(size);
        horizontalAlignLastRow();
        verticalAlignLastRow(size);
    }
}

function verticalAlignLastRow(size){
    const lastRow = document.querySelector('svg g')
    const r = lastRow.getBBox();
    console.log(r)
    const y = ( topOffset - r.y)
    lastRow.setAttribute('transform', `translate(0, ${y})`)
    topOffset += r.height
}

function row(size) {
    svg.innerHTML = '<g></g>' + svg.innerHTML
    left = -500
    while (left < 500) {
        char(size)
    }
    document.querySelector('svg g g').remove();
}

function char(size) {
    const w = 4
    const count = 2 + (Math.random() * 3 | 0)
    const d = ['m', [0, 0], ...[...Array(count)].map(() => arc(size)).flat()].join('');
    const arcs = `<g><path d="${d}" stroke-width="${w * size}"></path></g>"`
    const g = document.querySelector('svg g');
    g.innerHTML = arcs + g.innerHTML;
    const valign = alignLastChar(size)
    tryToAppendDot(size, valign);
}

function tryToAppendDot(size, valign){
    const w = 4
    const el = document.querySelector('svg g g')
    const box = el.getBBox();
    if (box.height > 25*size)
        return
    const y = valign ? 25 : -25
    el.innerHTML += `<circle r="${size*4*Math.random()}" cy="${y*size}" stroke-width="${w * size}"></circle>`
}

function alignLastChar(size) {
    const el = document.querySelector('svg g g')
    const box = el.getBBox();
    const x = left - box.x;
    let valign = Math.random() > 0.5;
    const y = valign ? box.y + 25 * size : box.y + box.height - 25 * size
    el.setAttribute('transform', `translate(${x}, ${-y})`);
    left += box.width + 10 * size;
    if (Math.random()>0.8)
        left += 50*size
    return valign
}

function horizontalAlignLastRow() {
    const g = document.querySelector('svg g');
    const r = g.getBBox()
    const x = (1000 - r.width) / 2;
    g.setAttribute('transform', `translate(${x},0)`)
}

function arc(size) {
    const r = 3*size * ((1 + Math.random() * 7)|0);
    const dir = Math.sign(Math.random() - 0.5);
    return ['a', [r*(1+Math.random()*0.1), r*(1+Math.random()*k), 0, 0, 0, dir * r * 2*s, dir * r * 2]]
}