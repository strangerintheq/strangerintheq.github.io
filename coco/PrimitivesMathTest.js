var PrimitivesMath = require('../src/scripts/objects/primitives/PrimitivesMath');

describe("PrimitivesMath.lineDirection", function () {
    lineDirection([0, 0], null, null);
    lineDirection(null, [0, 0], null);
    lineDirection([0, 0], [-1, 1], 135);
    lineDirection([1, 1], [1, 2], 90);
    lineDirection([1, 1], [2, 2], 45);
    lineDirection([0, 0], [0, 0], 0);
    lineDirection([1, 1], [2, 1], 0);
    lineDirection([0, 0], [1, -1], -45);
    lineDirection([1, 1], [1, 0], -90);
    lineDirection([0, 0], [-1, -1], -135);
    lineDirection([0, 0], [-1, 0], 180);
});

describe("PrimitivesMath.pointShiftDirection", function () {
    pointShiftDirection(0, null, 90);
    pointShiftDirection(null, 0, 90);
    pointShiftDirection(0, 0, 90);
    pointShiftDirection(0, 90, 135);
    pointShiftDirection(-60, 60, 90);
});

describe("PrimitivesMath.invertDirection", function () {
    invertDirection(90, -90);
    invertDirection(0, 180);
    invertDirection(45, -135);
});

function invertDirection(d, result) {
    it("([" + d + "]) must be " + result, function () {
        expect(PrimitivesMath.invertDirection(d)).toBe(result);
    });
}

function pointShiftDirection(a, b, result) {
    it("(" + a + ", " + b + ") must be " + result, function () {
        expect(PrimitivesMath.pointShiftDirection(a, b)).toBe(result);
    });
}

function lineDirection(a, b, result) {
    it("([" + a + "], [" + b + "]) must be " + result, function () {
        expect(PrimitivesMath.lineDirection(a, b)).toBe(result);
    });
}