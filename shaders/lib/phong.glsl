const float EPSILON = 0.0005;

vec3 estimateNormal(vec3 p) {
    return normalize(vec3(
        sceneSDF(vec3(p.x + EPSILON, p.y, p.z)).x - sceneSDF(vec3(p.x - EPSILON, p.y, p.z)).x,
        sceneSDF(vec3(p.x, p.y + EPSILON, p.z)).x - sceneSDF(vec3(p.x, p.y - EPSILON, p.z)).x,
        sceneSDF(vec3(p.x, p.y, p.z + EPSILON)).x - sceneSDF(vec3(p.x, p.y, p.z - EPSILON)).x
    ));
}

//vec3 estimateNormal(vec3 p) {
//    return normalize(vec3(
//        sceneSDF(vec3(p.x + EPSILON, p.y, p.z)) - sceneSDF(vec3(p.x - EPSILON, p.y, p.z)),
//        sceneSDF(vec3(p.x, p.y + EPSILON, p.z)) - sceneSDF(vec3(p.x, p.y - EPSILON, p.z)),
//        sceneSDF(vec3(p.x, p.y, p.z + EPSILON)) - sceneSDF(vec3(p.x, p.y, p.z - EPSILON))
//    ));
//}
/**
 * Lighting contribution of a single point light source via Phong illumination.
 *
 * The vec3 returned is the RGB color of the light's contribution.
 *
 * k_a: Ambient color
 * k_d: Diffuse color
 * k_s: Specular color
 * alpha: Shininess coefficient
 * p: position of point being lit
 * eye: the position of the camera
 * lightPos: the position of the light
 * lightIntensity: color/intensity of the light
 *
 * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description
 */
vec3 phongContribForLight(vec3 k_d, vec3 k_s, float alpha, vec3 p, vec3 eye,
                          vec3 lightPos, vec3 lightIntensity) {
    vec3 N = estimateNormal(p);
    vec3 L = normalize(lightPos - p);
    vec3 V = normalize(eye - p);
    vec3 R = normalize(reflect(-L, N));

    float dotLN = dot(L, N);
    float dotRV = dot(R, V);

    if (dotLN < 0.0) {
        // Light not visible from this point on the surface
        return vec3(0.0, 0.0, 0.0);
    }

    if (dotRV < 0.0) {
        // Light reflection in opposite direction as viewer, apply only diffuse
        // component
        return lightIntensity * (k_d * dotLN);
    }
    return lightIntensity * (k_d * dotLN + k_s * pow(dotRV, alpha));
}

/**
 * Lighting via Phong illumination.
 *
 * The vec3 returned is the RGB color of that point after lighting is applied.
 * k_a: Ambient color
 * k_d: Diffuse color
 * k_s: Specular color
 * alpha: Shininess coefficient
 * p: position of point being lit
 * eye: the position of the camera
 *
 * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description
 */
vec3 phongIllumination(vec3 k_a, vec3 k_d, vec3 k_s, float alpha, vec3 p, vec3 eye) {

    const vec3 ambientLight = 0.5 * vec3(1.0, 1.0, 1.0);

    vec3 color = ambientLight * k_a;

    vec3 light1Pos = vec3(-10.0, -20.0, -10.0);
    vec3 light1Intensity = vec3(1.0, 1.0, 1.0);

    color += phongContribForLight(k_d, k_s, alpha, p, eye,
                                  light1Pos,
                                  light1Intensity);

    vec3 light2Pos = vec3(20.0, 10.0, 20.0);
    vec3 light2Intensity = vec3(1.0, 1.0, 1.0);

    color += phongContribForLight(k_d, k_s, alpha, p, eye,
                                  light2Pos,
                                  light2Intensity);
    return color;
}