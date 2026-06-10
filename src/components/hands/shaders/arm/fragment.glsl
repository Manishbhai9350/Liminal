varying vec2 vUv;
varying vec3 vPosition;

uniform vec3 uCamera;
uniform float uTime;
void main() {

    float ySin = sin((vPosition.y * 1.3 - uTime) * 10.0 );

    ySin = 1.0 -  smoothstep(.0,.50,abs(ySin));

    vec4 col = vec4(ySin, 0., 0., 1.);

    col.a = col.r;
    col.rgb = vec3(135., 206., 235.) / 255.;

    vec3 CameraToVertex = normalize(vPosition - uCamera);

    float fresnel = dot(csm_FragNormal,CameraToVertex) * .5 + .5;

    if(!gl_FrontFacing) {
        fresnel = 1.0 - fresnel;
    }

    fresnel = pow(fresnel,1.5);

    csm_FragColor = col;
    csm_FragColor = vec4(vec3(1.0,.6,.9) * col.r,fresnel);
    // csm_DiffuseColor = col;
}