/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);

	//require('./collada');

	// require('./primitives');

	if (window.devMode)
	    __webpack_require__(4);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// Events.post(Events.SWITCH_ATMOSPHERE, false);
	Events.post(Events.SWITCH_ATMOSPHERE_GROUND, false);
	Events.post(Events.SWITCH_ATMOSPHERE_NIGHT, false);

	Events.post(Events.ROTATE_TO, {
	    lat: 55.6399409, lon: 37.4540874, alt: 5000
	});

	Events.post(Events.CREATE_BASE_LAYER_PICKER, './map-menu-config.json');

	window.devMode && Events.listen(Events.OBJECT_MOUSE_CLICK, function(e) {
	    console.log(JSON.stringify(e));
	});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var SvgIcons = __webpack_require__(3);

	Events.post(Events.CREATE_BUTTON, {
	    html: SvgIcons.gear(),
	    title: 'Настройки',
	    event: Events.TOGGLE_FORM,
	    data: 'settings'
	});

	Events.post(Events.CREATE_BUTTON, {
	    align: 'right',
	    title: 'Глобус / Карта',
	    icon: 'images/layers/elevationLocal.png',
	    event: Events.SWITCH_GLOBE
	});


	Events.post(Events.CREATE_FORM, {
	    id: 'settings', title: 'Настройки',
	    width: 215, height: 315,
	    left: 5, top: 55,
	    drag: false,
	    contents: [
	        {type: 'html', html: txt('Положение')},
	        {type: 'field', title: 'Широта', path: 'latitude', listen: Events.LOCATION_CHANGED},
	        {type: 'field', title: 'Долгота', path: 'longitude', listen: Events.LOCATION_CHANGED},

	        {type: 'html', html: txt('Действия')},
	        {type: 'button', width: 90, title: 'Навигатор', post: Events.SWITCH_CONTROLS},
	        {type: 'button', width: 90, title: 'Компас', post: Events.SWITCH_COMPASS_SVG},
	        {type: 'button', width: 90, title: 'Проекция', post: Events.SWITCH_2D_PROJECTION},
	        {type: 'button', width: 90, title: 'Атмосфера', post: Events.SWITCH_ATMOSPHERE},
	        {type: 'button', width: 90, title: 'Поверхность', post: Events.SWITCH_ATMOSPHERE_GROUND},
	        {type: 'button', width: 90, title: 'Ночь', post: Events.SWITCH_ATMOSPHERE_NIGHT},
	        //{type: 'button', width: 90, title: 'Компас 1', post: Events.SWITCH_COMPASS},

	        {type: 'html', html: txt('Звездное небо')},
	        {type: 'combobox', width: 180, values: [
	            {text: 'Звезды', post: Events.CHANGE_SPACE, data: 'stars'},
	            {text: 'Космос 1', post: Events.CHANGE_SPACE, data: {skybox: 'images/skybox/one'}, selected: true},
	            {text: 'Космос 2', post: Events.CHANGE_SPACE, data: {skybox: 'images/skybox/two'}},
	            {text: 'Нет', post: Events.CHANGE_SPACE}
	        ]}
	    ]
	});

	function txt(t) {
	    return '<span style="font-size: 15px; width:200px; text-align: center; display: inline-block">' + t + '</span>';
	}

	if(window.devMode)
	 Events.post(Events.CREATE_BUTTON, {
	    title: 'Wizard',
	    html: SvgIcons.wizard(),
	    event: Events.SHOW_WIZARD,
	    data: {
	        rules: [ {
	            type: 2, min: 4,
	            name: 'Нанесение тип 2',
	            description: 'Нанесение тип 2 бла бла бла'
	        }, {
	            "description": "", text: [
	                {"key":"formirName", "title":"Формирование", value:"1"},
	            ],
	            "max": 1,
	            "min": 1,
	            "name": "ТОЧЕЧНЫЙ ЗНАК",
	            "type": 1
	        }, {
	            type: 1, min: 2,
	            name: 'Нанесение тип 1',
	            description: 'Нанесение тип 1 бла бла бла'
	        }, {
	            "description": "",
	            text: [
	                {"key":"formirName", "title":"Формирование"},
	                {"key":"otherKey", "title":"Еще какая-то ерунда"}
	            ],
	            "max": 1,
	            "min": 1,
	            "name": "ТОЧЕЧНЫЙ ЗНАК",
	            "type": 1
	        }, {
	            type: 5, min: 1,
	            name: 'Нанесение тип 5',
	            description: 'Нанесение тип 5 бла бла бла'
	        }]
	    }
	});

	if (window.devMode) createDrawButtons();
	function createDrawButtons() {

	    Events.listen(Events.END_DRAWING, function (data) {
	        Events.post(Events.CREATE_GEO_JSON_OBJECT, data)
	    });

	    Events.post(Events.CREATE_BUTTON, {
	        title: 'Нанести полигон',
	        html: svg(
	            path('M 22,33 L 77,22 L 55,77 Z', 3) +
	            circle(22, 33, 7) +
	            circle(77, 22, 7) +
	            circle(55, 77, 7)
	        ),
	        event: Events.START_DRAWING,
	        data: {
	            type: 'Feature',
	            geometry: {
	                type: 'Polygon'
	            },
	            properties: {
	                extrude: true,
	                api: 'coco',
	                altitude: 10,
	                fill: 'ffae00ff'
	            }
	        }
	    });

	    Events.post(Events.CREATE_BUTTON, {
	        title: 'Нанести синюю линию',
	        html: svg(
	            path('M 25,22 L 70,77', 3, 'blue') +
	            circle(25, 22, 7) +
	            circle(70, 77, 7)
	        ),
	        event: Events.START_DRAWING,
	        data: {
	            type: 'Feature',
	            geometry: {
	                type: 'LineString',
	                properties: {
	                    stroke: '0000ffff'
	                }
	            },
	            properties: {
	                api: 'coco',
	                altitude: 10,
	                width: 10
	            }
	        }
	    });

	    Events.post(Events.CREATE_BUTTON, {
	        title: 'Нанести красный рубеж',
	        html: svg(
	            path('M 25,22 L 70,77', 3, 'red') +
	            circle(25, 22, 7) +
	            circle(70, 77, 7)
	        ),
	        event: Events.START_DRAWING,
	        data: {
	            type: 'Feature',
	            geometry: {
	                type: 'LineString',
	                properties: {
	                    stroke: 'ff0000ff'
	                }
	            },
	            properties: {
	                pen: {
	                    type: 'comb',
	                    length: 100,
	                    comb: 30
	                },
	                altitude: 10,
	                width: 10,
	                api: 'coco'
	            }
	        }
	    });

	    Events.post(Events.CREATE_BUTTON, {
	        title: 'Нанести зеленый пунктир',
	        html: svg(
	            path('M 25,22 L 70,77', 3, 'green') +
	            circle(25, 22, 7) +
	            circle(70, 77, 7)
	        ),
	        event: Events.START_DRAWING,
	        data: {
	            type: 'Feature',
	            geometry: {
	                type: 'LineString',
	                properties: {
	                    stroke: '00ff00ff'
	                }
	            },
	            properties: {
	                pen: [{
	                    type: 'dash',
	                    length: 30
	                }, {
	                    type: 'space',
	                    length: 10
	                }],
	                altitude: 10,
	                width: 10,
	                api: 'coco'
	            }
	        }
	    });

	    Events.post(Events.CREATE_BUTTON, {
	        title: 'Оранжевый крестик',
	        html: svg(
	            path('M 25,22 L 70,77', 3, 'green') +
	            circle(25, 22, 7) +
	            circle(70, 77, 7)
	        ),
	        event: Events.START_DRAWING,
	        data: {
	            type: 'Feature',
	            geometry: {
	                type: 'LineString',
	                properties: {
	                    stroke: 'ff5500ff'
	                }
	            },
	            properties: {
	                pen: {
	                    type: 'cross',
	                    length: 100
	                },
	                altitude: 10,
	                width: 10,
	                api: 'coco'
	            }
	        }
	    });

	    Events.post(Events.CREATE_BUTTON, {
	        title: 'Сложный вариант',
	        html: svg(
	            path('M 25,22 L 70,77', 3, 'green') +
	            circle(25, 22, 7) +
	            circle(70, 77, 7)
	        ),
	        event: Events.START_DRAWING,
	        data: {
	            type: 'Feature',
	            geometry: {
	                type: 'LineString',
	                properties: {
	                    stroke: 'ff0055ff'
	                }
	            },
	            properties: {
	                pen: [{
	                    type: 'dash',
	                    length: 150
	                }, {
	                    type: 'cross',
	                    length: 100
	                }],
	                altitude: 10,
	                width: 10,
	                api: 'coco'
	            }
	        }
	    });

	    Events.post(Events.CREATE_BUTTON, {
	        title: 'Нанести точку',
	        html: svg(circle(50, 50, 7)),
	        event: Events.START_DRAWING,
	        data: {type: 'Feature', geometry: {type: 'Point'}}
	    });

	    function svg(content, viewBox) {
	        viewBox = viewBox || "0 0 100 100";
	        return '<svg viewBox="' + viewBox + '">' + content + '</svg>'
	    }

	    function path(d, width, stroke) {
	        return '<path stroke-width="' + (width || 1) + '" stroke="' + (stroke || 'white') + '" fill="white" d="' + d + '"/>';
	    }

	    function circle(x, y, r) {
	        return '<circle fill="orange" r="' + r + '" cx="' + x + '" cy="' + y + '"/>'
	    }
	}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	
	var prev = ['-256 -500 2048 2048', 'M1536 640v-128q0 -53 -32.5 -90.5t-84.5 -37.5h-704l293\
	            -294q38 -36 38 -90t-38 -90l-75 -76q-37 -37 -90 -37q-52 0 -91 37l-651 652q-37\
	             37 -37 90q0 52 37 91l651 650q38 38 91 38q52 0 90 -38l75 -74q38 -38 38 -91t-38\
	              -91l-293 -293h704q52 0 84.5 -37.5 t32.5 -90.5z'];

	var next = ['-256 -500 2048 2048', 'M1472 576q0 -54 -37 -91l-651 -651q-39 -37 -91\
	            -37q-51 0 -90 37l-75 75q-38 38 -38 91t38 91l293 293h-704q-52 0 -84.5\
	             37.5t-32.5 90.5v128q0 53 32.5 90.5t84.5 37.5h704l-293 294q-38 36 -38\
	              90t38 90l75 75q38 38 90 38q53 0 91 -38l651 -651q37 -35 37 -90z'];

	var rotate = ['-256 -400 2048 2048', 'M1536 640q0 -156 -61 -298t-164 -245t-245 -164t-298 -61q-172 0 -327 72.5t-264 204.5q-7 10 -6.5 22.5t8.5 20.5l137 138q10 9 25 9q16 -2 23 -12q73 -95 179 -147t225 -52q104 0 198.5 40.5t163.5 109.5t109.5 163.5t40.5 198.5t-40.5 198.5t-109.5 163.5 t-163.5 109.5t-198.5 40.5q-98 0 -188 -35.5t-160 -101.5l137 -138q31 -30 14 -69q-17 -40 -59 -40h-448q-26 0 -45 19t-19 45v448q0 42 40 59q39 17 69 -14l130 -129q107 101 244.5 156.5t284.5 55.5q156 0 298 -61t245 -164t164 -245t61 -298z'];

	var move = ['-120 -400 2048 2048', 'M1792 640q0 -26 -19 -45l-256 -256q-19 -19 -45 -19t-45 19t-19 45v128h-384v-384h128q26 0 45 -19t19 -45t-19 -45l-256 -256q-19 -19 -45 -19t-45 19l-256 256q-19 19 -19 45t19 45t45 19h128v384h-384v-128q0 -26 -19 -45t-45 -19t-45 19l-256 256q-19 19 -19 45 t19 45l256 256q19 19 45 19t45 -19t19 -45v-128h384v384h-128q-26 0 -45 19t-19 45t19 45l256 256q19 19 45 19t45 -19l256 -256q19 -19 19 -45t-19 -45t-45 -19h-128v-384h384v128q0 26 19 45t45 19t45 -19l256 -256q19 -19 19 -45z'];

	var magic = ['-256 -500 2048 2048', 'M1190 955l293 293l-107 107l-293 -293zM1637 1248q0 -27 -18 -45l-1286 -1286q-18 -18 -45 -18t-45 18l-198 198q-18 18 -18 45t18 45l1286 1286q18 18 45 18t45 -18l198 -198q18 -18 18 -45zM286 1438l98 -30l-98 -30l-30 -98l-30 98l-98 30l98 30l30 98zM636 1276 l196 -60l-196 -60l-60 -196l-60 196l-196 60l196 60l60 196zM1566 798l98 -30l-98 -30l-30 -98l-30 98l-98 30l98 30l30 98zM926 1438l98 -30l-98 -30l-30 -98l-30 98l-98 30l98 30l30 98z'];

	var pencil = ['-300 -400 2048 2048', 'M363 0l91 91l-235 235l-91 -91v-107h128v-128h107zM886\
	    928q0 22 -22 22q-10 0 -17 -7l-542 -542q-7 -7 -7 -17q0 -22 22 -22q10 0 17 7l542 542q7 7 7\
	    17zM832 1120l416 -416l-832 -832h-416v416zM1515 1024q0 -53 -37 -90l-166 -166l-416 416l166\
	    165q36 38 90 38 q53 0 91 -38l235 -234q37 -39 37 -91z'];

	var gear = ['-2 -1 18 18', 'M14,8.77 L14,7.17 L12.06,6.53 L11.61,5.44 L12.49,3.6 L11.36,2.47\
	    L9.55,3.38 L8.46,2.93 L7.77,1.01 L6.17,1.01 L5.54,2.95 L4.43,3.4\
	    L2.59,2.52 L1.46,3.65 L2.37,5.46 L1.92,6.55 L0,7.23 L0,8.82 L1.94,9.46\
	    L2.39,10.55 L1.51,12.39 L2.64,13.52 L4.45,12.61 L5.54,13.06 L6.23,14.98\
	    L7.82,14.98 L8.45,13.04 L9.56,12.59 L11.4,13.47 L12.53,12.34 L11.61,10.53\
	    L12.08,9.44 L14,8.75 L14,8.77 Z M7,11 C5.34,11 4,9.66 4,8 C4,6.34 5.34,5 7,5\
	    C8.66,5 10,6.34 10,8 C10,9.66 8.66,11 7,11 L7,11 Z'];

	var wizard = ['3 3 90 90', 'M32.8,18l-2.9,11.5L18.2,32l8.5,8.3l-3.6,11.3l11.4-3.2l8,8.8l1.5-6l-8.9-9\
	    c0.8-3.2,3.8-6.3,6.9-6.9l9.1,9.1l5.9-1.3l-8.5-8.3l3.6-11.3l-11.4,3.2L32.8,18z M52.4,45.8l-6.9,6.9L70.9,78\
	    c3.4-0.8,6.2-3.3,6.9-6.9L52.4,45.8z'];

	var look = ['-100 -100 1200 1200', 'M990,500c0,13.3-3.3,23.3-10,36.7c-50,83.3-120,150-206.7,200c-86.7,50-176.7,76.7-273.3,76.7c-96.7,0-186.7-26.7-273.3-76.7C140,686.7,73.3,620,20,536.7C13.3,523.3,10,510,10,500c0-13.3,3.3-23.3,10-36.7c50-83.3,120-150,206.7-200c86.7-50,176.7-76.7,273.3-76.7c96.7,0,186.7,26.7,273.3,76.7c86.7,50,153.3,116.7,206.7,200C986.7,476.7,990,486.7,990,500z M920,500c-56.7-86.7-123.3-150-206.7-193.3c23.3,36.7,33.3,80,33.3,123.3c0,66.7-23.3,123.3-73.3,173.3C626.7,650,566.7,676.7,500,676.7c-66.7,0-123.3-23.3-173.3-73.3C280,556.7,253.3,496.7,253.3,430c0-43.3,10-83.3,33.3-123.3C203.3,350,133.3,413.3,80,500c50,73.3,110,133.3,183.3,176.7c73.3,43.3,153.3,66.7,236.7,66.7c86.7,0,163.3-23.3,236.7-66.7C810,633.3,870,573.3,920,500z M520,310c6.7-6.7,6.7-10,6.7-20c0-6.7-3.3-13.3-6.7-20c-6.7-6.7-10-6.7-20-6.7c-46.7,0-83.3,16.7-116.7,50c-33.3,33.3-50,70-50,116.7c0,6.7,3.3,13.3,6.7,20c6.7,6.7,10,6.7,20,6.7c6.7,0,13.3-3.3,20-6.7c6.7-6.7,6.7-10,6.7-20c0-30,10-56.7,33.3-80c23.3-23.3,50-33.3,80-33.3C506.7,316.7,513.3,313.3,520,310z'];

	module.exports = {
	    magic: create.bind(null, magic),
	    prev: create.bind(null, prev),
	    next: create.bind(null, next),
	    rotate: create.bind(null, rotate),
	    move: create.bind(null, move),
	    pencil: create.bind(null, pencil),
	    look: create.bind(null, look),
	    gear: create.bind(null, gear),
	    wizard: create.bind(null, wizard)
	};

	function create(icon) {
	    return svg(path(icon[1]), icon[0]);
	}

	function svg(content, viewBox) {
	    return '<svg viewBox="' + (viewBox || "0 0 100 100") + '">' + content + '</svg>'
	}

	function path(d, width, stroke) {
	    return '<path stroke-width="' + (width || 1) + '" stroke="' + (stroke || 'white') +'" fill="white" d="' + d + '"/>';
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [[55.6310726, 37.4662212], [55.6310726, 37.4698145], [55.6290441, 37.4698145], [55.6290441, 37.4662212], [55.6310726, 37.4662212]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[55.6310726, 37.4662212], [55.6315798, 37.4653229]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[55.6290441, 37.4662212], [55.628537, 37.4653229]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[55.6315798, 37.4707128], [55.6310726, 37.4698145]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[55.6290441, 37.4698145], [55.628537, 37.4707128]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }],
	        "properties": {
	            "bbox": {
	                "max": [55.631579754349346, 37.47071282159479],
	                "min": [55.62853697692165, 37.46532292989007]
	            }
	        },
	        "type": "GeometryCollection"
	    },
	    "id": 1528172767,
	    "properties": {
	        "altitude": 10,
	        "api": "coco",
	        "classifier": "12104100101401070100000000",
	        "formir": 7770006,
	        "formirName": "тб",
	        "generalization": {
	            "baseScale": 100000,
	            "interpolation": true,
	            "scales": [{"ratio": 2, "scale": 0, "visibile": true}, {
	                "ratio": 1.8,
	                "scale": 2000,
	                "visibile": true
	            }, {"ratio": 1.6, "scale": 5000, "visibile": true}, {
	                "ratio": 1.5,
	                "scale": 10000,
	                "visibile": true
	            }, {"ratio": 1.4, "scale": 25000, "visibile": true}, {
	                "ratio": 1.2,
	                "scale": 50000,
	                "visibile": true
	            }, {"ratio": 1, "scale": 100000, "visibile": true}, {
	                "ratio": 0.5,
	                "scale": 200000,
	                "visibile": true
	            }, {"ratio": 0.4, "scale": 500000, "visibile": true}, {
	                "ratio": 0.3,
	                "scale": 1e+06,
	                "visibile": true
	            }, {"ratio": 0.2, "scale": 2e+06, "visibile": true}, {
	                "ratio": 0,
	                "scale": 5e+06,
	                "visibile": false
	            }, {"ratio": 0, "scale": 1e+07, "visibile": false}, {"ratio": 0, "scale": 2e+07, "visibile": false}]
	        },
	        "layer": 2015239848,
	        "width": 10
	    },
	    "type": "Feature"
	});

	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [55.6285977, 37.4747662],
	            "properties": {
	                //"api": "coco",
	                "bbox": {"max": [55.62982691458531, 37.47787688361091], "min": [55.6273684230973, 37.471655610992215]},
	                "color": "000000FF",
	                "fontName": "Arial",
	                "fontSize": 1,
	                "fontStyle": 2,
	                "offsetX": 0,
	                "text": "тб"
	            },
	            "type": "Point"
	        }],
	        "properties": {
	            "bbox": {
	                "max": [55.62859766884131, 37.47476624730156],
	                "min": [55.62859766884131, 37.47476624730156]
	            }
	        },
	        "type": "GeometryCollection"
	    },
	    "id": 1581591850,
	    "properties": {
	        "altitude": 10,
	        "api": "coco",
	        "classifier": "12104100101401070100000000",
	        "formir": 7770006,
	        "formirName": "тб",
	        "layer": 2015239848,
	        "width": 10
	    },
	    "type": "Feature"
	});

	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [[55.6022978, 37.4522428], [55.6022978, 37.4630225], [55.5992527, 37.4630225], [55.5992527, 37.4522428], [55.6022978, 37.4522428]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [55.6007752, 37.4576326],
	            "properties": {
	                "color": "000000FF",
	                "fontName": "Arial",
	                "fontSize": 2.997222222222222,
	                "fontStyle": 2,
	                "text": "trof",
	                api: 'coco',
	                offsetX: 0.5
	            },
	            "type": "Point"
	        }, {
	            "coordinates": [[55.6007753, 37.4495478], [55.6022978, 37.4522428], [55.5992527, 37.4522428], [55.6007753, 37.4495478]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }],
	        "properties": {
	            "bbox": {
	                "max": [55.60229776971982, 37.46302253408325],
	                "min": [55.59925271893088, 37.44954780482146]
	            }
	        },
	        "type": "GeometryCollection"
	    },
	    "id": 2145174067,
	    "properties": {
	        "altitude": 10,
	        "api": "coco",
	        "formir": 861021530,
	        "formirName": "trof",
	        "generalization": {
	            "baseScale": 100000,
	            "interpolation": true,
	            "scales": [{"ratio": 2, "scale": 0, "visibile": true}, {
	                "ratio": 1.8,
	                "scale": 2000,
	                "visibile": true
	            }, {"ratio": 1.6, "scale": 5000, "visibile": true}, {
	                "ratio": 1.5,
	                "scale": 10000,
	                "visibile": true
	            }, {"ratio": 1.4, "scale": 25000, "visibile": true}, {
	                "ratio": 1.2,
	                "scale": 50000,
	                "visibile": true
	            }, {"ratio": 1, "scale": 100000, "visibile": true}, {
	                "ratio": 0.5,
	                "scale": 200000,
	                "visibile": true
	            }, {"ratio": 0.4, "scale": 500000, "visibile": true}, {
	                "ratio": 0.3,
	                "scale": 1000000,
	                "visibile": true
	            }, {"ratio": 0.2, "scale": 2000000, "visibile": true}, {
	                "ratio": 0,
	                "scale": 5000000,
	                "visibile": false
	            }, {"ratio": 0, "scale": 10000000, "visibile": false}, {"ratio": 0, "scale": 20000000, "visibile": false}]
	        },
	        "layer": 1804289383,
	        "width": 10
	    },
	    "type": "Feature"
	});

	// флажок 1234
	Events.post(Events.CREATE_BILLBOARD, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [5.0455989, 8.5494118],
	            "properties": {
	                "bbox": {
	                    "maxX": 10.571694976403816, "maxY": 10.560676479605856,
	                    "minX": -0.4804971485571812, "minY": 6.5381471903090995
	                },
	                "color": "00ff00FF",
	                "fontName": "Arial",
	                "fontSize": 2.1166666666666663,
	                "fontStyle": 2,
	                "text": "1234"
	            }, "type": "Point"
	        }, {
	            "coordinates": [[0.0236275, -0.047255], [0, 6]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            }, "type": "LineString"
	        }, {
	            "coordinates": [[0, 11], [10, 11], [10, 6], [0, 6], [0, 11]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            }, "type": "LineString"
	        }
	        ],
	        "properties": {
	            "bbox": {"max": [10, 11], "min": [0, -0.04725495572863103]}
	        }, "type": "GeometryCollection"
	    },
	    "id": 1714636915,
	    "properties": {
	        "altitudeMode": "relativeToGround",
	        "anchorPoint": {"coordinates": [55.7207097, 37.0498618], "type": "Point"},
	        "formir": 846930886,
	        "formirName": "trof",
	        "generalization": {
	            "baseScale": 100000,
	            "interpolation": true,
	            "scales": [
	                {"ratio": 3, "scale": 0, "visibile": true},
	                {"ratio": 3, "scale": 2000, "visibile": true},
	                {"ratio": 3, "scale": 5000, "visibile": true},
	                {"ratio": 3, "scale": 10000, "visibile": true},
	                {"ratio": 2, "scale": 25000, "visibile": true},
	                {"ratio": 1.5, "scale": 50000, "visibile": true},
	                {"ratio": 1, "scale": 100000, "visibile": true},
	                {"ratio": 1, "scale": 200000, "visibile": true},
	                {"ratio": 1, "scale": 500000, "visibile": true},
	                {"ratio": 0.5, "scale": 1000000, "visibile": true},
	                {"ratio": 0.5, "scale": 2000000, "visibile": true},
	                {"ratio": 0.5, "scale": 5000000, "visibile": true},
	                {"ratio": 0.5, "scale": 10000000, "visibile": true},
	                {"ratio": 0.5, "scale": 20000000, "visibile": true}
	            ]
	        },
	        "layer": 1804289383,
	        "offsetX": 0,
	        "offsetY": 0,
	        "padding": 2,
	        "quality": 100,
	        "scale": 1
	    },
	    "type": "Feature"
	});

	// Стоячий знак прячется генерализацией
	Events.post(Events.CREATE_BILLBOARD, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [0, 0],
	            "properties": {
	                "bbox": {
	                    "maxX": 10.571694976403816, "maxY": 10.560676479605856,
	                    "minX": -0.4804971485571812, "minY": 6.5381471903090995
	                },
	                "color": "00ff00FF",
	                "fontName": "Arial",
	                "fontSize": 2.1166666666666663,
	                "fontStyle": 2,
	                "text": "1234"
	            }, "type": "Point"
	        }, {
	            "coordinates": [[0, 4], [-4.6, -4], [4.6, -4], [0, 4]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[0, 4], [0, 7]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[1, 5.5], [-1, 5.5]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }], "properties": {
	            "bbox": {"min": [-4.6, -4], "max": [4.6, 5.5]}
	        }, "type": "GeometryCollection"
	    },
	    "id": 233665123,
	    "properties": {
	        "altitudeMode": "relativeToGround",
	        "anchorPoint": {"coordinates": [55.9011879, 36.5964928], "type": "Point"},
	        "formir": 861021530,
	        "formirName": "trof",
	        "layer": 1804289383,
	        "offsetX": 0,
	        "offsetY": 0,
	        "padding": 2,
	        "quality": 100,
	        "scale": 1,
	        "generalization": {
	            "baseScale": 100000,
	            "interpolation": true,
	            "scales": [
	                {"ratio": 6, "scale": 0, "visibile": true},
	                {"ratio": 5, "scale": 2000, "visibile": true},
	                {"ratio": 4, "scale": 5000, "visibile": true},
	                {"ratio": 3, "scale": 10000, "visibile": true},
	                {"ratio": 2, "scale": 25000, "visibile": true},
	                {"ratio": 1.5, "scale": 50000, "visibile": true},
	                {"ratio": 1.2, "scale": 100000, "visibile": true},
	                {"ratio": 1, "scale": 200000, "visibile": true},
	                {"ratio": 0.9, "scale": 500000, "visibile": true},
	                {"ratio": 0.8, "scale": 1000000, "visibile": true},
	                {"ratio": 0.4, "scale": 2000000, "visibile": true},
	                {"ratio": 0, "scale": 5000000, "visibile": true},
	                {"ratio": 0, "scale": 10000000, "visibile": true},
	                {"ratio": 0, "scale": 20000000, "visibile": true}
	            ]
	        }
	    },
	    "type": "Feature"
	});

	// красный круг с буквой В внутри
	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [
	                [55.6400172, 37.4564189], [55.6397679, 37.4563747], [55.6395282, 37.456244],
	                [55.6393073, 37.4560316], [55.6391137, 37.4557459], [55.6389548, 37.4553977],
	                [55.6388367, 37.4550005], [55.638764, 37.4545695], [55.6387394, 37.4541212],
	                [55.638764, 37.453673], [55.6388367, 37.4532419], [55.6389548, 37.4528447],
	                [55.6391137, 37.4524965], [55.6393073, 37.4522108], [55.6395282, 37.4519984],
	                [55.6397679, 37.4518677], [55.6400172, 37.4518236], [55.6402664, 37.4518677],
	                [55.6405061, 37.4519984], [55.640727, 37.4522108], [55.6409206, 37.4524965],
	                [55.6410795, 37.4528447], [55.6411976, 37.4532419], [55.6412703, 37.453673],
	                [55.6412948, 37.4541212], [55.6412703, 37.4545695], [55.6411976, 37.4550005],
	                [55.6410795, 37.4553977], [55.6409206, 37.4557459], [55.640727, 37.4560316],
	                [55.6405061, 37.456244], [55.6402664, 37.4563747], [55.6400172, 37.4564189]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            }, "type": "LineString"
	        }, {
	            "coordinates": [
	                [55.6399409 - 0.0005, 37.4540874 - 0.0005 / Math.cos(55.6399409)],
	                [55.6399409 - 0.0005, 37.4540874 + 0.0005 / Math.cos(55.6399409)],
	                [55.6399409 + 0.0005, 37.4540874 + 0.0005 / Math.cos(55.6399409)],
	                [55.6399409 + 0.0005, 37.4540874 - 0.0005 / Math.cos(55.6399409)],
	                [55.6399409 - 0.0005, 37.4540874 - 0.0005 / Math.cos(55.6399409)]
	            ],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            }, "type": "LineString"
	        }, {
	            "coordinates": [55.6399409, 37.4540874],
	            "properties": {
	                bbox: {
	                    min: [55.6399409 - 0.0005, 37.4540874 - 0.0005 / Math.cos(55.6399409)],
	                    max: [55.6399409 + 0.0005, 37.4540874 + 0.0005 / Math.cos(55.6399409)]
	                },
	                "color": "FF0000FF",
	                "fontName": "Arial",
	                "fontSize": 1.7638888888888888,
	                "fontStyle": 0,
	                "text": "В",
	                offsetY: 0.5,
	                offsetX: 0.5
	            }, "type": "Point"
	        }], "type": "GeometryCollection"
	    },
	    "id": 125517949711111111,
	    "properties": {
	        "altitude": 10,
	        "api": "coco",
	        "formir": 631704567,
	        "formirName": "trof",
	        "layer": 791698927,
	        "width": 10,
	        "generalization": {
	            "baseScale": 100000,
	            "interpolation": true,
	            "scales": [
	                {"ratio": 0.2, "scale": 0, "visibile": true},
	                {"ratio": 0.2, "scale": 2000, "visibile": true},
	                {"ratio": 0.2, "scale": 5000, "visibile": true},
	                {"ratio": 0.3, "scale": 10000, "visibile": true},
	                {"ratio": 0.4, "scale": 25000, "visibile": true},
	                {"ratio": 0.7, "scale": 50000, "visibile": true},
	                {"ratio": 1.5, "scale": 100000, "visibile": true},
	                {"ratio": 3, "scale": 200000, "visibile": true},
	                {"ratio": 6, "scale": 500000, "visibile": true},
	                {"ratio": 12, "scale": 1000000, "visibile": true},
	                {"ratio": 24, "scale": 2000000, "visibile": true},
	                {"ratio": 50, "scale": 5000000, "visibile": true},
	                {"ratio": 100, "scale": 10000000, "visibile": true},
	                {"ratio": 200, "scale": 20000000, "visibile": true}
	            ]
	        }
	    },
	    "type": "Feature"
	});

	// черная ерунда только из линий
	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [
	                [55.721103, 37.0338181],
	                [55.721103, 37.0374114],
	                [55.7190792, 37.0374114],
	                [55.7190792, 37.0338181],
	                [55.721103, 37.0338181]
	            ],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            }, "type": "LineString"
	        }, {
	            "coordinates": [
	                [55.721103, 37.0338181],
	                [55.721609, 37.0329198]
	            ],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            }, "type": "LineString"
	        }, {
	            "coordinates": [
	                [55.7190792, 37.0338181],
	                [55.7185732, 37.0329198]
	            ],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            }, "type": "LineString"
	        }, {
	            "coordinates": [
	                [55.721609, 37.0383097],
	                [55.721103, 37.0374114]
	            ],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            }, "type": "LineString"
	        }, {
	            "coordinates": [
	                [55.7190792, 37.0374114],
	                [55.7185732, 37.0383097]
	            ],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            }, "type": "LineString"
	        }
	        ],
	        "properties": {
	            "bbox": {
	                "maxX": 55.7216089705721,
	                "maxY": 37.03830969722603,
	                "minX": 55.718573187705836,
	                "minY": 37.03291980552131
	            }
	        },
	        "type": "GeometryCollection"
	    },
	    "id": 719885386,
	    "properties": {
	        "altitude": 10,
	        "api": "coco",
	        "formir": 1957747793,
	        "formirName": "trof",
	        "generalization": {
	            "baseScale": 100000,
	            "interpolation": true,
	            "scales": [
	                {"ratio": 0.2, "scale": 0, "visibile": true},
	                {"ratio": 0.2, "scale": 2000, "visibile": true},
	                {"ratio": 0.2, "scale": 5000, "visibile": true},
	                {"ratio": 0.3, "scale": 10000, "visibile": true},
	                {"ratio": 0.4, "scale": 25000, "visibile": true},
	                {"ratio": 0.7, "scale": 50000, "visibile": true},
	                {"ratio": 1.5, "scale": 100000, "visibile": true},
	                {"ratio": 3, "scale": 200000, "visibile": true},
	                {"ratio": 6, "scale": 500000, "visibile": true},
	                {"ratio": 12, "scale": 1000000, "visibile": true},
	                {"ratio": 24, "scale": 2000000, "visibile": true},
	                {"ratio": 50, "scale": 5000000, "visibile": true},
	                {"ratio": 100, "scale": 10000000, "visibile": true},
	                {"ratio": 200, "scale": 20000000, "visibile": true}
	            ]
	        },
	        "layer": 1804289383,
	        "width": 10
	    },
	    "type": "Feature"
	});

	// лгбт реактор
	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [[43.2704697, 41.7528276], [43.2704697, 41.7582174], [43.2757022, 41.7582174], [43.2789723, 41.7555225], [43.2757022, 41.7528276], [43.2704697, 41.7528276]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[43.2789723, 41.7591158], [43.2789723, 41.7519292], [43.2704697, 41.7519292], [43.2704697, 41.7591158], [43.2789723, 41.7591158]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[43.2711238, 41.7528276], [43.2711238, 41.7582174]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[43.272759, 41.754175], [43.272759, 41.75687]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[[43.2740933, 41.75581], [43.2749618, 41.7555225], [43.2740933, 41.755235], [43.2740933, 41.75581]]],
	            "properties": {"fill": "000000FF"},
	            "type": "Polygon"
	        }, {
	            "coordinates": [[43.2728544, 41.7555225], [43.2747211, 41.7555225], [43.2745642, 41.7555225]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[43.273086, 41.75687], [43.272759, 41.75687]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[43.273086, 41.754175], [43.272759, 41.754175]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "000000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }], "type": "GeometryCollection"
	    },
	    "id": 2130794395,
	    "properties": {"altitude": 10, "api": "coco", "formir": 1139901474, "layer": 1804289383, "width": 10},
	    "type": "Feature"
	});

	if (false) {

	// sign
	// for (var i=0;i<100; i++)
	    Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	        "geometry": {
	            "geometries": [{
	                "coordinates": [[[55.7234505, 37.0366096], [55.7234097, 37.0366025], [55.7233704, 37.0365813], [55.7233342, 37.036547], [55.7233025, 37.0365008], [55.7232765, 37.0364444], [55.7232571, 37.0363802], [55.7232452, 37.0363104], [55.7232412, 37.0362379], [55.7232452, 37.0361654], [55.7232571, 37.0360957], [55.7232765, 37.0360314], [55.7233025, 37.0359751], [55.7233342, 37.0359289], [55.7233704, 37.0358945], [55.7234097, 37.0358734], [55.7234505, 37.0358663], [55.7234913, 37.0358734], [55.7235306, 37.0358945], [55.7235668, 37.0359289], [55.7235985, 37.0359751], [55.7236246, 37.0360314], [55.7236439, 37.0360957], [55.7236558, 37.0361654], [55.7236598, 37.0362379], [55.7236558, 37.0363104], [55.7236439, 37.0363802], [55.7236246, 37.0364444], [55.7235985, 37.0365008], [55.7235668, 37.036547], [55.7235306, 37.0365813], [55.7234913, 37.0366025], [55.7234505, 37.0366096]]],
	                "properties": {"fill": "ffff00ff"}, "type": "Polygon"
	            }], "type": "GeometryCollection"
	        },
	        "properties": {
	            altitude: 10,
	            width: 10,
	            api: 'coco',
	            layer: 'coco'
	        },
	        "id": 1681692777,
	        "type": "Feature"
	    });

	//flag


	    Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	        "geometry": {
	            "geometries": [{
	                "coordinates": [[55.7265989, 37.0389891], [55.7260018, 37.038885], [55.7254276, 37.0385766], [55.7248984, 37.038076], [55.7244346, 37.0374022], [55.7240539, 37.0365811], [55.7237711, 37.0356444], [55.7235969, 37.0346281], [55.7235381, 37.0335711], [55.7235969, 37.0325141], [55.7237711, 37.0314977], [55.7240539, 37.030561], [55.7244346, 37.02974], [55.7248984, 37.0290662], [55.7254276, 37.0285655], [55.7260018, 37.0282572], [55.7265989, 37.0281531], [55.727196, 37.0282572], [55.7277702, 37.0285655], [55.7282993, 37.0290662], [55.7287631, 37.02974], [55.7291438, 37.030561], [55.7294266, 37.0314977], [55.7296007, 37.0325141], [55.7296595, 37.0335711], [55.7296007, 37.0346281], [55.7294266, 37.0356444], [55.7291438, 37.0365811], [55.7287631, 37.0374022], [55.7282993, 37.038076], [55.7277702, 37.0385766], [55.727196, 37.038885], [55.7265989, 37.0389891]],
	                "properties": {
	                    "cap": "butt",
	                    "join": "miter",
	                    "miterLimit": 4,
	                    "stroke": "FF0000FF",
	                    "widthMultiplier": 7.84
	                },
	                "type": "LineString"
	            }, {
	                "coordinates": [[55.7265797, 37.0379294], [55.7260802, 37.0378443], [55.7255999, 37.0375924], [55.7251573, 37.0371834], [55.7247693, 37.0366328], [55.7244509, 37.035962], [55.7242143, 37.0351967], [55.7240686, 37.0343663], [55.7240194, 37.0335027], [55.7240686, 37.0326391], [55.7242143, 37.0318087], [55.7244509, 37.0310434], [55.7247693, 37.0303726], [55.7251573, 37.029822], [55.7255999, 37.029413], [55.7260802, 37.0291611], [55.7265797, 37.029076], [55.7270792, 37.0291611], [55.7275594, 37.029413], [55.728002, 37.029822], [55.72839, 37.0303726], [55.7287084, 37.0310434], [55.728945, 37.0318087], [55.7290906, 37.0326391], [55.7291398, 37.0335027], [55.7290906, 37.0343663], [55.728945, 37.0351967], [55.7287084, 37.035962], [55.72839, 37.0366328], [55.728002, 37.0371834], [55.7275594, 37.0375924], [55.7270792, 37.0378443], [55.7265797, 37.0379294]],
	                "properties": {
	                    "cap": "butt",
	                    "join": "miter",
	                    "miterLimit": 4,
	                    "stroke": "FF0000FF",
	                    "widthMultiplier": 1.6
	                },
	                "type": "LineString"
	            }, {
	                "coordinates": [[55.724095, 37.0327509], [55.7241428, 37.0323684], [55.7242092, 37.0319946], [55.7242936, 37.0316326], [55.7243955, 37.0312851], [55.7245141, 37.0309546], [55.7246484, 37.0306437], [55.7247975, 37.0303548], [55.7249602, 37.0300901], [55.7251353, 37.0298516], [55.7253214, 37.029641], [55.7255171, 37.0294601], [55.725721, 37.0293102], [55.7259314, 37.0291923], [55.7261469, 37.0291075], [55.7263656, 37.0290564], [55.7265861, 37.0290393], [55.7268065, 37.0290564], [55.7270253, 37.0291075], [55.7272407, 37.0291923], [55.7274512, 37.0293102], [55.7276551, 37.0294601], [55.7278508, 37.029641], [55.7280369, 37.0298516], [55.7282119, 37.0300901], [55.7283746, 37.0303548], [55.7285237, 37.0306437], [55.728658, 37.0309546], [55.7287766, 37.0312851], [55.7288784, 37.0316326], [55.7289629, 37.0319946], [55.7290292, 37.0323684], [55.729077, 37.0327509]],
	                "properties": {
	                    "cap": "butt",
	                    "join": "miter",
	                    "miterLimit": 4,
	                    "stroke": "FF0000FF",
	                    "widthMultiplier": 1.6
	                },
	                "type": "LineString"
	            }, {
	                "coordinates": [[55.729077, 37.0343108], [55.7290292, 37.0346934], [55.7289629, 37.0350671], [55.7288784, 37.0354291], [55.7287766, 37.0357766], [55.728658, 37.0361071], [55.7285237, 37.036418], [55.7283746, 37.0367069], [55.7282119, 37.0369716], [55.7280369, 37.0372101], [55.7278508, 37.0374207], [55.7276551, 37.0376016], [55.7274512, 37.0377516], [55.7272407, 37.0378694], [55.7270253, 37.0379542], [55.7268065, 37.0380053], [55.7265861, 37.0380224], [55.7263656, 37.0380053], [55.7261469, 37.0379542], [55.7259314, 37.0378694], [55.725721, 37.0377516], [55.7255171, 37.0376016], [55.7253214, 37.0374207], [55.7251353, 37.0372101], [55.7249602, 37.0369716], [55.7247975, 37.0367069], [55.7246484, 37.036418], [55.7245141, 37.0361071], [55.7243955, 37.0357766], [55.7242936, 37.0354291], [55.7242092, 37.0350671], [55.7241428, 37.0346934], [55.724095, 37.0343108]],
	                "properties": {
	                    "cap": "butt",
	                    "join": "miter",
	                    "miterLimit": 4,
	                    "stroke": "FF0000FF",
	                    "widthMultiplier": 1.6
	                },
	                "type": "LineString"
	            }], "type": "GeometryCollection"
	        },
	        "id": 1957747793,
	        "properties": {"altitude": 10, "api": "coco", "formir": 846930886, "layer": 1804289383, "width": 10},
	        "type": "Feature"
	    });


	}

/***/ })
/******/ ]);