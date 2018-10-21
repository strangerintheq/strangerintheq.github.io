vec2 MengerSponge(vec3 p, float scale) {
    vec4 z = vec4(p, 5.);
    vec3 offset = vec3(1.0, 1.0, 1.0);
    float c = 0.;
    for (int n = 0; n < 10; n++) {
        z = abs(z);
        if (z.x < z.y) {
            z.xy = z.yx;
            c = 0.2;
        }
        if (z.x < z.z) {
            z.xz = z.zx;
            c = 0.4;
        }
        if (z.y < z.z) {
            z.yz = z.zy;
            c = 0.6;
        }
        z = z*scale;

        z.xyz -= offset*(scale-1.0);
        if (z.z < -0.5*offset.z*(scale-1.0)){
            z.z+=offset.z*(scale-1.0);
//            c = 0.8;
        }



    }
    return vec2((length(max(abs(z.xyz)-vec3(1.0),0.0))-0.05)/z.w, c);
}