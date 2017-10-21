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

	var index = 0;
	__webpack_require__(3);
	__webpack_require__(6);
	__webpack_require__(7);

	var examples = [
	    __webpack_require__(8),
	    __webpack_require__(9),
	];

	Events.post(Events.CREATE_BUTTON, {
	    title: 'Пример',
	    html: '?',
	    event: Events.TOGGLE_FORM,
	    data: 'example'
	});

	var example = Events.post(Events.CREATE_FORM, {
	    id: 'example',
	    title: 'Использование API',
	    close: true,
	    width: 420,
	    height: 405,
	    left: 20,
	    top: 200
	});

	var ta = example.addTextArea({
	    height: 300, width: 400
	});

	example.addButton({
	    title: 'Выполнить',
	    action: function(){
	        eval(ta.getValue());
	    }
	});

	example.addButton({
	    title: 'Назад',
	    action: prev
	});

	example.addButton({
	    title: 'Вперед',
	    action: next
	});

	function prev() {
	    index--;
	    index = index < 0 ? 0 : index;
	    update();
	}

	function next() {
	    index++;
	    index = index + 1 > examples.length ? examples.length - 1: index;
	    update();
	}

	function update(){
	    var exmpl = examples[index];
	    ta.setTitle((index + 1) + '/'+ examples.length + ': ' + exmpl.title);
	    ta.setValue(exmpl.code);
	}

	update();
	//require('./signs');
	//require('./trajectories');


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	Events.listen(Events.OBJECT_MOUSE_CLICK, function(e) {
	    console.log(JSON.stringify(e));
	});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	var wizardConfig = {
	    rules: [ {
	        type: "LineString", min: 4,
	        name: 'Нанесение тип 2',
	        description: 'Нанесение тип 2 бла бла бла'
	    }, {
	        "description": "", text: [
	            {"key":"formirName", "title":"Формирование", value:"1"},
	        ],
	        "max": 1,
	        "min": 1,
	        "name": "ТОЧЕЧНЫЙ ЗНАК",
	        "type": "Point"
	    }, {
	        type: "LineString", min: 2,
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
	        "type": "Point"
	    }, {
	        type: "Polygon", min: 1,
	        name: 'Нанесение тип 5',
	        description: 'Нанесение тип 5 бла бла бла'
	    }]
	};

	Events.post(Events.CREATE_BUTTON, {
	    title: 'Wizard',
	    html: SvgIcons.wizard(),
	    click: function () {
	        Events.post(Events.SHOW_WIZARD, JSON.parse(JSON.stringify(wizardConfig)))
	    }
	});

	createDrawButtons();

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
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	//require('./primitives/points');
	__webpack_require__(5);
	//require('./primitives/geometryCollection');
	//require('./primitives/featureCollection');
	//require('./primitives/text');



/***/ }),
/* 4 */
/***/ (function(module, exports) {

	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    type: "Feature",
	    geometry: {
	        type: "LineString",
	        coordinates: [
	            [57.0, 30.0],
	            [57.0, 32.0],
	            [58.0, 32.0],
	            [58.0, 30.0]
	        ]
	    },
	    properties: {
	        extrude: true,
	        altitude: 5000,
	        verticals: true,
	        stroke: 'ff0000ff',
	        fill: 'ffee007f'
	    }
	});

	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    type: "Feature",
	    geometry: {
	        type: "MultiLineString",
	        coordinates: [
	            [[67.0, 30.0], [67.0, 32.0], [68.0, 32.0], [68.0, 30.0]],
	            [[67.0, 33.0], [67.0, 34.0], [68.0, 34.0], [68.0, 33.0]],
	            [[67.0, 36.0], [67.0, 37.0], [68.0, 37.0], [68.0, 36.0]]
	        ]
	    },
	    properties: {
	        extrude: true,
	        altitude: 1000,
	        width: 1000,
	        height: 1000,
	        api:'coco',
	        stroke: 'ff0000ff',
	        fill: 'ffee007f'
	    }
	});



