var GeoJsonFactory = require('./factories/GeoJsonObjectsFactory');
var Cesium = window.Cesium;
var Events = require('./Events');
var LAYER_PREFIX = 'layer_';
var OBJECT_PREFIX = 'object_';
var layers = {};
var objects = {};

Events.listen(Events.CREATE_LAYER, function (id) {
    layers[LAYER_PREFIX + id] = {id: id, objects: []};
});

Events.listen(Events.HAS_LAYER, function (id) {
    return layers.hasOwnProperty(LAYER_PREFIX + id);
});

Events.listen(Events.CREATE_GEO_JSON_OBJECT, function (geoJson) {
    GeoJsonFactory.create(geoJson).forEach(function(primitive) {
        engine.scene.primitives.add(primitive);
    });
});

Events.listen(Events.DESTROY_LAYER, function (id) {
    var layer = getLayer(id);
    if (!layer) return;
    layer.objects.forEach(destroyObject);
    delete layers[LAYER_PREFIX + id];
});

Events.listen(Events.DESTROY_OBJECT, function (id) {
    destroyObject(objects[OBJECT_PREFIX + id]);
});

Events.listen(Events.CREATE_MODEL, function (model) {
    var p = model.position;
    var cartesian = Cesium.Cartesian3.fromDegrees(p.longitude, p.latitude, p.altitude);
    var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(cartesian);
    var entity = engine.scene.primitives.add(Cesium.Model.fromGltf({
        url: model.url, modelMatrix: modelMatrix, scale: model.scale || 1
    }));
});

function destroyObject(object) {
    engine.dataSources.remove(object);
    if (object.id) {
        delete objects[OBJECT_PREFIX + object.id];
    }
}

function getLayer(id) {
    var key = LAYER_PREFIX + id;
    return layers[key] ? layers[key] : null;
}

function error(error) {
    console.error(error);
}

function addGeoJson(dataSource, geoJson) {
    engine.dataSources.add(dataSource);
    if (geoJson.id) objects[OBJECT_PREFIX + geoJson.id] = dataSource;
    var layer = layers[LAYER_PREFIX + geoJson.properties.layer];
    if (layer) layer.objects.push(dataSource);
}