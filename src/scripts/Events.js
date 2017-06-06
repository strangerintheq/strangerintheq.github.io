var EventSystem = require('./EventSystem');

module.exports = {
//    CHANGE_SPACE: 'change-space', // {skybox: 'images/skybox/one'} or 'stars'
//    WAIT: 'wait',
//    TOOLTIP: 'tooltip', // {x: 200, y: 200, text: 'Текст сообщения'} or null for hiding

    // navigator event listeners
    NAVIGATOR_STATE_CHANGED: 'navigator-state-changed',
    LOCATION_CHANGED: 'location-changed',
    OBJECT_MOUSE_OVER: 'object-mouse-over',
    OBJECT_MOUSE_CLICK: 'object-mouse-click',
    LOCATION_CLICK: 'location-click',

    // user objects manipulations
    CREATE_LAYER: 'create-layer',
    CLEAR_LAYER: 'clear-layer',
    HAS_LAYER: 'has-layer',

    GET_LAYER_CONTENTS: 'get-layer-contents',
    DESTROY_LAYER: 'destroy-layer',
    CREATE_GEO_JSON_OBJECT: 'create-geo-json-object',
    CREATE_MODEL: 'create-model',
    CREATE_ELLIPSE: 'create-ellipse',
    CREATE_TEXT: 'create-text',

    // create ui
    CREATE_FORM: 'create-form',
    CREATE_BUTTON: 'create-button',

    // controls actions
    CONTROLS: 'controls',
    ROTATE_TO: 'rotate-to',
    SET_LOCATION: 'set-location',

    // without argument
    REDRAW: 'redraw',

    // null = toggle action
    SWITCH_GLOBE: 'switch-globe', // null, true, false
    SWITCH_ATMOSPHERE: 'switch-atmosphere', // null, true, false
    SWITCH_ATMOSPHERE_GROUND: 'switch-atmosphere-ground', // null, true, false
    SWITCH_ATMOSPHERE_NIGHT: 'switch-atmosphere-night', // null, true, false
    SWITCH_COMPASS: 'switch-compass', // null, true, false
    SWITCH_CONTROLS: 'switch-controls', // null, true, false
    SWITCH_2D_PROJECTION: 'switch-2d-projection', // null, "mercator", "equirectangular"

    // EDIT_OBJECT: 'edit-object', // 123456
    DESTROY_OBJECT: 'destroy-object', // 123456
    SEARCH_OBJECT: 'search-object', //123456
    GET_OBJECT: 'get-object', // 123456
    GET_OBJECT_GEOMETRY: 'get-object-geometry', // 123456
    GET_OBJECT_PROPERTIES: 'get-object-properties', // 123456
    GET_OBJECT_PROPERTY: 'get-object-property', // {id: 123456, property: 'customProperty'},
    SET_OBJECT_PROPERTIES: 'set-object-properties', // {id: 123456, properties: {customProperty: 'custom value'}},
    SET_OBJECT_GEOMETRY: 'set-object-geometry',

    // form actions
    SHOW_FORM: 'show-form',
    HIDE_FORM: 'hide-form',
    TOGGLE_FORM: 'toggle-form',

    // tile map events
    CHANGE_MAP: 'change-map',
    CHANGE_ELEVATION_MODEL:  'change-elevation-model',
    GET_OGC_LAYERS : 'get-ogc-layers',

    // internal events
    // started with '_' and 'inner-' in event name string
    // not for use outside coco-core-web engine
    //_SHOW_WMTS_LAYERS : 'show-wmts-layers',
    //_SHOW_WMS_LAYERS : 'show-wms-layers',
    //_ENABLE_MAP_LAYER : 'enable-map-layer',

    _CREATE_GROUND_MAP_LAYER : 'inner-create-ground-map-layer',
    _DESTROY_GROUND_MAP_LAYER: 'inner-destroy-ground-map-layer',

    _CREATE_WMS_MAP_LAYER: 'inner-create-wms-map-layer',
    _CREATE_WMTS_MAP_LAYER: 'inner-create-wmts-map-layer',
    _CREATE_TILE_MAP_LAYER: 'inner-create-tile-map-layer',

    _DESTROY_MAP_LAYER: 'inner-destroy-map-layer',

    _REQUEST_PICK: 'inner-request-pick', // mouse event as argument

    _ADD_LAYER: 'inner-add-layer', // layer reference
    _REMOVE_LAYER: 'inner-remove-layer', // layer reference
    _INSERT_LAYER: 'inner-insert-layer', // {index: 0, layer: layer}

    _EDIT_OBJECT: 'inner-edit-object',
    _BLOCK_NAVIGATOR_EVENTS_LISTENERS: 'inner-block-navigator-events-listeners',
    _BLOCK_TILE_LOADING: 'inner-block-tile-loading'
};

module.exports.post = EventSystem.post;
module.exports.listen = EventSystem.listen;