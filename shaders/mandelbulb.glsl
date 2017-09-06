// vertex shader source
attribute vec2 xy;

// we render only 2 triangles
void main(void) {
    gl_Position = vec4(xy, 0.0, 1.0);
}

// fragment shader source
// 'precisiоn' is a delimiter
precision highp float;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
uniform vec3 eye;
const float INFINITY = 1e32;
const int MAX_MARCHING_STEPS = 256;
const float MIN_DIST = 0.0;
const float MAX_DIST = 50.0;
const float EPSILON = 0.005;
const vec2 k = vec2( 0.3183099, 0.3678794 );

vec2 hash(vec2 x ) {
    x = x*k + k.yx;
    return -1.0 + 2.0*fract(16.0 * k*fract(x.x*x.y*(x.x+x.y)));
}

vec3 noised(vec2 p){
    vec2 i = floor( p );
    vec2 f = fract( p );

    // quintic interpolation
    vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);
    vec2 du = 30.0*f*f*(f*(f-2.0)+1.0);

    // cubic interpolation
//    vec2 u = f*f*(3.0-2.0*f);
//    vec2 du = 6.0*f*(1.0-f);


    vec2 ga = hash( i + vec2(0.0,0.0) );
    vec2 gb = hash( i + vec2(1.0,0.0) );
    vec2 gc = hash( i + vec2(0.0,1.0) );
    vec2 gd = hash( i + vec2(1.0,1.0) );

    float va = dot( ga, f - vec2(0.0,0.0) );
    float vb = dot( gb, f - vec2(1.0,0.0) );
    float vc = dot( gc, f - vec2(0.0,1.0) );
    float vd = dot( gd, f - vec2(1.0,1.0) );

    return vec3( va + u.x*(vb-va) + u.y*(vc-va) + u.x*u.y*(va-vb-vc+vd),   // value
                 ga + u.x*(gb-ga) + u.y*(gc-ga) + u.x*u.y*(ga-gb-gc+gd) +  // derivatives
                 du * (u.yx*(va-vb-vc+vd) + vec2(vb,vc) - va));
}

float smin1( float a, float b, float k ){
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}

float smin2( float a, float b, float k ) {
    float res = exp(-k * a) + exp(-k * b);
    return -log(res) / k;
}

float thorus(vec3 p, vec2 t){
  vec2 q = vec2(length(p.xz) - t.x, p.y);
  return length(q) - t.y;
}

float sphere(vec3 point, float r) {
    return length(point) - r;
}

float box(vec3 p, vec3 b) {
  vec3 d = abs(p) - b;
  return min(max(d.x, max(d.y, d.z)),0.0) + length(max(d, 0.0));
}

float repeatedCube(vec3 p) {
    vec3 rep = vec3(1.,1.,1.);
    vec3 q = mod(p, rep) - 0.5 * rep;
//    vec3 noise = noised(vec2(p.x, p.z));
//    q += noise.x;
    return sphere(q , 0.5);
}

float cubeBlendedWithThorus(vec3 p) {
    float d1 = box(p - sin(time)*2.0, vec3(1.,1.,1.));
    float d2 = thorus(p + cos(time), vec2(1.2, 0.3));
    return smin2(d1, d2, 3.);
}

float terrain(vec3 p) {
  vec3 noise = noised(vec2(p.x + time, p.z + time));
  return p.y +3. + noise.x * 0.1 ;
}

float cubeSubstractCubes(vec3 p) {
    float cube9 = sphere(p, 10.0);
    float manyCubes = repeatedCube(p);
    return max(cube9, -manyCubes);
}

float fixed_radius2 = 1.5;
float min_radius2 = 0.1;
float folding_limit = 1.0;
float scale =   1.5;
vec3 mtl = vec3(1.0, 1.3, 1.23)*0.8;

void sphere_fold(inout vec3 z, inout float dz) {
    float r2 = dot(z, z);
    if(r2 < min_radius2) {
        float temp = (fixed_radius2 / min_radius2);
        z *= temp;
        dz *= temp;
    } else if(r2 < fixed_radius2) {
        float temp = (fixed_radius2 / r2);
        z *= temp;
        dz *= temp;
    }
}

void box_fold(inout vec3 z, inout float dz) {
    z = clamp(z, -folding_limit, folding_limit) * 2.0 - z;
}

float mb(vec3 z) {
float scale = 4.  + sin(time)*0.5;
    vec3 offset = z;
    float dr =  1.;
    for (int n = 0; n < 20; ++n) {
        sphere_fold(z   , dr);
        box_fold(z, dr);
        z = scale * z + offset;
        dr = dr * abs(scale) + 1.0;
        offset = vec3( 0.1 - sin(time) * cos(time) * 0.1) ;
    }
    float r = length(z);
    return r / abs(dr);
}


///

