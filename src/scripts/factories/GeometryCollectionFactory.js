var Events = require('../../events/Events');
module.exports = {
    create: function (geoJson) {
        geoJson.geometry.geometries.forEach(createGeometry);

        function createGeometry(geometry) {
            Events.post(Events.CREATE_GEO_JSON_OBJECT, {
                type: 'Feature',
                geometry: geometry,
                properties: geoJson.properties
            });
        }
    }
};

