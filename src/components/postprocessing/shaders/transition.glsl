#define PI 3.141592653589793

uniform vec3 uLoaderColor;
uniform float uLoaded;
uniform float uLoadProg;
uniform float uSwap;
uniform sampler2D uMap;
uniform float uProgress;
uniform float uWaveSize;
uniform float uInnerDistortion;
uniform float uWaveGlow;
uniform float uMaskRadius;
uniform float uTime;
uniform vec2 uResolution;

float cubicIn(float t) {
    return t * t;
}

float Circle(vec2 uv, float threshold, float radius) {
    return smoothstep(threshold, 0.0, length(uv) - radius + threshold);
}

vec2 Mul(vec2 uv, float value) {
    uv -= 0.5;
    uv *= value;
    uv += 0.5;
    return uv;
}

vec4 sceneTransition(vec4 inputColor, vec2 uv, float progress) {
    float aspect = uResolution.x / uResolution.y;
    float time = uTime * 2.5;
    vec2 centered = (uv - 0.5) * vec2(aspect, 1.0);

    // Scale progress so the circle always reaches every corner
    // regardless of aspect ratio. Corner is at (aspect/2, 0.5).
    float maxDist = length(vec2(aspect, 1.0) * 0.5);
    float scaledProg = progress * maxDist * 1.2;
    float scaledMask = uMaskRadius * maxDist;

    float circleWave = Circle(centered, 0.3, scaledProg);
    float wave = circleWave * smoothstep(0.0, 2.0, abs(sin(time + circleWave * PI * 3.0)));
    float height = 0.7;

    // scene A — distorted resample
    vec2 uv1 = Mul(uv, 1.0 - (circleWave + wave) * height);
    vec3 tDiffuse1 = uSwap < 0.5 ? texture2D(inputBuffer, uv1).rgb : texture2D(uMap, uv1).rgb;

    // scene B — incoming with inner distortion
    float circleMask = Circle(centered, 0.075 * scaledProg, scaledProg - scaledMask);
    float circleInnerDistortion = Circle(centered, 0.25 * scaledProg, scaledProg - scaledMask);
    vec2 uv2 = Mul(uv, 1.0 + (uInnerDistortion - circleInnerDistortion * uInnerDistortion));
    vec3 tDiffuse2 = uSwap < 0.5 ? texture2D(uMap, uv2).rgb : texture2D(inputBuffer, uv2).rgb;

    vec3 color = mix(tDiffuse1, tDiffuse2, circleMask);

    // wave glow ring
    float waveColor = wave * uWaveGlow * (1.0 - Circle(centered, 0.1, scaledProg - 0.1));
    color += waveColor;

    // edge shadow
    color *= 1.0 - 0.7 * clamp(0.0, 1.0, circleMask - Circle(centered + vec2(-0.1, 0.1) * scaledProg, 0.175 * scaledProg, scaledProg - scaledMask));

    return vec4(color, inputColor.a);
}

vec4 loaderTransition(vec4 inputColor, vec2 uv, float loadProg) {
    float progress = cubicIn(loadProg * 1.41) / 1.41;

    if(progress <= 0.0)
        return inputColor;

    float aspect = uResolution.x / uResolution.y;
    float time = uTime * 2.5;
    vec2 centered = (uv - 0.5) * vec2(aspect, 1.0);

    // Same maxDist fix so loader circle covers the whole screen
    float maxDist = length(vec2(aspect, 1.0) * 0.5);
    float scaledProg = progress * maxDist;
    float scaledMask = uMaskRadius * maxDist;

    float circleWave = Circle(centered, 0.3, scaledProg);
    float wave = circleWave * smoothstep(0.0, 2.0, abs(sin(time + circleWave * PI * 3.0)));
    float height = 0.7;

    // SWAPPED vs original:
    // scene A side — uLoaderColor is the base (outgoing)
    vec3 tDiffuse1 = uLoaderColor;

    // scene B side — inputColor (the scene) is incoming
    float circleMask = Circle(centered, 0.075 * scaledProg, scaledProg - scaledMask);
    float circleInnerDistortion = Circle(centered, 0.25 * scaledProg, scaledProg - scaledMask);
    vec2 uv2 = Mul(uv, 1.0 + (uInnerDistortion - circleInnerDistortion * uInnerDistortion));
    vec3 tDiffuse2 = texture2D(inputBuffer, uv2).rgb;

    vec3 color = mix(tDiffuse1, tDiffuse2, circleMask);

    // wave glow ring
    float waveColor = wave * uWaveGlow * (1.0 - Circle(centered, 0.1, scaledProg - 0.1));
    color += waveColor;

    // edge shadow
    color *= 1.0 - 0.7 * clamp(0.0, 1.0, circleMask - Circle(centered + vec2(-0.1, 0.1) * scaledProg, 0.175 * scaledProg, scaledProg - scaledMask));

    return vec4(color, inputColor.a);
}

// ─── main ─────────────────────────────────────────────────────────────────
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    if(uLoaded < 0.5) {
        outputColor = loaderTransition(inputColor, uv, uLoadProg);
        return;
    }

    float progress = cubicIn(uProgress * 1.41) / 1.41;
    if(progress <= 0.0) {
        outputColor = inputColor;
        return;
    }

    outputColor = sceneTransition(inputColor, uv, progress);
}
