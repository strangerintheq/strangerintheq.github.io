float MengerSponge(vec3 p, float scale) {
    vec4 z = vec4(p, 2.);
    vec3 offset = vec3(0.785, 1.1, 0.46);
    for (int n = 0; n < 10; n++) {
        z = abs(z);
        if (z.x < z.y) z.xy = z.yx;
        if (z.x < z.z) z.xz = z.zx;
        if (z.y < z.z) z.yz = z.zy;
        z = z*scale;
        z.xyz -= offset*(scale-1.0);
        if (z.z < -0.5*offset.z*(scale-1.0))
            z.z+=offset.z*(scale-1.0);
    }
    return (length(max(abs(z.xyz)-vec3(1.0),0.0))-0.05)/z.w;
}