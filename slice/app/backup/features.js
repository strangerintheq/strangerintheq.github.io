
function calculateFeatures(tokenData) {
    var features;
    
    (() => {
  // build/palette.ts
  var palettes_count = 17;
  var palettes_names = ["Maple", "Lucky", "Satisfaction", "Calm", "Winter", "Supreme", "Juice", "Oak", "Forest", "Proud", "new1", "Joyful", "Mono", "Empathy", "Love", "p1", "Peaceful"];
  var palettes = "F2F1DFF2BD1DD94711591812181212#e8d5b9c07a38df3146f5b3490e2430#f3efeff7b32b0c6291b80c09091e05#f1faeee63946a8ccdc457b9d1d3557#dff3e4bca2cd7d73c6684da2171738#dccfa39f8f6544443bc6110f12130b#fff7f4ffc6c6ff2f4ec60a5f820a5f#ccc9a1f0ffcea53f2b60290e280004#ecf39e90a9554f772d31572c132a13#e0fbfc98c1d9ee6c4d3d5a80293241#fffcf2ccc5b9503d39252422eb5e28#8ecae6219ebc023047ffb703fb8500#000000FFFFFFdddddd444444888888#f4ca55284862d6644a3a8acafffeef#C20F002374C6FFDD22ffffff000000#fbfffe96031a1b1b1e6d676efaa916#ffffff375ba9000000d6d6d6fca311".split("#").map((e) => e.match(/.{6}/g).map((e2) => "#" + e2));

  // ../../../framework/math/common/math.ts
  var MATH = Math;

  // ../../../framework/math/common/const.ts
  var PI = MATH.PI;
  var HALF_PI = PI / 2;
  var TAU = 2 * PI;

  // ../../../framework/util/parseHex.ts
  var parseHex = (hex, offset, len) => parseInt(hex.substr(offset, len), 16);

  // ../../../framework/math/algorithms/prng.ts
  var PiterPasmaArtBlocksPrng = (hash, S, s, t) => {
    S = new Uint32Array([1, 3, s = t = 2, 4].map((i) => parseHex(hash, i * 8, 8)));
    return (_) => (t = S[3], S[3] = S[2], S[2] = S[1], S[1] = s = S[0], t ^= t << 11, S[0] ^= t ^ t >>> 8 ^ s >>> 19, S[0] / 2 ** 32);
  };
  var random = PiterPasmaArtBlocksPrng(tokenData.hash);
  var rnd = (x = 1, s = 0) => {
    return random() * x + s;
  };
  var rndi = (x = 2, s = 0) => {
    return s + rnd(x | 0) | 0;
  };
  var rndb = (x = 0.5) => {
    return rnd() > x;
  };
  var rnds = (x = 1) => {
    return rnd(x) - x / 2;
  };
  var rndr45 = (_) => {
    return rndi(8) * PI / 4;
  };
  var pick = (from) => {
    return from[rndi(from.length)];
  };

  // slice_settings.ts
  var slice_ratio = 0.618;
  var halfHeight = 0.5 / slice_ratio;
  var globalRotation = rndr45() + (rndb() ? 0 : rnds(0.2));
  var paletteIndex = rndi(palettes_count);
  var framePadIndex = rndi(4);
  var framePad = [0, rnd(0.04, 0.01), rnd(0.04, 0.01), rnd(0.1, 0.05)][framePadIndex];
  var strings = rndb();
  var randomizePoints = rndb();
  var slice_sliceLinesRulesIndex = rndi(2);
  var additionalShapes = pick([0, 1, 1, 1, 2]);
  var smallGroupWithoutSlicing = additionalShapes < 2 && rndb();
  var globalCornerRoundingRule = rndb();
  var frameX = 0.5 - framePad;
  var frameY = halfHeight - framePad;

  // parts/slice-lines-rules/slice_sliceLinesRules.ts
  var slice_secantRules_Names = [
    "Rays",
    "Diag",
    "Horizontal or Vertical"
  ];

  // features.ts
  window["artBlocksFeatures"] = {
    "Palette": palettes_names[paletteIndex],
    "Groups count": additionalShapes + 1 + (smallGroupWithoutSlicing ? 1 : 0),
    "Small group": smallGroupWithoutSlicing ? "Yes" : "No",
    "Strict shapes": randomizePoints ? "No" : "Yes",
    "Rounded shapes": globalCornerRoundingRule ? "Yes" : "No",
    "Strings": strings ? "Yes" : "No",
    "Frame padding": ["None", "Small", "Small", "Large"][framePadIndex],
    "Slice rules": slice_secantRules_Names[slice_sliceLinesRulesIndex]
  };
  function printFeatures() {
    console.log(JSON.stringify(window["artBlocksFeatures"], null, 2));
  }
})();

    return window.artBlocksFeatures;
}