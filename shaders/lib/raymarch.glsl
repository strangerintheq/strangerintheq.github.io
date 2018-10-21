// generic raymarch algorithm

const int MAX_MARCHING_STEPS = 256;

vec3 trace(vec3 eye, vec3 marchingDirection) {
    vec3 result = vec3(0., 0., 0.);
    for (int i = 0; i < MAX_MARCHING_STEPS; i++) {
        vec3 ray = result.x * marchingDirection;
        vec2 dist = sceneSDF(eye + ray);
        if (dist.x < 0.0005 * length(ray)) {
			return result;
        }

        result.x += dist.x;
        result.y += 1.0;
        result.z = dist.y;

        if (result.x >= 50.) {
            return result;
        }
    }
    return result;
}
