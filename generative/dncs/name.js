function name() {
    let rnd = n => (Math.random()*n) | 0;
    let many = (m, n) => [...Array(rnd(n) + m)].map((_,i) => i);
    let choose = a => a.sort(() => rnd(2) - 1).pop()
    let end = s => s + choose(['ae', 'um', 'us', 'is', 'ei', 'ia']);
    let char = i => choose((i % 2 ? 'aeiouy' : 'bcdfghjklmnpqrstvwxz').split(''));
    let root = () => many(2, 6).reverse().map(char).join('');
    return  many(2, 1).map(root).map(end).join(' ');
}