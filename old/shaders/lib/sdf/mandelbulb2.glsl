float MandelBulb(vec3 pos, float power){
    vec3 w = pos;
    float dr = 1.0,r;
    vec3 p,p2,p4;
    float k1,k2,k3,k4,k5;

    for (int i = 0; i < 10; i++){
        r = dot(w, w);
        if (r > 4.0) break;
        dr =  pow(r, 3.5)*8.0*dr + 1.0;

        p = w;
        p2 = w * w;
        p4 = p2 * p2;

        k3 = p2.x + p2.z;
        k2 = inversesqrt( k3*k3*k3*k3*k3*k3*k3 );
        k1 = dot(p4, vec3(1)) - 6.0 * dot(p2, vec3(p2.y, p2.z, -p2.x / 3.0));
        k4 = dot(p2, vec3(1, -1, 1));
        k5 = 8.0*p.y*k4*k1*k2;

        w = pos + vec3(8.0*k5*p.x*p.z*(p2.x-p2.z)*(p4.x-6.0*p2.x*p2.z+p4.z),
                       -16.0*p2.y*k3*k4*k4 + k1*k1,
                       -k5*(p4.x*p4.x - 28.0*p4.x*p2.x*p2.z + 
                            70.0*p4.x*p4.z - 28.0*p2.x*p2.z*p4.z + p4.z*p4.z));
    }
    return log(r)*sqrt(r)/dr;
}