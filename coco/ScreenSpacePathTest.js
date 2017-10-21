var PrimitivesMath = require('../scripts/objects/primitives/PrimitivesMath');

describe("#lineDirection", function () {
    it("lineDirection 1,1 must be 45", function () {
        var dir = PrimitivesMath.lineDirection(1, 1);
        expect(dir).toBe(45);
    });
});