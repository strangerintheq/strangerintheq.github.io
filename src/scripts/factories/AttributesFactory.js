var ShapeAttributes = require("../../../../node_modules/web-world-wind/src/shapes/ShapeAttributes");
var Color = require("../../../../node_modules/web-world-wind/src/util/Color");
var Utils = require("../../core/Utils");

module.exports = {
    createDefaultAttributes: createDefaultAttributes,
    createHighlightAttributes: createHighlightAttributes,
    fill: function (shape, props) {
        shape.attributes = createDefaultAttributes(null, props);
        shape.highlightAttributes = createHighlightAttributes(shape.attributes, props);
    }
};

function createDefaultAttributes(source, props) {
    var attributes = new ShapeAttributes(source);
    attributes.outlineColor = Utils.extractColor(props, props.color ? null : 'outline', 1);
    attributes.interiorColor = Utils.extractColor(props, props.color ? null : 'interior', 0.7);
    attributes.drawOutline = false !== props.outline;
    attributes.drawInterior = false !== props.interior;
    attributes.drawVerticals = props.verticals || false;
    return attributes;
}

function createHighlightAttributes(source, props) {
    var attributes = new ShapeAttributes(source);
    attributes.outlineColor = Utils.extractColor(props, props.color ? null : 'outlineHover', 1);
    attributes.interiorColor = Utils.extractColor(props, props.color ? null : 'interiorHover', 0.5);
    return attributes;
}