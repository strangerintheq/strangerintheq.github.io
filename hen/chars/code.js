const svg = document.querySelector('svg');

let left, k, s;

addEventListener('pointerdown', update)

update();

function update() {
    svg.innerHTML = ''
    k = Math.random()-0.5
    s = Math.random()-0.5
    row(-400, 1)
    row(0, 5)
    row(400, 1)
    svg.innerHTML = bg() + svg.innerHTML
}

function gray(n) {
    const c = Math.random()*n + 255 - n;
    return `rgb(${c},${c},${c})`
}

function bg() {

    return `<rect x="-500" y="-500" width="1000" height="1000" stroke="black" fill="${gray(30)}"></rect>`
     + [...Array(33)].map(() => {
        const r = Math.random()*70+10;
        const a = Math.random()*Math.PI*2;
        const x = Math.sin(a) * (100+Math.random()*300);
        const y = Math.cos(a) * (100+Math.random()*300);
        const da = [Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10]
        const fill = Math.random() > 0.3 ? gray(10) : '#0000'
        return `<circle stroke="${gray(200)}" fill="${fill}" r="${r}" cx="${x}" cy="${y}" stroke-dasharray="${da}"></circle>`
    }).join('')
}

function row(y, size) {
    svg.innerHTML = '<g></g>' + svg.innerHTML
    left = -500
    while (left < 500)
        char(y, size)
    document.querySelector('svg g g').remove();
    alignLastRow();
}

function char(dy, size) {
    const w = 4
    const count = 2 + (Math.random() * 3 | 0)
    const d = ['m', [0, 0], ...[...Array(count)].map(() => arc(size)).flat()].join('');
    const arcs = `<g><path d="${d}" stroke-width="${w * size}"></path></g>"`
    const g = document.querySelector('svg g');
    g.innerHTML = arcs + g.innerHTML;
    let align = alignLastChar(dy, size)
    tryToAppendDotsGroup(size, align);
}

function tryToAppendDotsGroup(size, align){
    const w = 4
    const el = document.querySelector('svg g g')
    const box = el.getBBox();
    if (box.height > 25*size)
        return
    const y = align ? 25 : -25
    el.innerHTML += `<circle r="${size*4*Math.random()}" cy="${y*size}" stroke-width="${w * size}"></circle>`

}

function alignLastChar(dy, size) {
    const el = document.querySelector('svg g g')
    const box = el.getBBox();
    const x = left - box.x;
    let align = Math.random() > 0.5;
    const y = align ? box.y + 25 * size : box.y + box.height - 25 * size
    el.setAttribute('transform', `translate(${x}, ${-y - dy})`);
    left += box.width + 10 * size;
    if (Math.random()>0.8)
        left += 50*size
    return align
}

function alignLastRow() {
    const g = document.querySelector('svg g');
    const r = g.getBBox()
    const x = (1000 - r.width) / 2;
    g.setAttribute('transform', `translate(${x},0)`)
}

function arc(size) {
    const r = 3*size * ((1 + Math.random() * 7)|0);
    const dir = Math.sign(Math.random() - 0.5);
    let step = dir * r * 2;
    return ['a', [r*(1+Math.random()*0.1), r*(1+Math.random()*k), 0, 0, 0, step*s, step]]
}