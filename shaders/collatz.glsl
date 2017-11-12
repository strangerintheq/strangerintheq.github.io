#pragma import shaders/lib/2triangles.vertex.glsl

precision highp float;

// Created by inigo quilez - iq/2017
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

#define AA 2   // supersampling level. Make higher for more quality.

const float pi = 3.1415926535897932384626433832795;

// Generalized Collatz fractal
//
// f(n) = a·n + b   if n even
// f(n) = n/2       if n odd
//
// transforms into
//
// f(z) = [ ((2a+1)·z+2b) - k((2a-1)·z+2b) ]/4
//
// with k = exp(-nz). See https://www.youtube.com/watch?v=GJDz4kQqTV4 and https://www.shadertoy.com/view/llcGDS
//
// Classic Collatz: ka=3, kb=1

#pragma import shaders/lib/complex.glsl

uniform float a;
uniform float b;
uniform vec2 resolution;
uniform vec2 center;
uniform float zoom;
uniform float time;

vec3 render(in vec2 fragCoord) {

    float sc = 4.5;
    vec2 ce = vec2(0.0,0.0);

    vec2 p = ce + sc*(-resolution.xy+2.0*fragCoord) / resolution.x*zoom;
    p += center;
    float e = sc*2.0/resolution.x ;

    vec2 z = p;

    const float th = 100000.0;

    float d = 0.0;
    float f = 0.0;
    vec2 dz = vec2(1.0,0.0);
    for( int i=0; i<255; i++ ) {
        vec3 k = cexpj( pi*z );

        // f(n) = n/2 if n even
        // f(n) = an+b if n odd
        z = ( cadd((2.0*a+1.0)*z,2.0*b) - k.x*cmul(k.yz,cadd((2.0*a-1.0)*z,2.0*b)) )/4.0;

        float r = length(z);
        if( r>th ) { d=1.0; break; }
        f += 1.0;
    }

    vec3 col = vec3(0.5);
    if( d>0.5 ) {
        float hmmmm = 1.05 + exp(-(a-3.0)/(1.0+a/2.0));
        f -= clamp( hmmmm*log(length(z)/th)/log(a), 0.0, 1.0 );
        col = 0.5 + 0.5*cos(f*pow(a,0.9)*0.1 + 2.5 + vec3(0.0,0.6,1.0));
    }

    col = clamp( col, 0.0, 1.0 );

//    // axis
//    #if 1
//    float show = 1.0 - smoothstep(268.0,273.0,time );
//    float g  = smoothstep( 0.0, 1.0*e, abs( fract(p.y+0.5)-0.5 ) );
//          g *= smoothstep( 0.0, 1.0*e, abs( fract(p.x+0.5)-0.5) );
//    col = mix( col, vec3(0.0,0.0,0.0), (1.0-g)*show );
//
//    // origin axis
//          g  = smoothstep( 0.5*e, 2.0*e, abs(p.y) );
//          g *= smoothstep( 0.5*e, 2.0*e, abs(p.x) );
//    col = mix( col, vec3(0.0,0.0,0.0), (1.0-g)*show );
//
//    #endif
    return col;
}

void main(void) {
    const int aa = 2; // multisampling
    vec3 col;
    if (aa < 2) {
        col = render(gl_FragCoord.xy);
    } else {
        for( int m=0; m<aa; m++ ) {
            for( int n=0; n<aa; n++ ) {
                vec2 px = vec2(float(m),float(n))/float(aa);
                col += render( gl_FragCoord.xy + px );
            }
        }
        col /= float(aa*aa);
    }
    gl_FragColor = vec4(col, 1.0);
}