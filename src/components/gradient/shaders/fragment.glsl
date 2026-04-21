precision highp float;

varying vec2 vUv;
uniform float uTime;
uniform float uScale;
uniform float uFreq;
uniform float uSpeed;
uniform vec2  uResolution;

// ── palette ──────────────────────────────────────────────────────────────────
const vec3 BLACK    = vec3(0.00, 0.00, 0.00);
const vec3 BLUE     = vec3(0.02, 0.10, 0.80);
const vec3 SKYBLUE  = vec3(0.00, 0.78, 1.00);

// ─────────────────────────────────────────────────────────────────────────────
//  3D PERLIN NOISE  —  classic implementation for GLSL (fragment / vertex)
//
//  Usage:
//    float n = perlin(vec3(x, y, z));          // returns roughly [-1, 1]
//    float n = perlin01(vec3(x, y, z));         // remapped to  [ 0, 1]
//    float n = fbm(vec3(x, y, z), octaves);    // fractal brownian motion
//
//  No uniforms required — fully self-contained.
// ─────────────────────────────────────────────────────────────────────────────

// ── permutation helpers ───────────────────────────────────────────────────────

// Fast integer hash — bijective on [0,255]
float perm(float x) {
    // Polynomial approximation of the classic 256-entry permutation table.
    // Good enough for visual noise; swap for a texture lookup if you need
    // strict Perlin reproducibility.
    x = mod(x, 256.0);
    // Ken Perlin's original table packed into a single expression
    // via a degree-6 polynomial fit.  Error < 0.5 on [0,255].
    float v = x * (x * (x * (x * (x * (x * 0.0000051757
              - 0.0014200934) + 0.1476821408)
              - 7.3562927246) + 182.3819885254)
              - 1771.4073486328) + 5765.6098632813;
    return mod(floor(v + 0.5), 256.0);
}

float P(float x)             { return perm(x); }
float P(float x, float y)    { return perm(P(x) + y); }
float P(float x, float y, float z) { return perm(P(x, y) + z); }

// ── gradient selection ───────────────────────────────────────────────────────
// Maps a hash value to one of 12 gradient directions (unit cube edges)
vec3 grad3(float h) {
    h = mod(h, 12.0);
    // 12 edge midpoints of a cube
    if (h < 1.0)  return vec3( 1.0,  1.0,  0.0);
    if (h < 2.0)  return vec3(-1.0,  1.0,  0.0);
    if (h < 3.0)  return vec3( 1.0, -1.0,  0.0);
    if (h < 4.0)  return vec3(-1.0, -1.0,  0.0);
    if (h < 5.0)  return vec3( 1.0,  0.0,  1.0);
    if (h < 6.0)  return vec3(-1.0,  0.0,  1.0);
    if (h < 7.0)  return vec3( 1.0,  0.0, -1.0);
    if (h < 8.0)  return vec3(-1.0,  0.0, -1.0);
    if (h < 9.0)  return vec3( 0.0,  1.0,  1.0);
    if (h < 10.0) return vec3( 0.0, -1.0,  1.0);
    if (h < 11.0) return vec3( 0.0,  1.0, -1.0);
    return              vec3( 0.0, -1.0, -1.0);
}

