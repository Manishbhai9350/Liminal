varying vec2 vUv;
varying vec3 vPosition;

uniform vec3 uCamera;
uniform float uTime;
uniform float uBottom;
uniform float uTop;
uniform float uProgress;
uniform float uAnimated;

// dissolve uniforms
uniform float uDissolveProgress; // 0 = fully dissolved, 1 = fully visible
uniform float uDissolveEdgeWidth; // width of the glowing edge
uniform vec3 uDissolveEdgeColor; // glow color at dissolve edge
uniform float uDissolveFrequency; // controls noise scale

// add your perlin3d here
// float perlin3d(vec3 p) { ... }

#include ../includes/perlin3d.glsl

void main() {

    // ---- HOLOGRAM ----
    float stripes = mod(vPosition.y * 5.0 - uTime * 5.0, 1.0);
    stripes = pow(stripes, 3.0);

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

    float holoAlpha;
    if(uAnimated > 0.0) {
        holoAlpha = mix(holographic, 1.0, step(y, pow(uProgress, .8)));
    } else {
        holoAlpha = holographic;
    }

    // ---- DISSOLVE ----
    float noise = perlin3d(vPosition * uDissolveFrequency + uTime * 0.2);
    noise = noise * 0.5 + 0.5; // remap from [-1,1] to [0,1]

    float dissolveThreshold = uDissolveProgress;
    float dissolved = step(dissolveThreshold, noise); // 0 = burned away, 1 = visible

    // glowing edge band just above the dissolve threshold
    float edge = smoothstep(dissolveThreshold, dissolveThreshold + uDissolveEdgeWidth, noise) - smoothstep(dissolveThreshold + uDissolveEdgeWidth, dissolveThreshold + uDissolveEdgeWidth * 2.0, noise);
    // apply dissolve only
    csm_DiffuseColor.a = dissolved;

    // add edge glow on top
    csm_DiffuseColor.rgb += uDissolveEdgeColor * edge * 3.0;
}