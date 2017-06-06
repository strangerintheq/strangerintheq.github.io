var GeographicText = require("../../../../node_modules/web-world-wind/src/shapes/GeographicText");
var Annotation = require("../../../../node_modules/web-world-wind/src/shapes/Annotation");
var Utils = require("../../core/Utils");

module.exports = {
    create: createText
};

function createText(desc) {
    var text = new GeographicText(Utils.position(desc.geometry), desc.properties.text);
    // var text = new Annotation(Utils.position(desc.geometry));
    text.text = desc.properties.text;
    text.source = desc;
    return [text];
}