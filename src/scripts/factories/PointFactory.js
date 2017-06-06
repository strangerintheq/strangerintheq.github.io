var Placemark = require("../../../../node_modules/web-world-wind/src/shapes/Placemark");
var PlacemarkAttributes = require("../../../../node_modules/web-world-wind/src/shapes/PlacemarkAttributes");
var ObjectFactory = require('./ObjectFactory');
var Utils = require("../../core/Utils");

module.exports = {
    create: ObjectFactory(createPlacemark, position)
};

function createPlacemark(positions, geoJson) {
    var placemark = new Placemark(positions, false, null);
    placemark.source = geoJson;
    placemark.update = updatePlacemark.bind(null, placemark);
    updatePlacemark(placemark);
    return placemark;
}

function updatePlacemark(placemark) {
    var props = placemark.source.properties;

    var attributes = new PlacemarkAttributes(null);
    attributes.imageSource = props.image || 'images/point.png';
    attributes.imageColor = Utils.extractColor(props, null, 1);
    attributes.imageScale = props.image ? props.imageScale || 1 : 0.2;
    attributes.depthTest = props.depth !== false;

    var highlight = new PlacemarkAttributes(attributes);
    highlight.imageColor = Utils.extractColor(props, null, 0.8);

    placemark.attributes = attributes;
    placemark.highlightAttributes = highlight;
    placemark.enabled = props.visible !== false;
    placemark.label = props.label ? props.label : null;
    placemark.eyeDistanceScaling = props.scale || true
}

function position(coordinates, altitude) {
    var p = Utils.position(coordinates);
    p.altitude = altitude || 0;
    return p;
}




