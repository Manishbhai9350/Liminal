uniform sampler2D tNoise;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uNoiseIntensity;
uniform float uTime;
varying vec2 vUv;
void main() {
    vec2 uv = vUv;
    float time = uTime * uNoiseSpeed;
    uv -= 0.5;
    uv *= uNoiseScale;
    uv += 0.5;
    float noise = texture2D(tNoise, uv * vec2(1.0, 0.46) + vec2(time, time * 0.323)).r;
    noise += texture2D(tNoise, uv * vec2(0.5, 0.25) + vec2(-time * 0.77, -time * 0.414)).r;
    float circularGradient = 0.0 - clamp(length(uv - 0.5) * 1.0, 0.0, 1.0);
    circularGradient = pow(circularGradient, 2.0);
    vec3 color = vec3(1.0);
    float alpha = circularGradient * noise * uNoiseIntensity;
    gl_FragColor = vec4(color, alpha);
}
