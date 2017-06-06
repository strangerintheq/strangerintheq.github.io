var Cesium = window.Cesium;

var scene = engine.scene;
var cameraController = scene.screenSpaceCameraController;
cameraController.zoomEventTypes = Cesium.CameraEventType.WHEEL;
cameraController.tiltEventTypes = Cesium.CameraEventType.RIGHT_DRAG;
cameraController.enableLook = false;
cameraController.minimumTrackBallHeight = -1;

var camera = scene.camera;
camera.percentageChanged = 0.1;
camera.changed.addEventListener(function() {

    var ray = camera.getPickRay(new Cesium.Cartesian2(
        Math.round(scene.canvas.clientWidth / 2),
        Math.round(scene.canvas.clientHeight / 2)
    ));

    var position = scene.globe.pick(ray, scene);
    if (Cesium.defined(position)) {
        var cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(position);
        Events.post(Events.LOCATION_CHANGED, cartographic);
    }
});