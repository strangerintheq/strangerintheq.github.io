var AttributesFactory = require('./AttributesFactory');
var Path = require("../Path");
var ObjectFactory = require('./ObjectFactory');
var Utils = require("../../core/Utils");

var defaultProperties = {
    outline: 'ffffffff',
    interior: 'ffffffaf',
    outlineHover: 'ffffffff',
    interiorHover: 'ffffff7f',
    legacy: true
};

module.exports = {
    create: ObjectFactory(createLine, Utils.geoJsonCoordinatesToPositions, defaultProperties)
};


function createLine(positions, geoJson) {
    var newImpl = geoJson && geoJson.properties && geoJson.properties.api === 'coco';
    var path = newImpl ? new Path(positions, null): new LegacyPath(positions, null);
    path.source = geoJson;
    path.altitudeMode = WorldWind.RELATIVE_TO_GROUND;
    updateLine(path);
    path.update = updateLine.bind(null, path);
    return path;
}
function updateLine(path) {
    var props = path.source.properties;
    path.enabled = props.visible !== false;
    path.extrude = props.extrude || false;
    AttributesFactory.fill(path, props);
}
