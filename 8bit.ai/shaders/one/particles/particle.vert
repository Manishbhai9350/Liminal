uniform sampler2D tNoise;
uniform float uSize;
uniform float uTime;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uNoiseIntensity;
uniform vec2 uResolution;
attribute float aSize;
varying vec2 vUv;
varying vec3 vPos;
varying vec4 vMvPos;
void main() {
    float time = uTime;
    vec3 pos = position;
    vec2 uv = normalize(pos).xy;    
    // Noise    
    uv += time * uNoiseSpeed;
    vec3 noise = texture2D(tNoise, uv * uNoiseScale).rgb;
    pos += (-1.0 + noise * 2.0) * uNoiseIntensity;    
    // Final position    
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    gl_PointSize = aSize * uSize * uResolution.y;
    gl_PointSize *= (1.0 / -viewPosition.z);
    vUv = uv;
    vPos = pos;
    vMvPos = modelViewMatrix * vec4(position, 1.0);
}