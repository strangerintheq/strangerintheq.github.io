var Cesium = window.Cesium;
var Events = require('./Events');

new Cesium.ScreenSpaceEventHandler(engine.scene.canvas)
    .setInputAction(moveHandler, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

function moveHandler(movement) {
    var cartesian = engine.camera.pickEllipsoid(movement.endPosition, engine.scene.globe.ellipsoid);
    if (cartesian) {
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
    }
}

new Cesium.ScreenSpaceEventHandler(engine.scene.canvas)
    .setInputAction(clickHandler, Cesium.ScreenSpaceEventType.LEFT_CLICK);

function clickHandler(click) {

    var cartesian = engine.camera.pickEllipsoid(click.position, engine.scene.globe.ellipsoid);
    if (cartesian) {
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        Events.post(Events.LOCATION_CLICK, cartographic);
        console.log(format(cartographic));
    }

    var pickedObject = engine.scene.pick(click.position);
    if (Cesium.defined(pickedObject)) {
        Events.post(Events.OBJECT_MOUSE_CLICK, pickedObject.id.id);
    }
}


function format(cartographic){
    var longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(6);
    var latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(6);
    return longitudeString + ' ' + latitudeString;
}