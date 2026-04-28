// SPDX-License-Identifier: CC0-1.0
varying vec2 vUv;

uniform float uTime;
uniform float uFreq;
uniform float uScale;
uniform float uSpeed;
uniform float uContrast;
uniform float uCurveAmp;
uniform float uCurveOff;
uniform vec2 uMouse;
uniform float uFractSoftness;
uniform float uFractStrips;
uniform float uFractStrength;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform sampler2D uPerlin;

const float NUM_STRIPES = 25.0;
const float STRRENGTH = 1.0;
const float SOFTNESS = 0.0005;

// vec3 ColorR = vec3(0.0, 0.54, 0.64);
// vec3 ColorA = vec3(0.11, 0.28, 0.86);
// vec3 ColorA = vec3(0.86, 0.11, 0.11);
// vec3 ColorB = vec3(0.0);

vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x * 34.0) + 10.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

// Classic Perlin noise
// float pnoise(vec3 P) {
//     vec3 Pi0 = floor(P); // Integer part for indexing
//     vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
//     Pi0 = mod289(Pi0);
//     Pi1 = mod289(Pi1);
//     vec3 Pf0 = fract(P); // Fractional part for interpolation
//     vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
//     vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
//     vec4 iy = vec4(Pi0.yy, Pi1.yy);
//     vec4 iz0 = Pi0.zzzz;
//     vec4 iz1 = Pi1.zzzz;

//     vec4 ixy = permute(permute(ix) + iy);
//     vec4 ixy0 = permute(ixy + iz0);
//     vec4 ixy1 = permute(ixy + iz1);

//     vec4 gx0 = ixy0 * (1.0 / 7.0);
//     vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
//     gx0 = fract(gx0);
//     vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
//     vec4 sz0 = step(gz0, vec4(0.0));
//     gx0 -= sz0 * (step(0.0, gx0) - 0.5);
//     gy0 -= sz0 * (step(0.0, gy0) - 0.5);

//     vec4 gx1 = ixy1 * (1.0 / 7.0);
//     vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
//     gx1 = fract(gx1);
//     vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
//     vec4 sz1 = step(gz1, vec4(0.0));
//     gx1 -= sz1 * (step(0.0, gx1) - 0.5);
//     gy1 -= sz1 * (step(0.0, gy1) - 0.5);

//     vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
//     vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
//     vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
//     vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
//     vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
//     vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
//     vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
//     vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

//     vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
//     vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));

//     float n000 = norm0.x * dot(g000, Pf0);
//     float n010 = norm0.y * dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
//     float n100 = norm0.z * dot(g100, vec3(Pf1.x, Pf0.yz));
//     float n110 = norm0.w * dot(g110, vec3(Pf1.xy, Pf0.z));
//     float n001 = norm1.x * dot(g001, vec3(Pf0.xy, Pf1.z));
//     float n011 = norm1.y * dot(g011, vec3(Pf0.x, Pf1.yz));
//     float n101 = norm1.z * dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
//     float n111 = norm1.w * dot(g111, Pf1);

//     vec3 fade_xyz = fade(Pf0);
//     vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
//     vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
//     float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
//     return 2.2 * n_xyz;
// }

float pnoise(vec3 p) {
    vec2 uv = p.xy;
    uv += p.z;

    float noise = texture(uPerlin, uv);

    return noise;
}

// --------------------------------------------------
// COLOR SPACE
// --------------------------------------------------

vec4 safeQuatMix(vec4 a, vec4 b, float t) {
    // If quaternions point opposite, flip one
    if(dot(a, b) < 0.0)
        b = -b;

    // Normalize after mix for safety
    return normalize(mix(a, b, t));
}

// --------------------------------------------------
// UV → SPHERE SPACE
// --------------------------------------------------
vec3 uv_to_cartesian3d(vec2 uv) {
    float theta = uv.x * 6.28318530718;
    float phi = uv.y * 3.14159265359;
    return vec3(sin(phi) * cos(theta), sin(phi) * sin(theta), cos(phi));
}

// --------------------------------------------------
// RANDOM + QUATERNIONS
// --------------------------------------------------
float hash(float n) {
    return fract(sin(n) * 43758.5453123);
}

vec4 randomQuaternion(float seed) {
    float u1 = hash(seed + 0.0);
    float u2 = hash(seed + 1.0);
    float u3 = hash(seed + 2.0);

    float sqrt1_u1 = sqrt(1.0 - u1);
    float sqrt_u1 = sqrt(u1);

    float theta1 = 6.28318530718 * u2;
    float theta2 = 6.28318530718 * u3;

    return vec4(sqrt1_u1 * sin(theta1), sqrt1_u1 * cos(theta1), sqrt_u1 * sin(theta2), sqrt_u1 * cos(theta2));
}