/***/ }),
/* 5 */
/***/ (function(module, exports) {

	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    type: "Feature",
	    id: 98444,
	    geometry: {
	        type: "Polygon",
	        coordinates: [[[55, 37], [55, 38], [56, 38], [55, 37]]]
	    },
	    properties: {
	        extrude: true,
	        verticals: true,
	        altitude: 1000,
	        fill: 'ff0000ff',
	        stroke: '00ff00ff'
	    }
	});

	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    type: "Feature",
	    id: 9844,
	    geometry: {
	        type: "MultiPolygon",
	        coordinates: [
	            [[[49.0, 29.0], [49.0, 33.0], [52.0, 33.0], [52.0, 29.0], [49.0, 29.0]]],
	            [[[39.0, 29.0], [39.0, 33.0], [42.0, 33.0], [42.0, 29.0], [39.0, 29.0]]]
	        ]
	    },
	    properties: {
	        extrude: true,
	        verticals: true,
	        altitude: 10000,
	        fill: '0ff000ff',
	        stroke: '000ff0ff'
	    }
	});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	Events.post(Events.CLEAR_LAYER, "editor");
	Events.post(Events.CREATE_BILLBOARD, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [[0, 0], [0, 3]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[0, 8], [5, 5.5], [0, 3], [0, 8]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }], "properties": {"bbox": {"max": [5, 8], "min": [0, 0]}}, "type": "GeometryCollection"
	    },
	    "id": 1957747793,
	    "properties": {
	        "altitudeMode": "relativeToGround",
	        "anchorPoint": {"coordinates": [55.755351, 37.6183285], "type": "Point"},
	        "formir": 846930886,
	        "formirName": "1 мсд",
	        "generalization": {
	            "baseScale": 100000,
	            "interpolation": true,
	            "scales": [{"ratio": 2, "scale": 0, "visible": false}, {
	                "ratio": 1.8,
	                "scale": 2000,
	                "visible": false
	            }, {"ratio": 1.6, "scale": 5000, "visible": true}, {
	                "ratio": 1.5,
	                "scale": 10000,
	                "visible": true
	            }, {"ratio": 1.4, "scale": 25000, "visible": true}, {
	                "ratio": 1.2,
	                "scale": 50000,
	                "visible": true
	            }, {"ratio": 1, "scale": 100000, "visible": true}, {
	                "ratio": 0.5,
	                "scale": 200000,
	                "visible": true
	            }, {"ratio": 0.4, "scale": 500000, "visible": true}, {
	                "ratio": 0.3,
	                "scale": 1000000,
	                "visible": true
	            }, {"ratio": 0.2, "scale": 2000000, "visible": true}, {
	                "ratio": 0.2,
	                "scale": 5000000,
	                "visible": true
	            }, {"ratio": 0.1, "scale": 10000000, "visible": true}, {"ratio": 0.1, "scale": 20000000, "visible": true}]
	        },
	        "group": 1681692777,
	        "layer": 1804289383,
	        "offsetX": 0,
	        "offsetY": 0,
	        "padding": 2,
	        "quality": 60,
	        "scale": 1,
	        "type": "Billboard"
	    },
	    "type": "Feature"
	});


	Events.post(Events.CREATE_BILLBOARD, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [[0, 0], [0, 8], [8, 8], [8, 7.5], [9, 7], [8, 6.5], [9, 6], [8, 5.5], [9, 5], [8, 4.5], [8, 4], [0, 4]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }, {
	            "coordinates": [[1, 4], [1, 8]],
	            "properties": {
	                "cap": "butt",
	                "join": "miter",
	                "miterLimit": 4,
	                "stroke": "FF0000FF",
	                "widthMultiplier": 1.6
	            },
	            "type": "LineString"
	        }], "properties": {"bbox": {"max": [9, 8], "min": [0, 0]}}, "type": "GeometryCollection"
	    },
	    "id": 1025202362,
	    "properties": {
	        "altitudeMode": "relativeToGround",
	        "anchorPoint": {"coordinates": [55.7548361, 37.6148961], "type": "Point"},
	        "formir": 1649760492,
	        "formirName": "trof",
	        "generalization": {
	            "baseScale": 100000,
	            "interpolation": true,
	            "scales": [{"ratio": 2, "scale": 0, "visible": true}, {
	                "ratio": 1.8,
	                "scale": 2000,
	                "visible": true
	            }, {"ratio": 1.6, "scale": 5000, "visible": true}, {
	                "ratio": 1.5,
	                "scale": 10000,
	                "visible": true
	            }, {"ratio": 1.4, "scale": 25000, "visible": true}, {
	                "ratio": 1.2,
	                "scale": 50000,
	                "visible": true
	            }, {"ratio": 1, "scale": 100000, "visible": true}, {
	                "ratio": 0.5,
	                "scale": 200000,
	                "visible": true
	            }, {"ratio": 0.4, "scale": 500000, "visible": true}, {
	                "ratio": 0.3,
	                "scale": 1000000,
	                "visible": true
	            }, {"ratio": 0.2, "scale": 2000000, "visible": true}, {
	                "ratio": 0.2,
	                "scale": 5000000,
	                "visible": true
	            }, {"ratio": 0.1, "scale": 10000000, "visible": true}, {"ratio": 0.1, "scale": 20000000, "visible": true}]
	        },
	        "layer": 1804289383,
	        "offsetX": 0,
	        "offsetY": 0,
	        "padding": 2,
	        "quality": 80,
	        "scale": 1
	    },
	    "type": "Feature"
	});

	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [55.7550212, 37.6183082],
	            "properties": {
	                "color": "000000FF",
	                "fontName": "Arial",
	                "fontSize": 2.1166666666666663,
	                "fontStyle": 2,
	                "offsetX": 0,
	                "text": "trof"
	            },
	            "type": "Point"
	        }],
	        "properties": {
	            "bbox": {
	                "max": [55.75502121510341, 37.61830821540788],
	                "min": [55.75502121510341, 37.61830821540788]
	            }
	        },
	        "type": "GeometryCollection"
	    },
	    "id": 1350490027,
	    "properties": {
	        "altitude": 10,
	        "api": "coco",
	        "formir": 1649760492,
	        "formirName": "trof",
	        "layer": 1804289383,
	        "width": 10
	    },
	    "type": "Feature"
	});

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
	            "scales": [{"ratio": 2, "scale": 0, "visible": true}, {
	                "ratio": 1.8,
	                "scale": 2000,
	                "visible": true
	            }, {"ratio": 1.6, "scale": 5000, "visible": true}, {
	                "ratio": 1.5,
	                "scale": 10000,
	                "visible": true
	            }, {"ratio": 1.4, "scale": 25000, "visible": true}, {
	                "ratio": 1.2,
	                "scale": 50000,
	                "visible": true
	            }, {"ratio": 1, "scale": 100000, "visible": true}, {
	                "ratio": 0.5,
	                "scale": 200000,
	                "visible": true
	            }, {"ratio": 0.4, "scale": 500000, "visible": true}, {
	                "ratio": 0.3,
	                "scale": 1e+06,
	                "visible": true
	            }, {"ratio": 0.2, "scale": 2e+06, "visible": true}, {
	                "ratio": 0,
	                "scale": 5e+06,
	                "visible": false
	            }, {"ratio": 0, "scale": 1e+07, "visible": false}, {"ratio": 0, "scale": 2e+07, "visible": false}]
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
	            "scales": [{"ratio": 2, "scale": 0, "visible": true}, {
	                "ratio": 1.8,
	                "scale": 2000,
	                "visible": true
	            }, {"ratio": 1.6, "scale": 5000, "visible": true}, {
	                "ratio": 1.5,
	                "scale": 10000,
	                "visible": true
	            }, {"ratio": 1.4, "scale": 25000, "visible": true}, {
	                "ratio": 1.2,
	                "scale": 50000,
	                "visible": true
	            }, {"ratio": 1, "scale": 100000, "visible": true}, {
	                "ratio": 0.5,
	                "scale": 200000,
	                "visible": true
	            }, {"ratio": 0.4, "scale": 500000, "visible": true}, {
	                "ratio": 0.3,
	                "scale": 1000000,
	                "visible": true
	            }, {"ratio": 0.2, "scale": 2000000, "visible": true}, {
	                "ratio": 0,
	                "scale": 5000000,
	                "visible": false
	            }, {"ratio": 0, "scale": 10000000, "visible": false}, {"ratio": 0, "scale": 20000000, "visible": false}]
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
	                {"ratio": 3, "scale": 0, "visible": true},
	                {"ratio": 3, "scale": 2000, "visible": true},
	                {"ratio": 3, "scale": 5000, "visible": true},
	                {"ratio": 3, "scale": 10000, "visible": true},
	                {"ratio": 2, "scale": 25000, "visible": true},
	                {"ratio": 1.5, "scale": 50000, "visible": true},
	                {"ratio": 1, "scale": 100000, "visible": true},
	                {"ratio": 1, "scale": 200000, "visible": true},
	                {"ratio": 1, "scale": 500000, "visible": true},
	                {"ratio": 0.5, "scale": 1000000, "visible": true},
	                {"ratio": 0.5, "scale": 2000000, "visible": true},
	                {"ratio": 0.5, "scale": 5000000, "visible": true},
	                {"ratio": 0.5, "scale": 10000000, "visible": true},
	                {"ratio": 0.5, "scale": 20000000, "visible": true}
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
	                {"ratio": 6, "scale": 0, "visible": true},
	                {"ratio": 5, "scale": 2000, "visible": true},
	                {"ratio": 4, "scale": 5000, "visible": true},
	                {"ratio": 3, "scale": 10000, "visible": true},
	                {"ratio": 2, "scale": 25000, "visible": true},
	                {"ratio": 1.5, "scale": 50000, "visible": true},
	                {"ratio": 1.2, "scale": 100000, "visible": true},
	                {"ratio": 1, "scale": 200000, "visible": true},
	                {"ratio": 0.9, "scale": 500000, "visible": true},
	                {"ratio": 0.8, "scale": 1000000, "visible": true},
	                {"ratio": 0.4, "scale": 2000000, "visible": true},
	                {"ratio": 0, "scale": 5000000, "visible": true},
	                {"ratio": 0, "scale": 10000000, "visible": true},
	                {"ratio": 0, "scale": 20000000, "visible": true}
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
	                {"ratio": 0.2, "scale": 0, "visible": false},
	                {"ratio": 0.2, "scale": 2000, "visible": false},
	                {"ratio": 0.2, "scale": 5000, "visible": true},
	                {"ratio": 0.3, "scale": 10000, "visible": true},
	                {"ratio": 0.4, "scale": 25000, "visible": true},
	                {"ratio": 0.7, "scale": 50000, "visible": true},
	                {"ratio": 1.5, "scale": 100000, "visible": true},
	                {"ratio": 3, "scale": 200000, "visible": true},
	                {"ratio": 6, "scale": 500000, "visible": true},
	                {"ratio": 12, "scale": 1000000, "visible": true},
	                {"ratio": 24, "scale": 2000000, "visible": true},
	                {"ratio": 50, "scale": 5000000, "visible": true},
	                {"ratio": 100, "scale": 10000000, "visible": true},
	                {"ratio": 200, "scale": 20000000, "visible": true}
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
	                {"ratio": 0.2, "scale": 0, "visible": true},
	                {"ratio": 0.2, "scale": 2000, "visible": true},
	                {"ratio": 0.2, "scale": 5000, "visible": true},
	                {"ratio": 0.3, "scale": 10000, "visible": true},
	                {"ratio": 0.4, "scale": 25000, "visible": true},
	                {"ratio": 0.7, "scale": 50000, "visible": true},
	                {"ratio": 1.5, "scale": 100000, "visible": true},
	                {"ratio": 3, "scale": 200000, "visible": true},
	                {"ratio": 6, "scale": 500000, "visible": true},
	                {"ratio": 12, "scale": 1000000, "visible": true},
	                {"ratio": 24, "scale": 2000000, "visible": true},
	                {"ratio": 50, "scale": 5000000, "visible": true},
	                {"ratio": 100, "scale": 10000000, "visible": true},
	                {"ratio": 200, "scale": 20000000, "visible": true}
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

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	Events.post(Events.CREATE_GEO_JSON_OBJECT, {
	    "geometry": {
	        "geometries": [{
	            "coordinates": [[55.733381, 37.651945], [55.7318636, 37.6573349], [55.733381, 37.6627248], [55.7348983, 37.6573349], [55.733381, 37.651945]],
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
	                "max": [55.73489830923419, 37.66272479679444],
	                "min": [55.73186355948026, 37.65194501338501]
	            }
	        },
	        "type": "GeometryCollection"
	    },
	    "id": 596516649,
	    "properties": {
	        "altitude": 10,
	        "anchorPoint": {"coordinates": [55.733381, 37.6573349], "type": "Point"},
	        "api": "coco",
	        "formir": 424238335,
	        "formirName": "1 мсд",
	        "generalization": {
	            "baseScale": 100000,
	            "interpolation": true,
	            "scales": [{"ratio": 2, "scale": 0, "visible": false}, {
	                "ratio": 1.8,
	                "scale": 2000,
	                "visible": false
	            }, {"ratio": 1.6, "scale": 5000, "visible": false}, {
	                "ratio": 1.5,
	                "scale": 10000,
	                "visible": false
	            }, {"ratio": 1.4, "scale": 25000, "visible": false}, {
	                "ratio": 1.2,
	                "scale": 50000,
	                "visible": true
	            }, {"ratio": 1, "scale": 100000, "visible": true}, {
	                "ratio": 0.5,
	                "scale": 200000,
	                "visible": true
	            }, {"ratio": 0.4, "scale": 500000, "visible": true}, {
	                "ratio": 0.3,
	                "scale": 1000000,
	                "visible": true
	            }, {"ratio": 0.2, "scale": 2000000, "visible": true}, {
	                "ratio": 0,
	                "scale": 5000000,
	                "visible": false
	            }, {"ratio": 0, "scale": 10000000, "visible": false}, {"ratio": 0, "scale": 20000000, "visible": false}]
	        },
	        "group": 719885386,
	        "layer": 1804289383,
	        "type": "GeoJson",
	        "width": 10
	    },
	    "type": "Feature"
	});

	Events.post(Events.CREATE_MODEL, {
	    "geometry": {
	        "coordinates": [55.733381, 37.6573349],
	        "type": "Point"
	    },
	    "id": 1189641421,
	    "properties": {
	        "anchorPoint": {
	            "coordinates": [55.733381, 37.6573349],
	            "type": "Point"
	        },
	        "file": "./models/collada/T-90/T-90.dae",
	        "formir": 424238335,
	        "formirName": "1 мсд",
	        "generalization": {
	            "baseScale": 100000,
	            "interpolation": true,
	            "scales": [
	                {"ratio": 2, "scale": 0, "visible": true}, {
	                "ratio": 1.8,
	                "scale": 2000,
	                "visible": true
	            }, {"ratio": 1.6, "scale": 5000, "visible": true}, {
	                "ratio": 1.5,
	                "scale": 10000,
	                "visible": true
	            }, {"ratio": 1.4, "scale": 25000, "visible": false}, {
	                "ratio": 1.2,
	                "scale": 50000,
	                "visible": false
	            }, {"ratio": 1, "scale": 100000, "visible": false}, {
	                "ratio": 0.5,
	                "scale": 200000,
	                "visible": false
	            }, {"ratio": 0.4, "scale": 500000, "visible": false}, {
	                "ratio": 0.3,
	                "scale": 1000000,
	                "visible": false
	            }, {"ratio": 0.2, "scale": 2000000, "visible": false}, {
	                "ratio": 0,
	                "scale": 5000000,
	                "visible": false
	            }, {"ratio": 0, "scale": 10000000, "visible": false}, {"ratio": 0, "scale": 20000000, "visible": false}]
	        },
	        "group": 719885386,
	        "layer": 1804289383,
	        "scale": 0.1,
	        "type": "ThreeD",
	        "xPosition": 0,
	        "xRotation": 0,
	        "yPosition": 0,
	        "yRotation": 0,
	        "zPosition": 0,
	        "zRotation": 0
	    },
	    "type": "Feature"
	});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = {
	    title: 'Нанести Модель',
	    code: "\
	Events.post(Events.ROTATE_TO, [59.987, 30.178]);\r\
	Events.post(Events.CREATE_MODEL, {\r\
	  geometry: {\r\
	    coordinates: [59.987, 30.178],\r\
	    type: 'Point'\r\
	  },\r\
	  id: 846930886,\n\
	  properties: {\n\
	    file: './models/collada/duck/duck.dae',\n\
	    scale: 1,\n\
	    generalization: {\n\
	        baseScale: 100000,\n\
	        interpolation: true,\n\
	        scales: [\n\
	            {ratio: 1.0, scale: 0, visible: true},\n\
	            {ratio: 2.5, scale: 2000, visible: true},\n\
	            {ratio: 5.0, scale: 5000, visible: true},\n\
	            {ratio: 1.0, scale: 10000, visible: false}\n\
	        ]\n\
	    }\n\
	  },\n\
	  type: 'Feature'\n\
	});"
	};



/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = {
	    title: 'Форма со свойствами',
	    code: 'Events.post(Events.SHOW_PROPERTIES_FORM, {title:\"жжж\", props:{\n' +
	    '"привет lsjakf ghjhasdgfhjg3asd": "123456789 kjsdhfkj3as jasdhfhgas"\n' +
	    ', "привет lsjakf ghjh3asdgfhjgasd": "123456789 kj3sdhfkjas jasdhfhgas"\n' +
	    ', "привет lsjakf ghjhas3dgfhjgasd": "123456789 kjsdhfkjas jasdhfhgas"\n' +
	    ', "привет lsjakf ghj3hasdgfhjgasd": "1233456789 kjsdhfkjas ja3sdhfhgas"\n' +
	    '}})'
	};



/***/ })
/******/ ]);