float MandleBox(vec3 pos){
    const int Iterations = 12;
    float Scale = 1.5 + sin(time)*0.1;
    float FoldingLimit = 100.0;
    float MinRad2 = 0.2;
    vec4 scale = vec4(Scale, Scale, Scale, abs(Scale)) / MinRad2;
    float AbsScalem1 = abs(Scale - 1.0);
    float AbsScaleRaisedTo1mIters = pow(abs(Scale), float(1-Iterations));

   vec4 p = vec4(pos,1.0),
   p0 = p;  // p.w is the distance estimate

   for (int i=0; i<Iterations; i++)
   {

      p.xyz = clamp(p.xyz, -1.0, 1.0) * 2.0 - p.xyz;
      float r2 = dot(p.xyz, p.xyz);
      p *= clamp(max(MinRad2/r2, MinRad2), 0.0, 1.0);
      p = p*scale + p0;
      if (r2>FoldingLimit) break;
   }
   return ((length(p.xyz) - AbsScalem1) / p.w - AbsScaleRaisedTo1mIters);
}

/////////////////////////////////////
// Formula for original MandelBulb from
// http://blog.hvidtfeldts.net/index.php/2011/09/distance-estimated-3d-fractals-v-the-mandelbulb-different-de-approximations/
float MandelBulb(vec3 pos){
   const int Iterations = 12;
   const float Bailout = 8.0;
   float Power =5.;

	vec3 z = pos;
	float dr = 2.0;
	float r = 0.0;
	for (int i = 0; i < Iterations; i++) {
		r = length(z);
		if (r > Bailout) break;

		// convert to polar coordinates
		float theta = acos(z.z/r);
		float phi = atan(z.y,z.x);
		dr = pow(r, Power-1.0)*Power*dr + 1.0;

		// scale and rotate the point
		float zr = pow(r,Power);
		theta = theta*Power;
		phi = phi*Power;

		// convert back to cartesian coordinates
		z = zr*vec3(sin(theta)*cos(phi), sin(phi)*sin(theta), cos(theta));
		z += vec3(-1.1 + sin(time)*0.2, -.1 + cos(time)*0.2, -1. + cos(time)*sin(time)*0.2);
	}
	return 0.5*log(r)*r/dr;
}
/////////////////////////////////////


// union - min
// substract - max
float sceneSDF(vec3 p) {
return MandelBulb(p);
//    return max(mb(p), box(p, vec3(1.2)));
}

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

// http://erleuchtet.org/~cupe/permanent/enhanced_sphere_tracing.pdf

float t_min = 0.001;
float t_max = MAX_DIST;
const int MAX_ITERATIONS = 90;

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

vec3 rayDirection(float fieldOfView, vec2 size) {
    vec2 xy = gl_FragCoord.xy - size / 2.0;
    float z = size.y / tan(radians(fieldOfView) / 2.0);
    return normalize(vec3(xy, -z));
}

vec3 estimateNormal(vec3 p) {
    return normalize(vec3(
        sceneSDF(vec3(p.x + EPSILON, p.y, p.z)) - sceneSDF(vec3(p.x - EPSILON, p.y, p.z)),
        sceneSDF(vec3(p.x, p.y + EPSILON, p.z)) - sceneSDF(vec3(p.x, p.y - EPSILON, p.z)),
        sceneSDF(vec3(p.x, p.y, p.z  + EPSILON)) - sceneSDF(vec3(p.x, p.y, p.z - EPSILON))
    ));
}

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

    vec3 light1Pos = vec3(-20.0,
                          -20.0,
                          -20.0);
    vec3 light1Intensity = vec3(0.4, 0.4, 0.4);

    color += phongContribForLight(k_d, k_s, alpha, p, eye,
                                  light1Pos,
                                  light1Intensity);

    vec3 light2Pos = vec3(20.0,
                          20.0,
                          20.0);
    vec3 light2Intensity = vec3(0.4, 0.4, 0.4);

    color += phongContribForLight(k_d, k_s, alpha, p, eye,
                                  light2Pos,
                                  light2Intensity);
    return color;
}

mat4 viewMatrix(vec3 eye, vec3 center, vec3 up) {
	vec3 f = normalize(center - eye);
	vec3 s = normalize(cross(f, up));
	vec3 u = cross(s, f);
	return mat4(
		vec4(s, 0.0),
		vec4(u, 0.0),
		vec4(-f, 0.0),
		vec4(0.0, 0.0, 0.0, 1)
	);
}

void main(void) {

	vec3 direction = rayDirection(60.0, resolution);
    mat4 viewToWorld = viewMatrix(eye, vec3(0.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0));
    vec3 worldDir = (viewToWorld * vec4(direction, 0.0)).xyz;
    float distance = trace(eye, worldDir).x;

    if (distance > MAX_DIST - EPSILON) { // Didn't hit anything
        gl_FragColor = vec4(0.1, 0.1, 0.1, 1.0);
    } else {

        // The closest point on the surface to the eyepoint along the view ray
        vec3 p = eye + distance * worldDir;

        vec3 K_a = vec3(0.3, 0.2, 0.2);
        vec3 K_d = vec3(0.2, 0.4, 0.7);
        vec3 K_s = vec3(1.0, 1.0, 1.0);
        float shininess = 10.0;

        vec3 color = phongIllumination(K_a, K_d, K_s, shininess, p, eye)*2.;

        gl_FragColor = vec4(color, 1.0);
    }
}
