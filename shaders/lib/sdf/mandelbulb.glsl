
// Formula for original MandelBulb from
// http://blog.hvidtfeldts.net/index.php/2011/09/distance-estimated-3d-fractals-v-the-mandelbulb-different-de-approximations/
float MandelBulb(vec3 pos, float Power, vec3 c, bool julia){

    const int Iterations = 12;
    const float Bailout = 8.0;

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
		if (julia) z += c;
		else z += pos;
	}
	return 0.5*log(r)*r/dr;
}

float JuliaBulb(vec3 pos, float power, vec3 c) {
    return MandelBulb(pos, power, c, true);
}

float MandelBulb(vec3 pos, float power) {
    return MandelBulb(pos, power, vec3(0.), false);
}