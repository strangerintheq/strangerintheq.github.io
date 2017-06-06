var ObjectFactory = require('./ObjectFactory');

module.exports = {
    create: ObjectFactory(createPolygon, getBoundaries, {})
};

function createPolygon(boundaries, geoJson, index) {
    var coords = [];
    boundaries[0].pop();
    boundaries[0].forEach(function (pt) {
        coords.push(pt[0]);
        coords.push(pt[1]);
    });


    var geometryInstance = new Cesium.GeometryInstance({
        geometry: Cesium.PolygonGeometry.fromPositions({
            positions: Cesium.Cartesian3.fromDegreesArray(coords),
            extrudedHeight: geoJson.properties.altitude || 0,
            vertexFormat : Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
        }),
        attributes: {
            color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.ORANGE)
        }
    });

    return new Cesium.GroundPrimitive({
        geometryInstances : geometryInstance,
        appearance: new Cesium.PerInstanceColorAppearance({
            closed: true,
            translucent: false
        })
    });
}

function getBoundaries(coordinates, altitude) {
    return coordinates
}