const {PI, sin, cos, log, tan, hypot, atan2, max, log2, exp, atan, floor, pow, sqrt, asin} = Math;
const earthRadius = 6371e3;
const asRadians = PI / 180;
const asDegrees = 180 / PI;

function haversineDistance(from, to) {
    const phi1 = from.lat * asRadians, phi2 = to.lat * asRadians;
    const dPhi = phi2 - phi1, dLambda = (to.lon - from.lon) * asRadians;
    const a = pow(sin(dPhi / 2), 2) + cos(phi1) * cos(phi2) * pow(sin(dLambda / 2), 2);
    const c = 2 * atan2(sqrt(a), sqrt(1 - a));
    return earthRadius * c; // km
}

function bearing(from, to) {
    const phi1 = from.lat * asRadians, phi2 = to.lat * asRadians;
    const dLambda = (to.lon - from.lon) * asRadians;
    const y = sin(dLambda) * cos(phi2);
    const x = cos(phi1) * sin(phi2) - sin(phi1) * cos(phi2) * cos(dLambda);
    return (atan2(y, x) * asDegrees + 360) % 360; // degrees
}

function destination(from, bearing, distance) {
    const phi1 = from.lat * asRadians, lambda1 = from.lon * asRadians, d = distance / earthRadius;
    const phi2 = asin(sin(phi1) * cos(d) + cos(phi1) * sin(d) * cos(bearing));
    const lambda2 = lambda1 + atan2(sin(bearing) * sin(d) * cos(phi1), cos(d) - sin(phi1) * sin(phi2));
    return {lat: phi2 * asDegrees, lon: lambda2 * asDegrees}
}

function interpolateGreatCircle(from, to, fraction) {
    let b = bearing(from, to);
    // debugger
    let d = haversineDistance(from, to);
    return destination(from, b*asRadians, d * fraction)
}

function mercatorProject(lat) {

}

function mercatorUnProject(lat) {

}