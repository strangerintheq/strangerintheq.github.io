function syncSceneWithMap(map, renderer, scene, camera, world) {

    // Build a projection matrix, paralleling the code found in Mapbox GL JS
    const fov = 0.6435011087932844;
    var cameraToCenterDistance = 0.5 / Math.tan(fov / 2) * map.transform.height;
    const halfFov = fov / 2;
    const groundAngle = Math.PI / 2 + map.transform._pitch;
    const topHalfSurfaceDistance = Math.sin(halfFov) * cameraToCenterDistance / Math.sin(Math.PI - groundAngle - halfFov);

    // Calculate z distance of the farthest fragment that should be rendered.
    const furthestDistance = Math.cos(Math.PI / 2 - map.transform._pitch) * topHalfSurfaceDistance + cameraToCenterDistance;

    // Add a bit extra to avoid precision problems when a fragment's distance is exactly `furthestDistance`
    const farZ = furthestDistance * 1.01;

    camera.projectionMatrix = makePerspectiveMatrix(fov, map.transform.width / map.transform.height, 1, farZ);

    var cameraWorldMatrix = new THREE.Matrix4();
    var cameraTranslateZ = new THREE.Matrix4().makeTranslation(0,0,cameraToCenterDistance);
    var cameraRotateX = new THREE.Matrix4().makeRotationX(map.transform._pitch);
    var cameraRotateZ = new THREE.Matrix4().makeRotationZ(map.transform.angle);

    // Unlike the Mapbox GL JS camera, separate camera translation and rotation out into its world matrix
    // If this is applied directly to the projection matrix, it will work OK but break raycasting
    cameraWorldMatrix
        .premultiply(cameraTranslateZ)
        .premultiply(cameraRotateX)
        .premultiply(cameraRotateZ);

    camera.matrixWorld.copy(cameraWorldMatrix);

    var zoomPow =  map.transform.scale;
    // Handle scaling and translation of objects in the map in the world's matrix transform, not the camera
    var scale = new THREE.Matrix4();
    var translateCenter = new THREE.Matrix4();
    var translateMap = new THREE.Matrix4();
    var rotateMap = new THREE.Matrix4();

    scale.makeScale(zoomPow, zoomPow , zoomPow );
    translateCenter.makeTranslation(512/2, -512/ 2, 0);
    translateMap.makeTranslation(-map.transform.x, map.transform.y , 0);
    rotateMap.makeRotationZ(Math.PI);
    world.matrix = new THREE.Matrix4();
    world.matrix
        .premultiply(rotateMap)
        .premultiply(translateCenter)
        .premultiply(scale)
        .premultiply(translateMap);

    renderer.render( scene, camera );
}

function makePerspectiveMatrix(fovy, aspect, near, far) {
    var out = new THREE.Matrix4();
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out.elements[0] = f / aspect;
    out.elements[5] = f;
    out.elements[10] = (far + near) * nf;
    out.elements[11] = -1;
    out.elements[14] = (2 * far * near) * nf;
    out.elements[15] = 0;
    return out;
}

function applyMercatorProjection(coords) {
    const MERCATOR_A = 6378137.0;
    const PROJECTION_WORLD_SIZE = 512 / (2 * (MERCATOR_A * Math.PI));
    const PI_180 = Math.PI / 180;
    const projected = [
        -MERCATOR_A * coords[0] * PI_180 * PROJECTION_WORLD_SIZE,
        -MERCATOR_A * Math.log(Math.tan((Math.PI * 0.25) + (0.5 * coords[1] * PI_180))) * PROJECTION_WORLD_SIZE
    ];
    return new THREE.Vector3(projected[0], projected[1], 0.0);
}