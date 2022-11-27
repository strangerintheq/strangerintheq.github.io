
function calculateFeatures(tokenData) {
    var features;
    
    (() => {
  // build/palette.ts
  var palettes_count = 19;
  var palettes_names = ["Maple", "Lucky", "Satisfaction", "Calm", "Winter", "Supreme", "Juice", "Jamaica", "Oak", "Forest", "aaa", "Proud", "p1", "new1", "Joyful", "Mono", "Peaceful", "Empathy", "Love"];
  var palettes = "F2F1DFF2BD1DD94711591812181212#e8d5b9c07a38df3146f5b3490e2430#f3efeff7b32b0c6291b80c09091e05#f1faeee63946a8ccdc457b9d1d3557#dff3e4bca2cd7d73c6684da2171738#dccfa39f8f6544443bc6110f12130b#fff7f4ffc6c6ff2f4ec60a5f820a5f#faf1dcff871fb8000041764b29293d#ccc9a1f0ffcea53f2b60290e280004#ecf39e90a9554f772d31572c132a13#fdf0d5669bbcc1121f780000003049#e0fbfc98c1d9ee6c4d3d5a80293241#fbfffe96031a1b1b1e6d676efaa916#fffcf2ccc5b9503d39252422eb5e28#8ecae6219ebc023047ffb703fb8500#000000FFFFFFdddddd444444888888#ffffff375ba9000000d6d6d6fca311#f4ca55284862d6644a3a8acafffeef#C20F002374C6FFDD22ffffff000000".split("#").map((e) => e.match(/.{6}/g).map((e2) => "#" + e2));

  // ../../../framework/math/common/math.ts
  var MATH = Math;

  // ../../../framework/math/common/const.ts
  var PI = MATH.PI;
  var HALF_PI = PI / 2;
  var QUARTER_PI = PI / 4;
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
  var rndr = (_) => {
    return rnd(TAU);
  };
  var pick = (from) => {
    return from[rndi(from.length)];
  };

  // slice_settings.ts
  var slice_ratio = 0.618;
  var halfHeight = 0.5 / slice_ratio;
  var globalRotationIndex = rndi(5);
  var globalRotationNames = [
    "Vertical",
    "Vertical",
    "Horizontal",
    "Diagonal",
    "Any"
  ];
  var globalRotationValues = [0, 0, PI / 2, PI / 4, rndr()];
  var globalRotation = globalRotationValues[globalRotationIndex];
  var paletteIndex = rndi(palettes_count);
  var framePadIndex = rndi(4);
  var framePad = 0;
  var strings = rndb();
  var compositionRule = rndb(0.1);
  var randomizePoints = rndb();
  var slice_sliceLinesRulesIndex = pick([0, 1]);
  var smallGroupWithoutSlicing = rndb();
  var smallGroupType = rndi(3);
  var globalCornerRoundingRule = rndb();
  var frameX = 0.5 - framePad;
  var frameY = halfHeight - framePad;

  // features.ts
  window["artBlocksFeatures"] = {
    "Palette": palettes_names[paletteIndex],
    "Main direction": globalRotationNames[globalRotationIndex],
    "Small group": smallGroupWithoutSlicing ? ["Bars", "Circles", "Squares"][smallGroupType] : "No",
    "Strict shapes": randomizePoints ? "No" : "Yes",
    "Rounded shapes": globalCornerRoundingRule ? "Yes" : "No"
  };
  function printFeatures() {
    console.log(JSON.stringify(window["artBlocksFeatures"], null, 2));
  }
})();

    return window.artBlocksFeatures;
}