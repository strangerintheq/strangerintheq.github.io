var Cesium = window.Cesium;
var Events = require('./Events');

new Cesium.ScreenSpaceEventHandler(engine.scene.canvas)
    .setInputAction(moveHandler, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

function moveHandler(movement) {
    var cartesian = engine.camera.pickEllipsoid(movement.endPosition, engine.scene.globe.ellipsoid);
    if (cartesian) {
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        //var longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);
        //var latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);
    }
}

new Cesium.ScreenSpaceEventHandler(engine.scene.canvas)
    .setInputAction(clickHandler, Cesium.ScreenSpaceEventType.LEFT_CLICK);

function clickHandler(click) {

    var cartesian = engine.camera.pickEllipsoid(click.position, engine.scene.globe.ellipsoid);
    if (cartesian) {
        var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        Events.post(Events.LOCATION_CLICK, cartographic);
    }

    var pickedObject = engine.scene.pick(click.position);
    if (Cesium.defined(pickedObject)) {
        Events.post(Events.OBJECT_MOUSE_CLICK, pickedObject.id.id);
    }
}
