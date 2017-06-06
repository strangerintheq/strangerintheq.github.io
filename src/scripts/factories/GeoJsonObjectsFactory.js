var factories = {
    //LineString: require('./LineFactory'),
    Polygon: require('./PolygonFactory'),
    //Point: require('./PointFactory'),
    //GeometryCollection: require('./GeometryCollectionFactory')
};

module.exports = {
    create: createGeoJsonObject
};

function createGeoJsonObject(geoJson) {
    var key = geoJson.geometry.type.split("Multiple");
    var factory = factories[key.pop()];
    return factory ? factory.create(geoJson, !key.length) : null;
}