vec3 rotateVecByQuat(vec3 v, vec4 q) {
    return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

float distanceToPlane(vec3 p, vec4 q) {
    vec3 n = rotateVecByQuat(vec3(0.0, 0.0, 1.0), q);
    return dot(p, n);
}

float fractalGlass(vec2 uv, float scale) {
    // repeat space
    float x = uv.x * scale;
    float f = fract(x);

    // distance to band center
    float d = abs(f - 0.5);

    // gaussian falloff → smooth glass highlight
    float band = exp(-20.0 * d * d);

    // add subtle micro variation so it feels organic
    float x2 = uv.x * scale * 0.5/*  + uv.y * 2.0 */;
    float f2 = fract(x2);
    float d2 = abs(f2 - 0.5);
    float band2 = exp(-15.0 * d2 * d2);

    return band * 0.7 + band2 * 0.3;
}

float cornerMask(vec2 uv) {
    float left = step(uv.x, 0.5);
    float right = step(0.5, uv.x);
    float bottom = step(uv.y, 0.5);
    float top = step(0.5, uv.y);

    float bottomLeft = left * bottom;
    float topRight = right * top;

    return bottomLeft + topRight;
}

float displacement(float x, float num_stripes, float strength) {

    float modulus = 1.0 / num_stripes;

    return mod(x, modulus) * strength;
}

float fractal_glass(float x) {

    float d = 0.0;
    for(int i = -5; i <= 5; i++) {
        d += displacement(x + float(i) * uFractSoftness / 1000.0, uFractStrips, uFractStrength);
    }

    d = d / 11.0;

    return x + d;
}

// --------------------------------------------------
// MAIN
// --------------------------------------------------
void main() {
    // 1️⃣ UV scaling (zoom control)
    // vec2 uv = (vUv - 0.5) + 0.5;
    // vec3 pos = uv_to_cartesian3d(uv * uFreq * .1);

    // // 2️⃣ Speed controlled time
    float time = uTime * uSpeed / 10.0;

    // // 3️⃣ Multiple rotating planes
    // float accum = 0.0;
    // float total = 0.0;

    // for(int i = 0; i < 4; i++) {
    //     if(float(i) >= uFreq * .1)
    //         break;

    //     float seed = float(i) * 10.0;
    //     float t = time + seed;

    //     vec4 q1 = randomQuaternion(floor(t));
    //     vec4 q2 = randomQuaternion(floor(t + 1.0));
    //     vec4 quat = safeQuatMix(q1, q2, fract(t));

    //     float d = distanceToPlane(pos, quat);
    //     float g = d * 0.5 + 0.5; // -1..1 → 0..1

    //     accum += g;
    //     total += 1.0;
    // }

    // float gradient = accum / total;

    // // 4️⃣ Contrast control
    // gradient = pow(gradient, uContrast);
    // gradient = smoothstep(0.0, 1.0, gradient);

    // 5️⃣ Final color (linear workflow)
    // vec3 color = mix(toLinear(ColorA), toLinear(ColorB), gradient);
    // vec3 color = mix(ColorA, ColorB, gradient);
    // float PI = 3.14159265;
    // float curve = sin(PI * vUv.x + uTime) * .04 * sin(uTime) * .1 + uCurveOff;   // peak height = 0.3

    // float mask = smoothstep(curve - 0.2, curve + 0.2, 1.0 - vUv.y);

    // color = mix(color,ColorR,(1.0 - mask) * gradient);
    // color = vec3(gradient);

    vec2 uv = vUv;
    // uv.x = fractal_glass(uv.x);
    vec3 color = vec3(0.0);
    // vec2 mouse = vec2(sin(uTime),cos(uTime)) * .5 + .5;

    // glass intensity
    // float fractal = fractalGlass(uv, 10.0);

    // where effect should appear
    // float mask = cornerMask(uv);

    // apply distortion
    // uv += fractal * 0.5;

    float noised = pnoise(vec3((uv - uMouse * .05) * uFreq * .1, uTime * .1 * uSpeed));
    float n2 = pnoise(vec3((vec2(100.0) + uv) * uFreq * .1, uTime * .1 * uSpeed));
    float n3 = pnoise(vec3((vec2(noised, n2) * uFreq + uv) * uFreq * .1, uTime * .1 * uSpeed));

    color = vec3(n3);

    color = mix(uColorB, uColorA, abs(noised + n2));

    gl_FragColor = vec4(color, 1.0);
}