// ── quintic fade (Perlin's "improved" curve) ──────────────────────────────────
vec3 fade(vec3 t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

// ─────────────────────────────────────────────────────────────────────────────
//  perlin(p)  →  [-1, 1]  (approximately; extreme corners can reach ±√(2/4))
// ─────────────────────────────────────────────────────────────────────────────
float perlin(vec3 p) {
    // Integer cell
    vec3 i = floor(p);
    // Fractional position inside cell
    vec3 f = fract(p);

    // Smooth interpolation weights
    vec3 u = fade(f);

    // Hash the 8 corners of the unit cube
    float h000 = P(i.x,       i.y,       i.z      );
    float h100 = P(i.x+1.0,   i.y,       i.z      );
    float h010 = P(i.x,       i.y+1.0,   i.z      );
    float h110 = P(i.x+1.0,   i.y+1.0,   i.z      );
    float h001 = P(i.x,       i.y,       i.z+1.0  );
    float h101 = P(i.x+1.0,   i.y,       i.z+1.0  );
    float h011 = P(i.x,       i.y+1.0,   i.z+1.0  );
    float h111 = P(i.x+1.0,   i.y+1.0,   i.z+1.0  );

    // Gradient dot products for all 8 corners
    float d000 = dot(grad3(h000), f - vec3(0.0, 0.0, 0.0));
    float d100 = dot(grad3(h100), f - vec3(1.0, 0.0, 0.0));
    float d010 = dot(grad3(h010), f - vec3(0.0, 1.0, 0.0));
    float d110 = dot(grad3(h110), f - vec3(1.0, 1.0, 0.0));
    float d001 = dot(grad3(h001), f - vec3(0.0, 0.0, 1.0));
    float d101 = dot(grad3(h101), f - vec3(1.0, 0.0, 1.0));
    float d011 = dot(grad3(h011), f - vec3(0.0, 1.0, 1.0));
    float d111 = dot(grad3(h111), f - vec3(1.0, 1.0, 1.0));

    // Trilinear interpolation
    return mix(
        mix(mix(d000, d100, u.x), mix(d010, d110, u.x), u.y),
        mix(mix(d001, d101, u.x), mix(d011, d111, u.x), u.y),
        u.z
    );
}

// ─────────────────────────────────────────────────────────────────────────────
//  perlin01(p)  →  [0, 1]
// ─────────────────────────────────────────────────────────────────────────────
float perlin01(vec3 p) {
    return perlin(p) * 0.5 + 0.5;
}

// ─────────────────────────────────────────────────────────────────────────────
//  fbm  —  fractal Brownian motion stacking N octaves of perlin noise
//
//  octaves    : number of layers (4–8 is typical)
//  lacunarity : frequency multiplier per octave (default 2.0)
//  gain       : amplitude multiplier per octave (default 0.5)
//
//  Returns roughly [-1, 1] (use fbm01 for [0,1])
// ─────────────────────────────────────────────────────────────────────────────
float fbm(vec3 p, int octaves, float lacunarity, float gain) {
    float value    = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 8; i++) {          // loop bound must be a constant in GLSL ES
        if (i >= octaves) break;
        value     += amplitude * perlin(p * frequency);
        frequency *= lacunarity;
        amplitude *= gain;
    }
    return value;
}

// Convenience overload with defaults
float fbm(vec3 p, int octaves) {
    return fbm(p, octaves, 2.0, 0.5);
}

float fbm(vec3 p) {
    return fbm(p, 6, 2.0, 0.5);
}

float fbm01(vec3 p, int octaves) {
    return fbm(p, octaves) * 0.5 + 0.5;
}

float fbm01(vec3 p) {
    return fbm01(p, 6);
}

// ─────────────────────────────────────────────────────────────────────────────
//  turbulence  —  sum of |perlin| gives a "boiling" look
// ─────────────────────────────────────────────────────────────────────────────
float turbulence(vec3 p, int octaves) {
    float value    = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 8; i++) {
        if (i >= octaves) break;
        value     += amplitude * abs(perlin(p * frequency));
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

float turbulence(vec3 p) {
    return turbulence(p, 6);
}

// ─────────────────────────────────────────────────────────────────────────────
//  ridged  —  1 - |perlin|  gives sharp mountain ridges
// ─────────────────────────────────────────────────────────────────────────────
float ridged(vec3 p, int octaves) {
    float value    = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    float prev      = 1.0;
    for (int i = 0; i < 8; i++) {
        if (i >= octaves) break;
        float n    = 1.0 - abs(perlin(p * frequency));
        n         *= n * prev;
        value     += amplitude * n;
        prev       = n;
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

float ridged(vec3 p) {
    return ridged(p, 6);
}

// ─────────────────────────────────────────────────────────────────────────────
//  EXAMPLE USAGE in your fragment shader main():
//
//  uniform float uTime;
//  uniform vec2  u_resolution;

 void main() {
     vec2 uv  = vUv;
     vec3 pos = vec3(uv * 3.0, uTime * 0.2);   // z = time → animation

     float n  = fbm01(pos, 6);                   // [0,1]
     float t  = turbulence(pos);                 // boiling clouds
     float r  = ridged(pos);                     // sharp ridges

     // mix three colours with the noise value
     vec3 col = mix(vec3(0.0), vec3(0.02,0.10,0.80), n);
     col      = mix(col,       vec3(0.00,0.78,1.00), pow(n, 3.0));

     n = perlin(vec3(uv * uFreq ,uTime * uSpeed)) * uScale;
     col = vec3(n);

     gl_FragColor = vec4(col, 1.0);
 }
// ─────────────────────────────────────────────────────────────────────────────


// ── smooth noise helpers ──────────────────────────────────────────────────────
float hash(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
}

float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);   // smoothstep curve

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, u.x),
               mix(c, d, u.x), u.y);
}

