varying vec2 vUv;
varying vec3 vPosition;

uniform vec3 uCamera;
uniform float uTime;
uniform float uBottom;
uniform float uTop;
uniform float uProgress;
uniform float uAnimated;

void main() {

    float stripes = mod(vPosition.y * 5.0 - uTime * 5.0, 1.0);

    stripes = pow(stripes, 3.0);

    vec4 col = vec4(stripes, 0., 0., 1.);

    col.a = col.r;
    col.rgb = vec3(135., 206., 235.) / 255.;

    vec3 _normal = vNormal;

    if(!gl_FrontFacing) {
        _normal = -_normal;
    }

    vec3 CameraToVertex = normalize(vPosition - uCamera);
    float y = (vPosition.y - uBottom - uTop) / (uTop - uBottom);

    float fresnel = dot(_normal, CameraToVertex) + 1.0;
    fresnel = pow(fresnel, 2.0);
    float falloff = smoothstep(.96, .0, fresnel);

    float holographic = stripes * 2.0 * fresnel;
    holographic += fresnel * 1.8;
    holographic *= falloff;

    if(uAnimated > 0.0) {
        csm_DiffuseColor.a = mix(holographic, 1.0, step(y, pow(uProgress,.8)));
    } else {
        csm_DiffuseColor.a = holographic;

    }

    // y = clamp(y,0.0,1.0);

    // y = step(y,.89);

    // csm_FragColor = vec4(y,0.0,0.0,1.0);

    // fresnel = pow(fresnel, 1.5);

    // csm_FragColor = col;
    // csm_FragColor = vec4(vec3(1.0, 0.0, 0.0), holographic);
    // csm_DiffuseColor = vec4(vec3(col.rgb), stripes * fresnel);
}