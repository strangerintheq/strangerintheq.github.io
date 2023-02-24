// generic raymarch algorithm

const int MAX_MARCHING_STEPS = 256;

float shortestDistanceToSurface(vec3 eye, vec3 marchingDirection, float start, float end) {
    float depth = start;
    for (int i = 0; i < MAX_MARCHING_STEPS; i++) {
        vec3 ray = depth * marchingDirection;
        float dist = sceneSDF(eye + ray);
        if (dist < 0.0005 * length(ray)) {
			return depth;
        }
        depth += dist;
        if (depth >= end) {
            return end;
        }
    }
    return end;
}
