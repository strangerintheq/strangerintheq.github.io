
// http://erleuchtet.org/~cupe/permanent/enhanced_sphere_tracing.pdf

const float t_min = 0.0001;
const float t_max = 50.0;
const int MAX_ITERATIONS = 256;
const float INFINITY = 1e32;

vec3 trace(vec3 o, vec3 d) {
    float omega = 1.3;
    float t = t_min;
    float candidate_error = INFINITY;
    float candidate_t = t_min;
    float previousRadius = 0.;
    float stepLength = 0.;
    float pixelRadius = 0.001;
    float functionSign = sceneSDF(o) < 0. ? -1. : 1.;
    vec3 mp;

    for (int i = 0; i < MAX_ITERATIONS; ++i) {
        mp = vec3(sceneSDF(d * t + o),0.,1.);
        float signedRadius = functionSign * mp.x;
        float radius = abs(signedRadius);
        bool sorFail = omega > 1. &&
        (radius + previousRadius) < stepLength;
        if (sorFail) {
            stepLength -= omega * stepLength;
            omega = 1.;
        } else {
        stepLength = signedRadius * omega;
        }
        previousRadius = radius;
        float error = radius / t;
        if (!sorFail && error < candidate_error) {
            candidate_t = t;
            candidate_error = error;
        }
        if (!sorFail && error < pixelRadius || t > t_max) break;
        t += stepLength;
   	}
    if (
        (t > t_max || candidate_error > pixelRadius)
    ) return vec3(INFINITY, 0., 0.);

    return vec3(candidate_t, mp.yz);
}
