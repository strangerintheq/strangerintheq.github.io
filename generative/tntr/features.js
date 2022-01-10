function calculateFeatures(tokenData) {

    var x = Math.pow;
    var W = Math, l = W.PI, B = l / 2, U = 2 * l;
    var C, y = e => C = e;
    var n = (e = 1, r = 0) => C() * e + r, f = (e = 2, r = 0) => r + n(e | 0) | 0, a = (e = .5) => n() > e,
        d = (e = 1) => n(e) - e / 2;
    var P = (e, r) => [...Array(e | 0)].map((h, R) => r(R));
    var k = (e, r, h) => parseInt(e.substr(r, h), 16);
    var T = e => (S = new Uint32Array([4, 1, s = t = 2, 3].map(r => k(e, r * 8, 8))), r => (t = S[3], S[3] = S[2], S[2] = S[1], S[1] = s = S[0], t ^= t << 11, S[0] ^= t ^ t >>> 8 ^ s >>> 19, S[0] / x(2, 32)));
    var L = 19;
    y(T(tokenData.hash));
    var N = a(.8), A = a(.8), o = a(.8), M = a(o ? .5 : .3), w = f(L), H = a(.95), ne = f(2), I = a(.9), p = n(),
        re = p * 100 + 150;
    var ae = n(1 / 200, 1 / 200), oe = n(1 / 1e3, 1 / 1e3), F = f(2), m = n(), se = 1 + m | 0, fe = n(.03, .03),
        _ = a(), u = n(), ce = u / 2, ie = n(1 / 1e3, 1 / 1e3), z = n(), le = (z * 1e3 + 2e3) / (o ? 1 : 7),
        de = n(50, 50), Y = f(3), pe = n(.8, .01), me = n(B, .01), c = a(.3) ? 1 : 0, b = a(.8),
        ue = b ? [[0, 0]] : P(c, e => [d(.7), d(.7)]), g = n(), D = c || a() ? 0 : g * .5 + .2, E = !o && a(.2),
        V = 1e3, be = V / 2;
    var G = "Mangosteen,Wool,Peony,Citrus,Steel,Sepia,Sun,Dawn,Clay,Lime,Fire,Grape,Cacao,Fig,Smoke,Sunset,Morning,Pitahaya,Pastel";
    var features = () => ({
        Layout: c && b ? "Centered" : c ? "Radial" : "Straight",
        Bent: D ? i("Low,Medium,High".split(","), g) : "None",
        Shape: "Lines,Circle,Polygon".split(",")[Y],
        Cracks: o && M ? "Yes" : "No",
        Hole: F ? "Yes" : "No",
        "Huge parts": i("Less,Several,More".split(","), m),
        "Turn chance": i("Low,Medium,High".split(","), u),
        Lengths: i("Very short,Short,Medium,Long,Very long".split(","), p),
        "Different thickness": _ ? "Yes" : "No",
        Join: I ? "Round" : "Square",
        Grain: A ? "Yes" : "No",
        Distribution: o ? "Cover" : "Central",
        "Black background": H ? "Yes" : "No",
        Framed: N ? "Yes" : "No",
        Blur: E ? "Yes" : "No",
        Palette: G.split(",")[w]
    });

    function i(e, r) {
        return e[r * e.length | 0]
    }


    return features()
}