// 4-octave fbm
float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2  shift = vec2(100.0);
    mat2  rot   = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 4; i++) {
        v += a * smoothNoise(p);
        p  = rot * p * 2.1 + shift;
        a *= 0.5;
    }
    return v;
}

// void main() {
//     vec2 uv = vUv;

//     // flip Y so top = cyan like the reference
//     uv.y = 1.0 - uv.y;

//     float t = uTime * 0.18;   // overall speed — change to taste

//     // ── animated warp ────────────────────────────────────────────────────────
//     // Two fbm layers offset in time to create the slow fluid "light sweep"
//     vec2 q = vec2(
//         fbm(uv + vec2(0.00, 0.00) + t * 0.22),
//         fbm(uv + vec2(5.20, 1.30) + t * 0.18)
//     );

//     vec2 r = vec2(
//         fbm(uv + 3.8 * q + vec2(1.70, 9.20) + t * 0.12),
//         fbm(uv + 3.8 * q + vec2(8.30, 2.80) + t * 0.10)
//     );

//     float f = fbm(uv + 3.2 * r + t * 0.08);
//     f = smoothstep(0.0, 1.0, f);

//     // ── spotlight / beam effect ───────────────────────────────────────────────
//     // Bright diagonal band across the top-right, animated slowly
//     float beamAngle = sin(t * 0.4) * 0.18;           // subtle sway
//     float beam = dot(uv, vec2(sin(beamAngle + 0.5),
//                                cos(beamAngle + 0.5)));
//     beam = smoothstep(0.55, 1.0, beam);               // tight bright zone
//     beam *= 0.85;                                     // intensity cap

//     // Top-edge cyan bar (the near-white line at very top in the reference)
//     float topBar = smoothstep(0.06, 0.0, uv.y)        // thin strip at top
//                  * (0.6 + 0.4 * sin(t + uv.x * 3.14));

//     // ── left-side deep black shadow ───────────────────────────────────────────
//     // Large dark corner that shifts slowly
//     float shadowX = 0.38 + 0.06 * sin(t * 0.3);
//     float shadow  = smoothstep(shadowX + 0.30, shadowX - 0.05, uv.x)
//                   * smoothstep(0.0, 0.65, uv.y);       // fades toward top
//     shadow = pow(shadow, 1.4);

//     // ── bottom-right secondary glow ───────────────────────────────────────────
//     vec2  glowCentre = vec2(0.85 + 0.06*sin(t*0.55), 0.80 + 0.05*cos(t*0.42));
//     float glow2      = 1.0 - length(uv - glowCentre) * 1.6;
//     glow2 = clamp(glow2, 0.0, 1.0);
//     glow2 = pow(glow2, 2.2) * 0.7;

//     // ── colour mixing ─────────────────────────────────────────────────────────
//     // Start from a dark-blue base
//     vec3 col = mix(BLACK, BLUE, f * 0.85);

//     // Add the sweeping beam (blue → skyblue)
//     col = mix(col, SKYBLUE, beam);

//     // Add secondary right-side glow
//     col = mix(col, SKYBLUE * 0.9, glow2);

//     // Top cyan bar
//     col = mix(col, SKYBLUE, topBar);

//     // Crush the left shadow region toward black
//     col = mix(col, BLACK, shadow);

//     // Subtle overall brightness breathe
//     float breathe = 0.92 + 0.08 * sin(t * 0.7);
//     col *= breathe;

//     // Soft vignette (darkens edges all round)
//     vec2  vig   = (uv - 0.5) * 2.0;
//     float vigV  = 1.0 - dot(vig * vec2(0.5, 0.7), vig * vec2(0.5, 0.7));
//     vigV = clamp(vigV, 0.0, 1.0);
//     vigV = pow(vigV, 0.55);
//     col *= mix(0.35, 1.0, vigV);

//     // Final gamma & clamp
//     col = pow(clamp(col, 0.0, 1.0), vec3(0.90));

//     gl_FragColor = vec4(col, 1.0);
// }
