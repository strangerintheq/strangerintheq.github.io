//------------------------------------------------------
// complex numbers operations
//------------------------------------------------------

vec2 cadd( vec2 a, float s ) {
    return vec2( a.x+s, a.y );
}

vec2 cmul( vec2 a, vec2 b )  {
    return vec2( a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x );
}

vec2 cdiv( vec2 a, vec2 b )  {
    float d = dot(b,b);
    return vec2( dot(a,b), a.y*b.x - a.x*b.y ) / d;
}

vec2 cmulj( vec2 z ) {
    return vec2(-z.y,z.x);
}

vec3 cexp( vec2 z ) {
    return vec3( exp(z.x), vec2( cos(z.y), sin(z.y) ) );
}

vec3 cexpj( vec2 z ) {
    return vec3( exp(-z.y), vec2( cos(z.x), sin(z.x) ) );
}
