module.exports = function (createObjectFunction, createPositionsFunction, defaultProperties) {
    return function (geoJson, single) {
        if (!geoJson.properties) {
            geoJson.properties = defaultProperties || {};
        }
        var objects = [];
        if (single) {
            add(geoJson.geometry.coordinates);
        } else {
            geoJson.geometry.coordinates.forEach(add);
        }
        return objects;

        function add(coordinates, index) {
            var alt = geoJson.properties.altitude || 0;
            var positions = createPositionsFunction(coordinates, alt);
            var object = createObjectFunction(positions, geoJson, index);
            objects.push(object);
        }
    }
};