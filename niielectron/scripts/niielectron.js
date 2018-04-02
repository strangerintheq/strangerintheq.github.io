
function init() {

    var lon = 30.34415;
    var lat = 60.01151;

    var map;
    var currentFloor;
    var floors = [];
    var building = new THREE.Group();
    var world = new THREE.Group();
    var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    var camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.0001, 500000000);
    var scene = new THREE.Scene();


    setupScene();
    initListeners();
    map = initMap();
    createSlider(5);
    niiElectron();

    function niiElectron() {
        var manager = new THREE.LoadingManager();
        manager.onProgress = function ( item, loaded, total ) {
            console.log( item, loaded, total );
        };

        // model
        var onProgress = function ( xhr ) {
            if ( xhr.lengthComputable ) {
                var percentComplete = xhr.loaded / xhr.total * 100;
                console.log( Math.round(percentComplete, 2) + '% downloaded' );
            }
        };

        var onError = function ( xhr ) {};

        var loader = new THREE.ColladaLoader(  );
        loader.load( 'resources/models/building-2/pipe_0.dae', addFloor(0, 'pipe'), onProgress, onError );
        // loader.load( 'resources/models/building-2/1_floor1.dae', addFloor(0), onProgress, onError );

        loader.load( 'resources/models/building-2/pipe_1.dae', addFloor(1, 'pipe'), onProgress, onError );
        loader.load( 'resources/models/building-2/1_floor1.dae', addFloor(1), onProgress, onError );

        loader.load( 'resources/models/building-2/pipe_2.dae', addFloor(2, 'pipe'), onProgress, onError );
        loader.load( 'resources/models/building-2/2_floor1.dae', addFloor(2), onProgress, onError );

        loader.load( 'resources/models/building-2/pipe_3.dae', addFloor(3, 'pipe'), onProgress, onError );
        loader.load( 'resources/models/building-2/3_floor1.dae', addFloor(3), onProgress, onError );

        loader.load( 'resources/models/building-2/roof1.dae', addFloor(4), onProgress, onError );
        world.add(building);
        resize();


        function addFloor(i, type) {
            return function (collada) {

                collada.scene.traverse(function (obj) {
                    obj.layerType  = type;
                });


                var bear = 142;
                var zoom = 15.35;
                var z = 1 / Math.pow(2, zoom);
                building.scale.set(z, z, z);
                building.rotation.set(Math.PI / 2, -bear / 180 * Math.PI, 0);
                building.position.copy(applyMercatorProjection([lon, lat]));
                if (!floors[i]) {
                    floors[i] = new THREE.Group();
                    building.add(floors[i]);
                }
                floors[i].add(collada.scene);
            }
        }

    }

    function initListeners() {
        window.addEventListener('resize', resize);
        Pace.on('done', unmask);
    }

    function setupScene() {
        camera.matrixAutoUpdate = false;
        world.matrixAutoUpdate = false;
        renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.shadowMap.enabled = true;
        // renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
        renderer.premultipliedAlpha =false;
        renderer.antialias = true;
        scene.add(new THREE.AmbientLight());
        scene.add( world );
        var pointLight = new THREE.DirectionalLight( 0xffffff, 1, 100);
        pointLight.position.set(10, 10, 10);
        // pointLight.castShadow = true;
        world.add(pointLight);
    }


    function resize() {
        // camera.aspect = window.innerWidth / window.innerHeight;
        // camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.domElement.style.position = "relative";
        renderer.domElement.style.pointerEvents = "none";
        renderer.render( scene, camera );
    }


    function createSlider(floorCount) {
        if (floorCount<2)
            return;
        var slider = document.querySelector('#slider');
        noUiSlider.create(slider, {
            start: floorCount,
            orientation: 'vertical',
            direction: 'rtl',
            pips: {
                mode: 'count',
                values: floorCount
            },
            range: {
                min: 1,
                max: floorCount
            }
        });
        slider.noUiSlider.on('update', function() {
            currentFloor = +slider.noUiSlider.get();
            floors.forEach(function (floor, i) {


                floor.traverse(function (obj) {
                    if (obj.layerType)
                        return;

                    if (obj.material) {
                        var opacity = clamp(currentFloor - i, 0, 1);
                        if (Array.isArray(obj.material)) {
                            obj.material.forEach(function (m) {
                                m.transparent = true;
                                m.opacity  = opacity;
                            })
                        } else {
                            obj.material.opacity  = opacity;
                            obj.material.transparent = true;
                        }
                        obj.visible = opacity !== 0;
                    }
                });
                // if (currentFloor-i-1 < 0) {
                //     floor.position.y = Math.abs(currentFloor-i-1)*20;
                // } else {
                //     floor.position.y = 0;
                // }
            });

            sync();
        });

        var pips = slider.querySelectorAll('.noUi-value');

        function clickOnPip ( ) {
            var value = Number(this.getAttribute('data-value'));
            slider.noUiSlider.set(value);
        }

        for ( var i = 0; i < pips.length; i++ ) {
            pips[i].addEventListener('click', clickOnPip);
        }
    }

    function initMap() {
        var k = 0.005;

        var projectionCoef = Math.cos(lat / 180 * Math.PI);
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'resources/style-bright-v9-cdn.json',
            center: [lon, lat],
            zoom: 18,
            bearing: 270,
            pitch: 50,
            maxBounds: [[
                lon - k,
                lat - k * projectionCoef
            ], [
                lon + k,
                lat + k * projectionCoef
            ]]
        });
        map._container.appendChild(renderer.domElement);
        map.on('move', sync);
        return map;
    }

    function sync() {
        syncSceneWithMap(map, renderer, scene, camera, world);
    }

    function unmask() {
        var mask = document.querySelector('#mask').style;
        mask.opacity = '0';
        mask.pointerEvents = 'none';
        resize();
    }

    function clamp(value, min, max) {
        return Math.min(Math.max(min, value), max);
    }
}



