// SPDX-License-Identifier: CC0-1.0
varying vec2 vUv;

uniform float uTime;
uniform float uFreq;
uniform float uScale;
uniform float uSpeed;
uniform float uContrast;
uniform float uCurveAmp;
uniform float uCurveOff;

vec3 ColorR = vec3(0.0, 0.54, 0.64);
vec3 ColorA = vec3(0.11, 0.28, 0.86);
vec3 ColorB = vec3(0.0);

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

// --------------------------------------------------
// MAIN
// --------------------------------------------------
void main() {
    // 1️⃣ UV scaling (zoom control)
    // vec2 uv = (vUv - 0.5) + 0.5;
    vec2 uv = vUv + uTime * .1;
    vec3 pos = uv_to_cartesian3d(uv * uFreq * .1);

    // 2️⃣ Speed controlled time
    float time = uTime * uSpeed / 10.0;

    // 3️⃣ Multiple rotating planes
    float accum = 0.0;
    float total = 0.0;

    for(int i = 0; i < 4; i++) {
        if(float(i) >= uFreq * .1)
            break;

        float seed = float(i) * 10.0;
        float t = time + seed;

        vec4 q1 = randomQuaternion(floor(t));
        vec4 q2 = randomQuaternion(floor(t + 1.0));
        vec4 quat = safeQuatMix(q1, q2, fract(t));

        float d = distanceToPlane(pos, quat);
        float g = d * 0.5 + 0.5; // -1..1 → 0..1

        accum += g;
        total += 1.0;
    }

    float gradient = accum / total;

    // 4️⃣ Contrast control
    gradient = pow(gradient, uContrast);
    gradient = smoothstep(0.0, 1.0, gradient);

    // 5️⃣ Final color (linear workflow)
    // vec3 color = mix(toLinear(ColorA), toLinear(ColorB), gradient);
    vec3 color = mix(ColorA, ColorB, gradient);
    float PI = 3.14159265;
    float curve = sin(PI * vUv.x + uTime) * .04 * sin(uTime) * .1 + uCurveOff;   // peak height = 0.3

    float mask = smoothstep(curve - 0.2, curve + 0.2, 1.0 - vUv.y);

    color = mix(color,ColorR,(1.0 - mask) * gradient);
    // color = vec3(gradient);


    gl_FragColor = vec4(color, 1.0);
}