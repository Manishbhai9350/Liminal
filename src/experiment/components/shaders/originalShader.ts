export const TransitionVertex = /* glsl */ `

varying vec2 vUv;
varying float vSize;
void main() {
    float size = 1.0;
    float cameraDistance = 5.;
    vUv = uv;
    vSize = (0.1 * cameraDistance) / size;
    gl_Position = vec4(position, 1.0);
}

`;
export const TransitionFragment = /* glsl */ `
#define PI 3.141592653589793

uniform sampler2D tScene1;
uniform sampler2D tScene2;
uniform sampler2D tSection;
uniform sampler2D tTechNoise;

uniform vec2 uResolution;
uniform float uProgress;
uniform float uWaveSize;
uniform float uInnerDistortion;
uniform float uSectionProgress;
uniform float uWaveGlow;
uniform float uMaskRadius;
uniform float uRadius;
uniform float uTime;
uniform vec3 uMask;

varying float vSize;
varying vec2 vUv;

// ---------------- UTILS ----------------

float cubicIn(float t) {
    return t * t * t;
}

float efit(float x, float a1, float a2, float b1, float b2) {
    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}

float fit(float x, float a1, float a2, float b1, float b2) {
    return clamp(efit(x, a1, a2, b1, b2), min(b1, b2), max(b1, b2));
}

float _linstep(float begin, float end, float t) {
    return clamp((t - begin) / (end - begin), 0.0, 1.0);
}

// ---------------- FALL OFF ----------------

float _pl(vec2 inputVal, vec2 start, vec2 end, float margin, float progress) {
    vec2 v = end - start;
    float dist = length(v);
    vec2 dir = v / dist;
    return dot(dir, inputVal - start - dir * (dist + margin) * progress);
}

float falloff(vec2 inputVal, vec2 start, vec2 end, float margin, float progress) {
    return _linstep(0.0, -margin, _pl(inputVal, start, end, margin, progress));
}

// ---------------- CHROMATIC ABERRATION ----------------

float ca_linterp(float t) {
    return clamp(1.0 - abs(2.0 * t - 1.0), 0.0, 1.0);
}

float ca_remap(float t, float a, float b) {
    return clamp((t - a) / (b - a), 0.0, 1.0);
}

vec2 ca_barrelDistortion(vec2 coord, float amt) {
    vec2 cc = coord - 0.5;
    float dist = dot(cc, cc);
    return coord + cc * dist * amt;
}

vec4 ca_spectrum_offset(float t) {
    float lo = step(t, 0.5);
    float hi = 1.0 - lo;
    float w = ca_linterp(ca_remap(t, 1.0 / 6.0, 5.0 / 6.0));
    vec4 ret = vec4(lo, 1.0, hi, 1.0) * vec4(1.0 - w, w, 1.0 - w, 1.0);
    return pow(ret, vec4(1.0 / 2.2));
}

const int CA_ITERATIONS = 3;

vec4 chromatic_aberration(sampler2D tex, vec2 uv, float maxdistort, float bendAmount) {
    vec4 sumcol = vec4(0.0);
    vec4 sumw = vec4(0.0);

    for(int i = 0; i < CA_ITERATIONS; i++) {
        float t = float(i) / float(CA_ITERATIONS);
        vec4 w = ca_spectrum_offset(t);
        sumw += w;
        sumcol += w * texture2D(tex, ca_barrelDistortion(uv, bendAmount * maxdistort * t));
    }

    return sumcol / sumw;
}

// ---------------- SHAPES ----------------

float Circle(vec2 uv, float threshold, float radius) {
    return smoothstep(threshold, 0.0, length(uv) - radius + threshold);
}

vec2 Mul(vec2 uv, float value) {
    uv -= 0.5;
    uv *= value;
    uv += 0.5;
    return uv;
}

// ---------------- MAIN ----------------

void main() {
    vec3 color = vec3(0.0);

    float progress = cubicIn(uProgress);
    float aspect = uResolution.x / uResolution.y;

    if(progress > 0.0) {

        vec2 centeredUV = (vUv - 0.5) * vec2(aspect, 1.0);
        float time = uTime * 2.5;

        float circleWave = Circle(centeredUV, 0.3, progress);

        float wave = circleWave * smoothstep(0.0, 2.0, abs(sin(time + circleWave * PI * 3.0)));

        float height = 0.7;

        vec2 uv1 = Mul(vUv, 1.0 - (circleWave + wave) * height);
        vec3 tDiffuse1 = texture2D(tScene1, uv1).rgb;

        color = tDiffuse1;

        float circleMask = Circle(centeredUV, 0.075 * progress, progress - uMaskRadius);

        float circleInnerDistortion = Circle(centeredUV, 0.25 * progress, progress - uMaskRadius);
        vec2 uv2 = Mul(vUv, 1.0 + (uInnerDistortion - circleInnerDistortion * uInnerDistortion));
        vec3 tDiffuse2 = texture2D(tScene2, uv2).rgb;

        color = mix(tDiffuse1, tDiffuse2, circleMask);

        float waveColor = wave * uWaveGlow * (1.0 - Circle(centeredUV, 0.1, progress - 0.1));
        color += waveColor;

        color *= 1.0 - 0.7 * clamp(0.0, 1.0, circleMask - Circle(centeredUV + vec2(-0.1, 0.1) * progress, 0.175 * progress, progress - uMaskRadius));

    } else {
        color = texture2D(tScene1, vUv).rgb;
    }

    gl_FragColor = vec4(color, 1.0);
}

`;