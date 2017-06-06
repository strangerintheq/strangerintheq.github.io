var ColladaLodaer = require('../../../../node_modules/web-world-wind/src/formats/collada/ColladaLoader');
var Utils = require("../../core/Utils");

var loader = new ColladaLodaer({}, null);

module.exports = {
    create: createModel
};

function createModel(desc) {
    loader.position = Utils.position(desc.position);
    var collada = loader.parse(desc.data);
    collada.source = desc;
    return collada;
}