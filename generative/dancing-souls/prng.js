
function Random(seed) {
    this._seed = seed % 2147483647;
    if (this._seed <= 0)
        this._seed += 2147483646;
}

Random.prototype.next = function () {
    return this._seed = this._seed * 16807 % 2147483647;
};

Random.prototype.nextFloat = function () {
    return (this.next() - 1) / 2147483646;
};


let prng = new Random(0);

function newPrng(seed) {
    prng = new Random(seed | (Math.random()*1e7)|0)
}

function rnd (x) {
    return prng.nextFloat() * (x || 1);
}

function rand(size){
    let k = 1;
    k *= (rnd() - 0.5)
    k *= (rnd() - 0.5)
    k += (rnd()-0.5)/2.
    return size * k
}