var MMCoordinatesConverter = require('../src/scripts/core/MMCoordinatesConverter');

describe("MMCoordinatesConverter", function () {
    it("MMCoordinatesConverter.fromMM 0 0", function () {
        expect(
            MMCoordinatesConverter.fromMM(0, 0)
        ).toEqual([
            0,
            0
        ]);
    });
});

describe("MMCoordinatesConverter", function () {
    it("MMCoordinatesConverter.toMM 1 1 ", function () {
        var mm = MMCoordinatesConverter.toMM(1, 1);
        expect(
            MMCoordinatesConverter.toMM(1, 1)
        ).toEqual([
            1113.1949079327358,
            -1113.2514286638466
        ]);
    });
});

describe("MMCoordinatesConverter", function () {
    it("MMCoordinatesConverter.fromMM 1 1", function () {
        expect(
            MMCoordinatesConverter.fromMM(1, 1)
        ).toEqual([
            0.0008983152841195215,
            -0.0008983152840866596
        ]);
    });
});

describe("MMCoordinatesConverter", function () {
    it("MMCoordinatesConverter.fromMM 1 1", function () {
        expect(
            MMCoordinatesConverter.fromMM(100, 500)
        ).toEqual([
            0.08983152841195215,
            -0.44915304168522185
        ]);
    });
});